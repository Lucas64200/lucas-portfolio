const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#missions", label: "Réalisations" },
  { href: "#projects", label: "Outils" },
];

export default function Nav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 rounded-full border-2 border-bg-raised bg-bg/95 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur">
        <a
          href="#top"
          className="rounded-full bg-ketchup px-4 py-2 font-display text-lg font-bold text-ketchup-foreground"
        >
          Ketchup Mayo
        </a>
        <ul className="hidden gap-1 text-sm font-semibold text-ink sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-2 transition-colors hover:bg-bg-raised hover:text-mayo"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-mayo px-4 py-2 text-sm font-bold text-mayo-foreground transition-transform hover:scale-105"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
