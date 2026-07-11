export type TechnologyItem = {
  name: string;
  icon: string;
};

export type TechSkillGroup = {
  category: string;
  items: TechnologyItem[];
};

export type ProjectImage = {
  src: string;
  alt: string;
  label?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  type: string;
  status: string;
  description: string;
  stack: string[];
  highlights: string[];
  images: ProjectImage[];
  links: ProjectLink[];
  comingSoon?: boolean;
};
