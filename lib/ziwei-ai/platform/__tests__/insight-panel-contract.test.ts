import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('components/InsightPanel.tsx', 'utf8');

test('enhanced chart posts interpretations through the guarded P12 endpoint', () => {
  assert.match(source, /fetch\('\/api\/ziwei-ai\/interpret'/);
  assert.doesNotMatch(source, /fetch\('\/api\/interpret'/);
});

test('enhanced chart sends the current structured payload', () => {
  assert.match(source, /birthInfoToChartInput\(chart\.birthInfo\)/);
  assert.match(source, /input:\s*chartInput/);
  assert.match(source, /topic:\s*topic/);
  assert.doesNotMatch(source, /res\.body\.getReader\(\)/);
});

test('enhanced chart defensively parses non-JSON edge responses', () => {
  assert.match(source, /await res\.text\(\)/);
  assert.match(source, /JSON\.parse\(responseText\)/);
  assert.doesNotMatch(source, /await res\.json\(\)/);
});

test('enhanced chart keeps a visible accessible pending state for non-streaming requests', () => {
  assert.match(source, /aria-live="polite"/);
  assert.match(source, /正在检索证据并校验/);
});
