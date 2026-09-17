import ScrollGroup from "@/components/ScrollGroup";

const SERVICES = [
  {
    title: "Automatisation de processus métier",
    text: "On branche l'IA sur vos tâches répétitives — saisie, tri, relances — pour vous rendre des heures chaque semaine.",
  },
  {
    title: "Assistants IA pour équipes commerciales",
    text: "Qualification de leads, messages de prospection, suivi client : un assistant connecté à votre CRM qui fait le premier jet.",
  },
  {
    title: "Outils IA sur mesure",
    text: "Un besoin précis, non couvert par le marché ? On construit l'outil qui colle exactement à votre workflow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Ce qu&apos;on prépare pour vous
        </h2>

        <ScrollGroup className="mt-12 divide-y divide-line border-t border-line">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              style={{ "--i": i } as React.CSSProperties}
              className="stagger-item grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8"
            >
              <span className="text-sm font-semibold text-ketchup">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-7 text-ink-soft">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </ScrollGroup>
      </div>
    </section>
  );
}
