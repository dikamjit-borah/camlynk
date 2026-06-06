'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-cream">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-10 border-b border-[#0F2027]/08">
        <p className="font-sans italic text-orange text-xs tracking-[3px] mb-4">What clients say</p>
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', lineHeight: '0.9' }}
        >
          CLIENT STORIES
        </h2>
      </div>

      {/* Testimonials — consistent cream rows */}
      <div className="divide-y divide-[#0F2027]/08">
        {TESTIMONIALS.map(({ quote, name, location, rating }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            className="relative px-6 md:px-12 lg:px-16 xl:px-24 py-12 grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 overflow-hidden group hover:bg-white/50 transition-colors duration-200"
          >
            {/* Decorative oversized quote mark */}
            <span
              className="absolute top-6 right-8 font-serif text-navy leading-none select-none pointer-events-none hidden md:block"
              style={{ fontSize: '8rem', opacity: 0.03 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Index + stars */}
            <div className="flex md:flex-col gap-4 md:gap-0 items-center md:items-start">
              <span className="font-serif text-navy/[0.08] leading-none text-4xl select-none">
                0{i + 1}
              </span>
              <div className="flex gap-0.5 md:mt-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 bg-orange" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <p
                className="font-sans italic text-navy/60 leading-relaxed mb-6"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-orange" />
                <div>
                  <p className="font-serif text-navy text-xs tracking-[2px]">{name.toUpperCase()}</p>
                  <p className="font-sans italic text-navy/35 text-xs mt-0.5">{location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
