import assert from 'node:assert/strict';
import test from 'node:test';
import { formToSearchParams, searchParamsToForm } from '../share';
import type { BirthFormState } from '@/components/BirthForm';

test('share links round-trip the county-level location and code', () => {
  const form: BirthFormState = {
    name: '测试', year: '2000', month: '8', day: '16', clockHour: '8', clockMinute: '0',
    unknownTime: false, province: '安徽省', city: '池州市', district: '贵池区', locationCode: '341702',
    longitude: 117.488342, gender: 'female',
  };
  const restored = searchParamsToForm(formToSearchParams(form));
  assert.equal(restored?.province, '安徽省');
  assert.equal(restored?.city, '池州市');
  assert.equal(restored?.district, '贵池区');
  assert.equal(restored?.locationCode, '341702');
  assert.equal(restored?.longitude, 117.488342);
});
