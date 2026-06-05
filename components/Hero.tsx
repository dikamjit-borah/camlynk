'use client'

import { STATS } from '@/lib/constants'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex-1 px-6 md:px-8 py-5 border-r border-navy/20 last:border-r-0 min-w-0"
    >
      <div
        className="font-display text-navy leading-none"
        style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)' }}
      >
        {count}{suffix}
      </div>
      <div className="font-complement italic text-navy/40 text-[11px] mt-1.5 tracking-wide">
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex flex-col border-b-2 border-navy">

      {/* Orange blade — top accent */}
      <div className="h-[3px] bg-orange w-full shrink-0" />

      {/* Main body */}
      <div className="flex-1 flex flex-col px-6 md:px-12 lg:px-16 pt-10 md:pt-14 relative overflow-hidden">

        {/* Meta row */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <span className="font-complement italic text-navy/35 text-sm">
            Guwahati, Assam — India
          </span>
          <span className="font-complement italic text-navy/35 text-sm hidden md:block">
            CCTV · Smart Home · Security
          </span>
        </div>

        {/* The headline */}
        <div className="flex-1 flex flex-col justify-center pb-10">
          <h1
            className="leading-none select-none"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span
              className="block font-display text-navy"
              style={{ fontSize: 'clamp(4rem, 12.5vw, 11rem)', lineHeight: '0.88' }}
            >
              PROTECT
            </span>
            <span
              className="block font-display text-orange"
              style={{
                fontSize: 'clamp(4rem, 12.5vw, 11rem)',
                lineHeight: '0.88',
                paddingLeft: 'clamp(1.5rem, 5vw, 6rem)',
              }}
            >
              EVERYTHING.
            </span>
          </h1>

          {/* Pull quote — desktop only, anchored right */}
          <div
            className="hidden xl:block absolute right-16 border-l border-navy/15 pl-5"
            style={{ top: '50%', transform: 'translateY(-50%)', maxWidth: '190px' }}
          >
            <p className="font-complement italic text-navy/45 text-xs leading-relaxed">
              Professional installation, 24/7 support, and 5-year warranty — backed by local expertise in Guwahati.
            </p>
          </div>

          {/* Orange rule */}
          <div className="h-[2px] bg-orange mt-10 md:mt-12 mb-8 md:mb-10 w-14" />

          {/* CTAs */}
          <div className="flex items-center gap-8 flex-wrap pb-6">
            <a
              href="#contact"
              className="bg-navy text-white px-8 py-4 font-display text-xs tracking-[4px] hover:bg-orange transition-colors duration-200"
            >
              BOOK SURVEY
            </a>
            <a
              href="#services"
              className="font-complement italic text-navy/50 text-sm hover:text-orange transition-colors"
            >
              explore services ↓
            </a>
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
