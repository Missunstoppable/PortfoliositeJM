export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  meta?: string;
  summary: string;
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

## How behavioural data and user research informed an onboarding redesign that contributed to a fourfold increase in service publishing

**Osdire · Freelance Marketplace**

[HERO IMAGE: osdire-main-image.jpg]

Osdire is a two-sided freelance marketplace connecting businesses with freelancers. After the platform's MVP launched, we discovered a significant activation problem: freelancers were registering, but many were not completing the process of publishing their first service.

I led the investigation and redesign of the freelancer onboarding and service-publishing journey—from diagnosing the problem to defining requirements, designing the experience and validating the released product.

### At a glance

- **My role:** Product/UX Designer
- **Company:** Osdire
- **Period:** June 2025–July 2026
- **Product stage:** Post-MVP optimisation
- **Platforms:** Responsive web application
- **Collaborators:** Founders, Product, Performance Marketing, Frontend, Backend and QA
- **Methods:** Funnel analysis, session recordings, think-aloud interviews, journey mapping, prototyping, usability testing and UX QA
- **Outcome:** The redesign contributed to a **fourfold increase in successful service publishing**

---

# The challenge

## Registration was not translating into marketplace supply

A marketplace cannot serve buyers without a healthy supply of services. Although Osdire was attracting new freelancer registrations, only around **20% of newly registered freelancers published at least one service**.

This represented an 80% drop between registration and the freelancer's first meaningful contribution to the marketplace.

The initial assumption was that freelancers might lack motivation or abandon the process because creating a service required too much effort. Before proposing a solution, I wanted to understand:

- Where were freelancers leaving?
- What made those points difficult?
- Were they unwilling to publish, or unable to complete the process?
- Which obstacles could we remove without reducing the quality of service listings?

Our product goal became clearer:

> Help more newly registered freelancers turn their expertise into a complete, searchable service listing without compromising the information buyers needed to make a decision.

---

# Establishing reliable evidence

## Before analysing the funnel, I checked whether we could trust it

I worked with the performance marketer to review and correct the Google Analytics funnel. This was important because an incomplete or incorrectly configured funnel could have led us to optimise the wrong part of the journey.

Once the tracking was reliable, the funnel confirmed a substantial drop between registration and first-service publication.

I then combined several forms of evidence:

### Funnel data

Google Analytics showed the scale of the activation problem and identified the earliest stages with significant abandonment.

### Session recordings

I reviewed **13 recordings of high-intent freelancers** who had actively attempted to create a service. More than **40% abandoned at the first publishing step**.

Some users spent more than 30 minutes on the platform without successfully publishing. Their behaviour suggested that motivation was not the only issue: people were investing time but still struggling to progress.

### Think-aloud interviews

We recruited freelancers through influencer-marketing contacts and asked them to talk through their thoughts while attempting the journey. This helped uncover confusion that behavioural data alone could not explain.

### Internal walkthroughs

I gathered feedback from team members who regularly encountered questions or problems relating to freelancer listings. This helped connect the interface problems with wider marketplace and operational requirements.

The combination was important: analytics showed **where** people left, while observation and conversation helped explain **why**.

---

# What I learned

## 1. The platform's taxonomy did not match how freelancers described their work

At the beginning of the publishing process, freelancers had to navigate a four-level category hierarchy.

This structure reflected the platform's backend taxonomy, but not necessarily the language or mental models freelancers used to describe their skills. Users repeatedly moved backwards and forwards through the hierarchy, uncertain which path contained the correct category.

The most important barrier appeared at the very first step—before freelancers had built enough momentum to continue.

## 2. Users were asked to make too many decisions upfront

The journey presented several fields and decisions together. Before seeing meaningful progress, freelancers had to understand the platform's categorisation system and decide how to position their service.

The amount of information made the task feel more complex than it needed to be.

## 3. Users left the journey to prepare their content

Freelancers were asked to provide titles and descriptions without enough contextual support. Some left the page to work out what to write or look for examples elsewhere.

The interface explained what information was required, but did not adequately help users create it.

