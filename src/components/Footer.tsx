import { footerContact } from "@/data/content";

const EMAIL = "meng_jianan@yahoo.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/jianan-m/";
const RESUME_URL = "https://drive.google.com/file/d/1yMn-MW4xcINWhSf1fkZil1EdXTEn1f1M/view?usp=sharing";
// Hidden for now while aiming for both PM and PD roles — flip to true to show the résumé link again.
const SHOW_RESUME = false;

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-heading text-2xl font-semibold leading-tight text-lavender sm:text-4xl">
          {footerContact.heading}
        </h2>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-[var(--plum)] transition-transform hover:-translate-y-0.5"
        >
          {footerContact.ctaLabel}
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          Connect with me on LinkedIn.
        </a>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 border-t border-[var(--border)] px-6 py-8 text-sm text-[var(--text-muted)] sm:flex-row sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} Jianan Meng.</p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-[var(--foreground)]">
            Email me
          </a>
          {SHOW_RESUME && (
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Résumé
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
