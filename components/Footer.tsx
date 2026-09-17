import { GITHUB_PROFILE_URL } from "@/lib/github";
import { GithubIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm font-semibold text-ink-soft">
        <span>© {new Date().getFullYear()} Ketchup Mayo</span>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-mayo"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:monvoisin.lucas@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-mayo"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
