# Camlynk Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page marketing landing page for Camlynk (CCTV & security company, Guwahati) using Next.js 14 + Tailwind CSS, converting visitors into leads via WhatsApp, phone calls, and a contact form.

**Architecture:** One Next.js App Router page (`app/page.tsx`) assembles 13 section components. All sections are client components where needed for animation/interaction. Shared design tokens live in `tailwind.config.ts`. Scroll animations use Framer Motion `whileInView`. The contact form posts to a Next.js API route.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, Jest + React Testing Library

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout, font import, metadata |
| `app/page.tsx` | Assembles all section components |
| `app/globals.css` | Tailwind directives, base resets |
| `app/api/contact/route.ts` | Contact form POST handler |
| `tailwind.config.ts` | Custom colors, font family |
| `components/Navbar.tsx` | Sticky nav with scroll shadow |
| `components/Hero.tsx` | Diagonal split hero section |
| `components/TrustBar.tsx` | Navy stats strip with animated counters |
| `components/ServicesOverview.tsx` | 3 category cards |
| `components/CoreSecurity.tsx` | 5 detailed security feature cards |
| `components/SmartHome.tsx` | Navy showcase section, 4 smart home tiles |
| `components/WhyUs.tsx` | 4 trust cards |
| `components/HowItWorks.tsx` | 3-step process with dashed connector |
| `components/Commercial.tsx` | Commercial security, 3 cards + CTA |
| `components/Testimonials.tsx` | 3 customer review cards |
| `components/CTABanner.tsx` | Orange-gold gradient CTA strip |
| `components/ContactSection.tsx` | Form + contact details, 2-column |
| `components/Footer.tsx` | Navy footer, 3-column layout |
| `components/FloatingWhatsApp.tsx` | Fixed bottom-right WhatsApp button |
| `components/SectionWrapper.tsx` | Reusable Framer Motion fade-in wrapper |
| `components/Eyebrow.tsx` | Reusable eyebrow label component |
| `components/DynamicIcon.tsx` | Renders any Lucide icon by string name |
| `hooks/useCountUp.ts` | Intersection Observer count-up animation |
| `lib/constants.ts` | All page copy: stats, services, testimonials |
| `__tests__/hooks/useCountUp.test.ts` | Unit tests for useCountUp |
| `__tests__/api/contact.test.ts` | Unit tests for contact API route |
| `jest.config.ts` | Jest config for Next.js |
| `jest.setup.ts` | jest-dom matchers setup |

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `next.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx` (all via CLI)

- [ ] **Step 1: Initialise project**

Run in `f:/Projects/Fullstack/camlynk`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --no-git
```
When prompted accept all defaults.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion lucide-react
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @types/jest ts-jest
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```
Expected: server running at `http://localhost:3000` with default Next.js page.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 14 project with Tailwind and deps"
```

---

## Task 2: Design Tokens — Tailwind Config + Globals

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Replace `tailwind.config.ts` with custom tokens**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#E87F24',
        gold:   '#FFC81E',
        cream:  '#FEFDDF',
        'steel-blue': '#73A5CA',
        navy:   '#1B3A5C',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-cream text-navy font-sans;
  }
}
```

- [ ] **Step 3: Verify build compiles**

```bash
npm run build
```
Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "chore: add design tokens and font"
```

---

## Task 3: Jest Setup

**Files:**
- Create: `jest.config.ts`
- Create: `jest.setup.ts`

- [ ] **Step 1: Create `jest.config.ts`**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 2: Create `jest.setup.ts`**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 3: Add test script to `package.json`**

In the `"scripts"` block, add:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 4: Run jest to confirm setup**

```bash
npm test -- --passWithNoTests
```
Expected: `No tests found, exiting with code 0`

- [ ] **Step 5: Commit**

```bash
git add jest.config.ts jest.setup.ts package.json
git commit -m "chore: add Jest and React Testing Library"
```

---

## Task 4: Shared Constants

**Files:**
- Create: `lib/constants.ts`

- [ ] **Step 1: Create `lib/constants.ts`**

```ts
export const PHONE = '+91 98765 43210'
export const WHATSAPP_NUMBER = '919876543210'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const STATS = [
  { value: 500, suffix: '+', label: 'Homes Secured' },
  { value: 5,   suffix: '★', label: 'Google Rating' },
  { value: 24,  suffix: '/7', label: 'Support' },
  { value: 5,   suffix: 'yr', label: 'Warranty' },
  { value: 8,   suffix: 'yr', label: 'Experience' },
]

