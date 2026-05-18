# Birnihigo — Premium Cinematic Redesign Plan

## Scope

This plan focuses on a strategic redesign of the **Homepage (`src/pages/Index.tsx`)** and the **shared design system** that supports it (typography, spacing, motion primitives, navigation). Inner pages (About, Products, Sustainability, Investors, Model, Careers, Contact, Insights) will inherit the new tokens and shared components automatically, with light touch-ups only where they break against the new system. A second pass on inner pages can follow once you approve the homepage direction.

## Design System Changes

**Typography**
- Keep Parkinsans as display (headlines, eyebrows, large stat numerals)
- Add **Inter** (Google Fonts) as body face for digital readability
- Establish a stricter type scale: `display-xl` (clamp 56–112px), `display-lg`, `h1`, `h2`, `eyebrow`, `body-lg`, `body`, `caption`
- Tighter tracking on display, generous leading on body, reduced paragraph density

**Color discipline (70/20/10)**
- Base surfaces dominated by Café Noir + White Chocolate
- Deep Saffron reserved for true accents (CTAs, eyebrows, key numerals, single hero stroke), not as a dominant wash
- Update `--gradient-hero` and saffron-heavy sections to use restrained Café Noir/Cream gradients
- Note: this intentionally rebalances the previous "saffron-dominant" rule in memory toward the official 70/20/10 guideline

**Spacing & rhythm**
- Section vertical rhythm: `py-28 md:py-40`
- New container widths: `container-narrow` (max-w-5xl) for editorial text moments
- Hairline dividers (`border-cafe/10`) instead of heavy cards in key sections

**Motion primitives**
- New `CinematicReveal` (clip-path + translate, longer duration, expo ease)
- New `Parallax` wrapper using `useScroll` + `useTransform` (framer-motion, already installed)
- New `Counter` (animated metric using `useInView`)
- New `Marquee` already partially supported via keyframes — formalize as component

## New Homepage Structure (`src/pages/Index.tsx`)

Replaces the current Index sections with 9 cinematic sections:

```text
1. CinematicHero          fullscreen, layered typography, slow Ken-Burns image,
                          subtle parallax, scroll cue
2. StrategicPositioning   single oversized pull-quote, max-w-4xl, Café Noir on cream
3. IntegratedValueChain   redesigned ValueChainFlow with scroll-linked progress line
4. IndustrialCapabilities animated counters in a 2x3 or 3x2 metric grid, dark surface
5. BiosecurityExcellence  dark industrial split: image left, disciplined checklist right
6. ClimateCircularSystems light cream surface, 4-tile bento (solar / water / fertilizer / moringa)
7. InvestorPlatform       institutional KPI band + CTA to /investors
8. ExportReadiness        Horn-of-Africa SVG map with corridor lines + trade nodes
9. CinematicClosing       full-bleed dark, oversized statement, single CTA
```

## New / Modified Components

**Create**
- `src/components/site/CinematicHero.tsx` — replaces current hero on Index
- `src/components/site/PullQuote.tsx` — sections 2 & 9
- `src/components/site/MetricCounter.tsx` — animated number on viewport enter
- `src/components/site/CapabilitiesGrid.tsx` — section 4
- `src/components/site/BiosecurityPanel.tsx` — section 5
- `src/components/site/CircularSystemsBento.tsx` — section 6
- `src/components/site/InvestorBand.tsx` — section 7
- `src/components/site/ExportMap.tsx` — inline SVG of Horn of Africa + corridors
- `src/components/site/Parallax.tsx` — reusable wrapper

**Modify**
- `src/components/site/ValueChainFlow.tsx` — switch to scroll-linked progress, remove saffron-dominant dark variant in favor of disciplined cream surface with bronze accents
- `src/components/site/Navbar.tsx` — slimmer, blurred glass, condensed on scroll, saffron CTA pill
- `src/components/site/PageHero.tsx` — adopt new type scale (inner pages benefit automatically)
- `src/index.css` — add Inter import, new type utilities, restrained gradients
- `tailwind.config.ts` — add `font-display`, `font-body`, new fluid font sizes, new ease curves
- `mem/index.md` + `mem/design/brand-tokens.md` — record the 70/20/10 rebalance so future edits respect it

## Image Strategy

Reuse existing high-quality assets where they match the brief; no new image generation in this pass.
- Hero: `parent-stock-house-wide.jpg` (already cinematic) + dark gradient overlay
- Biosecurity: `real-broiler-house-interior.jpg`
- Capabilities backdrop: `real-feedmill-exterior.jpg`
- Climate bento: `sustainable-broiler-flock.jpg`, `sustainability.jpg`
- Closing: `real-farm-landscape.jpg` with heavy Café Noir overlay

If you later want true drone / processing-line / lab photography, we can generate or source those in a follow-up.

## Out of Scope (this pass)

- Inner page redesigns beyond inherited token updates
- Video backgrounds (kept as future enhancement — for now we use Ken-Burns on stills to keep payload small)
- New CMS / data wiring
- Localization

## Verification

- Visual QA in preview at mobile (375), tablet (768), desktop (1440)
- Check that 70/20/10 ratio holds — saffron should read as accent, not background
- Confirm Lighthouse-friendly: lazy-load below-the-fold images, no layout shift in counters
- Confirm motion respects `prefers-reduced-motion`

## Deliverable

A redesigned `/` route that reads as a premium, investor-grade African protein infrastructure platform, with a token + component system the rest of the site can adopt in a follow-up pass.
