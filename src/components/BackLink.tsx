"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

// Defaults to a plain link to /work (works without JS, crawlable). If the
// visitor actually navigated here from within the site, clicking instead
// goes back to wherever they came from — home, the work grid, or another
// case study via the "more case studies" cards.
export default function BackLink() {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const referrer = document.referrer;
    const cameFromSameOrigin =
      referrer && new URL(referrer).origin === window.location.origin;

    if (cameFromSameOrigin && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  }

  return (
    <Link
      href="/work"
      onClick={handleClick}
      className="w-fit text-sm font-medium text-[var(--text-faint)] transition-colors hover:text-[var(--foreground)]"
    >
      ← Back
    </Link>
  );
}
