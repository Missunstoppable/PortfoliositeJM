import Image from "next/image";
import { experience, skills, whyHireMe } from "@/data/content";
import PolaroidCaseScroll from "@/components/PolaroidCaseScroll";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-28">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-6 px-6 pt-6 sm:px-10 sm:pt-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-xl flex-col gap-4 text-center md:text-left">
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
        <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-3xl bg-lavender-soft p-3 sm:h-48 sm:w-48">
          <div className="relative h-full w-full">
            <Image
              src="/hero-avatar.png"
              alt="Illustrated portrait of Jianan Meng"
              fill
              className="object-contain"
              priority
              sizes="192px"
            />
          </div>
        </div>
      </section>

      {/* Case studies — hanging polaroid horizontal scroll */}
      <PolaroidCaseScroll />

      <div className="mx-auto mt-20 flex w-full max-w-5xl flex-col gap-28 px-6 sm:px-10">
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
    </div>
  );
}
