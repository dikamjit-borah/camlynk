# Camlynk Landing Page — Design Spec
**Date:** 2026-06-05
**Project:** Camlynk — CCTV & Home Security Installation, Guwahati, Assam

---

## 1. Overview

A single-page marketing website for Camlynk, a professional CCTV and home security installation company based in Guwahati, Assam, India. The goal is to convert visitors into leads via phone calls, WhatsApp messages, or form submissions.

---

## 2. Audience

- **Primary (70%):** Homeowners — families seeking peace of mind, residential security
- **Secondary (30%):** Businesses — office managers, shop owners, commercial clients

---

## 3. Conversion Goals

Both contact paths are always visible:
- **Primary CTA:** WhatsApp button (floating + in nav + in CTA section)
- **Secondary CTA:** "Book Free Survey" → contact form
- **Tertiary:** Direct phone call link

---

## 4. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (scroll-triggered) |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 5. Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `orange` | `#E87F24` | Primary CTAs, logo, eyebrow labels, accents |
| `gold` | `#FFC81E` | Secondary highlights, stat numbers, borders |
| `cream` | `#FEFDDF` | Page background, card backgrounds |
| `blue` | `#73A5CA` | Logo accent, secondary buttons, tag text |
| `navy` | `#1B3A5C` | Headings, body text, dark section backgrounds |

No black (`#000000`) or near-black shades anywhere. All dark tones use `navy`.

### Typography
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Heading scale:** 9xl → 5xl → 3xl → xl (heavy weights: 800–900)
- **Body:** base / sm, weight 400–500, color navy at 70% opacity
- **Eyebrow labels:** 10px, weight 800, letter-spacing 3px, uppercase, orange

### Visual Style: Bold & Editorial
- Diagonal hero split via CSS `clip-path: polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)`
- Left-border accent on service cards (`border-left: 4px solid gold`)
- Alternating section backgrounds: white ↔ cream ↔ navy
- Diagonal / angled section dividers using `clip-path` on section wrappers
- No border-radius above 14px — clean, confident feel

---

## 6. Page Sections (Top to Bottom)

### 6.1 Navbar
- Background: cream (`#FEFDDF`), bottom border: 2px gold
- Logo: "Cam" in orange + "lynk" in steel blue, weight 900
- Nav links: Services · Why Us · Contact — navy, medium weight
- Right CTA: "WhatsApp" button in orange (WhatsApp icon via Lucide or SVG)
- Behaviour: sticky on scroll, subtle drop shadow appears after 80px scroll

### 6.2 Hero
Split layout — left content, right visual panel:

**Left (55%):**
- Eyebrow: "Guwahati's Trusted Security Partner"
- Headline: "Protect *Everything.*" — oversized (clamp 3rem–5rem), navy + orange italic line
- Subtext: 1–2 lines describing the company and location
- CTA row: "Book Free Survey →" (orange, primary) + "View Services" (navy outline)

**Right (45%):**
- Orange-to-gold gradient panel with diagonal `clip-path` cut
- Large shield SVG icon with drop shadow (Lucide `ShieldCheck`)
- Glassmorphism badge: "500+ Homes Secured" with a checkmark icon

**Mobile:** Right panel collapses, becomes full-width gradient strip above the text.

### 6.3 Trust Bar
- Background: navy (`#1B3A5C`)
- 5 stats in a horizontal strip: `500+ Homes Secured · 5★ Google Rating · 24/7 Support · 5yr Warranty · 8yr Experience`
- Numbers in gold, labels in white at 75% opacity
- **Animated counters** using Intersection Observer — counts up when scrolled into view

### 6.4 Services Overview
Three large category cards on a white background:

| Card | Icon | Title | Tagline |
|---|---|---|---|
| 1 | ShieldCheck (Lucide) | Core Security | CCTV · Alarms · Doorbell · Sensors |
| 2 | Home (Lucide) | Smart Home Integration | Automation · Lighting · Monitoring · Networking |
| 3 | Building2 (Lucide) | Commercial Security | Office CCTV · Biometric · Access Control |

Each card: cream background, left gold border, icon, title, tagline, "Explore →" anchor link to its dedicated section below. Hover: lift shadow + orange border.

### 6.5 Core Security — Detailed
- Background: cream
- Section eyebrow + heading: "Secure Every Corner"
- 5 feature cards in a 2–3 column grid:
  - Camera (Lucide) — CCTV Installation — HD & 4K, night vision, remote viewing, cloud backup
  - BellRing (Lucide) — Burglar Alarms — Motion-triggered, loud siren, instant alert
  - Video (Lucide) — Video Doorbell — See & speak to visitors remotely
  - Scan (Lucide) — Motion Sensors — Indoor/outdoor, pet-immune options
  - Phone (Lucide) — Intercom Systems — Multi-unit & standalone, audio/video
