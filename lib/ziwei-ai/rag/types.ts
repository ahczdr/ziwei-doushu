export type OriginalWorkStatus = 'historical-public-domain' | 'unknown';

export interface CorpusSource {
  bookSlug: string;
  bookTitle: string;
  dynasty: string;
  author: string;
  chapterTitle: string;
  paragraphId: string;
  originalWorkStatus: OriginalWorkStatus;
  transcriptionProvenance: 'repository-transcription';
  provenanceVerified: boolean;
  provenanceNote: string;
}

export interface ClassicChunk {
  id: string;
  text: string;
  normalizedText: string;
  source: CorpusSource;
}

export interface RetrievalQuery {
  text: string;
  limit?: number;
  bookSlugs?: string[];
}

export interface RetrievalHit {
  chunk: ClassicChunk;
  lexicalScore: number;
  vectorScore: number;
  score: number;
  citationId: string;
}

export interface EmbeddingProvider {
  readonly id: string;
  embed(texts: string[]): Promise<number[][]>;
}

export interface HybridRetrieverOptions {
  lexicalWeight?: number;
  vectorWeight?: number;
  candidateLimit?: number;
}
