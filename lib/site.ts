// Défini automatiquement par Vercel une fois déployé ; en local on retombe sur localhost.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const SITE_NAME = "Lucas Monvoisin";
export const SITE_TAGLINE = "Développeur IA freelance";
export const SITE_DESCRIPTION =
  "Portfolio de Lucas Monvoisin : outils IA sur mesure pour automatiser les process d'entreprise et équiper les équipes commerciales.";
