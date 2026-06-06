'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const PANEL_STATS = [
  { label: 'Warranty', value: '5 years' },
  { label: 'Support', value: '24 / 7' },
  { label: 'Installation', value: 'Same day' },
  { label: 'Site survey', value: 'Free' },
]

const FEATURES = [
  {
    num: '01',
    title: 'CCTV Installation',
    hook: 'Every pixel. Every moment.',
    detail:
      'HD and 4K cameras with IR night vision up to 40m cover every entry point around the clock. Remote viewing via mobile app — cloud and local NVR storage with continuous loop recording.',
    specs: [
      { label: 'Resolution', value: '4K / 8MP' },
      { label: 'Night vision', value: '40m IR' },
      { label: 'Storage', value: 'Local + cloud' },
    ],
  },
  {
    num: '02',
    title: 'Burglar Alarms',
    hook: 'Breach detected. You know in seconds.',
    detail:
      'Motion-triggered 110dB siren activates instantly alongside simultaneous push and SMS alerts to your phone. Pet-immune sensors eliminate false alarms. Compatible with existing alarm infrastructure.',
    specs: [
      { label: 'Alert time', value: '< 5 seconds' },
      { label: 'Siren', value: '110 dB' },
      { label: 'Sensors', value: 'Pet-immune PIR' },
    ],
  },
  {
    num: '03',
    title: 'Video Doorbell',
    hook: 'Answer your door. From anywhere.',
    detail:
      'Full HD wide-angle video, two-way audio, and pre-motion alerts before a visitor even rings. Works with Alexa, Google Home, and your existing wired or wireless chime.',
    specs: [
      { label: 'Video', value: '1080p HD' },
      { label: 'Field of view', value: '160° wide' },
      { label: 'Audio', value: '2-way live' },
    ],
  },
  {
    num: '04',
    title: 'Motion Sensors',
    hook: 'Nothing moves without you knowing.',
    detail:
      'Indoor and outdoor PIR and microwave sensors with configurable zones. Triggers alarms, smart lighting, or camera recording based on your custom setup — pet-immune options available throughout.',
    specs: [
      { label: 'Type', value: 'PIR + microwave' },
      { label: 'Zones', value: 'Multi-zone' },
      { label: 'Integration', value: 'Alarm + lighting' },
    ],
  },
  {
    num: '05',
    title: 'Intercom Systems',
    hook: 'Screen. Speak. Grant access. Remotely.',
    detail:
      'Audio and video intercoms for homes, apartment blocks, and offices. Grant remote door access from your phone, set up visitor logs, and integrate directly with smart door locks.',
    specs: [
      { label: 'Type', value: 'Audio + video' },
      { label: 'Access', value: 'Remote unlock' },
      { label: 'Scale', value: 'Multi-flat' },
    ],
  },
]

export default function CoreSecurity() {
  return (
    <section id="core-security" className="bg-[var(--color-navy)]">
      <div className="grid md:grid-cols-[340px_1fr] lg:grid-cols-[400px_1fr]">

        {/* Left — sticky panel */}
        <div
          className="bg-[var(--color-paper-2)] px-8 md:px-10 lg:px-12 py-16 border-b md:border-b-0 md:border-r border-[var(--color-rule)]"
          style={{ overflowX: 'clip' }}
        >
          <div className="md:sticky md:top-24 flex flex-col gap-10">

            {/* Label */}
            <div className="flex items-center gap-4">
              <span
                className="font-sans shrink-0"
                style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
              >
                Core Security
              </span>
              <div className="h-px flex-1 bg-[var(--color-rule)]" />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(2.2rem, 3.2vw, 3.2rem)',
                letterSpacing: '-0.03em',
                lineHeight: '0.9',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-ink)',
              }}
            >
              Secure every<br />corner.
            </h2>

            {/* Description */}
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: 'var(--color-ink-3)' }}
            >
              Professional-grade cameras, alarms, doorbells, and intercoms covering every entry point of your home or business — installed and warranted by certified technicians.
            </p>

            {/* Stats 2×2 */}
            <div
              className="grid grid-cols-2"
              style={{ gap: '1px', background: 'var(--color-rule)' }}
            >
              {PANEL_STATS.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1.5 p-4 bg-[var(--color-paper-2)]">
                  <span
                    className="font-sans"
                    style={{ fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.55 }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: '0.875rem', color: 'var(--color-ink)' }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="font-sans uppercase self-start bg-[var(--color-accent)] text-[var(--color-paper)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.22em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              Get a free survey
            </a>
          </div>
        </div>

        {/* Right — feature list */}
        <div className="divide-y divide-[var(--color-rule)]">
          {FEATURES.map(({ num, title, hook, detail, specs }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_OUT }}
              className="px-8 md:px-12 xl:px-16 py-10 group hover:bg-[var(--color-paper-2)] transition-colors"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >
              <div className="flex items-start gap-6">

                {/* Index number */}
                <span
                  className="font-sans shrink-0 tabular-nums"
                  style={{ fontSize: '0.52rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.3, marginTop: '0.3rem' }}
                >
                  {num}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="leading-none mb-2"
                    style={{
                      fontFamily: 'var(--font-fraunces), Georgia, serif',
                      fontSize: 'clamp(1.35rem, 2vw, 1.8rem)',
                      letterSpacing: '-0.02em',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-sans font-medium mb-4"
                    style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: 'var(--color-accent-2)' }}
                  >
                    {hook}
                  </p>
                  <p
                    className="font-sans text-sm leading-relaxed mb-6"
                    style={{ color: 'var(--color-ink-3)' }}
                  >
                    {detail}
                  </p>

                  {/* Spec strip */}
                  <div className="flex flex-wrap" style={{ gap: '1px', background: 'var(--color-rule)', display: 'inline-flex' }}>
                    {specs.map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col gap-1 px-4 py-3 bg-[var(--color-paper-3)] group-hover:bg-[var(--color-paper)] transition-colors"
                        style={{ transitionDuration: 'var(--dur-short)', minWidth: '5.5rem' }}
                      >
                        <span
                          className="font-sans"
                          style={{ fontSize: '0.5rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-ink-3)', opacity: 0.5 }}
                        >
                          {label}
                        </span>
                        <span
                          className="font-sans font-medium"
                          style={{ fontSize: '0.75rem', color: 'var(--color-ink)' }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
