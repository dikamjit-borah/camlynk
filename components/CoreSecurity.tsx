'use client'

import { Camera, BellRing, Video, ScanLine, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <section id="core-security" className="bg-white border-t-2 border-navy">
      <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">

        {/* Left — sticky heading */}
        <div
          className="px-6 md:px-12 lg:px-14 py-14 border-b md:border-b-0 md:border-r border-navy/10"
          style={{ overflowX: 'clip' }}
        >
          <div className="md:sticky md:top-24">
            <p className="font-sans italic text-orange text-xs tracking-[3px] mb-4">
              Core Security
            </p>
            <h2
              className="font-serif text-navy leading-[0.88]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
            >
              SECURE<br />EVERY<br />CORNER.
            </h2>
            <div className="h-[2px] bg-orange w-8 mt-8 mb-6" />
            <p className="font-sans text-navy/50 text-sm leading-relaxed mb-10 max-w-xs">
              From high-definition cameras to smart alarm systems — we cover every entry point of your home or business with professional-grade equipment and expert installation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3.5 font-sans text-[10px] tracking-[3px] hover:bg-orange transition-colors duration-200"
            >
              GET A FREE QUOTE
            </a>
          </div>
        </div>

        {/* Right — feature list */}
        <div className="divide-y divide-navy/10 overflow-hidden min-w-0">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              className="relative flex items-start gap-5 px-8 md:px-12 xl:px-20 py-8 group hover:bg-navy/[0.025] transition-colors overflow-hidden"
            >
              {/* Left accent bar — appears on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="w-9 h-9 border border-navy/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-orange group-hover:bg-orange transition-all duration-200">
                <Icon size={16} className="text-navy/50 group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-navy text-sm tracking-[1px] mb-2">{title}</h3>
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
