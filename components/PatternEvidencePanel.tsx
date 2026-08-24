'use client';

import { useMemo, useState } from 'react';
import type { ChartFacts, PatternHit } from '@/lib/ziwei-ai/chart-types';
import { detectPatternHits } from '@/lib/ziwei-ai/pattern-engine';

const LEVEL_LABEL: Record<PatternHit['level'], string> = {
  excellent: '上格',
  good: '吉格',
  neutral: '中性',
  caution: '警示',
};

const CATEGORY_LABEL: Record<PatternHit['category'], string> = {
  primary: '正格',
  secondary: '中格',
  support: '助力',
  transformation: '四化',
  warning: '警示',
};

export default function PatternEvidencePanel({ facts }: { facts: ChartFacts }) {
  const hits = useMemo(() => detectPatternHits(facts), [facts]);
  const [expanded, setExpanded] = useState<string | null>(hits[0]?.id ?? null);

  return (
    <aside
      className="rounded-2xl border p-4"
      style={{ borderColor: 'var(--t-border)', background: 'var(--t-bg)' }}
    >
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <div className="text-[10px] tracking-[0.28em]" style={{ color: 'var(--t-faint)' }}>
            DETERMINISTIC PATTERN ENGINE
          </div>
          <h3 className="mt-1 text-base font-semibold" style={{ color: 'var(--t-text)' }}>
            格局证据链
          </h3>
        </div>
        <span
          className="rounded-full border px-2 py-1 text-[10px]"
          style={{ borderColor: 'var(--t-border)', color: 'var(--t-gold)' }}
        >
          {hits.length} 命中
        </span>
      </div>

      {hits.length === 0 ? (
        <div
          className="rounded-xl border border-dashed p-4 text-xs leading-6"
          style={{ borderColor: 'var(--t-border)', color: 'var(--t-faint)' }}
        >
          当前 P3 已迁移的规则中未命中格局。这里不让 AI 补猜；后续规则迁移后会自然增加覆盖率。
        </div>
      ) : (
        <div className="space-y-2">
          {hits.map((hit) => {
            const open = expanded === hit.id;
            return (
              <section
                key={hit.id}
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: 'var(--t-border)' }}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(open ? null : hit.id)}
                  className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left"
                  style={{ background: 'rgba(127,127,127,0.04)' }}
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <strong className="text-sm" style={{ color: 'var(--t-text)' }}>{hit.name}</strong>
                      <span className="text-[9px]" style={{ color: 'var(--t-gold)' }}>
                        {CATEGORY_LABEL[hit.category]} · {LEVEL_LABEL[hit.level]}
                      </span>
                    </div>
                    <div className="mt-1 truncate text-[10px] font-mono" style={{ color: 'var(--t-faint)' }}>
                      {hit.ruleId}
                    </div>
                  </div>
                  <span style={{ color: 'var(--t-faint)' }}>{open ? '−' : '+'}</span>
                </button>

                {open && (
                  <div className="border-t px-3 py-3" style={{ borderColor: 'var(--t-border)' }}>
                    <p className="text-xs leading-6" style={{ color: 'var(--t-text)' }}>
                      {hit.description}
                    </p>

                    <div className="mt-3 space-y-2">
                      {hit.evidence.map((evidence, index) => (
                        <div
                          key={`${hit.id}-${index}`}
                          className="rounded-lg border px-2.5 py-2"
                          style={{ borderColor: 'var(--t-border)', background: 'rgba(127,127,127,0.035)' }}
                        >
                          <div className="text-[11px]" style={{ color: 'var(--t-text)' }}>
                            {evidence.text}
                          </div>
                          <div className="mt-1 break-all text-[9px] font-mono" style={{ color: 'var(--t-faint)' }}>
                            {evidence.factIds.join(' · ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {(hit.bonus.length > 0 || hit.breaking.length > 0) && (
                      <div className="mt-3 grid gap-2 text-[10px] sm:grid-cols-2">
                        <div>
                          <div style={{ color: 'var(--t-gold)' }}>加分</div>
                          <div style={{ color: 'var(--t-faint)' }}>{hit.bonus.join('；') || '—'}</div>
                        </div>
                        <div>
                          <div style={{ color: 'var(--t-gold)' }}>破格/警示</div>
                          <div style={{ color: 'var(--t-faint)' }}>{hit.breaking.join('；') || '—'}</div>
                        </div>
                      </div>
                    )}

                    <div className="mt-3 border-t pt-2 text-[10px] leading-5" style={{ borderColor: 'var(--t-border)', color: 'var(--t-faint)' }}>
                      来源：{hit.source.title}{hit.source.locator ? ` · ${hit.source.locator}` : ''}
                      <br />
                      规则置信：确定性命中（confidence = {hit.confidence}）
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-[10px] leading-5" style={{ color: 'var(--t-faint)' }}>
        本面板展示传统紫微斗数规则的程序化匹配结果与证据，不代表现实事件的确定预测。
      </p>
    </aside>
  );
}
