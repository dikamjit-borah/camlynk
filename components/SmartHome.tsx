'use client'

import { Zap, Lightbulb, MonitorSmartphone, Wifi } from 'lucide-react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    Icon: Zap,
    title: 'Home Automation',
    detail: 'Set schedules, create scenes and control your devices with your voice or a single app. Automate your lights, locks and appliances so your home works around your routine, not the other way around.',
  },
  {
    Icon: Lightbulb,
    title: 'Smart Lighting',
    detail: 'Intelligent lighting that dims for movie night, brightens for work, and switches off automatically when you leave. Motion-triggered options save energy while making every room feel effortlessly responsive.',
  },
  {
    Icon: MonitorSmartphone,
    title: 'Remote Monitoring',
    detail: 'Live camera feeds and instant alerts keep you informed of what is happening at home — from anywhere in the world. Check in on your family, property or deliveries directly from your phone.',
  },
  {
    Icon: Wifi,
    title: 'Structured Networking',
    detail: 'A fast, reliable network is the backbone of every smart home. We install mesh Wi-Fi, structured cabling and enterprise-grade routers to ensure seamless connectivity throughout your property.',
  },
]

export default function SmartHome() {
  return (
    <section id="smart-home" className="bg-navy border-t-2 border-navy">

      {/* Top orange blade */}
      <div className="h-[3px] bg-orange" />

      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-24">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 md:mb-20"
        >
          <p className="font-sans italic text-orange text-xs tracking-[3px] mb-5">
            Beyond Security
          </p>
          <h2
            className="font-serif text-white leading-[0.88]"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
          >
            YOUR HOME,<br />
            <span className="text-orange">CONNECTED</span><br />
            &amp; CONTROLLED.
          </h2>
          <p className="font-sans text-white/45 text-sm mt-6 max-w-sm leading-relaxed">
            Control, automate and monitor everything — from your phone, from anywhere in the world. We design and install smart home systems that are actually simple to use.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 border border-orange text-orange px-6 py-3.5 font-sans text-[10px] tracking-[3px] hover:bg-orange hover:text-white transition-colors duration-200 group"
          >
            GET A FREE QUOTE
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {FEATURES.map(({ Icon, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              className="flex items-start gap-5 py-8 pr-8 pl-0 bg-navy group hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-9 h-9 border border-white/15 flex items-center justify-center shrink-0 group-hover:border-orange group-hover:bg-orange transition-all duration-200">
                <Icon size={15} className="text-orange group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-white text-xs tracking-[2px] mb-2">{title}</h3>
                <p className="font-sans text-white/45 text-sm leading-relaxed">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
