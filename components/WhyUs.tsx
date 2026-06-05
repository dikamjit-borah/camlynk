'use client'

import { motion } from 'framer-motion'

const REASONS = [
  { num: '01', title: 'SAME-DAY INSTALLATION',  body: 'Most jobs are quoted, confirmed and installed in a single visit. No long waits.' },
  { num: '02', title: '5-YEAR WARRANTY',         body: 'Every piece of equipment we install is fully covered for five years. No asterisks.' },
  { num: '03', title: 'LOCAL TO GUWAHATI',       body: 'We live here. We know the city, its buildings, and its specific security needs.' },
  { num: '04', title: 'AMC PLANS AVAILABLE',     body: 'Affordable annual maintenance contracts that keep your systems running flawlessly.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="border-t-2 border-navy">

      {/* Header */}
      <div className="bg-white px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-8 border-b border-navy/10 flex items-end justify-between gap-4">
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          WHY CAMLYNK
        </h2>
        <a
          href="#contact"
          className="font-sans italic text-orange text-sm hover:text-navy transition-colors shrink-0"
        >
          Book a free survey →
        </a>
      </div>

      {/* Pull-stat — full-bleed dark strip */}
      <div className="bg-navy relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative px-6 md:px-12 lg:px-16 xl:px-24 py-14 md:py-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-white leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
          >
            500+ installations.{' '}
            <span className="text-orange italic">Zero compromises.</span>
          </motion.p>
        </div>
      </div>

      {/* Reasons grid */}
      <div className="bg-white grid grid-cols-1 md:grid-cols-2">
        {REASONS.map(({ num, title, body }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            className="relative px-6 md:px-12 lg:px-16 xl:px-24 py-10 md:py-12 border-b border-navy/10 md:odd:border-r overflow-hidden"
          >
            {/* Watermark */}
            <span
              className="absolute bottom-3 right-6 font-serif text-navy leading-none select-none pointer-events-none"
              style={{ fontSize: '5.5rem', opacity: 0.04 }}
              aria-hidden="true"
            >
              {num}
            </span>

            <div className="flex items-start gap-5">
              <span
                className="font-serif leading-none shrink-0 mt-1"
                style={{ fontSize: '2.5rem', color: 'rgba(232,127,36,0.5)' }}
              >
                {num}
              </span>
              <div>
                <h3
                  className="font-serif text-navy mb-3"
                  style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)', letterSpacing: '1px' }}
                >
                  {title}
                </h3>
                <div className="h-[2px] bg-orange w-6 mb-3" />
                <p className="font-sans italic text-navy/50 text-sm leading-relaxed max-w-sm">{body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
