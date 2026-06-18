import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: '2+', label: 'Proyectos completados' },
  { number: 'AI', label: 'Integración con IA' },
  { number: '10+', label: 'Tecnologías dominadas' },
  { number: '∞', label: 'Ganas de aprender' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">Sobre mí</p>
            <h2 className="section-title">
              Construyo con <span className="gradient-text">código</span> y con <span className="gradient-text">IA</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '15px', marginBottom: '20px' }}>
              Soy Diego Javier Mendez Ortiz, Tecnólogo en Desarrollo de Sistemas Informáticos y próximamente
              Ingeniero de Sistemas. Me apasiona construir soluciones digitales que resuelvan problemas reales,
              combinando desarrollo tradicional con herramientas de inteligencia artificial.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '15px', marginBottom: '32px' }}>
              He trabajado en redes con Cisco Packet Tracer, administración de servidores Linux con SSH,
              desarrollo web full stack y aplicaciones móviles con Flutter. Actualmente enfocado en integrar
              IA en mis proyectos para crear experiencias más inteligentes.
            </p>
            <a href="mailto:ortizdiegito777@gmail.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--accent-cyan)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--accent-cyan)',
              paddingBottom: '2px',
              transition: 'opacity 0.2s',
            }}>
              ortizdiegito777@gmail.com →
            </a>
          </motion.div>

          {/* Right - stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '32px 24px',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '42px',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}>{stat.number}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
