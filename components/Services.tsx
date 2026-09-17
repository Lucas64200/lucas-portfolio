import ScrollGroup from "@/components/ScrollGroup";
import Scallop from "@/components/Scallop";

const SERVICES = [
  {
    label: "Process",
    rotation: "-6deg",
    tone: "bg-ink text-bg",
    title: "Automatisation de processus métier",
    text: "On branche l'IA sur vos tâches répétitives — saisie, tri, relances — pour vous rendre des heures chaque semaine.",
  },
  {
    label: "Ventes",
    rotation: "5deg",
    tone: "bg-mayo text-mayo-foreground",
    title: "Assistants IA pour équipes commerciales",
    text: "Qualification de leads, messages de prospection, suivi client : un assistant connecté à votre CRM qui fait le premier jet.",
  },
  {
    label: "Sur mesure",
    rotation: "3deg",
    tone: "bg-bg text-ink border-2 border-ink",
    title: "Outils IA sur mesure",
    text: "Un besoin précis, non couvert par le marché ? On construit l'outil qui colle exactement à votre workflow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ketchup pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-extrabold text-ketchup-foreground sm:text-5xl">
          Ce qu&apos;on prépare pour vous
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ketchup-foreground/80">
          Trois façons de vous faire gagner du temps grâce à l&apos;IA.
        </p>

        <ScrollGroup className="mt-14 grid gap-8 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              style={
                {
                  "--i": i,
                  "--rot": service.rotation,
                } as React.CSSProperties
              }
              className={`stagger-item rounded-3xl p-7 shadow-[0_16px_40px_rgba(0,0,0,0.25)] ${service.tone}`}
            >
              <span className="inline-block rounded-full bg-black/10 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                {service.label}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 opacity-80">
                {service.text}
              </p>
            </div>
          ))}
        </ScrollGroup>
      </div>
      <div className="mt-16 sm:mt-24">
        <Scallop topColor="var(--ketchup)" bottomColor="var(--bg)" />
      </div>
    </section>
  );
}