## 4. Completion did not feel close or predictable

The journey lacked a strong sense of progress. Users could not always tell how much work remained or whether their listing was ready to publish.

Together, these findings changed how I framed the problem:

> Freelancers were not simply abandoning the journey because they lacked intent. The product was making it unnecessarily difficult for motivated users to translate their expertise into the platform's required structure.

---

# Choosing where to intervene

The evidence pointed to several possible improvements, but we could not rebuild the complete publishing system at once.

I prioritised changes according to:

- The severity and frequency of the observed problem
- Its position in the activation journey
- The likely effect on successful publication
- Technical feasibility within the existing platform
- The need to retain sufficient listing quality for buyers

The category-selection step became the highest priority because it was both an early barrier and a prerequisite for the rest of the journey.

Instead of changing the entire backend taxonomy, I focused on improving how users interacted with it. This allowed us to address the user problem while respecting the platform's existing technical structure.

---

# The redesigned experience

## 1. Replacing hierarchy navigation with type-and-select

I replaced the four-level category picker with a type-and-select interaction.

Instead of navigating the platform's taxonomy manually, freelancers could begin by describing their service in familiar language. The interface then suggested relevant predefined subcategories for them to select.

This preserved the structured data required for search and matching while reducing the need for users to understand Osdire's internal classification system.

**Before:**

Users had to understand the hierarchy before they could categorise their service.

**After:**

Users could begin with the service they already understood, while the interface helped translate it into the platform's structure.

[BEFORE-AFTER: category-before.png, category-after.png]

## 2. Breaking the journey into manageable stages

I applied progressive disclosure so users could concentrate on one group of decisions at a time.

The revised journey introduced information as it became relevant, reducing the perceived complexity of the form and creating a clearer sense of forward movement.

The sequence was designed to build momentum: users started with simpler classification decisions before moving into the more demanding work of presenting and pricing their service.

## 3. Providing contextual writing support

We considered AI-generated service content, but this would have introduced additional technical cost and complexity at that stage of the product.

Instead, I used:

- Field-specific examples
- Prompts explaining what buyers needed to know
- Short guidance placed at the moment it was required
- Clearer distinctions between required and optional information

This provided practical support without introducing an expensive dependency or removing the freelancer's control over how their service was represented.

## 4. Making readiness visible

I simplified the final review into a clearer checklist, helping freelancers understand:

- What they had completed
- What still needed attention
- Why particular information was required
- When the service was ready to publish

This reduced uncertainty at the end of the journey while retaining the quality requirements necessary for a useful marketplace listing.

---

# Designing within product and technical constraints

The redesign was not only an interface exercise. Each interaction had implications for the marketplace's taxonomy, search behaviour and underlying data.

I worked with Product, Frontend, Backend and QA to define:

- How typed phrases would map to existing subcategories
- What happened when no suitable suggestion appeared
- Required and optional fields
- Validation and error states
- Dependencies between publishing steps
- Saved and incomplete service states
- Expected behaviour across responsive screen sizes
- Acceptance criteria for release

I documented the intended behaviours and edge cases, created interactive Figma prototypes and remained involved during implementation to resolve questions as they arose.

Once the changes were built, I conducted UX QA and release validation to check that the implemented journey matched the intended experience.

---

# The outcome

Following the release, successful service publishing increased fourfold.

I describe the redesign as having **contributed to** this result because the improvement depended on multidisciplinary delivery and was not produced by design work in isolation. However, the post-release movement addressed the activation behaviour we had specifically investigated: more freelancers progressed from registration to contributing usable supply to the marketplace.

The project created value on both sides:

### For freelancers

- A faster and clearer path to becoming active
- Less need to understand Osdire's internal taxonomy
- More support when presenting their expertise
- Greater visibility of progress and readiness

### For the marketplace

- More successfully published services
- Increased supply for buyers to discover
- More structured service data for matching and search
- A stronger foundation for freelancer activation

---

# What I learned

## Validate the measurement before responding to it

