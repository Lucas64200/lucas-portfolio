const GITHUB_USERNAME = "Lucas64200";

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
  topics: string[];
};

type GithubApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return [];
  }

  const repos: GithubApiRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      htmlUrl: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      topics: repo.topics ?? [],
    }))
    .sort((a, b) => b.stars - a.stars || (a.updatedAt < b.updatedAt ? 1 : -1));
}

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
