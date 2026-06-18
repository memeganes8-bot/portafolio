import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Olympus Gym',
    description:
      'Sistema web completo para gestión de un gimnasio. Incluye dashboard con estadísticas en tiempo real, registro de clientes, control de membresías, pagos, entrada/salida y reportes de contabilidad imprimibles.',
    tags: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'Framer Motion', 'Tailwind CSS'],
    status: 'En vivo',
    statusColor: '#10b981',
    github: 'https://github.com/memeganes8-bot/olympus-gym',
    live: 'https://olympus-gym-fawn.vercel.app/',
    highlight: true,
  },
  {
    number: '02',
    title: 'Sistema de Inventario con IA',
    description:
      'Sistema básico de inventario construido con Spec-Kit y dos modelos de IA: Groq para generación automatizada de la aplicación y Llama 3.3 para análisis inteligente de datos. Base de datos en Supabase.',
    tags: ['Spec-Kit', 'Groq', 'Llama 3.3', 'Supabase', 'IA'],
    status: 'Terminado',
    statusColor: '#10b981',
    github: 'https://github.com/memeganes8-bot/sistema-inventario-ia',
    live: 'https://sistema-inventario-ia.vercel.app/',
    highlight: false,
  },
  {
    number: '03',
    title: 'App Móvil con Google Maps',
    description:
      'Aplicación móvil en desarrollo con Flutter que integra la API de Google Maps para localización y navegación. Proyecto en progreso con enfoque en UX mobile y rendimiento nativo.',
    tags: ['Flutter', 'Google Maps API', 'Dart', 'Mobile'],
    status: 'En desarrollo',
    statusColor: '#f59e0b',
    github: 'https://github.com/memeganes8-bot/flutter-app',
    live: 'https://flutter-app-six-sepia.vercel.app/',
    highlight: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '64px' }}
        >
          <p className="section-label">Proyectos</p>
          <h2 className="section-title">Lo que he <span className="gradient-text">construido</span></h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${project.highlight ? 'rgba(59,130,246,0.4)' : 'var(--border)'}`,
                borderRadius: '16px',
                padding: '36px',
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '32px',
                alignItems: 'start',
                transition: 'border-color 0.3s, transform 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = project.highlight ? 'rgba(59,130,246,0.4)' : 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {project.highlight && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                }} />
              )}

              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '48px',
                fontWeight: 700,
                color: 'rgba(59,130,246,0.15)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                {project.number}
              </div>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{project.title}</h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: project.statusColor,
                    background: `${project.statusColor}18`,
                    border: `1px solid ${project.statusColor}40`,
                    borderRadius: '4px',
                    padding: '3px 8px',
                    letterSpacing: '1px',
                    whiteSpace: 'nowrap',
                  }}>
                    {project.status}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '14px', marginBottom: '20px', maxWidth: '700px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '4px',
                      padding: '4px 10px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-blue)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <Github size={16} /> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <ExternalLink size={16} /> Ver app
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}