import type { ModelProvider } from './index';
import {
  normalizeModelId,
  resolveModelApiStyle,
  SwitchableModelProvider,
  type ModelApiStyle,
} from './runtime-provider';

const PROFILE_ID_RE = /^[a-z0-9][a-z0-9_-]{0,31}$/;
const ENV_NAME_RE = /^[A-Z][A-Z0-9_]{0,63}$/;
const DEFAULT_TIMEOUT_MS = 60_000;
const MIN_TIMEOUT_MS = 1_000;
const MAX_TIMEOUT_MS = 300_000;
const MAX_PROFILES = 20;
const MAX_PROFILES_JSON_LENGTH = 20_000;

export interface PublicModelProfile {
  id: string;
  label: string;
  model: string;
  apiStyle: Exclude<ModelApiStyle, 'auto'>;
  isDefault: boolean;
}

interface ResolvedModelProfile {
  id: string;
  label: string;
  baseUrl: string;
  apiKey: string;
  model: string;
  apiStyle: ModelApiStyle;
  timeoutMs: number;
}

interface RawModelProfile {
  id?: unknown;
  label?: unknown;
  model?: unknown;
  baseUrl?: unknown;
  apiKeyEnv?: unknown;
  apiStyle?: unknown;
  timeoutMs?: unknown;
  apiKey?: unknown;
}

export interface ModelProfileSelection {
  profile: PublicModelProfile;
  provider: ModelProvider;
}

export class UnknownModelProfileError extends Error {
  constructor(readonly profileId: string) {
    super(`unknown model profile: ${profileId}`);
    this.name = 'UnknownModelProfileError';
  }
}

function parseApiStyle(value: unknown, fieldName: string): ModelApiStyle {
  const style = typeof value === 'string' ? value.trim() : 'auto';
  if (style === 'auto' || style === 'responses' || style === 'chat-completions' || style === 'messages') return style;
  throw new RangeError(`${fieldName} must be auto, responses, chat-completions, or messages`);
}

function parseTimeout(value: unknown, fieldName: string, fallback: number): number {
  if (value === undefined || value === null || value === '') return fallback;
  const timeout = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(timeout) || timeout < MIN_TIMEOUT_MS || timeout > MAX_TIMEOUT_MS) {
    throw new RangeError(`${fieldName} must be between ${MIN_TIMEOUT_MS} and ${MAX_TIMEOUT_MS}`);
  }
  return timeout;
}

function validateBaseUrl(value: string, fieldName: string): string {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new TypeError(`${fieldName} must be a valid absolute URL`);
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new TypeError(`${fieldName} must use http or https`);
  }
  return value.replace(/\/+$/, '');
}

function requiredText(value: unknown, fieldName: string, maxLength: number): string {
  if (typeof value !== 'string') throw new TypeError(`${fieldName} must be a string`);
  const text = value.trim();
  if (!text || text.length > maxLength) throw new RangeError(`${fieldName} must be 1-${maxLength} characters`);
  return text;
}

function parseProfilesJson(value: string | undefined): RawModelProfile[] {
  const text = value?.trim();
  if (!text) return [];
  if (text.length > MAX_PROFILES_JSON_LENGTH) throw new RangeError('ZIWEI_AI_PROFILES_JSON is too large');

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new SyntaxError('ZIWEI_AI_PROFILES_JSON must be valid JSON');
  }
  if (!Array.isArray(parsed)) throw new TypeError('ZIWEI_AI_PROFILES_JSON must be a JSON array');
  if (parsed.length > MAX_PROFILES) throw new RangeError(`ZIWEI_AI_PROFILES_JSON supports at most ${MAX_PROFILES} profiles`);
  return parsed as RawModelProfile[];
}

function toPublic(profile: ResolvedModelProfile, defaultProfileId: string): PublicModelProfile {
  return {
    id: profile.id,
    label: profile.label,
    model: normalizeModelId(profile.model),
    apiStyle: resolveModelApiStyle(profile.baseUrl, profile.model, profile.apiStyle),
    isDefault: profile.id === defaultProfileId,
  };
}

export class ServerModelRegistry {
  readonly defaultProfileId: string;
  readonly defaultTimeoutMs: number;
  private readonly profilesById: Map<string, ResolvedModelProfile>;

  constructor(profiles: ResolvedModelProfile[], defaultProfileId: string) {
    if (profiles.length === 0) throw new TypeError('model registry requires at least one profile');
    this.profilesById = new Map(profiles.map((profile) => [profile.id, profile]));
    const defaultProfile = this.profilesById.get(defaultProfileId);
    if (!defaultProfile) throw new RangeError(`ZIWEI_AI_DEFAULT_PROFILE references unknown profile: ${defaultProfileId}`);
    this.defaultProfileId = defaultProfileId;
    this.defaultTimeoutMs = defaultProfile.timeoutMs;
  }

  listPublicProfiles(): PublicModelProfile[] {
    return [...this.profilesById.values()].map((profile) => toPublic(profile, this.defaultProfileId));
  }

