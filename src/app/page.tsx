import Image from "next/image";
import { experience, whyHireMe } from "@/data/content";
import PolaroidCaseScroll from "@/components/PolaroidCaseScroll";
import TreasureBoxHero from "@/components/TreasureBoxHero";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-28">
      <TreasureBoxHero />

      {/* Case studies — hanging polaroid horizontal scroll */}
      <PolaroidCaseScroll />

      <div className="mx-auto mt-20 flex w-full max-w-5xl flex-col gap-28 px-6 sm:px-10">
        {/* Why hire me */}
        <section className="relative flex flex-col gap-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 sm:p-12">
          <Image
            src="/hero-avatar.png"
            alt=""
            width={746}
            height={2046}
            aria-hidden="true"
            className="pointer-events-none absolute -top-[53px] right-4 z-10 h-auto w-[43px] select-none drop-shadow-[0_8px_16px_rgba(69,59,74,0.25)] sm:-top-[75px] sm:right-10 sm:w-16"
          />
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
                {item.note && (
                  <p className="text-sm italic text-[var(--text-faint)]">{item.note}</p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
