'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const HEADER_STATS = [
  { label: 'Control', value: 'Single app' },
  { label: 'Voice', value: 'Alexa + Google' },
  { label: 'Cabling', value: 'Cat6 structured' },
  { label: 'Warranty', value: '5 years' },
]

const FEATURES = [
  {
    num: '01',
    title: 'Home Automation',
    hook: 'Your home works around you.',
    detail:
      'Set schedules, create scenes, and control every device with your voice or a single tap. Routines trigger automatically — lights dim as you settle in, locks engage as you sleep.',
    specs: [
      { label: 'Control', value: 'App + voice' },
      { label: 'Compatibility', value: 'Alexa · Google' },
      { label: 'Routines', value: 'Unlimited' },
    ],
  },
  {
    num: '02',
    title: 'Smart Lighting',
    hook: 'The right light. Every time.',
    detail:
      'Scene-based, schedule-driven, and motion-triggered lighting across every room. Dims for movie night, brightens for work, switches off automatically when the room empties.',
    specs: [
      { label: 'Zones', value: 'Unlimited' },
      { label: 'Triggers', value: 'Motion + schedule' },
      { label: 'Control', value: 'App + voice' },
    ],
  },
  {
    num: '03',
    title: 'Remote Monitoring',
    hook: 'Live at home. From anywhere.',
    detail:
      'Real-time HD camera feeds, door sensor alerts, and motion notifications sent directly to your phone. See exactly what is happening at home — no matter where in the world you are.',
    specs: [
      { label: 'Feeds', value: 'Live HD stream' },
      { label: 'Alerts', value: 'Push + SMS' },
      { label: 'Access', value: 'Global · 24/7' },
    ],
  },
  {
    num: '04',
    title: 'Structured Networking',
    hook: 'Fast everywhere. Dead zones: zero.',
    detail:
      'We install Cat6 structured cabling, enterprise-grade routers, and mesh Wi-Fi throughout your property — the reliable backbone every smart home needs to actually perform.',
    specs: [
      { label: 'Cabling', value: 'Cat6 / Cat6A' },
      { label: 'Coverage', value: 'Whole property' },
      { label: 'Wi-Fi', value: 'Mesh network' },
    ],
  },
]

export default function SmartHome() {
  return (
    <section id="smart-home" className="bg-[var(--color-light)]">

      {/* Editorial header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28 pb-14 border-b border-[var(--color-paper)]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          {/* Heading block */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="font-sans shrink-0"
                style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
              >
                Smart Home
              </span>
              <div className="h-px w-10 bg-[var(--color-paper)]/15" />
            </div>
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
              Your home,<br />
              connected<br />
              &amp; controlled.
            </h2>
          </div>

          {/* Right — description + stat grid + CTA */}
          <div className="flex flex-col gap-8 lg:max-w-sm lg:mb-2 shrink-0">
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: 'var(--color-paper)', opacity: 0.55 }}
            >
              Control, automate, and monitor everything from your phone — anywhere in the world. Smart home systems that are genuinely simple to live with.
            </p>

            {/* 2×2 stat grid */}
            <div
              className="grid grid-cols-2"
              style={{ gap: '1px', background: 'color-mix(in oklch, var(--color-paper) 14%, transparent)' }}
            >
              {HEADER_STATS.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1.5 p-4 bg-[var(--color-light)]">
                  <span
                    className="font-sans"
                    style={{ fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-paper)', opacity: 0.36 }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: '0.875rem', color: 'var(--color-paper)' }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="font-sans uppercase self-start bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-[var(--color-paper)] transition-colors"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.22em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              Get a free quote
            </a>
          </div>
        </motion.div>
      </div>

      {/* Feature rows */}
      <div className="divide-y divide-[var(--color-paper)]/10">
        {FEATURES.map(({ num, title, hook, detail, specs }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: EASE_OUT }}
            className="px-6 md:px-12 lg:px-16 xl:px-24 py-12 group hover:bg-white transition-colors"
            style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[2rem_1fr_auto] gap-6 lg:gap-14 lg:items-start">

              {/* Index number */}
              <span
                className="font-sans hidden lg:block"
                style={{ fontSize: '0.52rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-accent)', paddingTop: '0.3rem' }}
              >
                {num}
              </span>

              {/* Text */}
              <div>
                <h3
                  className="leading-none mb-2"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    letterSpacing: '-0.025em',
                    fontWeight: 600,
                    color: 'var(--color-paper)',
                  }}
                >
                  {title}
                </h3>
                <p
                  className="font-sans font-medium mb-4"
                  style={{ fontSize: '0.78rem', letterSpacing: '0.04em', color: 'var(--color-accent-2)' }}
                >
                  {hook}
                </p>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: 'var(--color-paper)', opacity: 0.55 }}
                >
                  {detail}
                </p>
              </div>

              {/* Spec cells — stacked vertically on desktop */}
              <div
                className="flex lg:flex-col"
                style={{ gap: '1px', background: 'color-mix(in oklch, var(--color-paper) 12%, transparent)' }}
              >
                {specs.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 px-4 py-3 bg-[var(--color-light)] group-hover:bg-white transition-colors"
                    style={{ transitionDuration: 'var(--dur-short)', minWidth: '7rem' }}
                  >
                    <span
                      className="font-sans"
                      style={{ fontSize: '0.5rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-paper)', opacity: 0.36 }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-sans font-medium"
                      style={{ fontSize: '0.75rem', color: 'var(--color-paper)' }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