export const CORE_SERVICES = [
  {
    icon: 'Camera',
    title: 'CCTV Installation',
    description: 'HD & 4K cameras with night vision, remote viewing and cloud backup.',
  },
  {
    icon: 'BellRing',
    title: 'Burglar Alarms',
    description: 'Motion-triggered alarms with instant mobile alerts.',
  },
  {
    icon: 'Video',
    title: 'Video Doorbell',
    description: 'See and speak to visitors remotely from your phone.',
  },
  {
    icon: 'ScanLine',
    title: 'Motion Sensors',
    description: 'Indoor and outdoor sensors, pet-immune options available.',
  },
  {
    icon: 'PhoneCall',
    title: 'Intercom Systems',
    description: 'Multi-unit and standalone audio/video intercom systems.',
  },
]

export const SMART_HOME_SERVICES = [
  {
    icon: 'Zap',
    title: 'Home Automation',
    description: 'Schedules, scenes and voice control for your whole home.',
  },
  {
    icon: 'Lightbulb',
    title: 'Smart Lighting',
    description: 'Mood lighting, motion-triggered, energy saving.',
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Remote Monitoring',
    description: 'Live camera feeds and alerts from anywhere in the world.',
  },
  {
    icon: 'Wifi',
    title: 'Networking',
    description: 'Mesh Wi-Fi, structured cabling and router setup.',
  },
]

export const COMMERCIAL_SERVICES = [
  {
    icon: 'Building2',
    title: 'Office & Shop CCTV',
    description: 'High-coverage camera systems for commercial premises.',
  },
  {
    icon: 'Fingerprint',
    title: 'Biometric Attendance',
    description: 'Fingerprint and face-recognition attendance systems.',
  },
  {
    icon: 'KeyRound',
    title: 'Access Control',
    description: 'Card, PIN and biometric door access for secure zones.',
  },
]

export const WHY_US = [
  { icon: 'Zap',         title: 'Same-Day Installation', description: 'Quick, clean installation — most jobs done in a day.' },
  { icon: 'Wrench',      title: 'AMC Plans',             description: 'Affordable annual maintenance and support contracts.' },
  { icon: 'MapPin',      title: 'Local Experts',         description: 'Based in Guwahati — we know the city and its needs.' },
  { icon: 'ShieldCheck', title: '5-Year Warranty',       description: 'Full warranty on all equipment we install.' },
]

export const HOW_IT_WORKS = [
  { step: '01', title: 'Free Site Survey',        description: 'We visit your home or office and assess your security needs at no charge.' },
  { step: '02', title: 'Professional Installation', description: 'Clean, fast installation by our certified technicians — same-day in most cases.' },
  { step: '03', title: 'You\'re Protected',        description: 'Live monitoring, remote app access and 24/7 support from day one.' },
]

