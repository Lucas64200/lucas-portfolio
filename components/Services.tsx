const SERVICES = [
  {
    swatch: "bg-ketchup",
    title: "Automatisation de processus métier",
    text: "On branche l'IA sur vos tâches répétitives — saisie, tri, relances — pour vous rendre des heures chaque semaine.",
  },
  {
    swatch: "bg-mustard",
    title: "Assistants IA pour équipes commerciales",
    text: "Qualification de leads, messages de prospection, suivi client : un assistant connecté à votre CRM qui fait le premier jet.",
  },
  {
    swatch: "bg-ink",
    title: "Outils IA sur mesure",
    text: "Un besoin précis, non couvert par le marché ? On construit l'outil qui colle exactement à votre workflow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-md font-display text-3xl font-semibold text-ink sm:text-4xl">
          Ce qu&apos;on prépare pour vous
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title}>
              <span className={`inline-block h-3 w-3 rounded-full ${service.swatch}`} />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-ink-soft">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
