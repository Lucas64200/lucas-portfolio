import ScrollGroup from "@/components/ScrollGroup";

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
      <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
        <span
          aria-hidden
          className="mr-3 inline-block h-2.5 w-2.5 rounded-[2px] bg-orange-600 align-middle dark:bg-orange-400"
        />
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
        <h3 className="text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-500">
          Stack &amp; outils
        </h3>
        <ScrollGroup>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SKILLS.map((skill, i) => (
              <li
                key={skill}
                style={{ "--i": i } as React.CSSProperties}
                className="stagger-item rounded-full border border-zinc-200 px-4 py-1.5 text-sm text-zinc-700 transition-colors hover:border-orange-300 hover:text-orange-700 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-orange-400/40 dark:hover:text-orange-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </ScrollGroup>
      </div>
    </section>
  );
}
