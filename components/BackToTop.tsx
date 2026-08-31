/**
 * 返回顶部浮动按钮
 * 纯锚点 + 全局 smooth scroll，无需客户端脚本，兼容 Server Component。
 */
export default function BackToTop() {
  return (
    <a
      href="#"
      aria-label="返回顶部"
      className="no-print"
      style={{
        position: 'fixed',
        right: '22px',
        bottom: '26px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-card)',
        border: '1px solid rgba(184,146,42,0.35)',
        color: 'var(--ac)',
        fontSize: '16px',
        textDecoration: 'none',
        boxShadow: 'var(--sh-sm)',
      }}
    >
      ↑
    </a>
  );
}
