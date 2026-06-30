# Handoff: LSD Capital — Warm "Back & Build" Homepage Redesign

## Overview
A redesign of the LSD Capital homepage that **rebalances the story toward what the team builds**, not just what it invests in. The current site reads as a VC fund (investment-first, editorial/newspaper styling). The new direction positions LSD as **"a tiny product studio that also invests"** — the projects (LinkiDink, itwyit) get top billing, the tone is warmer and more human, and the visual system moves off the cool-paper/newspaper look onto a warm sand palette while **keeping the brand green accent**.

This handoff covers the **homepage only**. The portfolio, projects, and community routes should be migrated to the same system in a follow-up.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look, layout, copy, and behavior. They are **not production code to copy directly**.

Your task is to **recreate this design inside the existing codebase** (`lsdcapital.web` — Vite + React 19 + TanStack Router + Tailwind CSS v4, deployed on Cloudflare) using its established patterns: the `@theme` token block in `src/styles/app.css`, the components in `src/components/`, and the data files in `src/data/`. Do not introduce a new styling approach; extend the one that's there.

The prototype uses inline styles for portability. **In the real codebase, use Tailwind utility classes + the `@theme` tokens** exactly as the current code does — translate the inline values below into tokens/utilities.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and layout are final and exact. Recreate pixel-faithfully with Tailwind utilities. The two product mocks (LinkiDink word-ladder, itwyit match list) are **illustrative placeholders** — see "Assets / Open questions."

---

## Design Tokens

### Colors (replace the current `@theme` palette in `src/styles/app.css`)
| Token | Current | New value | Use |
|---|---|---|---|
| `--color-paper` | `#faf8f3` | `#f3ebdd` | Warm sand — page background, nav, footer |
| `--color-surface` | *(new)* | `#fcf8f0` | Card surfaces (project cards, proof panel) |
| `--color-ink` | `#111111` | `#2a241d` | Warm near-black — headings, body, dark blocks |
| `--color-ink-muted` | `#5a5a55` | `#7a6f60` | Secondary text |
| `--color-faint` | *(new)* | `#9a8c78` | Tertiary labels, eyebrows, meta |
| `--color-rule` | `#d9d4c7` | `#e4d9c5` | Hairline borders / dividers |
| `--color-accent` | `#1f5d3a` | `#1f9442` | **Brand green, brightened.** Links, highlights, CTAs, heart mark |
| `--color-cream` | *(new)* | `#fbf3e8` | Text/elements on dark or accent backgrounds |

Keep `#2a241d` available as a "dark block" background (closing CTA band, community card, LinkiDink mock).

### Typography (swap both font vars)
| Token | Current | New | Notes |
|---|---|---|---|
| `--font-display` | Fraunces (serif) | **Bricolage Grotesque** | Headings, wordmark, project names. Weights 500 / 600. Tracking ~ `-0.035em` on large headings. |
| `--font-sans` | Instrument Sans | **Hanken Grotesk** | Body, nav, UI. Weights 400 / 500 / 600 / 700. |

Load via Google Fonts (add to `index.html` or `@import` in `app.css`):
```
https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap
```
This redesign **drops** the editorial devices: no Fraunces, no drop-caps (`.drop-cap`), no `rule-draw` masthead animation, no "Vol. 01 / MMXXVI" / "§ Section" motifs. The paper-grain `body::before` texture **stays** (it works with the warm palette).

### Type scale (homepage)
| Element | Font | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| Hero H1 | Bricolage | `clamp(40px, 6.4vw, 80px)` | 600 | 1.0 | -0.035em |
| Section H2 | Bricolage | `clamp(24px, 3vw, 30px)` | 600 | 1.1 | normal |
| Community H2 | Bricolage | `clamp(28px, 4vw, 42px)` | 600 | 1.05 | normal |
| Closing CTA H2 | Bricolage | `clamp(32px, 5vw, 56px)` | 600 | 1.05 | -0.02em |
| Project name | Bricolage | 24px | 600 | — | — |
| Lead paragraph | Hanken | `clamp(17px, 2vw, 20px)` | 400 | 1.55 | — |
| Body | Hanken | 15.5–16px | 400 | 1.55 | — |
| Eyebrow / meta | Hanken | 13–15px | 400 | — | — |
| Nav links | Hanken | 14.5px | 400 | — | — |

### Other tokens
- **Card radius:** `18px`. **Buttons/pills/chips:** `999px` (fully rounded).
- **Container:** `max-width: 1180px`, centered, horizontal padding `clamp(20px, 5vw, 46px)`.
- **Section vertical padding:** `clamp(40px, 5vw, 64px)` typical; hero top `clamp(48px, 8vw, 80px)`.
- **Logo treatment (proof strip):** `filter: grayscale(1); opacity: 0.6;` height 24px.
- Responsive is handled with `clamp()` + `grid-template-columns: repeat(auto-fit, minmax(Npx, 1fr))` (no breakpoints needed for the grids). Use Tailwind's responsive variants where cleaner.

---

## Screens / Views

