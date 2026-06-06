'use client'

import { Zap, Lightbulb, MonitorSmartphone, Wifi } from 'lucide-react'
import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const FEATURES = [
  {
    Icon: Zap,
    title: 'Home Automation',
    detail: 'Set schedules, create scenes and control everything with your voice or a single app. Your home works around your routine, not the other way around.',
  },
  {
    Icon: Lightbulb,
    title: 'Smart Lighting',
    detail: 'Intelligent lighting that dims for movie night, brightens for work, and switches off when you leave. Motion-triggered options save energy without you lifting a finger.',
  },
  {
    Icon: MonitorSmartphone,
    title: 'Remote Monitoring',
    detail: 'Live camera feeds and instant alerts keep you informed of what is happening at home — from anywhere in the world, directly on your phone.',
  },
  {
    Icon: Wifi,
    title: 'Structured Networking',
    detail: 'A fast, reliable network is the backbone of every smart home. We install mesh Wi-Fi, structured cabling and enterprise-grade routers throughout your property.',
  },
]

export default function SmartHome() {
  return (
    <section id="smart-home" className="bg-light">

      {/* Header — Split Studio diptych */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-16 border-b border-[var(--color-paper)]/08">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div>
            <h2
              className="font-serif text-navy leading-[0.88]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', fontStyle: 'normal' }}
            >
              Your home,<br />
              connected<br />
              &amp; controlled.
            </h2>
          </div>
          <div className="md:max-w-xs md:mb-1 shrink-0">
            <p className="font-sans text-navy/65 text-sm leading-relaxed mb-7">
              Control, automate and monitor everything — from your phone, from anywhere in the world. Smart home systems that are actually simple to use.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-sans uppercase text-ink bg-navy hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors group"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              Get a free quote
              <span className="group-hover:translate-x-1 transition-transform" style={{ transitionDuration: 'var(--dur-short)' }}>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Feature grid — 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[var(--color-paper)]/08">
        {FEATURES.map(({ Icon, title, detail }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_OUT }}
            className={[
              'flex items-start gap-5 px-6 md:px-12 lg:px-16 xl:px-24 py-10',
              'border-b border-[var(--color-paper)]/08',
              i % 2 === 0 ? 'sm:border-r sm:border-[var(--color-paper)]/08' : '',
              'group hover:bg-white transition-colors',
            ].join(' ')}
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            <div
              className="w-9 h-9 border border-navy/12 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[var(--color-accent-2)] transition-colors"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >
              <Icon size={15} className="text-navy/65 group-hover:text-[var(--color-accent-2)] transition-colors" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-serif text-navy text-sm tracking-[1.5px] mb-2" style={{ fontStyle: 'normal' }}>{title}</h3>
              <p className="font-sans text-navy/65 text-sm leading-relaxed">{detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
