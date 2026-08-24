import type { InterpretationTopic } from '../ai-agent';
import type { ChartInput } from '../chart-types';

const TOPICS = new Set<InterpretationTopic>(['overview', 'career', 'wealth', 'relationship', 'health-cultural', 'custom']);
const DATE_RE = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
const DATE_TIME_RE = /^(\d{4})-(\d{1,2})-(\d{1,2})[T\s](\d{1,2}):(\d{2})(?::\d{2})?$/;

export interface InterpretApiPayload {
  input: ChartInput;
  topic: InterpretationTopic;
  question?: string;
  fortuneDate?: string;
}

function validSolarParts(year: number, month: number, day: number): boolean {
  if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return false;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
}

function validChartDate(calendarType: ChartInput['calendarType'], value: string): boolean {
  const match = value.match(DATE_RE);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (calendarType === 'solar') return validSolarParts(year, month, day);
  return year >= 1900 && year <= 2100 && month >= 1 && month <= 12 && day >= 1 && day <= 30;
}

function validTrueSolarTime(value: string): boolean {
  const match = value.match(DATE_TIME_RE);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  return validSolarParts(year, month, day)
    && hour >= 0 && hour <= 23
    && minute >= 0 && minute <= 59;
}

export function isChartInput(value: unknown): value is ChartInput {
  if (!value || typeof value !== 'object') return false;
  const input = value as Record<string, unknown>;
  if (input.calendarType !== 'solar' && input.calendarType !== 'lunar') return false;
  if (typeof input.date !== 'string' || !validChartDate(input.calendarType, input.date)) return false;
  if (!Number.isInteger(input.hourIndex) || Number(input.hourIndex) < 0 || Number(input.hourIndex) > 12) return false;
  if (input.gender !== 'male' && input.gender !== 'female') return false;

  if (input.isLeapMonth !== undefined && typeof input.isLeapMonth !== 'boolean') return false;
  if (input.fixLeap !== undefined && typeof input.fixLeap !== 'boolean') return false;
  if (input.birthplace !== undefined && (typeof input.birthplace !== 'string' || input.birthplace.length > 200)) return false;
  if (input.longitude !== undefined && (
    typeof input.longitude !== 'number'
    || !Number.isFinite(input.longitude)
    || input.longitude < -180
    || input.longitude > 180
  )) return false;
  if (input.trueSolarTime !== undefined && (
    typeof input.trueSolarTime !== 'string'
    || input.trueSolarTime.length > 32
    || !validTrueSolarTime(input.trueSolarTime)
  )) return false;

  return true;
}

export function parseInterpretApiPayload(value: unknown): InterpretApiPayload | null {
  if (!value || typeof value !== 'object') return null;
  const payload = value as Record<string, unknown>;
  if (!isChartInput(payload.input)) return null;
  const topic = typeof payload.topic === 'string' && TOPICS.has(payload.topic as InterpretationTopic)
    ? payload.topic as InterpretationTopic
    : 'overview';
  const question = typeof payload.question === 'string' ? payload.question.trim().slice(0, 1000) : '';
  const fortuneDate = typeof payload.fortuneDate === 'string' ? payload.fortuneDate.trim() : '';
  if (fortuneDate && !validChartDate('solar', fortuneDate)) return null;
  return {
    input: payload.input,
    topic,
    ...(question ? { question } : {}),
    ...(fortuneDate ? { fortuneDate } : {}),
  };
}
