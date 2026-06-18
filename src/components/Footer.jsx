export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--text-muted)',
        letterSpacing: '1px',
      }}>
        {'<DJM />'}  ·  Diseñado y construido por Diego Javier Mendez Ortiz  ·  {new Date().getFullYear()}
      </p>
    </footer>
  )
}