export const TESTIMONIALS = [
  {
    quote: 'Excellent service — the team arrived on time, installed everything cleanly and walked us through the app. Highly recommend.',
    name: 'Reena Deka',
    location: 'Paltan Bazaar',
    rating: 5,
  },
  {
    quote: 'Had 6 cameras installed across my shop and office. The quality is great and remote viewing works perfectly.',
    name: 'Bhaskar Sharma',
    location: 'Fancy Bazaar',
    rating: 5,
  },
  {
    quote: 'Smart lighting and CCTV in one visit. The team was professional and the pricing was very fair.',
    name: 'Priya Gogoi',
    location: 'Zoo Road',
    rating: 5,
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add lib/constants.ts
git commit -m "feat: add shared page content constants"
```

---

## Task 5: useCountUp Hook (TDD)

**Files:**
- Create: `hooks/useCountUp.ts`
- Create: `__tests__/hooks/useCountUp.test.ts`

- [ ] **Step 1: Write failing test**

Create `__tests__/hooks/useCountUp.test.ts`:
```ts
import { renderHook, act } from '@testing-library/react'
import { useCountUp } from '@/hooks/useCountUp'

describe('useCountUp', () => {
  it('starts at 0', () => {
    const { result } = renderHook(() => useCountUp(100))
    expect(result.current.count).toBe(0)
  })

  it('exposes a ref to attach to a DOM element', () => {
    const { result } = renderHook(() => useCountUp(100))
    expect(result.current.ref).toBeDefined()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npm test -- __tests__/hooks/useCountUp.test.ts
```
Expected: FAIL — `Cannot find module '@/hooks/useCountUp'`

- [ ] **Step 3: Implement `hooks/useCountUp.ts`**

```ts
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.round(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref: elementRef }
}
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npm test -- __tests__/hooks/useCountUp.test.ts
```
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add hooks/useCountUp.ts __tests__/hooks/useCountUp.test.ts
git commit -m "feat: add useCountUp hook with intersection observer"
```

---

## Task 6: Shared UI Primitives

**Files:**
- Create: `components/SectionWrapper.tsx`
- Create: `components/Eyebrow.tsx`
- Create: `components/DynamicIcon.tsx`

- [ ] **Step 1: Create `components/SectionWrapper.tsx`**

```tsx
'use client'

import { motion } from 'framer-motion'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
  delay?: number
}

export default function SectionWrapper({ children, className = '', style, id, delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
```

- [ ] **Step 2: Create `components/Eyebrow.tsx`**

```tsx
interface EyebrowProps {
  children: React.ReactNode
  light?: boolean
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <p className={`text-[10px] font-extrabold tracking-[3px] uppercase mb-2 ${light ? 'text-gold' : 'text-orange'}`}>
      {children}
    </p>
  )
}
```

- [ ] **Step 3: Create `components/DynamicIcon.tsx`**

```tsx
import * as Icons from 'lucide-react'

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export default function DynamicIcon({ name, size = 24, className = '' }: DynamicIconProps) {
  const Icon = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name]
  if (!Icon) return null
  return <Icon size={size} className={className} />
}
```

- [ ] **Step 4: Commit**

```bash
git add components/SectionWrapper.tsx components/Eyebrow.tsx components/DynamicIcon.tsx
git commit -m "feat: add shared UI primitives (SectionWrapper, Eyebrow, DynamicIcon)"
```

---

## Task 7: Root Layout + Page Shell

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Camlynk — CCTV & Home Security Installation in Guwahati',
  description: 'Professional CCTV, smart home security and alarm system installation across Guwahati, Assam. Book a free site survey today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Replace `app/page.tsx` with a placeholder shell**

```tsx
export default function Home() {
  return (
    <main>
      <p className="p-8 text-navy font-bold text-2xl">Camlynk — building...</p>
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser at `http://localhost:3000`**

Expected: white page with "Camlynk — building..." in navy text, Plus Jakarta Sans font loaded.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "feat: root layout with metadata and page shell"
```

---

## Task 8: Navbar

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create `components/Navbar.tsx`**

```tsx
'use client'

import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Services',  href: '#services' },
  { label: 'Why Us',    href: '#why-us' },
  { label: 'Contact',   href: '#contact' },
]

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-cream border-b-2 border-gold transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-black tracking-tight">
          <span className="text-orange">Cam</span>
          <span className="text-steel-blue">lynk</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-navy font-medium hover:text-orange transition-colors text-sm">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-orange text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange/90 transition-colors"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
```

- [ ] **Step 2: Add Navbar to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <p className="p-8 text-navy font-bold text-2xl">Camlynk — building...</p>
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

Expected: cream navbar with gold bottom border, orange "Cam" + steel-blue "lynk" logo, nav links, orange WhatsApp button. Scroll down on a long page and shadow appears after 80px.

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.tsx app/page.tsx
git commit -m "feat: sticky navbar with scroll shadow and WhatsApp CTA"
```

---

## Task 9: Hero Section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
import { WHATSAPP_URL } from '@/lib/constants'
import { ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto flex min-h-[560px]">

        {/* Left — content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-12 py-16 z-10">
          <p className="text-[10px] font-extrabold tracking-[3px] uppercase text-orange mb-4">
            Guwahati&apos;s Trusted Security Partner
          </p>
          <h1 className="font-black leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            <span className="text-navy block">Protect</span>
            <span className="text-orange italic">Everything.</span>
          </h1>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Professional CCTV installation, smart home security and alarm systems
            for homes and businesses across Guwahati, Assam.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-orange text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange/90 transition-colors"
            >
              Book Free Survey →
            </a>
            <a
              href="#services"
              className="border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold text-sm hover:border-orange hover:text-orange transition-colors"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right — gradient panel (hidden on mobile, shown as top strip via order) */}
        <div
          className="hidden md:flex w-[45%] flex-col items-center justify-center relative"
          style={{
            background: 'linear-gradient(135deg, #FFC81E 0%, #E87F24 100%)',
            clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-5 ml-12">
            <ShieldCheck size={96} className="text-white drop-shadow-xl" strokeWidth={1.5} />
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold"
              style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.4)' }}
            >
              <ShieldCheck size={14} />
              500+ Homes Secured
            </div>
          </div>
        </div>
      </div>

      {/* Mobile gradient strip */}
      <div
        className="md:hidden h-3 w-full"
        style={{ background: 'linear-gradient(90deg, #FFC81E 0%, #E87F24 100%)' }}
      />
    </section>
  )
}
```

- [ ] **Step 2: Add Hero to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser at desktop and mobile widths**

Expected: diagonal split hero on desktop — left text with oversized headline, right orange-gold gradient with shield icon. On mobile: text stacks, gradient becomes a thin strip.

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: hero section with diagonal split layout"
```

---

## Task 10: Trust Bar

**Files:**
- Create: `components/TrustBar.tsx`

- [ ] **Step 1: Create `components/TrustBar.tsx`**

```tsx
'use client'

import { useCountUp } from '@/hooks/useCountUp'
import { STATS } from '@/lib/constants'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-center text-center px-4 py-5 border-r border-white/10 last:border-r-0">
      <span className="text-2xl md:text-3xl font-black text-gold">
        {count}{suffix}
      </span>
      <span className="text-white/75 text-xs mt-1 font-medium">{label}</span>
    </div>
  )
}

export default function TrustBar() {
  return (
    <div className="bg-navy">
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-5">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Add TrustBar to `app/page.tsx`**

```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
    </main>
  )
}
```

- [ ] **Step 3: Verify in browser**

Expected: navy strip beneath hero with 5 stats (500+, 5★, 24/7, 5yr, 8yr) in gold, labels in faded white. Numbers count up on first scroll into view.

- [ ] **Step 4: Commit**

```bash
git add components/TrustBar.tsx app/page.tsx
git commit -m "feat: trust bar with animated stat counters"
```

---

## Task 11: Services Overview

**Files:**
- Create: `components/ServicesOverview.tsx`

- [ ] **Step 1: Create `components/ServicesOverview.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'

const OVERVIEW = [
  {
    icon: 'ShieldCheck',
    title: 'Core Security',
    tagline: 'CCTV · Alarms · Doorbell · Sensors',
    href: '#core-security',
  },
  {
    icon: 'Home',
    title: 'Smart Home Integration',
    tagline: 'Automation · Lighting · Monitoring · Networking',
    href: '#smart-home',
  },
  {
    icon: 'Building2',
    title: 'Commercial Security',
    tagline: 'Office CCTV · Biometric · Access Control',
    href: '#commercial',
  },
]

export default function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">
          Complete Security Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OVERVIEW.map(({ icon, title, tagline, href }) => (
            <a
              key={title}
              href={href}
              className="group bg-cream rounded-xl p-7 border-l-4 border-gold hover:border-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <DynamicIcon name={icon} size={36} className="text-orange mb-4" />
              <h3 className="text-xl font-extrabold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm mb-4">{tagline}</p>
              <span className="text-orange text-sm font-bold group-hover:underline">Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add to `app/page.tsx`**

Add `import ServicesOverview from '@/components/ServicesOverview'` and `<ServicesOverview />` after `<TrustBar />`.

- [ ] **Step 3: Verify in browser**

Expected: white section with 3 large cream cards, gold left border, icon + title + tagline + "Explore →". Hover lifts card and border turns orange.

- [ ] **Step 4: Commit**

```bash
git add components/ServicesOverview.tsx app/page.tsx
git commit -m "feat: services overview with 3 category cards"
```

---

## Task 12: Core Security Section

**Files:**
- Create: `components/CoreSecurity.tsx`

- [ ] **Step 1: Create `components/CoreSecurity.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { CORE_SERVICES } from '@/lib/constants'

export default function CoreSecurity() {
  return (
    <SectionWrapper id="core-security" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Core Security</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">
          Secure Every Corner
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_SERVICES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 border-l-4 border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <DynamicIcon name={icon} size={28} className="text-orange mb-3" />
              <h3 className="text-base font-extrabold text-navy mb-1">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add to `app/page.tsx`** after `<ServicesOverview />`.

- [ ] **Step 3: Verify in browser**

Expected: cream section, 5 white cards in a responsive grid, gold left border, Lucide icons in orange.

- [ ] **Step 4: Commit**

```bash
git add components/CoreSecurity.tsx app/page.tsx
git commit -m "feat: core security detailed section"
```

---

## Task 13: Smart Home Integration Section

**Files:**
- Create: `components/SmartHome.tsx`

- [ ] **Step 1: Create `components/SmartHome.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { SMART_HOME_SERVICES } from '@/lib/constants'

export default function SmartHome() {
  return (
    <SectionWrapper id="smart-home" className="bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow light>Beyond Security</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          Turn Your Home Into a Smart Home
        </h2>
        <p className="text-white/70 text-base mb-12 max-w-xl">
          Control, automate and monitor everything — from your phone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SMART_HOME_SERVICES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl p-6 border border-gold/30 hover:border-gold/70 transition-colors duration-200"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <DynamicIcon name={icon} size={28} className="text-gold mb-3" />
              <h3 className="text-base font-extrabold text-white mb-1">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add to `app/page.tsx`** after `<CoreSecurity />`.

- [ ] **Step 3: Verify in browser**

Expected: navy section with gold eyebrow, white headline, 4 semi-transparent tiles with gold borders, gold icons.

- [ ] **Step 4: Commit**

```bash
git add components/SmartHome.tsx app/page.tsx
git commit -m "feat: smart home integration showcase section"
```

---

## Task 14: Why Us + How It Works

**Files:**
- Create: `components/WhyUs.tsx`
- Create: `components/HowItWorks.tsx`

- [ ] **Step 1: Create `components/WhyUs.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { WHY_US } from '@/lib/constants'

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Why Camlynk</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">Built on Trust</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WHY_US.map(({ icon, title, description }) => (
            <div key={title} className="bg-cream rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 mb-4">
                <DynamicIcon name={icon} size={22} className="text-orange" />
              </div>
              <h3 className="text-base font-extrabold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Create `components/HowItWorks.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import { HOW_IT_WORKS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <SectionWrapper className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>The Process</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-16">How It Works</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Dashed connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-[2px]"
            style={{ background: 'repeating-linear-gradient(90deg, #E87F24 0 12px, transparent 12px 24px)' }}
          />
          {HOW_IT_WORKS.map(({ step, title, description }) => (
            <div key={step} className="relative flex flex-col items-start md:items-center md:text-center">
              <div className="w-14 h-14 rounded-full bg-orange flex items-center justify-center mb-5 shrink-0 z-10">
                <span className="text-white font-black text-lg">{step}</span>
              </div>
              <h3 className="text-lg font-extrabold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 3: Add both to `app/page.tsx`** after `<SmartHome />`.

- [ ] **Step 4: Verify in browser**

Expected: white Why Us section with 4 centered cream cards. Cream How It Works with 3 numbered orange circles connected by a dashed orange line on desktop.

- [ ] **Step 5: Commit**

```bash
git add components/WhyUs.tsx components/HowItWorks.tsx app/page.tsx
git commit -m "feat: why us and how it works sections"
```

---

## Task 15: Commercial Security

**Files:**
- Create: `components/Commercial.tsx`

- [ ] **Step 1: Create `components/Commercial.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import DynamicIcon from '@/components/DynamicIcon'
import { COMMERCIAL_SERVICES, WHATSAPP_URL } from '@/lib/constants'

export default function Commercial() {
  return (
    <SectionWrapper id="commercial" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>For Businesses</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-3">Commercial Security</h2>
        <p className="text-navy/60 text-base mb-12 max-w-xl">
          Comprehensive security solutions for offices, shops, warehouses and commercial premises across Guwahati.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {COMMERCIAL_SERVICES.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-cream rounded-xl p-6 border-l-4 border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <DynamicIcon name={icon} size={26} className="text-orange mb-3" />
              <h3 className="text-base font-extrabold text-navy mb-1">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-navy/90 transition-colors"
        >
          Get a Commercial Quote →
        </a>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add to `app/page.tsx`** after `<HowItWorks />`.

- [ ] **Step 3: Commit**

```bash
git add components/Commercial.tsx app/page.tsx
git commit -m "feat: commercial security section"
```

---

## Task 16: Testimonials

**Files:**
- Create: `components/Testimonials.tsx`

- [ ] **Step 1: Create `components/Testimonials.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import { TESTIMONIALS } from '@/lib/constants'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#FFC81E" width="16" height="16">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Customer Stories</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, location, rating }) => (
            <div key={name} className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <Stars rating={rating} />
              <p className="text-navy/70 text-sm leading-relaxed mb-5 italic">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="text-navy font-extrabold text-sm">{name}</p>
                <p className="text-navy/50 text-xs">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add to `app/page.tsx`** after `<Commercial />`.

- [ ] **Step 3: Commit**

```bash
git add components/Testimonials.tsx app/page.tsx
git commit -m "feat: testimonials section"
```

---

## Task 17: CTA Banner + Contact Section API Route (TDD)

**Files:**
- Create: `components/CTABanner.tsx`
- Create: `app/api/contact/route.ts`
- Create: `__tests__/api/contact.test.ts`

- [ ] **Step 1: Create `components/CTABanner.tsx`**

```tsx
import SectionWrapper from '@/components/SectionWrapper'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'
import { Phone } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function CTABanner() {
  return (
    <SectionWrapper
      className="py-20 px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #E87F24 0%, #FFC81E 100%)' } as React.CSSProperties}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-sm">
          Get a Free Site Survey — No Obligation
        </h2>
        <p className="text-white/90 text-base mb-10">
          We&apos;ll visit your home or office and recommend the right setup at the right price.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-white text-orange px-7 py-3 rounded-lg font-black text-sm hover:bg-white/90 transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white text-white px-7 py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-colors"
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Write failing API test**

Create `__tests__/api/contact.test.ts`:
```ts
import { POST } from '@/app/api/contact/route'
import { NextRequest } from 'next/server'

function makeRequest(body: object) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('POST /api/contact', () => {
  it('returns 400 when name is missing', async () => {
    const res = await POST(makeRequest({ phone: '9876543210' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toBeDefined()
  })

  it('returns 400 when phone is missing', async () => {
    const res = await POST(makeRequest({ name: 'Test User' }))
    expect(res.status).toBe(400)
    const body = await res.json()
    expect(body.error).toBeDefined()
  })

  it('returns 200 with valid name and phone', async () => {
    const res = await POST(makeRequest({ name: 'Test User', phone: '9876543210', service: 'CCTV', message: 'Hello' }))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.success).toBe(true)
  })
})
```

- [ ] **Step 3: Run test to confirm it fails**

```bash
npm test -- __tests__/api/contact.test.ts
```
Expected: FAIL — `Cannot find module '@/app/api/contact/route'`

- [ ] **Step 4: Create `app/api/contact/route.ts`**

```ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, phone } = body

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
  }

  // Production: forward to email service (nodemailer, Resend, etc.)
  console.log('Contact submission:', body)

  return NextResponse.json({ success: true }, { status: 200 })
}
```

- [ ] **Step 5: Run tests to confirm they pass**

```bash
npm test -- __tests__/api/contact.test.ts
```
Expected: PASS (3 tests)

- [ ] **Step 6: Add CTABanner to `app/page.tsx`** after `<Testimonials />`.

- [ ] **Step 7: Commit**

```bash
git add components/CTABanner.tsx app/api/contact/route.ts __tests__/api/contact.test.ts app/page.tsx
git commit -m "feat: CTA banner and contact API route with validation"
```

---

## Task 18: Contact Section

**Files:**
- Create: `components/ContactSection.tsx`

- [ ] **Step 1: Create `components/ContactSection.tsx`**

```tsx
'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/SectionWrapper'
import Eyebrow from '@/components/Eyebrow'
import { PHONE, WHATSAPP_URL } from '@/lib/constants'
import { Phone, MapPin } from 'lucide-react'

const SERVICE_OPTIONS = ['CCTV Installation', 'Smart Home Integration', 'Burglar Alarms', 'Video Doorbell', 'Commercial Security', 'Other']

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full border border-navy/20 rounded-lg px-4 py-3 text-navy text-sm bg-white focus:outline-none focus:border-orange transition-colors'

  return (
    <SectionWrapper id="contact" className="bg-cream py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>Get in Touch</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12">Book Your Free Survey</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className={inputClass}
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              required
            />
            <input
              className={inputClass}
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              required
            />
            <select
              className={inputClass}
              value={form.service}
              onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
            >
              <option value="">Select a Service</option>
              {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea
              className={`${inputClass} resize-none`}
              rows={4}
              placeholder="Tell us about your requirements (optional)"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
            {status === 'sent' ? (
              <p className="text-orange font-bold text-sm">Thank you — we&apos;ll be in touch shortly!</p>
            ) : (
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-orange text-white py-3 rounded-lg font-bold text-sm hover:bg-orange/90 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Submit Request →'}
              </button>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please WhatsApp or call us directly.</p>
            )}
          </form>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy/10 hover:border-gold transition-colors"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: '#25D366' }}>
                <WhatsAppIcon />
              </div>
              <div>
                <p className="text-navy font-extrabold text-sm">Chat on WhatsApp</p>
                <p className="text-navy/50 text-xs">Quick replies, 7 days a week</p>
              </div>
            </a>

            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy/10 hover:border-gold transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-navy font-extrabold text-sm">{PHONE}</p>
                <p className="text-navy/50 text-xs">Call us directly</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy/10">
              <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-orange" />
              </div>
              <div>
                <p className="text-navy font-extrabold text-sm">Serving All of Guwahati</p>
                <p className="text-navy/50 text-xs">Paltan Bazaar · Fancy Bazaar · Zoo Road · Dispur and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
```

- [ ] **Step 2: Add to `app/page.tsx`** after `<CTABanner />`.

- [ ] **Step 3: Verify in browser**

Expected: 2-column cream section. Left: form with inputs, dropdown, textarea, submit button. Right: WhatsApp, phone, and location cards. Submit form → see "Thank you" message.

- [ ] **Step 4: Commit**

```bash
git add components/ContactSection.tsx app/page.tsx
git commit -m "feat: contact section with form and contact details"
```

---

## Task 19: Footer + Floating WhatsApp

**Files:**
- Create: `components/Footer.tsx`
- Create: `components/FloatingWhatsApp.tsx`

- [ ] **Step 1: Create `components/Footer.tsx`**

```tsx
import { PHONE, WHATSAPP_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="text-2xl font-black">
              <span className="text-orange">Cam</span>
              <span className="text-steel-blue">lynk</span>
            </a>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Professional security installation for homes and businesses across Guwahati, Assam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['#services', '#why-us', '#contact'].map((href) => (
                <li key={href}>
                  <a href={href} className="text-white/50 text-sm hover:text-gold transition-colors capitalize">
                    {href.replace('#', '').replace('-', ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-extrabold text-sm mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {['CCTV Installation', 'Smart Home', 'Burglar Alarms', 'Commercial Security'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-gold transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`tel:${PHONE}`} className="text-white/50 text-sm hover:text-gold transition-colors">{PHONE}</a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="text-white/50 text-sm">Guwahati, Assam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Camlynk. All rights reserved.</p>
          <p className="text-white/30 text-xs">Guwahati, Assam, India</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Create `components/FloatingWhatsApp.tsx`**

```tsx
import { WHATSAPP_URL } from '@/lib/constants'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L.057 23.882l6.197-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-4.988-1.366l-.358-.213-3.68.965.981-3.595-.233-.369A9.79 9.79 0 012.182 12c0-5.424 4.394-9.818 9.818-9.818 5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
)

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      style={{ background: '#25D366' }}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: '#25D366' }} />
      <WhatsAppIcon />
    </a>
  )
}
```

- [ ] **Step 3: Wire both into `app/page.tsx`**

Final `app/page.tsx`:
```tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesOverview from '@/components/ServicesOverview'
import CoreSecurity from '@/components/CoreSecurity'
import SmartHome from '@/components/SmartHome'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Commercial from '@/components/Commercial'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <CoreSecurity />
      <SmartHome />
      <WhyUs />
      <HowItWorks />
      <Commercial />
      <Testimonials />
      <CTABanner />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
```

- [ ] **Step 4: Verify full page in browser — scroll from top to bottom**

Check: navbar sticky with shadow, diagonal hero, trust bar counters, all 3 service sections, why us, how it works, commercial, testimonials, CTA, contact form, footer, floating WhatsApp button with pulse.

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx components/FloatingWhatsApp.tsx app/page.tsx
git commit -m "feat: footer, floating WhatsApp button, full page assembly"
```

---

## Task 20: Run All Tests + Build Verification

- [ ] **Step 1: Run full test suite**

```bash
npm test
```
Expected: all tests pass (useCountUp × 2, contact API × 3)

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Production build**

```bash
npm run build
```
Expected: `✓ Compiled successfully`, no errors

- [ ] **Step 4: Run production build locally**

```bash
npm start
```
Open `http://localhost:3000` — verify the full page renders correctly in production mode.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete Camlynk landing page"
```
