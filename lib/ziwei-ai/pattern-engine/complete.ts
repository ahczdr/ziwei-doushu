import type { ChartFacts, PatternHit } from '../chart-types';
import { P3_PATTERN_RULES, type PatternRule } from './index';
import { P3_2_PATTERN_RULES } from './legacy-migrated-rules';

export const COMPLETE_PATTERN_RULES: readonly PatternRule[] = [
  ...P3_PATTERN_RULES,
  ...P3_2_PATTERN_RULES,
];

export function detectCompletePatternHits(facts: ChartFacts): PatternHit[] {
  const hits = COMPLETE_PATTERN_RULES
    .map((rule) => rule.match(facts))
    .filter((hit): hit is PatternHit => Boolean(hit));

  // A rule ID is the stable business key. Guard against accidental duplicate registrations.
  const seen = new Set<string>();
  return hits.filter((hit) => {
    if (seen.has(hit.ruleId)) return false;
    seen.add(hit.ruleId);
    return true;
  });
}

export function attachCompletePatternHits(facts: ChartFacts): ChartFacts {
  return {
    ...facts,
    patterns: detectCompletePatternHits(facts),
  };
}
