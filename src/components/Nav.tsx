"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    function checkPinnedSection() {
      tickingRef.current = false;
      const pinned = document.getElementById("selected-works-pin");
      if (!pinned) {
        setHidden(false);
        return;
      }
      const rect = pinned.getBoundingClientRect();
      // The section is actively pinned (its inner content is sticky-locked
      // to the top of the viewport) exactly while its tall wrapper spans
      // past the top of the screen — hide the nav for that stretch so it
      // doesn't sit on top of the pinned cards.
      setHidden(rect.top <= 0 && rect.bottom > 0);
    }

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(checkPinnedSection);
    }

    checkPinnedSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[var(--background)] transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto grid w-full max-w-[1180px] grid-cols-2 items-center gap-4 px-6 py-6 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-[var(--foreground)]"
        >
          Jianan Meng
        </Link>
        <div className="order-3 col-span-2 flex justify-center md:order-none md:col-span-1">
          <ThemeToggle />
        </div>
        <ul className="flex items-center justify-end gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-8">
        <div className="border-t border-[var(--border)]" />
      </div>
    </header>
  );
}
