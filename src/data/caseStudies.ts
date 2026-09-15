export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  meta?: string;
  summary: string;
  // Short one-line summary shown on the homepage case cards and reused for
  // the "more case studies" cards at the end of each case study — distinct
  // from (and shorter than) `summary`.
  oneLiner: string;
  // What the project IS, shown on the homepage case card as "{title} · {category}".
  category: string;
  // Bold outcome/result line on the homepage case card.
  outcomeStat: string;
  // Small pastel pill tags on the homepage case card.
  tags: string[];
  metricsPreview?: string;
  // Rich case studies (full markdown, replaces problem/process/outcome
  // entirely on the detail page) set `content`. Older, simpler case
  // studies still use the structured fields below.
  content?: string;
  problem?: string;
  process?: string[];
  outcome?: string;
};

// Archived — hidden per Jianan's request in favor of OSDIRE_CONTENT below.
// Not referenced anywhere; kept in case we switch back.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OSDIRE_CONTENT_ARCHIVED_V1 = `
# Reactivating a two-sided marketplace

## Designing the journey from "I need something done" to a successful freelancer hire

**Osdire · Freelance Marketplace**

[HERO IMAGE]

Osdire had built a supply of freelancers before actively growing the buyer side of its marketplace. By the time buyer acquisition started, however, many of those freelancers had become inactive.

That created a classic marketplace problem:

**How might we make new buyer demand easy to act on — so buyers receive meaningful responses and freelancers have a reason to return?**

I designed the end-to-end experience connecting **project creation → freelancer response → negotiation → payment**, rather than treating project posting as an isolated form.

**Role**
Product Designer

**I owned**
Journey mapping · User flows · Interaction design · UI design · Prototyping · Product specifications · Design handoff

**Worked with**
Project Manager · Backend Lead · Engineering · QA

**Timeline**
[Add actual project timeline here]

---

# The problem wasn't really the form

At first glance, the task was straightforward:

> Help buyers post projects.

But an easier posting form wouldn't solve the underlying marketplace problem.

Many buyers knew **what outcome they wanted**, but didn't necessarily know how to turn that into a freelancer-ready brief.

At the same time, freelancers needed enough information to quickly answer:

- Is this project relevant to me?
- Is the budget worth my time?
- Can I deliver what this buyer needs?
- Is it worth spending credits to submit an offer?

A vague project might technically count as a successful post, but if no relevant freelancer responded, **neither side experienced value**.

So I reframed the challenge:

### Instead of optimising for projects posted, optimise for meaningful buyer–freelancer interactions.

---

# Two users. One marketplace loop.

The experience needed to create value for both sides at the same time.

### For buyers

**Goal:** Find someone capable of delivering the outcome they need.

They needed to:

Describe an idea → turn it into a useful brief → receive relevant offers → compare options → agree terms → hire.

### For freelancers

**Goal:** Find opportunities worth pursuing.

They needed to:

Discover a project → judge fit quickly → understand requirements → make a tailored offer → negotiate → win work.

### The product opportunity

The clearer and more actionable buyer demand became, the easier it became for the right freelancer to respond.

That created the loop I wanted the experience to support:

**Clear demand → relevant response → confident negotiation → purchase → marketplace value**

> **Design principle:** A project isn't valuable because it was published. It's valuable when somebody relevant can act on it.

---

# What success would look like

Instead of using registrations, logins or page views as the primary measure of success, I wanted measurement to reflect **value exchanged between both sides of the marketplace**.

### North Star

**Weekly purchased custom offers**

The number of freelancer offers accepted and successfully paid for each week.

### Two signals I'd watch closely

**Project response rate**
How many published projects receive at least one relevant offer within 48 hours?

**Project-to-purchase conversion**
How many published projects eventually become paid work?

Together, these tell us whether we're simply creating more activity — or actually improving marketplace liquidity.

---

# Designing the journey

Working with the Project Manager and Backend Lead, I mapped how actions on one side of the marketplace affected the other.

### Buyer

Draft → Register → Publish → Receive offers → Negotiate → Accept → Pay

### Freelancer

Discover → Assess fit → Create offer → Top up credits if needed → Submit → Negotiate → Receive order

This uncovered something important:

**Project posting was only the beginning of a much larger transaction system.**

The information collected from buyers also needed to support search, filtering, freelancer decision-making, offers, negotiation, payment and eventually order creation.

That changed how I approached the design.

