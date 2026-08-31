declare module 'lunar-javascript' {
  class DaYun {
    getStartYear(): number;
    getStartAge(): number;
    getGanZhi(): string;
  }

  class Yun {
    getStartYear(): number;
    getStartMonth(): number;
    getStartDay(): number;
    getDaYun(): DaYun[];
  }

  class EightChar {
    getYun(gender: number): Yun; // 1 = 男, 0 = 女
  }

  class Lunar {
    getYear(): number;
    getMonth(): number;  // negative = leap month
    getDay(): number;
    getYearGan(): string;
    getYearZhi(): string;
    getMonthGan(): string;
    getMonthZhi(): string;
    getDayGan(): string;
    getDayZhi(): string;
    getEightChar(): EightChar;
  }

  class Solar {
    static fromYmd(year: number, month: number, day: number): Solar;
    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Solar;
    getLunar(): Lunar;
  }
}
