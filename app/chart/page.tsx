'use client';

import { useState } from 'react';
import ZiweiAiBirthForm from '@/components/ZiweiAiBirthForm';
import ChartBoard from '@/components/ChartBoard';
import InsightPanel from '@/components/InsightPanel';
import PatternEvidencePanel from '@/components/PatternEvidencePanel';
import ReactIztroBoard from '@/components/ReactIztroBoard';
import ZiweiAiPanel from '@/components/ZiweiAiPanel';
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
 * 命盘页 —— Ziwei AI MVP
 * enhanced：保留原增强盘。
 * standard：react-iztro 标准盘 + 完整格局证据链 + 服务端 AI 解盘。
 *
 * `/chart` 使用 ZiweiAiBirthForm 桥接旧表单，确保跨日真太阳时与晚子时
 * 在增强盘、ChartFacts 和 react-iztro 标准盘之间保持一致。
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
    setChart(generateChart(info));
    setStandardView(buildReactIztroViewModel(input));
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
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>紫微斗数排盘 + AI 解盘</h1>
        <p style={{ color: '#888', marginBottom: 32, fontSize: 14, lineHeight: 1.7 }}>
          输入出生年月日时，系统生成确定性 ChartFacts、双命盘显示和格局证据。
          <br />
          AI 只解释确定性事实与实际检索到的古籍，不参与排盘计算。
        </p>
        <ZiweiAiBirthForm onSubmit={handleBirthSubmit} />
      </main>
    );
  }

  return (
    <main className="chart-page-main" style={{ maxWidth: 1500, margin: '0 auto', padding: '24px 20px' }}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={reset}
          style={{ padding: '6px 14px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: 8, background: 'transparent' }}
        >
          ← 重新起盘
        </button>
        <div className="flex rounded-xl border p-1" style={{ borderColor: 'var(--t-border)', background: 'var(--t-bg)' }} aria-label="命盘显示模式">
          <ModeButton active={mode === 'enhanced'} onClick={() => setMode('enhanced')}>增强盘</ModeButton>
          <ModeButton active={mode === 'standard'} onClick={() => setMode('standard')}>标准盘 · AI</ModeButton>
        </div>
      </div>

      {mode === 'enhanced' ? (
        <>
          <TimeNav chart={chart} view={view} liunianYear={liunianYear} onViewChange={setView} onYearChange={setLiunianYear} />
          <div className="chart-layout" style={{ marginTop: 16 }}>
            <ChartBoard chart={chart} onPalaceSelect={setSelectedPalace} />
            <InsightPanel chart={chart} selectedPalace={selectedPalace} />
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 380px)', gap: 20, alignItems: 'start' }}>
            <ReactIztroBoard viewModel={standardView} />
            <PatternEvidencePanel facts={standardView.facts} />
          </div>
          <ZiweiAiPanel input={standardView.facts.input} />
        </>
      )}
    </main>
  );
}

function ModeButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active} className="rounded-lg px-3 py-1.5 text-xs transition-all" style={{ background: active ? 'var(--t-gold)' : 'transparent', color: active ? 'var(--t-bg)' : 'var(--t-text)' }}>
      {children}
    </button>
  );
}
