export default function Footer() {
  return (
    <footer className="w-full border-t border-plum/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-10 text-sm text-plum/70 sm:flex-row sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} Jianan Meng. Made with care.</p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:meng_jianan@yahoo.com"
            className="transition-colors hover:text-plum"
          >
            meng_jianan@yahoo.com
          </a>
          <a
            href="https://www.linkedin.com/in/jianan-meng-190264145/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-plum"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