[SHOW JOURNEY / SYSTEM MAP HERE]

---

# Decision 01

## Start with intent, not an intimidating form

A buyer arriving on the platform might have a perfectly clear goal:

> "I need someone to redesign my website."

What they may *not* have is a perfectly written scope, list of deliverables, required skills and project specification.

Starting with a large form would make the buyer do all of that translation themselves.

So I started with one simple question:

### "What do you need to get done?"

From there, buyers could either write the project themselves or use AI to generate a starting brief.

The generated content remained completely editable.

### Why?

I wanted AI to reduce the **blank-page problem**, not take control away from the user.

The buyer still decides what is accurate, what matters and what eventually gets published.

**Trade-off**

AI could accelerate project creation, but generated requirements could also be inaccurate or overly generic.

So instead of automatically publishing AI output, I treated it as **draft assistance**.

[SHOW FIRST-STEP → GENERATED-DRAFT SCREENS HERE]

---

# Decision 02

## Give buyers value before asking them to register

One of the biggest decisions was **when to introduce the sign-up wall**.

The easiest implementation would have been:

**Register → create project → publish**

But that asks someone to make a commitment before they've experienced any value.

Instead, I designed:

**Describe need → build project → register → publish**

Visitors could see their rough idea turn into something that looked like a credible freelancer brief before being asked to create an account.

Registration then had a clear purpose:

### "Your project is ready. Create an account to publish it."

rather than:

### "Create an account before we'll show you anything."

**Hypothesis**

Showing value first should increase the proportion of visitors who progress from starting a project to publishing one.

**What I'd measure**

- Draft → registration conversion
- Registration abandonment
- Registration → publication conversion
- Overall visitor → publication conversion

[SHOW THE SIGN-UP POINT IN THE FLOW HERE]

---

# Decision 03

## Structure the brief for the person on the other side

A completely free-form project description gives buyers flexibility.

But it creates a problem for freelancers.

Important information can be missing, buried or inconsistent — making opportunities difficult to compare and eventually making matching and filtering harder for the platform.

So I structured the brief around three questions:

### What needs to be done?

The project's goal and context.

### What does delivery look like?

Budget · timeframe · deliverables.

### Who is right for the job?

Skills · expertise · experience.

Where consistency mattered, I used structured inputs such as predefined skills, deliverables and budget ranges.

Where context mattered, I kept room for natural language.

### The trade-off

**Too little structure:** easy for buyers, harder for freelancers and matching.

**Too much structure:** better data, exhausting project creation.

The design therefore progressively introduced structure only where it helped the marketplace make a better match.

[SHOW ANNOTATED PROJECT-BRIEF SCREEN HERE]

---

# Decision 04

## An offer isn't an order

Freelance work rarely works like adding a fixed product to a shopping basket.

Scope changes.

Timelines change.

Prices change.

Questions need answering.

So rather than forcing buyers directly from an offer into checkout, I designed **custom offers as negotiable objects**.

A freelancer could propose:

- Scope
- Price
- Delivery timeframe
- Deliverables
- A message explaining their approach

The buyer could then discuss the proposal before committing.

This sounds like a UI decision, but it quickly became a **system-design problem**.

Working with the Backend Lead and Engineering, we needed clear definitions for:

**Project → Offer → Revised offer → Accepted offer → Payment → Order**

Each state changed what the buyer could do, what the freelancer could do and what the system needed to store.

That collaboration helped turn an ambiguous interaction into a transaction model Engineering could reliably build.

[SHOW OFFER + NEGOTIATION + ORDER STATES]

---

# Decision 05

## Keep credit purchasing in the context of the freelancer's goal

Freelancers needed credits to submit custom offers.

That could easily become a disconnected ecommerce journey:

> You don't have enough credits → go buy credits → somehow find your way back.

Instead, I kept credit top-up within the offer journey.

The context remained clear:

**You're buying credits because you're trying to submit this offer.**

After topping up, the freelancer could continue towards the original goal instead of restarting the journey.

More importantly, I wouldn't consider **credit purchases** success on their own.

If people buy credits but don't submit relevant offers or win work, we've monetised friction rather than created marketplace value.

So I treated top-up completion as an intermediate signal, with **offer submission and eventual transactions** as the outcomes that mattered.

[SHOW CREDIT TOP-UP SCREEN HERE]

---

# A product decision I made testable

## Should buyers negotiate with everyone?

