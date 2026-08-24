import assert from 'node:assert/strict';
import test from 'node:test';
import { isChartInput, parseInterpretApiPayload } from '../index';

test('P7 validates deterministic chart input and rejects malformed requests', () => {
  const input = { calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' };
  assert.equal(isChartInput(input), true);
  assert.equal(isChartInput({ ...input, hourIndex: 13 }), false);
  assert.equal(isChartInput({ ...input, gender: 'unknown' }), false);
  assert.equal(isChartInput({ ...input, date: '2001-2-29' }), false);
  assert.equal(isChartInput({ ...input, longitude: 181 }), false);
  assert.equal(isChartInput({ ...input, trueSolarTime: '2000-02-30T23:10' }), false);
  assert.equal(isChartInput({ ...input, trueSolarTime: '2000-08-16T23:10' }), true);
  assert.equal(parseInterpretApiPayload({ input: { nope: true } }), null);
});

test('P7 bounds untrusted question and falls back unknown topic to overview', () => {
  const input = { calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' };
  const parsed = parseInterpretApiPayload({ input, topic: 'not-a-topic', question: ' x '.repeat(700) });
  assert.ok(parsed);
  assert.equal(parsed.topic, 'overview');
  assert.ok((parsed.question?.length ?? 0) <= 1000);
});

test('P7 rejects malformed fortuneDate instead of turning it into a provider failure', () => {
  const input = { calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' };
  assert.equal(parseInterpretApiPayload({ input, fortuneDate: '2026-02-30' }), null);
  const parsed = parseInterpretApiPayload({ input, fortuneDate: '2026-08-24' });
  assert.ok(parsed);
  assert.equal(parsed.fortuneDate, '2026-08-24');
});

test('health-cultural remains an explicit API topic', () => {
  const input = { calendarType: 'solar', date: '2000-8-16', hourIndex: 2, gender: 'female' };
  const parsed = parseInterpretApiPayload({ input, topic: 'health-cultural' });
  assert.ok(parsed);
  assert.equal(parsed.topic, 'health-cultural');
});
