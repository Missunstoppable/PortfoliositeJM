"use client";

import { useEffect, useState } from "react";

type Phase = "on" | "off" | "goodnight" | "blackout";

const OFF_AT_MS = 900;
const GOODNIGHT_AT_MS = 1700;
const BLACKOUT_AT_MS = 3600;
const HOLD_MS = 1600;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function GoodbyeSwitchDemo() {
  const [phase, setPhase] = useState<Phase>(() =>
    prefersReducedMotion() ? "goodnight" : "on",
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
      setPhase("on");
      schedule(() => !cancelled && setPhase("off"), OFF_AT_MS);
      schedule(() => !cancelled && setPhase("goodnight"), GOODNIGHT_AT_MS);
      schedule(() => !cancelled && setPhase("blackout"), BLACKOUT_AT_MS);
      schedule(() => !cancelled && cycle(), BLACKOUT_AT_MS + HOLD_MS);
    }

    cycle();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  const lampOn = phase === "on";
  const dark = phase === "goodnight" || phase === "blackout";
  const blackout = phase === "blackout";

  return (
    <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-xl border border-plum/10 bg-white">
      {/* Background crossfade: ivory -> deep plum */}
      <div
        className="absolute inset-0 transition-colors duration-[900ms] ease-in-out"
        style={{ backgroundColor: dark ? "#2E2733" : "#FAF6F1" }}
      />

      {/* Lamp + switch, visible pre-goodnight */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 transition-opacity duration-500"
        style={{ opacity: dark ? 0 : 1, pointerEvents: "none" }}
      >
        <div className="relative flex flex-col items-center">
          <svg width="100" height="56" viewBox="0 0 100 56" aria-hidden="true">
            <polygon points="30,0 70,0 92,52 8,52" fill="#8A7F92" />
          </svg>
          <div
            className="absolute top-9 h-14 w-14 rounded-full bg-terracotta blur-xl transition-opacity duration-700 ease-in-out"
            style={{ opacity: lampOn ? 0.8 : 0 }}
          />
          <div className="h-9 w-1.5 bg-plum/40" />
          <div className="h-1.5 w-16 rounded-full bg-plum/40" />
        </div>

        {/* ON/OFF switch */}
        <div className="flex h-9 w-32 items-center rounded-full border border-plum/15 bg-[#F1ECE6] p-1">
          <div
            className="flex h-full w-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-plum shadow-sm transition-transform duration-500 ease-in-out"
            style={{
              transform: lampOn ? "translateX(0%)" : "translateX(100%)",
            }}
          >
            {lampOn ? "ON" : "OFF"}
          </div>
        </div>
      </div>

      {/* Good night message */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
        style={{ opacity: phase === "goodnight" ? 1 : 0 }}
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-terracotta/25 blur-0">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-terracotta/20 blur-xl" />
        </div>
        <p className="absolute font-heading text-lg font-semibold text-[#F6F2EE]">
          Good night
        </p>
      </div>

      {/* Blackout */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-700"
        style={{ opacity: blackout ? 1 : 0 }}
      />
    </div>
  );
}
