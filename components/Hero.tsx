export default function Hero() {
  return (
    <section id="top" className="px-6 py-24 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <h1 className="reveal text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-7xl">
          On automatise le travail répétitif de votre entreprise{" "}
          <span className="text-ketchup">à coups d&apos;IA</span>.
        </h1>

        <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink-soft [animation-delay:100ms]">
          Studio d&apos;automatisation IA : process métier automatisés et
          assistants sur mesure pour équipes commerciales.
        </p>

        <div className="reveal mt-10 flex flex-wrap gap-4 [animation-delay:180ms]">
          <a
            href="#contact"
            className="rounded-full bg-ketchup px-7 py-3.5 text-sm font-semibold text-ketchup-foreground transition-opacity hover:opacity-90"
          >
            Démarrer un projet
          </a>
          <a
            href="#missions"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Nos réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
