"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

// Hand-tuned per-card look so the row feels a little imperfect, like real
// polaroids clipped to a line rather than a rigid grid.
const ROTATIONS = [-6, 4, -5, 6, -4];
const TAPE_COLORS = ["bg-lavender", "bg-terracotta", "bg-sage", "bg-lavender", "bg-terracotta"];
const SAG_MAX = 46; // px the middle card drops below the ends

function sagFor(index: number, total: number) {
  const t = total > 1 ? index / (total - 1) : 0;
  return Math.sin(t * Math.PI) * SAG_MAX;
}

export default function PolaroidCaseScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    function measure() {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;
      const viewportWidth = section.clientWidth;
      setMaxTranslate(Math.max(0, track.scrollWidth - viewportWidth));
    }

    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableHeight = section.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }
      const raw = -rect.top / scrollableHeight;
      setProgress(Math.min(1, Math.max(0, raw)));
    }

    measure();
    onScroll();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <section className="flex flex-col gap-8">
        <h2 className="font-heading text-2xl font-semibold text-plum">
          Selected work
        </h2>
        <div className="flex gap-8 overflow-x-auto pb-6">
          {caseStudies.map((study, i) => (
            <PolaroidCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      style={{ height: "calc(100vh + 220vh)" }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-10 overflow-hidden">
        <h2 className="px-6 font-heading text-2xl font-semibold text-plum sm:px-10">
          Selected work
        </h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-[86px] h-px bg-plum/15" />
          <div
            ref={trackRef}
            className="flex items-start gap-12 px-[10vw] will-change-transform"
            style={{ transform: `translateX(-${progress * maxTranslate}px)` }}
          >
            {caseStudies.map((study, i) => (
              <PolaroidCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PolaroidCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const rotation = ROTATIONS[index % ROTATIONS.length];
  const sag = sagFor(index, caseStudies.length);
  const tape = TAPE_COLORS[index % TAPE_COLORS.length];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative shrink-0"
      style={{
        transform: `translateY(${sag}px) rotate(${rotation}deg)`,
      }}
    >
      <span
        className={`absolute -top-3 left-1/2 h-6 w-10 -translate-x-1/2 rotate-2 rounded-sm opacity-80 ${tape}`}
      />
      <div className="w-56 rounded-sm bg-white p-3 pb-5 shadow-[0_18px_30px_-12px_rgba(69,59,74,0.4)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-0">
        <div className="flex aspect-[4/5] items-center justify-center rounded-sm bg-gradient-to-br from-lavender-soft to-lavender p-4 text-center">
          <span className="font-heading text-lg font-semibold text-plum">
            {study.title}
          </span>
        </div>
        <p className="mt-3 text-center font-heading text-sm font-semibold text-plum">
          {study.subtitle}
        </p>
        <p className="mt-1 text-center text-xs text-plum/60">
          {study.metricsPreview}
        </p>
      </div>
    </Link>
  );
}
