const SKILLS = [
  "Python",
  "TypeScript / Next.js",
  "APIs LLM (OpenAI, Anthropic)",
  "Automatisation (n8n, Zapier)",
  "RAG & bases vectorielles",
  "Intégrations CRM",
  "Scraping & traitement de données",
  "Déploiement cloud",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
        À propos
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {/* TODO(Lucas): remplacer par ton vrai parcours freelance — clients,
        secteurs, durée de la période freelance, etc. */}
        En freelance, j&apos;ai accompagné des entreprises dans
        l&apos;automatisation de leurs process grâce à l&apos;IA : réduction
        des tâches manuelles, création d&apos;assistants internes, et outils
        dédiés aux équipes commerciales pour accélérer la prospection et le
        suivi client. Mon approche : comprendre le process existant, identifier
        ce qui peut être automatisé sans perte de contrôle, puis livrer un
        outil simple à utiliser au quotidien.
      </p>
      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
          Stack &amp; outils
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
