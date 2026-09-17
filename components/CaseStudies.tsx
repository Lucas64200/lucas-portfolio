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
    <section id="missions" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
        Types de missions
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Quelques exemples représentatifs du type de problèmes que je résous.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.title}
            className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
              {study.title}
            </h3>
            <dl className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              <div>
                <dt className="font-medium text-zinc-500 dark:text-zinc-500">
                  Problème
                </dt>
                <dd>{study.problem}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-500 dark:text-zinc-500">
                  Solution
                </dt>
                <dd>{study.solution}</dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-500 dark:text-zinc-500">
                  Résultat
                </dt>
                <dd>{study.result}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
