export type CalendarType = 'solar' | 'lunar';
export type Gender = 'male' | 'female';
export type TransformationKind = '禄' | '权' | '科' | '忌';
export type StarCategory = 'major' | 'minor' | 'adjective';
export type PatternLevel = 'excellent' | 'good' | 'neutral' | 'caution';
export type PatternCategory = 'primary' | 'secondary' | 'support' | 'transformation' | 'warning';
export type PatternEvidenceKind =
  | 'star-in-palace'
  | 'star-in-san-fang'
  | 'transformation'
  | 'adjacent-palace'
  | 'condition';

/**
 * P1 的统一排盘输入。
 *
 * hourIndex 沿用 iztro 约定：0=早子时，1=丑时……11=亥时，12=晚子时。
 * trueSolarTime 若提供，必须包含公历日期和 24 小时时间，例如 2000-08-16T03:12；
 * Adapter 会以它作为实际排盘时间，而不是只把它当作展示字段。
 */
export interface ChartInput {
  calendarType: CalendarType;
  date: string;
  hourIndex: number;
  gender: Gender;
  isLeapMonth?: boolean;
  fixLeap?: boolean;
  birthplace?: string;
  longitude?: number;
  trueSolarTime?: string;
}

export interface EffectiveBirthTime {
  source: 'input' | 'true-solar-time';
  /** 实际传给 iztro 的日期；使用真太阳时时恒为公历日期。 */
  date: string;
  hourIndex: number;
}

export interface LunarNumericFacts {
  year: number;
  month: number;
  day: number;
  isLeapMonth: boolean;
}

export interface ChartBasics {
  solarDate: string;
  lunarDate: string;
  lunar: LunarNumericFacts;
  chineseDate: string;
  time: string;
  timeRange: string;
  sign: string;
  zodiac: string;
  soulPalaceBranch: string;
  bodyPalaceBranch: string;
  soulStar: string;
  bodyStar: string;
  fiveElementsClass: string;
}

export interface StarFact {
  /** 在当前 ChartFacts 内稳定唯一，禁止把它当作跨版本业务主键。 */
  id: string;
  name: string;
  category: StarCategory;
  nativeType: string;
  scope: string;
  brightness?: string;
  transformation?: TransformationKind;
}

export interface DecadalFact {
  palaceIndex: number;
  palaceName: string;
  heavenlyStem: string;
  earthlyBranch: string;
  ageRange: [number, number];
}

export interface SmallLimitFact {
  palaceIndex: number;
  palaceName: string;
  ages: number[];
}

export interface PalaceFact {
  index: number;
  name: string;
  heavenlyStem: string;
  earthlyBranch: string;
  isSoulPalace: boolean;
  isBodyPalace: boolean;
  isOriginalPalace: boolean;
  majorStars: StarFact[];
  minorStars: StarFact[];
  adjectiveStars: StarFact[];
  changsheng12: string;
  boshi12: string;
  jiangqian12: string;
  suiqian12: string;
  decadal: DecadalFact;
  smallLimitAges: number[];
}

export interface TransformationFact {
  kind: TransformationKind;
  starName: string;
  palaceIndex: number;
  palaceName: string;
  earthlyBranch: string;
}

export interface HoroscopeItemFact {
  index: number;
  name: string;
  heavenlyStem: string;
  earthlyBranch: string;
  palaceNames: string[];
  mutagenStars: string[];
}

export interface FortuneSnapshot {
  solarDate: string;
  lunarDate: string;
  decadal: HoroscopeItemFact;
  smallLimit: HoroscopeItemFact & { nominalAge: number };
  yearly: HoroscopeItemFact;
  monthly: HoroscopeItemFact;
  daily: HoroscopeItemFact;
  hourly: HoroscopeItemFact;
}

export interface FortuneFacts {
  decadals: DecadalFact[];
  smallLimits: SmallLimitFact[];
  /** 只有调用方显式传入 fortuneDate 时才生成，避免结果随“今天”漂移。 */
  snapshot?: FortuneSnapshot;
}

export interface PatternEvidence {
  kind: PatternEvidenceKind;
  text: string;
  palaceName?: string;
  palaceBranch?: string;
  starName?: string;
  transformation?: TransformationKind;
  /** 指向 ChartFacts 中参与判定的稳定事实 ID，例如 star.id 或 palace:<branch>。 */
  factIds: string[];
}

export interface PatternSource {
  title: string;
  locator?: string;
  /** 迁移期间保留旧 patterns.ts 的规则名，方便逐条对照。 */
  legacyRule?: string;
}

/**
 * P3 起正式冻结的结构化格局命中对象。
 * 规则命中是确定性判断，因此 confidence 固定为 1，不伪装成模型概率。
 */
export interface PatternHit {
  id: string;
  ruleId: string;
  name: string;
  category: PatternCategory;
  level: PatternLevel;
  description: string;
  palaceNames: string[];
  starNames: string[];
  matchedFacts: string[];
  evidence: PatternEvidence[];
  bonus: string[];
  breaking: string[];
  source: PatternSource;
  confidence: 1;
}

export interface ChartFacts {
  schemaVersion: '1.0';
  engine: {
    name: 'iztro';
    language: 'zh-CN';
  };
  input: ChartInput;
  effectiveBirthTime: EffectiveBirthTime;
  basics: ChartBasics;
  palaces: PalaceFact[];
  transformations: TransformationFact[];
  fortune: FortuneFacts;
  patterns: PatternHit[];
}

export interface BuildChartFactsOptions {
  /** 指定公历日期/时间生成运限快照；不传则绝不读取当前系统时间。 */
  fortuneDate?: string;
}
