import type { Metadata } from "next";
import type { ReactNode } from "react";
import { about } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";
import SeamlessPhotoLoop from "@/components/SeamlessPhotoLoop";

export const metadata: Metadata = {
  title: "About",
};

// Small circular icon badges for "How I work" — same visual language as the
// case-study [ICONS] marker (tinted circle + stroke glyph), kept local here
// since the set of icons and their meaning is specific to this page.
const HOW_I_WORK_ICONS: Record<string, ReactNode> = {
  trace: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </>
  ),
  system: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.2 7.2L11 15.5M15.8 7.2L13 15.5M8.5 6h7" />
    </>
  ),
  engineer: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  evidence: (
    <>
      <path d="M12 3v18M7 21h10M5 7h4M15 7h4" />
      <path d="M5 7l-2.5 5a2.5 2.5 0 0 0 5 0L5 7zM19 7l-2.5 5a2.5 2.5 0 0 0 5 0L19 7z" />
    </>
  ),
};

function IconBadge({ name, swatch }: { name: string; swatch: string }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${swatch}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {HOW_I_WORK_ICONS[name]}
      </svg>
    </div>
  );
}

// Shared photo treatment for the Hero and Hobbies visuals — a real photo
// (once supplied) gets the same polaroid framing used for the homepage case
// cards (white border, tape, slight tilt); until then this renders as a
// clearly-marked placeholder in the same footprint, so dropping a real
// image in later is a one-line src swap, no layout changes.
function PolaroidPhoto({
  src,
  srcs,
  alt,
  label,
  rotation = -3,
  tape = "bg-lavender",
  className = "",
}: {
  src?: string;
  srcs?: string[];
  alt: string;
  label: string;
  rotation?: number;
  tape?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <span
        className={`absolute -top-3 left-1/2 h-6 w-10 -translate-x-1/2 rotate-2 rounded-sm opacity-80 ${tape}`}
      />
      <div className="w-full rounded-sm bg-white p-3 pb-5 shadow-[0_18px_30px_-12px_rgba(69,59,74,0.4)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--surface-2)]">
          {srcs ? (
            <SeamlessPhotoLoop srcs={srcs} alt={alt} />
          ) : src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-[var(--border)] p-4 text-center text-[var(--text-faint)]">
              <svg
                width="24"
                height="24"
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
              <span className="text-xs italic leading-snug">{label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-28 pb-28 pt-16 sm:pt-20">
      {/* 1. Hero */}
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 sm:px-10 md:flex-row md:items-center md:gap-16">
        <div className="hero-fade-in flex flex-col gap-4 font-heading text-lg font-medium leading-snug text-[var(--foreground)] sm:text-xl md:text-2xl">
          <p>{about.hero.lead}</p>
          <p>{about.hero.leadTwo}</p>
          <p className="font-semibold text-[var(--highlight)]">{about.hero.emphasis}</p>
        </div>
        <div className="hero-fade-in-delay w-[220px] shrink-0 sm:w-[260px]">
          <PolaroidPhoto
            srcs={[
              "/work/about-me-hero1.jpeg",
              "/work/about-me-hero2.jpeg",
              "/work/about-me-hero3.jpeg",
            ]}
            alt="Jianan Meng"
            label="Add photo: hands mid-sketch — whiteboard or paper"
            rotation={-4}
            tape="bg-lavender"
            className="w-full"
          />
        </div>
      </section>

      {/* 2. My Path */}
      <ScrollReveal>
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--text-faint)] opacity-60">
            My path
          </h2>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-[var(--text-muted)]">
            {about.myPath.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 3. How I work */}
      <ScrollReveal>
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--text-faint)] opacity-60">
            How I work
          </h2>
          <ul className="flex flex-col gap-5">
            {about.howIWork.bullets.map((b, i) => {
              const swatches = ["bg-lavender/25", "bg-terracotta/25", "bg-sage/25", "bg-shell/40"];
              return (
                <li key={i} className="flex items-center gap-4">
                  <IconBadge name={b.icon} swatch={swatches[i % swatches.length]} />
                  <p className="leading-relaxed text-[var(--text-muted)]">{b.text}</p>
                </li>
              );
            })}
          </ul>

          <p className="leading-relaxed text-[var(--text-muted)]">{about.howIWork.bridge}</p>

          <div className="flex flex-col gap-4">
            <p className="leading-relaxed text-[var(--text-muted)]">{about.howIWork.reward[0]}</p>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 sm:p-8">
              <p className="leading-relaxed text-[var(--foreground)]">{about.howIWork.reward[1]}</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. What I believe */}
      <ScrollReveal>
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--text-faint)] opacity-60">
            What I believe
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            {about.whatIBelieve.lead}
          </p>
          <p className="text-lg font-bold leading-relaxed text-[var(--highlight)]">
            &ldquo;{about.whatIBelieve.pullQuote}?&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            {about.whatIBelieve.trailing}
          </p>
        </section>
      </ScrollReveal>

      {/* 5. When I am not in front of my screen */}
      <ScrollReveal>
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 sm:px-10">
          <h2 className="font-heading text-2xl font-semibold text-[var(--text-faint)] opacity-60">
            When I am not in front of my screen…
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-lg leading-relaxed text-[var(--text-muted)]">
                {about.hobbies.lead}
              </p>
              <p className="text-lg font-bold leading-relaxed text-[var(--foreground)]">
                {about.hobbies.emphasis}
              </p>
            </div>
            <div className="flex shrink-0 justify-center gap-6 sm:gap-8">
              <PolaroidPhoto
                src="/work/about-me-other1.jpeg"
                alt="Jianan outside of work"
                label="Add photo: basketball / badminton"
                rotation={-5}
                tape="bg-terracotta"
                className="w-[110px] sm:w-[140px]"
              />
              <PolaroidPhoto
                src="/work/about-me-other2.jpeg"
                alt="Jianan outside of work"
                label="Add photo: music / reading"
                rotation={4}
                tape="bg-sage"
                className="mt-6 w-[110px] sm:mt-8 sm:w-[140px]"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
