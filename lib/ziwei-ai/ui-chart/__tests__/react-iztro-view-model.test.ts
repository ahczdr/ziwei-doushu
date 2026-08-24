import assert from 'node:assert/strict';
import test from 'node:test';
import { astro } from 'iztro';
import {
  birthInfoToChartInput,
  buildReactIztroViewModel,
} from '../react-iztro-view-model';

test('standard solar case maps ChartFacts to react-iztro props', () => {
  const vm = buildReactIztroViewModel({
    calendarType: 'solar',
    date: '2000-8-16',
    hourIndex: 2,
    gender: 'female',
  });

  assert.equal(vm.props.birthday, '2000-8-16');
  assert.equal(vm.props.birthTime, 2);
  assert.equal(vm.props.birthdayType, 'solar');
  assert.equal(vm.props.gender, 'female');
  assert.equal(vm.consistency.soulPalaceBranch, '午');
  assert.equal(vm.consistency.bodyPalaceBranch, '戌');
  assert.equal(vm.consistency.fiveElementsClass, '木三局');
  assert.equal(vm.consistency.transformationCount, 4);
});

test('lunar input is normalized to the same canonical solar display input', () => {
  const vm = buildReactIztroViewModel({
    calendarType: 'lunar',
    date: '2000-7-17',
    hourIndex: 2,
    gender: 'female',
  });

  assert.equal(vm.facts.basics.solarDate, '2000-8-16');
  assert.equal(vm.props.birthday, '2000-8-16');
  assert.equal(vm.props.birthdayType, 'solar');
  assert.equal(vm.props.isLeapMonth, false);
});

test('true solar time controls both facts and standard chart render props', () => {
  const vm = buildReactIztroViewModel({
    calendarType: 'solar',
    date: '2000-8-16',
    hourIndex: 1,
    gender: 'female',
    trueSolarTime: '2000-08-16T03:12',
  });

  assert.equal(vm.facts.effectiveBirthTime.source, 'true-solar-time');
  assert.equal(vm.facts.effectiveBirthTime.hourIndex, 2);
  assert.equal(vm.props.birthday, '2000-8-16');
  assert.equal(vm.props.birthTime, 2);
});

test('late Zi index 12 is preserved into react-iztro instead of collapsing to early Zi', () => {
  const vm = buildReactIztroViewModel({
    calendarType: 'solar',
    date: '1990-1-1',
    hourIndex: 12,
    gender: 'male',
  });

  assert.equal(vm.facts.effectiveBirthTime.hourIndex, 12);
  assert.equal(vm.props.birthTime, 12);
});

test('react-iztro options are pinned to the same deterministic iztro policy as ChartFacts', () => {
  // 模拟另一个 UI/调用方先污染 iztro 全局状态。
  astro.config({
    yearDivide: 'exact',
    horoscopeDivide: 'exact',
    ageDivide: 'birthday',
    dayDivide: 'current',
    algorithm: 'zhongzhou',
  });

  const vm = buildReactIztroViewModel({
    calendarType: 'solar',
    date: '2000-8-16',
    hourIndex: 2,
    gender: 'female',
  });

  assert.deepEqual(vm.props.options, {
    yearDivide: 'normal',
    horoscopeDivide: 'normal',
    ageDivide: 'normal',
    dayDivide: 'forward',
    algorithm: 'default',
  });
  assert.equal(vm.consistency.soulPalaceBranch, '午');
  assert.equal(vm.consistency.bodyPalaceBranch, '戌');
});

test('legacy BirthInfo bridge keeps the already corrected time index and location metadata', () => {
  const input = birthInfoToChartInput({
    year: 2000,
    month: 8,
    day: 16,
    hour: 12,
    gender: 'female',
    province: '安徽省',
    city: '池州市',
    longitude: 117.49,
  });

  assert.deepEqual(input, {
    calendarType: 'solar',
    date: '2000-8-16',
    hourIndex: 12,
    gender: 'female',
    birthplace: '安徽省 / 池州市',
    longitude: 117.49,
  });
});
