import test from 'node:test';
import assert from 'node:assert/strict';
import { LOCATION_PROVINCES, findLocation } from '../location-data';

test('national location snapshot contains Anhui -> Chizhou -> Guichi', () => {
  const chizhou = findLocation(['安徽省', '池州市']);
  assert.ok(chizhou);
  assert.equal(chizhou.name, '池州市');
  assert.equal(findLocation(['安徽省', '池州市', '贵池区'])?.name, '贵池区');
  assert.equal(findLocation(['安徽省', '池州市', '贵池区'])?.level, 'district');
  assert.equal(findLocation(['安徽省', '池州市', '贵池区'])?.longitude, 117.488342);
});

test('snapshot has complete parent links and finite east longitudes', () => {
  assert.equal(LOCATION_PROVINCES.length, 34);
  for (const province of LOCATION_PROVINCES) {
    assert.ok(province.code);
    assert.ok(province.name);
    for (const city of province.children) {
      assert.equal(city.parentCode, province.code);
      for (const district of city.children) {
        assert.equal(district.parentCode, city.code);
        assert.ok(Number.isFinite(district.longitude));
        assert.ok(district.longitude >= 73 && district.longitude <= 136);
      }
    }
  }
});
