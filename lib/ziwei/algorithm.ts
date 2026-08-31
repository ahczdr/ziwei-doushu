/**
 * 紫微斗数排盘算法 — 基于 iztro 开源库
 * https://github.com/SylarLong/iztro
 */

import { astro } from 'iztro';
import { Solar } from 'lunar-javascript';
import type { BirthInfo, LunarInfo, Star, Palace, DaXian, DaXianSiHua, ZiweiChart } from './types';
import { BRANCHES, STEMS } from './constants';
// 飞星派工具仅供导出，不再在排盘时调用（倪师《天纪 03》：四化星永远固定不动）
// import { detectSelfSihua, getSiHuaByStem } from './sihua';

// ─── 农历信息（兼容保留）────────────────────────────────────────
export function getLunarInfo(year: number, month: number, day: number): LunarInfo {
  const solar = Solar.fromYmd(year, month, day);
  const lunar = solar.getLunar();
  const yearStem = STEMS.indexOf(lunar.getYearGan());
  const yearBranch = BRANCHES.indexOf(lunar.getYearZhi());
  const rawMonth = lunar.getMonth();
  return {
    lunarYear: lunar.getYear(),
    lunarMonth: Math.abs(rawMonth),
    lunarDay: lunar.getDay(),
    yearStem: yearStem >= 0 ? yearStem : 0,
    yearBranch: yearBranch >= 0 ? yearBranch : 0,
    isLeapMonth: rawMonth < 0,
  };
}

// ─── 亮度映射 ────────────────────────────────────────────────────
function mapBrightness(b?: string): 'bright' | 'normal' | 'dim' {
  if (!b) return 'normal';
  if (b === '庙' || b === '旺') return 'bright';
  if (b === '陷' || b === '不') return 'dim';
  return 'normal';
}

// ─── 星曜类型映射 ────────────────────────────────────────────────
const SHA_STARS = new Set(['擎羊', '陀罗', '火星', '铃星', '地空', '地劫',
  '天空', '旬空', '截路', '大耗', '天使', '天伤']);
const LUCKY_STARS = new Set(['文昌', '文曲', '左辅', '右弼', '天魁', '天钺',
  '禄存', '天马', '天官', '天福', '天才', '天寿', '三台', '八座', '恩光',
  '天贵', '台辅', '龙池', '凤阁', '红鸾', '天喜', '孤辰', '寡宿']);

function mapStarType(starName: string, iztroType: string): Star['type'] {
  if (SHA_STARS.has(starName)) return 'sha';
  if (LUCKY_STARS.has(starName)) return 'lucky';
  const t = (iztroType ?? '').toLowerCase();
  if (t === '主星' || t === 'major') return 'major';
  if (t === '煞星' || t === 'tough') return 'sha';
  if (t === '吉星' || t === 'soft' || t === '禄存' || t === '天马') return 'lucky';
  return 'minor';
}

// ─── 五行局名称 → 数字 ──────────────────────────────────────────
function parseWuxingJu(name: string): number {
  if (name.includes('二')) return 2;
  if (name.includes('三')) return 3;
  if (name.includes('四')) return 4;
  if (name.includes('五')) return 5;
  if (name.includes('六')) return 6;
  return 3;
}

