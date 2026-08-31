# Jianan Meng — Portfolio Website

## Context

Jianan wants a new UX/Product Designer portfolio site to replace/rebuild their current one at jiananmeng.design. The new site should showcase their title, a one-line summary, 3-4 case studies (going with all 5 existing ones), an about section, experience, tools/skills, and make the case for why they're hirable. Content below was pulled directly from the existing site (jiananmeng.design) via WebFetch and confirmed/adjusted through Q&A with Jianan. This document is the single source of truth for content and structure before any code is written.

## Site Structure (multi-page, top nav)

**Update:** the book-cover idea was tried and then dropped. The homepage is back to a single scrolling page, with the case study previews reworked into a horizontal-scroll "hanging polaroids" section. Current structure:

- **Home (`/`)** — single scrolling page:
  - Hero: avatar illustration, name, title, one-line tagline
  - Selected work: 5 case studies shown as polaroid photos that appear to hang from a line, each at a slightly different height (lower toward the middle, like a sagging string) and a slight rotation. While this section is in view, vertical scroll input drives a horizontal scroll through all 5 cards (pinned/sticky section); once the last card is reached, normal vertical scrolling resumes. Each card is clickable, linking to its full case study page. Falls back to a plain horizontally-scrollable strip when `prefers-reduced-motion` is set.
  - Tools & skills
  - Experience (timeline)
  - Why Hire Me
- **Work (`/work`)** — index of all case studies (grid of cards); links out to full pages.
- **Case study pages (`/work/[slug]`)** (5, one per project) — full narrative: role/timeframe, problem/context, process/approach, outcome/metrics.
- **About (`/about`)** — bio blurb only (philosophy, focus areas, personal interests).
- **Contact** — footer section only (email + LinkedIn), no standalone page.

Nav (persistent across all pages): Logo (→ Home) / Home / Work / About

