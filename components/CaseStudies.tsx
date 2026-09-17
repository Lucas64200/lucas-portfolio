import ScrollGroup from "@/components/ScrollGroup";

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

// TODO(Lucas): remplace ces missions génériques par 1-3 vraies missions
// (client/secteur anonymisé si besoin, problème, outil livré, résultat chiffré).
const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Automatisation de processus métier",
    problem:
      "Une équipe perdait plusieurs heures par semaine sur des tâches manuelles répétitives (saisie, tri, relances).",
    solution:
      "Conception d'un outil IA qui lit, classe et traite automatiquement les données entrantes, avec validation humaine sur les cas ambigus.",
    result: "Temps de traitement divisé, moins d'erreurs de saisie.",
  },
  {
    title: "Assistant IA pour équipe commerciale",
    problem:
      "Les commerciaux passaient trop de temps à qualifier des leads et à rédiger des messages de prospection.",
    solution:
      "Développement d'un assistant IA connecté au CRM qui qualifie les leads entrants et génère des messages de prospection personnalisés.",
    result: "Cycle de qualification accéléré, prospection plus régulière.",
  },
  {
    title: "Outil IA sur mesure",
    problem:
      "Besoin d'un outil interne spécifique, non couvert par les solutions du marché.",
    solution:
      "Développement d'une application sur mesure (interface + IA) adaptée exactement au workflow de l'équipe.",
    result: "Adoption rapide car l'outil colle au process existant.",
  },
];

export default function CaseStudies() {
  return (
    <section id="missions" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Types de missions
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Quelques exemples représentatifs du type de problèmes que je résous.
        </p>

        <ScrollGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {CASE_STUDIES.map((study, i) => {
            const featured = i === 1;
            return (
              <div
                key={study.title}
                style={{ "--i": i } as React.CSSProperties}
                className={`stagger-item flex flex-col gap-5 rounded-3xl p-7 ${
                  featured
                    ? "bg-neon text-neon-foreground"
                    : "border-2 border-card-border bg-bg-raised text-ink"
                }`}
              >
                <h3 className="font-display text-2xl font-semibold">
                  {study.title}
                </h3>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      featured ? "text-neon-foreground/70" : "text-neon"
                    }`}
                  >
                    Problème
                  </p>
                  <p className="mt-1.5 text-sm leading-6 opacity-90">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      featured ? "text-neon-foreground/70" : "text-neon"
                    }`}
                  >
                    Solution
                  </p>
                  <p className="mt-1.5 text-sm leading-6 opacity-90">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      featured ? "text-neon-foreground/70" : "text-neon"
                    }`}
                  >
                    Résultat
                  </p>
                  <p className="mt-1.5 text-sm leading-6 opacity-90">
                    {study.result}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollGroup>
      </div>
    </section>
  );
}
