import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';

export type DurableQuotaState = 'disabled' | 'configured' | 'missing' | 'invalid';
export type QuotaDenyReason = 'identity-daily-limit' | 'global-request-limit' | 'global-provider-call-limit';

export interface DurableQuotaConfig {
  enabled: boolean;
  userDailyLimit: number;
  globalDailyRequestLimit: number;
  globalDailyProviderCallLimit: number;
  identitySecret: string | null;
  redisUrl: string | null;
  redisToken: string | null;
}

export interface QuotaIdentity {
  key: string;
  setCookie: string | null;
}

export interface QuotaAcquireInput {
  identityKey: string;
  dayKey: string;
  userDailyLimit: number;
  globalDailyRequestLimit: number;
  globalDailyProviderCallLimit: number;
  reserveProviderCalls: number;
  expiresAtEpochSeconds: number;
}

export interface QuotaAcquireResult {
  allowed: boolean;
  reason: QuotaDenyReason | null;
  userRequests: number;
  globalRequests: number;
  globalProviderCalls: number;
}

export interface DurableQuotaStore {
  acquire(input: QuotaAcquireInput): Promise<QuotaAcquireResult>;
  refundProviderCalls(dayKey: string, count: number, expiresAtEpochSeconds: number): Promise<void>;
}

export class DurableQuotaConfigError extends Error {
  constructor(readonly state: Exclude<DurableQuotaState, 'disabled' | 'configured'>, message: string) {
    super(message);
    this.name = 'DurableQuotaConfigError';
  }
}

export class DurableQuotaStoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DurableQuotaStoreError';
  }
}

const COOKIE_NAME = 'ziwei_quota';
const COOKIE_MAX_AGE_SECONDS = 31_536_000;
const DEFAULT_USER_DAILY_LIMIT = 20;
const DEFAULT_GLOBAL_DAILY_REQUEST_LIMIT = 100;
const DEFAULT_GLOBAL_DAILY_PROVIDER_CALL_LIMIT = 150;
const MIN_IDENTITY_SECRET_LENGTH = 32;

function parseBoolean(name: string, value: string | undefined, fallback: boolean): boolean {
  const normalized = value?.trim().toLowerCase();
  if (!normalized) return fallback;
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  throw new RangeError(`${name} must be true/false`);
}

function parseInteger(name: string, value: string | undefined, fallback: number, min: number, max: number): number {
  const normalized = value?.trim();
  if (!normalized) return fallback;
  const parsed = Number(normalized);
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    throw new RangeError(`${name} must be an integer between ${min} and ${max}`);
  }
  return parsed;
}

function firstNonEmpty(...values: Array<string | undefined>): string | null {
  for (const value of values) {
    if (value?.trim()) return value.trim();
  }
  return null;
}

export function durableQuotaFromEnv(env: NodeJS.ProcessEnv = process.env): DurableQuotaConfig {
  const enabled = parseBoolean('ZIWEI_AI_DURABLE_QUOTA_ENABLED', env.ZIWEI_AI_DURABLE_QUOTA_ENABLED, false);
  const config: DurableQuotaConfig = {
    enabled,
    userDailyLimit: parseInteger('ZIWEI_AI_USER_DAILY_LIMIT', env.ZIWEI_AI_USER_DAILY_LIMIT, DEFAULT_USER_DAILY_LIMIT, 1, 10_000),
    globalDailyRequestLimit: parseInteger('ZIWEI_AI_GLOBAL_DAILY_REQUEST_LIMIT', env.ZIWEI_AI_GLOBAL_DAILY_REQUEST_LIMIT, DEFAULT_GLOBAL_DAILY_REQUEST_LIMIT, 1, 1_000_000),
    globalDailyProviderCallLimit: parseInteger('ZIWEI_AI_GLOBAL_DAILY_PROVIDER_CALL_LIMIT', env.ZIWEI_AI_GLOBAL_DAILY_PROVIDER_CALL_LIMIT, DEFAULT_GLOBAL_DAILY_PROVIDER_CALL_LIMIT, 1, 2_000_000),
    identitySecret: firstNonEmpty(env.ZIWEI_AI_IDENTITY_SECRET),
    redisUrl: firstNonEmpty(env.UPSTASH_REDIS_REST_URL, env.KV_REST_API_URL),
    redisToken: firstNonEmpty(env.UPSTASH_REDIS_REST_TOKEN, env.KV_REST_API_TOKEN),
  };
  if (!enabled) return config;
  if (!config.identitySecret || !config.redisUrl || !config.redisToken) {
    throw new DurableQuotaConfigError('missing', 'durable quota requires identity secret and Redis REST credentials');
  }
  if (config.identitySecret.length < MIN_IDENTITY_SECRET_LENGTH) {
    throw new DurableQuotaConfigError('invalid', `ZIWEI_AI_IDENTITY_SECRET must be at least ${MIN_IDENTITY_SECRET_LENGTH} characters`);
  }
  let url: URL;
  try {
    url = new URL(config.redisUrl);
  } catch {
    throw new DurableQuotaConfigError('invalid', 'Redis REST URL must be an absolute HTTPS URL');
  }
  if (url.protocol !== 'https:') {
    throw new DurableQuotaConfigError('invalid', 'Redis REST URL must use HTTPS');
  }
  return config;
}

