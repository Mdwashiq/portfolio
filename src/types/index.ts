export interface HeroInfo {
  name: string;
  titles: string[];
  tagline: string;
  bio: string;
  resumeUrl: string;
}

export interface AboutStat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutInfo {
  bio: string;
  objective: string;
  journey: string;
  imageUrl: string;
  stats: AboutStat[];
  timeline: TimelineItem[];
}

export interface Skill {
  name: string;
  icon: string;
  level?: number; // percentage or rating (0-100)
  color?: string; // custom highlight color
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface AchievementItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  score?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  text: string;
  imageUrl?: string;
}
