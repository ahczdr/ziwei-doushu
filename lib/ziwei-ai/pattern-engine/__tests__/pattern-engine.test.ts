import assert from 'node:assert/strict';
import test from 'node:test';
import { buildChartFacts } from '../../chart-engine';
import type {
  ChartFacts,
  PalaceFact,
  StarFact,
  TransformationKind,
} from '../../chart-types';
import {
  attachPatternHits,
  detectPatternHits,
  P3_PATTERN_RULES,
} from '../index';

const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

interface SyntheticStar {
  name: string;
  transformation?: TransformationKind;
}

function makeStar(branch: string, index: number, input: string | SyntheticStar): StarFact {
  const value = typeof input === 'string' ? { name: input } : input;
  return {
    id: `synthetic:${branch}:${index}:${value.name}`,
    name: value.name,
    category: 'major',
    nativeType: 'major',
    scope: 'origin',
    ...(value.transformation ? { transformation: value.transformation } : {}),
  };
}

function makeSyntheticFacts(placements: Record<string, Array<string | SyntheticStar>>): ChartFacts {
  const palaceNames: Record<string, string> = {
    子: '命宫',
    辰: '财帛宫',
    午: '迁移宫',
    申: '官禄宫',
  };

  const palaces: PalaceFact[] = BRANCHES.map((branch, index) => ({
    index,
    name: palaceNames[branch] ?? `测试${branch}宫`,
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
    decadal: {
      palaceIndex: index,
      palaceName: palaceNames[branch] ?? `测试${branch}宫`,
      heavenlyStem: '甲',
      earthlyBranch: branch,
      ageRange: [index * 10 + 1, index * 10 + 10],
    },
    smallLimitAges: [],
  }));

  const transformations = palaces.flatMap((palace) =>
    palace.majorStars.flatMap((star) => star.transformation ? [{
      kind: star.transformation,
      starName: star.name,
      palaceIndex: palace.index,
      palaceName: palace.name,
      earthlyBranch: palace.earthlyBranch,
    }] : []),
  );

  return {
    schemaVersion: '1.0',
    engine: { name: 'iztro', language: 'zh-CN' },
    input: { calendarType: 'solar', date: '2000-1-1', hourIndex: 0, gender: 'male' },
    effectiveBirthTime: { source: 'input', date: '2000-1-1', hourIndex: 0 },
    basics: {
      solarDate: '2000-1-1',
      lunarDate: 'synthetic',
      lunar: { year: 1999, month: 11, day: 25, isLeapMonth: false },
      chineseDate: 'synthetic',
      time: '早子时',
      timeRange: '00:00~01:00',
      sign: '摩羯座',
      zodiac: '兔',
      soulPalaceBranch: '子',
      bodyPalaceBranch: '午',
      soulStar: 'synthetic',
      bodyStar: 'synthetic',
      fiveElementsClass: '水二局',
    },
    palaces,
    transformations,
    fortune: {
      decadals: palaces.map((palace) => palace.decadal),
      smallLimits: palaces.map((palace) => ({
        palaceIndex: palace.index,
        palaceName: palace.name,
        ages: [],
      })),
    },
    patterns: [],
  };
}

function hitByRule(facts: ChartFacts, ruleId: string) {
  return detectPatternHits(facts).find((hit) => hit.ruleId === ruleId);
}

test('P3 registry contains twenty migrated deterministic rules with unique IDs', () => {
  assert.equal(P3_PATTERN_RULES.length, 20);
  assert.equal(new Set(P3_PATTERN_RULES.map((rule) => rule.id)).size, 20);
});

test('君臣庆会 emits machine-readable star evidence', () => {
  const facts = makeSyntheticFacts({ 子: ['紫微'], 辰: ['左辅'], 申: ['右弼'] });
  const hit = hitByRule(facts, 'primary.jun-chen-qing-hui');
  assert.ok(hit);
  assert.equal(hit.name, '君臣庆会');
  assert.equal(hit.confidence, 1);
  assert.deepEqual(new Set(hit.starNames), new Set(['紫微', '左辅', '右弼']));
  assert.ok(hit.evidence.every((item) => item.factIds.length > 0));
});

