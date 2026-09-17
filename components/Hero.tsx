import OrbitBadge from "@/components/OrbitBadge";

export default function Hero() {
  return (
    <section id="top" className="px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_18rem]">
        <div>
          <h1 className="reveal max-w-2xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl">
            Des outils IA qui{" "}
            <span className="italic text-neon">automatisent</span> le travail
            répétitif des entreprises.
          </h1>

          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink-soft [animation-delay:120ms]">
            Développeur indépendant spécialisé en IA appliquée :
            automatisation de process métier et assistants sur mesure pour
            équipes commerciales.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-4 [animation-delay:220ms]">
            <a
              href="#projects"
              className="rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-neon-foreground transition-transform hover:scale-105"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-card-border px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-neon hover:text-neon"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="reveal flex flex-col items-center gap-6 [animation-delay:200ms] lg:items-end">
          <OrbitBadge />
          <div className="w-full rounded-3xl bg-neon p-6 text-neon-foreground sm:p-7">
            <p className="font-display text-xl font-medium italic leading-snug">
              Comprendre le process, automatiser sans perte de contrôle,
              livrer un outil simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
