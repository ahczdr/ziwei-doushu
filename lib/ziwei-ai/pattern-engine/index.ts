import type {
  ChartFacts,
  PalaceFact,
  PatternCategory,
  PatternEvidence,
  PatternHit,
  PatternLevel,
  PatternSource,
  StarFact,
  TransformationKind,
} from '../chart-types';

const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;

export interface PatternRule {
  id: string;
  name: string;
  category: PatternCategory;
  source: PatternSource;
  match(facts: ChartFacts): PatternHit | null;
}

interface HitInput {
  level: PatternLevel;
  description: string;
  evidence: PatternEvidence[];
  bonus?: string[];
  breaking?: string[];
}

function starsOf(palace: PalaceFact): StarFact[] {
  return [...palace.majorStars, ...palace.minorStars, ...palace.adjectiveStars];
}

function starIn(palace: PalaceFact | undefined, name: string): StarFact | undefined {
  return palace ? starsOf(palace).find((star) => star.name === name) : undefined;
}

function hasStar(palace: PalaceFact | undefined, name: string): boolean {
  return Boolean(starIn(palace, name));
}

function normalizedPalaceName(name: string): string {
  return name.endsWith('宫') ? name.slice(0, -1) : name;
}

function palaceByName(facts: ChartFacts, name: string): PalaceFact | undefined {
  const normalized = normalizedPalaceName(name);
  return facts.palaces.find((palace) => normalizedPalaceName(palace.name) === normalized);
}

function soulPalace(facts: ChartFacts): PalaceFact | undefined {
  return facts.palaces.find((palace) => palace.isSoulPalace)
    ?? facts.palaces.find((palace) => palace.earthlyBranch === facts.basics.soulPalaceBranch);
}

function bodyPalace(facts: ChartFacts): PalaceFact | undefined {
  return facts.palaces.find((palace) => palace.isBodyPalace)
    ?? facts.palaces.find((palace) => palace.earthlyBranch === facts.basics.bodyPalaceBranch);
}

function branchIndex(branch: string): number {
  return BRANCHES.indexOf(branch as (typeof BRANCHES)[number]);
}

function palaceByOffset(facts: ChartFacts, fromBranch: string, offset: number): PalaceFact | undefined {
  const index = branchIndex(fromBranch);
  if (index < 0) return undefined;
  const target = BRANCHES[(index + offset + 12) % 12];
  return facts.palaces.find((palace) => palace.earthlyBranch === target);
}

function sanFangPalaces(facts: ChartFacts): PalaceFact[] {
  const ming = soulPalace(facts);
  if (!ming) return [];
  const offsets = [0, 4, 8, 6];
  return offsets
    .map((offset) => palaceByOffset(facts, ming.earthlyBranch, offset))
    .filter((palace): palace is PalaceFact => Boolean(palace));
}

function starPalace(facts: ChartFacts, name: string): { palace: PalaceFact; star: StarFact } | undefined {
  for (const palace of facts.palaces) {
    const star = starIn(palace, name);
    if (star) return { palace, star };
  }
  return undefined;
}

function starEvidence(
  palace: PalaceFact,
  star: StarFact,
  kind: PatternEvidence['kind'] = 'star-in-palace',
  text?: string,
): PatternEvidence {
  return {
    kind,
    text: text ?? `${star.name}在${palace.name}`,
    palaceName: palace.name,
    palaceBranch: palace.earthlyBranch,
    starName: star.name,
    factIds: [star.id, `palace:${palace.earthlyBranch}`],
  };
}

function conditionEvidence(text: string, palaces: PalaceFact[] = []): PatternEvidence {
  return {
    kind: 'condition',
    text,
    factIds: palaces.map((palace) => `palace:${palace.earthlyBranch}`),
  };
}

