import GlyphPortal from "@/components/ui/glyph-portal";
import { BorderBeam } from "@/components/ui/border-beam-search";
import PortalField from "@/components/PortalField";

export default function Hero() {
  return (
    <GlyphPortal
      word="MAYO"
      focusChar="O"
      scrollLength={2}
      fontFamily="var(--font-fraunces), Georgia, serif"
      fontWeight={800}
      enterLabel="Découvrir"
      background={<PortalField />}
      style={{
        "--gp-paper": "#fbf2e3",
        "--gp-ink": "#241505",
        "--gp-field": "#d62828",
        "--gp-foreground": "#fbf2e3",
      }}
    >
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-6xl">
          On automatise le travail répétitif de votre entreprise avec l&apos;IA.
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-relaxed opacity-90">
          Process métier automatisés et assistants sur mesure, pensés pour
          les équipes commerciales.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <BorderBeam size="sm" colorVariant="sunset" theme="dark">
            <a
              href="#contact"
              className="block rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Démarrer un projet
            </a>
          </BorderBeam>
          <a
            href="#missions"
            className="rounded-full px-7 py-3.5 text-sm font-medium underline decoration-current/40 decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
          >
            Voir nos réalisations
          </a>
        </div>
      </div>
    </GlyphPortal>
  );
}
