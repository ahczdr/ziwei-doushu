'use client';

/**
 * 路由段错误边界：渲染/数据错误时展示，不白屏不无限刷新。
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        background: 'var(--bg-0)',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '32px', color: 'var(--ac)', opacity: 0.4 }}>☯</div>
      <h1
        style={{
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: 'var(--tx-0)',
        }}
      >
        此页暂时无法显示
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--tx-3)', lineHeight: 1.7, maxWidth: '420px' }}>
        页面渲染出现异常。命盘数据为确定性计算，刷新后重试即可恢复。
        {error.digest && (
          <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', opacity: 0.6 }}>
            错误编号：{error.digest}
          </span>
        )}
      </p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <button
          onClick={reset}
          style={{
            padding: '10px 28px',
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(135deg, #9a6210, #c88020)',
            color: '#fff8e8',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            cursor: 'pointer',
          }}
        >
          重试
        </button>
        <a
          href="/"
          style={{
            padding: '10px 28px',
            borderRadius: '999px',
            border: '1px solid var(--bdr-med)',
            color: 'var(--tx-2)',
            fontSize: '13px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          返回首页
        </a>
      </div>
    </div>
  );
}
