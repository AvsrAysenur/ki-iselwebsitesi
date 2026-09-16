import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";

const GITHUB_USER = "AvsrAysenur";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`;

interface GithubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
}

const formatTitle = (name: string) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toLocaleUpperCase("tr-TR"));

const repositoryToProject = (repository: GithubRepository): Project => {
  const description = repository.description?.trim() || "GitHub üzerinde geliştirdiğim açık kaynak proje.";
  const tags = [repository.language, ...(repository.topics ?? [])].filter(
    (tag, index, all): tag is string => Boolean(tag) && all.indexOf(tag) === index,
  );

  return {
    id: `github-${repository.id}`,
    title: formatTitle(repository.name),
    description,
    longDescription: `${description} Projenin güncel kaynak koduna, dosyalarına ve README açıklamasına GitHub bağlantısından ulaşabilirsiniz.`,
    image: `https://opengraph.githubassets.com/portfolio/${GITHUB_USER}/${repository.name}`,
    tags: tags.length > 0 ? tags.slice(0, 8) : ["GitHub"],
    githubUrl: repository.html_url,
    year: new Date(repository.pushed_at).getFullYear().toString(),
  };
};

export const useGithubProjects = (featuredProjects: Project[]) => {
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadRepositories = async () => {
      try {
        const response = await fetch(GITHUB_REPOS_URL, {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal,
        });

        if (!response.ok) return;
        const data: GithubRepository[] = await response.json();
        setRepositories(data.filter((repository) => !repository.fork));
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    loadRepositories();
    return () => controller.abort();
  }, []);

  const projects = useMemo(() => {
    const existingUrls = new Set(
      featuredProjects
        .map((project) => project.githubUrl?.toLocaleLowerCase("en-US").replace(/\/$/, ""))
        .filter(Boolean),
    );
    const automaticProjects = repositories
      .filter((repository) => !existingUrls.has(repository.html_url.toLocaleLowerCase("en-US").replace(/\/$/, "")))
      .map(repositoryToProject);

    return [...featuredProjects, ...automaticProjects];
  }, [featuredProjects, repositories]);

  return { projects, isLoading };
};