export function inspectDurableQuota(env: NodeJS.ProcessEnv = process.env): {
  state: DurableQuotaState;
  enabled: boolean;
  userDailyLimit: number;
  globalDailyRequestLimit: number;
  globalDailyProviderCallLimit: number;
  backend: 'upstash-rest' | 'none';
} {
  try {
    const config = durableQuotaFromEnv(env);
    return {
      state: config.enabled ? 'configured' : 'disabled',
      enabled: config.enabled,
      userDailyLimit: config.userDailyLimit,
      globalDailyRequestLimit: config.globalDailyRequestLimit,
      globalDailyProviderCallLimit: config.globalDailyProviderCallLimit,
      backend: config.enabled ? 'upstash-rest' : 'none',
    };
  } catch (error) {
    const fallback = {
      enabled: true,
      userDailyLimit: DEFAULT_USER_DAILY_LIMIT,
      globalDailyRequestLimit: DEFAULT_GLOBAL_DAILY_REQUEST_LIMIT,
      globalDailyProviderCallLimit: DEFAULT_GLOBAL_DAILY_PROVIDER_CALL_LIMIT,
      backend: 'none' as const,
    };
    if (error instanceof DurableQuotaConfigError) return { ...fallback, state: error.state };
    return { ...fallback, state: 'invalid' };
  }
}

function parseCookies(header: string | null): Map<string, string> {
  const result = new Map<string, string>();
  if (!header) return result;
  for (const part of header.split(';')) {
    const index = part.indexOf('=');
    if (index <= 0) continue;
    result.set(part.slice(0, index).trim(), part.slice(index + 1).trim());
  }
  return result;
}

