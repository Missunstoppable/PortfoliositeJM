import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function MoreCaseStudies({ currentSlug }: { currentSlug: string }) {
  // Always the next study after this one in homepage order, looping from
  // the last study back to the first — never "more" than one, and never
  // itself if it's the only study.
  const total = caseStudies.length;
  const currentIndex = Math.max(
    0,
    caseStudies.findIndex((s) => s.slug === currentSlug),
  );
  const next = total > 1 ? caseStudies[(currentIndex + 1) % total] : null;

  if (!next) return null;

  return (
    <section className="mt-4 flex flex-col gap-6 border-t border-[var(--border)] pt-12">
      <h2 className="font-heading text-xl font-semibold text-[var(--foreground)]">
        Next case study
      </h2>
      <Link
        href={`/work/${next.slug}`}
        className="group flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-6 transition-all hover:-translate-y-0.5 hover:border-lavender hover:shadow-[0_8px_24px_-8px_rgba(203,184,218,0.6)]"
      >
        <span className="font-heading text-lg font-semibold text-[var(--foreground)]">
          {next.title}
        </span>
        <span className="text-sm leading-relaxed text-[var(--text-muted)]">
          {next.oneLiner}
        </span>
        <span className="mt-1 text-sm font-medium text-[var(--text-faint)] group-hover:text-[var(--foreground)]">
          View case study →
        </span>
      </Link>
    </section>
  );
}
