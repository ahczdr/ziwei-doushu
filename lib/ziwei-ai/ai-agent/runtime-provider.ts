import type { ModelProvider, ModelRequest, ModelResponse } from './index';

export type ModelApiStyle = 'auto' | 'chat-completions' | 'responses' | 'messages';

export interface SwitchableModelProviderOptions {
  baseUrl: string;
  apiKey: string;
  model: string;
  apiStyle?: ModelApiStyle;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  maxAttempts?: number;
}

const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_ATTEMPTS = 3;
const RETRYABLE_STATUS = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

const OPENCODE_GO_RESPONSES_MODELS = new Set([
  'grok-4.5',
  'gpt-5.6-luna',
  'muse-spark-1.2-contributor',
]);

const OPENCODE_GO_MESSAGES_MODELS = new Set([
  'minimax-m3',
  'minimax-m2.7',
  'minimax-m2.5',
  'qwen3.8-max',
  'qwen3.7-max',
  'qwen3.7-plus',
  'qwen3.6-plus',
]);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function normalizeModelId(model: string): string {
  const trimmed = model.trim();
  return trimmed.startsWith('opencode-go/') ? trimmed.slice('opencode-go/'.length) : trimmed;
}

function suffixStyle(baseUrl: string): Exclude<ModelApiStyle, 'auto'> | null {
  const path = baseUrl.replace(/\/+$/, '');
  if (path.endsWith('/chat/completions')) return 'chat-completions';
  if (path.endsWith('/responses')) return 'responses';
  if (path.endsWith('/messages')) return 'messages';
  return null;
}

export function resolveModelApiStyle(baseUrl: string, model: string, explicit: ModelApiStyle = 'auto'): Exclude<ModelApiStyle, 'auto'> {
  if (explicit !== 'auto') return explicit;
  const fromSuffix = suffixStyle(baseUrl);
  if (fromSuffix) return fromSuffix;

  const normalizedModel = normalizeModelId(model);
  try {
    const url = new URL(baseUrl);
    const isOpenCodeGo = url.hostname === 'opencode.ai' && url.pathname.includes('/zen/go/v1');
    if (isOpenCodeGo && OPENCODE_GO_RESPONSES_MODELS.has(normalizedModel)) return 'responses';
    if (isOpenCodeGo && OPENCODE_GO_MESSAGES_MODELS.has(normalizedModel)) return 'messages';
  } catch {
    // Constructor validation will report malformed URLs before requests are sent.
  }
  return 'chat-completions';
}

function endpointFor(baseUrl: string, style: Exclude<ModelApiStyle, 'auto'>): string {
  const base = baseUrl.replace(/\/+$/, '').replace(/\/(?:chat\/completions|responses|messages)$/, '');
  if (style === 'chat-completions') return `${base}/chat/completions`;
  if (style === 'responses') return `${base}/responses`;
  return `${base}/messages`;
}

function responseInput(request: ModelRequest) {
  const instructions = request.messages
    .filter((message) => message.role === 'system')
    .map((message) => message.content)
    .join('\n\n');
  const input = request.messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({ role: message.role, content: message.content }));
  return { instructions, input };
}

function messagesInput(request: ModelRequest) {
  const system = request.messages
    .filter((message) => message.role === 'system')
    .map((message) => message.content)
    .join('\n\n');
  const messages = request.messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({ role: message.role, content: message.content }));
  return { system, messages };
}

function extractResponseText(payload: unknown): string | null {
  if (!payload || typeof payload !== 'object') return null;
  const value = payload as Record<string, unknown>;

  if (typeof value.output_text === 'string' && value.output_text.trim()) return value.output_text;

  if (Array.isArray(value.output)) {
    for (const item of value.output) {
      if (!item || typeof item !== 'object') continue;
      const content = (item as Record<string, unknown>).content;
      if (!Array.isArray(content)) continue;
      for (const part of content) {
        if (!part || typeof part !== 'object') continue;
        const text = (part as Record<string, unknown>).text;
        if (typeof text === 'string' && text.trim()) return text;
      }
    }
  }

  if (Array.isArray(value.choices)) {
    const first = value.choices[0];
    if (first && typeof first === 'object') {
      const message = (first as Record<string, unknown>).message;
      if (message && typeof message === 'object') {
        const content = (message as Record<string, unknown>).content;
        if (typeof content === 'string' && content.trim()) return content;
      }
    }
  }

  if (Array.isArray(value.content)) {
    for (const part of value.content) {
      if (!part || typeof part !== 'object') continue;
      const text = (part as Record<string, unknown>).text;
      if (typeof text === 'string' && text.trim()) return text;
    }
  }

  return null;
}

