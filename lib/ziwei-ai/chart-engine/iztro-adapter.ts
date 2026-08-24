import { astro } from 'iztro';
import type {
  BuildChartFactsOptions,
  ChartFacts,
  ChartInput,
  DecadalFact,
  EffectiveBirthTime,
  FortuneSnapshot,
  HoroscopeItemFact,
  PalaceFact,
  StarCategory,
  StarFact,
  TransformationFact,
  TransformationKind,
} from '../chart-types';

const TRANSFORMATIONS: readonly TransformationKind[] = ['禄', '权', '科', '忌'];
const TRANSFORMATION_SET = new Set<string>(TRANSFORMATIONS);

function assertHourIndex(hourIndex: number): void {
  if (!Number.isInteger(hourIndex) || hourIndex < 0 || hourIndex > 12) {
    throw new RangeError(`hourIndex must be an integer between 0 and 12, received ${hourIndex}`);
  }
}

/**
 * 24 小时时钟转换为 iztro 时辰索引。
 * 0 点=早子时(0)，1-2 点=丑(1)……21-22 点=亥(11)，23 点=晚子时(12)。
 */
export function clockHourToIztroIndex(hour: number): number {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new RangeError(`clock hour must be an integer between 0 and 23, received ${hour}`);
  }
  if (hour === 23) return 12;
  if (hour === 0) return 0;
  return Math.floor((hour + 1) / 2);
}

