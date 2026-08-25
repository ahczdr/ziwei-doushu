'use client';

import { useEffect, useState } from 'react';
import type { ChartInput } from '@/lib/ziwei-ai/chart-types';
import type { InterpretationReport, InterpretationTopic } from '@/lib/ziwei-ai/ai-agent';

interface ModelProfile {
  id: string;
  label: string;
  model: string;
  apiStyle: 'responses' | 'chat-completions' | 'messages';
  isDefault: boolean;
}

interface ModelsApiResult {
  configured: boolean;
  defaultProfileId: string | null;
  profiles: ModelProfile[];
}

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
  modelProfile?: ModelProfile;
}

interface ApiErrorPayload {
  error?: string;
  message?: string;
}

const TOPICS: Array<{ id: InterpretationTopic; label: string }> = [
  { id: 'overview', label: '综合' },
  { id: 'career', label: '事业' },
  { id: 'wealth', label: '财运' },
  { id: 'relationship', label: '感情' },
  { id: 'health-cultural', label: '传统健康象意' },
];

function errorMessageForStatus(status: number, payload: ApiErrorPayload | null) {
  if (payload?.message) return payload.message;
  if (status === 429) return '请求过于频繁，请等待约 1 分钟后重试。';
  if (status === 403) return '当前页面来源未获授权，请从正式站点进入后重试。';
  if (status === 503) return 'AI 服务暂时不可用或繁忙，请稍后重试。';
  if (status === 502) return '上游模型响应失败，请稍后重试或切换其他模型。';
  if (status === 413) return '本次问题内容过长，请精简后重试。';
  if (payload?.error) return payload.error;
  return `AI 解读请求失败（HTTP ${status}）`;
}

export default function ZiweiAiPanel({ input }: { input: ChartInput }) {
  const [topic, setTopic] = useState<InterpretationTopic>('overview');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ApiResult | null>(null);
  const [profiles, setProfiles] = useState<ModelProfile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState('');

  useEffect(() => {
    let active = true;
    const loadProfiles = async () => {
      try {
        const response = await fetch('/api/ziwei-ai/models', { cache: 'no-store' });
        if (!response.ok) return;
        const payload = await response.json() as ModelsApiResult;
        if (!active || !payload.configured || !Array.isArray(payload.profiles)) return;
        setProfiles(payload.profiles);
        const fallback = payload.profiles.find((profile) => profile.isDefault)?.id || payload.profiles[0]?.id || '';
        setSelectedProfileId(payload.defaultProfileId || fallback);
      } catch {
        // Model discovery is optional for backward-compatible single-provider deployments.
      }
    };
    void loadProfiles();
    return () => {
      active = false;
    };
  }, []);

  const selectedProfile = profiles.find((profile) => profile.id === selectedProfileId) || null;

  const submit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/ziwei-ai/interpret', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          input,
          topic,
          question: question.trim() || undefined,
          modelProfileId: selectedProfileId || undefined,
        }),
      });

      const responseText = await response.text();
      let payload: (ApiResult & ApiErrorPayload) | null = null;
      if (responseText) {
        try {
          payload = JSON.parse(responseText) as ApiResult & ApiErrorPayload;
        } catch {
          payload = null;
        }
      }

      if (!response.ok) throw new Error(errorMessageForStatus(response.status, payload));
      if (!payload?.report || !payload.critic) throw new Error('AI 返回结果格式异常，请稍后重试。');
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

      {profiles.length > 0 && (
        <div className="mt-4 rounded-xl border p-3" style={{ borderColor: 'var(--t-border)', background: 'rgba(127,127,127,0.025)' }}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-[10px] tracking-[0.18em]" style={{ color: 'var(--t-faint)' }}>MODEL PROFILE</div>
              <div className="mt-1 text-xs" style={{ color: 'var(--t-text)' }}>
                {selectedProfile ? `${selectedProfile.label} · ${selectedProfile.apiStyle}` : '选择服务端模型'}
              </div>
            </div>
            {profiles.length > 1 ? (
              <select
                value={selectedProfileId}
                onChange={(event) => setSelectedProfileId(event.target.value)}
                disabled={loading}
                className="max-w-full rounded-lg border px-3 py-2 text-xs outline-none disabled:opacity-50"
                style={{ borderColor: 'var(--t-border)', background: 'var(--t-bg)', color: 'var(--t-text)' }}
                aria-label="选择 AI 模型"
              >
                {profiles.map((profile) => (
                  <option key={profile.id} value={profile.id}>
                    {profile.label} · {profile.model}
                  </option>
                ))}
              </select>
            ) : (
              <span className="rounded-full border px-2.5 py-1 text-[10px]" style={{ borderColor: 'var(--t-border)', color: 'var(--t-faint)' }}>
                {profiles[0]?.model}
              </span>
            )}
          </div>
          <p className="mt-2 text-[10px] leading-5" style={{ color: 'var(--t-faint)' }}>
            页面只接收模型名称与协议元数据；API Key 和 Provider 地址始终保留在服务端。
          </p>
        </div>
      )}

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
            {result.modelProfile ? `Model: ${result.modelProfile.label} · ${result.modelProfile.apiStyle} · ` : ''}
            Provider: {result.providerId} · grounded {(result.critic.groundedClaimRatio * 100).toFixed(0)}% · citation precision {(result.critic.citationReferencePrecision * 100).toFixed(0)}%{result.revised ? ' · 已经 Critic 自动修订一次' : ''}
          </div>
        </div>
      )}
    </section>
  );
}
