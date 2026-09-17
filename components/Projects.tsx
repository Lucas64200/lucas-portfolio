import { getGithubRepos, GITHUB_PROFILE_URL } from "@/lib/github";
import { ArrowRightIcon, StarIcon } from "@/components/icons";
import ScrollGroup from "@/components/ScrollGroup";

export default async function Projects() {
  const repos = await getGithubRepos();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
            <span
              aria-hidden
              className="mr-3 inline-block h-2.5 w-2.5 rounded-[2px] bg-orange-600 align-middle dark:bg-orange-400"
            />
            Projets GitHub
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Récupérés automatiquement depuis mon profil GitHub.
          </p>
        </div>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-orange-700 dark:text-orange-400"
        >
          Voir tout sur GitHub
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {repos.length === 0 ? (
        <p className="mt-10 text-sm text-zinc-500 dark:text-zinc-500">
          Aucun projet public sur{" "}
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
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
              className="stagger-item group flex flex-col rounded-2xl border border-zinc-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:shadow-black/40"
            >
              <h3 className="font-display font-medium text-zinc-950 group-hover:text-orange-700 dark:text-zinc-50 dark:group-hover:text-orange-400">
                {repo.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {repo.description ?? "Pas de description."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
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
    </section>
  );
}
