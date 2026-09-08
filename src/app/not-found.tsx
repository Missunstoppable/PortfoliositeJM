import Image from "next/image";
import Link from "next/link";
import FallingLeaf from "@/components/FallingLeaf";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-6 text-center sm:px-10">
      <div className="relative w-[160px] sm:w-[180px]">
        <Image
          src="/work/404.png"
          alt="Illustration of someone dozing off in a chair, mid-read, with a book about to slip"
          width={946}
          height={2048}
          className="notfound-illustration h-auto w-full"
          priority
        />
        <FallingLeaf className="absolute left-[58%] top-[24%] -translate-x-1/2" />
      </div>
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-[var(--text-faint)]">
        404
      </p>
      <h1 className="font-heading text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
        This page wandered off
      </h1>
      <p className="max-w-[46ch] text-lg leading-relaxed text-[var(--text-muted)]">
        Nothing lives at this address. The page may have moved, or the link
        might just be a little out of date.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-lavender px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-lavender-soft"
        >
          Back home
        </Link>
        <Link
          href="/work"
          className="rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          See my work
        </Link>
      </div>
    </div>
  );
}
