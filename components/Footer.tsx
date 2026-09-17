import { GITHUB_PROFILE_URL } from "@/lib/github";
import { GithubIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-zinc-500 dark:text-zinc-500">
        <span>© {new Date().getFullYear()} Lucas Monvoisin</span>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-200"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:monvoisin.lucas@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-200"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
