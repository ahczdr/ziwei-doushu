import type {
  AgentClaim,
  AgentContext,
  InterpretChartRequest,
  InterpretationReport,
  InterpretChartResult,
  ModelProvider,
} from '../ai-agent';
import { buildAgentMessages, interpretChart, parseInterpretationReport } from '../ai-agent';

export type CriticSeverity = 'error' | 'warning';

export interface CriticIssue {
  severity: CriticSeverity;
  code: string;
  message: string;
  claimId?: string;
}

export interface CriticResult {
  passed: boolean;
  score: number;
  groundedClaimRatio: number;
  citationReferencePrecision: number;
  issues: CriticIssue[];
}

export interface CritiquedInterpretationResult extends InterpretChartResult {
  critic: CriticResult;
  revised: boolean;
}

const FATALISTIC = /(百分之百|必然发生|一定会|注定死亡|必死|绝对会|毫无疑问会)/;
const MEDICAL_DIAGNOSIS = /(确诊|诊断为|你患有|你一定有|处方|剂量|停药|用药治疗)/;

function validFactIds(context: AgentContext): Set<string> {
  return new Set([
    ...context.facts.palaces.map((palace) => `palace:${palace.earthlyBranch}`),
    ...context.facts.palaces.flatMap((palace) => [
      ...palace.majorStars,
      ...palace.minorStars,
      ...palace.adjectiveStars,
    ]).map((star) => star.id),
  ]);
}

function allClaims(report: InterpretationReport): AgentClaim[] {
  return report.sections.flatMap((section) => section.claims);
}

export function critiqueReport(report: InterpretationReport, context: AgentContext): CriticResult {
  const issues: CriticIssue[] = [];
  const facts = validFactIds(context);
  const citations = new Set(context.retrieval.map((hit) => hit.citationId));
  const claims = allClaims(report);
  let grounded = 0;
  let citationRefs = 0;
  let validCitationRefs = 0;

  if (report.sections.length === 0 || claims.length === 0) {
    issues.push({
      severity: 'error',
      code: 'empty-evidence-report',
      message: '报告必须至少包含一个带事实或古籍证据的 claim，空报告不能通过 Critic。',
    });
  }

  for (const claim of claims) {
    const invalidFacts = claim.factIds.filter((id) => !facts.has(id));
    const invalidCitations = claim.citationIds.filter((id) => !citations.has(id));
    citationRefs += claim.citationIds.length;
    validCitationRefs += claim.citationIds.length - invalidCitations.length;

    if (invalidFacts.length) {
      issues.push({ severity: 'error', code: 'unknown-fact-id', claimId: claim.id, message: `未知事实引用：${invalidFacts.join(', ')}` });
    }
    if (invalidCitations.length) {
      issues.push({ severity: 'error', code: 'unknown-citation-id', claimId: claim.id, message: `未知古籍引用：${invalidCitations.join(', ')}` });
    }
    if (claim.factIds.length === 0 && claim.citationIds.length === 0) {
      issues.push({ severity: 'warning', code: 'ungrounded-claim', claimId: claim.id, message: '该 claim 没有事实或古籍引用。' });
    } else if (!invalidFacts.length && !invalidCitations.length) {
      grounded += 1;
    }
    if (FATALISTIC.test(claim.text)) {
      issues.push({ severity: 'error', code: 'fatalistic-language', claimId: claim.id, message: '检测到宿命化或绝对化断言。' });
    }
    if (context.topic === 'health-cultural' && MEDICAL_DIAGNOSIS.test(claim.text)) {
      issues.push({ severity: 'error', code: 'medical-diagnosis', claimId: claim.id, message: '健康文化主题不得输出医学诊断、处方或用药建议。' });
    }
  }

  const fullText = [report.title, report.summary, ...report.sections.map((section) => `${section.title} ${section.content}`)].join(' ');
  if (FATALISTIC.test(fullText)) {
    issues.push({ severity: 'error', code: 'fatalistic-report', message: '报告正文含宿命化绝对断言。' });
  }
  if (context.topic === 'health-cultural') {
    if (MEDICAL_DIAGNOSIS.test(fullText)) {
      issues.push({ severity: 'error', code: 'medical-report', message: '报告正文越过传统文化边界进入医学诊断/治疗。' });
    }
    if (!/(传统文化|不能替代|不构成|医学诊断)/.test(report.disclaimer)) {
      issues.push({ severity: 'error', code: 'missing-health-boundary', message: '健康文化报告缺少明确的非医学边界声明。' });
    }
  }

  const groundedClaimRatio = claims.length ? grounded / claims.length : 0;
  const citationReferencePrecision = citationRefs ? validCitationRefs / citationRefs : 1;
  const errorCount = issues.filter((issue) => issue.severity === 'error').length;
  const warningCount = issues.length - errorCount;
  const score = Math.max(0, Math.round((groundedClaimRatio * 55 + citationReferencePrecision * 25 + 20 - errorCount * 20 - warningCount * 5) * 100) / 100);
  return {
    passed: errorCount === 0 && groundedClaimRatio >= 0.75,
    score,
    groundedClaimRatio,
    citationReferencePrecision,
    issues,
  };
}

function revisionMessages(result: InterpretChartResult, critic: CriticResult) {
  const messages = buildAgentMessages(result.context);
  return [
    ...messages,
    { role: 'assistant' as const, content: JSON.stringify(result.report) },
    {
      role: 'user' as const,
      content: `Critic 发现以下问题。只修正这些问题，仍严格输出原 JSON schema，不得增加无证据事实：\n${JSON.stringify(critic.issues)}`,
    },
  ];
}

export async function interpretWithCritic(
  request: InterpretChartRequest,
  provider: ModelProvider,
  reviseOnce = true,
): Promise<CritiquedInterpretationResult> {
  const first = await interpretChart(request, provider);
  const firstCritic = critiqueReport(first.report, first.context);
  if (firstCritic.passed || !reviseOnce) return { ...first, critic: firstCritic, revised: false };

  const response = await provider.generate({ messages: revisionMessages(first, firstCritic), responseFormat: 'json', temperature: 0.1 });
  const report = parseInterpretationReport(response.content, first.context);
  const critic = critiqueReport(report, first.context);
  return { ...first, report, critic, revised: true };
}

export interface EvaluationCaseResult {
  name: string;
  critic: CriticResult;
}

export function summarizeEvaluation(cases: readonly EvaluationCaseResult[]) {
  const passed = cases.filter((item) => item.critic.passed).length;
  return {
    total: cases.length,
    passed,
    passRate: cases.length ? passed / cases.length : 1,
    averageScore: cases.length ? cases.reduce((sum, item) => sum + item.critic.score, 0) / cases.length : 100,
  };
}
