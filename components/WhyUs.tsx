'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const STEPS = [
  {
    num: '01',
    title: 'Free Site Survey',
    hook: 'No fee. No obligation. Just clarity.',
    body: 'We visit your home or business, assess every entry point, and recommend exactly what you need — with a transparent written quote ready before we leave. We live here; we know Guwahati\'s buildings and their specific security challenges.',
    proof: ['No charge', 'Written quote', 'Local expertise'],
  },
  {
    num: '02',
    title: 'Expert Installation',
    hook: 'Clean, fast work. Usually same-day.',
    body: 'Our certified technicians install with minimal disruption — cables routed and hidden, brackets perfectly level, cameras positioned for maximum coverage. Most residential jobs are complete in a single visit. No long waits. No half-finished work.',
    proof: ['Certified team', 'Same-day', 'Zero mess'],
  },
  {
    num: '03',
    title: 'Lasting Protection',
    hook: "5 years covered. We don't disappear.",
    body: 'From the moment we finish, you have live camera access, 24/7 mobile alerts, and our direct support line. Every piece of equipment is under our 5-year warranty — no asterisks, no small print. Affordable AMC plans available for complete ongoing peace of mind.',
    proof: ['5-yr warranty', '24/7 support', 'AMC plans'],
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[var(--color-navy)]">

      {/* Editorial header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28 pb-14 border-b border-[var(--color-rule)] flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-sans shrink-0"
              style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
            >
              Why Camlynk
            </span>
            <div className="h-px w-10 bg-[var(--color-rule)]" />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(2.8rem, 6vw, 6rem)',
              letterSpacing: '-0.03em',
              lineHeight: '0.88',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--color-ink)',
            }}
          >
            How it works.<br />
            Why it works.
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.12, ease: EASE_OUT }}
          className="font-sans text-sm leading-relaxed md:max-w-xs md:text-right md:mb-2 shrink-0"
          style={{ color: 'var(--color-ink-3)' }}
        >
          20+ installations across Guwahati — every one backed by a free survey, same-day fitting, and a 5-year warranty with no small print.
        </motion.p>
      </div>

      {/* Three-column process */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-rule)]">
        {STEPS.map(({ num, title, hook, body, proof }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
            className="relative px-8 md:px-10 lg:px-12 py-14 overflow-hidden group hover:bg-[var(--color-paper-2)] transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            {/* Watermark numeral */}
            <span
              aria-hidden="true"
              className="absolute select-none pointer-events-none"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(8rem, 14vw, 14rem)',
                fontWeight: 700,
                lineHeight: 1,
                color: 'var(--color-ink)',
                opacity: 0.03,
                bottom: '-1rem',
                right: '-0.5rem',
              }}
            >
              {num}
            </span>

            <div className="relative flex flex-col gap-6">

              {/* Step label + rule */}
              <div className="flex items-center gap-3">
                <span
                  className="font-sans shrink-0"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
                >
                  Step {num}
                </span>
                <div className="h-px flex-1 bg-[var(--color-rule)]" />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: '0.95',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                }}
              >
                {title}
              </h3>

              {/* Hook */}
              <p
                className="font-sans font-medium"
                style={{ fontSize: '0.78rem', letterSpacing: '0.04em', color: 'var(--color-accent-2)' }}
              >
                {hook}
              </p>

              {/* Body */}
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: 'var(--color-ink-3)' }}
              >
                {body}
              </p>

              {/* Proof chips */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-rule)]">
                {proof.map((p) => (
                  <span
                    key={p}
                    className="font-sans"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.08em',
                      padding: '0.35rem 0.7rem',
                      background: 'var(--color-paper-3)',
                      color: 'var(--color-ink-2)',
                      border: '1px solid var(--color-rule)',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
