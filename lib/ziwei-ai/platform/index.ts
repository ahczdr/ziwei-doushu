import type { InterpretationTopic } from '../ai-agent';
import type { ChartInput } from '../chart-types';

const TOPICS = new Set<InterpretationTopic>(['overview', 'career', 'wealth', 'relationship', 'health-cultural', 'custom']);

export interface InterpretApiPayload {
  input: ChartInput;
  topic: InterpretationTopic;
  question?: string;
  fortuneDate?: string;
}

export function isChartInput(value: unknown): value is ChartInput {
  if (!value || typeof value !== 'object') return false;
  const input = value as Record<string, unknown>;
  return (input.calendarType === 'solar' || input.calendarType === 'lunar')
    && typeof input.date === 'string'
    && input.date.length > 0
    && input.date.length <= 32
    && Number.isInteger(input.hourIndex)
    && Number(input.hourIndex) >= 0
    && Number(input.hourIndex) <= 12
    && (input.gender === 'male' || input.gender === 'female');
}

export function parseInterpretApiPayload(value: unknown): InterpretApiPayload | null {
  if (!value || typeof value !== 'object') return null;
  const payload = value as Record<string, unknown>;
  if (!isChartInput(payload.input)) return null;
  const topic = typeof payload.topic === 'string' && TOPICS.has(payload.topic as InterpretationTopic)
    ? payload.topic as InterpretationTopic
    : 'overview';
  const question = typeof payload.question === 'string' ? payload.question.trim().slice(0, 1000) : '';
  const fortuneDate = typeof payload.fortuneDate === 'string' ? payload.fortuneDate.trim().slice(0, 32) : '';
  return {
    input: payload.input,
    topic,
    ...(question ? { question } : {}),
    ...(fortuneDate ? { fortuneDate } : {}),
  };
}