- Each card: cream bg, gold left border, icon, name, 1-line description

### 6.6 Smart Home Integration — Dedicated Showcase
- Background: navy
- Section eyebrow: "Beyond Security"
- Heading: "Turn Your Home Into a Smart Home"
- Subtext: "Control, automate, and monitor everything — from your phone."
- 4 feature tiles in a 2×2 grid (white/semi-transparent):
  - Zap (Lucide) — Home Automation — Schedules, scenes, voice control
  - Lightbulb (Lucide) — Smart Lighting — Mood lighting, motion-triggered, energy saving
  - MonitorSmartphone (Lucide) — Remote Monitoring — Live camera feeds from anywhere
  - Wifi (Lucide) — Networking — Mesh Wi-Fi, structured cabling, router setup
- Visual treatment: tiles have subtle gold border, icon in gold, text in white
- Post-launch optional: "works with" logos row (Google Home, Alexa) — skip in v1

### 6.7 Why Choose Camlynk
- Background: white
- 4 trust cards in a row:
  - Zap (Lucide) — Same-Day Installation
  - Wrench (Lucide) — AMC / Annual Maintenance Plans
  - MapPin (Lucide) — Local Experts — Based in Guwahati
  - ShieldCheck (Lucide) — 5-Year Warranty on All Equipment
- Each card: cream bg, center-aligned, gold icon, navy title, muted description

### 6.8 How It Works
- Background: cream
- 3 numbered steps connected by a dashed orange line:
  1. **Free Site Survey** — We visit, assess your space, recommend the right setup
  2. **Professional Installation** — Clean, fast, same-day in most cases
  3. **You're Protected** — Live monitoring, app access, ongoing support
- Scroll-triggered fade-in left → right

### 6.9 Commercial Security
- Background: white
- Lighter visual weight than residential sections — secondary audience
- Brief intro copy targeting offices, shops, warehouses
- 3 features: Office/Shop CCTV · Biometric Attendance · Access Control Systems
- Same card style as Core Security but smaller grid (3 columns)
- Ends with a commercial-specific CTA: "Get a Commercial Quote"

### 6.10 Testimonials
- Background: cream
- 3 customer review cards
- Each: star rating (gold), quote text, customer name + locality (e.g., "Reena D., Paltan Bazaar")
- Simple horizontal card layout, subtle drop shadow

### 6.11 CTA Banner
- Background: orange-to-gold gradient (135deg)
- Heading: "Get a Free Site Survey — No Obligation"
- Subtext: "We'll visit your home or office and recommend the right setup at the right price."
- Two buttons: "Call Now" with Phone icon (white bg, orange text) + "WhatsApp Us" with WhatsApp icon (transparent, white border)

### 6.12 Contact Section
- Background: cream
- Two-column layout:
  - **Left:** Form — Name, Phone, Service Type (dropdown), Message, Submit button
  - **Right:** WhatsApp direct link, phone number, service area copy ("Serving all areas of Guwahati, Assam"), optional embedded Google Map
- Form submits to a Next.js API route (or Formspree as fallback)

### 6.13 Footer
- Background: navy
- Logo + tagline
- Three columns: Quick Links · Services · Contact Info
- Social links (Facebook, Instagram, WhatsApp)
- Copyright line in muted white

---

## 7. UX & Interaction Details

| Feature | Implementation |
|---|---|
| Floating WhatsApp button | Fixed bottom-right, always visible, green bg (`#25D366`), WhatsApp SVG icon, slight pulse animation |
| Sticky navbar shadow | Appears after 80px scroll via `scroll` event listener |
| Stat counter animation | Intersection Observer triggers count-up on trust bar |
| Scroll fade-ins | Framer Motion `whileInView` with `initial: { opacity: 0, y: 30 }` |
| Service card hover | `translateY(-4px)` + orange border-left upgrade |
| Section diagonal dividers | `clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%)` on section wrappers |
| Mobile hero | Right panel collapses to full-width gradient strip; text stacks vertically |

---

## 8. Content Placeholders

The following real content is needed before launch:
- Actual customer testimonials (names, quotes, localities)
- Real stat numbers (homes secured, years experience)
- Phone number and WhatsApp number
- Service area details
- Google Maps embed link
- Business photos (optional — can use icons/illustrations initially)

---

## 9. Out of Scope

- Blog / content section
- Individual service detail pages
- Online booking / scheduling system
- Payment integration
- Multi-language support (English only for now)
