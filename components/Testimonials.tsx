'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F7] border-t-2 border-navy">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-8 border-b border-navy/10">
        <p className="font-sans text-orange text-[10px] tracking-[4px] uppercase mb-3">Social proof</p>
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          CLIENT STORIES
        </h2>
      </div>

      {/* Testimonials — alternating white/transparent rows */}
      <div className="divide-y divide-navy/10">
        {TESTIMONIALS.map(({ quote, name, location, rating }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            className={`relative px-6 md:px-12 lg:px-16 xl:px-24 py-12 grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 overflow-hidden ${
              i % 2 === 0 ? 'bg-white' : ''
            }`}
          >
            {/* Decorative oversized quote mark */}
            <span
              className="absolute top-6 right-8 font-serif text-navy leading-none select-none pointer-events-none hidden md:block"
              style={{ fontSize: '8rem', opacity: 0.03 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Index */}
            <div className="flex md:flex-col gap-4 md:gap-0 items-center md:items-start">
              <span className="font-serif text-navy/10 leading-none text-4xl select-none">
                0{i + 1}
              </span>
              {/* Stars */}
              <div className="flex gap-0.5 md:mt-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 bg-orange" />
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <p
                className="font-sans italic text-navy/70 leading-relaxed mb-6"
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
