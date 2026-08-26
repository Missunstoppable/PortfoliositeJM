import type { Metadata } from "next";
import { about } from "@/data/content";

export const metadata: Metadata = {
  title: "About — Jianan Meng",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-20 sm:px-10">
      <h1 className="font-heading text-3xl font-semibold text-plum sm:text-4xl">
        About me
      </h1>
      <div className="flex flex-col gap-6 text-lg leading-relaxed text-plum/80">
        <p>{about.intro}</p>
        <p className="rounded-2xl border border-plum/10 bg-white/50 p-6 text-plum">
          {about.philosophy}
        </p>
        <p>{about.focus}</p>
        <p>{about.foundation}</p>
        <p>{about.personal}</p>
      </div>
    </div>
  );
}
