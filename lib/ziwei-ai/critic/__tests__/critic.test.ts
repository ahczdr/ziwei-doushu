import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAgentContext, type InterpretationReport, type ModelProvider } from '../../ai-agent';
import { critiqueReport, interpretWithCritic, summarizeEvaluation } from '../index';

const input = { calendarType: 'solar' as const, date: '2000-8-16', hourIndex: 2, gender: 'female' as const };

async function context(topic: 'overview' | 'health-cultural' = 'overview') {
  return buildAgentContext({ input, topic, retrievalLimit: 3 });
}

function groundedReport(factId: string, citationId: string, disclaimer = '传统文化资料学习参考，不构成专业建议。'): InterpretationReport {
  return {
    schemaVersion: '1.0', title: '测试', summary: '按确定性事实与古籍证据解释。',
    sections: [{ id: 's1', title: '证据', content: '仅作文化解释。', claims: [{ id: 'c1', text: '该判断来自给定事实和古籍段落。', factIds: [factId], citationIds: [citationId] }] }],
    citations: [], disclaimer,
  };
}

test('Critic passes fully grounded claims', async () => {
  const ctx = await context();
  const factId = ctx.facts.palaces[0].majorStars[0]?.id ?? `palace:${ctx.facts.palaces[0].earthlyBranch}`;
  const result = critiqueReport(groundedReport(factId, ctx.retrieval[0].citationId), ctx);
  assert.equal(result.passed, true);
  assert.equal(result.groundedClaimRatio, 1);
  assert.equal(result.citationReferencePrecision, 1);
});

test('Critic rejects invented IDs and fatalistic wording', async () => {
  const ctx = await context();
  const report = groundedReport('invented:star', 'classic:invented:paragraph');
  report.sections[0].claims[0].text = '这件事一定会发生。';
  const result = critiqueReport(report, ctx);
  assert.equal(result.passed, false);
  assert.ok(result.issues.some((issue) => issue.code === 'unknown-fact-id'));
  assert.ok(result.issues.some((issue) => issue.code === 'unknown-citation-id'));
  assert.ok(result.issues.some((issue) => issue.code === 'fatalistic-language'));
});

test('health-cultural Critic blocks medical diagnosis language', async () => {
  const ctx = await context('health-cultural');
  const report = groundedReport(`palace:${ctx.facts.palaces[0].earthlyBranch}`, ctx.retrieval[0].citationId, '传统文化观察，不能替代医学诊断或治疗。');
  report.sections[0].claims[0].text = '你患有某疾病，应按这个处方用药治疗。';
  const result = critiqueReport(report, ctx);
  assert.equal(result.passed, false);
  assert.ok(result.issues.some((issue) => issue.code === 'medical-diagnosis'));
});

test('interpretWithCritic performs at most one bounded revision', async () => {
  let calls = 0;
  const provider: ModelProvider = {
    id: 'mock:revision',
    async generate(request) {
      calls += 1;
      if (calls === 1) return { content: JSON.stringify({ schemaVersion: '1.0', title: '坏报告', summary: '一定会成功', sections: [{ id: 's', title: '坏', content: '', claims: [{ id: 'c', text: '一定会发生', factIds: ['invented'], citationIds: [] }] }], disclaimer: '文化参考' }) };
      const user = request.messages[request.messages.length - 1]?.content ?? '';
      assert.match(user, /Critic/);
      return { content: JSON.stringify({ schemaVersion: '1.0', title: '修订报告', summary: '证据不足时保持克制。', sections: [], disclaimer: '传统文化资料学习参考，不构成专业建议。' }) };
    },
  };
  const result = await interpretWithCritic({ input, topic: 'overview', retrievalLimit: 2 }, provider, true);
  assert.equal(calls, 2);
  assert.equal(result.revised, true);
  assert.equal(result.critic.passed, true);
});

test('evaluation summary aggregates critic outcomes', () => {
  const good = { passed: true, score: 95, groundedClaimRatio: 1, citationReferencePrecision: 1, issues: [] };
  const bad = { passed: false, score: 40, groundedClaimRatio: 0.5, citationReferencePrecision: 1, issues: [] };
  const summary = summarizeEvaluation([{ name: 'good', critic: good }, { name: 'bad', critic: bad }]);
  assert.equal(summary.total, 2);
  assert.equal(summary.passed, 1);
  assert.equal(summary.passRate, 0.5);
  assert.equal(summary.averageScore, 67.5);
});
