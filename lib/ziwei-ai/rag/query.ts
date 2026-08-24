import type { ChartFacts, PatternHit } from '../chart-types';

export interface KnowledgeQueryOptions {
  userQuestion?: string;
  maxPatternNames?: number;
  maxStarNames?: number;
}

export function buildChartKnowledgeQuery(
  facts: ChartFacts,
  patterns: readonly PatternHit[],
  options: KnowledgeQueryOptions = {},
): string {
  const patternNames = patterns.slice(0, options.maxPatternNames ?? 8).map((pattern) => pattern.name);
  const starNames = [...new Set([
    ...patterns.flatMap((pattern) => pattern.starNames),
    ...facts.palaces.filter((palace) => palace.isSoulPalace).flatMap((palace) => palace.majorStars.map((star) => star.name)),
  ])].slice(0, options.maxStarNames ?? 12);
  const transformationTerms = facts.transformations.map((item) => `${item.starName}化${item.kind}`);
  const terms = [
    options.userQuestion?.trim() ?? '',
    ...patternNames,
    ...starNames,
    ...transformationTerms,
    '命宫',
    '三方四正',
  ].filter(Boolean);
  return [...new Set(terms)].join(' ');
}
