'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z" />
  </svg>
)

const REASSURANCES = ['No commitment', 'Written quote', 'Same-day available', 'Free of charge']

const FAQS = [
  {
    q: 'How long does a typical installation take?',
    a: 'Most residential jobs — including 4 to 8 cameras with a full alarm setup — are completed in a single day. Commercial premises depend on size and complexity, but we always give you a clear time estimate at the site survey stage. We do not start jobs we cannot finish.',
  },
  {
    q: 'Can I view my cameras from my phone, anywhere?',
    a: 'Yes — every system we install includes remote viewing via a smartphone app. You get live feeds, recorded footage review, and motion-triggered push alerts from anywhere in the world, as long as you have an internet connection. Setup and app walkthrough are part of every installation.',
  },
  {
    q: 'What does the 5-year warranty actually cover?',
    a: 'Everything we supply and install — cameras, NVRs, sensors, doorbells, cabling, and mounting hardware. If any component fails within five years due to a manufacturing or installation fault, we replace it at no charge. No asterisks. No conditions buried in small print.',
  },
  {
    q: 'Do you install CCTV for shops and offices too?',
    a: 'Yes — commercial work is a core part of what we do. Whether it is a single-room shop, a multi-floor office, or a warehouse, we design a camera and alarm system around your specific layout and budget. We also install biometric attendance and access control for businesses of any size.',
  },
  {
    q: 'Do you offer maintenance after installation?',
    a: 'Yes. We offer Annual Maintenance Contracts (AMC) covering regular check-ups, software updates, fault diagnosis, and priority support. AMC customers get first-call response and discounted repair costs. Ask about pricing at the survey — it is more affordable than you expect.',
  },
  {
    q: 'Do you cover areas outside Guwahati city?',
    a: 'Our primary area is Guwahati and immediately surrounding localities. For locations slightly further out, installation is often possible with a small travel fee. Contact us with your specific address and we will confirm coverage upfront.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[var(--color-light)] border-t border-[var(--color-paper)]/10">

      {/* Section label strip */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-28">
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-sans shrink-0"
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
          >
            Book a Survey
          </span>
          <div className="h-px flex-1 bg-[var(--color-paper)]/12" />
        </div>
      </div>

      {/* Two-column layout */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pb-24 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 lg:items-start">

        {/* LEFT — sticky CTA */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-28">

          {/* Heading */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                letterSpacing: '-0.03em',
                lineHeight: '0.9',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-paper)',
              }}
            >
              Book your<br />free survey.
            </h2>
            <p
              className="font-sans font-medium mt-4"
              style={{ fontSize: '0.85rem', letterSpacing: '0.03em', color: 'var(--color-accent-2)' }}
            >
              No obligation. No pressure.
            </p>
          </div>

          {/* Hairline */}
          <div className="h-px w-10 bg-[var(--color-paper)]/15" />

          {/* Description */}
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: 'var(--color-paper)', opacity: 0.55 }}
          >
            We visit your home or business, assess every entry point, and hand you a transparent written quote — usually within the hour. No upselling, no pressure to commit.
          </p>

          {/* Reassurance chips */}
          <div className="flex flex-wrap gap-2">
            {REASSURANCES.map((r) => (
              <span
                key={r}
                className="font-sans"
                style={{
                  fontSize: '0.68rem',
                  letterSpacing: '0.04em',
                  padding: '0.35rem 0.75rem',
                  border: '1px solid color-mix(in oklch, var(--color-paper) 18%, transparent)',
                  color: 'color-mix(in oklch, var(--color-paper) 60%, transparent)',
                }}
              >
                {r}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2.5 font-sans uppercase bg-[var(--color-accent)] text-[var(--color-paper)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)] transition-colors"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
                whiteSpace: 'nowrap',
              }}
            >
              <Phone size={12} />
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans uppercase border border-[var(--color-paper)]/20 text-[var(--color-paper)]/60 hover:border-[var(--color-whatsapp)] hover:text-[var(--color-whatsapp)] transition-colors"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                padding: '1rem 1.5rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
                whiteSpace: 'nowrap',
              }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          {/* Credential */}
          <p
            className="font-sans"
            style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-paper)', opacity: 0.28 }}
          >
            Est. 2025 · 20+ installations · Guwahati, Assam
          </p>
        </div>

        {/* RIGHT — FAQ accordion */}
        <div>
          <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[var(--color-paper)]/10">
            <span
              className="font-sans"
              style={{ fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--color-paper)', opacity: 0.38 }}
            >
              Common questions
            </span>
            <span
              className="font-sans tabular-nums"
              style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--color-paper)', opacity: 0.22 }}
            >
              {FAQS.length} questions
            </span>
          </div>

          <div className="divide-y divide-[var(--color-paper)]/10">
            {FAQS.map(({ q, a }, i) => {
              const isOpen = open === i
              const qNum = `Q.${String(i + 1).padStart(2, '0')}`
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start gap-5 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-sans shrink-0 tabular-nums"
                      style={{
                        fontSize: '0.55rem',
                        letterSpacing: '0.2em',
                        color: 'var(--color-accent)',
                        marginTop: '0.25rem',
                        opacity: isOpen ? 1 : 0.6,
                        transition: `opacity var(--dur-short) var(--ease-out)`,
                      }}
                    >
                      {qNum}
                    </span>
                    <span
                      className="flex-1 font-sans text-sm leading-snug"
                      style={{
                        color: 'var(--color-paper)',
                        opacity: isOpen ? 1 : 0.7,
                        fontWeight: isOpen ? 500 : 400,
                        transition: `opacity var(--dur-short) var(--ease-out), font-weight var(--dur-short)`,
                      }}
                    >
                      {q}
                    </span>
                    <span
                      className="font-sans shrink-0 leading-none select-none"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 300,
                        color: isOpen ? 'var(--color-accent)' : 'var(--color-paper)',
                        opacity: isOpen ? 1 : 0.3,
                        marginTop: '0.1rem',
                        transition: `color var(--dur-short) var(--ease-out), opacity var(--dur-short) var(--ease-out)`,
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <div className="pl-10 pb-7">
                          <div
                            className="h-px w-8 mb-5"
                            style={{ background: 'var(--color-accent)', opacity: 0.4 }}
                          />
                          <p
                            className="font-sans text-sm leading-relaxed"
                            style={{ color: 'var(--color-paper)', opacity: 0.6 }}
                          >
                            {a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA nudge */}
          <div className="mt-10 pt-8 border-t border-[var(--color-paper)]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p
              className="font-sans text-sm"
              style={{ color: 'var(--color-paper)', opacity: 0.45 }}
            >
              Still not sure? Send us your question directly.
            </p>
            <a
              href="#contact"
              className="font-sans uppercase text-[var(--color-paper)]/50 hover:text-[var(--color-accent)] transition-colors self-start sm:self-auto inline-flex items-center gap-2"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                transitionDuration: 'var(--dur-short)',
                whiteSpace: 'nowrap',
              }}
            >
              Ask us directly
              <span className="inline-block">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