Correcting the funnel before making design decisions prevented us from building around potentially unreliable evidence. Instrumentation is part of product discovery, not simply something used after launch.

## Behavioural data and user research answer different questions

The funnel identified the scale and location of abandonment. Session recordings and interviews revealed the hesitation, misunderstandings and unmet needs behind it. Neither source would have been sufficient alone.

## High intent does not guarantee successful activation

Some freelancers spent significant time trying to publish. Their persistence initially looked like engagement, but it was also evidence of friction. Time spent is only positive when it helps users achieve their goal.

## Technical constraints can sharpen the solution

We could not replace the complete taxonomy or introduce costly AI generation. Designing a simpler layer over the existing structure produced a more feasible solution while still addressing the central user problem.

## Activation should represent delivered value

Registration alone did not create value for freelancers, buyers or the marketplace. Publishing a first service was a much more meaningful activation point because it represented a freelancer becoming discoverable and able to receive work.

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
# Helping users reach the value of mental wellness sooner

## Improving activation and retention for Quabble's daily mental wellness experience

**Quabble · Mental Wellness Mobile App**

[HERO IMAGE]

Quabble helps people build mental wellness into everyday life through short, playful mental workouts.

The product already had a distinctive visual identity and a growing library of content. The bigger challenge was helping users understand **why they should come back — and experience that value early enough to form a routine.**

I initially joined the project through a UX audit. That work developed into a broader collaboration across **activation, onboarding, paywall experience, engagement and retention**.

The question became:

### How might we help users experience a meaningful mental workout sooner — and make coming back feel worth it?

---

## My role

**Product / UX Designer**

I worked across:

UX audit · User research · Product discovery · Journey analysis · Onboarding · Paywall UX · Interaction design · Growth experiments · UX QA

**Collaborated with**

Head of Product · CEO · Engineering · Marketing

**Timeline**

Initial UX audit: 2 weeks

Ongoing product collaboration: approximately 1 year

---

# The real problem wasn't visual design

Quabble already looked good.

The issue was that visual quality alone didn't guarantee that users understood:

- what a "mental workout" was,
- where to start,
- how Quabble fitted into their daily life,
- or why they should return tomorrow.

At the time, **activation was a major product focus**.

The team was looking closely at:

### Time to first workout completed

because completing a workout represented the first point where a new user could experience the product's core value.

That changed how I approached the work.

Instead of asking:

**"Where are the usability issues?"**

I started asking:

**"What is preventing someone from reaching the meaningful part of the product?"**

---

# From UX friction to product behaviour

I started with a screen-by-screen heuristic audit, reviewing usability, hierarchy, navigation, interaction patterns and clarity.

But rather than treating every usability issue equally, I grouped findings according to the behaviour they might affect.

### Discover

Can a new user understand what Quabble offers?

### Start

Can they confidently choose and begin a mental workout?

### Experience value

Do they understand what they're getting from completing it?

### Return

Does the product give them a reason to make mental wellness part of their routine?

This helped turn a long list of interface issues into **product priorities**.

[SHOW YOUR AUDIT / PRIORITISATION VISUAL HERE]

---

# Decision 01

## Prioritise the path to the first meaningful workout

One of the most important things I learned from the project was that **registration isn't necessarily activation**.

A user can download the app.

Create an account.

Browse several screens.

And still never understand why the product matters.

For Quabble, the more meaningful moment happened when someone actually completed a mental workout.

So I started evaluating the experience around a simple question:

### How much work does a new user have to do before experiencing Quabble?

Anything standing between entry and that first meaningful experience needed to justify its existence.

This influenced how I assessed:

- onboarding,
- content discovery,
- calls to action,
- navigation,
- explanations,
- and the sequence in which product information appeared.

The goal wasn't simply to make onboarding shorter.

It was to make the path to value **clearer**.

[SHOW OLD JOURNEY → IMPROVED JOURNEY]

---

# Decision 02

## Explain the value before asking users to commit

Mental wellness is a difficult category because the benefit isn't always immediately tangible.

"Do a mental workout every day" is a behaviour.

