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

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "Python", level: 0, color: "#3776AB" },
      { name: "JavaScript", icon: "JS", level: 0, color: "#F7DF1E" },
      { name: "TypeScript", icon: "TS", level: 0, color: "#3178C6" },
      { name: "C++", icon: "Cpp", level: 0, color: "#00599C" },
      { name: "SQL", icon: "Database", level: 0, color: "#4479A1" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "React", level: 0, color: "#61DAFB" },
      { name: "Next.js", icon: "Next", level: 0, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: "Tailwind", level: 0, color: "#06B6D4" }
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "Node", level: 0, color: "#339933" },
      { name: "Express", icon: "Express", level: 0, color: "#CCCCCC" },
      { name: "Supabase", icon: "Supabase", level: 0, color: "#3ECF8E" }
    ]
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "OpenAI", icon: "BrainCircuit", level: 0, color: "#412991" },
      { name: "Claude (Anthropic)", icon: "Sparkles", level: 0, color: "#D97706" },
      { name: "LangChain", icon: "Network", level: 0, color: "#1C3D5A" },
      { name: "Firecrawl", icon: "Search", level: 0, color: "#F43F5E" },
      { name: "YOLO (Object Detection)", icon: "Eye", level: 0, color: "#00FF00" },
      { name: "OCR", icon: "ScanLine", level: 0, color: "#3B82F6" }
    ]
  },
  {
    title: "Automation & Robotics",
    skills: [
      { name: "Arduino", icon: "Cpu", level: 0, color: "#00979D" },
      { name: "ESP32 / IoT", icon: "Wifi", level: 0, color: "#E7352C" },
      { name: "PLC Control", icon: "Server", level: 0, color: "#FF9900" },
      { name: "Raspberry Pi", icon: "Layers", level: 0, color: "#C51A4A" },
      { name: "ROS", icon: "Terminal", level: 0, color: "#223140" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "GitBranch", level: 0, color: "#F05032" },
      { name: "GitHub", icon: "Github", level: 0, color: "#FFFFFF" },
      { name: "Vercel", icon: "ExternalLink", level: 0, color: "#FFFFFF" },
      { name: "VS Code", icon: "Code2", level: 0, color: "#007ACC" },
      { name: "Docker", icon: "Box", level: 0, color: "#2496ED" }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "smart-parking",
    title: "Smart Parking System",
    category: "Robotics & IoT",
    description: "some room automation",
    features: [
      "Microcontroller edge processing (ESP32) using ultrasonic and camera "
    ],
    technologies: ["React", "ESP32", "Arduino", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1506521788723-868151859b90?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  },
];

export const servicesData: ServiceItem[] = [
  {
    title: "Website Development",
    description: "Creating  landing pages and multi-page web applications utilizing modern frameworks, smooth scrolling, and custom transitions.",
    icon: "Code2",
    features: ["Vite, React ,php"]
  }
];



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


