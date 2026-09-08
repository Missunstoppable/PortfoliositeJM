"use client";

import { useEffect, useState } from "react";

const THOUGHT = "Ugh, that meeting really got to me…";
const TYPE_INTERVAL_MS = 55;
const RELEASED_HOLD_MS = 2400;

type Phase = "typing" | "released";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function VentReleaseDemo() {
  const [typed, setTyped] = useState(() =>
    prefersReducedMotion() ? THOUGHT : "",
  );
  const [phase, setPhase] = useState<Phase>(() =>
    prefersReducedMotion() ? "released" : "typing",
  );
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) =>
      timeouts.push(setTimeout(fn, delay));

    function cycle() {
      setTyped("");
      setPhase("typing");

      for (let i = 1; i <= THOUGHT.length; i++) {
        schedule(() => {
          if (!cancelled) setTyped(THOUGHT.slice(0, i));
        }, i * TYPE_INTERVAL_MS);
      }

      const releaseAt = THOUGHT.length * TYPE_INTERVAL_MS + 700;
      schedule(() => {
        if (!cancelled) setPhase("released");
      }, releaseAt);

      schedule(() => {
        if (!cancelled) cycle();
      }, releaseAt + RELEASED_HOLD_MS);
    }

    cycle();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  const released = phase === "released";

  return (
    <div className="flex h-[280px] flex-col items-center justify-center gap-6 overflow-hidden rounded-xl border border-plum/10 bg-white p-8">
      <div className="w-full max-w-sm rounded-2xl border border-plum/10 bg-[#F9F6F2] p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-plum/75">
          Let it out
        </p>
        <p
          className="min-h-[52px] text-[15px] leading-relaxed text-plum transition-all duration-700 ease-in"
          style={{
            opacity: released ? 0 : 1,
            transform: released
              ? "translateY(10px) scale(0.96)"
              : "translateY(0) scale(1)",
          }}
        >
          {typed}
          {!released && (
            <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-plum align-middle" />
          )}
        </p>
      </div>

      <div
        className="flex items-center gap-2 text-sm text-plum/75 transition-opacity duration-500"
        style={{ opacity: released ? 1 : 0 }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16Z" />
        </svg>
        <span>
          Let it go — you don&apos;t need to carry this into tomorrow.
        </span>
      </div>
    </div>
  );
}
