"use client";

import { useEffect, useState } from "react";

type Phase = "idle" | "dimming" | "sleep";

const DIM_AT_MS = 500;
const SLEEP_AT_MS = 1400;
const HOLD_MS = 2600;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function GoodbyeSwitchDemo() {
  const [phase, setPhase] = useState<Phase>(() =>
    prefersReducedMotion() ? "sleep" : "idle",
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
      setPhase("idle");
      schedule(() => {
        if (!cancelled) setPhase("dimming");
      }, DIM_AT_MS);
      schedule(() => {
        if (!cancelled) setPhase("sleep");
      }, SLEEP_AT_MS);
      schedule(() => {
        if (!cancelled) cycle();
      }, SLEEP_AT_MS + HOLD_MS);
    }

    cycle();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  const dimmed = phase !== "idle";
  const asleep = phase === "sleep";

  return (
    <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-xl border border-plum/10 bg-white p-8">
      <div
        className="absolute inset-0 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: dimmed ? "#453B4A" : "#FFFFFF" }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Light switch */}
        <div
          className="flex h-16 w-9 items-center rounded-full p-1.5 transition-colors duration-500"
          style={{ backgroundColor: dimmed ? "#CBB8DA" : "#E3D8EA" }}
        >
          <div
            className="h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-500 ease-in-out"
            style={{ transform: dimmed ? "translateY(28px)" : "translateY(0)" }}
          />
        </div>

        <button
          type="button"
          tabIndex={-1}
          className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-500"
          style={{
            backgroundColor: dimmed ? "rgba(255,255,255,0.12)" : "#453B4A",
            color: "#FFFFFF",
            opacity: asleep ? 0 : 1,
            pointerEvents: "none",
          }}
        >
          Say goodbye to today
        </button>

        <div
          className="flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: asleep ? 1 : 0 }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F6F2EE"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
          <p className="text-sm font-semibold text-[#F6F2EE]">
            Sleep Mode on
          </p>
          <p className="max-w-[220px] text-center text-xs text-[#F6F2EE]/60">
            Notifications paused. See you tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
