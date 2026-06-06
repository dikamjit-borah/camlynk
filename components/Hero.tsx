'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const CYCLING_WORDS = ['Secured.', 'Automated.', 'Connected.']

const SERVICES = [
  'CCTV Installation',
  'Burglar Alarms',
  'Video Doorbell',
  'Smart Home',
  'Biometric Attendance',
  'Access Control',
  'Motion Sensors',
  'Intercom Systems',
]

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const hasCycled = useRef(false)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>
    const timeoutId = setTimeout(() => {
      hasCycled.current = true
      intervalId = setInterval(() => setWordIdx(i => (i + 1) % CYCLING_WORDS.length), 3500)
    }, 2400)
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <section
      className="relative bg-navy flex flex-col overflow-hidden"
      style={{ height: 'calc(100dvh - 5.25rem)' }}
    >
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-rule) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          opacity: 0.5,
        }}
      />

      {/* Vignette — centred focal point */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 48%, transparent 22%, var(--color-paper) 86%)',
          opacity: 0.75,
        }}
      />

      {/* estd 2025 — vertically centered on right */}
      {/* <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
        className="font-sans text-[var(--color-ink-3)] text-[10px] uppercase absolute right-6 md:right-12 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2"
        style={{
          writingMode: 'vertical-rl',
          letterSpacing: '0.2em',
          lineHeight: 1,
        }}
      >
        estd 2025
      </motion.span> */}

      {/* Main content */}
      <div className="relative flex-1 min-h-0 flex flex-col px-6 md:px-12 lg:px-16 xl:px-24 pt-10 md:pt-12 pb-0">

        {/* Top meta — centred */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          className="flex items-center justify-between"
        >
          {/* Left — location */}
          <div className="flex items-center gap-3">
            <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-[var(--color-accent)]"
                style={{ clipPath: 'circle(50%)' }}
                animate={{ scale: [1, 2.8, 1], opacity: [0.65, 0, 0.65] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: 2 }}
              />
              <span className="relative w-2 h-2 bg-[var(--color-accent)]" style={{ clipPath: 'circle(50%)' }} />
            </span>
            <span className="font-sans text-[var(--color-ink-3)] text-[10px] tracking-[0.2em] uppercase">
              Guwahati, Assam — India
            </span>
          </div>

          {/* Right — tagline */}
          <div className="flex items-center gap-5">
            <span className="font-sans text-[var(--color-ink-3)] text-[10px] tracking-[0.2em] uppercase hidden md:block">
              Security · Smart Home · Automation
            </span>
          </div>
        </motion.div>

        {/* Headline + body — centred */}
        <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center py-8">

          <h1 style={{ letterSpacing: '-0.02em' }}>
            <motion.span
              className="block font-semibold text-ink"
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(4rem, 8vw, 8rem)',
                lineHeight: '1.05',
                fontStyle: 'normal',
                fontWeight: 700,
              }}
              initial={{ clipPath: 'inset(0% -5% 110% -5%)' }}
              animate={{ clipPath: 'inset(0% -5% -30% -5%)' }}
              transition={{ duration: 0.9, delay: 0.34, ease: EASE_OUT }}
            >
              Every home,
            </motion.span>

            <div style={{ marginTop: '-0.1em' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLING_WORDS[wordIdx]}
                  className="block font-semibold"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontSize: 'clamp(4rem, 8vw, 8rem)',
                    lineHeight: '1.05',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                  }}
                  initial={{ clipPath: 'inset(0% -5% 110% -5%)' }}
                  animate={{ clipPath: 'inset(0% -5% -30% -5%)' }}
                  exit={{ clipPath: 'inset(110% -5% 0% -5%)' }}
                  transition={{
                    duration: hasCycled.current ? 0.65 : 0.9,
                    delay: hasCycled.current ? 0 : 0.52,
                    ease: EASE_OUT,
                  }}
                >
                  {CYCLING_WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          {/* Hairline rule — centred */}
          <motion.div
            className="h-px bg-[var(--color-rule)] mt-10 mb-8 w-16"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.05, ease: EASE_OUT }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Lede */}
          <motion.p
            className="font-sans text-[var(--color-ink-3)] text-sm leading-relaxed mb-10 max-w-sm text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.14, ease: EASE_OUT }}
          >
            From CCTV and burglar alarms to smart home automation — professional installation, 24/7 support, and a 5-year warranty in Guwahati.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.28, ease: EASE_OUT }}
          >
            <a
              href="#contact"
              className="font-sans font-medium uppercase text-[var(--color-paper)] bg-[var(--color-accent)] hover:bg-ink hover:text-[var(--color-paper)] transition-colors"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.25em',
                padding: '1rem 2rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
                whiteSpace: 'nowrap',
              }}
            >
              Book Survey
            </a>
            <a
              href="#services"
              className="font-sans font-medium uppercase text-[var(--color-ink-2)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              style={{
                fontSize: '0.625rem',
                letterSpacing: '0.25em',
                padding: '1rem 2rem',
                transitionDuration: 'var(--dur-short)',
                transitionTimingFunction: 'var(--ease-out)',
                whiteSpace: 'nowrap',
              }}
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Service ticker */}
      <div className="border-t border-[var(--color-rule)] shrink-0">
        <div className="overflow-hidden py-4">
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes scrollMarquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .ticker-scroll {
                animation: scrollMarquee 25s linear infinite !important;
                animation-iteration-count: infinite !important;
              }
            `
          }} />
          <div className="flex ticker-scroll">
            <div className="flex shrink-0">
              {SERVICES.map((s, j) => (
                <span key={`a-${j}`} className="flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink-2)] whitespace-nowrap">
                  <span className="text-[var(--color-accent)] px-6" aria-hidden="true">·</span>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex shrink-0" aria-hidden="true">
              {SERVICES.map((s, j) => (
                <span key={`b-${j}`} className="flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink-2)] whitespace-nowrap">
                  <span className="text-[var(--color-accent)] px-6" aria-hidden="true">·</span>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex shrink-0" aria-hidden="true">
              {SERVICES.map((s, j) => (
                <span key={`c-${j}`} className="flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink-2)] whitespace-nowrap">
                  <span className="text-[var(--color-accent)] px-6" aria-hidden="true">·</span>
                  {s}
                </span>
              ))}
            </div>
            <div className="flex shrink-0" aria-hidden="true">
              {SERVICES.map((s, j) => (
                <span key={`d-${j}`} className="flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink-2)] whitespace-nowrap">
                  <span className="text-[var(--color-accent)] px-6" aria-hidden="true">·</span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