  select(profileId?: string): ModelProfileSelection {
    const id = profileId?.trim() || this.defaultProfileId;
    const config = this.profilesById.get(id);
    if (!config) throw new UnknownModelProfileError(id);
    return {
      profile: toPublic(config, this.defaultProfileId),
      provider: new SwitchableModelProvider({
        baseUrl: config.baseUrl,
        apiKey: config.apiKey,
        model: config.model,
        apiStyle: config.apiStyle,
        timeoutMs: config.timeoutMs,
      }),
    };
  }
}

export function modelRegistryFromEnv(env: NodeJS.ProcessEnv = process.env): ServerModelRegistry | null {
  const legacyBaseUrl = env.ZIWEI_AI_BASE_URL?.trim() ?? '';
  const legacyApiKey = env.ZIWEI_AI_API_KEY?.trim() ?? '';
  const legacyModel = env.ZIWEI_AI_MODEL?.trim() ?? '';
  const legacyParts = [legacyBaseUrl, legacyApiKey, legacyModel].filter(Boolean).length;
  if (legacyParts !== 0 && legacyParts !== 3) {
    throw new TypeError('legacy Ziwei AI provider configuration is partial');
  }

  const globalTimeout = parseTimeout(env.ZIWEI_AI_TIMEOUT_MS?.trim(), 'ZIWEI_AI_TIMEOUT_MS', DEFAULT_TIMEOUT_MS);
  const legacyApiStyle = parseApiStyle(env.ZIWEI_AI_API_STYLE, 'ZIWEI_AI_API_STYLE');
  const rawProfiles = parseProfilesJson(env.ZIWEI_AI_PROFILES_JSON);
  if (legacyParts === 0 && rawProfiles.length === 0) {
    if (env.ZIWEI_AI_DEFAULT_PROFILE?.trim()) throw new RangeError('ZIWEI_AI_DEFAULT_PROFILE requires at least one profile');
    return null;
  }

  const profiles: ResolvedModelProfile[] = [];
  const seenIds = new Set<string>();

  if (legacyParts === 3) {
    const baseUrl = validateBaseUrl(legacyBaseUrl, 'ZIWEI_AI_BASE_URL');
    const model = requiredText(legacyModel, 'ZIWEI_AI_MODEL', 120);
    profiles.push({
      id: 'default',
      label: normalizeModelId(model),
      baseUrl,
      apiKey: legacyApiKey,
      model,
      apiStyle: legacyApiStyle,
      timeoutMs: globalTimeout,
    });
    seenIds.add('default');
  }

  rawProfiles.forEach((raw, index) => {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new TypeError(`profile[${index}] must be an object`);
    if (raw.apiKey !== undefined) throw new TypeError(`profile[${index}] must not contain raw apiKey; use apiKeyEnv`);

    const id = requiredText(raw.id, `profile[${index}].id`, 32);
    if (!PROFILE_ID_RE.test(id)) throw new RangeError(`profile[${index}].id has invalid characters`);
    if (seenIds.has(id)) throw new RangeError(`duplicate model profile id: ${id}`);

    const model = requiredText(raw.model, `profile[${index}].model`, 120);
    const label = raw.label === undefined
      ? normalizeModelId(model)
      : requiredText(raw.label, `profile[${index}].label`, 64);

    const baseUrlText = raw.baseUrl === undefined
      ? legacyBaseUrl
      : requiredText(raw.baseUrl, `profile[${index}].baseUrl`, 500);
    if (!baseUrlText) throw new TypeError(`profile[${index}] requires baseUrl or legacy ZIWEI_AI_BASE_URL`);
    const baseUrl = validateBaseUrl(baseUrlText, `profile[${index}].baseUrl`);

    let apiKey = legacyApiKey;
    if (raw.apiKeyEnv !== undefined) {
      const apiKeyEnv = requiredText(raw.apiKeyEnv, `profile[${index}].apiKeyEnv`, 64);
      if (!ENV_NAME_RE.test(apiKeyEnv)) throw new RangeError(`profile[${index}].apiKeyEnv is not a valid environment variable name`);
      apiKey = env[apiKeyEnv]?.trim() ?? '';
      if (!apiKey) throw new TypeError(`profile[${index}] references missing server secret ${apiKeyEnv}`);
    }
    if (!apiKey) throw new TypeError(`profile[${index}] requires apiKeyEnv or legacy ZIWEI_AI_API_KEY`);

    profiles.push({
      id,
      label,
      baseUrl,
      apiKey,
      model,
      apiStyle: parseApiStyle(raw.apiStyle, `profile[${index}].apiStyle`),
      timeoutMs: parseTimeout(raw.timeoutMs, `profile[${index}].timeoutMs`, globalTimeout),
    });
    seenIds.add(id);
  });

  const requestedDefault = env.ZIWEI_AI_DEFAULT_PROFILE?.trim();
  const defaultProfileId = requestedDefault || (seenIds.has('default') ? 'default' : profiles[0]!.id);
  if (!PROFILE_ID_RE.test(defaultProfileId)) throw new RangeError('ZIWEI_AI_DEFAULT_PROFILE has invalid characters');

  return new ServerModelRegistry(profiles, defaultProfileId);
}
