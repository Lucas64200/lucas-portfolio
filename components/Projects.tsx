import { getGithubRepos, GITHUB_PROFILE_URL } from "@/lib/github";
import { StarIcon } from "@/components/icons";

export default async function Projects() {
  const repos = await getGithubRepos();

  return (
    <section id="projects" className="border-t border-line px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-md font-display text-3xl font-semibold text-ink sm:text-4xl">
            Nos outils open-source
          </h2>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-ketchup-deep hover:decoration-ketchup-deep"
          >
            Voir tout sur GitHub
          </a>
        </div>
        <p className="mt-4 max-w-xl text-ink-soft">
          Ce qu&apos;on construit et partage sur GitHub.
        </p>

        {repos.length === 0 ? (
          <p className="mt-10 max-w-xl text-ink-soft">
            Aucun projet public sur{" "}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ketchup-deep"
            >
              GitHub
            </a>{" "}
            pour le moment — ça arrive bientôt.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 9).map((repo) => (
              <a
                key={repo.id}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-line bg-cream-raised p-6 transition-all duration-300 hover:border-ketchup hover:shadow-[0_0_24px_2px_rgba(124,58,237,0.28)]"
              >
                <h3 className="font-semibold text-ink group-hover:text-ketchup-deep">
                  {repo.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {repo.description ?? "Pas de description."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-soft">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <StarIcon className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
