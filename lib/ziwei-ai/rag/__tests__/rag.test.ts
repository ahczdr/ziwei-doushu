import assert from 'node:assert/strict';
import test from 'node:test';
import { buildChartFacts } from '../../chart-engine';
import { detectCompletePatternHits } from '../../pattern-engine/complete';
import {
  CLASSIC_CORPUS,
  DeterministicHashEmbeddingProvider,
  HybridClassicRetriever,
  buildChartKnowledgeQuery,
  buildLexicalIndex,
  cosineSimilarity,
} from '../index';

test('P4 corpus contains all three existing classics with unique chunk IDs and provenance metadata', () => {
  assert.ok(CLASSIC_CORPUS.length > 0);
  assert.deepEqual(new Set(CLASSIC_CORPUS.map((chunk) => chunk.source.bookSlug)), new Set(['gusuifu', 'quanji', 'quanshu']));
  assert.equal(new Set(CLASSIC_CORPUS.map((chunk) => chunk.id)).size, CLASSIC_CORPUS.length);
  for (const chunk of CLASSIC_CORPUS) {
    assert.equal(chunk.source.transcriptionProvenance, 'repository-transcription');
    assert.equal(chunk.source.provenanceVerified, false);
    assert.ok(chunk.source.provenanceNote.length > 20);
  }
});

test('lexical retrieval prioritizes an exact classical phrase', () => {
  const index = buildLexicalIndex(CLASSIC_CORPUS);
  const hits = index.search('紫微为君', 5);
  assert.ok(hits.length > 0);
  assert.match(hits[0].chunk.text, /紫微为君/);
});

test('offline hash embeddings are deterministic and cosine-safe', async () => {
  const provider = new DeterministicHashEmbeddingProvider(128);
  const [a, b, c] = await provider.embed(['紫微为君', '紫微为君', '完全不同']);
  assert.deepEqual(a, b);
  assert.ok(cosineSimilarity(a, b) > 0.999);
  assert.ok(cosineSimilarity(a, c) < 1);
});

test('hybrid retrieval is deterministic, citeable and supports book filters', async () => {
  const retriever = new HybridClassicRetriever(CLASSIC_CORPUS, new DeterministicHashEmbeddingProvider(128));
  const first = await retriever.search({ text: '紫微为君 左辅右弼', limit: 5 });
  const second = await retriever.search({ text: '紫微为君 左辅右弼', limit: 5 });
  assert.deepEqual(first, second);
  assert.ok(first.length > 0);
  assert.ok(first.every((hit) => hit.citationId.startsWith('classic:')));

  const filtered = await retriever.search({ text: '紫微', limit: 10, bookSlugs: ['gusuifu'] });
  assert.ok(filtered.length > 0);
  assert.ok(filtered.every((hit) => hit.chunk.source.bookSlug === 'gusuifu'));
});

test('chart knowledge query is derived from deterministic facts and patterns', () => {
  const facts = buildChartFacts({ calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' });
  const patterns = detectCompletePatternHits(facts);
  const query = buildChartKnowledgeQuery(facts, patterns, { userQuestion: '事业方向' });
  assert.match(query, /事业方向/);
  assert.match(query, /命宫/);
  assert.ok(facts.transformations.some((item) => query.includes(`${item.starName}化${item.kind}`)));
});
