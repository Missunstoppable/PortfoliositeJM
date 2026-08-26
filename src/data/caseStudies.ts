export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  meta?: string;
  summary: string;
  metricsPreview: string;
  problem: string;
  process: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "osdire",
    title: "Osdire",
    subtitle: "Reactivating a two-sided freelance marketplace",
    role: "Product Designer",
    meta: "Collaborators: PM, Backend Lead, Engineering, QA · Scope: Journey mapping, user flows, interaction design, UI design, prototyping, product specs & handoff",
    summary:
      "End-to-end experience for project drafting, registration, offers, and purchases.",
    metricsPreview: "Weekly Signup ↑23% · Engagement ↑37%",
    problem:
      "Osdire faced a marketplace-liquidity problem — supply-side (freelancer) growth outpaced buyer acquisition, leaving freelancers inactive, buyers facing slow responses, and trust eroding. The core friction: buyers struggled converting goals into clear briefs from a blank form, and vague requirements hurt freelancer assessment and offer quality.",
    process: [
      "Reduced startup effort — the flow opens with \"What do you need to get done?\"; buyers draft briefs manually or from editable AI-generated starting points.",
      "Structured briefs around three questions: scope, budget/timeframe/deliverables, and required skills/experience.",
      "Delayed registration until after drafting, to demonstrate value before requiring commitment.",
      "Connected credits to offers — freelancers top up credits before submitting tailored offers (scope, price, timeframe, messaging).",
      "Added negotiation states allowing clarification before offers became orders, with testable limits on simultaneous negotiations.",
    ],
    outcome:
      "North star metric: weekly purchased custom offers, tracked alongside project-to-purchase conversion and 48-hour response rate. The final design unified drafting, registration, publishing, discovery, offers, credit purchasing, negotiation, and payment into one developer-ready journey — treating project posting as the start of a marketplace interaction, not an isolated form. Result: Weekly Signup ↑23%, User Engagement ↑37%.",
  },
  {
    slug: "quabble",
    title: "Quabble",
    subtitle: "Designing for engagement and sustainable growth",
    role: "Product Marketer · UX Designer",
    summary:
      "Guided activities and reflection tools for emotional habits, at a mental-wellness startup.",
    metricsPreview: "Organic reach 3M+",
    problem:
      "Quabble needed to demonstrate value early to convert users to paid membership, while reducing reliance on costly acquisition channels — touching everything from onboarding friction to audience understanding to community-driven growth.",
    process: [
      "Ran a UX QA audit across the mobile app to identify usability issues.",
      "Researched onboarding and monetization patterns across mental-wellness, journaling, healthcare, and AI companion products.",
      "Designed an in-app survey examining user motivations, desired outcomes, valued features, and engagement preferences.",
      "Redesigned onboarding to demonstrate value before the paywall.",
      "Explored partnership-led growth via scholarship memberships and healthcare provider relationships.",
      "Led \"Quabbler Stories,\" a YouTube series featuring real user experiences, and investigated LTV vs. CAC across channels.",
    ],
    outcome:
      "The work produced a value-led onboarding approach, a refreshed audience understanding, clarified acquisition priorities, explored partnership channels, and community-driven storytelling for engagement and word-of-mouth growth — contributing to 3M+ organic reach.",
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
