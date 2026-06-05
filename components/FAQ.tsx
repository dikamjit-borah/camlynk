'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Do you install CCTV for small shops and offices in Guwahati?',
    a: 'Yes — commercial installations of all sizes are a core part of what we do. Whether you have a single-room shop or a multi-floor office, we design a camera system around your specific layout and budget. We cover the entire Guwahati area including Paltan Bazaar, Fancy Bazaar, Zoo Road, Dispur and surrounding localities.',
  },
  {
    q: 'How long does a typical CCTV or security installation take?',
    a: 'Most residential installations — including 4 to 8 cameras with a full alarm setup — are completed in a single day. Commercial jobs depend on the size of the premises but we aim to minimise disruption and complete work as quickly as possible. We will give you a clear time estimate during your free site survey.',
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
    a: 'All equipment we supply and install carries a 5-year warranty with no asterisks or hidden conditions. If any component fails within this period due to a manufacturing or installation fault, we replace it at no charge. This covers cameras, recorders, alarm panels, sensors and intercom units.',
  },
  {
    q: 'What is a biometric attendance system and does my business need one?',
    a: 'A biometric attendance system records staff check-in and check-out times using fingerprint or facial recognition — eliminating proxy attendance and buddy-punching entirely. If you manage a team of 5 or more staff and currently rely on manual registers or swipe cards, a biometric system will save you time, reduce payroll errors and give you accurate records from day one.',
  },
  {
    q: 'Do you cover areas outside Guwahati city?',
    a: 'Our primary service area is Guwahati and nearby localities. For locations slightly outside the city, installation may be possible subject to a small travel fee — contact us to confirm coverage for your specific address.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-cream border-t-2 border-navy">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-8 flex items-end justify-between gap-4 border-b border-navy/10">
        <h2
          className="font-serif text-navy"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
        >
          COMMON QUESTIONS
        </h2>
        <span className="font-sans italic text-navy/35 text-sm shrink-0">{FAQS.length} questions</span>
      </div>

      {/* Accordion */}
      <div className="divide-y divide-navy/10">
        {FAQS.map(({ q, a }, i) => {
          const isOpen = open === i
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-6 px-6 md:px-12 lg:px-16 xl:px-24 py-7 text-left group hover:bg-white/60 transition-colors duration-150"
                aria-expanded={isOpen}
              >
                <span
                  className="font-serif text-navy leading-snug"
                  style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
                >
                  {q}
                </span>
                <span className="shrink-0 mt-0.5 text-navy/40 group-hover:text-orange transition-colors duration-150">
                  {isOpen
                    ? <Minus size={16} strokeWidth={1.5} />
                    : <Plus size={16} strokeWidth={1.5} />
                  }
                </span>
              </button>

              {isOpen && (
                <div className="px-6 md:px-12 lg:px-16 xl:px-24 pb-8">
                  <p className="font-sans text-navy/55 text-sm leading-relaxed max-w-2xl">
                    {a}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-10 border-t border-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-navy/50 text-sm">
          Still have a question? We are happy to help.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3.5 font-sans text-[10px] tracking-[3px] hover:bg-orange transition-colors duration-200"
        >
          CONTACT US
        </a>
      </div>
    </section>
  )
}