Giving buyers unlimited choice sounds positive.

But more choice isn't always better.

If a buyer received many offers, simultaneously negotiating with everyone could create cognitive load, slower decisions and abandoned projects.

So I explored limiting the number of active negotiations.

### Hypothesis

A reasonable limit could help buyers focus on their strongest candidates and reduce time to purchase.

### But there was a risk

Restricting comparison too aggressively might reduce buyer confidence and make the marketplace feel controlling.

Rather than treating either opinion as correct, I framed it as an experiment.

I would compare capped and uncapped experiences using:

- **Negotiation → purchase conversion**
- **Time to purchase**
- **Abandonment after reaching the limit**
- **Average negotiations before purchase**

And I would segment the result by factors such as project value, number of offers received and new vs returning buyers.

The goal wasn't to prove the limit worked.

It was to find the point where **decision support stopped becoming decision restriction**.

---

# The final experience

The final design connected:

**Project idea**

↓
**Structured brief**

↓
**Registration & publication**

↓
**Freelancer discovery**

↓
**Custom offer**

↓
**Credit top-up**

↓
**Negotiation**

↓
**Acceptance & payment**

↓
**Order**

Instead of optimising one screen at a time, I designed the flow as a connected marketplace system.

[USE YOUR STRONGEST FINAL MOCKUPS HERE]

---

# What I delivered

I delivered a developer-ready experience spanning both buyer and freelancer journeys, including:

Project creation and publishing · delayed registration · structured project requirements · custom offers · freelancer credit top-ups · negotiation · payment · transaction states · specifications and handoff.

I also worked with Product and Engineering to make the underlying states and dependencies explicit, so the experience could operate consistently beyond the visible UI.

### The bigger outcome

The project shifted the design focus from:

**"How do we get buyers to post?"**

to:

**"How do we increase the likelihood that buyer demand turns into a meaningful transaction?"**

That distinction shaped everything from the information architecture to the metrics I would use to evaluate the product.

---

# What I'd measure after launch

The most useful funnel would be:

**Project started**

→ Project completed
→ Account created
→ Project published
→ First relevant offer
→ Negotiation started
→ Offer accepted
→ Payment completed

I would pay particular attention to:

### Time to first relevant offer

Because a buyer who waits too long may lose confidence before the marketplace demonstrates value.

### Projects receiving no relevant offers

Because publication without supply-side response is a marketplace failure, even if the buyer flow converted successfully.

### Project-to-purchase conversion

Because this shows whether activity eventually becomes value for both the user and the business.

---

# What I learned

## In a marketplace, one user's activation depends on another user's behaviour.

This project changed how I think about engagement.

A buyer publishing a project looks like activation.

A freelancer logging in looks like activation.

Neither means very much if the two never successfully interact.

The more meaningful unit of value was the **connection between them**.

It also reinforced something I now carry into other product work:

### Define the behaviour you're trying to change before designing the screen.

Once I knew the experience needed to increase relevant buyer–freelancer interactions, individual decisions became easier to evaluate.

Delaying registration wasn't just "better UX."

Structured briefs weren't just "cleaner forms."

Negotiation limits weren't just "simplification."

Each became a hypothesis about how design could move users closer to mutual value.
`;

const OSDIRE_CONTENT = `
# Helping freelancers publish their first service

**Osdire · Freelance Marketplace**

[HERO IMAGE: osdire-hero-new.png]

[META: Role=Product/UX Designer | Period=June 2025–July 2026 | My Contributions=Design system · End-to-end product design, pre- and post-launch | Platforms=Responsive web application | Collaborators=CEO, Marketing, Frontend, Backend and QA | Methods=Funnel analysis, session recordings, think-aloud interviews, journey mapping, prototyping, usability testing and UX QA]

[STATS: 4x = Fourfold increase in successful service publishing]

# Background

Osdire is a two-sided marketplace where everyone starts as a buyer by default and becomes a freelancer by completing onboarding, profile setup, and publishing a first service — a flow I designed end to end. Pre-launch, with much of the backend already defined and engineering protecting scope for a fast MVP ship, I flagged the category-selection step as a friction risk. The team made the reasonable call to ship on schedule and revisit it after launch.

---

# Approach

## 1. Untangled a broken metric before trusting it