function buildBody(style: Exclude<ModelApiStyle, 'auto'>, model: string, request: ModelRequest): Record<string, unknown> {
  if (style === 'responses') {
    const { instructions, input } = responseInput(request);
    return {
      model,
      ...(instructions ? { instructions } : {}),
      input,
    };
  }

  if (style === 'messages') {
    const { system, messages } = messagesInput(request);
    return {
      model,
      max_tokens: 2_500,
      ...(system ? { system } : {}),
      messages,
      temperature: request.temperature,
    };
  }

  return {
    model,
    messages: request.messages,
    temperature: request.temperature,
  };
}

export class SwitchableModelProvider implements ModelProvider {
  readonly id: string;
  readonly apiStyle: Exclude<ModelApiStyle, 'auto'>;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly maxAttempts: number;
  private readonly model: string;
  private readonly endpoint: string;

  constructor(private readonly options: SwitchableModelProviderOptions) {
    if (!options.baseUrl.trim() || !options.apiKey.trim() || !options.model.trim()) {
      throw new TypeError('baseUrl, apiKey and model are required');
    }
    try {
      new URL(options.baseUrl);
    } catch {
      throw new TypeError('baseUrl must be a valid absolute URL');
    }
    if (options.timeoutMs !== undefined && (!Number.isFinite(options.timeoutMs) || options.timeoutMs < 1_000 || options.timeoutMs > 300_000)) {
      throw new RangeError(`timeoutMs must be between 1000 and 300000, received ${options.timeoutMs}`);
    }
    if (options.maxAttempts !== undefined && (!Number.isInteger(options.maxAttempts) || options.maxAttempts < 1 || options.maxAttempts > 5)) {
      throw new RangeError(`maxAttempts must be between 1 and 5, received ${options.maxAttempts}`);
    }

    this.model = normalizeModelId(options.model);
    this.apiStyle = resolveModelApiStyle(options.baseUrl, this.model, options.apiStyle ?? 'auto');
    this.endpoint = endpointFor(options.baseUrl, this.apiStyle);
    this.id = `model-gateway:${this.apiStyle}:${this.model}`;
    this.fetchImpl = options.fetchImpl ?? fetch;
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.maxAttempts = options.maxAttempts ?? DEFAULT_MAX_ATTEMPTS;
  }

  async generate(request: ModelRequest): Promise<ModelResponse> {
    let lastStatus: number | null = null;

    for (let attempt = 1; attempt <= this.maxAttempts; attempt += 1) {
      const headers: Record<string, string> = {
        'content-type': 'application/json',
        authorization: `Bearer ${this.options.apiKey}`,
      };
      if (this.apiStyle === 'messages') {
        headers['x-api-key'] = this.options.apiKey;
        headers['anthropic-version'] = '2023-06-01';
      }

      const response = await this.fetchImpl(this.endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(buildBody(this.apiStyle, this.model, request)),
        signal: AbortSignal.timeout(this.timeoutMs),
      });

      if (response.ok) {
        const payload = await response.json() as unknown;
        const content = extractResponseText(payload);
        if (!content) throw new Error(`model provider returned empty content via ${this.apiStyle}`);
        const model = payload && typeof payload === 'object' && typeof (payload as Record<string, unknown>).model === 'string'
          ? (payload as Record<string, string>).model
          : this.model;
        return { content, model, provider: this.id };
      }

      lastStatus = response.status;
      if (!RETRYABLE_STATUS.has(response.status) || attempt === this.maxAttempts) break;
      await sleep(250 * (2 ** (attempt - 1)));
    }

    throw new Error(`model provider failed: HTTP ${lastStatus ?? 'unknown'} via ${this.apiStyle}`);
  }
}

function parseApiStyle(value: string | undefined): ModelApiStyle {
  const style = value?.trim() || 'auto';
  if (style === 'auto' || style === 'chat-completions' || style === 'responses' || style === 'messages') return style;
  throw new RangeError('ZIWEI_AI_API_STYLE must be auto, chat-completions, responses, or messages');
}

export function providerFromEnv(env: NodeJS.ProcessEnv = process.env): ModelProvider | null {
  const baseUrl = env.ZIWEI_AI_BASE_URL?.trim();
  const apiKey = env.ZIWEI_AI_API_KEY?.trim();
  const model = env.ZIWEI_AI_MODEL?.trim();
  const timeoutText = env.ZIWEI_AI_TIMEOUT_MS?.trim();
  if (!baseUrl || !apiKey || !model) return null;

  const timeoutMs = timeoutText ? Number(timeoutText) : undefined;
  if (timeoutText && (!Number.isFinite(timeoutMs) || timeoutMs! < 1_000 || timeoutMs! > 300_000)) {
    throw new RangeError('ZIWEI_AI_TIMEOUT_MS must be between 1000 and 300000');
  }

  return new SwitchableModelProvider({
    baseUrl,
    apiKey,
    model,
    apiStyle: parseApiStyle(env.ZIWEI_AI_API_STYLE),
    ...(timeoutMs ? { timeoutMs } : {}),
  });
}
