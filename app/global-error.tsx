'use client';

/**
 * 根级错误兜底：根布局本身出错时使用（须自带 html/body）。
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="zh-CN">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          background: '#FBF6E8',
          fontFamily:
            "-apple-system, 'PingFang SC', 'Helvetica Neue', 'Segoe UI', sans-serif",
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <div style={{ fontSize: '32px', color: '#B8922A', opacity: 0.4 }}>☯</div>
        <h1 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '0.1em', color: '#2A2113', margin: 0 }}>
          应用出现异常
        </h1>
        <p style={{ fontSize: '13px', color: '#6E5C3C', lineHeight: 1.7, maxWidth: '420px', margin: 0 }}>
          页面加载遇到问题，请刷新重试。
          {error.digest && (
            <span style={{ display: 'block', marginTop: '6px', fontSize: '11px', opacity: 0.6 }}>
              错误编号：{error.digest}
            </span>
          )}
        </p>
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
            marginTop: '8px',
          }}
        >
          重试
        </button>
      </body>
    </html>
  );
}
