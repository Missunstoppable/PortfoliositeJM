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

const OSDIRE_CONTENT = `
# Reactivating a two-sided marketplace

## Designing the journey from "I need something done" to a successful freelancer hire

**Osdire · Freelance Marketplace**

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

const QUABBLE_CONTENT = `
# Helping users reach the value of mental wellness sooner

## Improving activation and retention for Quabble's daily mental wellness experience

**Quabble · Mental Wellness Mobile App**

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

export const caseStudies: CaseStudy[] = [
  {
    slug: "osdire",
    title: "Osdire",
    subtitle: "Reactivating a two-sided freelance marketplace",
    role: "Product Designer",
    meta: "Collaborators: PM, Backend Lead, Engineering, QA · Scope: Journey mapping, user flows, interaction design, UI design, prototyping, product specs & handoff",
    summary:
      "End-to-end experience for project drafting, registration, offers, and purchases.",
    content: OSDIRE_CONTENT,
  },
  {
    slug: "quabble",
    title: "Quabble",
    subtitle: "Designing for engagement and sustainable growth",
    role: "Product / UX Designer",
    summary:
      "Guided activities and reflection tools for emotional habits, at a mental-wellness startup.",
    content: QUABBLE_CONTENT,
  },
  {
    slug: "mude",
    title: "Mude",
    subtitle: "A healthy bedtime routine, without the procrastination",
    role: "UX Researcher · UX Designer",
    meta: "Timeframe: 1 month · Self-initiated",
    summary:
      "A wind-down app addressing bedtime procrastination through journaling and mindful ritual.",
    metricsPreview: "Task Success ↑40% · Satisfaction ↑30%",
    problem:
      "Bedtime procrastination — especially among students and women — is driven by stress-based \"reclaiming me-time\" and excessive device use, leading to sleep deprivation, emotional dysregulation, and physical health issues. The goal: help users recognize their daily achievements and feel present and fulfilled leading up to bedtime, in a mindful, distraction-free way.",
    process: [
      "Secondary research and a survey-based exploratory analysis identified journaling as a lever for the root causes of bedtime procrastination.",
      "Mapped user flows to find entry points, friction areas, and happy paths.",
      "Built wireframes and a lo-fi prototype, then ran guerrilla testing with 5 users.",
      "Iterated to hi-fi, then ran moderated testing with 3 participants and follow-up interviews.",
      "Designed AI-generated journaling prompts, a \"page-tear ritual\" farewell mechanism, mood tracking visualization, an \"emotional dumpster,\" a wind-down interface, and a distraction-blocking \"Sleep Mode.\"",
    ],
    outcome:
      "New user adoption ↑35%, retention ↑25%, user satisfaction ↑30%, task success ↑40% — with a clean, clutter-free interface and a distraction-minimized wind-down experience.",
  },
  {
    slug: "famcook",
    title: "FamCook",
    subtitle: "Smoothing group cooking, from planning to plate",
    role: "UX Researcher · UX Designer · UI Designer",
    meta: "Timeframe: 3 months · Self-initiated / course project",
    summary:
      "A co-cooking app that reduces friction in planning and preparation for group meals.",
    metricsPreview: "Task Success ↑50% · Satisfaction ↑30%",
    problem:
      "How do you organize a group cooking session for friends with varying dietary needs and cooking skill levels? The research question: how might we design a collaborative cooking experience that reduces friction in planning and preparation, while fostering enjoyment and connection?",
    process: [
      "Conducted 5 user interviews on group meal organization, followed by affinity diagramming and competitive analysis.",
      "Identified pain points across three stages: pre-cooking, during cooking, and post-cooking — including tracking dietary restrictions, selecting compatible dishes, and coordinating communication.",
      "Generated wireframes using Crazy Eights, then built a lo-fi prototype and tested with 4 participants.",
      "Presented to 8 ADP List mentors for feedback before developing hi-fi designs with a style guide.",
      "Replaced the hamburger menu with widgets, removed calendar clutter, built a single-screen cooking interface, added personalized recommendations and \"inspiration by mood/flavour,\" and designed skills-based onboarding.",
    ],
    outcome:
      "Task success ↑50%, user satisfaction and engagement ↑30%. Accessibility was a throughline — clear visual hierarchy and a voice-control option so users don't have to touch a device with oily hands while cooking.",
  },
  {
    slug: "spira9",
    title: "Spira9",
    subtitle: "A digital storefront for an AI website builder",
    role: "UX Designer · UX Writer · UI Designer",
    meta: "Timeframe: 4 weeks",
    summary:
      "Landing page design balancing company storefront and product showcase.",
    metricsPreview: "Conversion ↑20% · Session Duration ↑30%",
    problem:
      "Spira9 needed a website serving dual purposes: company storefront and showcase for its AI website-builder service. The existing site had a cluttered interface and vague structure, resulting in poor navigation, high bounce rates, low engagement, and weak mobile responsiveness.",
    process: [
      "Reviewed project briefs to establish brand identity, mission, goals, and key deliverables.",
      "Conducted market analysis of the competitive landscape and industry trends.",
      "Restructured information architecture and navigation based on research findings.",
      "Built low-fidelity wireframes, then high-fidelity interactive prototypes, validated through usability testing and iteration.",
      "Collaborated with developers on feasibility and responsive breakpoints, and established a cohesive visual style guide — deliberately limiting color use for a cleaner look within the AI-template constraints.",
    ],
    outcome:
      "Conversion ↑20%, session duration ↑30%, pages per visit ↑35%.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
