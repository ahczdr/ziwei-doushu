export interface TrueSolarTimeInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  /** East longitude in decimal degrees. */
  longitude: number;
  /** Beijing time uses 120°E. */
  standardMeridian?: number;
}

export interface TrueSolarTimeResult {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  /** iztro: 0=early Zi, 1=Chou ... 11=Hai, 12=late Zi. */
  hourIndex: number;
  isoLocal: string;
  longitudeCorrectionMinutes: number;
  equationOfTimeMinutes: number;
  totalCorrectionMinutes: number;
}

function pad2(value: number): string {
  return String(value).padStart(2, '0');
}

function isValidGregorianDate(year: number, month: number, day: number): boolean {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return false;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
}

function dayOfYear(year: number, month: number, day: number): number {
  const start = Date.UTC(year, 0, 1);
  const current = Date.UTC(year, month - 1, day);
  return Math.floor((current - start) / 86_400_000) + 1;
}

/** NOAA-style approximation of the equation of time, in minutes. */
export function equationOfTimeMinutes(
  year: number,
  month: number,
  day: number,
  hour = 12,
): number {
  if (!isValidGregorianDate(year, month, day)) {
    throw new RangeError(`invalid Gregorian date: ${year}-${month}-${day}`);
  }
  if (!Number.isFinite(hour) || hour < 0 || hour > 24) {
    throw new RangeError(`hour must be between 0 and 24, received ${hour}`);
  }

  const n = dayOfYear(year, month, day);
  const daysInYear = new Date(Date.UTC(year, 1, 29)).getUTCMonth() === 1 ? 366 : 365;
  const gamma = (2 * Math.PI / daysInYear) * (n - 1 + (hour - 12) / 24);
  return 229.18 * (
    0.000075
    + 0.001868 * Math.cos(gamma)
    - 0.032077 * Math.sin(gamma)
    - 0.014615 * Math.cos(2 * gamma)
    - 0.040849 * Math.sin(2 * gamma)
  );
}

export function solarClockHourToIztroIndex(hour: number): number {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new RangeError(`clock hour must be an integer between 0 and 23, received ${hour}`);
  }
  if (hour === 23) return 12;
  if (hour === 0) return 0;
  return Math.floor((hour + 1) / 2);
}

/**
 * Convert China Standard Time (or another standard-meridian clock time) to
 * apparent/true solar time using longitude correction + equation of time.
 * UTC arithmetic is used only as a timezone-neutral minute counter, so host
 * timezone/DST cannot change the result.
 */
export function calculateTrueSolarTime(input: TrueSolarTimeInput): TrueSolarTimeResult {
  const { year, month, day, hour, minute, longitude } = input;
  const standardMeridian = input.standardMeridian ?? 120;

  if (!isValidGregorianDate(year, month, day)) {
    throw new RangeError(`invalid Gregorian date: ${year}-${month}-${day}`);
  }
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new RangeError(`hour must be an integer between 0 and 23, received ${hour}`);
  }
  if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
    throw new RangeError(`minute must be an integer between 0 and 59, received ${minute}`);
  }
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    throw new RangeError(`longitude must be between -180 and 180, received ${longitude}`);
  }
  if (!Number.isFinite(standardMeridian) || standardMeridian < -180 || standardMeridian > 180) {
    throw new RangeError(`standardMeridian must be between -180 and 180, received ${standardMeridian}`);
  }

  const longitudeCorrectionMinutes = (longitude - standardMeridian) * 4;
  const eot = equationOfTimeMinutes(year, month, day, hour + minute / 60);
  // The birth form works at minute precision, so make the correction explicit and deterministic.
  const totalCorrectionMinutes = Math.round(longitudeCorrectionMinutes + eot);
  const corrected = new Date(
    Date.UTC(year, month - 1, day, hour, minute) + totalCorrectionMinutes * 60_000,
  );

  const resultYear = corrected.getUTCFullYear();
  const resultMonth = corrected.getUTCMonth() + 1;
  const resultDay = corrected.getUTCDate();
  const resultHour = corrected.getUTCHours();
  const resultMinute = corrected.getUTCMinutes();

  return {
    year: resultYear,
    month: resultMonth,
    day: resultDay,
    hour: resultHour,
    minute: resultMinute,
    hourIndex: solarClockHourToIztroIndex(resultHour),
    isoLocal: `${resultYear}-${pad2(resultMonth)}-${pad2(resultDay)}T${pad2(resultHour)}:${pad2(resultMinute)}`,
    longitudeCorrectionMinutes,
    equationOfTimeMinutes: eot,
    totalCorrectionMinutes,
  };
}
