'use client';

import clsx from 'clsx';
import type { Palace, Star, ZiweiChart } from '@/lib/ziwei/types';

const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

const SIHUA_COLOR: Record<string, string> = {
  禄: 'var(--lu)',
  权: 'var(--quan)',
  科: 'var(--ke)',
  忌: 'var(--ji)',
};

/** 星曜文字色：主星用星曜色（庙旺/落陷分档），辅星/杂曜用次级文字色 */
function starColor(star: Star): string {
  if (star.type === 'major') {
    return star.brightness === 'bright'
      ? 'var(--t-star-bright)'
      : star.brightness === 'dim'
        ? 'var(--t-star-dim)'
        : 'var(--t-star)';
  }
  return 'var(--t-text2)';
}

/** 传统宫格：星名+亮度 纵向流式排布，四化徽章 */
function StarBlock({ star, size }: { star: Star; size: 'lg' | 'sm' }) {
  const nameCls = size === 'lg' ? 'text-[15px] font-bold tracking-wide' : 'text-[11.5px] font-semibold';
  return (
    <span className="inline-flex flex-col items-center leading-tight align-top" style={{ color: starColor(star) }}>
      <span className={nameCls}>{star.name}</span>
      {star.brightness && size === 'lg' && (
        <span className="text-[9.5px]" style={{ color: 'var(--t-faint)' }}>{star.brightness === 'bright' ? '庙旺' : star.brightness === 'dim' ? '陷' : '平'}</span>
      )}
      {star.siHua && (
        <span
          className="mt-0.5 rounded px-1 text-[10px] font-bold text-white"
          style={{ background: SIHUA_COLOR[star.siHua] }}
        >
          {star.siHua}
        </span>
      )}
    </span>
  );
}

/** 单个宫格（传统文墨天机式版面） */
function TraditionalPalaceCell({ palace, liuNianAges, selected, onClick }: {
  palace: Palace;
  liuNianAges: number[];
  selected: boolean;
  onClick: () => void;
}) {
  const majors = palace.stars.filter(s => s.type === 'major');
  const minors = palace.stars.filter(s => s.type !== 'major');
  const ages = palace.xiaoXianAges ?? [];

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('relative flex h-full w-full flex-col p-2 pb-1.5 text-left transition-colors', selected && 'bg-[rgba(140,94,26,0.08)]')}
      style={{ boxShadow: selected ? 'inset 0 0 0 2px var(--t-gold)' : undefined }}
      aria-label={`${palace.name}宫`}
    >
      {/* 星曜区：主星大字号 + 辅星小字号 */}
      <div className="flex flex-wrap gap-x-2 gap-y-0.5">
        {majors.map(s => <StarBlock key={s.name} star={s} size="lg" />)}
      </div>
      {minors.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-x-1.5 gap-y-0.5">
          {minors.map(s => <StarBlock key={s.name} star={s} size="sm" />)}
        </div>
      )}

      {/* 身宫标记 */}
      {palace.isShenGong && (
        <span className="absolute right-1 top-1 rounded border px-0.5 text-[9px]" style={{ color: 'var(--t-gold)', borderColor: 'var(--t-border-acc)' }}>
          身宫
        </span>
      )}

      {/* 流年/小限 */}
      <div className="mt-auto pt-1 text-[9px] leading-snug" style={{ color: 'var(--t-faint)' }}>
        {liuNianAges.length > 0 && <div>流年: {liuNianAges.join(',')}</div>}
        {ages.length > 0 && <div>小限: {ages.slice(0, 5).join(',')}</div>}
      </div>

      {/* 底部行：博士12神 | 大限 | 长生12神+干支 | 宫名 */}
      <div className="mt-1 flex items-end justify-between gap-1">
        <div className="flex flex-col text-[10px] leading-tight" style={{ color: 'var(--t-text2)' }}>
          <span>{palace.boshi12}</span>
          <span>{palace.jiangqian12}</span>
          <span>{palace.suiqian12}</span>
        </div>
        <div className="text-[13px] font-semibold" style={{ color: 'var(--t-text)' }}>
          {palace.daXianAge ? `${palace.daXianAge[0]}~${palace.daXianAge[1]}` : ''}
        </div>
        <div className="flex flex-col items-end leading-tight">
          <span className="text-[10px]" style={{ color: 'var(--t-faint)' }}>{palace.changsheng12}</span>
          <span className="text-[13px] font-bold" style={{ color: 'var(--t-text1)' }}>
            {STEMS[palace.stem]}{BRANCHES[palace.branch]}
          </span>
        </div>
      </div>
      <div className="text-right text-[12px] font-bold" style={{ color: 'var(--t-gold)' }}>
        {palace.name}
      </div>
    </button>
  );
}

/** 流年虚岁序列：生年支起1岁，顺行；该宫流年年龄 ≡ (branch - 生年支 + 1) mod 12，取5个步长12 */
function liuNianAgesFor(branch: number, birthBranch: number): number[] {
  const first = (((branch - birthBranch + 1) % 12) + 12) % 12 + 1;
  return Array.from({ length: 5 }, (_, i) => first + i * 12);
}

