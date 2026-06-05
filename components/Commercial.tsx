'use client'

import { Building2, Fingerprint, KeyRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/constants'

const FEATURES = [
  {
    Icon: Building2,
    title: 'OFFICE & SHOP CCTV',
    detail: 'High-definition camera systems engineered for commercial premises — wide-angle coverage, low-light performance and remote access built for busy business owners. Protect your stock, staff and customers around the clock.',
  },
  {
    Icon: Fingerprint,
    title: 'BIOMETRIC ATTENDANCE',
    detail: 'Replace paper registers with accurate fingerprint and face-recognition attendance systems. Eliminate time theft, generate automated reports and integrate directly with your payroll process.',
  },
  {
    Icon: KeyRound,
    title: 'ACCESS CONTROL',
    detail: 'Restrict sensitive areas using card, PIN or biometric entry — no more lost keys or unauthorised access. Full audit logs show exactly who entered where and when, giving you complete visibility over your premises.',
  },
]

export default function Commercial() {
  return (
    <section id="commercial" className="bg-white border-t-2 border-navy">
      <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">

        {/* Left */}
        <div
          className="px-6 md:px-12 lg:px-14 py-14 border-b md:border-b-0 md:border-r border-navy/10"
          style={{ overflowX: 'clip' }}
        >
          <div className="md:sticky md:top-24">
            <p className="font-sans italic text-orange text-xs tracking-[3px] mb-4">
              For Businesses
            </p>
            <h2
              className="font-serif text-navy leading-[0.88]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              COMMERCIAL<br />SECURITY.
            </h2>
            <div className="h-[2px] bg-orange w-8 mt-8 mb-6" />
            <p className="font-sans text-navy/50 text-sm leading-relaxed mb-8 max-w-xs">
              Offices, shops, warehouses, restaurants — we secure commercial spaces of every size across Guwahati with systems built to protect your business, not just your premises.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3.5 font-sans text-[10px] tracking-[3px] hover:bg-orange transition-colors duration-200 group"
            >
              GET A QUOTE
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="divide-y divide-navy/10 overflow-hidden min-w-0">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.09, ease: 'easeOut' }}
              className="relative flex items-start gap-5 px-8 md:px-12 xl:px-20 py-10 group hover:bg-navy/[0.02] transition-colors overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="w-9 h-9 border border-navy/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-orange group-hover:bg-orange transition-all duration-200">
                <Icon size={15} className="text-navy/40 group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-navy text-xs tracking-[2px] mb-2">{title}</h3>
                <p className="font-sans text-navy/50 text-sm leading-relaxed">{detail}</p>
              </div>
              <span className="font-serif text-navy/10 text-xs self-start mt-1 shrink-0">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
