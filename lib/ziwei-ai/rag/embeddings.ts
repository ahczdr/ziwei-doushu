import type { EmbeddingProvider } from './types';
import { tokenizeChineseAware } from './lexical';

function fnv1a(text: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function normalize(vector: number[]): number[] {
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
  if (norm === 0) return vector;
  return vector.map((value) => value / norm);
}

/**
 * Offline deterministic vector baseline. It is intentionally not marketed as a semantic
 * foundation model: it hashes Chinese-aware tokens into a fixed vector so local tests and
 * deployments can exercise a real vector-retrieval path without network/API keys.
 */
export class DeterministicHashEmbeddingProvider implements EmbeddingProvider {
  readonly id: string;

  constructor(readonly dimensions = 256) {
    if (!Number.isInteger(dimensions) || dimensions < 32) throw new RangeError('dimensions must be an integer >= 32');
    this.id = `hash-ngram-${dimensions}`;
  }

  async embed(texts: string[]): Promise<number[][]> {
    return texts.map((text) => {
      const vector = Array.from({ length: this.dimensions }, () => 0);
      const tokens = tokenizeChineseAware(text);
      for (const token of tokens) {
        const hash = fnv1a(token);
        const index = hash % this.dimensions;
        const sign = (hash & 0x80000000) === 0 ? 1 : -1;
        vector[index] += sign * (token.length > 1 ? 1.4 : 1);
      }
      return normalize(vector);
    });
  }
}

export interface OpenAICompatibleEmbeddingOptions {
  baseUrl: string;
  apiKey: string;
  model: string;
  fetchImpl?: typeof fetch;
}

export class OpenAICompatibleEmbeddingProvider implements EmbeddingProvider {
  readonly id: string;
  private readonly fetchImpl: typeof fetch;

  constructor(private readonly options: OpenAICompatibleEmbeddingOptions) {
    if (!options.baseUrl || !options.apiKey || !options.model) throw new TypeError('baseUrl, apiKey and model are required');
    this.id = `openai-compatible:${options.model}`;
    this.fetchImpl = options.fetchImpl ?? fetch;
  }

  async embed(texts: string[]): Promise<number[][]> {
    const base = this.options.baseUrl.replace(/\/$/, '');
    const response = await this.fetchImpl(`${base}/embeddings`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${this.options.apiKey}`,
      },
      body: JSON.stringify({ model: this.options.model, input: texts }),
    });
    if (!response.ok) throw new Error(`embedding provider failed: HTTP ${response.status}`);
    const payload = await response.json() as { data?: Array<{ index: number; embedding: number[] }> };
    if (!payload.data || payload.data.length !== texts.length) throw new Error('embedding provider returned an invalid response');
    return [...payload.data].sort((a, b) => a.index - b.index).map((item) => normalize(item.embedding));
  }
}

export function cosineSimilarity(a: readonly number[], b: readonly number[]): number {
  if (a.length !== b.length) throw new RangeError('embedding dimensions do not match');
  let dot = 0;
  let aa = 0;
  let bb = 0;
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    aa += a[i] * a[i];
    bb += b[i] * b[i];
  }
  if (aa === 0 || bb === 0) return 0;
  return dot / Math.sqrt(aa * bb);
}
