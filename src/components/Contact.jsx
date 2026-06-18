import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText('ortizdiegito777@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          <p className="section-label">Contacto</p>
          <h2 className="section-title">
            ¿Tienes un <span className="gradient-text">proyecto</span>?
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '15px', marginBottom: '48px' }}>
            Estoy disponible para proyectos freelance, colaboraciones o simplemente
            para hablar de tecnología. No dudes en escribirme.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px 28px',
                width: '100%',
                maxWidth: '440px',
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              onClick={copy}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Mail size={18} color="var(--accent-blue)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  ortizdiegito777@gmail.com
                </span>
              </div>
              {copied
                ? <Check size={16} color="#10b981" />
                : <Copy size={16} color="var(--text-muted)" />
              }
            </motion.div>

            <motion.a
              href="https://github.com/memeganes8-bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px 28px',
                width: '100%',
                maxWidth: '440px',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <Github size={18} color="var(--accent-blue)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                github.com/memeganes8-bot
              </span>
            </motion.a>
          </div>

          <motion.a
            href="mailto:ortizdiegito777@gmail.com"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              display: 'inline-block',
              marginTop: '40px',
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: '#fff',
              padding: '16px 48px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: 'var(--font-display)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            whileHover={{ scale: 1.04, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
          >
            Enviar mensaje
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
