export interface BirthInfo {
  year: number;      // Gregorian year used for the effective chart date
  month: number;     // Gregorian month (1-12)
  day: number;       // Gregorian day
  hour: number;      // iztro hour index: 0=early Zi, 1=Chou ... 11=Hai, 12=late Zi
  gender: 'male' | 'female';
  name?: string;
  province?: string;   // 出生省份
  city?: string;       // 出生城市
  district?: string;   // 出生县区
  locationCode?: string; // 国家行政区划代码
  longitude?: number;  // 出生地经度（用于真太阳时校正）
  /** 完整真太阳时，含跨日后的公历日期，例如 2000-08-16T23:42。 */
  trueSolarTime?: string;
}

export interface LunarInfo {
  lunarYear: number;
  lunarMonth: number;    // positive = normal, negative = leap month
  lunarDay: number;
  yearStem: number;      // 0-9 (甲乙丙丁戊己庚辛壬癸)
  yearBranch: number;    // 0-11 (子丑寅卯辰巳午未申酉戌亥)
  isLeapMonth: boolean;
}

export type SiHua = '禄' | '权' | '科' | '忌';

export interface Star {
  name: string;
  type: 'major' | 'minor' | 'lucky' | 'sha';
  siHua?: SiHua;
  brightness?: 'bright' | 'normal' | 'dim';  // 庙旺利陷
}

export interface SelfSihuaMark {
  siHua: SiHua;       // 禄/权/科/忌
  starName: string;   // 自化的星
}

export interface Palace {
  branch: number;      // 0-11 (地支索引)
  stem: number;        // 0-9 (天干索引)
  name: string;        // 宫名
  stars: Star[];
  daXianAge?: [number, number];   // 大限年龄段
  isCurrentDaXian?: boolean;
  isMingGong?: boolean;
  isShenGong?: boolean;
  /** 宫干自化（倪师体系核心） */
  selfSihua?: SelfSihuaMark[];
  /** 对宫地支索引（永远 = (branch + 6) % 12） */
  oppositeBranch?: number;
  /** 是否空宫（无主星） */
  isEmpty?: boolean;
  /** 若为空宫，借自哪个宫的地支索引 = oppositeBranch */
  borrowedFromBranch?: number;
  /** 若为空宫，借自哪个宫名 */
  borrowedFromName?: string;
  /** 若为空宫，借到的对宫主星名列表（结构化数据，文案层不再需要从文本反查借宫信息） */
  borrowedStars?: string[];
  /** 传统盘用：长生十二神 */
  changsheng12?: string;
  /** 传统盘用：博士十二神 */
  boshi12?: string;
  /** 传统盘用：将前十二神 */
  jiangqian12?: string;
  /** 传统盘用：岁前十二神 */
  suiqian12?: string;
  /** 传统盘用：小限虚岁年龄列表 */
  xiaoXianAges?: number[];
}

export interface DaXianSiHua {
  stemIndex: number;
  stemName: string;
  lu: string;    // 化禄星名
  quan: string;  // 化权星名
  ke: string;    // 化科星名
  ji: string;    // 化忌星名
}

export interface DaXian {
  startAge: number;
  endAge: number;
  palaceBranch: number;
  palaceName: string;
  stemIndex?: number;    // 大限宫的天干索引（用于大限四化）
  stemName?: string;
  siHua?: DaXianSiHua;   // 该大限四化（基于宫干）
}

/** 四柱干支对（传统盘中心信息用） */
export interface PillarPair {
  gan: string;
  zhi: string;
}

/** 八字大运项（传统盘中心大运排） */
export interface BaZiDaYun {
  ganZhi: string;   // 大运干支
  startAge: number; // 起运虚岁
  startYear: number; // 起运公历年
}

export interface ZiweiChart {
  birthInfo: BirthInfo;
  lunarInfo: LunarInfo;
  mingGongBranch: number;    // 命宫地支
  shenGongBranch: number;    // 身宫地支
  wuxingJu: number;          // 五行局 (2,3,4,5,6)
  wuxingJuName: string;      // e.g. '水二局'
  ziweiPos: number;          // 紫微星位置
  palaces: Palace[];         // 12宫，按地支0-11排序
  daXians: DaXian[];
  currentAge: number;
  currentDaXianIndex: number;
  /** 传统盘用：命主星名（如 禄存） */
  mingZhu?: string;
  /** 传统盘用：身主星名（如 天同） */
  shenZhu?: string;
  /** 传统盘用：农历日期文本（如 己卯年正月初一日） */
  lunarDateText?: string;
  /** 传统盘用：四柱（年/月/日/时） */
  fourPillars?: PillarPair[];
  /** 传统盘用：八字起运文本（如 出生后 3年10月23天 八字起运） */
  qiYunText?: string;
  /** 传统盘用：八字大运列表（第0项为出生前，渲染时跳过） */
  baZiDaYun?: BaZiDaYun[];
}
