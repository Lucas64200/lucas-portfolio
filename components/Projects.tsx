import { getGithubRepos, GITHUB_PROFILE_URL } from "@/lib/github";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import ScrollGroup from "@/components/ScrollGroup";

export default async function Projects() {
  const repos = await getGithubRepos();

  return (
    <section id="projects" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Projets GitHub
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Récupérés automatiquement depuis mon profil GitHub.
            </p>
          </div>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neon"
          >
            Voir tout sur GitHub
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {repos.length === 0 ? (
          <p className="mt-10 max-w-2xl text-sm text-ink-soft">
            Aucun projet public sur{" "}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neon"
            >
              GitHub
            </a>{" "}
            pour le moment — ça arrive bientôt.
          </p>
        ) : (
          <ScrollGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 9).map((repo, i) => (
              <a
                key={repo.id}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--i": i } as React.CSSProperties}
                className="stagger-item group flex flex-col rounded-3xl border-2 border-card-border bg-bg-raised p-6 transition-colors hover:border-neon"
              >
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-neon">
                  {repo.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">
                  {repo.description ?? "Pas de description."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-medium text-ink-soft">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <StarIcon className="h-3.5 w-3.5" />
                    {repo.stars}
                  </span>
                </div>
              </a>
            ))}
          </ScrollGroup>
        )}
      </div>
    </section>
  );
}
