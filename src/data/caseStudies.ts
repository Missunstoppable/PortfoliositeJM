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

## Mude — a behavioural design exploration into bedtime procrastination

[HERO IMAGE: mude-hero.png]

[META: Project=Self-initiated product concept | Role=Product Designer / UX Researcher | Timeline=1 month | Methods=Secondary research · Survey · Journey mapping · Prototyping · 5 guerrilla usability tests · 3 moderated usability tests · Iteration]

We've probably all done it.

You're tired. You know you should sleep. Tomorrow-you would very much appreciate it.

And yet somehow you're still scrolling at 12:47am.

Mude is a self-initiated product concept exploring **bedtime procrastination** — the gap between intending to go to bed and actually doing it.

The challenge wasn't simply:

**How do I help people sleep?**

It was:

### How might a digital product help people emotionally wind down and leave their phone — without becoming another reason to stay on it?

---

# The 30-second version

### Problem

People sometimes delay bedtime even when they intend to sleep, often filling that time with digital activities.

### Insight

Going to bed isn't only a scheduling problem. For some people, staying awake provides a final period of personal time or emotional decompression after the day.

### Design response

I explored a short ritual built around capturing meaningful moments, reflecting on the day and then deliberately **ending the digital interaction**.

### What testing changed

My original assumption that journaling was inherently calming was wrong.

Users pointed out that revisiting a frustrating or upsetting journal entry before bed could do exactly the opposite.

That changed the product.

---

# I started with the behaviour, not an app idea

I wanted to understand why someone who *wanted* to sleep would repeatedly choose not to.

My exploratory research combined secondary research with a survey examining bedtime habits, stress, digital behaviour and activities people already found helpful before bed.

The research pointed towards a more interesting problem than poor time management.

Bedtime procrastination could represent an **intention–behaviour gap**.

Someone might understand perfectly well that sleep is important while still choosing the immediate reward of another episode, another video or a little more personal time.

So instead of designing another app that said:

> "It's bedtime. Go to sleep."

I became interested in the **transition between being active and being ready to stop**.

That became the product opportunity.

---

# The core tension

## How do you use a phone to help someone stop using their phone?

This became the most important constraint in the project.

Most digital products are designed around engagement:

**Open → interact → discover more → come back**

That felt wrong here.

If Mude succeeded by increasing minutes spent in the app, it could actually be making the original problem worse.

So I defined a different design principle:

### Mude should earn a few intentional minutes of attention, then give the user's attention back.

That meant avoiding infinite content, unnecessary browsing and interactions designed purely to prolong engagement.

The experience needed an ending.

[IMAGE: wireframe-mude.avif]

---

# Research helped me narrow the behaviour

My initial exploration generated plenty of possible features:

journaling, mood tracking, sleep tracking, galleries, personalised prompts, achievements, environmental recommendations, reminders, integrations and more.

[DEMO: mood-concept]

But a one-month concept did not need to become an entire wellness ecosystem.

I narrowed the core experience to three behaviours:

### Notice

Capture small moments during the day before they're forgotten.

### Reflect

Return to selected moments as part of a short bedtime ritual.

### Switch off

Create a clear ending that encourages the user to leave the digital environment.

This gave me a much simpler product loop:

**Notice during the day → Reflect at night → Say goodbye to today → Switch off**

---

# Decision 01

## Don't make users become poets before bed

Journaling sounded useful in theory.

In practice, it creates a very obvious problem:

### "What am I supposed to write?"

My early journey mapping identified the blank page as a likely drop-off point. If reflection started to feel like homework, it wouldn't make a convincing bedtime ritual.

So I explored multiple low-effort ways to capture something:

- A short note.
- A photo.
- A voice entry.
- A lightweight prompt.

The goal wasn't to produce a perfect journal entry.

It was to help someone notice:

**"That was a nice part of my day."**

Prompts could help when people were stuck, but users always retained control over what they recorded.

[DEMO: polaroid-capture]

---

# Decision 02

## Capture moments when they happen — not only when you're already tired

Originally, I thought about Mude mainly as something people would use at bedtime.

Mapping the journey changed that.

Meaningful moments happen throughout the day.

If users were expected to reconstruct everything at 11pm, they would have to remember what happened, decide what mattered and then write about it when they were already tired.

So I introduced multiple entry points.

Someone could quickly capture a moment during the day and return to it later during their wind-down.

That divided the cognitive work:

**Daytime:** notice.

**Bedtime:** reflect.

The bedtime experience could therefore remain lighter and calmer.

---

# Decision 03

## Make wind-down a ritual, not another content feed

