import assert from 'node:assert/strict';
import test from 'node:test';
import {
  calculateTrueSolarTime,
  equationOfTimeMinutes,
  solarClockHourToIztroIndex,
} from '../true-solar-time';

test('solarClockHourToIztroIndex preserves early and late Zi distinction', () => {
  assert.equal(solarClockHourToIztroIndex(0), 0);
  assert.equal(solarClockHourToIztroIndex(22), 11);
  assert.equal(solarClockHourToIztroIndex(23), 12);
});

test('equation of time is deterministic and within physical approximation range', () => {
  const first = equationOfTimeMinutes(2000, 8, 16, 12);
  const second = equationOfTimeMinutes(2000, 8, 16, 12);
  assert.equal(first, second);
  assert.ok(first > -20 && first < 20);
});

test('true solar correction can cross into the previous Gregorian date', () => {
  const result = calculateTrueSolarTime({
    year: 2000,
    month: 1,
    day: 1,
    hour: 0,
    minute: 5,
    longitude: 75,
  });
  assert.equal(result.year, 1999);
  assert.equal(result.month, 12);
  assert.equal(result.day, 31);
  assert.match(result.isoLocal, /^1999-12-31T/);
});

test('late Zi is retained as iztro index 12 after full solar correction', () => {
  const result = calculateTrueSolarTime({
    year: 2000,
    month: 6,
    day: 15,
    hour: 23,
    minute: 50,
    longitude: 120,
  });
  assert.equal(result.hour, 23);
  assert.equal(result.hourIndex, 12);
});

test('invalid civil input fails fast instead of silently normalizing dates', () => {
  assert.throws(() => calculateTrueSolarTime({
    year: 2001,
    month: 2,
    day: 29,
    hour: 12,
    minute: 0,
    longitude: 120,
  }), /invalid Gregorian date/);
});