But it doesn't yet explain **why I should care today**.

So I explored how onboarding and the paywall could communicate Quabble's value earlier.

Instead of focusing primarily on features, the experience needed to answer:

### What will this help me with?

### What does using Quabble actually feel like?

### Why would I come back tomorrow?

This meant surfacing the experience itself earlier and making the relationship between **small daily actions and longer-term wellbeing** easier to understand.

I also explored the paywall as part of the user journey rather than an isolated conversion screen.

A paywall should not be the first place where the product clearly explains why it is valuable.

[SHOW ONBOARDING / PAYWALL ITERATIONS HERE]

---

# Decision 03

## Make wellness feel like a journey, not a content library

Another opportunity was helping users understand where individual workouts fitted into their broader wellness experience.

A collection of exercises gives users choice.

But choice alone doesn't create progress.

So I explored ways to make the experience feel more like a **mental wellness journey** — helping users understand:

- what they could do today,
- how activities related to their goals,
- what they had already completed,
- and what they might do next.

This shifted the experience away from:

**"Here are some wellness activities."**

towards:

**"Here is something useful you can do for yourself today."**

That distinction was important because habit-building depends on reducing the effort required to decide what to do next.

[SHOW JOURNEY / ROUTINE / WORKOUT SCREENS]

---

# Decision 04

## Bring the product into the user's daily routine

Opening an app requires someone to remember that the app exists.

That sounds obvious, but it becomes important when you're designing for habit formation.

I explored a mobile widget that placed Quabble's daily experience directly on the phone's home screen.

Rather than asking users to remember:

> "I should open my wellness app today."

the product could become an ambient reminder:

### "Here's something small you can do for yourself right now."

The widget therefore wasn't primarily a UI feature.

It was a hypothesis about **retention and routine formation**.

[SHOW WIDGET MOCKUP]

---

# Designing the experiment

A potentially misleading way to evaluate the widget would have been:

**Compare people who install the widget with people who don't.**

But there was an obvious problem.

Users were prompted inside Quabble to install the widget.

That meant the people who chose to install it were likely already:

- more engaged,
- more curious about the product,
- or more motivated to build a routine.

If widget users subsequently completed more workouts, we couldn't confidently say the widget caused that behaviour.

### Selection bias

The more engaged users may simply have been more likely to install it in the first place.

So I approached the feature as an experiment instead.

For the initial test, traffic could be split among **paid users**, the segment the team was focused on delivering value for.

### Control

Existing experience.

### Variant

Widget experience / widget promotion.

I would compare behaviours such as:

**Workout completion frequency**

**Return rate**

**Time between workouts**

**Daily routine participation**

rather than simply measuring widget installs.

Because:

### Installing a feature isn't value. Using the product more meaningfully might be.

[SHOW SIMPLE EXPERIMENT DIAGRAM]

---

# Understanding motivation beyond the interface

As my involvement with Quabble expanded, I also worked on growth and user research beyond individual screens.

I helped explore questions such as:

### Who receives the most value from Quabble?

### Why do some people continue while others disengage?

### Which needs should the product prioritise?

I worked on survey design to better understand different user groups and their motivations, and explored user stories as a way to make the community and benefits of mental wellness feel more relatable.

This helped connect interface decisions with a broader product question:

### What makes Quabble worth returning to?

[SHOW SURVEY / INSIGHT VISUAL, NOT THE WHOLE RESEARCH DOCUMENT]

---

# What changed

The initial audit was reviewed with Quabble's Head of Product and shared with the wider team for prioritisation.

### 80%

of my initial recommendations were taken onboard for consideration.

### ~30%

were implemented during subsequent product updates.

More importantly, the project expanded beyond a one-off UX review.

I went on to contribute to areas including:

Onboarding · Paywall experience · Mental wellness journey · Engagement concepts · Retention widget · Growth research · UX QA

The work changed how I thought about product design:

### Fixing friction is useful.

### Understanding the behaviour behind the friction is more powerful.

---

# Measuring success

I wouldn't evaluate this work using one engagement number alone.

