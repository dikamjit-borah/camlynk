'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const REASONS = [
  { num: '01', title: 'Same-Day Installation',   body: 'Most jobs are quoted, confirmed and installed in a single visit. No long waits, no half-finished work.' },
  { num: '02', title: '5-Year Warranty',          body: 'Every piece of equipment we install is fully covered for five years. No asterisks, no small print.' },
  { num: '03', title: 'Local to Guwahati',        body: 'We live here. We know the city, its buildings, and its specific security requirements intimately.' },
  { num: '04', title: 'AMC Plans Available',      body: 'Affordable annual maintenance contracts that keep your systems running without unexpected costs.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-10 border-b border-[var(--color-rule)]">
        <h2
          className="font-serif text-ink"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', lineHeight: '0.9', fontStyle: 'normal' }}
        >
          Why Camlynk
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
          className="font-serif text-[var(--color-ink-3)] mt-6 max-w-lg leading-tight"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', letterSpacing: '-0.01em', fontStyle: 'normal' }}
        >
          500+ installations. Zero compromises.
        </motion.p>
      </div>

      {/* Reasons — full-width horizontal strips */}
      <div className="divide-y divide-[var(--color-rule)]">
        {REASONS.map(({ num, title, body }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: EASE_OUT }}
            className="flex items-center gap-6 md:gap-14 px-6 md:px-12 lg:px-16 xl:px-24 py-9 group hover:bg-[var(--color-paper-2)] transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            {/* Watermark number */}
            <span
              className="font-serif font-semibold shrink-0 leading-none select-none hidden md:block text-ink"
              style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', opacity: 0.04, lineHeight: 1 }}
              aria-hidden="true"
            >
              {num}
            </span>

            {/* Title block */}
            <div className="w-56 shrink-0">
              <h3
                className="font-serif text-ink"
                style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.1rem)', letterSpacing: '0.02em', fontStyle: 'normal' }}
              >
                {title}
              </h3>
              <div className="h-px bg-[var(--color-accent)] w-6 mt-3" />
            </div>

            {/* Body */}
            <p className="font-sans text-[var(--color-ink-3)] group-hover:text-[var(--color-ink-2)] text-sm leading-relaxed hidden md:block flex-1">
              {body}
            </p>

            {/* Arrow */}
            <span
              className="font-sans text-[var(--color-ink-3)] text-xs opacity-20 ml-auto shrink-0 group-hover:opacity-100 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-[opacity,color,transform]"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >
              →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
