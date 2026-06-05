'use client'

import { motion } from 'framer-motion'

const STEPS = [
  { step: '01', title: 'FREE SITE SURVEY',          body: 'We visit, assess your space and recommend exactly what you need — at no charge.' },
  { step: '02', title: 'PROFESSIONAL INSTALLATION', body: 'Clean, fast work by our certified team. Most installations are done same-day.' },
  { step: '03', title: "YOU'RE PROTECTED",          body: 'Live monitoring, remote app access and 24/7 support from day one.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white border-t-2 border-navy">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-8 border-b border-navy/10">
        <p className="font-sans text-orange text-[10px] tracking-[4px] uppercase mb-3">The Process</p>
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          HOW IT WORKS
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-navy/10">
        {STEPS.map(({ step, title, body }, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: 'easeOut' }}
            className="relative px-6 md:px-10 lg:px-14 xl:px-20 py-12"
          >
            {/* Watermark step number */}
            <span
              className="absolute top-8 right-6 font-serif text-navy leading-none select-none pointer-events-none"
              style={{ fontSize: '5.5rem', opacity: 0.035 }}
              aria-hidden="true"
            >
              {step}
            </span>

            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-7 h-7 border-2 border-orange bg-orange/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-orange" />
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block h-px bg-orange/25" style={{ width: 36 }} />
              )}
            </div>

            {/* Orange rule */}
            <div className="h-[2px] bg-orange w-8 mb-6" />

            <h3
              className="font-serif text-navy mb-3"
              style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1rem)', letterSpacing: '1.5px' }}
            >
              {title}
            </h3>
            <p className="font-sans italic text-navy/50 text-sm leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
