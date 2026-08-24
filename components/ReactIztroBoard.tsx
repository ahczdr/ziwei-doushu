'use client';

import { Iztrolabe } from 'react-iztro';
import type { ReactIztroViewModel } from '@/lib/ziwei-ai/ui-chart';

interface ReactIztroBoardProps {
  viewModel: ReactIztroViewModel;
}

export default function ReactIztroBoard({ viewModel }: ReactIztroBoardProps) {
  const { facts, props, consistency } = viewModel;

  return (
    <section className="w-full min-w-0">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'var(--t-faint)' }}>
            react-iztro · standard view
          </div>
          <h2 className="mt-1 text-sm font-medium tracking-[0.18em]" style={{ color: 'var(--t-gold)' }}>
            标准命盘
          </h2>
        </div>
        <div className="text-[10px] leading-5 text-right" style={{ color: 'var(--t-faint)' }}>
          <div>{facts.basics.solarDate} · {facts.basics.time}</div>
          <div>{facts.basics.fiveElementsClass} · 命宫{facts.basics.soulPalaceBranch} · 身宫{facts.basics.bodyPalaceBranch}</div>
        </div>
      </div>

      <div
        className="overflow-x-auto rounded-xl border p-2 sm:p-3"
        style={{
          borderColor: 'var(--t-border)',
          background: 'var(--t-bg)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
        }}
      >
        <div className="min-w-[760px]">
          <Iztrolabe {...props} />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] sm:grid-cols-3 lg:grid-cols-6">
        <FactChip label="事实版本" value={facts.schemaVersion} />
        <FactChip label="规范日期" value={consistency.canonicalSolarDate} />
        <FactChip label="有效时辰" value={String(consistency.effectiveHourIndex)} />
        <FactChip label="命宫" value={consistency.soulPalaceBranch} />
        <FactChip label="身宫" value={consistency.bodyPalaceBranch} />
        <FactChip label="本命四化" value={`${consistency.transformationCount} 条`} />
      </div>
    </section>
  );
}

function FactChip({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-lg border px-2.5 py-2"
      style={{ borderColor: 'var(--t-border)', background: 'var(--t-panel, transparent)' }}
    >
      <div style={{ color: 'var(--t-faint)' }}>{label}</div>
      <div className="mt-0.5 font-medium" style={{ color: 'var(--t-text)' }}>{value}</div>
    </div>
  );
}
