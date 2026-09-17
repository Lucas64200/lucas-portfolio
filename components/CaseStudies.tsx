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
    <section id="missions" className="border-t border-line bg-cream-raised px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-md font-display text-3xl font-semibold text-ink sm:text-4xl">
          Nos réalisations
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Quelques missions menées en freelance — clients anonymisés.
        </p>

        <div className="mt-14 divide-y divide-line">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.title}
              className="grid gap-6 py-10 first:pt-0 sm:grid-cols-[15rem_1fr]"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {study.title}
              </h3>
              <dl className="grid gap-5 text-[0.95rem] leading-relaxed text-ink-soft sm:grid-cols-3 sm:gap-8">
                <div>
                  <dt className="font-medium text-ink">Le problème</dt>
                  <dd className="mt-1">{study.problem}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Ce qu&apos;on a fait</dt>
                  <dd className="mt-1">{study.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Le résultat</dt>
                  <dd className="mt-1">{study.result}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
