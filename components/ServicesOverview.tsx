'use client'

import { motion } from 'framer-motion'

const OVERVIEW = [
  {
    num: '01',
    title: 'Core Security',
    tagline: 'Keep your home protected 24/7 with professional-grade surveillance, alarm systems, and smart access control.',
    subservices: ['CCTV Installation', 'Burglar Alarms', 'Video Doorbell', 'Motion Sensors', 'Intercom'],
    href: '#core-security',
    cta: 'Explore Core Security',
  },
  {
    num: '02',
    title: 'Smart Home Integration',
    tagline: 'Control, automate and monitor your entire home from anywhere in the world — all from a single app.',
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
    <section id="services" className="bg-[#F7F7F7] border-t-2 border-navy">

      {/* Section header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-8 flex items-end justify-between gap-4 border-b border-navy/10">
        <div>
          <p className="font-sans text-orange text-[10px] tracking-[4px] uppercase mb-3">What we do</p>
          <h2
            className="font-serif text-navy"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
          >
            OUR SERVICES
          </h2>
        </div>
        <span className="font-sans italic text-navy/35 text-sm shrink-0">3 services</span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-10 lg:px-12 xl:px-20 py-8 md:py-10 gap-5">
        {OVERVIEW.map(({ num, title, tagline, subservices, href, cta }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex flex-col px-7 py-10 bg-white border border-navy/10 overflow-hidden group transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(27,58,92,0.09)]"
          >
            {/* Orange top accent border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange" />

            {/* Giant watermark number */}
            <span
              className="absolute bottom-3 right-4 font-serif text-navy leading-none select-none pointer-events-none"
              style={{ fontSize: '7.5rem', opacity: 0.035 }}
              aria-hidden="true"
            >
              {num}
            </span>

            {/* Number badge */}
            <span
              className="font-serif leading-none mb-5 block"
              style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'rgba(232,127,36,0.55)' }}
            >
              {num}
            </span>

            {/* Service name */}
            <h3
              className="font-serif text-navy leading-none mb-4"
              style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.01em' }}
            >
              {title}
            </h3>

            {/* Orange rule */}
            <div className="h-[2px] bg-orange w-8 mb-5" />

            {/* Tagline */}
            <p className="font-sans text-navy/60 text-sm leading-relaxed mb-6 flex-1">
              {tagline}
            </p>

            {/* Sub-service chips — orange tinted */}
            <div className="flex flex-wrap gap-2 mb-8">
              {subservices.map((s) => (
                <span
                  key={s}
                  className="font-sans text-[11px] tracking-[0.5px] px-2.5 py-1 border"
                  style={{
                    color: 'rgba(232,127,36,0.85)',
                    background: 'rgba(232,127,36,0.08)',
                    borderColor: 'rgba(232,127,36,0.22)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={href}
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[2px] text-orange group-hover:text-navy transition-colors duration-200"
            >
              {cta}
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
