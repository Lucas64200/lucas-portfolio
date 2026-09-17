const LINKS = [
  { href: "#about", label: "À propos" },
  { href: "#missions", label: "Missions" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <a
          href="#top"
          className="whitespace-nowrap font-display font-semibold tracking-tight"
        >
          Lucas Monvoisin
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-zinc-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 dark:hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
