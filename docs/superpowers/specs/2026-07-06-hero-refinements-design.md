---
name: hero-refinements
description: Wordmark font fix, hero ambient animation, and spec grid visual refinement
metadata:
  type: project
---

# Hero Refinements — Design Spec

**Date:** 2026-07-06  
**Scope:** Navbar wordmark, Hero.tsx ambient animation, ServicesOverview.tsx spec grid

---

## 1. Wordmark Font Fix (Navbar.tsx)

**Problem:** The wordmark "Camlynk" uses `font-serif` → Cormorant Garamond, while every heading across the site uses Fraunces. Two competing display serifs create visual incoherence — the logo feels borrowed from a different brand.

**Fix:** Apply Fraunces directly to the wordmark via inline `fontFamily: 'var(--font-fraunces), Georgia, serif'`.

**Treatment:**
- "Cam" — Fraunces italic, `var(--color-orange)` (unchanged color)
- "lynk" — Fraunces roman, `var(--color-ink)` (unchanged color)
- Font size — unchanged: `clamp(1.1rem, 1.6vw, 1.3rem)`
- Tracking — keep `tracking-tight`

**Why italic on "Cam":** Mirrors the italic-accent pattern used for the cycling word in the hero headline and across all section headings. The wordmark will now read as part of the same visual system.

---

## 2. Hero Ambient Animation (Hero.tsx + globals.css)

**Problem:** The hero background (dot grid + vignette) is completely static after the entrance sequence finishes. The page feels inert.

**Approach:** Two CSS `@keyframes` applied to the two existing background `div`s. Zero JS added.

### 2a. Dot grid drift

**Keyframe:** `dotDrift`  
**Property:** `backgroundPosition` from `0px 0px` → `44px 44px` (exactly one grid tile)  
**Duration:** 55s, `linear`, `infinite`  
**Direction:** Diagonal down-right — reads like a wide-angle security camera scanning slowly  
**Seamless loop:** Because the dot pattern tiles at 44px × 44px, shifting by exactly one tile is invisible at the loop point  
**Applied to:** The existing dot-grid `div` (currently has `backgroundSize: '44px 44px'`)

### 2b. Vignette breathe

**Keyframe:** `vignettePulse`  
**Property:** `opacity` oscillates between `0.6` and `0.85`  
**Duration:** 8s, `ease-in-out`, `infinite`, `alternate`  
**Effect:** A barely perceptible darkening pulse — the scene appears to be watched  
**Applied to:** The existing vignette `div` (currently `opacity: 0.75` inline)

### Reduced motion

Both animations are handled by the existing `prefers-reduced-motion` rule in `globals.css` which sets `animation-duration: 150ms` and `animation-iteration-count: 1` — effectively disabling them for users who prefer no motion.

### Implementation notes

- Add `@keyframes dotDrift` and `@keyframes vignettePulse` to `globals.css` inside `@layer base`
- Add utility classes `.animate-dot-drift` and `.animate-vignette-pulse` in `@layer utilities`
- Remove the `opacity` inline style from the vignette div (now controlled by the animation's from-value)
- The Framer Motion wrapper's `initial={{ opacity: 0 }}` on the hero section is unaffected — these are background divs outside the motion hierarchy for entrances

---

## 3. Spec Data Grid (ServicesOverview.tsx)

**Problem:** The 2×2 spec grid uses `gap: '1px'` + wrapper background color as the gap fill. This draws 1px lines on all four internal edges — top, bottom, left, right between cells — producing a tic-tac-toe cage that feels harsh and over-bordered.

**Fix:** Remove the gap/background-as-border trick. Replace with:

- `grid grid-cols-2 gap-x-8` — columns breathe with whitespace, no vertical line
- First two cells (index 0 and 1, top row) get `border-b` using `color-mix(in oklch, var(--color-paper) 14%, transparent)` — a single horizontal rule between rows
- Bottom two cells (index 2 and 3) have no border
- Wrapper loses its `background` style prop and `gap: '1px'`

**Result:** A clean data-table feel with a single separator between two rows. No outer cage, no vertical divider. The spec values read in two columns with breathing room between them.

**Conditional border:** Applied via index check: `index < 2 ? 'border-b ...' : ''`

---

## Files Changed

| File | Change |
|------|--------|
| `components/Navbar.tsx` | Wordmark: Cormorant → Fraunces italic/roman |
| `components/Hero.tsx` | Apply `.animate-dot-drift` and `.animate-vignette-pulse` to background divs; remove inline opacity from vignette |
| `app/globals.css` | Add `@keyframes dotDrift`, `@keyframes vignettePulse`, utility classes |
| `components/ServicesOverview.tsx` | Replace gap-as-border grid with gap-x-8 + conditional border-b |

---

## Success Criteria

- Wordmark uses same typeface family as all headings — visually unified
- Hero background visibly drifts when watched for 3–5 seconds; imperceptible at a glance
- Vignette breathe is felt, not noticed
- Spec grid shows one horizontal divider only — no outer cage, no vertical line
- No regressions in other sections
- All animations pause/skip for `prefers-reduced-motion: reduce`