/** 中心信息区 */
function CenterInfo({ chart, name }: { chart: ZiweiChart; name?: string }) {
  const b = chart.birthInfo;
  const hourLabel = b.hour === 0 ? '早子' : b.hour === 12 ? '晚子' : BRANCHES[b.hour];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5 px-4 py-3 text-center" style={{ color: 'var(--t-text)' }}>
      <div className="text-[20px] font-bold tracking-widest" style={{ color: 'var(--t-text1)' }}>
        紫微斗数命盘
      </div>
      <div className="text-[13px]">
        姓名: {name || '—'}　{b.gender === 'male' ? '阳男' : '阴女'}　{chart.wuxingJuName}
      </div>
      <div className="text-[13px]">公历: {b.year}-{pad(b.month)}-{pad(b.day)}　{hourLabel}时</div>
      {b.trueSolarTime && <div className="text-[13px]">真太阳时: {b.trueSolarTime.replace('T', ' ')}</div>}
      {chart.lunarDateText && <div className="text-[13px]">农历: {chart.lunarDateText}　{hourLabel}时</div>}
      <div className="text-[13px]">
        命主: {chart.mingZhu ?? '—'}　身主: {chart.shenZhu ?? '—'}
      </div>
      {chart.fourPillars && chart.fourPillars.length === 4 && (
        <div className="mt-1 flex gap-3">
          {chart.fourPillars.map((p, i) => (
            <div key={i} className="flex flex-col text-[15px] font-bold leading-tight">
              <span style={{ color: 'var(--t-star)' }}>{p.gan}</span>
              <span style={{ color: 'var(--t-star)' }}>{p.zhi}</span>
            </div>
          ))}
        </div>
      )}
      {chart.qiYunText && <div className="text-[12px]" style={{ color: 'var(--t-text2)' }}>{chart.qiYunText}</div>}
      {chart.baZiDaYun && chart.baZiDaYun.length > 0 && (
        <div className="w-full max-w-[92%]">
          <div className="mb-0.5 text-[11px]" style={{ color: 'var(--t-faint)' }}>大运</div>
          <div className="grid grid-cols-8 gap-0.5">
            {chart.baZiDaYun.map((d, i) => (
              <div key={i} className="flex flex-col items-center rounded py-0.5" style={{ background: 'var(--t-panel)' }}>
                <span className="text-[12px] font-bold" style={{ color: 'var(--t-star)' }}>{d.ganZhi}</span>
                <span className="text-[9px]" style={{ color: 'var(--t-text2)' }}>{d.startAge}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-1 text-[11px]" style={{ color: 'var(--t-faint)' }}>
        自化图示: <span style={{ color: 'var(--lu)' }}>→禄</span> <span style={{ color: 'var(--quan)' }}>→权</span> <span style={{ color: 'var(--ke)' }}>→科</span> <span style={{ color: 'var(--ji)' }}>→忌</span>
      </div>
    </div>
  );
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

/**
 * 传统盘（文墨天机式 4x4 版面）
 * 布局：地支固定方位 —— 巳午未申 顶行、辰/酉 两侧、卯戌、寅丑子亥 底行。
 */
export default function TraditionalChart({ chart, selectedBranch, onPalaceSelect }: {
  chart: ZiweiChart;
  selectedBranch: number | null;
  onPalaceSelect: (branch: number) => void;
}) {
  const byBranch = new Map(chart.palaces.map(p => [p.branch, p]));
  // 4x4：顶行 巳午未申；左列 辰/卯；右列 酉/戌；底行 寅丑子亥；中心 2x2
  const layout: (number | 'center' | 'skip')[] = [4, 5, 6, 7, 3, 'center', 'skip', 8, 2, 'skip', 'skip', 9, 1, 0, 11, 10];
  const birthBranch = chart.lunarInfo.yearBranch;

  return (
    <div
      className="rounded-lg"
      style={{
        border: '1px solid var(--t-border)',
        background: 'var(--t-card)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div className="grid grid-cols-4" style={{ minHeight: 720 }}>
        {layout.map(cell => {
          if (cell === 'skip') return null;
          if (cell === 'center') {
            return (
              <div key="center" className="col-span-2 row-span-2" style={{ border: '1px solid var(--t-border)' }}>
                <CenterInfo chart={chart} name={chart.birthInfo.name} />
              </div>
            );
          }
          const palace = byBranch.get(cell);
          if (!palace) return <div key={`p-${cell}`} />;
          return (
            <div key={`p-${cell}`} style={{ border: '1px solid var(--t-border)' }}>
              <TraditionalPalaceCell
                palace={palace}
                liuNianAges={liuNianAgesFor(cell, birthBranch)}
                selected={selectedBranch === cell}
                onClick={() => onPalaceSelect(cell)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
