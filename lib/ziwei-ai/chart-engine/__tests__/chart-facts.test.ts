import assert from 'node:assert/strict';
import test from 'node:test';
import { buildChartFacts, clockHourToIztroIndex } from '../iztro-adapter';
import { P1_FIXTURES } from './p1-fixtures';

const EXPECTED_TRANSFORMATIONS = ['禄', '权', '科', '忌'];

function allStars(facts: ReturnType<typeof buildChartFacts>) {
  return facts.palaces.flatMap((palace) => [
    ...palace.majorStars,
    ...palace.minorStars,
    ...palace.adjectiveStars,
  ]);
}

test('P1 fixture set contains exactly twenty regression inputs', () => {
  assert.equal(P1_FIXTURES.length, 20);
  assert.equal(P1_FIXTURES.filter((fixture) => fixture.publicReference).length, 2);
});

test('clock hour -> iztro index preserves early/late Zi boundaries', () => {
  assert.equal(clockHourToIztroIndex(0), 0);
  assert.equal(clockHourToIztroIndex(1), 1);
  assert.equal(clockHourToIztroIndex(2), 1);
  assert.equal(clockHourToIztroIndex(3), 2);
  assert.equal(clockHourToIztroIndex(22), 11);
  assert.equal(clockHourToIztroIndex(23), 12);
});

for (const fixture of P1_FIXTURES) {
  test(`ChartFacts regression: ${fixture.id}`, () => {
    const facts = buildChartFacts(fixture.input, { fortuneDate: fixture.fortuneDate });

    // Schema / JSON stability.
    assert.equal(facts.schemaVersion, '1.0');
    assert.deepEqual(Object.keys(facts).sort(), [
      'basics',
      'effectiveBirthTime',
      'engine',
      'fortune',
      'input',
      'palaces',
      'patterns',
      'schemaVersion',
      'transformations',
    ]);
    const roundTrip = JSON.parse(JSON.stringify(facts)) as typeof facts;
    assert.equal(roundTrip.schemaVersion, '1.0');
    assert.equal(roundTrip.palaces.length, 12);

    // 十二宫必须完整、索引唯一、宫名唯一。
    assert.equal(facts.palaces.length, 12);
    assert.equal(new Set(facts.palaces.map((palace) => palace.index)).size, 12);
    assert.equal(new Set(facts.palaces.map((palace) => palace.name)).size, 12);
    assert.equal(new Set(facts.palaces.map((palace) => palace.earthlyBranch)).size, 12);
    assert.equal(facts.palaces.filter((palace) => palace.isSoulPalace).length, 1);
    assert.equal(facts.palaces.filter((palace) => palace.isBodyPalace).length, 1);

    // 十四主星必须完整，星对象 ID 在单张 ChartFacts 中唯一。
    const stars = allStars(facts);
    const majorStars = facts.palaces.flatMap((palace) => palace.majorStars);
    assert.equal(majorStars.length, 14);
    assert.equal(new Set(stars.map((star) => star.id)).size, stars.length);

    // 本命四化必须恰好得到禄、权、科、忌各一条，并可反查到宫位内星曜。
    assert.deepEqual(
      facts.transformations.map((item) => item.kind),
      EXPECTED_TRANSFORMATIONS,
    );
    for (const transformation of facts.transformations) {
      const palace = facts.palaces.find((item) => item.index === transformation.palaceIndex);
      assert.ok(palace, `missing palace for transformation ${transformation.starName}`);
      const star = [
        ...palace.majorStars,
        ...palace.minorStars,
        ...palace.adjectiveStars,
      ].find(
        (item) =>
          item.name === transformation.starName &&
          item.transformation === transformation.kind,
      );
      assert.ok(star, `cannot reverse lookup ${transformation.starName}${transformation.kind}`);
    }

    // 大限 / 小限静态结构必须与十二宫一一对应。
    assert.equal(facts.fortune.decadals.length, 12);
    assert.equal(facts.fortune.smallLimits.length, 12);
    for (const decadal of facts.fortune.decadals) {
      assert.equal(decadal.ageRange.length, 2);
      assert.ok(decadal.ageRange[0] <= decadal.ageRange[1]);
    }

    // 只有明确指定日期时才允许生成运限快照，禁止依赖系统“今天”。
    if (fixture.fortuneDate) {
      assert.ok(facts.fortune.snapshot);
      assert.equal(facts.fortune.snapshot.solarDate, fixture.fortuneDate.split(' ')[0]);
      assert.equal(facts.fortune.snapshot.yearly.palaceNames.length, 12);
      assert.equal(facts.fortune.snapshot.decadal.palaceNames.length, 12);
    } else {
      assert.equal(facts.fortune.snapshot, undefined);
    }

    // 精确上游基线断言。
    if (fixture.expected) {
      const expected = fixture.expected;
      if (expected.solarDate) assert.equal(facts.basics.solarDate, expected.solarDate);
      if (expected.lunarDate) assert.equal(facts.basics.lunarDate, expected.lunarDate);
      if (expected.chineseDate) assert.equal(facts.basics.chineseDate, expected.chineseDate);
      if (expected.time) assert.equal(facts.basics.time, expected.time);
      if (expected.zodiac) assert.equal(facts.basics.zodiac, expected.zodiac);
      if (expected.soulPalaceBranch) {
        assert.equal(facts.basics.soulPalaceBranch, expected.soulPalaceBranch);
      }
      if (expected.bodyPalaceBranch) {
        assert.equal(facts.basics.bodyPalaceBranch, expected.bodyPalaceBranch);
      }
      if (expected.fiveElementsClass) {
        assert.equal(facts.basics.fiveElementsClass, expected.fiveElementsClass);
      }
      if (expected.effectiveDate) {
        assert.equal(facts.effectiveBirthTime.date, expected.effectiveDate);
      }
      if (expected.effectiveHourIndex !== undefined) {
        assert.equal(facts.effectiveBirthTime.hourIndex, expected.effectiveHourIndex);
      }

      if (expected.fortune) {
        const snapshot = facts.fortune.snapshot;
        assert.ok(snapshot);
        if (expected.fortune.decadalIndex !== undefined) {
          assert.equal(snapshot.decadal.index, expected.fortune.decadalIndex);
        }
        if (expected.fortune.yearlyIndex !== undefined) {
          assert.equal(snapshot.yearly.index, expected.fortune.yearlyIndex);
        }
        if (expected.fortune.yearlyStem) {
          assert.equal(snapshot.yearly.heavenlyStem, expected.fortune.yearlyStem);
        }
        if (expected.fortune.yearlyBranch) {
          assert.equal(snapshot.yearly.earthlyBranch, expected.fortune.yearlyBranch);
        }
        if (expected.fortune.nominalAge !== undefined) {
          assert.equal(snapshot.smallLimit.nominalAge, expected.fortune.nominalAge);
        }
      }
    }
  });
}
