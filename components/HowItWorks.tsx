'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const STEPS = [
  { step: '01', title: 'Free Site Survey',          body: 'We visit, assess your space and recommend exactly what you need — at no charge and no obligation.' },
  { step: '02', title: 'Professional Installation', body: 'Clean, fast work by our certified team. Most residential installations are completed same-day.' },
  { step: '03', title: 'You\'re Protected',         body: 'Live monitoring, remote app access and 24/7 support from day one. We stay with you after install.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-light">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-10 border-b border-[var(--color-paper)]/08">
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'var(--text-display-s)', letterSpacing: '-0.02em', lineHeight: '0.9', fontStyle: 'normal' }}
        >
          How It Works
        </h2>
      </div>

      {/* Steps — 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-paper)]/08">
        {STEPS.map(({ step, title, body }, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
            className="relative px-6 md:px-10 lg:px-14 py-14 overflow-hidden"
          >
            {/* Step numeral — watermark */}
            <span
              className="absolute top-2 right-4 font-serif font-semibold text-navy leading-none select-none pointer-events-none"
              style={{ fontSize: '9rem', opacity: 0.04, lineHeight: 1 }}
              aria-hidden="true"
            >
              {step}
            </span>

            <div className="relative">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-7 h-7 border border-[var(--color-accent-2)]/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[var(--color-accent-2)]/60" />
                </div>
              </div>

              <div className="h-px bg-[var(--color-accent-2)] w-8 mb-7 opacity-60" />

              <h3
                className="font-serif text-navy mb-4"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', letterSpacing: '0.01em', fontStyle: 'normal' }}
              >
                {title}
              </h3>
              <p className="font-sans text-navy/65 text-sm leading-relaxed">{body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
