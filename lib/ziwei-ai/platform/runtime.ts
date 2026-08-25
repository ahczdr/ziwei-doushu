export type AiProviderState = 'configured' | 'missing' | 'invalid';

export interface RuntimeStatus {
  service: 'ziwei-ai-platform';
  status: 'ok' | 'degraded';
  nodeEnv: string;
  aiProvider: {
    state: AiProviderState;
    timeoutMs: number;
  };
}

const DEFAULT_TIMEOUT_MS = 60_000;
const MIN_TIMEOUT_MS = 1_000;
const MAX_TIMEOUT_MS = 300_000;

export function inspectRuntimeStatus(env: NodeJS.ProcessEnv = process.env): RuntimeStatus {
  const baseUrl = env.ZIWEI_AI_BASE_URL?.trim() ?? '';
  const apiKey = env.ZIWEI_AI_API_KEY?.trim() ?? '';
  const model = env.ZIWEI_AI_MODEL?.trim() ?? '';
  const configuredParts = [baseUrl, apiKey, model].filter(Boolean).length;

  const timeoutText = env.ZIWEI_AI_TIMEOUT_MS?.trim() ?? '';
  const timeoutMs = timeoutText ? Number(timeoutText) : DEFAULT_TIMEOUT_MS;
  const timeoutValid = Number.isFinite(timeoutMs)
    && timeoutMs >= MIN_TIMEOUT_MS
    && timeoutMs <= MAX_TIMEOUT_MS;

  let state: AiProviderState;
  if (configuredParts === 0 && timeoutValid) {
    state = 'missing';
  } else if (configuredParts === 3 && timeoutValid) {
    state = 'configured';
  } else {
    state = 'invalid';
  }

  return {
    service: 'ziwei-ai-platform',
    status: state === 'invalid' ? 'degraded' : 'ok',
    nodeEnv: env.NODE_ENV?.trim() || 'unknown',
    aiProvider: {
      state,
      timeoutMs: timeoutValid ? timeoutMs : DEFAULT_TIMEOUT_MS,
    },
  };
}
