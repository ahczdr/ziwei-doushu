import { modelRegistryFromEnv } from '../ai-agent/model-registry';
import { interpretSafetyFromEnv } from './security';

export type AiProviderState = 'configured' | 'missing' | 'invalid';
export type InterpretSafetyState = 'configured' | 'invalid';

export interface RuntimeStatus {
  service: 'ziwei-ai-platform';
  status: 'ok' | 'degraded';
  nodeEnv: string;
  aiProvider: {
    state: AiProviderState;
    timeoutMs: number;
    profileCount: number;
    defaultProfileId: string | null;
  };
  interpretSafety: {
    state: InterpretSafetyState;
    enabled: boolean;
    maxInflight: number;
    maxProviderCalls: number;
    allowedOriginCount: number;
  };
}

const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_INFLIGHT = 2;
const DEFAULT_MAX_PROVIDER_CALLS = 2;

export function inspectRuntimeStatus(env: NodeJS.ProcessEnv = process.env): RuntimeStatus {
  let providerState: AiProviderState = 'missing';
  let timeoutMs = DEFAULT_TIMEOUT_MS;
  let profileCount = 0;
  let defaultProfileId: string | null = null;

  try {
    const registry = modelRegistryFromEnv(env);
    if (registry) {
      providerState = 'configured';
      timeoutMs = registry.defaultTimeoutMs;
      profileCount = registry.listPublicProfiles().length;
      defaultProfileId = registry.defaultProfileId;
    }
  } catch {
    providerState = 'invalid';
  }

  let interpretSafety: RuntimeStatus['interpretSafety'];
  try {
    const safety = interpretSafetyFromEnv(env);
    interpretSafety = {
      state: 'configured',
      enabled: safety.enabled,
      maxInflight: safety.maxInflight,
      maxProviderCalls: safety.maxProviderCalls,
      allowedOriginCount: safety.allowedOrigins.length,
    };
  } catch {
    interpretSafety = {
      state: 'invalid',
      enabled: false,
      maxInflight: DEFAULT_MAX_INFLIGHT,
      maxProviderCalls: DEFAULT_MAX_PROVIDER_CALLS,
      allowedOriginCount: 0,
    };
  }

  return {
    service: 'ziwei-ai-platform',
    status: providerState === 'invalid' || interpretSafety.state === 'invalid' ? 'degraded' : 'ok',
    nodeEnv: env.NODE_ENV?.trim() || 'unknown',
    aiProvider: {
      state: providerState,
      timeoutMs,
      profileCount,
      defaultProfileId,
    },
    interpretSafety,
  };
}
