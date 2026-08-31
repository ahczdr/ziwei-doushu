import Link from 'next/link';

/**
 * 404 页：未匹配路由时展示，风格与全站古典卷轴主题一致。
 */
export default function NotFound() {
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
      <div style={{ fontSize: '56px', color: 'var(--ac)', opacity: 0.25, fontWeight: 600 }}>肆零肆</div>
      <h1
        style={{
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: 'var(--tx-0)',
          margin: 0,
        }}
      >
        此页不在命盘之中
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--tx-3)', lineHeight: 1.7, maxWidth: '420px', margin: 0 }}>
        您访问的页面不存在或已移动。不如回到首页，重新起一张命盘。
      </p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <Link
          href="/"
          style={{
            padding: '10px 28px',
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(135deg, #9a6210, #c88020)',
            color: '#fff8e8',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          返回首页
        </Link>
        <Link
          href="/chart"
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
          直接排盘
        </Link>
      </div>
    </div>
  );
}
