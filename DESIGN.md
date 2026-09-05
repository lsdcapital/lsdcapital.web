---
colors:
  primary:
    accent: "#1f9442" # brand green, brightened — LARGE display only (hero word, heart mark). 3.3:1 on paper: passes 3:1 large-text/icon, fails 4.5:1 body
    accent-strong: "#17752f" # functional green for green-on-light TEXT — inline links, cream-on-green button fills. 4.9:1 on paper (AA)
  neutral:
    paper: "#f3ebdd" # warm sand — page background, nav, footer
    surface: "#fcf8f0" # card surfaces (project cards, proof panel)
    cream: "#fbf3e8" # text/elements on dark or accent backgrounds
    ink: "#2a241d" # warm near-black — headings, body, dark blocks
    ink-muted: "#655a4a" # secondary/body text — 5.7:1 on paper (AA)
    faint: "#6f6454" # tertiary labels, eyebrows, meta — 4.9:1 on paper (AA)
    rule: "#e4d9c5" # hairline borders / dividers
  dark-block:
    bg: "#2a241d" # ink used as a surface (closing CTA band, community card, mocks)
    row: "#3a322a" # inner chips on dark panels
    amber: "#a9805a" # small uppercase labels inside dark mocks
    dim: "#6b5f50" # dashed/placeholder borders + connectors on dark
    match: "#e7efe7" # pale green pill background (itwyit "a match")
typography:
  display:
    family: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif'
    weights: [500, 600]
  sans:
    family: '"Hanken Grotesk", ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
  levels:
    hero-h1:
      {
        font: display,
        size: "clamp(40px,6.4vw,80px)",
        weight: 600,
        line: 1.0,
        tracking: "-0.035em",
      }
    cta-h2:
      { font: display, size: "clamp(32px,5vw,56px)", weight: 600, line: 1.05, tracking: "-0.02em" }
    community-h2: { font: display, size: "clamp(28px,4vw,42px)", weight: 600, line: 1.05 }
    section-h2: { font: display, size: "clamp(24px,3vw,30px)", weight: 600, line: 1.1 }
    project-name: { font: display, size: "24px", weight: 600 }
    lead: { font: sans, size: "clamp(17px,2vw,20px)", weight: 400, line: 1.55 }
    body: { font: sans, size: "15.5px", weight: 400, line: 1.55 }
    nav: { font: sans, size: "14.5px", weight: 400 }
    meta: { font: sans, size: "13px", weight: 400 }
spacing:
  container-max: "1180px"
  container-pad: "clamp(20px,5vw,46px)"
  section-y: "clamp(40px,5vw,64px)"
  hero-top: "clamp(48px,8vw,80px)"
  grid: "repeat(auto-fit, minmax(Npx, 1fr))" # N = 300 (projects) / 120 (logos) / 280 (community) / 180 (footer)
rounded:
  card: "18px"
  pill: "999px"
  mock: "16px"
components:
  button-primary:
    { bg: accent, text: cream, radius: pill, pad: "14px 28px", weight: 600, hover: "opacity 0.9" }
  button-ink:
    { bg: ink, text: paper, radius: pill, pad: "10px 20px", weight: 500, hover: "opacity 0.9" }
  chip: { border: "1px rule", radius: pill, pad: "5px 13px", text: faint }
  card: { bg: surface, border: "1px rule", radius: card, pad: "30px", hover-border: faint }
  logo-strip: { filter: "grayscale(1)", opacity: 0.6, height: "24px" }
---

# LSD Capital — Design System

## Overview

Warm, human, editorial-without-the-newspaper. LSD Capital is a tiny product studio that also invests, and the site should feel like a person talking, not a fund presenting. The register is **brand**: the design carries the message. The audience is peers, co-investors, and the curious, so the goal is warmth, trust, and evident craft — calm confidence over volume.

The system is deliberately restrained: a warm sand ground, one brand green that does all the accent work, two grotesque typefaces, generous rounding, and a faint paper grain over everything. Depth comes from hairline borders and warm near-black blocks, never shadow. The warm-sand background is a committed, intentional brand choice (chosen over the older cool-paper look) — treat it as fixed identity, not a default to revisit.

## Colors

