import { experience, skillGroups, whyHireMe } from "@/data/content";
import PolaroidCaseScroll from "@/components/PolaroidCaseScroll";
import TreasureBoxHero from "@/components/TreasureBoxHero";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-28">
      <TreasureBoxHero />

      {/* Case studies — hanging polaroid horizontal scroll */}
      <PolaroidCaseScroll />

      <div className="mx-auto mt-20 flex w-full max-w-5xl flex-col gap-28 px-6 sm:px-10">
        {/* Tools & skills */}
        <section className="flex flex-col gap-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            Tools &amp; skills
          </h2>
          <div className="flex flex-col gap-8">
            {skillGroups.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 text-sm text-[var(--text-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            Experience
          </h2>
          <ol className="flex flex-col gap-5 border-l border-[var(--border)] pl-6">
            {experience.map((item) => (
              <li key={`${item.org}-${item.dates}`} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-lavender" />
                <p className="font-heading text-base font-semibold text-[var(--foreground)]">
                  {item.role}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {item.org} · {item.dates}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Why hire me */}
        <section className="flex flex-col gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 sm:p-12">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            {whyHireMe.heading}
          </h2>
          <div className="flex flex-col gap-4">
            {whyHireMe.intro.map((p, i) => (
              <p key={i} className="leading-relaxed text-[var(--text-muted)]">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="leading-relaxed text-[var(--text-muted)]">
              {whyHireMe.questionsIntro}
            </p>
            <ul className="flex flex-col gap-2 border-l border-[var(--border)] pl-5">
              {whyHireMe.questions.map((q, i) => (
                <li key={i} className="leading-relaxed text-[var(--text-muted)] italic">
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            {whyHireMe.outro.map((p, i) => (
              <p key={i} className="leading-relaxed text-[var(--text-muted)]">
                {p}
              </p>
            ))}
          </div>

          <p className="leading-relaxed text-[var(--foreground)]">
            <span className="font-heading font-semibold">
              {whyHireMe.closingLabel}
            </span>{" "}
            {whyHireMe.closing}
          </p>
        </section>
      </div>
    </div>
  );
}