Post-launch, the profile-setup step was removed to shorten onboarding — a coordination gap rather than a considered call, since it silently broke the GA event tracking "profile setup completed." Working with marketing, I traced the dead event, cleaned up the reporting, and shifted analysis onto service-publishing data instead, paired with 13 session recordings and a small round of think-aloud interviews with freelancers, arranged quickly through the team's existing marketing relationships since a full research recruitment cycle wasn't realistic on the timeline we had.

## 2. Confirmed the original risk with real evidence

The four-level category hierarchy I'd flagged before launch was, in fact, the single biggest point of loss in the funnel — even among freelancers who'd shown clear intent to publish, more than 40% dropped at this one step. Across the recordings, the same pattern showed up again and again — one user cycled through six different sub-category choices before giving up; several tried to preview later steps to gauge how much more was ahead and, unable to, dropped rather than commit. Metadata options appearing before someone had settled on a category didn't help — they reopened doubt that had only just been resolved.

## 3. Reframed the step, within the same backend constraints

Structural changes to this flow were still off the table, so instead of a classification exercise, Step 1 became an expression one: freelancers describe what they do in a few words first, and the system suggests likely categories from that, rather than asking them to navigate a rigid hierarchy blind. I moved metadata later in the flow so it read as an optional refinement rather than a second category decision, added lighter guidance around the offer title after noticing people treated a first draft title as unexpectedly high-stakes, and closed the rest of the journey with smaller steps and a readiness check instead of an ambiguous submit.

The whole cycle — tracing the broken metric, confirming the real problem, designing and shipping the fix — happened in about a week. The team needed a fast turnaround, not a long research cycle, and that pace is part of the story, not a caveat on it.

**Before:**

Users had to understand the hierarchy before they could categorise their service.

[IMAGE: osdire-category-before-v2.png]

**After:**

Users could begin with the service they already understood, while the interface helped translate it into the platform's structure.

[DEMO: type-and-select]

[IMAGE: osdire-progressive-disclosure.png]

[IMAGE: osdire-writing-support.png]

[IMAGE: osdire-readiness.png]

---

# Outcome

Service publishing increased **fourfold** after release — delivered within about a week of tracing the real problem.

[IMAGE: osdire-outcome-stat.png]

---

# Takeaway

The friction I'd flagged before launch turned out to be real — but proving it meant untangling a broken measurement setup first, and doing it fast enough to matter.

---

# Beyond the redesign

The more durable outcome of this period wasn't the interface fix — it was proposing a weekly sync between engineering, marketing, and design leads, so a coordination gap like the one that broke this flow couldn't happen again without everyone seeing it coming first. That became one of the first real cross-functional habits at the company.

[ICONS: Engineering, Marketing, Design]

Separately, I led discovery for an internal admin platform spanning finance, moderation, marketing, and technical teams — running cross-functional workshops and stakeholder interviews, then using an object-oriented UX approach to model one shared system instead of isolated department screens. It stayed a concept and alignment artifact rather than a shipped product. It's where I learned to model a product as one shared system serving multiple roles and permissions at once, rather than one flow at a time.

---

# My wider contribution to Osdire

This optimisation formed part of a broader product role across the marketplace. I also contributed to:

- Buyer project creation and matching
- Search and service discovery
- Custom offers and negotiation
- Orders and project delivery
- Payments, wallet and billing
- Internal moderation and operational tools

Across these areas, I combined user research, interaction design and product delivery—turning customer and business needs into prioritised workflows, specifications, user stories and testable product behaviour.
`;

const QUABBLE_CONTENT = `
# Helping users reach their aha moment

**Quabble · Mental Wellness App**

[HERO IMAGE: quabble-hero-new.png]

[META: Role=UX Designer / Product Marketer | Period=Dec 2024–Jan 2026 | My Contributions=UX QA · Onboarding & paywall UX design · User research · Growth partnerships · Community content strategy | Platforms=Mobile app | Collaborators=Head of Product, CEO, Visual Design, Content | Methods=UX QA, competitive benchmarking, user interviews, in-app survey design]

