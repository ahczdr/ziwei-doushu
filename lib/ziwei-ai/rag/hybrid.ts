import { CLASSIC_CORPUS } from './corpus';
import { cosineSimilarity, DeterministicHashEmbeddingProvider } from './embeddings';
import { buildLexicalIndex } from './lexical';
import type {
  ClassicChunk,
  EmbeddingProvider,
  HybridRetrieverOptions,
  RetrievalHit,
  RetrievalQuery,
} from './types';

function clampWeight(value: number, name: string): number {
  if (!Number.isFinite(value) || value < 0) throw new RangeError(`${name} must be >= 0`);
  return value;
}

function citationId(chunk: ClassicChunk): string {
  return `classic:${chunk.source.bookSlug}:${chunk.source.paragraphId}`;
}

export class HybridClassicRetriever {
  private readonly lexicalIndex;
  private readonly options: Required<HybridRetrieverOptions>;
  private vectors: number[][] | null = null;

  constructor(
    private readonly chunks: readonly ClassicChunk[] = CLASSIC_CORPUS,
    private readonly embeddings: EmbeddingProvider = new DeterministicHashEmbeddingProvider(),
    options: HybridRetrieverOptions = {},
  ) {
    this.lexicalIndex = buildLexicalIndex(chunks);
    this.options = {
      lexicalWeight: clampWeight(options.lexicalWeight ?? 0.55, 'lexicalWeight'),
      vectorWeight: clampWeight(options.vectorWeight ?? 0.45, 'vectorWeight'),
      candidateLimit: Math.max(1, Math.floor(options.candidateLimit ?? 60)),
    };
    if (this.options.lexicalWeight + this.options.vectorWeight === 0) {
      throw new RangeError('at least one retrieval weight must be > 0');
    }
  }

  async initialize(): Promise<void> {
    if (this.vectors) return;
    this.vectors = await this.embeddings.embed(this.chunks.map((chunk) => chunk.text));
    if (this.vectors.length !== this.chunks.length) throw new Error('embedding count does not match corpus');
  }

  async search(query: RetrievalQuery): Promise<RetrievalHit[]> {
    const text = query.text.trim();
    if (!text) return [];
    await this.initialize();
    const allowedBooks = query.bookSlugs?.length ? new Set(query.bookSlugs) : null;
    const limit = Math.max(1, Math.floor(query.limit ?? 8));

    const lexicalResults = this.lexicalIndex.search(text, this.options.candidateLimit);
    const lexicalMap = new Map(lexicalResults.map((item) => [item.chunk.id, item.score]));
    const maxLexical = lexicalResults[0]?.score ?? 0;
    const [queryVector] = await this.embeddings.embed([text]);
    const vectors = this.vectors!;

    const scored = this.chunks.flatMap((chunk, index) => {
      if (allowedBooks && !allowedBooks.has(chunk.source.bookSlug)) return [];
      const lexicalRaw = lexicalMap.get(chunk.id) ?? 0;
      const lexicalScore = maxLexical > 0 ? lexicalRaw / maxLexical : 0;
      const cosine = cosineSimilarity(queryVector, vectors[index]);
      const vectorScore = Math.max(0, (cosine + 1) / 2);
      const weightSum = this.options.lexicalWeight + this.options.vectorWeight;
      const score = (
        lexicalScore * this.options.lexicalWeight
        + vectorScore * this.options.vectorWeight
      ) / weightSum;
      if (lexicalScore === 0 && vectorScore <= 0.5) return [];
      return [{
        chunk,
        lexicalScore,
        vectorScore,
        score,
        citationId: citationId(chunk),
      } satisfies RetrievalHit];
    });

    return scored
      .sort((a, b) => b.score - a.score || b.lexicalScore - a.lexicalScore || a.chunk.id.localeCompare(b.chunk.id))
      .slice(0, limit);
  }
}

let defaultRetriever: HybridClassicRetriever | null = null;

export async function retrieveClassics(query: RetrievalQuery): Promise<RetrievalHit[]> {
  defaultRetriever ??= new HybridClassicRetriever();
  return defaultRetriever.search(query);
}
