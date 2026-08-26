import type { Metadata } from "next";
import Link from "next/link";
import { whyHireMe } from "@/data/content";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Contents — Jianan Meng",
};

const entries = [
  {
    number: "01",
    href: "/work",
    title: "Selected Work",
    description: `${caseStudies.length} case studies, from marketplaces to mental wellness.`,
  },
  {
    number: "02",
    href: "/about",
    title: "About Me",
    description: "Who I am, what I believe, and what I care about.",
  },
  {
    number: "03",
    href: "/experience",
    title: "Experience & Skills",
    description: "Roles, tools, and the craft behind the work.",
  },
];

export default function ContentsPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-20 sm:px-10">
      <header className="flex flex-col gap-3">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-plum/50">
          Contents
        </p>
        <h1 className="font-heading text-3xl font-semibold text-plum sm:text-4xl">
          Welcome in.
        </h1>
      </header>

      <ol className="flex flex-col gap-2">
        {entries.map((entry) => (
          <li key={entry.href}>
            <Link
              href={entry.href}
              className="group flex items-baseline gap-4 border-b border-plum/10 py-5 transition-colors hover:border-plum/30"
            >
              <span className="font-heading text-sm text-plum/40">
                {entry.number}
              </span>
              <span className="flex-1">
                <span className="block font-heading text-xl font-semibold text-plum">
                  {entry.title}
                </span>
                <span className="block text-sm text-plum/60">
                  {entry.description}
                </span>
              </span>
              <span className="text-plum/40 transition-transform group-hover:translate-x-1 group-hover:text-plum">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

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