I'd look at the user journey as a funnel:

**App opened**

→ Onboarding completed
→ Workout discovered
→ First workout started
→ First workout completed
→ Second workout completed
→ Routine established

And then ask where users are losing momentum.

The metrics I'd pay particular attention to are:

### Time to first workout completed

How quickly does a new user experience the core product?

### First → second workout conversion

Did the first experience create enough value to bring them back?

### Workout completion frequency

Are users integrating Quabble into their routine?

### Retention by behaviour

Do users who complete workouts, use certain content or interact with routine features retain differently?

These tell us much more than simply asking how many people opened the app.

---

# What I learned

## Activation is the moment a user experiences value — not the moment the company acquires a user.

This project changed the way I think about onboarding.

A successful sign-up does not automatically mean someone understands a product.

A completed onboarding flow doesn't either.

For Quabble, I became much more interested in the moment when someone could genuinely think:

### "Ah — this is what this product can do for me."

That became a useful lens for evaluating everything from navigation to onboarding and retention.

---

## Product experiments need to separate correlation from causation

The widget work also reinforced an important lesson about product data.

If highly engaged users voluntarily adopt a feature, their higher engagement afterwards does not necessarily mean the feature caused it.

Recognising that bias changed the question from:

**"Do widget users engage more?"**

to:

**"Does introducing the widget cause users to engage differently?"**

That is a small wording change, but a very different product question.

---

# If I continued this work

I would focus next on understanding **what makes the first mental workout meaningful enough to create a second one**.

I would segment retention by:

- first workout type,
- user motivation,
- onboarding path,
- frequency of early workouts,
- subscription status,
- and use of routine features.

From there, I would test personalised next-workout recommendations and different ways of reinforcing progress.

Not to maximise screen time.

But to help users build a wellness routine that remains useful **without needing the app to demand their attention.**
`;

const MUDE_CONTENT = `
# Designing a bedtime app that wants you to put your phone down

## Mude — a behavioural design exploration into bedtime procrastination

[HERO IMAGE]

We've probably all done it.

You're tired. You know you should sleep. Tomorrow-you would very much appreciate it.

And yet somehow you're still scrolling at 12:47am.

Mude is a self-initiated product concept exploring **bedtime procrastination** — the gap between intending to go to bed and actually doing it.

The challenge wasn't simply:

**How do I help people sleep?**

It was:

### How might a digital product help people emotionally wind down and leave their phone — without becoming another reason to stay on it?

**Project**
Self-initiated product concept

**Role**
Product Designer / UX Researcher

**Timeline**
1 month

**Methods**
Secondary research · Survey · Journey mapping · Prototyping · 5 guerrilla usability tests · 3 moderated usability tests · Iteration

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

[SHOW SIMPLE DIAGRAM: OPEN MUDE → WIND DOWN → LEAVE PHONE]

---

# Research helped me narrow the behaviour

My initial exploration generated plenty of possible features:

journaling, mood tracking, sleep tracking, galleries, personalised prompts, achievements, environmental recommendations, reminders, integrations and more.

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

[SHOW CORE EXPERIENCE / JOURNEY]

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

[SHOW JOURNAL ENTRY / PROMPTS]

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

[SHOW DAYTIME CAPTURE → NIGHT-TIME REFLECTION]

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

[SHOW WIND-DOWN + PAGE-TEAR INTERACTION]

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

[SHOW OLD FLOW → INSIGHT → NEW FLOW]

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

[SHOW BEFORE → AFTER ITERATION]

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

[SHOW FINAL SWITCH-OFF SCREEN]

---

# The final concept

Mude became a three-part experience.

### 01 — Notice

Capture meaningful moments throughout the day with minimal effort.

### 02 — Wind down

Revisit selected positive moments through a short, finite bedtime ritual.

### 03 — Switch off

Mark the end of the day and deliberately leave the digital environment.

[SHOW YOUR STRONGEST FINAL SCREENS HERE]

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

[HERO IMAGE]

Cooking together sounds simple.

Pick a recipe. Buy some ingredients. Cook. Eat.