I wanted the evening interaction to feel deliberately different from the products users might have been scrolling moments earlier.

Instead of an endless feed, Mude had a finite sequence.

The user could prepare their environment, revisit selected moments and move towards a deliberate ending.

One interaction I explored was a **"goodbye to today"** ritual inspired by tearing a page from a calendar.

It gave an abstract action — finishing the day — a visible moment of closure.

The interaction wasn't there just to create delight.

It communicated:

### Today is finished. You don't need to keep doing things.

---

# Then users challenged my biggest assumption

After creating the first high-fidelity prototype, I ran three moderated usability-testing sessions with follow-up interviews.

And one participant asked a question that changed the direction of the project:

### "What if I write about something that annoyed me?"

I had assumed that journaling followed by reflection would create a reassuring wind-down.

But journaling isn't automatically positive.

Someone might use it to process:

an argument,
a stressful meeting,
anxiety about tomorrow,
or something they were angry about.

Automatically resurfacing that entry just before sleep could be the opposite of calming.

It exposed an important flaw in my original concept:

### Capturing an emotion and reliving an emotion are not the same user need.

That was more useful than a participant simply telling me they liked the prototype.

---

# Decision 04

## Separate "things I want to remember" from "things I need to let out"

Instead of abandoning journaling, I reconsidered the role different entries should play.

Some moments are worth revisiting:

- A good meal.
- Something funny a friend said.
- Finishing something difficult.
- A small thing you're grateful for.

Other thoughts may simply need somewhere to go.

So I explored separating **positive reflection** from **emotional release**.

Content intended as an outlet didn't need to automatically return during the bedtime recap.

This gave the user more control over their emotional experience and challenged my earlier assumption that more personalisation or more resurfaced content was necessarily better.

The lesson was simple:

### Don't optimise an experience around the happy path of someone's emotions.

[DEMO: vent-release]

---

# Testing also made the experience quieter

The first round of guerrilla testing with five participants exposed several more practical problems.

My opening screen felt redundant.

Some button choices needed better accessibility.

The wind-down flow contained too much text.

And parts of the sequence felt more like using an app than winding down from one.

The second testing round challenged the visual experience further.

Participants questioned whether the interface felt sufficiently calming, and some found the slideshow-style playback potentially more stimulating than relaxing.

So I reduced unnecessary content and reconsidered motion, visual density and the sequence of the experience.

The objective wasn't:

**"How can I make this more impressive?"**

It became:

### "What can I remove?"

---

# Decision 05

## Design a finish line

A bedtime product needs something most apps actively avoid:

### a reason to leave.

So the final part of Mude deliberately closes the interaction.

After reflection and the goodbye ritual, the interface transitions towards **Switch Off**.

Rather than suggesting another activity or presenting more content, the experience encourages the user to put the device down and can connect with the phone's Sleep / Do Not Disturb mode.

There is no infinite feed waiting underneath.

No "you might also like…"

No streak demanding one more action.

Because, in this context:

### Closing the app can be a successful conversion.

[DEMO: goodbye-switch]

---

# The final concept

Mude became a three-part experience.

### 01 — Notice

Capture meaningful moments throughout the day with minimal effort.

### 02 — Wind down

Revisit selected positive moments through a short, finite bedtime ritual.

### 03 — Switch off

Mark the end of the day and deliberately leave the digital environment.

The product isn't intended to diagnose or treat sleep disorders.

It's a behavioural design exploration around a narrower question:

### Can we make the transition from "one more thing" to "I'm done for today" a little easier?

---

# What did I actually validate?

Because this was a **self-initiated prototype**, I did not have a live product, production analytics or a large enough sample to claim improvements in retention or sleep.

What I could evaluate was the design itself.

Across two rounds of testing, I identified issues with:

navigation, accessibility, information density, interaction sequencing, emotional assumptions and the overall wind-down concept.

Most importantly, testing invalidated part of my original hypothesis about journaling and led me to change the product model.

For this project, that is the outcome I would stand behind:

### I finished with a better problem definition than the one I started with.

---

# If Mude were shipped, what would success mean?

Traditional engagement metrics could be misleading here.

More sessions and more screen time might actually indicate a worse outcome.

Instead, I would evaluate whether Mude helps users follow through on their own bedtime intention.

A primary behavioural signal could be:

### Intended-bedtime adherence

How often does a user finish their wind-down close to the bedtime they set for themselves?

I would support that with:

**Wind-down completion** — Do users reach the intentional Switch Off moment?

**Time to switch off** — Does the ritual remain short rather than becoming another prolonged activity?

