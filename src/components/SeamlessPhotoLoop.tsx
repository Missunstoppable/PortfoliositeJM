"use client";

import { useEffect, useState } from "react";

export default function SeamlessPhotoLoop({
  srcs,
  alt,
}: {
  srcs: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (srcs.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % srcs.length);
    }, 3200);
    return () => clearInterval(id);
  }, [srcs.length]);

  return (
    <div className="relative h-full w-full">
      {srcs.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === index ? alt : ""}
          aria-hidden={i === index ? undefined : true}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
