import { modelRegistryFromEnv } from '../ai-agent/model-registry';

export type AiProviderState = 'configured' | 'missing' | 'invalid';

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
}

const DEFAULT_TIMEOUT_MS = 60_000;

export function inspectRuntimeStatus(env: NodeJS.ProcessEnv = process.env): RuntimeStatus {
  try {
    const registry = modelRegistryFromEnv(env);
    if (!registry) {
      return {
        service: 'ziwei-ai-platform',
        status: 'ok',
        nodeEnv: env.NODE_ENV?.trim() || 'unknown',
        aiProvider: {
          state: 'missing',
          timeoutMs: DEFAULT_TIMEOUT_MS,
          profileCount: 0,
          defaultProfileId: null,
        },
      };
    }

    return {
      service: 'ziwei-ai-platform',
      status: 'ok',
      nodeEnv: env.NODE_ENV?.trim() || 'unknown',
      aiProvider: {
        state: 'configured',
        timeoutMs: registry.defaultTimeoutMs,
        profileCount: registry.listPublicProfiles().length,
        defaultProfileId: registry.defaultProfileId,
      },
    };
  } catch {
    return {
      service: 'ziwei-ai-platform',
      status: 'degraded',
      nodeEnv: env.NODE_ENV?.trim() || 'unknown',
      aiProvider: {
        state: 'invalid',
        timeoutMs: DEFAULT_TIMEOUT_MS,
        profileCount: 0,
        defaultProfileId: null,
      },
    };
  }
}
