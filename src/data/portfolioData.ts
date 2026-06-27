import type { HeroInfo, AboutInfo, SkillCategory, ExperienceItem, ProjectItem, ServiceItem, AchievementItem, CertificationItem, EducationItem, TestimonialItem } from '../types';

export const heroInfo: HeroInfo = {
  name: "Mohamed Washiq",
  titles: [
    "Robotics Engineer and automation"
  ],
  tagline: "Robotics & Automation Solutions That Solve Real-World Problems.",
  bio: "I am a Robotics & Automation Engineer",
  resumeUrl: "#", // Replace with actual resume link
};

export const aboutInfo: AboutInfo = {
  bio: "Iam a robbotics and automation engineer.",
  objective: "To design and deploy basic websites",
  journey: "My journey started IOT",
  imageUrl: "/profile.png.jpeg", // Path to your profile photo
  stats: [
    { label: "Projects Completed", value: 0, suffix: "+", icon: "Briefcase" },
    { label: "Years Experience", value: 0, suffix: "+", icon: "Clock" },
    { label: "Technologies Mastered", value: 0, suffix: "+", icon: "Cpu" },
    { label: "Learning Hours Logged", value: 0, suffix: "+", icon: "BookOpen" }
  ],
  timeline: [
    {
      year: "2024",
      title: "robotics and automation",
      description: "studing"
    },
    {
      year: "2025",
      title: "MIT chennai",
      description: "Did a intern on MIT chennai"
    },
    {
      year: "2025",
      title: "Robotics & Automation Foundations",
      description: "another intern in LAMS."
    },
    {
      year: "2026",
      title: "iot",
      description: "did intern for 6 months."
    }
  ]
};

export const educationData: EducationItem[] = [
  {
    institution: "Anna University Affiliated College",
    degree: "Bachelor of Engineering in Robotics & Automation",
    duration: "2022 - 2026",
    description: "Specialized in control systems, robotics kinematics, microcontrollers, computer vision, and industrial automation systems.",
    score: "CGPA: 7.5/10"
  },
  {
    institution: "State Board High School",
    degree: "Higher Secondary Certificate (HSC) - Science & Mathematics",
    duration: "2020 - 2022",
    description: "Intensive studies in physics, chemistry, mathematics, and computer science.",
    score: "60%"
  }
];

export const experienceData: ExperienceItem[] = [];
export const achievementsData: AchievementItem[] = [];
export const certificationsData: CertificationItem[] = [];
export const testimonialsData: TestimonialItem[] = [];
export const skillCategories: SkillCategory[] = [];
export const projectsData: ProjectItem[] = [];
export const servicesData: ServiceItem[] = [];