function transformationEvidence(
  palace: PalaceFact,
  star: StarFact,
  transformation: TransformationKind,
): PatternEvidence {
  return {
    kind: 'transformation',
    text: `${star.name}化${transformation}在${palace.name}`,
    palaceName: palace.name,
    palaceBranch: palace.earthlyBranch,
    starName: star.name,
    transformation,
    factIds: [star.id, `palace:${palace.earthlyBranch}`],
  };
}

function buildHit(rule: PatternRule, input: HitInput): PatternHit {
  const palaceNames = [...new Set(input.evidence.flatMap((item) => item.palaceName ? [item.palaceName] : []))];
  const starNames = [...new Set(input.evidence.flatMap((item) => item.starName ? [item.starName] : []))];
  const matchedFacts = [...new Set(input.evidence.flatMap((item) => item.factIds))];
  return {
    id: `pattern:${rule.id}`,
    ruleId: rule.id,
    name: rule.name,
    category: rule.category,
    level: input.level,
    description: input.description,
    palaceNames,
    starNames,
    matchedFacts,
    evidence: input.evidence,
    bonus: input.bonus ?? [],
    breaking: input.breaking ?? [],
    source: rule.source,
    confidence: 1,
  };
}

function pairInSamePalace(facts: ChartFacts, a: string, b: string) {
  for (const palace of facts.palaces) {
    const starA = starIn(palace, a);
    const starB = starIn(palace, b);
    if (starA && starB) return { palace, starA, starB };
  }
  return undefined;
}

function bothAdjacentToSoul(facts: ChartFacts, a: string, b: string) {
  const ming = soulPalace(facts);
  if (!ming) return undefined;
  const prev = palaceByOffset(facts, ming.earthlyBranch, -1);
  const next = palaceByOffset(facts, ming.earthlyBranch, 1);
  if (!prev || !next) return undefined;
  const aPrev = starIn(prev, a);
  const aNext = starIn(next, a);
  const bPrev = starIn(prev, b);
  const bNext = starIn(next, b);
  if (aPrev && bNext) return { firstPalace: prev, firstStar: aPrev, secondPalace: next, secondStar: bNext, ming };
  if (bPrev && aNext) return { firstPalace: prev, firstStar: bPrev, secondPalace: next, secondStar: aNext, ming };
  return undefined;
}

function bothInSanFang(facts: ChartFacts, a: string, b: string) {
  const palaces = sanFangPalaces(facts);
  const find = (name: string) => {
    for (const palace of palaces) {
      const star = starIn(palace, name);
      if (star) return { palace, star };
    }
    return undefined;
  };
  const first = find(a);
  const second = find(b);
  return first && second ? { first, second, palaces } : undefined;
}