**Repeat voluntary use** — Do people find the routine useful enough to return to over time?

**Self-reported calmness** — Do users feel more ready to disengage after the ritual?

**Post-routine screen behaviour** — With appropriate permission, do users actually leave their device after finishing?

Sleep quality could be explored as a longer-term self-reported outcome, but I would not claim that Mude caused improved sleep without substantially stronger research.

---

# What I wouldn't build yet

This project originally generated ideas around AI-generated content, sleep tracking, wearables, achievements, social features and deeper personalisation.

I wouldn't prioritise those next.

Not until the core behaviour works.

Before increasing scope, I would want to answer:

### Do people actually find the Notice → Reflect → Switch Off ritual useful enough to repeat?

Only then would I decide which additional capabilities genuinely strengthen that behaviour.

---

# What I learned

## The best usability test doesn't always validate your design.

The most valuable feedback I received wasn't:

> "I couldn't find this button."

It was a question that challenged the premise of the experience.

That reminded me that testing isn't just about checking whether users can operate a solution.

It's also an opportunity to ask whether the solution **should work that way at all**.

---

## User engagement isn't universally good.

Mude also changed how I think about product metrics.

For many digital products, longer sessions can look positive.

For a bedtime product, they could represent failure.

Good product design means defining success around the **user's goal**, not automatically around more product usage.

Sometimes the best thing your product can help someone do is:

### leave.
`;

const FAMCOOK_CONTENT = `
# From group-chat chaos to cooking together

## Designing a shared cooking experience around different diets, skills and very busy hands

**FamCook · Self-initiated product concept**

[HERO IMAGE: famcook-hero.png]

[META: Project=Self-initiated concept | Role=Product Designer / UX Researcher | Timeline=3 months | Methods=User interviews · Competitive analysis · Journey mapping · Prioritisation · Wireframing · Prototyping · Usability testing · Interaction design · Visual design]

Cooking together sounds simple.

Pick a recipe. Buy some ingredients. Cook. Eat.

Add eight friends, three dietary requirements, different cooking abilities and a group chat where nobody answers the actual question, and suddenly dinner starts looking suspiciously like project management.

FamCook is a self-initiated concept exploring how digital products could make **planning and cooking a shared meal easier — without taking the social part out of it.**

The challenge became:

### How might we reduce the coordination around cooking together, so people can spend more time actually enjoying it?

---

# The 30-second version

### Problem

Cooking together creates coordination work before anyone even reaches the kitchen: agreeing on dishes, accommodating dietary needs, planning ingredients and understanding who can do what.

### Research insight

Most of the friction participants described happened **before cooking**, while the problems during cooking were more about attention, coordination and differing levels of confidence.

### Product decision

Rather than building a giant cooking super-app, I focused FamCook around a shared meal plan that connects **decision-making, preparation and cooking**.

### What testing changed

Testing pushed me to reduce navigation, simplify the meal plan and rethink how information should be presented when users are actively cooking.

### Biggest lesson

The hardest part of this project wasn't generating ideas.

It was deciding what **not** to build.

---

# Cooking was only half the problem

I started by interviewing five people about how they cooked with partners, housemates, family members and groups of friends.

The conversations uncovered problems throughout the journey.

### Before cooking

People had to:

remember everyone's dietary requirements, agree on dishes, share ideas, buy the right ingredients, and coordinate the plan.

### During cooking

Different skill levels became more noticeable.

Tasks were forgotten.

People worked at different speeds.

And when several dishes were happening simultaneously, the kitchen could become stressful surprisingly quickly.

### Afterwards

Even dinner wasn't quite the end.

There might still be payment and cleanup to organise.

The initial research gave me plenty of potential problems.

Possibly too many.

[IMAGE: famcook-research-themes.png]

---

# The first real design challenge

## I had enough ideas to build five different apps

My early exploration generated several possible directions.

### A dietary profile

A reusable profile containing allergies, preferences and dietary requirements.

### A recipe generator

Recommend meals based on the group, occasion, ingredients and restrictions.

### A meal-planning space

Help people propose dishes, discuss options and organise preparation.

### A live co-cooking experience

Coordinate people while multiple dishes are being prepared.

All of them could solve genuine problems.

Trying to build all of them would solve another problem:

### how to create a very bloated product.

So I evaluated the directions based on the research, usefulness across different cooking situations and feasibility within the project.

I chose to concentrate on:

## Shared planning + communication + coordinated cooking

because it addressed several of the highest-frequency problems without requiring FamCook to become a recipe platform, social network and kitchen operating system simultaneously.

[IMAGE: famcook-prioritisation.png]

---

# Decision 01

