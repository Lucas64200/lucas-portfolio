const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#missions", label: "Réalisations" },
  { href: "#projects", label: "Outils" },
];

export default function Nav() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-lg font-bold text-ink">
          Ketchup<span className="text-ketchup">Mayo</span>
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-ink-soft sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-ketchup px-5 py-2 text-sm font-semibold text-ketchup-foreground transition-opacity hover:opacity-90"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
