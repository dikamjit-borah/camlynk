'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const SERVICES = [
  {
    num: '01',
    category: 'Core Security',
    hook: 'See everything. Miss nothing.',
    description:
      'Professional HD and 4K CCTV, motion-triggered burglar alarms, video doorbells, and smart intercom systems — installed by certified technicians with same-day booking available across Guwahati.',
    specs: [
      { label: 'Max resolution', value: '4K / 8MP' },
      { label: 'Night vision', value: 'Up to 40m IR' },
      { label: 'Alerts', value: '24/7 mobile + SMS' },
      { label: 'Warranty', value: '5 yr parts & labour' },
    ],
    includes: [
      'HD & 4K CCTV',
      'Night Vision Cameras',
      'Burglar Alarms',
      'Video Doorbell',
      'Motion Sensors',
      'Intercom Systems',
      'Remote Viewing App',
      'Cloud & Local Storage',
    ],
    href: '#core-security',
  },
  {
    num: '02',
    category: 'Smart Home',
    hook: 'One tap. Every room.',
    description:
      'Automate lighting, locks, and climate from a single app — fully voice-controlled via Alexa or Google Home, structured Cat6 networking included, and scalable to every room of your home.',
    specs: [
      { label: 'Control hub', value: 'Single unified app' },
      { label: 'Voice assistants', value: 'Alexa · Google Home' },
      { label: 'Lighting', value: 'Unlimited scenes' },
      { label: 'Networking', value: 'Cat6 structured cabling' },
    ],
    includes: [
      'Home Automation',
      'Smart Lighting',
      'Smart Locks',
      'Climate Control',
      'Remote Monitoring',
      'Structured Networking',
      'Energy Management',
    ],
    href: '#smart-home',
  },
  {
    num: '03',
    category: 'Commercial',
    hook: 'Secure the site. Run the team.',
    description:
      'Enterprise-grade CCTV for up to 128 cameras, biometric fingerprint and face-ID attendance, and granular card or PIN access control — built for offices, shops, factories, and multi-site businesses.',
    specs: [
      { label: 'Camera capacity', value: 'Up to 128 / NVR' },
      { label: 'Attendance', value: 'Fingerprint + Face ID' },
      { label: 'Access control', value: 'Card · PIN · biometric' },
      { label: 'Reporting', value: 'Real-time audit logs' },
    ],
    includes: [
      'Office & Shop CCTV',
      'Biometric Attendance',
      'Face Recognition',
      'Access Control Systems',
      'Time & Attendance Reports',
      'Multi-site Management',
    ],
    href: '#contact',
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-[var(--color-light)]">

      {/* Editorial header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28 pb-14 border-b border-[var(--color-paper)]/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2
          style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: 'clamp(2.8rem, 6vw, 6rem)',
            letterSpacing: '-0.03em',
            lineHeight: '0.88',
            fontStyle: 'italic',
            fontWeight: 600,
            color: 'var(--color-paper)',
          }}
        >
          Security & smart home<br />installation, Guwahati
        </h2>
        <div className="flex flex-col gap-3 md:text-right md:max-w-xs">
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: 'var(--color-paper)', opacity: 0.52 }}
          >
            From a single doorbell camera to a full 128-camera commercial setup — we design, supply, install, and support it all in Guwahati.
          </p>
          <span
            className="font-sans"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
          >
            Same-day booking available
          </span>
        </div>
      </div>

      {/* Service panels */}
      <div className="divide-y divide-[var(--color-paper)]/10">
        {SERVICES.map(({ num, category, hook, description, specs, includes, href }, i) => (
          <motion.a
            key={category}
            href={href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.07 }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE_OUT }}
            className="block group bg-[var(--color-light)] hover:bg-white transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">

              {/* Left — identity */}
              <div className="flex flex-col justify-between gap-10">
                <div>
                  {/* Number + rule */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="font-sans shrink-0"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
                    >
                      {num}
                    </span>
                    <div className="h-px flex-1 bg-[var(--color-paper)]/12" />
                  </div>

                  {/* Category name */}
                  <h3
                    className="leading-none mb-4"
                    style={{
                      fontFamily: 'var(--font-fraunces), Georgia, serif',
                      fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                      letterSpacing: '-0.025em',
                      fontWeight: 600,
                      color: 'var(--color-paper)',
                    }}
                  >
                    {category}
                  </h3>

                  {/* Hook line */}
                  <p
                    className="font-sans font-medium mb-5"
                    style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: 'var(--color-accent-2)' }}
                  >
                    {hook}
                  </p>

                  {/* Description */}
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--color-paper)', opacity: 0.55 }}
                  >
                    {description}
                  </p>
                </div>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-2 font-sans self-start text-[var(--color-paper)] opacity-50 group-hover:text-[var(--color-accent)] group-hover:opacity-100 transition-all"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    transitionDuration: 'var(--dur-short)',
                    transitionTimingFunction: 'var(--ease-out)',
                  }}
                >
                  See full details
                  <span
                    className="inline-block group-hover:translate-x-1.5 transition-transform"
                    style={{ transitionDuration: 'var(--dur-short)' }}
                  >
                    →
                  </span>
                </span>
              </div>

              {/* Right — specs + includes */}
              <div className="flex flex-col gap-8">

                {/* 2x2 spec data grid */}
                <div className="grid grid-cols-2 gap-x-8">
                  {specs.map(({ label, value }, idx) => (
                    <div
                      key={label}
                      className="flex flex-col gap-2 py-5 transition-colors"
                      style={{
                        transitionDuration: 'var(--dur-short)',
                        transitionTimingFunction: 'var(--ease-out)',
                        ...(idx < 2 ? { borderBottom: '1px solid color-mix(in oklch, var(--color-paper) 14%, transparent)' } : {}),
                      }}
                    >
                      <span
                        className="font-sans block"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.28em',
                          textTransform: 'uppercase',
                          color: 'var(--color-paper)',
                          opacity: 0.36,
                        }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-sans font-medium"
                        style={{ fontSize: '0.875rem', lineHeight: '1.3', color: 'var(--color-paper)' }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <div>
                  <span
                    className="font-sans block mb-3"
                    style={{
                      fontSize: '0.55rem',
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'var(--color-paper)',
                      opacity: 0.36,
                    }}
                  >
                    Includes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {includes.map((item) => (
                      <span
                        key={item}
                        className="font-sans"
                        style={{
                          fontSize: '0.7rem',
                          letterSpacing: '0.02em',
                          padding: '0.35rem 0.75rem',
                          border: '1px solid color-mix(in oklch, var(--color-paper) 18%, transparent)',
                          color: 'color-mix(in oklch, var(--color-paper) 65%, transparent)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