## Don't build another group chat

At first, communication looked like an obvious feature.

People already organise meals through WhatsApp, Messenger and other group chats.

So simply putting chat inside FamCook wouldn't create much value.

The real problem was that **important decisions disappear inside conversation**.

Someone suggests lasagne.

Someone else says they're dairy-free.

Three messages later somebody sends a meme.

By tomorrow nobody remembers whether lasagne was actually agreed.

So I designed the shared meal plan as the persistent layer above conversation.

Instead of forcing users to search through messages, key information could stay visible:

**What are we making?**

**What still needs deciding?**

**What do we need to buy?**

**Who's doing what?**

Conversation could support decisions without becoming the place where those decisions were stored.

[SPLIT: famcook-chat-pinned-plan.png | The shared meal plan sits pinned above the conversation as a persistent layer — what's been decided, what's still open, and what to buy stay visible without digging back through messages to find them.]

---

# Decision 02

## Treat dietary information as group context, not someone's problem to remember

Dietary requirements were one of the clearest planning frustrations from the interviews.

In real life, responsibility often falls on one organiser:

> "Was Sam vegetarian or vegan?"

> "Who couldn't have nuts?"

> "Can everyone eat this?"

I didn't want the product to rely on one person's memory.

FamCook therefore explored ways for dietary preferences and restrictions to become **shared context for the meal**.

That information could influence the dishes being considered and help the group spot conflicts earlier — before ingredients had been purchased or cooking had started.

The goal wasn't to replace proper allergen checking.

It was to reduce avoidable coordination mistakes.

[GALLERY: famcook-diet-selection.png, famcook-meal-plan-connection.png]

---

# Decision 03

## Help the group decide without forcing them to start with a recipe

Another problem surfaced around the question:

### "What should we cook?"

Sometimes people know exactly what they want.

Sometimes the conversation is:

> "Something comforting?"

> "Maybe Asian?"

> "Not spicy."

> "I've got mushrooms."

A traditional recipe search assumes the user already knows what they're looking for.

I explored several lower-effort inspiration entry points:

### Mood

What kind of food do we feel like eating?

### Occasion

What are we cooking for?

### Snap

What ingredients do we already have?

The idea wasn't to create another giant recipe catalogue.

It was to help a group move from **vague intention → viable meal idea** with less negotiation.

[GALLERY: famcook-inspiration-mood.png, famcook-inspiration-snap.png, famcook-inspiration-scan.png]

---

# Decision 04

## Designing for someone holding a spatula is different

The context changed dramatically once cooking started.

Users aren't calmly sitting at a desk.

They're reading instructions, handling ingredients, watching pans, talking to other people, moving around the kitchen, and possibly wondering why the rice is burning.

That made **attention** one of the most important design constraints.

Anything requiring precise taps, repeated scrolling or dense reading became more expensive during cooking.

So I started treating the cooking interface as a different mode of use.

### Bigger priorities.

### Less information at once.

### Clearer hierarchy.

### Fewer interactions.

I also considered hands-free interaction and voice controls because the problem isn't merely accessibility in the traditional sense.

Sometimes the user literally has chicken on their hands.