Add eight friends, three dietary requirements, different cooking abilities and a group chat where nobody answers the actual question, and suddenly dinner starts looking suspiciously like project management.

FamCook is a self-initiated concept exploring how digital products could make **planning and cooking a shared meal easier — without taking the social part out of it.**

The challenge became:

### How might we reduce the coordination around cooking together, so people can spend more time actually enjoying it?

**Role**
Product Designer / UX Researcher

**Timeline**
3 months

**Research & methods**
User interviews · Competitive analysis · Journey mapping · Prioritisation · Wireframing · Prototyping · Usability testing · Interaction design · Visual design

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

[SHOW RESEARCH THEMES / JOURNEY HERE]

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

[SHOW PRIORITISATION VISUAL]

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

[SHOW CHAT + PINNED MEAL PLAN]

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

[SHOW DIETARY PROFILE / MEAL PLAN CONNECTION]

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

[SHOW INSPIRATION SCREENS]

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

[SHOW COOKING MODE]

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

[SHOW SPLIT SCREEN → SINGLE SCREEN]

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

[SHOW FIRST ITERATION → SECOND ITERATION]

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

[SHOW EARLY UI → FINAL UI]

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

[SHOW ONBOARDING ITERATION]

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

[SHOW STRONGEST FINAL SCREENS]

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
# Designing outside the box — while staying inside the template

## Reimagining Spira9's digital presence as both a conversion website and a showcase for its AI website builder

**Spira9 · Digital Marketing & AI Website Builder**

[HERO IMAGE]

Spira9 needed a new website for two reasons.

It had to explain and sell its digital marketing services more effectively.

But it also had to demonstrate the capabilities of the company's own AI website-building platform.

That created an unusual constraint:

### The website needed to feel distinctive enough to sell the product — while using the same structural system the product would give its customers.

In other words:

**Make it look custom. Don't make it too custom.**

---

## My role

**UX / UI Designer**

I worked across:

Competitive research · Information architecture · Responsive UX · Wireframing · UI design · Content design · Design system · Prototyping · Developer handoff

**Project type**
Client project

**Timeline**
4 weeks

**Collaborated with**
[ADD YOUR ACTUAL TEAM — e.g. another designer, project lead, engineers]

---

# The 30-second version

### Business problem

Spira9's existing website made its services difficult to understand and didn't present the company as the modern digital partner it wanted to become.

### Design constraint

The redesign couldn't behave like a completely bespoke marketing site. Its underlying structure also needed to demonstrate what could be created through Spira9's AI website-building system.

### My approach

I focused on three things:

**Clarify the proposition.**
**Create stronger visual hierarchy.**
**Build a reusable visual system that could survive different layouts and screen sizes.**

### Biggest lesson

Constraints don't necessarily reduce creativity.

They change **where creativity needs to happen**.

---

# The website had two jobs

Most marketing websites need to convince visitors that a service is worth buying.

Spira9's site had an additional responsibility.

### It was also evidence.

If the company wanted customers to trust its website-building technology, its own website needed to communicate:

**"This is what our platform can create."**

That meant the interface wasn't merely presenting the product.

### The interface was part of the product demonstration.

This changed how I evaluated design decisions.

A visually impressive interaction wasn't automatically useful if it couldn't work within the underlying website-builder structure.

And a perfectly reusable template wasn't successful if every website built with it looked generic.

The challenge sat between the two.

[SHOW OLD WEBSITE → NEW WEBSITE]

---

# The first problem: users shouldn't have to decode the company

The existing experience contained competing information and a weak content hierarchy.

Before thinking about animation, illustration or colour, I needed to answer a more basic question:

### What should someone understand within the first few seconds?

I reorganised the experience around a clearer hierarchy:

**What Spira9 does**

↓
**Why it matters**

↓
**What services/products are available**

↓
**Why the company is credible**

↓
**What the visitor should do next**

This sounds simple.

That's partly the point.

A marketing website shouldn't make visitors perform information architecture.

[SHOW OLD IA → SIMPLIFIED IA]

