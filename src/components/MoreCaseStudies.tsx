import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function MoreCaseStudies({
  currentSlug,
  count = 3,
}: {
  currentSlug: string;
  count?: number;
}) {
  // Rotate from the current study's position rather than always slicing the
  // first N — otherwise studies near the end of the array (e.g. the last
  // one) would never surface as a "more case studies" recommendation.
  const total = caseStudies.length;
  const currentIndex = Math.max(
    0,
    caseStudies.findIndex((s) => s.slug === currentSlug),
  );
  const others = Array.from(
    { length: Math.min(count, total - 1) },
    (_, i) => caseStudies[(currentIndex + i + 1) % total],
  );

  if (others.length === 0) return null;

  return (
    <section className="mt-4 flex flex-col gap-6 border-t border-[var(--border)] pt-12">
      <h2 className="font-heading text-xl font-semibold text-[var(--foreground)]">
        More case studies
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-5 transition-all hover:-translate-y-0.5 hover:border-lavender hover:shadow-[0_8px_24px_-8px_rgba(203,184,218,0.6)]"
          >
            <span className="font-heading text-base font-semibold text-[var(--foreground)]">
              {study.title}
            </span>
            <span className="text-sm leading-relaxed text-[var(--text-muted)]">
              {study.oneLiner}
            </span>
            <span className="mt-1 text-sm font-medium text-[var(--text-faint)] group-hover:text-[var(--foreground)]">
              View case study →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
