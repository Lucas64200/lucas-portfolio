import GlyphPortal from "@/components/ui/glyph-portal";
import { BorderBeam } from "@/components/ui/border-beam-search";
import PortalField from "@/components/PortalField";
import { GITHUB_PROFILE_URL } from "@/lib/github";
import {
  ArrowRightIcon,
  GithubIcon,
  GridIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons";

const CONTACT_EMAIL = "monvoisin.lucas@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/REMPLACE-MOI";

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
        "--gp-paper": "#0b0a12",
        "--gp-ink": "#c4b5fd",
        "--gp-field": "#7c3aed",
        "--gp-foreground": "#f2f0f7",
      }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-raised/80 px-4 py-1.5 text-xs font-medium text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-ketchup" />
          Disponible pour de nouveaux projets
        </div>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-6xl">
          Des outils IA qui font
          <br />
          le travail répétitif
          <br />
          <span className="text-cream">à votre place.</span>
        </h1>

        <p className="mt-7 max-w-md text-lg leading-relaxed opacity-90">
          Process métier automatisés et assistants sur mesure, pensés pour
          les équipes commerciales.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <BorderBeam size="sm" colorVariant="sunset" theme="dark">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-ink shadow-[0_0_28px_4px_rgba(11,10,18,0.35)] transition-opacity hover:opacity-90"
            >
              Démarrer un projet
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </BorderBeam>
          <a
            href="#missions"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium transition-colors hover:border-ketchup-deep hover:text-ketchup-deep"
          >
            <GridIcon className="h-4 w-4" />
            Voir nos réalisations
          </a>
        </div>

        <p className="mt-5 text-sm text-ink-soft">
          Devis gratuit, réponse sous 24h.
        </p>

        <div className="mt-8 flex items-center gap-5 text-ink-soft">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-ketchup-deep"
          >
            <GithubIcon className="h-[1.125rem] w-[1.125rem]" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-ketchup-deep"
          >
            <LinkedinIcon className="h-[1.125rem] w-[1.125rem]" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className="transition-colors hover:text-ketchup-deep"
          >
            <MailIcon className="h-[1.125rem] w-[1.125rem]" />
          </a>
        </div>
      </div>
    </GlyphPortal>
  );
}
