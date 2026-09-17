export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
        Développeur IA freelance
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
        Je construis des outils IA qui automatisent le travail répétitif des
        entreprises.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Pendant ma période freelance, j&apos;ai conçu des outils
        d&apos;intelligence artificielle sur mesure : automatisation de
        process métier et assistants IA pour équipes commerciales, pensés
        pour faire gagner du temps aux équipes au quotidien.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-500"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
