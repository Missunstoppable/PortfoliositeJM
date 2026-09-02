@AGENTS.md

# Project: Jianan Meng's Portfolio Site

Next.js (App Router) + TypeScript + Tailwind portfolio for a UX/Product
Designer. Deploy target: **Vercel** (not Framer — Framer can't host this
custom-built app). Domain: purchased on GoDaddy, needs DNS pointed at Vercel
when ready to go live. `metadataBase`/sitemap currently hardcode
`https://jiananmeng.design` as a placeholder — confirm against the real final
domain before launch.

## Design system

- Palette: ivory bg `#FAF6F1`, dusty lavender `#CBB8DA` (Jianan's theme
  color), lavender-soft `#E3D8EA`, terracotta `#E8B8A4`, sage `#A9B79A`,
  plum/text `#453B4A`. Subtle paper-grain texture overlay on `body`.
- Type: Quicksand for headings (`--font-heading`), Lato for body
  (`--font-sans`).
- Custom cursor: a cropped face from the hero illustration
  (`public/cursor-face.png`), small (~33×50px).

## Site structure

- `/` — Hero (avatar + name + tagline) → "Selected work" (horizontal-scroll
  hanging-polaroid gallery: vertical scroll drives horizontal movement while
  the section is pinned, cards sag toward the middle, each shows a photo by
  default and swaps to a lilac+title card on hover) → Tools & Skills (3
  grouped categories) → Experience (timeline) → Why Hire Me.
- `/work` — grid index of all 5 case studies.
- `/work/[slug]` — renders each case study's markdown `content` via
  `CaseStudyMarkdown`.
- `/about` — bio paragraphs + a pull-quote callout.
- Nav: Home / Work / About. Footer: email + LinkedIn.
- **A book-cover-hero concept was tried and explicitly reverted per Jianan's
  request — don't re-suggest it unless asked.**

## Case studies (5 total — mixed real/self-initiated, this matters)

- **Osdire, Quabble, Spira9** — real client/employer work.
- **Mude, FamCook** — Jianan's own self-initiated concept projects.

This distinction governs how we handle missing visual artifacts (Jianan no
longer has access to the original project files):

- **Self-initiated concepts (Mude, FamCook):** fine to build fuller
  illustrative mockups — no real company, no misrepresentation risk.
- **Real client work (Osdire, Quabble, Spira9):** do **not** fabricate
  photorealistic "screenshots" implying they're the actual shipped product —
  that would misrepresent real deliverables. Instead build clearly stylized
  wireframe/diagram-style illustrations (hand-coded HTML/CSS in the site's
  own palette/type, rendered to PNG via a Playwright screenshot). This was
  explicitly agreed with Jianan as the honest approach, tested first on
  Osdire and approved.

Osdire currently has the full artifact treatment (progressive-disclosure
flow, before/after category picker, writing-support and readiness-checklist
diagrams, a "4×" outcome stat tile, and a live animated type-and-select
demo). Same treatment is expected to extend to Quabble next; Spira9 already
has real screenshots from Jianan (hero, page display, service mockups, style
guide, components) wired via `[GALLERY]` markers.

## Case study markdown system

Each case study's body lives as a markdown string (`content` field) in
`src/data/caseStudies.ts`, rendered by `src/components/CaseStudyMarkdown.tsx`
(react-markdown + remark-gfm with custom component overrides). Special
bracket markers on their own line trigger custom rendering — **images
referenced by filename only, resolved against `/public/work/`:**

- `[HERO IMAGE]` / `[HERO IMAGE: file.png]` — top hero image
  (object-cover, top-aligned); no filename → dashed placeholder box.
- `[IMAGE: file.png]` — single full-width image, rounded border.
- `[GALLERY: a.png, b.png, ...]` — responsive 2- or 3-column image grid.
- `[DEMO: name]` — renders a live React component registered in the `DEMOS`
  map in `CaseStudyMarkdown.tsx` (currently only `type-and-select` →
  `TypeAndSelectDemo`). Register new interactive demos there.
- Any other `[bracketed text]` on its own line — generic dashed placeholder
  (used for the original pasted copy's `[SHOW ... HERE]` spots not yet
  built).

Older case studies may still carry the legacy structured fields
(`problem`/`process`/`outcome`) as a fallback path in the `[slug]/page.tsx`
route, but **all 5 case studies currently use the markdown `content` field.**

## Content editing (Jianan can do this directly, no code needed)

- `src/data/content.ts` — Experience, `skillGroups`, `whyHireMe`, `about`.
- `src/data/caseStudies.ts` — per-case-study title/subtitle/role/summary and
  the markdown `content`.
- Hero name/tagline on the homepage is inline in `src/app/page.tsx`.

## Pre-launch hardening already done

- `@vercel/analytics` installed and wired into the root layout.
- `robots.ts`, `sitemap.ts`, `opengraph-image.png`, `twitter-image.png`,
  and a generated favicon/`icon.png` (cropped from the hero avatar) are in
  place.
- Security headers set in `next.config.ts` (X-Content-Type-Options,
  X-Frame-Options, Referrer-Policy, Permissions-Policy). CSP uses
  `'unsafe-inline'` for `script-src`/`style-src` **deliberately** — a
  stricter nonce-based CSP via `middleware.ts` was tried and broke Next.js's
  own hydration site-wide (inline RSC scripts need a nonce or unsafe-inline).
  Don't re-attempt a strict CSP without testing both dev *and* prod modes,
  and accounting for Vercel Analytics' dev-mode script + React's dev-mode
  `eval()`.

## Environment / workflow gotchas (this machine)

- Node.js, ImageMagick, and Playwright's Chromium are **not** pre-installed —
  install via Homebrew / `npm install --no-save playwright-core` +
  `npx playwright install chromium` as needed.
- Chromium binary path for Playwright scripts:
  `~/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`.
- Dev/prod server processes from earlier turns can linger on port 3000 and
  serve a stale build — `lsof -ti:3000 | xargs -r kill -9` before trusting a
  "ready" check if something seems inexplicably broken.
- `npm run dev` does **not** hot-reload `next.config.ts` or `middleware.ts` —
  restart the server after editing either.
- Next's image optimizer caches aggressively — `rm -rf .next/cache/images`
  when testing an image swap under the same filename.
- If Jianan reports an image "hasn't updated" under an unchanged filename,
  compare the file's md5 against `git show HEAD:<path> | md5` before assuming
  it's a caching bug — sometimes the file on disk genuinely didn't change.
- Diagram/artifact workflow: build as a standalone HTML file in the
  scratchpad → render via a short Playwright script run **from the project
  directory** (module resolution needs it) → inspect via Read → copy into
  `public/work/` → wire into the markdown content.

## spec.md

A living project spec at the repo root, useful for the original content
decisions but has drifted behind later pivots (book-cover revert, case study
rewrites, generated artifacts). Treat CLAUDE.md as the current source of
truth for structure/decisions; spec.md may need a refresh or retirement.
