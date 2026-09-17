export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-[130px] dark:bg-orange-500/10"
      />
      <div className="relative mx-auto max-w-5xl">
        <h1 className="reveal max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
          Des outils IA qui automatisent le travail répétitif des entreprises.
        </h1>
        <p
          className="reveal mt-6 max-w-xl text-lg leading-8 text-zinc-600 [animation-delay:120ms] dark:text-zinc-400"
        >
          Développeur indépendant spécialisé en IA appliquée : automatisation
          de process métier et assistants sur mesure pour équipes
          commerciales, pensés pour faire gagner du temps aux équipes au
          quotidien.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-4 [animation-delay:220ms]">
          <a
            href="#projects"
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-200 hover:scale-[1.03] hover:border-zinc-400 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-500"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
