'use client'

import { ShieldCheck } from 'lucide-react'
import { STATS } from '@/lib/constants'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex-1 px-6 py-5 border-r border-navy/20 last:border-r-0 min-w-0"
    >
      <div
        className="font-display font-extrabold text-navy leading-none"
        style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
      >
        {count}{suffix}
      </div>
      <div className="text-[10px] text-navy/40 mt-1.5 font-medium uppercase tracking-widest">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-white min-h-[92vh] flex flex-col relative overflow-hidden border-b border-navy/10">

      {/* Camera lens — purely decorative, desktop only */}
      <div
        className="hidden md:block absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Outermost ghost ring */}
        <div className="absolute w-[640px] h-[640px] rounded-full border border-navy/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[520px] h-[520px] rounded-full border border-gold/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Main lens body */}
        <div
          className="w-[400px] h-[400px] rounded-full bg-navy relative flex items-center justify-center"
          style={{ boxShadow: '0 32px 80px rgba(27,58,92,0.35)' }}
        >
          {/* Inner rings */}
          <div className="absolute w-[300px] h-[300px] rounded-full border border-white/8" />
          <div className="absolute w-[190px] h-[190px] rounded-full border border-white/8" />
          {/* Crosshair */}
          <div className="absolute w-[90%] h-px bg-white/6" />
          <div className="absolute h-[90%] w-px bg-white/6" />
          {/* Center icon */}
          <ShieldCheck size={72} className="text-orange" strokeWidth={1.2} />
        </div>
        {/* Gold arc accent */}
        <div
          className="absolute w-[460px] h-[460px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #FFC81E 0%, transparent 50%) border-box',
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
          <div className="md:max-w-[54%]">
            <p className="text-[9px] font-extrabold tracking-[5px] uppercase text-orange mb-8">
              Guwahati&apos;s Trusted Security Partner
            </p>
            <h1
              className="font-display font-extrabold text-navy leading-[0.88] mb-8"
              style={{ fontSize: 'clamp(3.8rem, 8.5vw, 7.5rem)' }}
            >
              Protect<br />
              <span className="text-orange italic">Everything.</span>
            </h1>
            <p className="text-navy/55 text-lg leading-relaxed mb-10 max-w-sm">
              CCTV, smart home automation and alarm systems for homes and businesses across Guwahati, Assam.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <a
                href="#contact"
                className="bg-navy text-cream px-8 py-4 text-sm font-bold tracking-wide hover:bg-orange transition-colors duration-300"
              >
                Book Free Survey
              </a>
              <a
                href="#services"
                className="text-navy text-sm font-semibold border-b-2 border-orange pb-0.5 hover:text-orange transition-colors"
              >
                Explore Services ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip — integrated into hero */}
      <div className="border-t-2 border-navy flex overflow-x-auto">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
