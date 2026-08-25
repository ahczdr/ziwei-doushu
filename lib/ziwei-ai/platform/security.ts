import type { ModelProvider, ModelRequest, ModelResponse } from '../ai-agent';

export interface InterpretSafetyConfig {
  enabled: boolean;
  maxInflight: number;
  maxProviderCalls: number;
  allowedOrigins: readonly string[];
}

export interface InterpretSlotLease {
  release(): void;
}

const DEFAULT_MAX_INFLIGHT = 2;
const DEFAULT_MAX_PROVIDER_CALLS = 2;
let inflightInterpretations = 0;

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

function parseAllowedOrigins(value: string | undefined): string[] {
  if (!value?.trim()) return [];
  const origins = value.split(',').map((item) => item.trim()).filter(Boolean).map((item) => {
    let url: URL;
    try {
      url = new URL(item);
    } catch {
      throw new RangeError('ZIWEI_AI_ALLOWED_ORIGINS must contain absolute HTTP(S) origins');
    }
    if (!['http:', 'https:'].includes(url.protocol) || url.origin !== item.replace(/\/$/, '')) {
      throw new RangeError('ZIWEI_AI_ALLOWED_ORIGINS entries must be origins without paths');
    }
    return url.origin;
  });
  return [...new Set(origins)];
}

export function interpretSafetyFromEnv(env: NodeJS.ProcessEnv = process.env): InterpretSafetyConfig {
  return {
    enabled: parseBoolean('ZIWEI_AI_INTERPRET_ENABLED', env.ZIWEI_AI_INTERPRET_ENABLED, true),
    maxInflight: parseInteger('ZIWEI_AI_MAX_INFLIGHT', env.ZIWEI_AI_MAX_INFLIGHT, DEFAULT_MAX_INFLIGHT, 1, 32),
    maxProviderCalls: parseInteger('ZIWEI_AI_MAX_PROVIDER_CALLS', env.ZIWEI_AI_MAX_PROVIDER_CALLS, DEFAULT_MAX_PROVIDER_CALLS, 1, 2),
    allowedOrigins: parseAllowedOrigins(env.ZIWEI_AI_ALLOWED_ORIGINS),
  };
}

export function isInterpretOriginAllowed(request: Request, config: InterpretSafetyConfig): boolean {
  if (config.allowedOrigins.length === 0) return true;
  const origin = request.headers.get('origin')?.trim();
  if (!origin) return true;
  try {
    return config.allowedOrigins.includes(new URL(origin).origin);
  } catch {
    return false;
  }
}

export function tryAcquireInterpretSlot(config: InterpretSafetyConfig): InterpretSlotLease | null {
  if (inflightInterpretations >= config.maxInflight) return null;
  inflightInterpretations += 1;
  let released = false;
  return {
    release() {
      if (released) return;
      released = true;
      inflightInterpretations = Math.max(0, inflightInterpretations - 1);
    },
  };
}

export class ProviderCallLimitError extends Error {
  constructor(readonly maxCalls: number) {
    super(`provider call budget exceeded (${maxCalls})`);
    this.name = 'ProviderCallLimitError';
  }
}

export class BudgetedModelProvider implements ModelProvider {
  readonly id: string;
  private calls = 0;

  constructor(
    private readonly delegate: ModelProvider,
    private readonly maxCalls: number,
  ) {
    this.id = delegate.id;
    if (!Number.isInteger(maxCalls) || maxCalls < 1 || maxCalls > 2) {
      throw new RangeError('maxCalls must be between 1 and 2');
    }
  }

  get callCount(): number {
    return this.calls;
  }

  async generate(request: ModelRequest): Promise<ModelResponse> {
    if (this.calls >= this.maxCalls) throw new ProviderCallLimitError(this.maxCalls);
    this.calls += 1;
    return this.delegate.generate(request);
  }
}