Two greens, a warm neutral ramp, and a dark block. The brand green comes in two tuned values so it stays on-brand _and_ accessible: bright `#1f9442` is reserved for **large display and icons** (the hero accent clause, the heart mark) where it only needs the 3:1 large-text/UI bar; the darker `#17752f` (`accent-strong`) carries **green-on-light text** — inline links and cream-on-green button fills — where the full 4.5:1 body bar applies. The neutrals run warm from sand `#f3ebdd` (page) up to surface `#fcf8f0` (cards) and cream `#fbf3e8` (text on dark), down through ink-muted `#655a4a` (body) and faint `#6f6454` (meta) — both darkened to clear AA on the warm grounds while staying warm brown, not gray. Warm near-black ink `#2a241d` is both the primary text colour and the fill for dark blocks (closing CTA band, community card, product mocks). Borders are a single hairline rule `#e4d9c5`.

Green must never be the only signal for meaning — inline links ride with a persistent underline, and green always pairs with text, weight, or position (AA requirement). All body/label text meets 4.5:1; verify any new muted tone against paper `#f3ebdd` before shipping it.

## Typography

A two-grotesque pairing on a display/body contrast axis. **Bricolage Grotesque** (500/600) sets all headings, the wordmark, and project names, with tight `-0.035em` tracking on the large hero scale. **Hanken Grotesk** (400–700) carries body, lead, nav, and meta. The scale runs from the hero `clamp(40px,6.4vw,80px)` down to 13px meta labels; leads sit at `clamp(17px,2vw,20px)`/1.55 and body at 15.5px/1.55. Headings use `text-wrap: balance` where lines wrap. No serif, no third family.

## Layout & Spacing

A single centred column, `max-width: 1180px`, horizontal padding `clamp(20px,5vw,46px)`. Vertical rhythm is `clamp(40px,5vw,64px)` per section (hero top `clamp(48px,8vw,80px)`). Grids are breakpoint-free — `repeat(auto-fit, minmax(Npx, 1fr))` with N tuned per row (300px project cards, 120px logo strip, 280px community, 180px footer) — and everything else scales with `clamp()`. Tailwind responsive variants are used only where an `auto-fit` grid can't express the intent cleanly.

## Elevation & Depth

Flat by design. Hierarchy is conveyed with 1px `rule` borders and background tint (paper → surface → ink), **not** drop shadows. Interactive lift is a border colour shift (rule → faint) or a subtle opacity change on hover. The only "texture" is the fixed paper-grain `body::before` (fractal-noise SVG at 3.5% opacity, multiply blend) that sits under the whole page.

## Shapes

Soft and rounded. Cards and dark panels use an 18px radius; buttons, pills, and chips are fully rounded (999px); inner product mocks use 16px. Corners are never sharp — the softness is part of the warmth.

## Components

- **Buttons** — pill-shaped. Primary is accent-green with cream text (`Start a conversation`); secondary is ink with paper text (`Say hello`). Hover darkens via opacity.
- **Navbar** — sticky, `bg-paper`, bottom rule border, 64px tall; heart mark + wordmark left, muted anchor links centre, ink pill right; warm full-screen mobile menu.
- **ProjectCard** — surface fill, rule border, 18px radius; text column + a small (~130px) illustrative product mock on the right; hover shifts border to faint. (Mocks are placeholders — replace with real product UI before shipping.)
- **Logo strip** — portfolio logos at 24px height, `grayscale(1)` + `opacity: 0.6`, framed top and bottom by rule hairlines.
- **Chips** — rule-bordered pills, faint text, for platform tags (iOS, Android, CLI).
- **Dark CTA band / community card** — full ink block, cream text, green heart mark and green pill CTA.
- **Heart mark** — the brand glyph; green by default, transitions to ink on logo hover.

## Do's and Don'ts

**Do**

- Keep green as the single brand carrier of emphasis; introduce a second accent only with a real reason.
- Keep warmth in the palette, type, and copy — that's where the brand lives.
- Keep the paper-grain texture and the flat, border-based depth.
- Preserve the humble, first-person voice in any new copy.

**Don't**

- Reintroduce serif type, drop-caps, or "Vol. 01 / MMXXVI" masthead motifs — the warm redesign deliberately dropped them.
- Use drop shadows or glassmorphism for elevation.
- Rely on green alone to convey state or meaning.
- Add gradient text, per-section tracked-uppercase eyebrows, or identical repeating card grids.
