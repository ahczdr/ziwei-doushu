import type { ChartInput } from '../../chart-types';

export interface P1Fixture {
  id: string;
  description: string;
  input: ChartInput;
  fortuneDate?: string;
  expected?: {
    solarDate?: string;
    lunarDate?: string;
    chineseDate?: string;
    time?: string;
    zodiac?: string;
    soulPalaceBranch?: string;
    bodyPalaceBranch?: string;
    fiveElementsClass?: string;
    effectiveDate?: string;
    effectiveHourIndex?: number;
    fortune?: {
      decadalIndex?: number;
      yearlyIndex?: number;
      yearlyStem?: string;
      yearlyBranch?: string;
      nominalAge?: number;
    };
  };
  publicReference?: {
    name: string;
    source: string;
    note: string;
  };
}

/**
 * P1 固定输入集。
 *
 * 其中 canonical-2000-* 与 fortune-1991 来自 iztro 上游回归样例；
 * public-* 使用本仓库 famous.ts 的公开人物输入，只作为人工复核样本，
 * 不把人物经历或自然语言“命理解读”作为事实断言。
 */
export const P1_FIXTURES: P1Fixture[] = [
  {
    id: 'canonical-2000-solar',
    description: 'iztro 上游标准阳历案例 + 固定流年快照',
    input: { calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' },
    fortuneDate: '2023-8-19 3:12',
    expected: {
      solarDate: '2000-8-16',
      lunarDate: '二〇〇〇年七月十七',
      chineseDate: '庚辰 甲申 丙午 庚寅',
      time: '寅时',
      zodiac: '龙',
      soulPalaceBranch: '午',
      bodyPalaceBranch: '戌',
      fiveElementsClass: '木三局',
      fortune: {
        decadalIndex: 2,
        yearlyIndex: 1,
        yearlyStem: '癸',
        yearlyBranch: '卯',
        nominalAge: 24,
      },
    },
  },
  {
    id: 'canonical-2000-lunar',
    description: '与标准阳历案例等价的农历输入',
    input: { calendarType: 'lunar', date: '2000-7-17', hourIndex: 2, gender: 'female' },
    expected: {
      solarDate: '2000-8-16',
      lunarDate: '二〇〇〇年七月十七',
      chineseDate: '庚辰 甲申 丙午 庚寅',
      time: '寅时',
      zodiac: '龙',
      soulPalaceBranch: '午',
      bodyPalaceBranch: '戌',
      fiveElementsClass: '木三局',
    },
  },
  {
    id: 'true-solar-time-overrides-hour',
    description: '真太阳时应成为实际排盘时刻，而不是展示元数据',
    input: {
      calendarType: 'solar',
      date: '2000-8-16',
      hourIndex: 1,
      gender: 'female',
      birthplace: '测试地点',
      longitude: 120,
      trueSolarTime: '2000-08-16T03:12',
    },
    expected: {
      solarDate: '2000-8-16',
      time: '寅时',
      soulPalaceBranch: '午',
      bodyPalaceBranch: '戌',
      fiveElementsClass: '木三局',
      effectiveDate: '2000-8-16',
      effectiveHourIndex: 2,
    },
  },
  {
    id: 'early-zi',
    description: '早子时边界',
    input: { calendarType: 'solar', date: '1990-1-1', hourIndex: 0, gender: 'male' },
  },
  {
    id: 'late-zi',
    description: '晚子时 index=12 边界',
    input: { calendarType: 'solar', date: '1990-1-1', hourIndex: 12, gender: 'male' },
  },
  {
    id: 'chou-hour',
    description: '丑时 + 女性',
    input: { calendarType: 'solar', date: '1985-4-12', hourIndex: 1, gender: 'female' },
  },
  {
    id: 'mao-hour',
    description: '卯时',
    input: { calendarType: 'solar', date: '1992-6-30', hourIndex: 3, gender: 'male' },
  },
  {
    id: 'chen-hour',
    description: '辰时',
    input: { calendarType: 'solar', date: '1976-11-3', hourIndex: 4, gender: 'female' },
  },
  {
    id: 'si-hour',
    description: '巳时',
    input: { calendarType: 'solar', date: '2001-2-14', hourIndex: 5, gender: 'male' },
  },
  {
    id: 'wu-hour',
    description: '午时',
    input: { calendarType: 'solar', date: '1988-8-8', hourIndex: 6, gender: 'female' },
  },
  {
    id: 'wei-hour',
    description: '未时',
    input: { calendarType: 'solar', date: '1999-12-31', hourIndex: 7, gender: 'male' },
  },
  {
    id: 'shen-hour',
    description: '申时',
    input: { calendarType: 'solar', date: '1968-5-20', hourIndex: 8, gender: 'female' },
  },
  {
    id: 'you-hour',
    description: '酉时',
    input: { calendarType: 'solar', date: '2004-10-1', hourIndex: 9, gender: 'male' },
  },
  {
    id: 'xu-hour',
    description: '戌时',
    input: { calendarType: 'solar', date: '1979-7-7', hourIndex: 10, gender: 'female' },
  },
  {
    id: 'hai-hour',
    description: '亥时',
    input: { calendarType: 'solar', date: '2010-3-15', hourIndex: 11, gender: 'male' },
  },
  {
    id: 'lunar-normal',
    description: '普通农历输入',
    input: { calendarType: 'lunar', date: '2020-1-8', hourIndex: 4, gender: 'female' },
  },
  {
    id: 'lunar-leap-month',
    description: '闰月输入：2023 闰二月',
    input: {
      calendarType: 'lunar',
      date: '2023-2-5',
      hourIndex: 6,
      gender: 'male',
      isLeapMonth: true,
    },
  },
  {
    id: 'fortune-1991',
    description: 'iztro 上游第二组固定运限案例',
    input: { calendarType: 'solar', date: '1991-3-7', hourIndex: 6, gender: 'female' },
    fortuneDate: '2025-3-26',
    expected: {
      solarDate: '1991-3-7',
      fortune: {
        decadalIndex: 8,
        yearlyIndex: 3,
        yearlyStem: '乙',
        yearlyBranch: '巳',
      },
    },
  },
  {
    id: 'public-steve-jobs',
    description: '公开人物人工复核样本 1',
    input: { calendarType: 'solar', date: '1955-2-24', hourIndex: 6, gender: 'male' },
    publicReference: {
      name: '乔布斯',
      source: 'lib/ziwei/famous.ts',
      note: '仓库注明出生时辰为估算值，因此只用于人工 UI/排盘复核，不作为人物命理结论的证据。',
    },
  },
  {
    id: 'public-ma-yun',
    description: '公开人物人工复核样本 2',
    input: { calendarType: 'solar', date: '1964-9-10', hourIndex: 5, gender: 'male' },
    publicReference: {
      name: '马云',
      source: 'lib/ziwei/famous.ts',
      note: '仓库注明出生时辰为估算值，因此只用于人工 UI/排盘复核，不作为人物命理结论的证据。',
    },
  },
];