function resolveEffectiveBirthTime(input: ChartInput): EffectiveBirthTime {
  assertHourIndex(input.hourIndex);

  if (!input.trueSolarTime) {
    return {
      source: 'input',
      date: input.date,
      hourIndex: input.hourIndex,
    };
  }

  const match = input.trueSolarTime.match(
    /^(\d{4})-(\d{1,2})-(\d{1,2})[T\s](\d{1,2}):(\d{2})(?::\d{2})?$/,
  );
  if (!match) {
    throw new TypeError(
      'trueSolarTime must include a Gregorian date and time, e.g. 2000-08-16T03:12',
    );
  }

  const [, yearText, monthText, dayText, hourText, minuteText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (month < 1 || month > 12 || day < 1 || day > 31 || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new RangeError(`invalid trueSolarTime: ${input.trueSolarTime}`);
  }

  return {
    source: 'true-solar-time',
    date: `${year}-${month}-${day}`,
    hourIndex: clockHourToIztroIndex(hour),
  };
}

function toTransformation(value: unknown): TransformationKind | undefined {
  return typeof value === 'string' && TRANSFORMATION_SET.has(value)
    ? (value as TransformationKind)
    : undefined;
}

function mapStar(
  star: {
    name: unknown;
    type?: unknown;
    scope?: unknown;
    brightness?: unknown;
    mutagen?: unknown;
  },
  category: StarCategory,
  palaceIndex: number,
  starIndex: number,
): StarFact {
  const transformation = toTransformation(star.mutagen);
  return {
    id: `${palaceIndex}:${category}:${starIndex}:${String(star.name)}`,
    name: String(star.name),
    category,
    nativeType: String(star.type ?? category),
    scope: String(star.scope ?? 'origin'),
    ...(star.brightness ? { brightness: String(star.brightness) } : {}),
    ...(transformation ? { transformation } : {}),
  };
}

function mapPalace(
  palace: {
    index: number;
    name: unknown;
    heavenlyStem: unknown;
    earthlyBranch: unknown;
    isBodyPalace: boolean;
    isOriginalPalace: boolean;
    majorStars: Array<Parameters<typeof mapStar>[0]>;
    minorStars: Array<Parameters<typeof mapStar>[0]>;
    adjectiveStars: Array<Parameters<typeof mapStar>[0]>;
    changsheng12: unknown;
    boshi12: unknown;
    jiangqian12: unknown;
    suiqian12: unknown;
    decadal: {
      range: [number, number];
      heavenlyStem: unknown;
      earthlyBranch: unknown;
    };
    ages: number[];
  },
  soulPalaceBranch: string,
): PalaceFact {
  const palaceName = String(palace.name);
  const earthlyBranch = String(palace.earthlyBranch);
  const ageRange: [number, number] = [palace.decadal.range[0], palace.decadal.range[1]];
  const decadal: DecadalFact = {
    palaceIndex: palace.index,
    palaceName,
    heavenlyStem: String(palace.decadal.heavenlyStem),
    earthlyBranch: String(palace.decadal.earthlyBranch),
    ageRange,
  };

  return {
    index: palace.index,
    name: palaceName,
    heavenlyStem: String(palace.heavenlyStem),
    earthlyBranch,
    isSoulPalace: earthlyBranch === soulPalaceBranch,
    isBodyPalace: Boolean(palace.isBodyPalace),
    isOriginalPalace: Boolean(palace.isOriginalPalace),
    majorStars: palace.majorStars.map((star, index) => mapStar(star, 'major', palace.index, index)),
    minorStars: palace.minorStars.map((star, index) => mapStar(star, 'minor', palace.index, index)),
    adjectiveStars: palace.adjectiveStars.map((star, index) => mapStar(star, 'adjective', palace.index, index)),
    changsheng12: String(palace.changsheng12),
    boshi12: String(palace.boshi12),
    jiangqian12: String(palace.jiangqian12),
    suiqian12: String(palace.suiqian12),
    decadal,
    smallLimitAges: [...palace.ages],
  };
}

function collectTransformations(palaces: PalaceFact[]): TransformationFact[] {
  const result: TransformationFact[] = [];

  for (const palace of palaces) {
    for (const star of [...palace.majorStars, ...palace.minorStars, ...palace.adjectiveStars]) {
      if (!star.transformation) continue;
      result.push({
        kind: star.transformation,
        starName: star.name,
        palaceIndex: palace.index,
        palaceName: palace.name,
        earthlyBranch: palace.earthlyBranch,
      });
    }
  }

  return result.sort(
    (a, b) => TRANSFORMATIONS.indexOf(a.kind) - TRANSFORMATIONS.indexOf(b.kind),
  );
}

function mapHoroscopeItem(item: {
  index: number;
  name: unknown;
  heavenlyStem: unknown;
  earthlyBranch: unknown;
  palaceNames: unknown[];
  mutagen: unknown[];
}): HoroscopeItemFact {
  return {
    index: item.index,
    name: String(item.name),
    heavenlyStem: String(item.heavenlyStem),
    earthlyBranch: String(item.earthlyBranch),
    palaceNames: item.palaceNames.map(String),
    mutagenStars: item.mutagen.map(String),
  };
}

function buildFortuneSnapshot(
  astrolabe: ReturnType<typeof astro.bySolar>,
  fortuneDate: string,
): FortuneSnapshot {
  const horoscope = astrolabe.horoscope(fortuneDate);
  return {
    solarDate: String(horoscope.solarDate),
    lunarDate: String(horoscope.lunarDate),
    decadal: mapHoroscopeItem(horoscope.decadal),
    smallLimit: {
      ...mapHoroscopeItem(horoscope.age),
      nominalAge: horoscope.age.nominalAge,
    },
    yearly: mapHoroscopeItem(horoscope.yearly),
    monthly: mapHoroscopeItem(horoscope.monthly),
    daily: mapHoroscopeItem(horoscope.daily),
    hourly: mapHoroscopeItem(horoscope.hourly),
  };
}

function numericLunarFacts(lunarDate: {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  isLeap?: boolean;
}) {
  return {
    year: lunarDate.lunarYear,
    month: Math.abs(lunarDate.lunarMonth),
    day: lunarDate.lunarDay,
    isLeapMonth: Boolean(lunarDate.isLeap),
  };
}

/**
 * iztro -> ChartFacts 唯一适配入口。
 *
 * 约束：不调用 LLM、不访问网络、不读取当前日期；同一输入与 fortuneDate 应产生稳定输出。
 */
export function buildChartFacts(
  input: ChartInput,
  options: BuildChartFactsOptions = {},
): ChartFacts {
  const effectiveBirthTime = resolveEffectiveBirthTime(input);
  const iztroGender = input.gender === 'male' ? '男' : '女';
  const fixLeap = input.fixLeap ?? true;

  // 真太阳时包含的是实际公历时刻，因此一旦提供，必须从公历入口排盘。
  const astrolabe = effectiveBirthTime.source === 'true-solar-time' || input.calendarType === 'solar'
    ? astro.bySolar(effectiveBirthTime.date, effectiveBirthTime.hourIndex, iztroGender, fixLeap, 'zh-CN')
    : astro.byLunar(
        input.date,
        input.hourIndex,
        iztroGender,
        input.isLeapMonth ?? false,
        fixLeap,
        'zh-CN',
      );

  const soulPalaceBranch = String(astrolabe.earthlyBranchOfSoulPalace);
  const palaces = astrolabe.palaces.map((palace) => mapPalace(palace, soulPalaceBranch));
  const transformations = collectTransformations(palaces);

  return {
    schemaVersion: '1.0',
    engine: {
      name: 'iztro',
      language: 'zh-CN',
    },
    input: { ...input },
    effectiveBirthTime,
    basics: {
      solarDate: String(astrolabe.solarDate),
      lunarDate: String(astrolabe.lunarDate),
      lunar: numericLunarFacts(astrolabe.rawDates.lunarDate),
      chineseDate: String(astrolabe.chineseDate),
      time: String(astrolabe.time),
      timeRange: String(astrolabe.timeRange),
      sign: String(astrolabe.sign),
      zodiac: String(astrolabe.zodiac),
      soulPalaceBranch,
      bodyPalaceBranch: String(astrolabe.earthlyBranchOfBodyPalace),
      soulStar: String(astrolabe.soul),
      bodyStar: String(astrolabe.body),
      fiveElementsClass: String(astrolabe.fiveElementsClass),
    },
    palaces,
    transformations,
    fortune: {
      decadals: palaces.map((palace) => palace.decadal),
      smallLimits: palaces.map((palace) => ({
        palaceIndex: palace.index,
        palaceName: palace.name,
        ages: [...palace.smallLimitAges],
      })),
      ...(options.fortuneDate
        ? { snapshot: buildFortuneSnapshot(astrolabe, options.fortuneDate) }
        : {}),
    },
    patterns: [],
  };
}