---

# Decision 01

## Design the message before decorating the page

The redesign needed to feel more dynamic and premium.

But visual polish couldn't compensate for a vague proposition.

So I worked on the hierarchy and content alongside the interface.

Headings became more direct.

Sections had clearer roles.

Calls to action were given stronger priority.

And rather than giving every piece of content equal visual weight, I designed around the questions a potential customer would naturally ask:

### What do you actually do?

### Is this relevant to me?

### Why should I trust you?

### What can I do next?

Only once that hierarchy worked did visual styling become useful.

[SHOW WIREFRAME → FINAL SECTION]

---

# Decision 02

## The constraint wasn't something to design around. It was part of the product.

The biggest difference between this project and a conventional marketing-site redesign was the website builder itself.

Because the site would also act as a reference for Spira9's scalable AI website-building service, some layout and interaction possibilities were restricted.

Engineering and design therefore had to establish where variation was possible.

For example, we could explore:

- section backgrounds,
- visual guiding elements,
- changes in content orientation,
- typography and hierarchy,
- imagery,
- and flexible composition within supported structures.

But we couldn't treat every page as a completely bespoke canvas.

That forced an important question:

### How can a reusable system still create a distinctive brand experience?

[SHOW SAME STRUCTURE WITH DIFFERENT VISUAL TREATMENTS]

---

# Decision 03

## Create distinction through hierarchy, not decoration

When layout freedom is limited, there is an obvious temptation:

Add more colour.

Add more graphics.

Add more effects.

That often makes the constraint more visible rather than less.

Instead, I initially designed in greyscale.

This helped me evaluate:

**What gets noticed first?**

**Where does the eye move next?**

**Which content feels primary?**

**Where does a section begin and end?**

Only after that hierarchy worked did I introduce the brand palette.

Colour became a way to create emphasis rather than compensate for unclear composition.

### If everything asks for attention, nothing has hierarchy.

[SHOW GREYSCALE → COLOUR VERSION]

---

# Decision 04

## Build the system earlier

One of my biggest lessons from previous visual-design work was how expensive inconsistency becomes once high-fidelity screens multiply.

So instead of treating the design system as something to document after finishing the website, I established the visual foundations earlier.

That included:

### Typography

Clear roles for display, headings, supporting copy and body text.

### Colour

Defined use rather than arbitrary decoration.

### Components

Reusable buttons, navigation patterns, cards and content structures.

### Spacing

Consistent relationships between content instead of page-by-page adjustment.

### Responsive behaviour

Rules for how components and hierarchy should adapt as the available space changed.

That gave the project a shared design language and made later iterations much easier to manage.

[SHOW DESIGN SYSTEM / COMPONENTS]

---

# Decision 05

## Responsive design isn't shrinking desktop

The previous experience had particular problems on smaller devices.

So mobile couldn't be treated as the desktop design squeezed into a narrower rectangle.

At each breakpoint, I considered:

**What still needs to be prominent?**

**What needs to stack?**

**What interaction changes?**

**How much text can reasonably remain visible?**

**Does the call to action still make sense in context?**

Working with Engineering also surfaced feasibility constraints before final handoff, allowing us to adjust layouts rather than handing over designs that couldn't be implemented reliably.

[SHOW DESKTOP → TABLET → MOBILE]

---

# Working with Engineering

This project involved an important negotiation between **design ambition and system capability**.

Some of the visual ideas I explored would have required greater structural flexibility than the website-building platform supported.

Instead of treating that as an Engineering problem, we iterated together.

The compromise was not:

### "Make the design less good."

It was:

### "Find the parts of the experience where flexibility creates the most value."

That meant using supported structural patterns while creating differentiation through hierarchy, composition, brand elements and carefully chosen variations.

It was a useful lesson in designing something that could actually scale beyond one Figma file.

---

# The final experience

The redesign gave Spira9 a cleaner and more responsive digital presence built around:

### Clearer positioning

Visitors can understand the company's services and proposition faster.

### Stronger hierarchy

