# Jianan Meng — Portfolio Website

## Context

Jianan wants a new UX/Product Designer portfolio site to replace/rebuild their current one at jiananmeng.design. The new site should showcase their title, a one-line summary, 3-4 case studies (going with all 5 existing ones), an about section, experience, tools/skills, and make the case for why they're hirable. Content below was pulled directly from the existing site (jiananmeng.design) via WebFetch and confirmed/adjusted through Q&A with Jianan. This document is the single source of truth for content and structure before any code is written.

## Site Structure (multi-page, top nav)

**Update:** the homepage is now a book-cover interaction, not a scrolling content page. Structure revised as follows:

- **Home (`/`)** — Book cover only: avatar, name, tagline, "Product Designer" label, on a lavender jacket background matching Jianan's theme swatch. Clicking/tapping triggers a hinge-flip animation, then navigates to `/contents`.
- **Contents (`/contents`)** — The "opened book" landing page: a table-of-contents list linking to Selected Work, About Me, and Experience & Skills, plus the Why Hire Me pitch and footer/contact.
- **Work (`/work`)** — index of all case studies; links out to full pages.
- **Case study pages (`/work/[slug]`)** (5, one per project) — full narrative: role/timeframe, problem/context, process/approach, outcome/metrics.
- **About (`/about`)** — bio blurb only (philosophy, focus areas, personal interests).
- **Experience (`/experience`)** — Experience timeline + Tools/Skills, combined on one page (moved off the homepage per Jianan's request).
- **Contact** — footer section only (email + LinkedIn), no standalone page.

Nav (persistent across all pages): Logo (→ Home) / About / Works / Experience

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

Jianan transitioned from education and QA roles into UX design and research, driven by interests in psychology, color theory, and language.

**Core philosophy:** "Tech should bring people together" — guides their approach to creating meaningful digital experiences that align business objectives with user needs.

**Focus areas:** HealthTech, EdTech, Environment Tech, and technology serving social good.

**Personal interests:** Cafe exploration, fitness, writing, classic blues music, and time with loved ones.

**Skills foundation:** Combines data-driven insights with understanding of user behavior and product strategy.

## Experience (to live on Homepage)

- **UX/Product Designer** — Stealth Startup (Marketplace) | Jun 2025–Present
- **UX Designer/Product Marketing Manager** — Quabble | Dec 2024–Jan 2026
- **Volunteer** — NUX | May 2024–Present
- **UX Researcher/Designer** — Health Innovation Manchester | Sep 2025–Dec 2025
- **UX QA Specialist** — US Tech Startup | Nov 2020–Feb 2023
- **Lecturer** — University of Leeds | Sep 2015–Sep 2020

## Tools & Skills

UX Design, UX Research, UI Design, Product Design, Design Systems, Workshops, Design Sprint, Inclusive Design, Accessibility, User-Centered Design, User Testing, Usability Testing, User Analytics, Leadership, Communication, Collaboration, Growth Mindset, Stakeholder Management

## Why Hire Me

I turn ambiguous, messy problems into shipped products that move real numbers. Across five projects — a two-sided marketplace, a mental wellness app, a lifestyle app, a co-cooking app, and a marketing website — the work consistently drove measurable outcomes: conversion up as much as 23%, task success up as much as 50%, and retention gains across the board.

I work end-to-end: research, IA, wireframes, hi-fi UI, usability testing, and engineering handoff — so I can own a feature from an open question to a developer-ready spec. I've also worked product marketing angles (growth, LTV/CAC, onboarding-to-paid conversion), which means I design with business impact in mind, not just usability.

My throughline is "tech should bring people together" — I care about accessibility and human-centered design as much as the metrics, which shows up in details like voice control for hands-free cooking or a distraction-free wind-down mode for sleep.

(Draft — Jianan to review/adjust tone before publishing.)

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