function signature(secret: string, payload: string): string {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function verifyCookie(secret: string, value: string | undefined): string | null {
  if (!value) return null;
  const match = /^v1\.([0-9a-f-]{36})\.([A-Za-z0-9_-]+)$/.exec(value);
  if (!match) return null;
  const payload = `v1.${match[1]}`;
  return safeEqual(signature(secret, payload), match[2]) ? match[1] : null;
}

export function resolveQuotaIdentity(request: Request, config: DurableQuotaConfig): QuotaIdentity {
  if (!config.enabled || !config.identitySecret) throw new DurableQuotaConfigError('missing', 'durable quota identity is unavailable');
  const cookies = parseCookies(request.headers.get('cookie'));
  const existingId = verifyCookie(config.identitySecret, cookies.get(COOKIE_NAME));
  const rawId = existingId ?? randomUUID();
  const key = createHmac('sha256', config.identitySecret).update(`quota:${rawId}`).digest('hex').slice(0, 32);
  if (existingId) return { key, setCookie: null };
  const payload = `v1.${rawId}`;
  const value = `${payload}.${signature(config.identitySecret, payload)}`;
  return {
    key,
    setCookie: `${COOKIE_NAME}=${value}; Path=/; Max-Age=${COOKIE_MAX_AGE_SECONDS}; HttpOnly; Secure; SameSite=Lax`,
  };
}

export function utcQuotaWindow(now = new Date()): { dayKey: string; expiresAtEpochSeconds: number; retryAfterSeconds: number } {
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const nextDay = Date.UTC(year, now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0, 0);
  const retryAfterSeconds = Math.max(1, Math.ceil((nextDay - now.getTime()) / 1000));
  return {
    dayKey: `${year}${month}${day}`,
    expiresAtEpochSeconds: Math.floor(nextDay / 1000) + 86_400,
    retryAfterSeconds,
  };
}

const ACQUIRE_SCRIPT = `
#!lua flags=allow-key-locking
local userLimit = tonumber(ARGV[1])
local globalRequestLimit = tonumber(ARGV[2])
local globalCallLimit = tonumber(ARGV[3])
local reserveCalls = tonumber(ARGV[4])
local expiresAt = tonumber(ARGV[5])
local userCount = tonumber(redis.call('GET', KEYS[1]) or '0')
local requestCount = tonumber(redis.call('GET', KEYS[2]) or '0')
local callCount = tonumber(redis.call('GET', KEYS[3]) or '0')
if userCount >= userLimit then return {0, 1, userCount, requestCount, callCount} end
if requestCount >= globalRequestLimit then return {0, 2, userCount, requestCount, callCount} end
if callCount + reserveCalls > globalCallLimit then return {0, 3, userCount, requestCount, callCount} end
userCount = redis.call('INCR', KEYS[1])
requestCount = redis.call('INCR', KEYS[2])
callCount = redis.call('INCRBY', KEYS[3], reserveCalls)
redis.call('EXPIREAT', KEYS[1], expiresAt)
redis.call('EXPIREAT', KEYS[2], expiresAt)
redis.call('EXPIREAT', KEYS[3], expiresAt)
return {1, 0, userCount, requestCount, callCount}
`;

const REFUND_SCRIPT = `
#!lua flags=allow-key-locking
local refund = tonumber(ARGV[1])
local expiresAt = tonumber(ARGV[2])
if refund <= 0 then return tonumber(redis.call('GET', KEYS[1]) or '0') end
local current = tonumber(redis.call('GET', KEYS[1]) or '0')
local nextValue = current - refund
if nextValue < 0 then nextValue = 0 end
redis.call('SET', KEYS[1], nextValue)
redis.call('EXPIREAT', KEYS[1], expiresAt)
return nextValue
`;

function reasonFromCode(code: number): QuotaDenyReason | null {
  if (code === 1) return 'identity-daily-limit';
  if (code === 2) return 'global-request-limit';
  if (code === 3) return 'global-provider-call-limit';
  return null;
}

export class UpstashRestQuotaStore implements DurableQuotaStore {
  constructor(private readonly url: string, private readonly token: string, private readonly timeoutMs = 5_000) {}

  private async command(command: unknown[]): Promise<unknown> {
    let response: Response;
    try {
      response = await fetch(this.url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${this.token}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(command),
        signal: AbortSignal.timeout(this.timeoutMs),
      });
    } catch (error) {
      throw new DurableQuotaStoreError(`quota store request failed: ${error instanceof Error ? error.name : 'unknown'}`);
    }
    let payload: { result?: unknown; error?: string };
    try {
      payload = await response.json() as { result?: unknown; error?: string };
    } catch {
      throw new DurableQuotaStoreError(`quota store returned non-JSON response (${response.status})`);
    }
    if (!response.ok || payload.error) {
      throw new DurableQuotaStoreError(`quota store command failed (${response.status})`);
    }
    return payload.result;
  }

  async acquire(input: QuotaAcquireInput): Promise<QuotaAcquireResult> {
    const keys = [
      `ziwei:q:user:${input.dayKey}:${input.identityKey}`,
      `ziwei:q:requests:${input.dayKey}`,
      `ziwei:q:calls:${input.dayKey}`,
    ];
    const result = await this.command([
      'EVAL', ACQUIRE_SCRIPT, String(keys.length), ...keys,
      String(input.userDailyLimit),
      String(input.globalDailyRequestLimit),
      String(input.globalDailyProviderCallLimit),
      String(input.reserveProviderCalls),
      String(input.expiresAtEpochSeconds),
    ]);
    if (!Array.isArray(result) || result.length < 5) throw new DurableQuotaStoreError('quota store returned an invalid acquire result');
    const values = result.map((value) => Number(value));
    if (values.some((value) => !Number.isFinite(value))) throw new DurableQuotaStoreError('quota store returned non-numeric counters');
    return {
      allowed: values[0] === 1,
      reason: reasonFromCode(values[1]),
      userRequests: values[2],
      globalRequests: values[3],
      globalProviderCalls: values[4],
    };
  }

  async refundProviderCalls(dayKey: string, count: number, expiresAtEpochSeconds: number): Promise<void> {
    if (!Number.isInteger(count) || count <= 0) return;
    await this.command([
      'EVAL', REFUND_SCRIPT, '1', `ziwei:q:calls:${dayKey}`, String(count), String(expiresAtEpochSeconds),
    ]);
  }
}

export function quotaStoreFromConfig(config: DurableQuotaConfig): DurableQuotaStore {
  if (!config.enabled || !config.redisUrl || !config.redisToken) {
    throw new DurableQuotaConfigError('missing', 'durable quota store is unavailable');
  }
  return new UpstashRestQuotaStore(config.redisUrl, config.redisToken);
}
