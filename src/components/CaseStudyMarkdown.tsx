import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import type { ReactNode } from "react";

function textOf(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-heading text-2xl font-semibold text-plum sm:text-3xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-heading text-xl font-semibold text-plum">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading text-lg font-semibold text-plum">
      {children}
    </h3>
  ),
  p: ({ children }) => {
    const text = textOf(children).trim();
    const isPlaceholder = /^\[.*\]$/.test(text);
    if (isPlaceholder) {
      return (
        <div className="rounded-xl border border-dashed border-plum/25 bg-white/40 px-4 py-6 text-center text-sm italic text-plum/50">
          {text}
        </div>
      );
    }
    return <p className="leading-relaxed text-plum/80">{children}</p>;
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-terracotta pl-4 italic leading-relaxed text-plum/70">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="flex flex-col gap-2">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex gap-3 leading-relaxed text-plum/80">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-plum">{children}</strong>
  ),
  hr: () => <hr className="border-t border-plum/10" />,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-plum underline decoration-lavender underline-offset-2 hover:text-plum/80"
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
