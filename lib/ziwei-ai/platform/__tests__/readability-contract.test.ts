import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const chartPage = readFileSync('app/chart/page.tsx', 'utf8');
const globals = readFileSync('app/globals.css', 'utf8');
const palace = readFileSync('components/PalaceCell.tsx', 'utf8');
const insight = readFileSync('components/InsightPanel.tsx', 'utf8');
const timeNav = readFileSync('components/TimeNav.tsx', 'utf8');

test('enhanced chart reserves a readable desktop layout and collapses on narrow screens', () => {
  assert.match(chartPage, /className="chart-layout"/);
  assert.match(globals, /\.chart-layout[\s\S]*grid-template-columns:\s*minmax\(0, 1fr\) minmax\(0, 440px\)/);
  assert.match(globals, /@media \(max-width:\s*1100px\)[\s\S]*\.chart-layout/);
});

test('enhanced chart cells and controls meet the minimum readable type scale', () => {
  assert.match(palace, /minHeight:\s*'104px'/);
  assert.match(palace, /text-\[11px\] font-medium tracking-wide/);
  assert.match(palace, /text-\[14px\] leading-tight font-bold/);
  assert.match(timeNav, /className="text-\[13px\] font-medium/);
  assert.match(insight, /text-\[15px\] leading-\[1\.8\]/);
});