[SPLIT: famcook-cooking-mode.png | Bigger priorities, less information at once, and a clearer hierarchy — designed for someone who's reading instructions, watching a pan, and possibly holding a knife, all at the same time.]

---

# Decision 05

## One screen beat two

My initial co-cooking interface divided information across a split-screen experience.

On paper, it allowed more information to remain visible.

During testing, however, the extra information increased complexity.

So I changed the experience to a **single-screen cooking view**.

Instead of maximising how much information was available, I prioritised what users needed **right now**.

This became an important lesson in contextual interface design:

### Information can be useful and still not deserve to be visible.

When someone's attention is already divided, simplicity isn't just aesthetic.

It's functional.

[IMAGE: famcook-split-single-compare.png]

---

# Testing the first model

I tested the low-fidelity prototype with four participants.

The sessions highlighted several areas where my first assumptions weren't working.

Among the changes:

### Navigation became more visible

I replaced the hamburger-style navigation with more immediately accessible entry points.

### The meal plan became simpler

I removed the calendar because it added visual complexity without enough value.

### Cooking became more focused

The split-screen approach became a single-screen interface.

### Inspiration became more flexible

I expanded the ways users could discover dishes around mood and flavour rather than relying on conventional search alone.

These weren't isolated UI tweaks.

Together, they pushed the product towards **lower cognitive effort**.

[IMAGE: famcook-iteration-comparison.png]

---

# Then I got uncomfortable feedback

I presented the next iteration to eight design mentors through ADPList.

A recurring piece of feedback was difficult but useful:

### The concept worked better than the interface.

The product was functional, but the mobile experience lacked consistency and didn't always follow familiar interaction patterns.

My first instinct as a new designer had been to invent.

That feedback reminded me that originality isn't automatically usability.

So I revisited the design system, component behaviour, hierarchy and established mobile patterns.

The goal became:

### Innovate where the problem requires innovation.

### Use familiar patterns everywhere else.

[IMAGE: famcook-ui-comparison.png]

---

# Decision 06

## Don't make onboarding interrogate the user

My early onboarding asked for information including budget.

But after reconsidering what FamCook actually needed to create a useful group-cooking experience, budget wasn't one of the strongest inputs.

Cooking confidence was.

Knowing whether someone was comfortable cooking independently or needed more guidance could influence how tasks and instructions were presented later.

So I replaced lower-value questions with information that could actually shape the experience.

I also allowed people to finish profile details later rather than requiring everything upfront.

The principle was:

### If I'm asking the user for data, I should know what I'm going to do with it.

[SPLIT: famcook-onboarding-confidence.png | The final onboarding step asks about cooking confidence instead of budget — information that could actually shape how tasks and instructions are presented later, rather than a question with no clear downstream use.]

---

# The final concept

FamCook became a connected experience across three stages.

## 01 — Plan together

Create a meal, invite people, understand dietary needs and turn suggestions into agreed dishes.

## 02 — Prepare together

Organise ingredients and responsibilities so everyone understands what needs to happen.

## 03 — Cook together

Present the information people need in a simpler, lower-attention interface while the meal is actually being prepared.

The product doesn't try to replace conversation.

It provides **structure around the parts of conversation that need to turn into action**.

[GALLERY: famcook-home-final.png, famcook-meal-plan-connection.png, famcook-cooking-mode.png]

---

# What did I actually validate?

FamCook was a concept project rather than a launched product.

So I don't have production data showing increased retention, engagement or successful group meals.

What I did validate was the **usability and direction of the interaction model**.

Research helped identify where people experienced coordination friction.

Prototype testing revealed where my first solution introduced new friction.

And feedback led to meaningful changes in navigation, information density, interaction patterns and the cooking interface.

That distinction matters.

### Prototype testing can tell me whether people understand and can use the experience.

### It cannot tell me whether FamCook would become a successful product.

---

# If FamCook were shipped, what would success mean?

I wouldn't use general app engagement as the primary measure.

The product exists to help groups successfully organise and cook meals.

So I would start with a behavioural outcome such as:

## Shared meals successfully completed

A meal that progresses from planning into an agreed plan and completed cooking session.

I would then examine:

### Plan completion

How often does a newly created meal reach an agreed set of dishes?

### Decision time

How long does it take a group to move from invitation to an agreed meal?

### Dietary-conflict resolution

How often are incompatible dish choices identified before the group reaches preparation?

### Cooking-task completion

Can groups successfully understand and complete assigned tasks during cooking?

### Repeat group cooking

Do groups choose to use FamCook again for another shared meal?

The important thing isn't whether users spend more time inside FamCook.

It's whether FamCook helps them spend **better time together outside it**.

---

# What I wouldn't build yet

My original project generated ideas around:

AI recipe generation, voice control, social discovery, profiles, wearables, ingredient recognition, personalised recommendations, payments, and deeper accessibility features.

Some may eventually be valuable.

But before adding them, I'd validate one much more fundamental behaviour:

### Will groups actually use a shared meal plan instead of continuing to organise everything through their existing chat?

If the answer is no, more features won't rescue the concept.

I would test that assumption before significantly expanding the product.

---

# What I learned

## Prioritisation is design.

This was one of my earliest product-design projects, and my biggest mistake initially was believing that discovering more user problems meant I needed to design more solutions.

Research gave me dozens of directions.

The better product wasn't the one containing all of them.

It was the one where the features reinforced the **same core behaviour**.

---

## Design for the context, not just the screen.

FamCook also taught me to think differently about mobile interaction.

A screen used while planning dinner on the sofa and a screen used while stirring a pan might run on the same phone.

They don't have the same UX requirements.

The user's physical environment, attention and ability to interact are part of the interface.

---

## Collaboration products need shared truth

The communication problem wasn't a lack of messages.

People already had plenty of ways to message each other.

The problem was turning those conversations into something everyone could understand and act on.

That insight became the most transferable lesson from the project:

### When many people are coordinating one outcome, good UX isn't just communication.

### It's creating a shared understanding of what happens next.
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
