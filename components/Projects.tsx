import { getGithubRepos, GITHUB_PROFILE_URL } from "@/lib/github";

export default async function Projects() {
  const repos = await getGithubRepos();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
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
          className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Voir tout sur GitHub →
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.slice(0, 9).map((repo) => (
            <a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <h3 className="font-semibold text-zinc-950 group-hover:underline dark:text-zinc-50">
                {repo.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {repo.description ?? "Pas de description."}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stars}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