### Homepage (`src/routes/index.tsx` + `src/components/`)
Single scrolling page. Sections top to bottom: **Nav → Hero → Things we're building → Who we back → Where we show up → Closing CTA → Footer.**

#### 1. Navbar (`src/components/Navbar.tsx`)
- Sticky, `bg-paper`, bottom border `--color-rule`, height 64px, container as above.
- **Left:** heart mark (green, `HeartMark`, ~19×18) + wordmark "LSD Capital" in Bricolage 600, 20px, ink, tracking -0.01em.
- **Center:** links in Hanken 14.5px, `--color-ink-muted`, gap `clamp(16px,3vw,32px)`. **Relabel:** `What we build` → `#build`, `Who we back` → `#back`, `Community` → `#community`. (These can stay as route links — `/projects`, `/portfolio`, `/community` — once those pages are migrated; on the single homepage they're anchor links.)
- **Right:** pill button "Say hello", `bg-ink` (`#2a241d`), text `--color-paper`, padding 10×20px, `rounded-full`, 13.5px/500, `mailto:hello@lsd.capital`.
- Remove the "Vol. 01 / 2026" label. Keep the existing mobile menu logic; restyle to match (sentence-case links, warm palette, pill contact).

#### 2. Hero (`src/components/Hero.tsx`)
- Container, padding `clamp(48px,8vw,80px)` top / `clamp(36px,5vw,56px)` bottom.
- **Eyebrow** (Hanken 15px, `--color-faint`): `A tiny product studio that also invests · Cape Town & Mahé`
- **H1** (Bricolage 600, scale above, max-width 980px, color ink): `We build the things we wish existed — ` then a green span: `and back the people building the rest.`
- **Lead** (Hanken, lead scale, `--color-ink-muted`/`#6f6456`, max-width 600px, margin-top 28px): `Some weeks we ship. Some weeks we invest. It's all the same instinct: heart-led, hands-on, in for the long middle.`
- **CTA row** (margin-top 40px, flex wrap, gap 22px, align center):
  - Pill button `bg-accent` (green), text cream, 14×28px, `rounded-full`, 15px/600, label `Start a conversation`, `mailto:hello@lsd.capital`.
  - Muted text `or just write — hello@lsd.capital` (Hanken 15px, `--color-faint`).
- Remove the old `rule-draw` top hairline animation and the "Vol. 01 / MMXXVI / Cape Town" sidebar column.

#### 3. Things we're building (`#build`) — the key new section
- Container. Header row (flex, baseline, space-between, wrap): H2 `Things we're building` (Bricolage 600) + right meta `Shipped quietly, no fanfare` (Hanken 14px, `--color-faint`).
- **Grid:** `repeat(auto-fit, minmax(300px, 1fr))`, gap 24px. Two **project cards**. Build a reusable `ProjectCard` component, fed by `src/data/projects.ts`.
- **Card shell:** `bg-surface` (`#fcf8f0`), 1px border `--color-rule`, radius 18px, padding 30px, flex row, gap 26px, items flex-start. Left = text column (flex:1), right = a fixed ~130px-wide UI mock.

  **LinkiDink card:**
  - Logo (`/linkidink-logo.png`, height 26px) + name "LinkiDink" (Bricolage 600, 24px).
  - Body (Hanken 15.5px, muted): `A calm daily word-connection puzzle. Link words by their hidden meanings, climb a small daily ladder, share with friends.`
  - Chips (1px rule border, rounded-full, 12px, faint): `iOS`, `Android`.
  - **Mock (right):** dark `#2a241d` panel, radius 16px, padding 16×13px. Vertical "word ladder": label `TODAY` (9px, uppercase, `#a9805a`), then rows: `OCEAN`, `BLUE` on `#3a322a` chips, `PRINT` on green chip, then a dashed `? ? ? ?` chip — separated by small green `•` connectors. *Illustrative — see open questions.*

  **itwyit card:**
  - Badge "it" (24×24 `#2a241d` square, radius 7px, cream text, Bricolage 600) + name "itwyit" (Bricolage 600, 24px).
  - Body: `A private space for two people to compare notes — on what they're into, and how they like to be loved. Only mutual yeses are ever shared. No accounts, no shame.`
  - Chip: `On the web`.
  - **Mock (right):** white card, 1px rule border, radius 16px. Header `You` / `Them` (9px uppercase faint). Rows of paired dots (filled = green accent, empty = 1.5px `#d9cdb8` ring). One highlighted `a match` pill (green text on `#e7efe7`). *Illustrative.*

#### 4. Who we back (`#back`)
- Container. A single panel: `bg-surface`, 1px rule border, radius 18px, padding `clamp(28px,4vw,44px)`.
- Header row: H2 `…and we back people, too` (Bricolage 600) + meta `18 founders · Africa & beyond`.
- Sub (Hanken 16px, muted, max-width 560px): `Tech-focused angel and seed companies, led by founders we genuinely believe in.`
- **Logo strip:** grid `repeat(auto-fit, minmax(120px, 1fr))`, gap `clamp(20px,4vw,44px)`, top+bottom 1px rule borders, padding. Logos at height 24px, `grayscale(1)`, opacity 0.6. Pull from `src/data/portfolio.ts` — show a curated handful (prototype uses Dope, WeR1, DIDX, Inv.es, Frsh Minds; use the local `/public/*.svg` logos for reliability).
- Link (green, 15px/600): `See the full portfolio →` → route to `/portfolio`.

#### 5. Where we show up (`#community`)
- Container, top 1px rule divider. Grid `repeat(auto-fit, minmax(280px,1fr))`, gap `clamp(24px,4vw,48px)`, items center.
- **Left:** eyebrow `Where we show up` (13px, faint); H2 `Beyond capital.` (Bricolage 600, community scale); body (Hanken 16.5px, muted, max-width 460px): `We run a theme camp at Afrikaburn — the South African regional Burning Man — and help bring it to life each year. It's where a lot of the heart comes from.`; link `Visit NDL — our camp ↗` → `https://ndl.lsd.capital/`.
- **Right:** dark `#2a241d` card, radius 18px, padding `clamp(28px,4vw,40px)`, min-height 220px, flex column space-between. Top: heart mark (green, 44×40). Bottom: `NDL — our home in the desert, once a year.` (Bricolage 500, `clamp(20px,2.4vw,26px)`, cream).
- Source from `src/data/community.ts`.

#### 6. Closing CTA band
- Full-bleed `bg-ink` (`#2a241d`), cream text, centered. Container, padding `clamp(56px,8vw,96px)` vertical.
- Heart mark (green, 34×31, margin-bottom 24px).
- H2 (Bricolage 600, CTA scale, cream, max-width 680px): `Building something, or just want to talk?`
- Sub (Hanken, `clamp(16px,2vw,19px)`, `#b7ab98`, max-width 480px): `We read everything ourselves. No forms, no associates, no black hole.`
- Pill button `bg-accent` green, cream text, 16×34px, rounded-full, 16px/600: `hello@lsd.capital` → mailto.

#### 7. Footer (`src/components/Footer.tsx`)
- `bg-paper`, top 1px rule border. Container. Top grid `repeat(auto-fit, minmax(180px,1fr))`, gap `clamp(28px,4vw,48px)`.
  - Brand block (spans full row, max-width 380px): heart + wordmark; tagline (Hanken 16px, muted): `Heart-led — we build things we believe in, and back the people doing the same.`
  - "Explore" column: links `What we build` / `Who we back` / `Community`.
  - "Based in" column: `South Africa ZA`, `Seychelles SC`.
  - "Say hello" column: `hello@lsd.capital` (green, 600).
- Bottom bar: top 1px rule border, flex space-between, 13px faint: `© 2026 LSD Capital` · `Heart-led investments.`

---

## Interactions & Behavior
- **Hover:** links/CTAs shift to accent green or darken slightly (match current site's `transition-colors`). Pills can lift opacity/darken on hover. Anchor links (`#build`, `#back`, `#community`) smooth-scroll.
- **Heart mark:** green by default; on nav/footer logo hover it can transition to ink (as the current site does).
- **Responsive:** all grids collapse via `auto-fit`/`minmax`; type scales via `clamp()`. Verify the project cards stack their mock below the text on narrow widths if the 300px min is hit (acceptable to let the mock wrap under).
- No loading/error/form states — all CTAs are `mailto:` and route links.

## State Management
None required for the homepage beyond the existing mobile-menu open/close state in `Navbar.tsx`. All content is static, sourced from `src/data/{projects,portfolio,community}.ts`.

## Theme options (optional, from the prototype)
The prototype exposes three theme knobs you may wire as constants or leave fixed:
- **Accent color:** default brand green (brightened) `#1f9442` (alternatives explored: deeper `#1f5d3a`, `#27a850`, `#c2542f` clay). Keep the bright green.
- **Background tone:** `Warm sand #f3ebdd` (default) vs `Soft paper #faf8f3`.
- **Corner style:** `Soft 18px` (default) vs `Sharp 4px`.

## Assets
- Logos already in the repo at `public/`: `linkidink-logo.png`, `dope-logo.svg`, `wer1-logo.svg`, `didx-logo.svg`, `inves-logo.svg`, `frsh-minds-logo.svg`. Remote portfolio logos are in `src/data/portfolio.ts`.
- Heart mark: existing `src/components/HeartMark.tsx` (unchanged).
- Paper-grain texture: existing inline SVG in `body::before` (keep).

### Open questions / placeholders
- The **LinkiDink word-ladder** and **itwyit match-list** mocks are illustrative stand-ins to make the products feel tangible. Replace with real product screenshots or accurate UI before shipping.
- "18 founders" count and the curated logo selection should be confirmed against the live portfolio.

## Files in this bundle
- `Homepage.dc.html` — the full hi-fi homepage prototype (the source of truth for layout/spacing/copy). Best viewed in the design tool; it references a runtime helper, so opening the raw file standalone won't render — use the screenshots or the live preview.
- `Homepage Directions.dc.html` — the exploration canvas (three turns of options that led here), for context on the direction.
- `assets/` — the logo files used by the prototype.
