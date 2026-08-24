'use client';

import { useState } from 'react';
import type { ChartInput } from '@/lib/ziwei-ai/chart-types';
import type { InterpretationReport, InterpretationTopic } from '@/lib/ziwei-ai/ai-agent';

interface ApiResult {
  report: InterpretationReport;
  critic: {
    passed: boolean;
    score: number;
    groundedClaimRatio: number;
    citationReferencePrecision: number;
    issues: Array<{ severity: 'error' | 'warning'; code: string; message: string; claimId?: string }>;
  };
  revised: boolean;
  providerId: string;
}

const TOPICS: Array<{ id: InterpretationTopic; label: string }> = [
  { id: 'overview', label: '综合' },
  { id: 'career', label: '事业' },
  { id: 'wealth', label: '财运' },
  { id: 'relationship', label: '感情' },
  { id: 'health-cultural', label: '传统健康象意' },
];

export default function ZiweiAiPanel({ input }: { input: ChartInput }) {
  const [topic, setTopic] = useState<InterpretationTopic>('overview');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ApiResult | null>(null);

  const submit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/ziwei-ai/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ input, topic, question: question.trim() || undefined }),
      });
      const payload = await response.json() as ApiResult & { error?: string; message?: string };
      if (!response.ok) throw new Error(payload.message || payload.error || `HTTP ${response.status}`);
      setResult(payload);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'AI 解读请求失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-5 rounded-2xl border p-5" style={{ borderColor: 'var(--t-border)', background: 'var(--t-bg)' }}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-[10px] tracking-[0.28em]" style={{ color: 'var(--t-faint)' }}>GROUNDED AI INTERPRETATION</div>
          <h3 className="mt-1 text-base font-semibold" style={{ color: 'var(--t-text)' }}>AI 解盘 · 事实与古籍可追溯</h3>
        </div>
        {result && (
          <span className="rounded-full border px-2 py-1 text-[10px]" style={{ borderColor: 'var(--t-border)', color: result.critic.passed ? 'var(--t-gold)' : '#d97706' }}>
            Critic {result.critic.score.toFixed(0)} · {result.critic.passed ? '通过' : '需复核'}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {TOPICS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setTopic(item.id)}
            className="rounded-full border px-3 py-1.5 text-xs"
            style={{
              borderColor: topic === item.id ? 'var(--t-gold)' : 'var(--t-border)',
              color: topic === item.id ? 'var(--t-gold)' : 'var(--t-faint)',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <textarea
        value={question}
        onChange={(event) => setQuestion(event.target.value.slice(0, 1000))}
        rows={3}
        placeholder="可选：输入具体问题。AI 不会重新排盘，只解释已计算的 ChartFacts、格局证据和检索到的古籍。"
        className="mt-4 w-full rounded-xl border p-3 text-sm outline-none"
        style={{ borderColor: 'var(--t-border)', background: 'rgba(127,127,127,0.035)', color: 'var(--t-text)' }}
      />

      {topic === 'health-cultural' && (
        <p className="mt-2 text-[11px] leading-5" style={{ color: 'var(--t-faint)' }}>
          此主题只解释传统文化中的历史象意，不用于疾病诊断、治疗决策或用药建议。
        </p>
      )}

      <button
        type="button"
        disabled={loading}
        onClick={submit}
        className="mt-3 rounded-xl px-4 py-2 text-sm font-medium disabled:opacity-50"
        style={{ background: 'var(--t-gold)', color: 'var(--t-bg)' }}
      >
        {loading ? '正在检索证据并校验…' : '生成有证据的 AI 解读'}
      </button>

      {error && (
        <div className="mt-4 rounded-xl border p-3 text-xs leading-5" style={{ borderColor: '#d97706', color: '#d97706' }}>
          {error}
        </div>
      )}

      {result && (
        <div className="mt-5 space-y-4">
          <div>
            <h4 className="text-lg font-semibold" style={{ color: 'var(--t-text)' }}>{result.report.title}</h4>
            <p className="mt-1 text-sm leading-6" style={{ color: 'var(--t-faint)' }}>{result.report.summary}</p>
          </div>

          {result.report.sections.map((section) => (
            <article key={section.id} className="rounded-xl border p-4" style={{ borderColor: 'var(--t-border)' }}>
              <h5 className="text-sm font-semibold" style={{ color: 'var(--t-text)' }}>{section.title}</h5>
              <p className="mt-2 text-sm leading-7" style={{ color: 'var(--t-text)' }}>{section.content}</p>
              {section.claims.length > 0 && (
                <div className="mt-3 space-y-2">
                  {section.claims.map((claim) => (
                    <div key={claim.id} className="rounded-lg border p-2.5" style={{ borderColor: 'var(--t-border)', background: 'rgba(127,127,127,0.03)' }}>
                      <div className="text-xs" style={{ color: 'var(--t-text)' }}>{claim.text}</div>
                      <div className="mt-1 break-all text-[9px] font-mono" style={{ color: 'var(--t-faint)' }}>
                        facts: {claim.factIds.join(', ') || '—'}<br />citations: {claim.citationIds.join(', ') || '—'}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}

          {result.report.citations.length > 0 && (
            <div className="rounded-xl border p-4" style={{ borderColor: 'var(--t-border)' }}>
              <h5 className="text-sm font-semibold" style={{ color: 'var(--t-text)' }}>古籍引用</h5>
              <div className="mt-3 space-y-3">
                {result.report.citations.map((citation) => (
                  <div key={citation.id} className="text-xs leading-6" style={{ color: 'var(--t-faint)' }}>
                    <strong style={{ color: 'var(--t-gold)' }}>[{citation.id}]</strong> {citation.bookTitle} · {citation.chapterTitle} · {citation.paragraphId}<br />
                    {citation.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-[10px] leading-5" style={{ color: 'var(--t-faint)' }}>
            {result.report.disclaimer}<br />
            Provider: {result.providerId} · grounded {(result.critic.groundedClaimRatio * 100).toFixed(0)}% · citation precision {(result.critic.citationReferencePrecision * 100).toFixed(0)}%{result.revised ? ' · 已经 Critic 自动修订一次' : ''}
          </div>
        </div>
      )}
    </section>
  );
}
