import type { ClassicChunk } from './types';
import { normalizeClassicText } from './corpus';

const CJK = /[\u3400-\u9fff]/;

export function tokenizeChineseAware(text: string): string[] {
  const normalized = normalizeClassicText(text);
  const tokens: string[] = [];
  const cjkChars = [...normalized].filter((char) => CJK.test(char));
  tokens.push(...cjkChars);
  for (let i = 0; i < cjkChars.length - 1; i += 1) {
    tokens.push(cjkChars[i] + cjkChars[i + 1]);
  }
  const ascii = normalized.match(/[a-z0-9_-]{2,}/g) ?? [];
  tokens.push(...ascii);
  return tokens;
}

export interface LexicalIndex {
  readonly chunks: readonly ClassicChunk[];
  readonly tokensByChunk: readonly string[][];
  readonly documentFrequency: ReadonlyMap<string, number>;
  search(query: string, limit?: number): Array<{ chunk: ClassicChunk; score: number }>;
}

export function buildLexicalIndex(chunks: readonly ClassicChunk[]): LexicalIndex {
  const tokensByChunk = chunks.map((chunk) => tokenizeChineseAware(chunk.text));
  const documentFrequency = new Map<string, number>();
  for (const tokens of tokensByChunk) {
    for (const token of new Set(tokens)) {
      documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1);
    }
  }

  return {
    chunks,
    tokensByChunk,
    documentFrequency,
    search(query: string, limit = 30) {
      const qTokens = tokenizeChineseAware(query);
      if (qTokens.length === 0) return [];
      const qSet = new Set(qTokens);
      const totalDocs = Math.max(chunks.length, 1);
      const scored = chunks.map((chunk, index) => {
        const counts = new Map<string, number>();
        for (const token of tokensByChunk[index]) counts.set(token, (counts.get(token) ?? 0) + 1);
        let score = 0;
        for (const token of qSet) {
          const tf = counts.get(token) ?? 0;
          if (tf === 0) continue;
          const df = documentFrequency.get(token) ?? 0;
          const idf = Math.log(1 + (totalDocs - df + 0.5) / (df + 0.5));
          score += (1 + Math.log(tf)) * idf * (token.length > 1 ? 1.35 : 1);
        }
        // Exact phrase receives a deterministic boost.
        const normalizedQuery = normalizeClassicText(query);
        if (normalizedQuery && chunk.normalizedText.includes(normalizedQuery)) score += 8;
        return { chunk, score };
      }).filter((item) => item.score > 0);

      return scored.sort((a, b) => b.score - a.score || a.chunk.id.localeCompare(b.chunk.id)).slice(0, limit);
    },
  };
}
