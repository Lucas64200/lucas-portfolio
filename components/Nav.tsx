import Blob from "@/components/Blob";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#missions", label: "Réalisations" },
  { href: "#projects", label: "Outils" },
];

export default function Nav() {
  return (
    <header className="border-b border-line">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Blob className="h-5 w-5 text-ketchup drop-shadow-[0_0_8px_rgba(255,59,59,0.85)]" />
          <span className="font-display text-lg font-semibold text-ink">
            Ketchup Mayo
          </span>
        </a>
        <ul className="hidden gap-8 text-[0.95rem] text-ink-soft sm:flex">
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
          className="glow-ketchup rounded-full bg-ketchup px-5 py-2.5 text-sm font-medium text-ketchup-foreground transition-opacity hover:opacity-90"
        >
          Nous écrire
        </a>
      </nav>
    </header>
  );
}
