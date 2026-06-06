'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const OVERVIEW = [
  {
    num: '01',
    title: 'Core Security',
    tagline: 'Professional-grade surveillance, alarm systems, and smart access control for complete 24/7 protection.',
    subservices: ['CCTV Installation', 'Burglar Alarms', 'Video Doorbell', 'Motion Sensors', 'Intercom'],
    href: '#core-security',
    cta: 'Explore Core Security',
  },
  {
    num: '02',
    title: 'Smart Home Integration',
    tagline: 'Control, automate and monitor your entire home from anywhere in the world — from a single app.',
    subservices: ['Home Automation', 'Smart Lighting', 'Remote Monitoring', 'Structured Networking'],
    href: '#smart-home',
    cta: 'Explore Smart Home',
  },
  {
    num: '03',
    title: 'Commercial Security',
    tagline: 'Protect your business, manage staff attendance, and secure every access point across your premises.',
    subservices: ['Office & Shop CCTV', 'Biometric Attendance', 'Access Control Systems'],
    href: '#commercial',
    cta: 'Explore Commercial',
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-light">

      {/* Section head */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-10 border-b border-[var(--color-paper)]/08">
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'var(--text-display-s)', letterSpacing: '-0.02em', lineHeight: '0.9', fontStyle: 'normal' }}
        >
          Our Services
        </h2>
      </div>

      {/* Row layout */}
      <div className="divide-y divide-[var(--color-paper)]/08">
        {OVERVIEW.map(({ num, title, tagline, subservices, href, cta }, i) => (
          <motion.a
            key={title}
            href={href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
            className="block group hover:bg-white transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-10 md:py-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">

              {/* Watermark number */}
              <span
                className="font-serif font-semibold shrink-0 leading-none select-none hidden md:block text-navy"
                style={{ fontSize: 'clamp(3.5rem, 5.5vw, 6rem)', opacity: 0.06, lineHeight: 1 }}
                aria-hidden="true"
              >
                {num}
              </span>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-serif text-navy leading-none mb-3"
                  style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)', letterSpacing: '-0.01em', fontStyle: 'normal' }}
                >
                  {title}
                </h3>
                <div
                  className="mb-3 h-px bg-[var(--color-accent)] w-8"
                  style={{ transition: `width var(--dur-short) var(--ease-out)` }}
                />
                <p className="font-sans text-navy/65 text-sm leading-relaxed max-w-lg">{tagline}</p>
              </div>

              {/* Sub-services + arrow */}
              <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {subservices.map((s) => (
                    <span
                      key={s}
                      className="font-sans text-[11px] tracking-[0.5px] px-2.5 py-1 border border-[var(--color-accent-2)]/40 text-navy bg-[var(--color-accent-2)]/06"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="font-sans text-[11px] tracking-[2px] text-navy group-hover:text-[var(--color-accent-2)] flex items-center gap-2 transition-colors"
                  style={{ transitionDuration: 'var(--dur-short)' }}
                >
                  {cta}
                  <span className="group-hover:translate-x-1.5" style={{ transition: `transform var(--dur-short) var(--ease-out)` }}>→</span>
                </span>
              </div>

            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
