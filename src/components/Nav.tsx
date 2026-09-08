import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="w-full">
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
