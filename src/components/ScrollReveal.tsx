"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section-reveal ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  );
}
