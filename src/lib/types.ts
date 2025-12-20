export interface Hero {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  repoUrl?: string;
  demoUrl?: string;
  tech: string;
}