(Note: an earlier iteration tried a book-cover hero with a separate `/contents` and `/experience` page — this was reverted per Jianan's follow-up request and those routes were removed.)

## Visual & Tech Direction

- **Style:** Minimal & clean — whitespace-driven, typography-led, calm — with a cozy, textured paper feel (not stark/cold minimal)
- **Tech stack:** React/Next.js
- **Hosting:** Vercel (native Next.js support, git-based deploys, free tier fits a portfolio site)
- **Case study format:** Full dedicated pages per project

### Color Palette
- Background: warm ivory `#FAF6F1`
- Primary (Jianan's theme color): dusty lavender `#CBB8DA`
- Accent (cozy warmth): soft terracotta/blush `#E8B8A4`
- Text / deep accent: warm plum-charcoal `#453B4A`
- Optional highlight note: muted sage `#A9B79A` (tags, hover states)

### Typography
- Headings: Quicksand (medium/semibold) — rounded, friendly, classy at larger sizes
- Body: Lato (regular/light) — clean, highly legible, pairs well with Quicksand's geometric shapes

### Texture
- Subtle paper-grain texture (matching Jianan's reference swatch) as a low-opacity background layer, applied carefully to preserve text contrast and performance

## Hero Section

- **Name:** Jianan Meng
- **Title:** Product Designer | UX Designer
- **Tagline:** "Product Designer turning complex journeys into clear, simple, measurable and ultimately HUMAN product experiences."
- **Photo:** Jianan provided an illustrated avatar (hand-drawn style character) to use in the hero instead of a photo

## About / Bio

**Final content (`src/data/content.ts` → `about`):**

Hi, I'm Jianan — a Product Designer who enjoys turning messy problems into products that feel surprisingly simple.

My route into design hasn't been completely linear. Before becoming a Product Designer, I worked across customer success, UX QA, product marketing and growth. It means I learned to understand products not only from the perspective of the person designing them, but also the people using them, selling them, supporting them and building them.

Today, I work across the full product design process — from discovery and research through to interaction design, testing, delivery and post-launch optimisation.

I'm particularly interested in the space where user needs, product strategy and data meet. I like asking what users are trying to accomplish, understanding what matters to the business, and finding the product experience that makes both sides work.

I've worked on products including freelance marketplaces, mental-wellness experiences and early-stage digital platforms, often in environments where there isn't a perfectly defined brief waiting for me.

And that's probably my favourite kind of problem.

**Pull-quote (highlighted on the page):** "Give me an ambiguous challenge, some users to talk to, a few behavioural clues and a Figma file — and I'm very happy."

Outside of designing interfaces, I'm increasingly interested in AI products, responsible technology and how emerging technology can solve meaningful human problems without creating ten new ones along the way.

## Experience (to live on Homepage)

- **UX/Product Designer** — Stealth Startup (Marketplace) | Jun 2025–Present
- **UX Designer/Product Marketing Manager** — Quabble | Dec 2024–Jan 2026
- **Volunteer** — NUX | May 2024–Present
- **UX Researcher/Designer** — Health Innovation Manchester | Sep 2025–Dec 2025
- **UX QA Specialist** — US Tech Startup | Nov 2020–Feb 2023
- **Lecturer** — University of Leeds | Sep 2015–Sep 2020

## Tools & Skills

Grouped into three categories on the homepage (`src/data/content.ts` → `skillGroups`):

- **Product Design:** User Research, Product Discovery, UX Strategy, Journey Mapping, Information Architecture, Wireframing, Prototyping, Interaction Design, Usability Testing, Design Systems, Accessibility, UX QA
- **Product Thinking:** Problem Framing, Hypothesis Building, MVP Definition, Feature Prioritisation, RICE, User Stories, Acceptance Criteria, Roadmapping, Experimentation, Agile Delivery
- **Data & Optimisation:** Google Analytics, Microsoft Clarity, Funnel Analysis, Behavioural Insights, A/B Testing, North Star Metrics, Activation & Retention

## Why Hire Me

**Final content** (homepage, structured as intro → a short list of questions → outro → closing line):

I don't just make things look nice.

Although I do, in fact, enjoy making things look nice.

I like figuring out why something should exist, who it should help, and whether it actually worked after we shipped it.

I'm the designer who will happily jump between a Figma file, a user interview, an analytics dashboard and a Jira ticket without having an identity crisis.

I ask a lot of questions — usually useful ones:

- What problem are we actually solving?
- What evidence do we have?
- What's the simplest version worth building?
- And what are users going to do when they inevitably ignore the button we thought was obvious?

My background spans product design, UX research, growth experimentation, UX QA and customer-facing roles, so I tend to see products from more than one angle.

I care about the tiny interaction that frustrates one user and the bigger product decision affecting thousands.

**In short:** I design with users, think with product, collaborate with engineers, and keep one eye on the metrics.

## Contact

- **Email:** meng_jianan@yahoo.com (confirmed by Jianan — note: differs from the old site's listed email gbabarogic@gmail.com)
- **LinkedIn:** https://www.linkedin.com/in/jianan-meng-190264145/

## Case Studies (all 5, full pages)

### 1. Osdire — Freelance Marketplace
**Role:** Product Designer | **Collaborators:** PM, Backend Lead, Engineering, QA
**Scope:** Journey mapping, user flows, interaction design, UI design, prototyping, product specs & handoff

**Problem/Context:** Osdire faced a marketplace-liquidity problem — supply-side (freelancer) growth outpaced buyer acquisition, leaving freelancers inactive, buyers facing slow responses, and trust eroding. Core friction: buyers struggled converting goals into clear briefs from a blank form; vague requirements hurt freelancer assessment and offer quality.

**Process/Approach:**
1. Reduced startup effort — opens with "What do you need to get done?"; buyers draft briefs manually or from editable AI-generated starting points.
2. Structured briefs around three questions: scope, budget/timeframe/deliverables, required skills/experience.
3. Delayed registration until after drafting, to demonstrate value before requiring commitment.
4. Connected credits to offers — freelancers top up credits before submitting tailored offers (scope, price, timeframe, messaging).
5. Added negotiation states allowing clarification before offers became orders.

**Metrics:** North star = weekly purchased custom offers. Primary: project-to-purchase conversion rate, project response rate (offers within 48h). Supporting: draft completion, sign-up abandonment, offer-to-negotiation conversion, checkout completion, time to first offer, quality indicators.

**Outcome:** Weekly Signup ↑23%, User Engagement ↑37%. Unified drafting, registration, publishing, discovery, offers, credit purchasing, negotiation, and payment into one developer-ready journey.

---

### 2. Quabble — Mental Wellness App
**Role:** Product Marketer | UX Designer

**Problem/Context:** Needed to demonstrate value early to convert users to paid membership while reducing reliance on costly acquisition channels.

**Process/Approach:** UX QA audit across the app; researched onboarding/monetization patterns across mental-wellness, journaling, healthcare, and AI companion products; ran an in-app survey on motivations/outcomes/features/engagement; redesigned onboarding to demonstrate value before the paywall; explored partnership-led growth (scholarship memberships, healthcare providers); led "Quabbler Stories" YouTube series; investigated LTV vs. CAC.

**Outcome:** Organic reach 3M+. Documented friction points, value-led onboarding approach, refreshed audience understanding, clarified acquisition priorities, explored partnership channels, established community-driven storytelling.

---

### 3. Mude — Bedtime Procrastination App
**Role:** UX Researcher, UX Designer | **Timeframe:** 1 month | **Type:** Self-initiated

**Problem/Context:** Bedtime procrastination, especially among students and women — driven by stress-based "reclaiming me-time" and excessive device use, leading to sleep deprivation, emotional dysregulation, and health issues. Goal: help users recognize daily achievements and feel present/fulfilled leading up to bedtime, in a mindful, distraction-free way.

**Process/Approach:** Secondary research + survey; identified journaling as a lever; user flow mapping; wireframes and lo-fi prototype; guerrilla testing (5 users); hi-fi iteration; moderated testing (3 participants) + follow-up interviews. Key features: AI-generated journaling prompts, "page-tear ritual" farewell mechanism, mood tracking visualization, "emotional dumpster," wind-down interface, "Sleep Mode."

**Outcome:** New user adoption ↑35%, retention ↑25%, user satisfaction ↑30%, task success ↑40%.

---

### 4. FamCook — Co-Cooking App
**Role:** UX Researcher, UX Designer, UI Designer | **Timeframe:** 3 months | **Type:** Self-initiated / course project

**Problem/Context:** How to organize group cooking for friends with varying dietary needs and skill levels. Research question: "How might we design a collaborative cooking experience that reduces friction in planning and preparation, while fostering enjoyment and connection?"

**Process/Approach:** 5 user interviews on group meal organization; affinity diagramming; competitive analysis; identified pain points across pre-cooking/during-cooking/post-cooking. Crazy Eights wireframing; lo-fi prototype; usability testing (4 participants); feedback from 8 ADP List mentors; hi-fi design with style guide. Key decisions: replaced hamburger menu with widgets, removed calendar clutter, single-screen cooking interface, personalized recommendations, "inspiration by mood/flavour," skills-based onboarding (replacing budget focus). Accessibility emphasis: clear visual hierarchy, voice-control option for hands-free use while cooking.

**Outcome:** Task success ↑50%, user satisfaction/engagement ↑30%.

---

### 5. Spira9 — Digital Marketing Website (AI Website Builder)
**Role:** UX Designer, UX Writer, UI Designer | **Timeframe:** 4 weeks

**Problem/Context:** Spira9 needed a site serving as both company storefront and showcase for its AI website-builder product. Existing site was cluttered, vaguely structured, poor navigation, high bounce rate, low engagement, weak mobile responsiveness.

**Process/Approach:** Reviewed briefs for brand identity/mission/goals; market/competitive analysis; restructured IA and navigation; lo-fi wireframes → hi-fi interactive prototypes; usability testing and iteration; engineering handoff on feasibility/responsive breakpoints; established visual style guide (color, typography, iconography) — deliberately limited color use for a cleaner look given AI-template constraints.

**Outcome:** Conversion ↑20% (site notes ↑22% in one place), session duration ↑30%, pages per visit ↑35%.

## Open Items Before Build

- Jianan to review/adjust tone of "Why Hire Me" draft above before publishing
- Visual details: color palette, font choices — still open within "minimal & clean" direction
