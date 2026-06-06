'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const FAQS = [
  {
    q: 'Do you install CCTV for small shops and offices in Guwahati?',
    a: 'Yes — commercial installations of all sizes are a core part of what we do. Whether you have a single-room shop or a multi-floor office, we design a camera system around your specific layout and budget. We cover the entire Guwahati area including Paltan Bazaar, Fancy Bazaar, Zoo Road, Dispur and surrounding localities.',
  },
  {
    q: 'How long does a typical CCTV or security installation take?',
    a: 'Most residential installations — including 4 to 8 cameras with a full alarm setup — are completed in a single day. Commercial jobs depend on the size of the premises but we aim to minimise disruption. We will give you a clear time estimate during your free site survey.',
  },
  {
    q: 'Can I view my CCTV cameras remotely from my phone?',
    a: 'Yes. Every system we install comes with remote viewing capability through a smartphone app. You can access live feeds, review recorded footage and receive motion alert notifications from anywhere in the world — as long as you have an internet connection.',
  },
  {
    q: 'Do you offer maintenance contracts after installation?',
    a: 'Yes — we offer Annual Maintenance Contracts (AMC) that cover regular check-ups, software updates, fault diagnosis and priority support. AMC customers receive first-call response and discounted repair costs. Ask about AMC pricing during your site survey.',
  },
  {
    q: 'What warranty do you provide on installed equipment?',
    a: 'All equipment we supply and install carries a 5-year warranty with no asterisks or hidden conditions. If any component fails within this period due to a manufacturing or installation fault, we replace it at no charge.',
  },
  {
    q: 'What is a biometric attendance system and does my business need one?',
    a: 'A biometric attendance system records staff check-in and check-out times using fingerprint or facial recognition — eliminating proxy attendance entirely. If you manage a team of 5 or more staff and currently rely on manual registers or swipe cards, a biometric system will save time and reduce payroll errors from day one.',
  },
  {
    q: 'Do you cover areas outside Guwahati city?',
    a: 'Our primary service area is Guwahati and nearby localities. For locations slightly outside the city, installation may be possible subject to a small travel fee — contact us to confirm coverage for your specific address.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-navy">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-20 md:pt-24 pb-10 border-b border-[var(--color-rule)]">
        <h2
          className="font-serif text-ink"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', lineHeight: '0.9', fontStyle: 'normal' }}
        >
          Questions
        </h2>
      </div>

      {/* Accordion */}
      <div className="divide-y divide-[var(--color-rule)]">
        {FAQS.map(({ q, a }, i) => {
          const isOpen = open === i
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-8 px-6 md:px-12 lg:px-16 xl:px-24 py-8 text-left group hover:bg-[var(--color-paper-2)] transition-colors"
                style={{ transitionDuration: 'var(--dur-short)', transitionTimingFunction: 'var(--ease-out)' }}
                aria-expanded={isOpen}
              >
                <span
                  className="font-serif text-ink leading-snug"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontStyle: 'normal' }}
                >
                  {q}
                </span>
                <span className="shrink-0 mt-0.5 text-[var(--color-ink-3)] group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ transitionDuration: 'var(--dur-short)' }}
                >
                  {isOpen
                    ? <Minus size={18} strokeWidth={1.5} />
                    : <Plus size={18} strokeWidth={1.5} />
                  }
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
                    <div className="px-6 md:px-12 lg:px-16 xl:px-24 pb-10">
                      <div className="h-px bg-[var(--color-accent)]/30 mb-6 w-12" />
                      <p className="font-sans text-[var(--color-ink-3)] text-sm leading-relaxed max-w-2xl">{a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-10 border-t border-[var(--color-rule)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-[var(--color-ink-3)] text-sm">Still have a question? We are happy to help.</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-sans uppercase bg-[var(--color-accent)] text-[var(--color-paper)] hover:bg-ink hover:text-[var(--color-paper)] transition-colors"
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.2em',
            padding: '1rem 1.5rem',
            transitionDuration: 'var(--dur-short)',
            transitionTimingFunction: 'var(--ease-out)',
            whiteSpace: 'nowrap',
          }}
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
