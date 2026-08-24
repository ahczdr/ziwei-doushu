'use client';

import { useState } from 'react';
import BirthForm from '@/components/BirthForm';
import ChartBoard from '@/components/ChartBoard';
import InsightPanel from '@/components/InsightPanel';
import PatternEvidencePanel from '@/components/PatternEvidencePanel';
import ReactIztroBoard from '@/components/ReactIztroBoard';
import TimeNav, { type TimeView } from '@/components/TimeNav';
import { generateChart } from '@/lib/ziwei/algorithm';
import type { BirthInfo, ZiweiChart, Palace } from '@/lib/ziwei/types';
import {
  birthInfoToChartInput,
  buildReactIztroViewModel,
  type ReactIztroViewModel,
} from '@/lib/ziwei-ai/ui-chart';

type ChartMode = 'enhanced' | 'standard';

/**
 * 命盘页 —— P3 双显示层 + 确定性格局证据
 *
 * enhanced：保留本仓库已有 ChartBoard（三方四正、星曜点击、四化叠加）。
 * standard：使用 react-iztro 官方组件，但输入先经过 ChartFacts 规范化。
 *
 * Pattern Engine 只消费 standardView.facts；AI 后续同样只消费 ChartFacts + PatternHit。
 */
export default function ChartPage() {
  const [chart, setChart] = useState<ZiweiChart | null>(null);
  const [standardView, setStandardView] = useState<ReactIztroViewModel | null>(null);
  const [selectedPalace, setSelectedPalace] = useState<Palace | null>(null);
  const [view, setView] = useState<TimeView>('mingpan');
  const [liunianYear, setLiunianYear] = useState(() => new Date().getFullYear());
  const [mode, setMode] = useState<ChartMode>('enhanced');

  const handleBirthSubmit = (info: BirthInfo) => {
    const input = birthInfoToChartInput(info);
    const nextChart = generateChart(info);
    const nextStandardView = buildReactIztroViewModel(input);

    setChart(nextChart);
    setStandardView(nextStandardView);
    setSelectedPalace(null);
  };

  const reset = () => {
    setChart(null);
    setStandardView(null);
    setSelectedPalace(null);
    setMode('enhanced');
  };

  if (!chart || !standardView) {
    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>紫微斗数排盘</h1>
        <p style={{ color: '#888', marginBottom: 32, fontSize: 14, lineHeight: 1.7 }}>
          输入出生年月日时，系统同时生成确定性 ChartFacts、增强命盘与 react-iztro 标准命盘。
          <br />
          格局规则与后续 AI 只读取 ChartFacts，不从 UI 反推命盘事实。
        </p>
        <BirthForm onSubmit={handleBirthSubmit} />
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 16px' }}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={reset}
          style={{
            padding: '6px 14px', cursor: 'pointer',
            border: '1px solid #ccc', borderRadius: 8, background: 'transparent',
          }}
        >
          ← 重新起盘
        </button>

        <div
          className="flex rounded-xl border p-1"
          style={{ borderColor: 'var(--t-border)', background: 'var(--t-bg)' }}
          aria-label="命盘显示模式"
        >
          <ModeButton active={mode === 'enhanced'} onClick={() => setMode('enhanced')}>
            增强盘
          </ModeButton>
          <ModeButton active={mode === 'standard'} onClick={() => setMode('standard')}>
            标准盘 · react-iztro
          </ModeButton>
        </div>
      </div>

      {mode === 'enhanced' ? (
        <>
          <TimeNav
            chart={chart}
            view={view}
            liunianYear={liunianYear}
            onViewChange={setView}
            onYearChange={setLiunianYear}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 380px)',
              gap: 20, marginTop: 16, alignItems: 'start',
            }}
          >
            <ChartBoard chart={chart} onPalaceSelect={setSelectedPalace} />
            <InsightPanel chart={chart} selectedPalace={selectedPalace} />
          </div>
        </>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 380px)',
            gap: 20,
            alignItems: 'start',
          }}
        >
          <ReactIztroBoard viewModel={standardView} />
          <PatternEvidencePanel facts={standardView.facts} />
        </div>
      )}
    </main>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="rounded-lg px-3 py-1.5 text-xs transition-all"
      style={{
        background: active ? 'var(--t-gold)' : 'transparent',
        color: active ? 'var(--t-bg)' : 'var(--t-text)',
      }}
    >
      {children}
    </button>
  );
}
