import type { Metadata } from "next";
import { experience, skills } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience & Skills — Jianan Meng",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-20 sm:px-10">
      <h1 className="font-heading text-3xl font-semibold text-plum sm:text-4xl">
        Experience &amp; skills
      </h1>

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
    </div>
  );
}