Content has a deliberate visual sequence rather than competing for attention.

### Responsive behaviour

The experience adapts across desktop, tablet and mobile rather than treating smaller screens as an afterthought.

### Reusable foundations

Components and visual rules support consistency across future pages.

### A product showcase

The final website demonstrates how Spira9's underlying website-building framework can support a more polished brand experience.

[SHOW LARGE FINAL MOCKUPS HERE]

---

# What did success mean?

For a commercial website, usability is only part of the outcome.

The experience ultimately needs to help visitors understand the proposition and move towards a meaningful business action.

The product metrics I would monitor include:

### Visitor → enquiry conversion

Are more relevant visitors taking the intended commercial action?

### CTA conversion by page

Which propositions and services successfully move visitors forward?

### Mobile conversion

Did improving the responsive experience reduce the gap between mobile and desktop visitors?

### Qualified engagement

Are visitors reaching important service/product content rather than simply generating longer sessions?

I would treat metrics such as session duration and pages per visit as **diagnostic signals**, not success on their own.

Someone spending longer on the site could mean they're interested.

Or confused.

Context matters.

---

# What I wouldn't optimise for

## More time on the website

A marketing website isn't Netflix.

If a visitor understands the proposition quickly and submits an enquiry after two minutes, that's potentially much more valuable than someone browsing for fifteen.

So I wouldn't define success as:

**"Make people stay longer."**

I'd define it as:

### Help the right visitors understand Spira9 and confidently take the next step.

---

# What I learned

## Constraints tell you where to design

The most valuable part of this project wasn't learning how to create a prettier marketing site.

It was learning how to work creatively within a system I couldn't completely change.

When layout flexibility was limited, hierarchy mattered more.

When components had to be reusable, consistency mattered more.

When Engineering constraints appeared, prioritisation mattered more.

The restriction didn't remove design.

### It moved design into the decisions that mattered.

---

## A design system is a working tool, not a final deliverable

Establishing the visual foundations earlier made the high-fidelity work significantly easier.

It also exposed inconsistencies sooner.

This project reinforced a habit I carry into later work:

### Don't wait until the interface is finished to decide what makes it consistent.

---

## Commercial design needs both clarity and character

A marketing site needs enough personality to make the brand memorable.

But it also has a job to do.

The best visual decision isn't necessarily the most interesting one in isolation.

It's the one that helps someone understand:

### who you are, what you offer, and why they should care.
`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "osdire",
    title: "Osdire",
    subtitle: "Redesigning freelancer onboarding to unlock marketplace supply",
    role: "Product / UX Designer",
    summary:
      "Freelancers were registering and quietly disappearing — tracing an 80% drop to a category picker nobody could parse, and fixing it.",
    content: OSDIRE_CONTENT,
  },
  {
    slug: "quabble",
    title: "Quabble",
    subtitle: "Improving activation and retention for a mental-wellness app",
    role: "Product / UX Designer",
    summary:
      "A UX audit that expanded into a year of onboarding, paywall and engagement work to help new users reach value sooner.",
    content: QUABBLE_CONTENT,
  },
  {
    slug: "mude",
    title: "Mude",
    subtitle: "A wind-down ritual to reduce bedtime procrastination",
    role: "Product Designer / UX Researcher",
    summary:
      "A self-initiated concept testing whether a phone app could actually convince someone to put their phone down before bed.",
    content: MUDE_CONTENT,
  },
  {
    slug: "famcook",
    title: "FamCook",
    subtitle: "A shared meal-planning product for group cooking",
    role: "Product Designer / UX Researcher",
    summary:
      "A self-initiated concept turning dietary chaos and an unanswered group chat into one shared plan, from decision to dinner.",
    content: FAMCOOK_CONTENT,
  },
  {
    slug: "spira9",
    title: "Spira9",
    subtitle: "Redesigning a conversion website built inside its own AI website builder",
    role: "UX / UI Designer",
    summary:
      "A four-week client project selling Spira9's website-building platform by building the site entirely inside it.",
    content: SPIRA9_CONTENT,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
