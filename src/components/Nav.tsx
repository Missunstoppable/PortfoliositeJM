"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Works" },
  { href: "/experience", label: "Experience" },
];

export default function Nav() {
  const pathname = usePathname();
  const onCover = pathname === "/";

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className={`font-heading text-lg font-semibold ${
            onCover ? "text-white" : "text-plum"
          }`}
        >
          Jianan Meng
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  onCover
                    ? "text-white/80 transition-colors hover:text-white"
                    : "text-plum/80 transition-colors hover:text-plum"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
