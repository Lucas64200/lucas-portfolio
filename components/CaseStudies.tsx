import ScrollGroup from "@/components/ScrollGroup";

type CaseStudy = {
  title: string;
  problem: string;
  solution: string;
  result: string;
  rotation: string;
  tone: string;
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
    rotation: "-5deg",
    tone: "bg-ketchup text-ketchup-foreground",
  },
  {
    title: "Assistant IA pour équipe commerciale",
    problem:
      "Les commerciaux passaient trop de temps à qualifier des leads et à rédiger des messages de prospection.",
    solution:
      "Un assistant IA connecté au CRM qui qualifie les leads entrants et génère des messages de prospection personnalisés.",
    result: "Cycle de qualification accéléré, prospection plus régulière.",
    rotation: "4deg",
    tone: "bg-mayo text-mayo-foreground",
  },
  {
    title: "Outil IA sur mesure",
    problem:
      "Besoin d'un outil interne spécifique, non couvert par les solutions du marché.",
    solution:
      "Une application sur mesure (interface + IA) adaptée exactement au workflow de l'équipe.",
    result: "Adoption rapide car l'outil colle au process existant.",
    rotation: "-3deg",
    tone: "border-2 border-bg-raised bg-bg-raised text-ink",
  },
];

export default function CaseStudies() {
  return (
    <section id="missions" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
          Nos réalisations
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Quelques exemples représentatifs des missions menées — clients
          anonymisés.
        </p>

        <ScrollGroup className="mt-14 grid gap-8 sm:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <div
              key={study.title}
              style={
                {
                  "--i": i,
                  "--rot": study.rotation,
                } as React.CSSProperties
              }
              className={`stagger-item flex flex-col gap-4 rounded-3xl p-7 shadow-[0_16px_40px_rgba(0,0,0,0.25)] ${study.tone}`}
            >
              <h3 className="font-display text-xl font-bold leading-snug">
                {study.title}
              </h3>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide opacity-70">
                  Problème
                </p>
                <p className="mt-1 text-sm leading-6 opacity-90">
                  {study.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide opacity-70">
                  Solution
                </p>
                <p className="mt-1 text-sm leading-6 opacity-90">
                  {study.solution}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide opacity-70">
                  Résultat
                </p>
                <p className="mt-1 text-sm leading-6 opacity-90">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </ScrollGroup>
      </div>
    </section>
  );
}
