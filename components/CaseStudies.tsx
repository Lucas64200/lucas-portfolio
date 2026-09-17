import ScrollGroup from "@/components/ScrollGroup";

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

// TODO: remplace ces missions génériques par 1-3 vraies missions clients
// (secteur anonymisé si besoin, problème, outil livré, résultat chiffré).
const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Automatisation de processus métier",
    problem:
      "Une équipe perdait plusieurs heures par semaine sur des tâches manuelles répétitives (saisie, tri, relances).",
    solution:
      "Un outil IA qui lit, classe et traite automatiquement les données entrantes, avec validation humaine sur les cas ambigus.",
    result: "Temps de traitement divisé, moins d'erreurs de saisie.",
  },
  {
    title: "Assistant IA pour équipe commerciale",
    problem:
      "Les commerciaux passaient trop de temps à qualifier des leads et à rédiger des messages de prospection.",
    solution:
      "Un assistant IA connecté au CRM qui qualifie les leads entrants et génère des messages de prospection personnalisés.",
    result: "Cycle de qualification accéléré, prospection plus régulière.",
  },
  {
    title: "Outil IA sur mesure",
    problem:
      "Besoin d'un outil interne spécifique, non couvert par les solutions du marché.",
    solution:
      "Une application sur mesure (interface + IA) adaptée exactement au workflow de l'équipe.",
    result: "Adoption rapide car l'outil colle au process existant.",
  },
];

export default function CaseStudies() {
  return (
    <section id="missions" className="border-t border-line px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Nos réalisations
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Quelques exemples représentatifs des missions menées — clients
          anonymisés.
        </p>

        <ScrollGroup className="mt-12 divide-y divide-line border-t border-line">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.title}
              style={{ "--i": i } as React.CSSProperties}
              className="stagger-item grid gap-6 py-10 sm:grid-cols-[14rem_1fr]"
            >
              <h3 className="text-xl font-bold text-ink">{study.title}</h3>
              <dl className="grid gap-6 text-sm leading-6 text-ink-soft sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ketchup">
                    Problème
                  </dt>
                  <dd className="mt-2">{study.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ketchup">
                    Solution
                  </dt>
                  <dd className="mt-2">{study.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ketchup">
                    Résultat
                  </dt>
                  <dd className="mt-2">{study.result}</dd>
                </div>
              </dl>
            </div>
          ))}
        </ScrollGroup>
      </div>
    </section>
  );
}
