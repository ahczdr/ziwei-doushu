import assert from 'node:assert/strict';
import test from 'node:test';
import { buildChartFacts } from '../../chart-engine';
import type { ChartFacts, PalaceFact, StarFact, TransformationKind } from '../../chart-types';
import { COMPLETE_PATTERN_RULES, detectCompletePatternHits } from '../complete';
import { P3_2_PATTERN_RULES, migratedRuleCoverage } from '../legacy-migrated-rules';

const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

type Placement = string | { name: string; transformation?: TransformationKind; brightness?: string };

function makeStar(branch: string, index: number, input: Placement): StarFact {
  const value = typeof input === 'string' ? { name: input } : input;
  return {
    id: `p32:${branch}:${index}:${value.name}`,
    name: value.name,
    category: 'major',
    nativeType: 'major',
    scope: 'origin',
    ...(value.transformation ? { transformation: value.transformation } : {}),
    ...('brightness' in value && value.brightness ? { brightness: value.brightness } : {}),
  };
}

function factsFor(placements: Record<string, Placement[]>): ChartFacts {
  const names: Record<string, string> = { 子: '命宫', 辰: '财帛宫', 午: '迁移宫', 申: '官禄宫' };
  const palaces: PalaceFact[] = BRANCHES.map((branch, index) => ({
    index,
    name: names[branch] ?? `测试${branch}宫`,
    heavenlyStem: '甲',
    earthlyBranch: branch,
    isSoulPalace: branch === '子',
    isBodyPalace: branch === '午',
    isOriginalPalace: true,
    majorStars: (placements[branch] ?? []).map((star, starIndex) => makeStar(branch, starIndex, star)),
    minorStars: [],
    adjectiveStars: [],
    changsheng12: '',
    boshi12: '',
    jiangqian12: '',
    suiqian12: '',
    decadal: { palaceIndex: index, palaceName: names[branch] ?? `测试${branch}宫`, heavenlyStem: '甲', earthlyBranch: branch, ageRange: [1, 10] },
    smallLimitAges: [],
  }));
  return {
    schemaVersion: '1.0',
    engine: { name: 'iztro', language: 'zh-CN' },
    input: { calendarType: 'solar', date: '2000-1-1', hourIndex: 0, gender: 'male' },
    effectiveBirthTime: { source: 'input', date: '2000-1-1', hourIndex: 0 },
    basics: {
      solarDate: '2000-1-1', lunarDate: 'synthetic', lunar: { year: 1999, month: 11, day: 25, isLeapMonth: false },
      chineseDate: 'synthetic', time: '早子时', timeRange: '00:00~01:00', sign: '摩羯座', zodiac: '兔',
      soulPalaceBranch: '子', bodyPalaceBranch: '午', soulStar: 'synthetic', bodyStar: 'synthetic', fiveElementsClass: '水二局',
    },
    palaces,
    transformations: palaces.flatMap((palace) => palace.majorStars.flatMap((star) => star.transformation ? [{
      kind: star.transformation, starName: star.name, palaceIndex: palace.index, palaceName: palace.name, earthlyBranch: palace.earthlyBranch,
    }] : [])),
    fortune: { decadals: palaces.map((p) => p.decadal), smallLimits: palaces.map((p) => ({ palaceIndex: p.index, palaceName: p.name, ages: [] })) },
    patterns: [],
  };
}

function hasRule(facts: ChartFacts, ruleId: string): boolean {
  return detectCompletePatternHits(facts).some((hit) => hit.ruleId === ruleId);
}

test('P3.2 adds 22 migrated rules and complete registry has unique rule IDs', () => {
  assert.equal(P3_2_PATTERN_RULES.length, 22);
  assert.equal(COMPLETE_PATTERN_RULES.length, 42);
  assert.equal(new Set(COMPLETE_PATTERN_RULES.map((rule) => rule.id)).size, 42);
  assert.equal(migratedRuleCoverage().length, 22);
});

test('阳梁昌禄 and 科权双会 use only san-fang ChartFacts', () => {
  const facts = factsFor({
    子: ['太阳'],
    辰: ['天梁', { name: '天机', transformation: '科' }],
    午: ['文昌'],
    申: ['禄存', { name: '武曲', transformation: '权' }],
  });
  assert.ok(hasRule(facts, 'primary.yang-liang-chang-lu'));
  assert.ok(hasRule(facts, 'support.ke-quan-shuang-hui'));
});

test('双禄朝垣 and 三奇嘉会 are transformation-driven', () => {
  const facts = factsFor({
    子: ['禄存', { name: '廉贞', transformation: '禄' }],
    辰: [{ name: '破军', transformation: '权' }],
    申: [{ name: '武曲', transformation: '科' }],
  });
  assert.ok(hasRule(facts, 'support.shuang-lu-chao-yuan'));
  assert.ok(hasRule(facts, 'support.san-qi-jia-hui'));
});

test('传统警示格只作为规则事实输出，不生成现实事件预测', () => {
  const facts = factsFor({ 子: ['廉贞'], 辰: ['七杀'], 申: ['擎羊'] });
  const hit = detectCompletePatternHits(facts).find((item) => item.ruleId === 'warning.lian-sha-yang');
  assert.ok(hit);
  assert.equal(hit.level, 'caution');
  assert.match(hit.description, /传统警示格局/);
  assert.equal(hit.confidence, 1);
});

test('real iztro chart runs all 42 rules deterministically with resolvable evidence', () => {
  const facts = buildChartFacts({ calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' });
  const hits = detectCompletePatternHits(facts);
  const valid = new Set([
    ...facts.palaces.map((palace) => `palace:${palace.earthlyBranch}`),
    ...facts.palaces.flatMap((palace) => [...palace.majorStars, ...palace.minorStars, ...palace.adjectiveStars]).map((star) => star.id),
  ]);
  assert.deepEqual(hits, detectCompletePatternHits(facts));
  for (const hit of hits) {
    for (const id of hit.matchedFacts) assert.ok(valid.has(id), `unresolvable evidence: ${id}`);
  }
});
