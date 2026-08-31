import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-plum/10 bg-white/50 p-6 transition-all hover:-translate-y-0.5 hover:border-lavender hover:shadow-[0_8px_24px_-8px_rgba(203,184,218,0.6)]"
    >
      <span className="font-heading text-xl font-semibold text-plum">
        {study.title}
      </span>
      <span className="text-sm text-plum/80">{study.subtitle}</span>
      <span className="text-sm text-plum/60">{study.summary}</span>
      {study.metricsPreview && (
        <span className="mt-2 inline-flex w-fit rounded-full bg-sage/25 px-3 py-1 text-xs font-medium text-plum">
          {study.metricsPreview}
        </span>
      )}
      <span className="mt-1 text-sm font-medium text-plum/70 group-hover:text-plum">
        View case study →
      </span>
    </Link>
  );
}
