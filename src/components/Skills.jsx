import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#e34f26',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#1572b6',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#f7df1e',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    color: '#7952b3',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61dafb',
  },
  {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    color: '#02569b',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776ab',
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    color: '#009688',
  },
 
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#f89820',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#4479a1',
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    color: '#3ecf8e',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#f05032',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#ffffff',
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    color: '#fcc624',
  },
  {
    name: 'Google Maps',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    color: '#4285f4',
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    color: '#646cff',
  },
]

function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.05 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', padding: '2px', borderRadius: '14px', cursor: 'default' }}
      className="skill-card-wrapper"
    >
      {/* Gradient border */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: '14px',
        background: `linear-gradient(135deg, ${skill.color}80, #3b82f680)`,
        opacity: 0,
        transition: 'opacity 0.3s',
      }} className="skill-glow" />

      <div
        style={{
          background: '#0d1f3c',
          borderRadius: '13px',
          padding: '28px 16px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          border: '1px solid rgba(59,130,246,0.15)',
          transition: 'border-color 0.3s, transform 0.3s',
          position: 'relative',
          zIndex: 1,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = skill.color
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.closest('.skill-card-wrapper').querySelector('.skill-glow').style.opacity = '1'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.closest('.skill-card-wrapper').querySelector('.skill-glow').style.opacity = '0'
        }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          width={52}
          height={52}
          style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px ' + skill.color + '60)' }}
        />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-secondary)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <p className="section-label">Habilidades</p>
          <h2 className="section-title">Mi <span className="gradient-text">stack tecnológico</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>
            Tecnologías que uso para construir proyectos reales, desde redes hasta aplicaciones con IA.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '16px',
        }}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
