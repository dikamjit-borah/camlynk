'use client'

import { Camera, BellRing, Video, ScanLine, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const FEATURES = [
  {
    Icon: Camera,
    title: 'CCTV Installation',
    detail: 'HD and 4K cameras with night vision deliver round-the-clock coverage of every entry point. Remote viewing and cloud backup mean your footage is accessible from anywhere, at any time.',
  },
  {
    Icon: BellRing,
    title: 'Burglar Alarms',
    detail: 'Motion-triggered alarms with instant mobile alerts respond the moment a breach is detected. A loud siren deters intruders while you are notified in real time — wherever you are.',
  },
  {
    Icon: Video,
    title: 'Video Doorbell',
    detail: 'See, hear and speak to anyone at your door remotely from your smartphone. Never miss a delivery or screen an unexpected visitor — even when you are miles from home.',
  },
  {
    Icon: ScanLine,
    title: 'Motion Sensors',
    detail: 'Indoor and outdoor PIR sensors detect movement and trigger instant alerts or linked alarms. Pet-immune options prevent false alarms while keeping your property continuously protected.',
  },
  {
    Icon: PhoneCall,
    title: 'Intercom Systems',
    detail: 'Audio and video intercoms for multi-flat buildings, offices, or standalone homes. Grant access, screen visitors and communicate — all without leaving your room.',
  },
]

export default function CoreSecurity() {
  return (
    <section id="core-security" className="bg-navy">
      <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">

        {/* Left — sticky panel */}
        <div
          className="bg-[var(--color-paper-2)] px-6 md:px-12 lg:px-14 py-16 border-b md:border-b-0 md:border-r border-[var(--color-rule)]"
          style={{ overflowX: 'clip' }}
        >
          <div className="md:sticky md:top-24">
            <h2
              className="font-serif text-ink leading-[0.88]"
              style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', letterSpacing: '-0.02em', fontStyle: 'normal' }}
            >
              Secure every corner.
            </h2>
            <div className="h-px bg-[var(--color-rule)] mt-8 mb-6 w-8" />
            <p className="font-sans text-[var(--color-ink-3)] text-sm leading-relaxed mb-10 max-w-xs">
              From high-definition cameras to smart alarm systems — we cover every entry point of your home or business with professional-grade equipment.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-sans uppercase text-[var(--color-paper)] bg-[var(--color-accent)] hover:bg-ink hover:text-[var(--color-paper)] transition-colors"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.2em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
              }}
            >
              Get a free quote
            </a>
          </div>
        </div>

        {/* Right — feature list */}
        <div className="divide-y divide-[var(--color-rule)]">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_OUT }}
              className="flex items-start gap-5 px-8 md:px-12 xl:px-20 py-9 group hover:bg-[var(--color-paper-2)] transition-colors"
              style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
            >
              <div
                className="w-9 h-9 border border-[var(--color-rule)] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[var(--color-accent)] transition-colors"
                style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
              >
                <Icon size={15} className="text-[var(--color-ink-3)] group-hover:text-[var(--color-accent)] transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-ink text-sm tracking-[1px] mb-2" style={{ fontStyle: 'normal' }}>{title}</h3>
                <p className="font-sans text-[var(--color-ink-3)] group-hover:text-[var(--color-ink-2)] text-sm leading-relaxed">{detail}</p>
              </div>
              <span className="font-serif text-[var(--color-ink-3)] text-xs opacity-30 self-start mt-1 shrink-0 tabular-nums">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
