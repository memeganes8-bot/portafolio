import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        padding: '16px 24px',
        background: scrolled ? 'rgba(2, 8, 23, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,130,246,0.15)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1100px',
        width: '100%',
      }}
    >
      <motion.a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--accent-blue)',
          textDecoration: 'none',
          letterSpacing: '2px',
        }}
        whileHover={{ scale: 1.05 }}
      >
        {'<DJM />'}
      </motion.a>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}
