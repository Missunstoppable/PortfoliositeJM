import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return { title: study ? study.title : "Case study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-20 sm:px-10">
      <Link
        href="/work"
        className="w-fit text-sm font-medium text-plum/60 transition-colors hover:text-plum"
      >
        ← Back to work
      </Link>

      <header className="flex flex-col gap-4">
        <h1 className="font-heading text-3xl font-semibold text-plum sm:text-4xl">
          {study.title}
        </h1>
        <p className="text-lg text-plum/80">{study.subtitle}</p>
        <p className="text-sm text-plum/60">{study.role}</p>
        {study.meta && <p className="text-sm text-plum/50">{study.meta}</p>}
        <span className="mt-2 inline-flex w-fit rounded-full bg-sage/25 px-4 py-1.5 text-sm font-medium text-plum">
          {study.metricsPreview}
        </span>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-semibold text-plum">
          Problem &amp; context
        </h2>
        <p className="leading-relaxed text-plum/80">{study.problem}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-semibold text-plum">
          Process &amp; approach
        </h2>
        <ul className="flex flex-col gap-3">
          {study.process.map((step, i) => (
            <li
              key={i}
              className="flex gap-3 leading-relaxed text-plum/80"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-2xl border border-plum/10 bg-white/50 p-6">
        <h2 className="font-heading text-xl font-semibold text-plum">
          Outcome
        </h2>
        <p className="leading-relaxed text-plum/80">{study.outcome}</p>
      </section>
    </div>
  );
}
