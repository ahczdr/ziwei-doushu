export { CLASSIC_CORPUS, buildClassicCorpus, normalizeClassicText } from './corpus';
export { tokenizeChineseAware, buildLexicalIndex } from './lexical';
export {
  DeterministicHashEmbeddingProvider,
  OpenAICompatibleEmbeddingProvider,
  cosineSimilarity,
} from './embeddings';
export { HybridClassicRetriever, retrieveClassics } from './hybrid';
export { buildChartKnowledgeQuery } from './query';
export type {
  ClassicChunk,
  CorpusSource,
  EmbeddingProvider,
  HybridRetrieverOptions,
  OriginalWorkStatus,
  RetrievalHit,
  RetrievalQuery,
} from './types';