test('杀破狼 requires 七杀、破军、贪狼 all inside 命宫三方四正', () => {
  const matched = makeSyntheticFacts({ 子: ['七杀'], 辰: ['破军'], 申: ['贪狼'] });
  assert.ok(hitByRule(matched, 'primary.sha-po-lang'));

  const missingOne = makeSyntheticFacts({ 子: ['七杀'], 辰: ['破军'], 酉: ['贪狼'] });
  assert.equal(hitByRule(missingOne, 'primary.sha-po-lang'), undefined);
});

test('机月同梁 requires all four stars in the four-palace san-fang system', () => {
  const facts = makeSyntheticFacts({ 子: ['天机'], 辰: ['太阴'], 午: ['天同'], 申: ['天梁'] });
  const hit = hitByRule(facts, 'primary.ji-yue-tong-liang');
  assert.ok(hit);
  assert.equal(hit.evidence.length, 4);
});

test('夹命 rules use the two earthly-branch neighbors of 命宫', () => {
  const facts = makeSyntheticFacts({ 亥: ['左辅', '火星'], 丑: ['右弼', '铃星'] });
  assert.ok(hitByRule(facts, 'support.fu-bi-jia-ming'));
  assert.ok(hitByRule(facts, 'warning.huo-ling-jia-ming'));

  const notClamped = makeSyntheticFacts({ 亥: ['左辅'], 寅: ['右弼'] });
  assert.equal(hitByRule(notClamped, 'support.fu-bi-jia-ming'), undefined);
});

test('四化规则 read StarFact.transformation rather than recalculating stems', () => {
  const facts = makeSyntheticFacts({
    子: [{ name: '紫微', transformation: '禄' }],
    申: [{ name: '武曲', transformation: '权' }],
    午: [{ name: '天梁', transformation: '科' }, { name: '太阴', transformation: '忌' }],
  });
  assert.ok(hitByRule(facts, 'transformation.hua-lu-ru-ming'));
  assert.ok(hitByRule(facts, 'transformation.hua-quan-ru-guan'));
  assert.ok(hitByRule(facts, 'transformation.hua-ke-ru-ming-shen'));
  assert.ok(hitByRule(facts, 'warning.hua-ji-ru-ming-qian'));
});

test('attachPatternHits is immutable and deterministic', () => {
  const facts = makeSyntheticFacts({ 子: ['紫微'], 辰: ['左辅'], 申: ['右弼'] });
  const first = attachPatternHits(facts);
  const second = attachPatternHits(facts);
  assert.equal(facts.patterns.length, 0);
  assert.deepEqual(first.patterns, second.patterns);
  assert.notEqual(first, facts);
});

test('real iztro ChartFacts integration produces only resolvable evidence IDs', () => {
  const facts = buildChartFacts({
    calendarType: 'solar',
    date: '2000-8-16',
    hourIndex: 2,
    gender: 'female',
  });
  const hits = detectPatternHits(facts);
  const validFactIds = new Set([
    ...facts.palaces.map((palace) => `palace:${palace.earthlyBranch}`),
    ...facts.palaces.flatMap((palace) => [
      ...palace.majorStars,
      ...palace.minorStars,
      ...palace.adjectiveStars,
    ]).map((star) => star.id),
  ]);

  assert.deepEqual(hits, detectPatternHits(facts));
  for (const hit of hits) {
    assert.equal(hit.confidence, 1);
    assert.ok(hit.source.title.length > 0);
    assert.ok(hit.matchedFacts.length > 0);
    for (const factId of hit.matchedFacts) {
      assert.ok(validFactIds.has(factId), `unresolvable evidence id: ${factId}`);
    }
  }
});
