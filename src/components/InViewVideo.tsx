"use client";

import { useEffect, useRef } from "react";

// Ambient, silent walkthrough clips — no controls, no user-initiated play.
// Starts as soon as it scrolls into view and loops for as long as it's
// visible, pausing again once it scrolls back out.
export default function InViewVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be blocked in rare cases (e.g. low-power mode) —
            // the clip is purely decorative, so failing silently is fine.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
      className="h-auto w-full"
    />
  );
}
