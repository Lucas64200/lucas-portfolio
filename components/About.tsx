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
    <section id="about" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Profil
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {/* TODO(Lucas): remplacer par ton vrai parcours freelance — clients,
          secteurs, durée de la période freelance, etc. */}
          En freelance, j&apos;ai accompagné des entreprises dans
          l&apos;automatisation de leurs process grâce à l&apos;IA : réduction
          des tâches manuelles, création d&apos;assistants internes, et
          outils dédiés aux équipes commerciales pour accélérer la
          prospection et le suivi client. Mon approche : comprendre le
          process existant, identifier ce qui peut être automatisé sans
          perte de contrôle, puis livrer un outil simple à utiliser au
          quotidien.
        </p>

        <ScrollGroup>
          <ul className="mt-10 flex flex-wrap gap-3">
            {SKILLS.map((skill, i) => (
              <li
                key={skill}
                style={{ "--i": i } as React.CSSProperties}
                className="stagger-item rounded-full border-2 border-card-border bg-bg-raised px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-neon hover:text-neon"
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
