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
const BRIGHT = new Set(['庙', '旺', '得', '利', 'bright']);
const DIM = new Set(['陷', '不', 'dim']);

export interface MigratedPatternRule {
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

function branchIndex(branch: string): number {
  return BRANCHES.indexOf(branch as (typeof BRANCHES)[number]);
}

function palaceByOffset(facts: ChartFacts, fromBranch: string, offset: number): PalaceFact | undefined {
  const index = branchIndex(fromBranch);
  if (index < 0) return undefined;
  const target = BRANCHES[(index + offset + 12) % 12];
  return facts.palaces.find((palace) => palace.earthlyBranch === target);
}

function soulPalace(facts: ChartFacts): PalaceFact | undefined {
  return facts.palaces.find((palace) => palace.isSoulPalace)
    ?? facts.palaces.find((palace) => palace.earthlyBranch === facts.basics.soulPalaceBranch);
}

function bodyPalace(facts: ChartFacts): PalaceFact | undefined {
  return facts.palaces.find((palace) => palace.isBodyPalace)
    ?? facts.palaces.find((palace) => palace.earthlyBranch === facts.basics.bodyPalaceBranch);
}

function normalizedPalaceName(name: string): string {
  return name.endsWith('宫') ? name.slice(0, -1) : name;
}

function palaceByName(facts: ChartFacts, name: string): PalaceFact | undefined {
  const normalized = normalizedPalaceName(name);
  return facts.palaces.find((palace) => normalizedPalaceName(palace.name) === normalized);
}

function sanFangPalaces(facts: ChartFacts): PalaceFact[] {
  const ming = soulPalace(facts);
  if (!ming) return [];
  return [0, 4, 8, 6]
    .map((offset) => palaceByOffset(facts, ming.earthlyBranch, offset))
    .filter((palace): palace is PalaceFact => Boolean(palace));
}

function findInPalaces(palaces: PalaceFact[], name: string): { palace: PalaceFact; star: StarFact } | undefined {
  for (const palace of palaces) {
    const star = starIn(palace, name);
    if (star) return { palace, star };
  }
  return undefined;
}

function starPalace(facts: ChartFacts, name: string): { palace: PalaceFact; star: StarFact } | undefined {
  return findInPalaces(facts.palaces, name);
}

function pairInSamePalace(facts: ChartFacts, a: string, b: string) {
  for (const palace of facts.palaces) {
    const starA = starIn(palace, a);
    const starB = starIn(palace, b);
    if (starA && starB) return { palace, starA, starB };
  }
  return undefined;
}

function isBright(star: StarFact | undefined): boolean {
  return Boolean(star?.brightness && BRIGHT.has(star.brightness));
}

function isDim(star: StarFact | undefined): boolean {
  return Boolean(star?.brightness && DIM.has(star.brightness));
}

function evidenceForStar(
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

function condition(text: string, palaces: PalaceFact[] = []): PatternEvidence {
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

function buildHit(rule: MigratedPatternRule, input: HitInput): PatternHit {
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

function sanFangNames(facts: ChartFacts): Set<string> {
  return new Set(sanFangPalaces(facts).flatMap(starsOf).map((star) => star.name));
}

function sanFangHits(facts: ChartFacts, names: string[]) {
  const palaces = sanFangPalaces(facts);
  return names.map((name) => findInPalaces(palaces, name));
}

function countSanFang(facts: ChartFacts, names: string[]): number {
  const set = sanFangNames(facts);
  return names.filter((name) => set.has(name)).length;
}

export const P3_2_PATTERN_RULES: readonly MigratedPatternRule[] = [
  {
    id: 'primary.yang-liang-chang-lu',
    name: '阳梁昌禄',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '阳梁昌禄格', legacyRule: 'detectYangLiangChangLu' },
    match(facts) {
      const hits = sanFangHits(facts, ['太阳', '天梁', '文昌', '禄存']);
      if (hits.some((hit) => !hit)) return null;
      const sun = hits[0]!;
      const liang = hits[1]!;
      const bonus: string[] = [];
      const breaking: string[] = [];
      if (isBright(sun.star)) bonus.push('太阳庙旺');
      if (isBright(liang.star)) bonus.push('天梁庙旺');
      if (isDim(sun.star)) breaking.push('太阳落陷');
      return buildHit(this, {
        level: breaking.length ? 'good' : 'excellent',
        description: '太阳、天梁、文昌、禄存齐会命宫三方四正。',
        evidence: hits.map((hit) => evidenceForStar(hit!.palace, hit!.star, 'star-in-san-fang')),
        bonus,
        breaking,
      });
    },
  },
  ...[
    ['primary.huo-tan', '火贪格', '火星', 'detectHuoTanLingTan'],
    ['primary.ling-tan', '铃贪格', '铃星', 'detectHuoTanLingTan'],
  ].map(([id, name, malefic, legacyRule]) => ({
    id,
    name,
    category: 'primary' as PatternCategory,
    source: { title: '《紫微斗数全书》', locator: `${name}`, legacyRule },
    match(facts: ChartFacts) {
      const pair = pairInSamePalace(facts, '贪狼', malefic);
      if (pair) {
        return buildHit(this, {
          level: 'good',
          description: `贪狼与${malefic}同宫，按${name}识别。`,
          evidence: [evidenceForStar(pair.palace, pair.starA), evidenceForStar(pair.palace, pair.starB)],
          bonus: pair.starA.transformation === '禄' ? ['贪狼化禄'] : [],
          breaking: pair.starA.transformation === '忌' ? ['贪狼化忌'] : [],
        });
      }
      const hits = sanFangHits(facts, ['贪狼', malefic]);
      if (hits.some((hit) => !hit)) return null;
      return buildHit(this, {
        level: 'neutral',
        description: `贪狼与${malefic}会照命宫三方四正，按会照型${name}记录。`,
        evidence: hits.map((hit) => evidenceForStar(hit!.palace, hit!.star, 'star-in-san-fang')),
      });
    },
  } satisfies MigratedPatternRule)),
  {
    id: 'primary.wu-tan',
    name: '武贪格',
    category: 'primary',
    source: { title: '《紫微斗数全书》', locator: '武贪格', legacyRule: 'detectWuTan' },
    match(facts) {
      const pair = pairInSamePalace(facts, '武曲', '贪狼');
      if (!pair) return null;
      const bonus: string[] = [];
      const breaking: string[] = [];
      if (pair.starA.transformation === '禄' || pair.starB.transformation === '禄') bonus.push('武贪见化禄');
      if (pair.starA.transformation === '忌' || pair.starB.transformation === '忌') breaking.push('武贪见化忌');
      return buildHit(this, {
        level: breaking.length ? 'caution' : 'good',
        description: '武曲、贪狼同宫，按武贪格识别。',
        evidence: [evidenceForStar(pair.palace, pair.starA), evidenceForStar(pair.palace, pair.starB)],
        bonus,
        breaking,
      });
    },
  },
  {
    id: 'secondary.ri-yue-tong-gong',
    name: '日月同宫',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '日月同宫', legacyRule: 'detectRiYueTongGong' },
    match(facts) {
      const pair = pairInSamePalace(facts, '太阳', '太阴');
      if (!pair || !['丑', '未'].includes(pair.palace.earthlyBranch)) return null;
      const breaking = starsOf(pair.palace).some((star) => ['擎羊', '陀罗', '火星', '铃星'].includes(star.name))
        ? ['日月同宫见四煞'] : [];
      return buildHit(this, {
        level: breaking.length ? 'good' : (pair.palace.isSoulPalace ? 'excellent' : 'good'),
        description: `太阳、太阴同入${pair.palace.earthlyBranch}宫。`,
        evidence: [evidenceForStar(pair.palace, pair.starA), evidenceForStar(pair.palace, pair.starB)],
        bonus: pair.palace.earthlyBranch === '未' ? ['未宫日月同辉'] : [],
        breaking,
      });
    },
  },
  {
    id: 'secondary.ri-yue-jia-ming',
    name: '日月夹命',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '日月夹命', legacyRule: 'detectRiYueJiaMing' },
    match(facts) {
      const ming = soulPalace(facts);
      if (!ming) return null;
      const prev = palaceByOffset(facts, ming.earthlyBranch, -1);
      const next = palaceByOffset(facts, ming.earthlyBranch, 1);
      if (!prev || !next) return null;
      const sun = starIn(prev, '太阳') ? { palace: prev, star: starIn(prev, '太阳')! } : starIn(next, '太阳') ? { palace: next, star: starIn(next, '太阳')! } : undefined;
      const moon = starIn(prev, '太阴') ? { palace: prev, star: starIn(prev, '太阴')! } : starIn(next, '太阴') ? { palace: next, star: starIn(next, '太阴')! } : undefined;
      if (!sun || !moon || sun.palace.earthlyBranch === moon.palace.earthlyBranch) return null;
      const breaking = isDim(sun.star) || isDim(moon.star) ? ['日月落陷'] : [];
      return buildHit(this, {
        level: breaking.length ? 'good' : 'excellent',
        description: '太阳、太阴分居命宫前后两宫。',
        evidence: [
          evidenceForStar(sun.palace, sun.star, 'adjacent-palace'),
          evidenceForStar(moon.palace, moon.star, 'adjacent-palace'),
          condition('日月分居命宫相邻两宫', [ming]),
        ],
        bonus: [isBright(sun.star) ? '太阳庙旺' : '', isBright(moon.star) ? '太阴庙旺' : ''].filter(Boolean),
        breaking,
      });
    },
  },
  {
    id: 'secondary.ju-ri-tong-gong',
    name: '巨日同宫',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '巨日同宫', legacyRule: 'detectJuRiTongGong' },
    match(facts) {
      const pair = pairInSamePalace(facts, '巨门', '太阳');
      if (!pair || !['寅', '申'].includes(pair.palace.earthlyBranch)) return null;
      const breaking: string[] = [];
      if (pair.starA.transformation === '忌') breaking.push('巨门化忌');
      if (pair.palace.earthlyBranch === '申') breaking.push('申宫日西');
      return buildHit(this, {
        level: breaking.length ? 'caution' : (pair.palace.isSoulPalace && pair.palace.earthlyBranch === '寅' ? 'excellent' : 'good'),
        description: `巨门、太阳同入${pair.palace.earthlyBranch}宫。`,
        evidence: [evidenceForStar(pair.palace, pair.starA), evidenceForStar(pair.palace, pair.starB)],
        bonus: ['禄', '权'].includes(pair.starA.transformation ?? '') ? ['巨门化禄/化权'] : [],
        breaking,
      });
    },
  },
  {
    id: 'secondary.shi-zhong-yin-yu',
    name: '石中隐玉',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '石中隐玉格', legacyRule: 'detectShiZhongYinYu' },
    match(facts) {
      const ming = soulPalace(facts);
      const ju = starIn(ming, '巨门');
      if (!ming || !ju || !['子', '午'].includes(ming.earthlyBranch)) return null;
      const breaking = ju.transformation === '忌' ? ['巨门化忌'] : [];
      return buildHit(this, {
        level: breaking.length ? 'caution' : 'good',
        description: `巨门坐命于${ming.earthlyBranch}宫，按石中隐玉格记录。`,
        evidence: [evidenceForStar(ming, ju)],
        bonus: ['禄', '权'].includes(ju.transformation ?? '') ? ['巨门化禄/化权'] : [],
        breaking,
      });
    },
  },
  {
    id: 'secondary.ming-zhu-chu-hai',
    name: '明珠出海',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '明珠出海格', legacyRule: 'detectMingZhuChuHai' },
    match(facts) {
      const ming = soulPalace(facts);
      if (!ming || ming.earthlyBranch !== '未') return null;
      const moon = starPalace(facts, '太阴');
      const sun = starPalace(facts, '太阳');
      if (!moon || !sun) return null;
      const sf = sanFangPalaces(facts);
      if (!sf.some((p) => p.earthlyBranch === moon.palace.earthlyBranch) || !sf.some((p) => p.earthlyBranch === sun.palace.earthlyBranch)) return null;
      return buildHit(this, {
        level: isDim(moon.star) || isDim(sun.star) ? 'good' : 'excellent',
        description: '命宫在未，日月会照命宫三方，按明珠出海格记录。',
        evidence: [
          evidenceForStar(moon.palace, moon.star, 'star-in-san-fang'),
          evidenceForStar(sun.palace, sun.star, 'star-in-san-fang'),
          condition('命宫在未', [ming]),
        ],
      });
    },
  },
  {
    id: 'secondary.zi-wei-in-ming',
    name: '紫微坐命',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '紫微星论', legacyRule: 'detectZiWeiInMing' },
    match(facts) {
      const ming = soulPalace(facts);
      const ziwei = starIn(ming, '紫微');
      if (!ming || !ziwei) return null;
      const bonus: string[] = [];
      if (sanFangNames(facts).has('左辅') && sanFangNames(facts).has('右弼')) bonus.push('辅弼同会');
      if (ziwei.transformation === '权') bonus.push('紫微化权');
      return buildHit(this, {
        level: bonus.length ? 'good' : 'neutral',
        description: '紫微星坐命，作为基础主星格局记录。',
        evidence: [evidenceForStar(ming, ziwei)],
        bonus,
      });
    },
  },
  {
    id: 'support.shuang-lu-chao-yuan',
    name: '双禄朝垣',
    category: 'support',
    source: { title: '《紫微斗数全书》', locator: '双禄朝垣', legacyRule: 'detectShuangLuChaoYuan' },
    match(facts) {
      const sf = sanFangPalaces(facts);
      const luCun = findInPalaces(sf, '禄存');
      const huaLu = sf.flatMap((palace) => starsOf(palace).map((star) => ({ palace, star }))).find((item) => item.star.transformation === '禄');
      if (!luCun || !huaLu) return null;
      return buildHit(this, {
        level: 'excellent',
        description: '禄存与化禄同会命宫三方四正。',
        evidence: [
          evidenceForStar(luCun.palace, luCun.star, 'star-in-san-fang'),
          transformationEvidence(huaLu.palace, huaLu.star, '禄'),
        ],
      });
    },
  },
  {
    id: 'support.san-qi-jia-hui',
    name: '三奇嘉会',
    category: 'support',
    source: { title: '《紫微斗数全书》', locator: '三奇嘉会', legacyRule: 'detectSanQiJiaHui' },
    match(facts) {
      const sf = sanFangPalaces(facts);
      const hits = (['禄', '权', '科'] as const).map((kind) => sf.flatMap((palace) => starsOf(palace).map((star) => ({ palace, star }))).find((item) => item.star.transformation === kind));
      if (hits.some((hit) => !hit)) return null;
      return buildHit(this, {
        level: 'excellent',
        description: '化禄、化权、化科三奇齐会命宫三方四正。',
        evidence: hits.map((hit, index) => transformationEvidence(hit!.palace, hit!.star, (['禄', '权', '科'] as const)[index])),
      });
    },
  },
  {
    id: 'warning.yang-tuo-jia-ji',
    name: '羊陀夹忌',
    category: 'warning',
    source: { title: '《紫微斗数全书》', locator: '羊陀夹忌', legacyRule: 'detectYangTuoJiaJi' },
    match(facts) {
      const ji = facts.palaces.flatMap((palace) => starsOf(palace).map((star) => ({ palace, star }))).find((item) => item.star.transformation === '忌');
      if (!ji) return null;
      const prev = palaceByOffset(facts, ji.palace.earthlyBranch, -1);
      const next = palaceByOffset(facts, ji.palace.earthlyBranch, 1);
      if (!prev || !next) return null;
      const yang = starIn(prev, '擎羊') ?? starIn(next, '擎羊');
      const tuo = starIn(prev, '陀罗') ?? starIn(next, '陀罗');
      if (!yang || !tuo) return null;
      const yangPalace = starIn(prev, '擎羊') ? prev : next;
      const tuoPalace = starIn(prev, '陀罗') ? prev : next;
      if (yangPalace.earthlyBranch === tuoPalace.earthlyBranch) return null;
      return buildHit(this, {
        level: 'caution',
        description: '化忌所在宫被擎羊、陀罗分夹。',
        evidence: [
          transformationEvidence(ji.palace, ji.star, '忌'),
          evidenceForStar(yangPalace, yang, 'adjacent-palace'),
          evidenceForStar(tuoPalace, tuo, 'adjacent-palace'),
        ],
      });
    },
  },
  ...[
    ['warning.lian-sha-yang', '廉杀羊', ['廉贞', '七杀', '擎羊'], '《紫微斗数全书》', 'detectLianShaYang'],
    ['warning.ju-huo-yang', '巨火羊', ['巨门', '火星', '擎羊'], '《紫微斗数骨髓赋》', 'detectJuHuoYang'],
    ['warning.ling-chang-tuo-wu', '铃昌陀武', ['铃星', '文昌', '陀罗', '武曲'], '《紫微斗数骨髓赋》', 'detectLingChangTuoWu'],
  ].map(([id, name, required, title, legacyRule]) => ({
    id,
    name,
    category: 'warning' as PatternCategory,
    source: { title: title as string, locator: name as string, legacyRule: legacyRule as string },
    match(facts: ChartFacts) {
      const hits = sanFangHits(facts, required as string[]);
      if (hits.some((hit) => !hit)) return null;
      return buildHit(this, {
        level: 'caution',
        description: `${(required as string[]).join('、')}齐会命宫三方四正，作为传统警示格局记录。`,
        evidence: hits.map((hit) => evidenceForStar(hit!.palace, hit!.star, 'star-in-san-fang')),
      });
    },
  } satisfies MigratedPatternRule)),
  {
    id: 'warning.ma-tou-dai-jian',
    name: '马头带箭',
    category: 'warning',
    source: { title: '《紫微斗数骨髓赋》', locator: '马头带箭', legacyRule: 'detectMaTouDaiJian' },
    match(facts) {
      const ming = soulPalace(facts);
      const yang = starIn(ming, '擎羊');
      if (!ming || ming.earthlyBranch !== '午' || !yang) return null;
      const sf = sanFangNames(facts);
      const bonus = sf.has('七杀') || sf.has('破军') ? ['再会七杀或破军'] : [];
      return buildHit(this, {
        level: bonus.length ? 'good' : 'caution',
        description: '擎羊在午宫坐命，按马头带箭记录。',
        evidence: [evidenceForStar(ming, yang)],
        bonus,
      });
    },
  },
  {
    id: 'support.lu-cun-shou-shen',
    name: '禄存守命身',
    category: 'support',
    source: { title: '《紫微斗数全书》', locator: '禄存星', legacyRule: 'detectLuCunShouShen' },
    match(facts) {
      const lu = starPalace(facts, '禄存');
      if (!lu) return null;
      const ming = soulPalace(facts);
      const shen = bodyPalace(facts);
      const inMing = Boolean(ming && lu.palace.earthlyBranch === ming.earthlyBranch);
      const inShen = Boolean(shen && lu.palace.earthlyBranch === shen.earthlyBranch);
      if (!inMing && !inShen) return null;
      return buildHit(this, {
        level: 'good',
        description: `禄存进入${inMing ? '命宫' : '身宫'}。`,
        evidence: [evidenceForStar(lu.palace, lu.star)],
      });
    },
  },
  {
    id: 'support.tian-ma-ru-ming-qian',
    name: '天马入命迁',
    category: 'support',
    source: { title: '《紫微斗数全书》', locator: '天马星', legacyRule: 'detectTianMaRuMing' },
    match(facts) {
      const ma = starPalace(facts, '天马');
      const ming = soulPalace(facts);
      if (!ma || !ming) return null;
      const qian = palaceByOffset(facts, ming.earthlyBranch, 6);
      const inMing = ma.palace.earthlyBranch === ming.earthlyBranch;
      const inQian = qian && ma.palace.earthlyBranch === qian.earthlyBranch;
      if (!inMing && !inQian) return null;
      return buildHit(this, {
        level: 'neutral',
        description: `天马进入${inMing ? '命宫' : '迁移宫'}。`,
        evidence: [evidenceForStar(ma.palace, ma.star)],
      });
    },
  },
  {
    id: 'transformation.hua-lu-ru-cai',
    name: '化禄入财',
    category: 'transformation',
    source: { title: '《紫微斗数全书》', locator: '四化论', legacyRule: 'detectHuaLuRuCai' },
    match(facts) {
      const cai = palaceByName(facts, '财帛');
      if (!cai) return null;
      const star = starsOf(cai).find((item) => item.transformation === '禄');
      if (!star) return null;
      return buildHit(this, {
        level: 'good',
        description: `${star.name}化禄入财帛宫。`,
        evidence: [transformationEvidence(cai, star, '禄')],
      });
    },
  },
  {
    id: 'secondary.ji-yue-tong-liang-partial',
    name: '机月同梁三星会',
    category: 'secondary',
    source: { title: '《紫微斗数全书》', locator: '机月同梁格（降级识别）', legacyRule: 'detectJiYueTongLiangPartial' },
    match(facts) {
      const names = ['天机', '太阴', '天同', '天梁'];
      const palaces = sanFangPalaces(facts);
      const hits = names.map((name) => findInPalaces(palaces, name));
      if (hits.filter(Boolean).length !== 3) return null;
      const missing = names.filter((_, index) => !hits[index]);
      return buildHit(this, {
        level: 'neutral',
        description: `机月同梁四曜中三曜会命，缺${missing.join('、')}。`,
        evidence: hits.filter((hit): hit is NonNullable<typeof hit> => Boolean(hit)).map((hit) => evidenceForStar(hit.palace, hit.star, 'star-in-san-fang')),
      });
    },
  },
  {
    id: 'support.ke-quan-shuang-hui',
    name: '科权双会',
    category: 'support',
    source: { title: '《紫微斗数全书》', locator: '四化会照', legacyRule: 'detectKeQuanShuangHui' },
    match(facts) {
      const sf = sanFangPalaces(facts);
      const ke = sf.flatMap((palace) => starsOf(palace).map((star) => ({ palace, star }))).find((item) => item.star.transformation === '科');
      const quan = sf.flatMap((palace) => starsOf(palace).map((star) => ({ palace, star }))).find((item) => item.star.transformation === '权');
      if (!ke || !quan) return null;
      return buildHit(this, {
        level: 'good',
        description: '化科、化权同会命宫三方四正。',
        evidence: [transformationEvidence(ke.palace, ke.star, '科'), transformationEvidence(quan.palace, quan.star, '权')],
      });
    },
  },
];

export function migratedRuleCount(): number {
  return P3_2_PATTERN_RULES.length;
}

export function migratedRuleCoverage(): string[] {
  return P3_2_PATTERN_RULES.map((rule) => rule.source.legacyRule).filter((value): value is string => Boolean(value));
}
