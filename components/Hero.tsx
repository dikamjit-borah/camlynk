'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex-1 px-6 md:px-8 py-5 border-r border-navy/15 last:border-r-0 min-w-0"
    >
      <div className="font-serif font-semibold text-navy leading-none" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)' }}>
        {count}{suffix}
      </div>
      <div className="font-sans text-navy/40 text-[11px] mt-1.5 tracking-widest uppercase">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex flex-col border-b-2 border-navy">

      {/* Orange blade */}
      <div className="h-[3px] bg-orange w-full shrink-0" />

      {/* Split: left content + right geometric surveillance panel */}
      <div className="flex-1 grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_460px] overflow-hidden">

        {/* Left — content */}
        <div className="flex flex-col px-6 md:px-12 lg:px-16 xl:px-24 pt-10 md:pt-14 pb-6">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-between mb-8 md:mb-12"
          >
            <span className="font-sans text-navy/35 text-xs tracking-widest uppercase">
              Guwahati, Assam — India
            </span>
            <span className="font-sans text-navy/35 text-xs tracking-widest uppercase hidden md:block">
              CCTV · Smart Home · Security
            </span>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center pb-10">
            <h1 className="leading-none" style={{ letterSpacing: '-0.02em' }}>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="block font-serif font-semibold text-navy"
                style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)', lineHeight: '0.88' }}
              >
                Protect
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="block font-serif font-semibold italic text-orange"
                style={{
                  fontSize: 'clamp(4.5rem, 11vw, 10rem)',
                  lineHeight: '0.88',
                  paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
                }}
              >
                Everything.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
              className="h-px bg-orange mt-10 md:mt-12 mb-6 w-16"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4, ease: 'easeOut' }}
              className="font-sans text-navy/45 text-sm leading-relaxed mb-8 max-w-[280px]"
            >
              Professional installation, 24/7 support, and 5-year warranty — backed by local expertise in Guwahati.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href="#contact"
                className="bg-navy text-white px-8 py-4 font-sans font-medium text-xs tracking-[4px] uppercase hover:bg-orange transition-colors duration-300"
              >
                Book Survey
              </a>
              <a
                href="#services"
                className="border border-navy/20 text-navy/55 px-8 py-4 font-sans font-medium text-xs tracking-[4px] uppercase hover:border-orange hover:text-orange transition-colors duration-300"
              >
                Our Services
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right — dark surveillance visual */}
        <div className="hidden md:block bg-navy relative overflow-hidden">

          {/* Dot grid texture */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
            }}
          />

          {/* Concentric viewfinder squares */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '3rem' }}>
            {[280, 215, 155, 100, 60].map((size, i) => (
              <motion.div
                key={size}
                className="absolute border"
                style={{
                  width: size,
                  height: size,
                  borderColor:
                    i === 0
                      ? 'rgba(232,127,36,0.35)'
                      : `rgba(255,255,255,${0.04 + i * 0.018})`,
                }}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              />
            ))}

            {/* Center focal point */}
            <motion.div
              className="relative w-10 h-10 border-2 border-orange flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.95 }}
            >
              <div className="w-3 h-3 bg-orange" />
            </motion.div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-orange/40" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-orange/40" />
          <div className="absolute bottom-[6.5rem] left-6 w-6 h-6 border-b-2 border-l-2 border-orange/40" />
          <div className="absolute bottom-[6.5rem] right-6 w-6 h-6 border-b-2 border-r-2 border-orange/40" />

          {/* Bottom-right diagonal accent */}
          <div
            className="absolute bottom-0 right-0 bg-orange/15"
            style={{ width: 110, height: 110, clipPath: 'polygon(100% 0, 100% 100%, 0% 100%)' }}
          />

          {/* Caption */}
          <div className="absolute bottom-7 left-8 right-8">
            <div className="h-px bg-white/10 mb-4" />
            <p className="font-sans text-white/20 text-[9px] tracking-[4px] uppercase">
              Securing Guwahati — Est. 2017
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t-2 border-navy flex overflow-x-auto shrink-0">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