// ─── 主函数：生成命盘 ────────────────────────────────────────────
export function generateChart(birthInfo: BirthInfo): ZiweiChart {
  const { year, month, day, hour, gender } = birthInfo;

  // 调用 iztro 排盘
  const solarDate = `${year}-${month}-${day}`;
  const iztroGender = gender === 'male' ? '男' : '女';
  const astrolabe = astro.bySolar(solarDate, hour, iztroGender, true, 'zh-CN');

  // ── 组装十二宫 ──
  const palaces: Palace[] = astrolabe.palaces.map(p => {
    const branch = BRANCHES.indexOf(p.earthlyBranch as string);
    const stem   = STEMS.indexOf(p.heavenlyStem as string);

    // 合并所有星：主星 + 次星 + 杂耀
    const allStars: Star[] = [
      ...(p.majorStars ?? []).map(s => ({
        name:       s.name as string,
        type:       'major' as const,
        brightness: mapBrightness(s.brightness as string),
        siHua:      s.mutagen as Star['siHua'],
      })),
      ...(p.minorStars ?? []).map(s => ({
        name:  s.name as string,
        type:  mapStarType(s.name as string, s.type as string),
        siHua: s.mutagen as Star['siHua'],
      })),
      ...(p.adjectiveStars ?? []).map(s => ({
        name:  s.name as string,
        type:  'minor' as const,
        siHua: s.mutagen as Star['siHua'],
      })),
    ];

    const range = p.decadal?.range;
    return {
      branch:        branch >= 0 ? branch : 0,
      stem:          stem >= 0 ? stem : 0,
      name:          p.name as string,
      stars:         allStars,
      daXianAge:     range ? [range[0], range[1]] as [number, number] : undefined,
      isMingGong:    p.name === '命宫',
      isShenGong:    p.isBodyPalace ?? false,
      isCurrentDaXian: false,
      changsheng12:  p.changsheng12 as string | undefined,
      boshi12:       p.boshi12 as string | undefined,
      jiangqian12:   p.jiangqian12 as string | undefined,
      suiqian12:     p.suiqian12 as string | undefined,
      xiaoXianAges:  Array.isArray(p.ages) ? (p.ages as number[]) : undefined,
    };
  });

  // ── 当前年龄 & 大限 ──
  const currentYear = new Date().getFullYear();
  const currentAge  = currentYear - year;

  palaces.forEach(p => {
    if (p.daXianAge && currentAge >= p.daXianAge[0] && currentAge <= p.daXianAge[1]) {
      p.isCurrentDaXian = true;
    }
  });

  // ── 借对宫结构化字段（codex P0：避免文案层从自然语言反查借宫信息）──
  palaces.forEach(p => {
    p.oppositeBranch = (p.branch + 6) % 12;
    const mainStars = p.stars.filter(s => s.type === 'major');
    p.isEmpty = mainStars.length === 0;
    if (p.isEmpty) {
      const oppPalace = palaces.find(q => q.branch === p.oppositeBranch);
      if (oppPalace) {
        p.borrowedFromBranch = oppPalace.branch;
        p.borrowedFromName = oppPalace.name;
        p.borrowedStars = oppPalace.stars.filter(s => s.type === 'major').map(s => s.name);
      }
    }
  });

  // ── 关键宫支 ──
  const mingGongBranch = BRANCHES.indexOf(astrolabe.earthlyBranchOfSoulPalace as string);
  const shenGongBranch = BRANCHES.indexOf(astrolabe.earthlyBranchOfBodyPalace as string);
  const wuxingJuName   = astrolabe.fiveElementsClass as string;
  const wuxingJu       = parseWuxingJu(wuxingJuName);

  // ── 紫微星位置 ──
  const ziweiPalace = palaces.find(p => p.stars.some(s => s.name === '紫微' && s.type === 'major'));
  const ziweiPos    = ziweiPalace?.branch ?? 0;

  // ── 大限数组（倪师《天纪》正统：四化永远固定，大限只看宫位移动）──
  // 不再生成 daXians[].siHua / stemIndex / stemName（飞星派字段已下线）
  const daXians: DaXian[] = palaces
    .filter(p => p.daXianAge)
    .sort((a, b) => a.daXianAge![0] - b.daXianAge![0])
    .map(p => ({
      startAge:    p.daXianAge![0],
      endAge:      p.daXianAge![1],
      palaceBranch: p.branch,
      palaceName:   p.name,
    }));

  // 宫干自化已下线（倪师不主张飞星派宫干自化论）

  const currentDaXianIndex = daXians.findIndex(
    dx => currentAge >= dx.startAge && currentAge <= dx.endAge,
  );

  // ── 农历信息 ──
  const lunarInfo = getLunarInfo(year, month, day);

  // ── 传统盘中心信息（四柱 / 起运 / 命主身主 / 农历文本） ──
  const fourPillars = (astrolabe.chineseDate as string)
    .split(/\s+/)
    .filter(s => s.length === 2)
    .map(s => ({ gan: s[0], zhi: s[1] }));

  const hourHms = HOUR_INDEX_TO_HMS[hour] ?? [7, 30];
  const yun = Solar.fromYmdHms(year, month, day, hourHms[0], hourHms[1], 0)
    .getLunar()
    .getEightChar()
    .getYun(gender === 'male' ? 1 : 0);
  const qiYunText = `出生后 ${yun.getStartYear()}年${yun.getStartMonth()}月${yun.getStartDay()}天 八字起运`;
  const baZiDaYun = (yun.getDaYun() ?? [])
    .slice(1, 9) // 第0项为出生前；取8步大运
    .map(d => ({ ganZhi: d.getGanZhi() as string, startAge: d.getStartAge() as number, startYear: d.getStartYear() as number }));

  const lunarDateText = `${STEMS[lunarInfo.yearStem]}${BRANCHES[lunarInfo.yearBranch]}年` +
    `${lunarInfo.isLeapMonth ? '闰' : ''}${MONTH_CN[lunarInfo.lunarMonth] ?? ''}月${DAY_CN[lunarInfo.lunarDay] ?? ''}日`;

  return {
    birthInfo,
    lunarInfo,
    mingGongBranch: mingGongBranch >= 0 ? mingGongBranch : 0,
    shenGongBranch: shenGongBranch >= 0 ? shenGongBranch : 0,
    wuxingJu,
    wuxingJuName,
    ziweiPos,
    palaces,
    daXians,
    currentAge,
    currentDaXianIndex,
    mingZhu: astrolabe.soul as string,
    shenZhu: astrolabe.body as string,
    lunarDateText,
    fourPillars,
    qiYunText,
    baZiDaYun,
  };
}

// iztro 时辰索引 → 代表时刻（用于八字起运计算）
const HOUR_INDEX_TO_HMS: Record<number, [number, number]> = {
  0: [23, 30], 1: [1, 30], 2: [3, 30], 3: [5, 30], 4: [7, 30], 5: [9, 30], 6: [11, 30],
  7: [13, 30], 8: [15, 30], 9: [17, 30], 10: [19, 30], 11: [21, 30], 12: [0, 30],
};

const MONTH_CN: Record<number, string> = {
  1: '正', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六',
  7: '七', 8: '八', 9: '九', 10: '十', 11: '十一', 12: '十二',
};

const DAY_CN: Record<number, string> = Object.fromEntries(
  Array.from({ length: 30 }, (_, i) => {
    const d = i + 1;
    const n = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
      '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
      '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    return [d, n[i]];
  }),
) as Record<number, string>;