const rules: PatternRule[] = [
  {
    id: 'primary.jun-chen-qing-hui',
    name: '君臣庆会',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '君臣庆会格', legacyRule: 'detectJunChenQingHui' },
    match(facts) {
      const ming = soulPalace(facts);
      const ziwei = starIn(ming, '紫微');
      if (!ming || !ziwei) return null;
      const support = bothInSanFang(facts, '左辅', '右弼');
      if (!support) return null;
      const evidence = [
        starEvidence(ming, ziwei),
        starEvidence(support.first.palace, support.first.star, 'star-in-san-fang', '左辅会命宫三方四正'),
        starEvidence(support.second.palace, support.second.star, 'star-in-san-fang', '右弼会命宫三方四正'),
      ];
      const sfNames = new Set(support.palaces.flatMap(starsOf).map((star) => star.name));
      const bonus: string[] = [];
      if (sfNames.has('文昌') || sfNames.has('文曲')) bonus.push('再会昌曲');
      if (sfNames.has('天魁') || sfNames.has('天钺')) bonus.push('再会魁钺');
      return buildHit(this, {
        level: 'excellent',
        description: '传统格局中，紫微坐命并会左辅、右弼，称为君臣庆会。',
        evidence,
        bonus,
      });
    },
  },
  {
    id: 'primary.zi-fu-tong-gong',
    name: '紫府同宫',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '紫府同宫格', legacyRule: 'detectZiFu' },
    match(facts) {
      const found = pairInSamePalace(facts, '紫微', '天府');
      if (!found) return null;
      return buildHit(this, {
        level: found.palace.isSoulPalace ? 'excellent' : 'good',
        description: found.palace.isSoulPalace ? '紫微、天府同坐命宫。' : '紫微、天府同宫，会照命宫时按减力格处理。',
        evidence: [starEvidence(found.palace, found.starA), starEvidence(found.palace, found.starB)],
      });
    },
  },
  {
    id: 'primary.fu-xiang-chao-yuan',
    name: '府相朝垣',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '府相朝垣格', legacyRule: 'detectFuXiangChaoYuan' },
    match(facts) {
      const palaces = sanFangPalaces(facts);
      const fu = palaces.map((palace) => ({ palace, star: starIn(palace, '天府') })).find((item) => item.star);
      const xiang = palaces.map((palace) => ({ palace, star: starIn(palace, '天相') })).find((item) => item.star);
      if (!fu?.star || !xiang?.star || fu.palace.earthlyBranch === xiang.palace.earthlyBranch) return null;
      return buildHit(this, {
        level: 'excellent',
        description: '天府、天相分居命宫三方四正并相互会照。',
        evidence: [
          starEvidence(fu.palace, fu.star, 'star-in-san-fang', '天府会命宫三方四正'),
          starEvidence(xiang.palace, xiang.star, 'star-in-san-fang', '天相会命宫三方四正'),
        ],
      });
    },
  },
  {
    id: 'primary.sha-po-lang',
    name: '杀破狼格',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '七杀破军贪狼会照', legacyRule: 'detectShaPoLang' },
    match(facts) {
      const palaces = sanFangPalaces(facts);
      const hits = ['七杀', '破军', '贪狼'].map((name) => {
        for (const palace of palaces) {
          const star = starIn(palace, name);
          if (star) return { palace, star };
        }
        return undefined;
      });
      if (hits.some((hit) => !hit)) return null;
      return buildHit(this, {
        level: 'good',
        description: '七杀、破军、贪狼三曜齐会命宫三方四正，按杀破狼体系识别。',
        evidence: hits.map((hit) => starEvidence(hit!.palace, hit!.star, 'star-in-san-fang')),
      });
    },
  },
  {
    id: 'primary.ji-yue-tong-liang',
    name: '机月同梁',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '机月同梁格', legacyRule: 'detectJiYueTongLiang' },
    match(facts) {
      const palaces = sanFangPalaces(facts);
      const hits = ['天机', '太阴', '天同', '天梁'].map((name) => {
        for (const palace of palaces) {
          const star = starIn(palace, name);
          if (star) return { palace, star };
        }
        return undefined;
      });
      if (hits.some((hit) => !hit)) return null;
      return buildHit(this, {
        level: 'good',
        description: '天机、太阴、天同、天梁四曜齐会命宫三方四正。',
        evidence: hits.map((hit) => starEvidence(hit!.palace, hit!.star, 'star-in-san-fang')),
      });
    },
  },
  {
    id: 'secondary.lian-xiang',
    name: '廉相格',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '廉贞天相同宫', legacyRule: 'detectLianXiang' },
    match(facts) {
      const found = pairInSamePalace(facts, '廉贞', '天相');
      if (!found) return null;
      return buildHit(this, {
        level: 'good',
        description: '廉贞、天相同宫。',
        evidence: [starEvidence(found.palace, found.starA), starEvidence(found.palace, found.starB)],
      });
    },
  },
  {
    id: 'secondary.wu-qi-sha',
    name: '武曲七杀',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '武曲七杀同宫', legacyRule: 'detectWuQiSha' },
    match(facts) {
      const found = pairInSamePalace(facts, '武曲', '七杀');
      if (!found) return null;
      return buildHit(this, {
        level: 'neutral',
        description: '武曲、七杀同宫。',
        evidence: [starEvidence(found.palace, found.starA), starEvidence(found.palace, found.starB)],
      });
    },
  },
  {
    id: 'secondary.tong-liang',
    name: '天同天梁',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '天同天梁同宫', legacyRule: 'detectTongLiang' },
    match(facts) {
      const found = pairInSamePalace(facts, '天同', '天梁');
      if (!found) return null;
      return buildHit(this, {
        level: 'good',
        description: '天同、天梁同宫。',
        evidence: [starEvidence(found.palace, found.starA), starEvidence(found.palace, found.starB)],
      });
    },
  },
  ...[
    ['support.fu-bi-jia-ming', '辅弼夹命', '左辅', '右弼', '《紫微斗数全书·辅弼论》', 'detectFuBiJiaMing'],
    ['support.chang-qu-jia-ming', '昌曲夹命', '文昌', '文曲', '《紫微斗数全书·昌曲论》', 'detectChangQuJiaMing'],
    ['support.kui-yue-jia-ming', '魁钺夹命', '天魁', '天钺', '《紫微斗数全书·魁钺论》', 'detectKuiYueJiaMing'],
  ].map(([id, name, a, b, title, legacyRule]) => ({
    id,
    name,
    category: 'support' as PatternCategory,
    source: { title, legacyRule },
    match(facts: ChartFacts) {
      const found = bothAdjacentToSoul(facts, a, b);
      if (!found) return null;
      return buildHit(this, {
        level: 'good',
        description: `${a}、${b}分居命宫前后两宫，构成夹命。`,
        evidence: [
          starEvidence(found.firstPalace, found.firstStar, 'adjacent-palace'),
          starEvidence(found.secondPalace, found.secondStar, 'adjacent-palace'),
          conditionEvidence('两星分居命宫相邻两宫', [found.ming]),
        ],
      });
    },
  } satisfies PatternRule)),
  ...[
    ['support.fu-bi-tong-hui', '辅弼同会', '左辅', '右弼', '《紫微斗数全书·辅弼论》', 'detectFuBiTongHui'],
    ['support.chang-qu-tong-hui', '昌曲同会', '文昌', '文曲', '《紫微斗数全书·文星论》', 'detectChangQuTongHui'],
    ['support.kui-yue-tong-hui', '魁钺同会', '天魁', '天钺', '《紫微斗数全书·魁钺论》', 'detectKuiYueTongHui'],
  ].map(([id, name, a, b, title, legacyRule]) => ({
    id,
    name,
    category: 'support' as PatternCategory,
    source: { title, legacyRule },
    match(facts: ChartFacts) {
      const found = bothInSanFang(facts, a, b);
      if (!found) return null;
      return buildHit(this, {
        level: 'good',
        description: `${a}、${b}同会命宫三方四正。`,
        evidence: [
          starEvidence(found.first.palace, found.first.star, 'star-in-san-fang'),
          starEvidence(found.second.palace, found.second.star, 'star-in-san-fang'),
        ],
      });
    },
  } satisfies PatternRule)),
  {
    id: 'transformation.hua-lu-ru-ming',
    name: '化禄入命',
    category: 'transformation',
    source: { title: '《紫微斗数全书》', locator: '四化论', legacyRule: 'detectHuaLuRuMing' },
    match(facts) {
      const ming = soulPalace(facts);
      if (!ming) return null;
      const star = starsOf(ming).find((item) => item.transformation === '禄');
      if (!star) return null;
      return buildHit(this, {
        level: 'good',
        description: `${star.name}化禄入命宫。`,
        evidence: [transformationEvidence(ming, star, '禄')],
      });
    },
  },
  {
    id: 'transformation.hua-quan-ru-guan',
    name: '化权入官',
    category: 'transformation',
    source: { title: '《紫微斗数全书》', locator: '四化论', legacyRule: 'detectHuaQuanRuGuan' },
    match(facts) {
      const guan = palaceByName(facts, '官禄');
      if (!guan) return null;
      const star = starsOf(guan).find((item) => item.transformation === '权');
      if (!star) return null;
      return buildHit(this, {
        level: 'good',
        description: `${star.name}化权入官禄宫。`,
        evidence: [transformationEvidence(guan, star, '权')],
      });
    },
  },
  {
    id: 'transformation.hua-ke-ru-ming-shen',
    name: '化科入命身',
    category: 'transformation',
    source: { title: '《紫微斗数全书》', locator: '四化论', legacyRule: 'detectHuaKeRuMingShen' },
    match(facts) {
      const candidates = [soulPalace(facts), bodyPalace(facts)].filter((palace): palace is PalaceFact => Boolean(palace));
      for (const palace of candidates) {
        const star = starsOf(palace).find((item) => item.transformation === '科');
        if (!star) continue;
        return buildHit(this, {
          level: 'good',
          description: `${star.name}化科入${palace.isSoulPalace ? '命' : '身'}宫。`,
          evidence: [transformationEvidence(palace, star, '科')],
        });
      }
      return null;
    },
  },
  {
    id: 'warning.hua-ji-ru-ming-qian',
    name: '化忌入命迁',
    category: 'warning',
    source: { title: '《紫微斗数全书》', locator: '四化论', legacyRule: 'detectHuaJiRuMingQian' },
    match(facts) {
      const ming = soulPalace(facts);
      if (!ming) return null;
      const qian = palaceByName(facts, '迁移') ?? palaceByOffset(facts, ming.earthlyBranch, 6);
      for (const palace of [ming, qian].filter((item): item is PalaceFact => Boolean(item))) {
        const star = starsOf(palace).find((item) => item.transformation === '忌');
        if (!star) continue;
        return buildHit(this, {
          level: 'caution',
          description: `${star.name}化忌落在${palace.isSoulPalace ? '命宫' : '迁移宫'}，作为传统格局中的警示项记录。`,
          evidence: [transformationEvidence(palace, star, '忌')],
        });
      }
      return null;
    },
  },
  {
    id: 'warning.huo-ling-jia-ming',
    name: '火铃夹命',
    category: 'warning',
    source: { title: '《紫微斗数全书》', locator: '火铃夹命', legacyRule: 'detectHuoLingJiaMing' },
    match(facts) {
      const found = bothAdjacentToSoul(facts, '火星', '铃星');
      if (!found) return null;
      return buildHit(this, {
        level: 'caution',
        description: '火星、铃星分居命宫前后两宫，记录为火铃夹命。',
        evidence: [
          starEvidence(found.firstPalace, found.firstStar, 'adjacent-palace'),
          starEvidence(found.secondPalace, found.secondStar, 'adjacent-palace'),
        ],
      });
    },
  },
  {
    id: 'warning.kong-jie-jia-ming',
    name: '空劫夹命',
    category: 'warning',
    source: { title: '《紫微斗数全书》', locator: '空劫夹命', legacyRule: 'detectKongJieJiaMing' },
    match(facts) {
      const found = bothAdjacentToSoul(facts, '地空', '地劫');
      if (!found) return null;
      return buildHit(this, {
        level: 'caution',
        description: '地空、地劫分居命宫前后两宫，记录为空劫夹命。',
        evidence: [
          starEvidence(found.firstPalace, found.firstStar, 'adjacent-palace'),
          starEvidence(found.secondPalace, found.secondStar, 'adjacent-palace'),
        ],
      });
    },
  },
];

export const P3_PATTERN_RULES: readonly PatternRule[] = rules;

export function detectPatternHits(facts: ChartFacts): PatternHit[] {
  return P3_PATTERN_RULES
    .map((rule) => rule.match(facts))
    .filter((hit): hit is PatternHit => Boolean(hit));
}

/** 返回新对象，避免修改 P1 生成的原始事实快照。 */
export function attachPatternHits(facts: ChartFacts): ChartFacts {
  return {
    ...facts,
    patterns: detectPatternHits(facts),
  };
}
