import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Linkedin } from 'lucide-react'

const roles = ['Tecnólogo en Sistemas', 'Full Stack junior Developer', 'AI Builder', 'Futuro Ing. de Sistemas']

export default function Hero() {
  const roleRef = useRef(null)
  const roleIndex = useRef(0)
  const charIndex = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout
    const type = () => {
      const current = roles[roleIndex.current]
      if (!deleting.current) {
        charIndex.current++
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current)
        if (charIndex.current === current.length) {
          deleting.current = true
          timeout = setTimeout(type, 1800)
          return
        }
      } else {
        charIndex.current--
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current)
        if (charIndex.current === 0) {
          deleting.current = false
          roleIndex.current = (roleIndex.current + 1) % roles.length
        }
      }
      timeout = setTimeout(type, deleting.current ? 40 : 70)
    }
    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="hero" className="grid-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '60%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--accent-cyan)',
              letterSpacing: '3px',
              marginBottom: '20px',
            }}
          >
            {'// Hola, soy'}
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8vw, 90px)',
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: '8px',
              letterSpacing: '-2px',
            }}
          >
            Diego Javier
          </motion.h1>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8vw, 90px)',
              fontWeight: 800,
              lineHeight: 1.0,
              marginBottom: '32px',
              letterSpacing: '-2px',
            }}
          >
            Mendez Ortiz
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--accent-blue)' }}>{'>'}</span>
            <span
              ref={roleRef}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                color: 'var(--text-secondary)',
                borderRight: '2px solid var(--accent-blue)',
                paddingRight: '4px',
                animation: 'blink 1s step-end infinite',
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            Construyo aplicaciones web y móviles con tecnologías modernas e IA.
            Apasionado por crear soluciones reales que impacten negocios reales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <a href="#projects" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--accent-blue)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'all 0.2s',
              fontFamily: 'var(--font-display)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Ver proyectos
            </a>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'all 0.2s',
              fontFamily: 'var(--font-display)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Contactar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ display: 'flex', gap: '20px', marginTop: '48px' }}
          >
            {[
              { Icon: Github, href: 'https://github.com/memeganes8-bot', label: 'GitHub' },
              { Icon: Mail, href: 'mailto:ortizdiegito777@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s, transform 0.2s',
                  display: 'flex',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)' }}
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--accent-blue), transparent)',
          }}
        />
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{border-color:var(--accent-blue)} 50%{border-color:transparent} }`}</style>
    </section>
  )
}
