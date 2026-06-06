'use client'

import { Building2, Fingerprint, KeyRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/constants'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const FEATURES = [
  {
    Icon: Building2,
    title: 'Office & Shop CCTV',
    detail: 'High-definition camera systems engineered for commercial premises — wide-angle coverage, low-light performance and remote access built for busy business owners. Protect your stock, staff and customers around the clock.',
  },
  {
    Icon: Fingerprint,
    title: 'Biometric Attendance',
    detail: 'Replace paper registers with accurate fingerprint and face-recognition attendance systems. Eliminate time theft, generate automated reports and integrate directly with your payroll process.',
  },
  {
    Icon: KeyRound,
    title: 'Access Control',
    detail: 'Restrict sensitive areas using card, PIN or biometric entry — no more lost keys or unauthorised access. Full audit logs show exactly who entered where and when, giving you complete visibility.',
  },
]

export default function Commercial() {
  return (
    <section id="commercial" className="bg-navy">
      <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">

        {/* Left — sticky panel */}
        <div
          className="bg-[var(--color-paper-2)] px-6 md:px-12 lg:px-14 py-16 border-b md:border-b-0 md:border-r border-[var(--color-rule)]"
          style={{ overflowX: 'clip' }}
        >
          <div className="md:sticky md:top-24">
            <h2
              className="font-serif text-ink leading-[0.88]"
              style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', letterSpacing: '-0.02em', fontStyle: 'normal' }}
            >
              Commercial security.
            </h2>
            <div className="h-px bg-[var(--color-rule)] mt-8 mb-6 w-8" />
            <p className="font-sans text-[var(--color-ink-3)] text-sm leading-relaxed mb-8 max-w-xs">
              Offices, shops, warehouses, restaurants — we secure commercial spaces of every size across Guwahati with systems built to protect your business, not just your premises.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans uppercase text-[var(--color-paper)] bg-[var(--color-accent)] hover:bg-ink hover:text-[var(--color-paper)] transition-colors group"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              Get a quote
              <span className="group-hover:translate-x-1 transition-transform" style={{ transitionDuration: 'var(--dur-short)' }}>→</span>
            </a>
          </div>
        </div>

        {/* Right — feature list */}
        <div className="divide-y divide-[var(--color-rule)]">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: EASE_OUT }}
              className="flex items-start gap-5 px-8 md:px-12 xl:px-20 py-11 group hover:bg-[var(--color-paper-2)] transition-colors"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >
              <div
                className="w-9 h-9 border border-[var(--color-rule)] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[var(--color-accent)] transition-colors"
                style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
              >
                <Icon size={15} className="text-[var(--color-ink-3)] group-hover:text-[var(--color-accent)] transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-ink text-xs tracking-[2px] mb-2" style={{ fontStyle: 'normal' }}>{title}</h3>
                <p className="font-sans text-[var(--color-ink-3)] group-hover:text-[var(--color-ink-2)] text-sm leading-relaxed">{detail}</p>
              </div>
              <span className="font-serif text-[var(--color-ink-3)] text-xs opacity-20 self-start mt-1 shrink-0" style={{ fontVariantNumeric: 'tabular-nums' }}>0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
