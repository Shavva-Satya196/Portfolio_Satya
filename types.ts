export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
