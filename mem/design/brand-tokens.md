---
name: Brand tokens
description: Birnihigo brand colors, typography, usage proportions per official Brand Guidelines (70/20/10)
type: design
---
Colors (in src/index.css and tailwind.config.ts):
- Café Noir #4F3C1C → --primary / --cafe (38 48% 32%) — DOMINANT text + dark surfaces
- Café Deep #3A2D14 → --cafe-deep / --primary-deep (38 55% 20%) — cinematic dark backgrounds
- White Chocolate #EFE7DC → --cream (35 38% 90%) — DOMINANT light surface
- Deep Saffron #FEA42A → --secondary (35 99% 58%) — ACCENT ONLY (~10%): CTAs, eyebrows, key numerals, single hero stroke
- Dandelion #FFD275 → --accent (40 100% 73%)
- Chinese Bronze #CD8C24 → --bronze (38 70% 47%) — secondary accent for eyebrows on cream
- Ink #0A0A0A → --ink (0 0% 6%) — cinematic closing / biosecurity sections

Usage ratio (mandatory): ~70% Café Noir + Cream base / ~20% neutral support / ~10% Deep Saffron accents.
Do NOT make saffron a section background; keep it as accent. Saffron-dominant washes were rejected — use Café Noir or Cream as section grounds.

Typography:
- Display: Parkinsans (700/800, tracking -0.025 to -0.035em) via .display-xl / .display-lg / .num-display utilities
- Body: Inter (loaded from Google Fonts) — set as default sans/body in tailwind.config.ts
- Reduced paragraph density, generous leading, oversized headlines

Gradients: --gradient-cinematic (dark cafe overlay), --gradient-editorial (cream-to-cream-deep). Avoid saffron gradients on large surfaces.
