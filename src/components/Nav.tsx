import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="font-heading text-lg font-semibold text-plum"
        >
          Jianan Meng
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-plum/80 transition-colors hover:text-plum"
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
