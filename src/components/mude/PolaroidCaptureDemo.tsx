"use client";

import { useEffect, useState } from "react";

const CAPTION = "Coffee with Mia";
const TYPE_INTERVAL_MS = 80;
const HOLD_MS = 2200;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function PolaroidCaptureDemo() {
  const [developed, setDeveloped] = useState(prefersReducedMotion);
  const [caption, setCaption] = useState(() =>
    prefersReducedMotion() ? CAPTION : "",
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
      setDeveloped(false);
      setCaption("");

      schedule(() => {
        if (!cancelled) setDeveloped(true);
      }, 200);

      const captionStart = 900;
      for (let i = 1; i <= CAPTION.length; i++) {
        schedule(() => {
          if (!cancelled) setCaption(CAPTION.slice(0, i));
        }, captionStart + i * TYPE_INTERVAL_MS);
      }

      const restart = captionStart + CAPTION.length * TYPE_INTERVAL_MS + HOLD_MS;
      schedule(() => {
        if (!cancelled) cycle();
      }, restart);
    }

    cycle();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [reducedMotion]);

  return (
    <div className="flex h-[280px] items-center justify-center gap-6 overflow-hidden rounded-xl border border-plum/10 bg-white p-8">
      {/* Collection stack, peeking behind */}
      <div className="relative hidden h-[168px] w-[132px] shrink-0 sm:block">
        <div className="absolute inset-0 -rotate-6 rounded-sm bg-white p-2 shadow-md">
          <div className="h-[110px] w-full rounded-sm bg-sage/25" />
          <div className="mt-2 h-2 w-3/4 rounded bg-plum/10" />
        </div>
        <div className="absolute inset-0 translate-x-3 rotate-3 rounded-sm bg-white p-2 shadow-md">
          <div className="h-[110px] w-full rounded-sm bg-terracotta/25" />
          <div className="mt-2 h-2 w-2/3 rounded bg-plum/10" />
        </div>
      </div>

      {/* Main polaroid being captured */}
      <div className="w-[152px] shrink-0 rotate-1 rounded-sm bg-white p-2.5 shadow-[0_18px_30px_-12px_rgba(69,59,74,0.35)]">
        <div className="relative h-[130px] w-full overflow-hidden rounded-sm bg-gradient-to-br from-lavender-soft to-lavender">
          <div
            className="absolute inset-0 bg-gradient-to-br from-lavender-soft to-lavender transition-all duration-700 ease-out"
            style={{
              opacity: developed ? 0 : 1,
              backdropFilter: developed ? "blur(0px)" : "blur(8px)",
            }}
          />
        </div>
        <div className="mt-3 flex h-4 items-center justify-center">
          <span className="text-center text-[11px] italic leading-tight text-plum">
            {caption}
            <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-plum align-middle" />
          </span>
        </div>
      </div>
    </div>
  );
}
