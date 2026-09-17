const LINKS = [
  { href: "#about", label: "Profil" },
  { href: "#missions", label: "Missions" },
  { href: "#projects", label: "Projets" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold italic text-ink">
          Lucas Monvoisin
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-ink-soft sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-neon">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-neon px-5 py-2 text-sm font-semibold text-neon-foreground transition-transform hover:scale-105"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
