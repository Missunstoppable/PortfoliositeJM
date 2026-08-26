import { caseStudies } from "@/data/caseStudies";
import { experience, skills, whyHireMe } from "@/data/content";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-28 px-6 pb-28 sm:px-10">
      {/* Hero */}
      <section className="flex flex-col-reverse items-center gap-10 pt-12 sm:pt-20 md:flex-row md:justify-between">
        <div className="flex max-w-xl flex-col gap-5 text-center md:text-left">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-plum/60">
            Product Designer · UX Designer
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl">
            Jianan Meng
          </h1>
          <p className="text-lg leading-relaxed text-plum/80">
            Product Designer turning complex journeys into clear, simple,
            measurable and ultimately <strong>HUMAN</strong> product
            experiences.
          </p>
        </div>
        <div className="relative flex h-48 w-48 shrink-0 items-center justify-center overflow-hidden rounded-full bg-lavender-soft text-4xl font-heading font-semibold text-plum sm:h-56 sm:w-56">
          {/* TODO: swap for Jianan's illustrated avatar (public/hero-avatar.png) */}
          JM
        </div>
      </section>

      {/* Case studies */}
      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-2xl font-semibold text-plum">
            Selected work
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Tools & skills */}
      <section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-semibold text-plum">
          Tools &amp; skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-plum/15 bg-white/60 px-4 py-1.5 text-sm text-plum/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-semibold text-plum">
          Experience
        </h2>
        <ol className="flex flex-col gap-5 border-l border-plum/15 pl-6">
          {experience.map((item) => (
            <li key={`${item.org}-${item.dates}`} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-lavender" />
              <p className="font-heading text-base font-semibold text-plum">
                {item.role}
              </p>
              <p className="text-sm text-plum/70">
                {item.org} · {item.dates}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why hire me */}
      <section className="flex flex-col gap-6 rounded-3xl border border-plum/10 bg-white/50 p-8 sm:p-12">
        <h2 className="font-heading text-2xl font-semibold text-plum">
          {whyHireMe.heading}
        </h2>
        <div className="flex flex-col gap-4">
          {whyHireMe.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-plum/80">
              {p}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