[STATS: 80% = of UX audit recommendations adopted | 30% = shipped in later updates | 4.5k = views on Quabbler Stories | 3M+ = organic reach across Quabble's growth efforts]

# Context

Quabble needed new users to feel its value quickly enough to become a paid member, and needed to rely less on expensive acquisition channels to get people in the door in the first place. Those are really two different problems that happened to live in the same company — one about the product, one about growth. I ended up working across both.

---

# Product: closing the value gap

I started with a UX QA pass across the existing app — reviewing journeys the way a user actually experiences them, documenting friction, inconsistency, and moments where the app gave unclear or no feedback, then handing that to the product team to prioritize. Not glamorous work, but it's what turned "this needs a redesign" into a list someone could actually act on.

[SCROLL IMAGE: Recommendations.png]

From there I worked on the UX design of onboarding and the paywall. Rather than guessing at what would convert better, I looked at how comparable products — journaling apps, digital healthcare tools, and Tolan, an AI companion built around emotional connection — introduced their value and built trust before asking for money.

[GALLERY: quabble-research-benchmarking1.png, quabble-research-benchmarking2.png, quabble-research-benchmarking3.png]

We defined Quabble's "aha moment" as finishing a first mind workout, and the onboarding redesign aimed to get people there during onboarding itself, rather than asking them to subscribe on faith first.

[IMAGE: quabble-onboarding-steps-v3.png]

A home-screen widget came out of this same research thread — informed by interviews where I asked users to walk me through how they actually used the app and where they typically opened it from — and contributed to retention.

[IMAGE: quabble-widget-mockup-v3.png]

> Product outcome: 80% of recommendations from the UX QA pass were adopted for consideration by the product team, and about 30% shipped in later updates.

---

# Growth: finding the right people without paying for all of them

In parallel, I was part of the team looking at customer lifetime value against acquisition cost. Early on, I proposed segmenting Quabble's users by how they behaved in the app rather than by demographics — a strong instinct, but one I hadn't backed with research yet. When engineering and the CEO asked how I knew, I didn't have a good answer, and the idea didn't move forward. That pushback is what led to designing an in-app survey in the first place — not to prove my personas right, but to actually find out who our users were instead of guessing. The findings broke an assumption we'd been carrying about our users' age range; they didn't end up validating the original personas, which stayed shelved. Proposing the idea before doing the work to support it meant it never got a fair test — a fix I'd make earlier next time, not just note after the fact.

There was a bigger question underneath the scholarship and partnership work that followed: Quabble wanted mental wellness support to stay accessible to people who needed it but couldn't pay for it, without undermining the case for paying at all. If the free and paid experiences felt too similar, people who could afford to subscribe would have less reason to. So alongside sponsor-funded scholarship memberships and healthcare-provider partnerships that gave people free access, the paid tier needed genuinely distinct features to differentiate itself — aimed at protecting the lifetime value of members who could pay, while keeping the door open for the ones who couldn't.

The piece I'm proudest of is Quabbler Stories, a YouTube series I led where real users shared their own experience with the app, animated by our designer rather than shot as talking-head video. It gave the brand a human voice, and it traveled — clips got reworked for Instagram, and users shared their own stories inside their networks. The series itself reached 4.5k views directly.

[IMAGE: quabbler-stories-playlist-new.png]

[Watch Quabbler Stories →](https://www.youtube.com/watch?v=S78IW-ABwMs&list=PLAwxE-vqQXvGwPnQyutBod2dILfI5EDvh)

> Growth outcome: Quabbler Stories reached 4.5k views. Separately, organic reach across Quabble's combined growth efforts — social marketing, content, and partnerships — passed 3M+ during this period; that figure reflects the wider team's work, mostly led by social marketing, with my content as one contribution to it rather than something I drove.

---

# Takeaway

Working both sides of this taught me to see product experience and growth as one system rather than two separate jobs sitting next to each other. Fixing friction in the app made it easier to trust once someone opened it; the growth work decided who got the chance to open it in the first place. Neither fully explains the other, but neither works as well alone.
`;

const MUDE_CONTENT = `
# Designing a bedtime app that wants you to put your phone down

**Mude · Wind-down app concept**

[HERO IMAGE: mude-hero.png]

[META: Role=UX Researcher / UX Designer | Period=1 month | My Contributions=End-to-end concept design · User research · Interaction design | Platforms=Mobile app | Collaborators=Solo project | Methods=Secondary research, survey, journey mapping, guerrilla usability testing, moderated usability testing, iterative prototyping]

[STATS: 2 = rounds of usability testing overturned a core assumption and reshaped the concept]

# Discover

Bedtime procrastination isn't just poor scheduling — for a lot of people, staying up late is the last bit of personal time they get in a day. I started with secondary research into the causes and severity of the problem, then ran a survey to check what I was finding against real responses, looking at how procrastination correlated with occupation, sleep habits, and stress levels. Students and women showed up as most affected, but the pattern crossed other groups too. The leading driver wasn't really about sleep at all — it was "reclaiming me-time," usually sitting on top of stress or anxiety, with poor control over device use close behind. People already reached for journaling, reading, meditation, and ambient sound to wind down; the question was whether a product could support that instead of getting in the way of it.

---

# Define

I framed the project around two questions: how might we help people feel more present and less stressed during the day, and how might we build a wind-down experience people would actually keep coming back to. Journaling became the core feature — a way to remind people of the moments they'd had, before turning it into something reassuring to close the day on.

I mapped the flow on FigJam to find real entry points — someone experiencing a moment worth recording, snapping a photo, wanting to look back at something, or just starting to wind down — and the points where people would likely drop off: not knowing what to write, deciding something wasn't worth recording, or the whole thing not feeling worth the effort. That shaped a tighter set of design questions, the one that mattered most being how to make Mude the last digital interaction before sleep, not another thing competing for attention.

[DEMO: polaroid-capture]

---

# Ideate & Prototype

I sketched the key screens — home, journaling, a gallery of past entries, and the wind-down flow itself, closing with a "farewell to today" ritual modeled on tearing a page off a calendar. Lo-fi wireframes went into guerrilla testing with 5 users, which surfaced real problems fast: the home screen's date element was more distracting than useful, button placement needed better accessibility, the wind-down screens were too text-heavy to actually feel relaxing, and the farewell page needed to come after the moment review, not before it.

[IMAGE: wireframe-mude.avif]

---

# Test

I built the hi-fi version from that feedback, then ran 3 moderated sessions with follow-up interviews. One question from a participant reshaped the whole product: what happens if I journal about something that annoyed me — wouldn't reading that again right before bed be the opposite of relaxing? That was the real finding. I'd built one feature to hold every kind of entry, assuming reflection was inherently calming. It isn't, if what you're reflecting on is something that upset you. Testing also flagged that the interface felt visually "too rigid," and that a slideshow-style review read as stimulating rather than soothing.

That led to a rebrand and a split: Mood Tracking, to visualize patterns over time, and a separate Emotional Dumpster, for the things people needed to get out but didn't need to see again at bedtime. Only the reflective, positive entries carried into the wind-down review.

[DEMO: mood-concept]

[VIDEO: mude-venting-flow-cropped.mp4]

[DEMO: goodbye-switch]

---

# Outcome

No live users or production data — this was a self-initiated concept. What's real: two rounds of testing that overturned a founding assumption and reshaped the product from a single journaling feature into two distinct ones, based on what actually happened when people used it, not what I'd assumed going in. What's missing: a further round of testing on the rebranded, split version itself. The two-feature split addressed what the second round of testing surfaced, but I never got to validate whether it actually solved the problem for users — that's the natural next step if I picked this project back up.

---

# Takeaway

The best usability test doesn't always validate your design — sometimes it challenges the premise you built the whole thing on. And engagement isn't universally the goal: for a bedtime product, helping someone successfully disengage and put the phone down is the actual win, not keeping them in the app longer.
`;

const FAMCOOK_CONTENT = `
# From group-chat chaos to cooking together

**FamCook · Co-cooking product concept**

[HERO IMAGE: famcook-hero.png]

[META: Role=UX Researcher / UX Designer / UI Designer | Period=3 months (self-initiated / course project) | My Contributions=End-to-end concept design · User research · Visual design & style guide | Platforms=Mobile app (concept) | Collaborators=Solo project — structured critique from 8 design mentors via ADPList | Methods=User interviews, affinity diagramming, competitive analysis, Crazy 8s, lo-fi & hi-fi prototyping, usability testing, mentor critique]

[STATS: 50% = improvement in task success | 30% = increase in user satisfaction]

# Discovery

Picture ten friends over for a housewarming cook-together: coordinating in a group chat, discovering everyone has different dietary needs, and realizing cooking skills vary widely across the group. That's the scenario FamCook started from. I ran 5 user interviews to understand how people actually organize group meals today, pulled out patterns with affinity diagramming, and ran a competitive analysis of what already existed. People cook together in roughly three settings — daily with family, day-to-day with housemates, or one-off gatherings with friends — and most of the friction sat before anyone touched a pan: tracking dietary needs, agreeing on dishes everyone would eat, communicating plans and getting feedback, and making sure the right ingredients were actually in the kitchen.

[IMAGE: famcook-research-themes.png]

---

# Define

There was more here than one project could reasonably solve. I mapped four possible directions — a shareable dietary profile, a recipe generator, a group communication platform, and a co-cooking instruction app — and weighed each against viability, privacy, and how directly it addressed the friction I'd actually heard about. The recipe generator and the communication app were the two directions that held up: together they covered the planning-and-preparation problem without needing a dietary "foodie card" nobody asked for. A co-cooking instruction app stayed on the table as an exploratory direction for later — worth revisiting, but not part of this scope. Accessibility was a concern from the start too — cooking means occupied hands and divided attention, so the interface needed a clear hierarchy that didn't depend on careful scrolling.

[IMAGE: famcook-prioritisation.png]

---

# Develop

I used Crazy 8s to explore layouts fast, built a lo-fi prototype, and tested it with 4 participants. Their feedback reshaped the structure directly: a hamburger menu became widgets, an information card was added to explain ingredients, the calendar came out of the meal plan to cut clutter, and the cooking interface moved from a split screen to a single one, since people didn't actually want to compare two things with their hands full. I then took the design to 8 mentors through ADPList, and the recurring note was blunt — the design was functional, but it didn't hold up against platform conventions and lacked consistency.

[IMAGE: famcook-iteration-comparison.png]

[SPLIT: famcook-cooking-mode.png | The cooking interface moved from a split screen to a single, focused one — with hands full and a pan to watch, comparing two panels wasn't realistic.]

---

# Deliver

That feedback led to real changes, not cosmetic ones. Onboarding swapped a budget question for one about cooking skill, since budget data had no clear use later in the product, with an option to skip and complete it later. The meal plan and to-do list moved to sit pinned above the conversation itself, so a decision didn't get lost three messages later, with quick actions to accept or reject suggestions. And inspiration for what to cook came from three entry points — snapping a photo, picking a mood, or naming an occasion — rather than asking people to browse a generic recipe list.

[SPLIT: famcook-onboarding-confidence.png | Onboarding asks about cooking confidence instead of budget — with an option to skip and come back to it later.]

[SPLIT: famcook-chat-pinned-plan.png | The meal plan and to-do list sit pinned above the conversation, with quick actions to accept or reject suggestions, so a decision doesn't get lost three messages later.]

[GALLERY: famcook-inspiration-mood.png, famcook-inspiration-snap.png, famcook-inspiration-scan.png]

[SPLIT: famcook-home-final.png | The finished home screen — search, mood/occasion/snap entry points, and the group's meal plan, all one tap away.]

---

# Outcome

Task success improved 50% and satisfaction 30% across rounds of usability testing. This was also my first project as a UX researcher/designer, and the biggest lesson wasn't a specific screen — it was learning to prioritize. There were more real problems in this space than one product could fix, and choosing one mattered more than trying to solve all of them at once.

---

# Takeaway

Design for the context, not just the screen — planning dinner on the sofa and cooking with wet hands are not the same interface problem. And structured critique from people who owed me nothing did more to improve the design than another round of internal iteration would have.
`;

const SPIRA9_CONTENT = `
# Designing outside the box while staying inside the template

**Spira9 · Digital Marketing & AI Website Builder**

[HERO IMAGE: spira9-hero-new.png]

[META: Role=UX Designer / UI Designer / UX Writer | Period=4 weeks | My Contributions=Information architecture · Design system · Responsive UI design · UX writing | Platforms=Responsive marketing website | Collaborators=Client team, engineering (dev handoff) | Methods=Market/competitive analysis, IA restructuring, wireframing, prototyping, usability testing, style guide | Outcome=Shipped a responsive marketing site and reusable design system that also showcases the client's own AI website-builder platform]

# The constraint

Spira9 builds AI website-building software, and this project was the company's own marketing site — which meant it had to double as a working showcase of the builder itself. That created an unusual restriction: I could change section backgrounds, add visual guiding elements, and adjust the overall layout orientation, but the underlying structure was fixed by the platform I was designing inside of. The brief wasn't "design freely," it was "design distinctively within a template" — closer to choreographing within a fixed stage than building the stage itself.

---

# Building the system first

I started with market and competitive analysis across digital marketing and AI website-building tools, then rebuilt the information architecture before touching any visual design — deciding what a visitor should understand, and in what order, before colour or layout entered the conversation. I designed in greyscale first, specifically to prove the hierarchy worked without colour doing the work for it; colour went back in afterward to create emphasis, not to compensate for unclear composition.

I also set the style guide — type, colour, components, spacing, responsive rules — before high-fidelity screens multiplied, rather than documenting it retroactively. That decision held up better in principle than in practice: since this was a team effort, the colour palette wasn't followed strictly from the start, and I had to go back and clean up the design system once the drift became visible. The lesson wasn't "build the system first" — I already believed that — it was that a system only holds if everyone building against it treats it as fixed, not a suggestion.

[IMAGE: spira9-style-guide.png]

[IMAGE: spira9-components.png]

---

# The showcase

The result needed to work two ways at once: a marketing site persuasive enough to bring in Spira9's own clients, and a live proof point for what their AI builder could produce. After usability testing and a handoff round with engineering — iterating on what was actually feasible before locking in responsive breakpoints — the site shipped as both.

[GALLERY: spira9-services.png, spira9-mockup-1.png, spira9-mockup-2.png]

[IMAGE: spira9-display.png]

---

# Outcome

Shipped a responsive marketing site and reusable design system that also functions as a live showcase of Spira9's own website-building platform. No conversion-lift numbers are available in the source material — described here by what shipped, not invented metrics.

---

# Takeaway

Constraints tell you where to design — when layout freedom is limited, hierarchy and consistency have to do more work. And a design system isn't real until the whole team is actually building against it, not just referencing it.
`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "osdire",
    title: "Osdire",
    subtitle: "Redesigning freelancer onboarding to unlock marketplace supply",
    role: "Product / UX Designer",
    summary:
      "Freelancers were registering and quietly disappearing — tracing an 80% drop to a category picker nobody could parse, and fixing it.",
    oneLiner: "Optimising freelancer onboarding to unlock market supply",
    category: "Two-sided freelance marketplace",
    outcomeStat: "4x increase in service publishing",
    tags: ["marketplace", "responsive web design", "0-1", "design system"],
    content: OSDIRE_CONTENT,
  },
  {
    slug: "quabble",
    title: "Quabble",
    subtitle: "Improving activation and retention for a mental-wellness app",
    role: "Product / UX Designer",
    summary:
      "A UX audit that expanded into a year of onboarding, paywall and engagement work to help new users reach value sooner.",
    oneLiner:
      "Turning a UX audit into an ongoing activation and retention practice",
    category: "Mental wellness mobile app",
    outcomeStat: "80% of recommendations adopted by the product team",
    tags: ["mental wellness", "mobile app", "audit-led redesign", "experiment design"],
    content: QUABBLE_CONTENT,
  },
  {
    slug: "spira9",
    title: "Spira9",
    subtitle: "Redesigning a conversion website built inside its own AI website builder",
    role: "UX / UI Designer",
    summary:
      "A four-week client project selling Spira9's website-building platform by building the site entirely inside it.",
    oneLiner:
      "A conversion site built on the client's own website-building platform",
    category: "AI website builder & digital marketing",
    outcomeStat: "Shipped: site + reusable design system",
    tags: ["marketing website", "style guide", "client project", "landing page"],
    content: SPIRA9_CONTENT,
  },
  {
    slug: "famcook",
    title: "FamCook",
    subtitle: "A shared meal-planning product for group cooking",
    role: "Product Designer / UX Researcher",
    summary:
      "A self-initiated concept turning dietary chaos and an unanswered group chat into one shared plan, from decision to dinner.",
    oneLiner: "A shared meal-planning product for group cooking",
    category: "A shared cooking experience",
    outcomeStat: "50% improvement in task success across usability testing",
    tags: ["group cooking", "mobile app", "0-1 concept", "prioritization"],
    content: FAMCOOK_CONTENT,
  },
  {
    slug: "mude",
    title: "Mude",
    subtitle: "A wind-down ritual to reduce bedtime procrastination",
    role: "Product Designer / UX Researcher",
    summary:
      "A self-initiated concept testing whether a phone app could actually convince someone to put their phone down before bed.",
    oneLiner: "A bedtime ritual designed to help people put their phone down",
    category: "An app for bedtime procrastination",
    outcomeStat: "2 rounds of usability testing reshaped the core concept",
    tags: ["sleep & wellbeing", "mobile app", "0-1 concept", "usability testing"],
    content: MUDE_CONTENT,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
