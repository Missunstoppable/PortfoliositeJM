"use client";

import { useEffect, useState } from "react";

const MOODS = ["😔", "😕", "😐", "🙂", "😄"];
const STEP_MS = 650;
// Fixed illustrative pattern, not real data — this is an early concept sketch.
const WEEK_PATTERN = [1, 2, 2, 3, 2, 4, 3];

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function MoodConceptDemo() {
  const [active, setActive] = useState(prefersReducedMotion() ? 3 : 0);
  const [showTrend, setShowTrend] = useState(prefersReducedMotion);
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
      setShowTrend(false);
      MOODS.forEach((_, i) => {
        schedule(() => {
          if (!cancelled) setActive(i);
        }, i * STEP_MS);
      });

      const trendAt = MOODS.length * STEP_MS + 300;
      schedule(() => {
        if (!cancelled) setShowTrend(true);
      }, trendAt);

      schedule(() => {
        if (!cancelled) cycle();
      }, trendAt + 2200);
    }

    cycle();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  return (
    <div className="flex h-[280px] flex-col justify-center gap-6 overflow-hidden rounded-xl border border-dashed border-plum/20 bg-white p-8">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-plum/75">
        Early concept sketch — explored, not part of the final scope
      </p>

      <div className="flex justify-center gap-3">
        {MOODS.map((emoji, i) => (
          <div
            key={emoji}
            className="flex h-14 w-14 items-center justify-center rounded-full text-2xl transition-all duration-300"
            style={{
              backgroundColor: i === active ? "#CBB8DA" : "#F1ECE6",
              transform: i === active ? "scale(1.15)" : "scale(1)",
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div
        className="flex flex-col items-center gap-2 transition-opacity duration-500"
        style={{ opacity: showTrend ? 1 : 0 }}
      >
        <p className="text-xs font-medium text-plum/75">This week</p>
        <div className="flex items-end gap-2">
          {WEEK_PATTERN.map((level, i) => (
            <div
              key={i}
              className="w-4 rounded-full bg-lavender"
              style={{ height: `${level * 8 + 8}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
