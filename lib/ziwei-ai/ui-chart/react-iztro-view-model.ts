import type { BirthInfo } from '../../ziwei/types';
import {
  buildChartFacts,
  DETERMINISTIC_IZTRO_CONFIG,
} from '../chart-engine/iztro-adapter';
import type { ChartFacts, ChartInput } from '../chart-types';

export interface ReactIztroViewOptions {
  fortuneDate?: string;
  horoscopeDate?: string | Date;
  horoscopeHour?: number;
  width?: number | string;
  centerPalaceAlign?: boolean;
}

/**
 * 与 react-iztro IztrolabeProps 的公共稳定子集。
 *
 * 不直接复用第三方类型，避免 chart-engine / tests 被 React UI 包反向绑定。
 */
export interface ReactIztroRenderProps {
  birthday: string;
  birthTime: number;
  gender: 'male' | 'female';
  birthdayType: 'solar';
  isLeapMonth: false;
  fixLeap: boolean;
  lang: 'zh-CN';
  astroType: 'heaven';
  options: {
    yearDivide: 'normal';
    horoscopeDivide: 'normal';
    ageDivide: 'normal';
    dayDivide: 'forward';
    algorithm: 'default';
  };
  horoscopeDate?: string | Date;
  horoscopeHour?: number;
  width?: number | string;
  centerPalaceAlign?: boolean;
}

export interface ReactIztroConsistency {
  canonicalSolarDate: string;
  effectiveHourIndex: number;
  soulPalaceBranch: string;
  bodyPalaceBranch: string;
  fiveElementsClass: string;
  transformationCount: number;
}

export interface ReactIztroViewModel {
  facts: ChartFacts;
  props: ReactIztroRenderProps;
  consistency: ReactIztroConsistency;
}

/**
 * Legacy BirthInfo -> P1 ChartInput compatibility bridge.
 *
 * `ZiweiAiBirthForm` now preserves a complete true-solar timestamp when available.
 * Passing it through here lets ChartFacts retain cross-midnight dates and distinguish
 * early Zi (0) from late Zi (12).
 */
export function birthInfoToChartInput(info: BirthInfo): ChartInput {
  const birthplace = [info.province, info.city].filter(Boolean).join(' / ') || undefined;
  return {
    calendarType: 'solar',
    date: `${info.year}-${info.month}-${info.day}`,
    hourIndex: info.hour,
    gender: info.gender,
    ...(birthplace ? { birthplace } : {}),
    ...(info.longitude !== undefined ? { longitude: info.longitude } : {}),
    ...(info.trueSolarTime ? { trueSolarTime: info.trueSolarTime } : {}),
  };
}

/**
 * 将统一命盘事实转换为 react-iztro 的显示参数。
 *
 * 关键设计：无论原始输入是阳历、农历、闰月还是真太阳时，显示层一律使用
 * ChartFacts 已规范化的公历日期 + 有效时辰，因此 react-iztro 只负责“显示”，
 * 不再重新解释原始输入语义。
 */
export function buildReactIztroViewModel(
  input: ChartInput,
  options: ReactIztroViewOptions = {},
): ReactIztroViewModel {
  const facts = buildChartFacts(input, { fortuneDate: options.fortuneDate });

  const props: ReactIztroRenderProps = {
    birthday: facts.basics.solarDate,
    birthTime: facts.effectiveBirthTime.hourIndex,
    gender: input.gender,
    birthdayType: 'solar',
    isLeapMonth: false,
    fixLeap: input.fixLeap ?? true,
    lang: 'zh-CN',
    astroType: 'heaven',
    options: { ...DETERMINISTIC_IZTRO_CONFIG },
    ...(options.horoscopeDate !== undefined
      ? { horoscopeDate: options.horoscopeDate }
      : {}),
    ...(options.horoscopeHour !== undefined
      ? { horoscopeHour: options.horoscopeHour }
      : {}),
    ...(options.width !== undefined ? { width: options.width } : {}),
    ...(options.centerPalaceAlign !== undefined
      ? { centerPalaceAlign: options.centerPalaceAlign }
      : {}),
  };

  return {
    facts,
    props,
    consistency: {
      canonicalSolarDate: facts.basics.solarDate,
      effectiveHourIndex: facts.effectiveBirthTime.hourIndex,
      soulPalaceBranch: facts.basics.soulPalaceBranch,
      bodyPalaceBranch: facts.basics.bodyPalaceBranch,
      fiveElementsClass: facts.basics.fiveElementsClass,
      transformationCount: facts.transformations.length,
    },
  };
}
