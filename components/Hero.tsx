import Blob from "@/components/Blob";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Blob
        className="blob-settle pointer-events-none absolute -right-40 -top-32 h-[32rem] w-[32rem] text-mustard/40 blur-2xl sm:-right-24 sm:-top-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <h1 className="hero-settle max-w-2xl font-display text-5xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
          On automatise le travail répétitif de votre entreprise avec l&apos;IA.
        </h1>

        <p className="hero-settle mt-7 max-w-lg text-lg leading-relaxed text-ink-soft [animation-delay:100ms]">
          Process métier automatisés et assistants sur mesure, pensés pour
          les équipes commerciales.
        </p>

        <div className="hero-settle mt-10 flex flex-wrap items-center gap-4 [animation-delay:180ms]">
          <a
            href="#contact"
            className="rounded-full bg-ketchup px-7 py-3.5 text-sm font-medium text-ketchup-foreground transition-colors hover:bg-ketchup-deep"
          >
            Démarrer un projet
          </a>
          <a
            href="#missions"
            className="rounded-full px-7 py-3.5 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-ketchup-deep hover:decoration-ketchup-deep"
          >
            Voir nos réalisations
          </a>
        </div>
      </div>
    </section>
  );
}
