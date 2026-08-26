"use client";

import { useEffect, useState, type KeyboardEvent, type TransitionEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BookCover() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    document.body.classList.add("cover-mode");
    return () => document.body.classList.remove("cover-mode");
  }, []);

  function openBook() {
    if (opening) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      router.push("/contents");
      return;
    }
    setOpening(true);
  }

  function handleTransitionEnd(e: TransitionEvent<HTMLDivElement>) {
    if (e.propertyName === "transform") {
      router.push("/contents");
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openBook();
    }
  }

  return (
    <div className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center px-6 [perspective:1800px]">
      <div
        role="button"
        tabIndex={0}
        aria-label="Open Jianan Meng's portfolio"
        onClick={openBook}
        onKeyDown={handleKeyDown}
        onTransitionEnd={handleTransitionEnd}
        className={`w-full max-w-sm cursor-pointer rounded-3xl bg-[#f6f2ee] p-10 text-center shadow-[0_35px_70px_-20px_rgba(69,59,74,0.55)] outline-none transition-transform duration-700 ease-in-out will-change-transform [transform-origin:left_center] [transform-style:preserve-3d] focus-visible:ring-2 focus-visible:ring-white ${
          opening
            ? "opacity-0 [transform:rotateY(-110deg)]"
            : "opacity-100 [transform:rotateY(0deg)]"
        }`}
      >
        <div className="relative mx-auto mb-6 h-40 w-40">
          <Image
            src="/hero-avatar.png"
            alt="Illustrated portrait of Jianan Meng"
            fill
            className="object-contain"
            priority
            sizes="160px"
          />
        </div>
        <h1 className="font-heading text-2xl font-bold text-plum">
          Jianan Meng
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-plum/70">
          Product Designer turning complex journeys into clear, simple,
          measurable and ultimately HUMAN product experiences.
        </p>
        <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-terracotta">
          Product Designer
        </p>
        <p className="mt-8 animate-pulse text-xs font-medium uppercase tracking-widest text-plum/50">
          Tap to open →
        </p>
      </div>
    </div>
  );
}
