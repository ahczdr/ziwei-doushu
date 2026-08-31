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
      className={clsx(
        'relative flex h-full w-full cursor-pointer flex-col p-2 pb-1.5 text-left transition-colors focus-visible:outline-none',
        selected ? 'bg-[rgba(140,94,26,0.08)]' : 'hover:bg-[rgba(140,94,26,0.045)]',
      )}
      style={{ boxShadow: selected ? 'inset 0 0 0 2px var(--t-gold)' : undefined }}
      aria-label={palace.name.endsWith('宫') ? palace.name : `${palace.name}宫`}
      aria-pressed={selected}
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
        <div className="flex items-center gap-1">
          {palace.isCurrentDaXian && (
            <span className="rounded px-1 text-[9px] font-bold" style={{ background: 'var(--t-gold)', color: 'var(--t-card)' }}>限</span>
          )}
          <div className="text-[13px] font-semibold" style={{ color: 'var(--t-text)' }}>
            {palace.daXianAge ? `${palace.daXianAge[0]}~${palace.daXianAge[1]}` : ''}
          </div>
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

/** 详情卡徽章 */
function DetailBadge({ children, gold }: { children: string; gold?: boolean }) {
  return (
    <span
      className="rounded-full border px-2 py-0.5 text-[10px]"
      style={{ borderColor: gold ? 'var(--t-gold)' : 'var(--t-border)', color: gold ? 'var(--t-gold)' : 'var(--t-text2)' }}
    >
      {children}
    </span>
  );
}

const BRIGHTNESS_LABEL: Record<string, string> = { bright: '庙旺', dim: '落陷', normal: '平' };

/** 选中宫位详情卡：主星/四化/自化、辅弼神煞、大限四化与对宫 */
function PalaceDetail({ chart, palace, onClose }: {
  chart: ZiweiChart;
  palace: Palace;
  onClose: () => void;
}) {
  const majors = palace.stars.filter(s => s.type === 'major');
  const minors = palace.stars.filter(s => s.type !== 'major');
  const opposite = chart.palaces.find(p => p.branch === ((palace.branch + 6) % 12));
  const oppositeMajors = opposite?.stars.filter(s => s.type === 'major') ?? [];
  const selfSihua = palace.selfSihua ?? [];
  const siHuaBadge = (siHua: string) => (
    <span className="rounded px-1 text-[10px] font-bold text-white" style={{ background: SIHUA_COLOR[siHua] }}>{siHua}</span>
  );

  return (
    <div className="mt-3 rounded-lg p-4" style={{ border: '1px solid var(--t-border-acc)', background: 'var(--t-panel)' }}>
      {/* 头部：宫名 · 干支 · 徽章 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[16px] font-bold" style={{ color: 'var(--t-gold)' }}>{palace.name}</span>
        <span className="text-[13px] font-bold" style={{ color: 'var(--t-text1)' }}>
          {STEMS[palace.stem]}{BRANCHES[palace.branch]}
        </span>
        {palace.isMingGong && <DetailBadge>命宫</DetailBadge>}
        {palace.isShenGong && <DetailBadge>身宫</DetailBadge>}
        {palace.isCurrentDaXian && <DetailBadge gold>当前大限</DetailBadge>}
        {palace.daXianAge && (
          <span className="text-[11px]" style={{ color: 'var(--t-text2)' }}>
            大限 {palace.daXianAge[0]}–{palace.daXianAge[1]} 岁
          </span>
        )}
        <button
          type="button"
          onClick={onClose}
          className="ml-auto cursor-pointer rounded px-2 py-0.5 text-[12px] transition-colors hover:opacity-70"
          style={{ color: 'var(--t-faint)' }}
          aria-label="取消选择宫位"
        >
          ✕
        </button>
      </div>

      <div className="mt-3 grid gap-x-5 gap-y-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
        {/* 主星与四化 */}
        <div>
          <div className="mb-1.5 text-[10px] tracking-[0.2em]" style={{ color: 'var(--t-faint)' }}>主星 · 四化</div>
          {majors.length === 0 ? (
            <div className="text-[12px] leading-6" style={{ color: 'var(--t-text2)' }}>
              空宫{palace.borrowedFromName ? ` · 借对宫${palace.borrowedFromName}` : ''}
              {palace.borrowedStars?.length ? `：${palace.borrowedStars.join('、')}` : ''}
            </div>
          ) : (
            majors.map(s => (
              <div key={s.name} className="flex items-center gap-1.5 py-0.5">
                <span className="text-[14px] font-bold" style={{ color: starColor(s) }}>{s.name}</span>
                {s.brightness && (
                  <span className="text-[10px]" style={{ color: 'var(--t-faint)' }}>{BRIGHTNESS_LABEL[s.brightness]}</span>
                )}
                {s.siHua && siHuaBadge(s.siHua)}
              </div>
            ))
          )}
          {selfSihua.length > 0 && (
            <div className="mt-1 text-[11px]" style={{ color: 'var(--t-text2)' }}>
              宫干自化：{selfSihua.map(m => `${m.starName}→${m.siHua}`).join('　')}
            </div>
          )}
        </div>

        {/* 辅弼杂曜与神煞 */}
        <div>
          <div className="mb-1.5 text-[10px] tracking-[0.2em]" style={{ color: 'var(--t-faint)' }}>辅弼杂曜 · 神煞</div>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {minors.length === 0 ? (
              <span className="text-[12px]" style={{ color: 'var(--t-faint)' }}>无</span>
            ) : minors.map(s => (
              <span key={s.name} className="flex items-center gap-0.5 text-[12px]" style={{ color: 'var(--t-text2)' }}>
                {s.name}{s.siHua && siHuaBadge(s.siHua)}
              </span>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 text-[11px]" style={{ color: 'var(--t-faint)' }}>
            {palace.changsheng12 && <span>长生: {palace.changsheng12}</span>}
            {palace.boshi12 && <span>博士: {palace.boshi12}</span>}
            {palace.jiangqian12 && <span>将前: {palace.jiangqian12}</span>}
            {palace.suiqian12 && <span>岁前: {palace.suiqian12}</span>}
          </div>
        </div>

        {/* 对宫与小限 */}
        <div>
          <div className="mb-1.5 text-[10px] tracking-[0.2em]" style={{ color: 'var(--t-faint)' }}>对宫 · 小限</div>
          {opposite && (
            <div className="text-[11px] leading-6" style={{ color: 'var(--t-text2)' }}>
              对宫 {opposite.name}{opposite.name.endsWith('宫') ? '' : '宫'}（{STEMS[opposite.stem]}{BRANCHES[opposite.branch]}）：
              <span style={{ color: 'var(--t-text1)' }}>{oppositeMajors.map(s => s.name).join('、') || '空宫'}</span>
            </div>
          )}
          {(palace.xiaoXianAges?.length ?? 0) > 0 && (
            <div className="mt-1 text-[11px]" style={{ color: 'var(--t-faint)' }}>
              小限：{palace.xiaoXianAges!.join('、')} 岁
            </div>
          )}
        </div>
      </div>
    </div>
  );
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
  const selectedPalace = selectedBranch !== null ? byBranch.get(selectedBranch) : undefined;

  return (
    <div>
      <div
        className="rounded-lg"
        style={{
          border: '1px solid var(--t-border)',
          background: 'var(--t-card)',
          boxShadow: 'var(--sh-md)',
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
      {selectedPalace && (
        <PalaceDetail
          chart={chart}
          palace={selectedPalace}
          onClose={() => onPalaceSelect(selectedPalace.branch)}
        />
      )}
    </div>
  );
}
