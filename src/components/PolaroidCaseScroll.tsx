"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";

// Hand-tuned per-card look so the photos feel a little imperfect, like real
// polaroids clipped to a line rather than a rigid grid. Only the photo
// tilts now — the row itself stays level so the text block reads cleanly.
const ROTATIONS = [-4, 3, -3, 4, -3];
const TAPE_COLORS = ["bg-lavender", "bg-terracotta", "bg-sage", "bg-lavender", "bg-terracotta"];

// Slugs with a dedicated card image (`<slug>-casecard.png`); anything else
// falls back to the case study's hero-style `<slug>.png`.
const CASECARD_SLUGS = new Set(["osdire", "quabble", "mude", "famcook", "spira9"]);

// Shared animation config for every card's enter/exit — one instance of
// these values applied identically everywhere, not tuned per card.
const FADE_THRESHOLD = 0.2;

export default function PolaroidCaseScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTranslateRef = useRef(0);
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
      // A drag offset is only a temporary preview — once the visitor
      // resumes vertical scrolling, position resyncs to the scroll-driven
      // value rather than staying wherever the drag left it.
      setDragOffset(0);
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

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion || maxTranslate <= 0) return;
    if ((e.target as HTMLElement).closest("a")) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartTranslateRef.current = progress * maxTranslate;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const target = dragStartTranslateRef.current - deltaX;
    const clamped = Math.min(Math.max(target, 0), maxTranslate);
    setDragOffset(clamped - progress * maxTranslate);
  }

  function endDrag() {
    draggingRef.current = false;
  }

  const translate = Math.min(
    Math.max(progress * maxTranslate + dragOffset, 0),
    maxTranslate,
  );

  if (reducedMotion) {
    return (
      <section className="flex flex-col gap-8">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            Selected works
          </h2>
        </div>
        <div className="flex gap-10 overflow-x-auto px-6 pb-6 sm:px-10">
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
      id="selected-works-pin"
      style={{ height: "calc(100vh + 220vh)" }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-8 sm:pt-12">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
            Selected works
          </h2>
        </div>
        {/* Takes the remaining height below the heading and centers the
            row of cards within it, so there's real breathing room between
            the title and the gallery instead of the cards sitting right
            underneath it. */}
        <div className="relative flex flex-1 items-center">
          <div
            ref={trackRef}
            className="flex cursor-grab select-none items-stretch gap-[4vw] pl-[6vw] will-change-transform active:cursor-grabbing"
            style={{ transform: `translateX(-${translate}px)` }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
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
  const tape = TAPE_COLORS[index % TAPE_COLORS.length];
  const textRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    let enterTimer: number | undefined;

    // Two observers, deliberately: this animation is scroll-position
    // driven (not time-driven), so "500ms before it leaves" can't be
    // predicted from scroll position alone — a shrunk rootMargin
    // approximates it spatially (the exit observer reports "left" while
    // the card still has a real margin of true visibility remaining).
    // Entrance uses the literal 500ms delay that was asked for, since
    // that direction doesn't require predicting the future.
    const enterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          enterTimer = window.setTimeout(() => setInView(true), 500);
        } else if (enterTimer) {
          window.clearTimeout(enterTimer);
        }
      },
      { threshold: FADE_THRESHOLD },
    );

    const exitObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (enterTimer) window.clearTimeout(enterTimer);
          setInView(false);
        }
      },
      { threshold: 0, rootMargin: "0px -18% 0px -18%" },
    );

    enterObserver.observe(el);
    exitObserver.observe(el);
    return () => {
      if (enterTimer) window.clearTimeout(enterTimer);
      enterObserver.disconnect();
      exitObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex w-[82vw] max-w-[1300px] shrink-0 flex-col gap-8 rounded-xl p-3 sm:flex-row sm:items-center sm:gap-24">
      {/* Photo — the only tilted element, and (along with "View case
          study") one of the two actual click targets on the card. The
          hover fade/lift is scoped to just this Link (its own `group`),
          not the whole card, since the text column isn't clickable. */}
      <Link
        href={`/work/${study.slug}`}
        className="group relative mx-auto w-[62%] shrink-0 sm:mx-0 sm:w-[38%]"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <span
          className={`absolute -top-3 left-1/2 h-6 w-10 -translate-x-1/2 rotate-2 rounded-sm opacity-80 ${tape}`}
        />
        <div className="w-full rounded-sm bg-white p-3 pb-5 shadow-[0_18px_30px_-12px_rgba(69,59,74,0.4)] transition-transform duration-300 group-hover:-translate-y-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={
                CASECARD_SLUGS.has(study.slug)
                  ? `/work/casecards/${study.slug}-casecard.png`
                  : `/work/${study.slug}.png`
              }
              alt={`${study.title} preview`}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              sizes="(min-width: 640px) 40vw, 60vw"
            />
          </div>
        </div>
      </Link>

      {/* Text block — not a click target itself; only the photo above and
          "View case study" below navigate. */}
      <div
        ref={textRef}
        className={`case-card-text flex flex-1 flex-col gap-4 ${
          inView ? "in-view" : ""
        }`}
      >
        <p className="font-heading text-xl font-semibold text-[var(--foreground)]">
          {study.title} · {study.category}
        </p>
        <p className="text-base leading-relaxed text-[var(--text-muted)]">
          {study.oneLiner}
        </p>
        <p className="font-heading text-lg font-semibold text-[var(--foreground)]">
          {study.outcomeStat}
        </p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="case-tag">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${study.slug}`}
          className="case-card-link mt-4 w-fit text-base font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--text-muted)]"
        >
          View case study <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
