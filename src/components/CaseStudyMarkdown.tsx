import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import type { Components } from "react-markdown";
import type { ReactNode } from "react";
import TypeAndSelectDemo from "./TypeAndSelectDemo";
import PolaroidCaptureDemo from "./mude/PolaroidCaptureDemo";
import VentReleaseDemo from "./mude/VentReleaseDemo";
import MoodConceptDemo from "./mude/MoodConceptDemo";
import GoodbyeSwitchDemo from "./mude/GoodbyeSwitchDemo";
import InViewVideo from "./InViewVideo";

const DEMOS: Record<string, React.ComponentType> = {
  "type-and-select": TypeAndSelectDemo,
  "polaroid-capture": PolaroidCaptureDemo,
  "vent-release": VentReleaseDemo,
  "mood-concept": MoodConceptDemo,
  "goodbye-switch": GoodbyeSwitchDemo,
};

function textOf(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

// Used by the `[ICONS: ...]` marker — a small set of generic role icons
// (matched by keyword, case-insensitive) plus a plain fallback, so any
// short label list can get an icon without needing a bespoke glyph.
function iconPathFor(label: string) {
  const key = label.toLowerCase();
  if (key.includes("engineer")) {
    return (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    );
  }
  if (key.includes("market")) {
    return (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    );
  }
  if (key.includes("design")) {
    return (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </>
    );
  }
  return <circle cx="12" cy="12" r="9" />;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-heading text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading text-xl font-semibold text-[var(--foreground)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading text-lg font-semibold text-[var(--foreground)]">
      {children}
    </h3>
  ),
  p: ({ children }) => {
    const text = textOf(children).trim();

    const metaMatch = text.match(/^\[META:\s*([\s\S]+)\]$/);
    if (metaMatch) {
      const pairs = metaMatch[1]
        .split("|")
        .map((pair) => {
          const [label, ...rest] = pair.split("=");
          return { label: label?.trim(), value: rest.join("=").trim() };
        })
        .filter((p) => p.label && p.value);
      return (
        <dl className="grid grid-cols-1 gap-x-8 gap-y-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 p-6 sm:grid-cols-2">
          {pairs.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-heading text-xs font-bold uppercase tracking-wide text-[var(--text-faint)]">
                {label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-[var(--foreground)]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      );
    }

    // [STATS: 80% = of recommendations adopted | 4.5k = views on Quabbler
    // Stories] — a row of outcome cards where only the number is given
    // heavy visual weight; the description next to it stays body-text
    // size, so a project with several headline numbers doesn't turn into
    // several equally-shouty stat tiles.
    const statsMatch = text.match(/^\[STATS:\s*([\s\S]+)\]$/);
    if (statsMatch) {
      const stats = statsMatch[1]
        .split("|")
        .map((pair) => {
          const [number, ...rest] = pair.split("=");
          return { number: number?.trim(), label: rest.join("=").trim() };
        })
        .filter((s) => s.number && s.label);
      const cols =
        stats.length >= 4 ? "sm:grid-cols-4" : stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
      return (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex flex-col items-center gap-1 rounded-xl border border-lavender/40 bg-lavender/15 p-5 text-center"
            >
              <p className="font-heading text-3xl font-semibold text-[var(--foreground)]">
                {stat.number}
              </p>
              <p className="text-sm leading-snug text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      );
    }

    const heroMatch = text.match(/^\[HERO IMAGE(?::\s*(.+))?\]$/);
    if (heroMatch) {
      const file = heroMatch[1]?.trim();
      if (file) {
        return (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={`/work/${file}`}
              alt="Case study hero image"
              fill
              className="object-cover object-top"
              sizes="(min-width: 640px) 768px, 100vw"
              priority
            />
          </div>
        );
      }
      return (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/40 text-[var(--text-faint)]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-sm italic">Add hero image</span>
        </div>
      );
    }

    const imageMatch = text.match(/^\[IMAGE:\s*(.+)\]$/);
    if (imageMatch) {
      const file = imageMatch[1].trim();
      return (
        <div className="overflow-hidden rounded-xl border border-[var(--border)]">
          <Image
            src={`/work/${file}`}
            alt=""
            width={1200}
            height={900}
            className="h-auto w-full"
            sizes="(min-width: 640px) 768px, 100vw"
          />
        </div>
      );
    }

    const videoMatch = text.match(/^\[VIDEO:\s*(.+)\]$/);
    if (videoMatch) {
      const file = videoMatch[1].trim();
      return (
        <div className="flex justify-center rounded-3xl bg-lavender/15 p-10 sm:p-14">
          {/* The source file is pre-cropped tight to the recording's own
              phone bezel (see mude-venting-flow-cropped.mp4) — no black
              canvas margin left to hide, so a corner radius approximating
              the bezel's own curve is enough: the video's rounded edge and
              its natural light rim read as the boundary against the pastel
              backdrop, not an artificial crop. Slight tilt to match the
              reference mockup rather than sitting dead straight. */}
          <div className="w-full max-w-[260px] -rotate-3 overflow-hidden rounded-[32px] shadow-[0_20px_40px_-16px_rgba(69,59,74,0.35)]">
            <InViewVideo src={`/work/${file}`} />
          </div>
        </div>
      );
    }

    const scrollImageMatch = text.match(/^\[SCROLL IMAGE:\s*(.+)\]$/);
    if (scrollImageMatch) {
      const file = scrollImageMatch[1].trim();
      return (
        <div className="h-[384px] overflow-y-auto overflow-x-hidden overscroll-contain rounded-xl border border-[var(--border)]">
          <Image
            src={`/work/${file}`}
            alt=""
            width={1200}
            height={900}
            className="h-auto w-full"
            sizes="(min-width: 640px) 768px, 100vw"
          />
        </div>
      );
    }

    const splitMatch = text.match(/^\[SPLIT:\s*(.+?)\s*\|\s*(.+)\]$/);
    if (splitMatch) {
      const file = splitMatch[1].trim();
      const caption = splitMatch[2].trim();
      return (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-10">
          <div className="w-full max-w-[220px] shrink-0 overflow-hidden rounded-xl border border-[var(--border)] sm:max-w-[240px]">
            <Image
              src={`/work/${file}`}
              alt=""
              width={480}
              height={1040}
              className="h-auto w-full"
              sizes="240px"
            />
          </div>
          <p className="leading-relaxed text-[var(--text-muted)]">{caption}</p>
        </div>
      );
    }

    const iconsMatch = text.match(/^\[ICONS:\s*(.+)\]$/);
    if (iconsMatch) {
      const labels = iconsMatch[1].split(",").map((l) => l.trim());
      const swatches = ["bg-lavender/20", "bg-terracotta/20", "bg-sage/20"];
      return (
        <div className="flex flex-wrap justify-center gap-8 py-2 sm:gap-14">
          {labels.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${swatches[i % swatches.length]}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {iconPathFor(label)}
                </svg>
              </div>
              <span className="text-sm font-medium text-[var(--text-muted)]">{label}</span>
            </div>
          ))}
        </div>
      );
    }

    const demoMatch = text.match(/^\[DEMO:\s*(.+)\]$/);
    if (demoMatch) {
      const Demo = DEMOS[demoMatch[1].trim()];
      if (Demo) return <Demo />;
    }

    const galleryMatch = text.match(/^\[GALLERY:\s*(.+)\]$/);
    if (galleryMatch) {
      const files = galleryMatch[1].split(",").map((f) => f.trim());
      const cols = files.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
      return (
        <div className={`grid grid-cols-1 gap-4 ${cols}`}>
          {files.map((file) => (
            <div
              key={file}
              className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border border-plum/10"
            >
              <Image
                src={`/work/${file}`}
                alt=""
                width={900}
                height={900}
                className="h-auto w-full"
                sizes="280px"
              />
            </div>
          ))}
        </div>
      );
    }

    const isPlaceholder = /^\[.*\]$/.test(text);
    if (isPlaceholder) {
      return (
        <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)]/40 px-4 py-6 text-center text-sm italic text-[var(--text-faint)]">
          {text}
        </div>
      );
    }
    return <p className="leading-relaxed text-[var(--text-muted)]">{children}</p>;
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-terracotta pl-4 italic leading-relaxed text-[var(--text-muted)]">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="flex flex-col gap-2">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex gap-3 leading-relaxed text-[var(--text-muted)]">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--foreground)]">{children}</strong>
  ),
  hr: () => <hr className="border-t border-[var(--border)]" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[var(--foreground)] underline decoration-lavender underline-offset-2 hover:text-[var(--text-muted)]"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};

export default function CaseStudyMarkdown({ content }: { content: string }) {
  return (
    <div className="flex flex-col gap-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
