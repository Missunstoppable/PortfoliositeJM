import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-20 sm:px-10">
      <h1 className="font-heading text-3xl font-semibold text-plum sm:text-4xl">
        Selected work
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
