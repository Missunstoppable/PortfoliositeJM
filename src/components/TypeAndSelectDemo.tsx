"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "manage";
const BOLD_CHARS = 4;
const TYPE_INTERVAL_MS = 90;
const PAUSE_BEFORE_SUGGESTIONS_MS = 350;
const HOLD_MS = 3000;

const SUGGESTIONS = [
  { label: "Digital Marketing", style: "muted" as const },
  { label: "Social Media Management", style: "match" as const },
  { label: "Business", style: "muted" as const },
  { label: "Project Management", style: "normal" as const },
  { label: "Product Management", style: "normal" as const },
];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function TypeAndSelectDemo() {
  const [typed, setTyped] = useState(() =>
    prefersReducedMotion() ? FULL_TEXT : "",
  );
  const [showSuggestions, setShowSuggestions] = useState(prefersReducedMotion);
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) => {
      timeouts.push(setTimeout(fn, delay));
    };

    function cycle() {
      setTyped("");
      setShowSuggestions(false);

      for (let i = 1; i <= FULL_TEXT.length; i++) {
        schedule(() => {
          if (!cancelled) setTyped(FULL_TEXT.slice(0, i));
        }, i * TYPE_INTERVAL_MS);
      }

      const afterTyping =
        FULL_TEXT.length * TYPE_INTERVAL_MS + PAUSE_BEFORE_SUGGESTIONS_MS;
      schedule(() => {
        if (!cancelled) setShowSuggestions(true);
      }, afterTyping);

      schedule(() => {
        if (!cancelled) cycle();
      }, afterTyping + HOLD_MS);
    }

    cycle();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  return (
    <div className="overflow-hidden rounded-xl border border-plum/10 bg-white p-8">
      <p className="font-heading text-xs font-bold uppercase tracking-wide text-plum/40">
        Service category
      </p>
      <p className="mt-1 text-sm text-plum/50">
        Start typing and choose the category that best describes what you do.
      </p>
      <div className="mt-4 flex items-center rounded-xl border-2 border-lavender px-4 py-3 shadow-[0_0_0_3px_rgba(203,184,218,0.25)]">
        <span className="text-[15px] text-plum">
          <span className="font-bold">{typed.slice(0, BOLD_CHARS)}</span>
          {typed.slice(BOLD_CHARS)}
        </span>
        <span className="ml-0.5 h-4 w-px animate-pulse bg-plum" />
      </div>
      <div
        className={`mt-3 h-[210px] overflow-hidden rounded-xl border border-plum/10 transition-opacity duration-300 ease-out ${
          showSuggestions ? "opacity-100" : "opacity-0"
        }`}
      >
        {SUGGESTIONS.map((s) => (
          <div
            key={s.label}
            className={`border-b border-plum/[0.06] px-4 py-2.5 text-sm last:border-b-0 ${
              s.style === "match"
                ? "bg-lavender font-semibold text-plum"
                : s.style === "muted"
                  ? "bg-[#F9F6F2] text-plum/30"
                  : "text-plum"
            }`}
          >
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
