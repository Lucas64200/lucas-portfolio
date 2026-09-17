import MascotDuo from "@/components/MascotDuo";
import Scallop from "@/components/Scallop";

export default function Hero() {
  return (
    <section id="top">
      <div className="px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="relative mx-auto max-w-4xl text-center">
          <span
            style={{ "--rot": "-8deg" } as React.CSSProperties}
            className="squeeze-in absolute -top-6 left-0 hidden rotate-[-8deg] rounded-full bg-ketchup px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ketchup-foreground sm:block [animation-delay:500ms]"
          >
            Automatisation
          </span>
          <span
            style={{ "--rot": "6deg" } as React.CSSProperties}
            className="squeeze-in absolute -top-2 right-0 hidden rotate-[6deg] rounded-full bg-mayo px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-mayo-foreground sm:block [animation-delay:650ms]"
          >
            Assistants IA
          </span>

          <h1 className="reveal font-display text-5xl font-extrabold leading-[1.05] text-ink sm:text-7xl">
            On <span className="text-ketchup">automatise</span> le travail
            répétitif de votre entreprise à grands coups d&apos;IA.
          </h1>

          <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft [animation-delay:120ms]">
            Studio d&apos;automatisation IA : process métier automatisés et
            assistants sur mesure pour équipes commerciales.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-4 [animation-delay:220ms]">
            <a
              href="#contact"
              className="rounded-full bg-ketchup px-7 py-3.5 text-sm font-bold text-ketchup-foreground transition-transform hover:scale-105"
            >
              Démarrer un projet
            </a>
            <a
              href="#missions"
              className="rounded-full border-2 border-bg-raised px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:border-mayo hover:text-mayo"
            >
              Nos réalisations
            </a>
          </div>

          <div className="reveal mt-10 [animation-delay:300ms]">
            <MascotDuo />
          </div>
        </div>
      </div>
      <Scallop topColor="var(--bg)" bottomColor="var(--ketchup)" />
    </section>
  );
}
