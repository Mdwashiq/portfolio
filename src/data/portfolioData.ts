import type { HeroInfo, AboutInfo, SkillCategory, ExperienceItem, ProjectItem, ServiceItem, AchievementItem, CertificationItem, EducationItem, TestimonialItem } from '../types';

export const heroInfo: HeroInfo = {
  name: "Mohamed Washiq",
  titles: [
    "Robotics Engineer",
    "AI Engineer",
    "Automation Developer",
    "Full Stack Developer",
    "Product Builder"
  ],
  tagline: "Building Intelligent AI, Robotics & Automation Solutions That Solve Real-World Problems.",
  bio: "I am a Robotics & Automation Engineer passionate about Artificial Intelligence, Full Stack Development, SaaS, Robotics, Embedded Systems, Computer Vision, Automation, and Product Development. I love building scalable software, AI agents, automation platforms, and intelligent systems.",
  resumeUrl: "#" // Replace with actual resume link
};

export const aboutInfo: AboutInfo = {
  bio: "I am an engineer who sits at the intersection of physical automation and digital intelligence. With a background in Robotics & Automation, I specialize in combining hardware control with cutting-edge AI and robust web technologies to build cohesive, end-to-end products.",
  objective: "To design and deploy next-generation intelligent systems, SaaS platforms, and robotics integrations that streamline processes, reduce costs, and solve critical industrial and consumer problems.",
  journey: "My journey started with a fascination for making things move autonomously. This led me to Mechatronics and Robotics, where I mastered microcontrollers and control loops. Realizing that hardware is only as good as the software driving it, I expanded my expertise into Full Stack Development, Machine Learning, and Cloud Architecture, allowing me to build complete hardware-software solutions.",
  imageUrl: "/profile.png.jpeg", // Path to your profile photo
  stats: [
    { label: "Projects Completed", value: 25, suffix: "+", icon: "Briefcase" },
    { label: "Years Experience", value: 3, suffix: "+", icon: "Clock" },
    { label: "Technologies Mastered", value: 20, suffix: "+", icon: "Cpu" },
    { label: "Learning Hours Logged", value: 1500, suffix: "+", icon: "BookOpen" }
  ],
  timeline: [
    {
      year: "2024",
      title: "AI & Full-Stack Synergy",
      description: "Spearheaded integration of LLMs, custom RAGs, and computer vision systems into web SaaS dashboards at scale."
    },
    {
      year: "2023",
      title: "Joined LAMS Automation",
      description: "Took charge of Product Development, combining embedded hardware, PLC, and IoT technologies with modern backends."
    },
    {
      year: "2022",
      title: "Robotics & Automation Foundations",
      description: "Focused on ROS (Robot Operating System), Arduino, ESP32, PLC control, and computer vision (YOLO/OCR)."
    },
    {
      year: "2021",
      title: "Full-Stack Development Bootstrapping",
      description: "Mastered Node.js, Express, React, TypeScript, and SQL databases to create web-based control interfaces."
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "Python", level: 90, color: "#3776AB" },
      { name: "JavaScript", icon: "JS", level: 92, color: "#F7DF1E" },
      { name: "TypeScript", icon: "TS", level: 88, color: "#3178C6" },
      { name: "C++", icon: "Cpp", level: 80, color: "#00599C" },
      { name: "SQL", icon: "Database", level: 85, color: "#4479A1" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "React", level: 92, color: "#61DAFB" },
      { name: "Next.js", icon: "Next", level: 85, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: "Tailwind", level: 95, color: "#06B6D4" }
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "Node", level: 88, color: "#339933" },
      { name: "Express", icon: "Express", level: 90, color: "#CCCCCC" },
      { name: "Supabase", icon: "Supabase", level: 87, color: "#3ECF8E" }
    ]
  },
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "OpenAI", icon: "BrainCircuit", level: 90, color: "#412991" },
      { name: "Claude (Anthropic)", icon: "Sparkles", level: 88, color: "#D97706" },
      { name: "LangChain", icon: "Network", level: 84, color: "#1C3D5A" },
      { name: "Firecrawl", icon: "Search", level: 82, color: "#F43F5E" },
      { name: "YOLO (Object Detection)", icon: "Eye", level: 85, color: "#00FF00" },
      { name: "OCR", icon: "ScanLine", level: 80, color: "#3B82F6" }
    ]
  },
  {
    title: "Automation & Robotics",
    skills: [
      { name: "Arduino", icon: "Cpu", level: 90, color: "#00979D" },
      { name: "ESP32 / IoT", icon: "Wifi", level: 88, color: "#E7352C" },
      { name: "PLC Control", icon: "Server", level: 80, color: "#FF9900" },
      { name: "Raspberry Pi", icon: "Layers", level: 85, color: "#C51A4A" },
      { name: "ROS", icon: "Terminal", level: 75, color: "#223140" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "GitBranch", level: 90, color: "#F05032" },
      { name: "GitHub", icon: "Github", level: 92, color: "#FFFFFF" },
      { name: "Vercel", icon: "ExternalLink", level: 88, color: "#FFFFFF" },
      { name: "VS Code", icon: "Code2", level: 95, color: "#007ACC" },
      { name: "Docker", icon: "Box", level: 78, color: "#2496ED" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "LAMS Automation",
    role: "Product Development Engineer",
    duration: "Jun 2023 - Present",
    location: "Tamil Nadu, India",
    description: "Leading end-to-end product development of smart automation and control systems, bridging industrial IoT and custom modern web applications.",
    responsibilities: [
      "Architected and deployed custom IoT control dashboards using React, Node.js, and Supabase for real-time machine telemetry.",
      "Programmed microcontrollers (ESP32/Arduino) and PLCs to monitor sensors, manage relays, and automate heavy-duty machinery.",
      "Developed high-throughput REST APIs and microservices for reliable device-to-cloud communication and data persistence.",
      "Integrated machine vision workflows (YOLO-based object detection) with camera-enabled edge devices for quality inspection.",
      "Collaborated with hardware and mechanical designers to iterate prototype printed circuit boards (PCBs) and device enclosures."
    ],
    achievements: [
      "Built a unified machinery dashboard that reduced client system setup configuration time from hours to under 5 minutes.",
      "Introduced automated computer-vision inspection, reducing product defect escape rates by 35% compared to manual checks.",
      "Implemented serverless synchronization routines that guarantee 99.9% uptime for IoT sensor data delivery to the Supabase database."
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Supabase", "ESP32", "Arduino", "PLC", "Python", "Docker", "YOLO"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "smart-parking",
    title: "Smart Parking System",
    category: "Robotics & IoT",
    description: "An intelligent, end-to-end parking solution combining hardware edge detection and a real-time web dashboard for automated occupancy monitoring and billing.",
    features: [
      "Microcontroller edge processing (ESP32/Arduino) using ultrasonic and camera sensors to detect spot occupancy.",
      "Computer vision pipeline using YOLO and OCR to read vehicle license plates automatically on entry.",
      "Real-time visual floor plan tracking using React and WebSockets for user navigation.",
      "Automated payment and reservation gateway connected to a Supabase backend."
    ],
    technologies: ["React", "TypeScript", "ESP32", "Arduino", "Python", "YOLO", "OCR", "Supabase"],
    imageUrl: "https://images.unsplash.com/photo-1506521788723-868151859b90?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "hotel-booking",
    title: "Premium Hotel Booking Platform",
    category: "Full Stack Development",
    description: "A high-performance, responsive booking platform designed with a focus on immersive visuals, smooth user transitions, and robust database state management.",
    features: [
      "Dynamic room search with advanced filters for availability, pricing, and amenities.",
      "Stripe payment gateway integration supporting instant bookings and invoice generation.",
      "Interactive calendar scheduling and booking status panels with real-time updates.",
      "Admin control center for inventory, booking logs, and revenue charts."
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Supabase", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ai-automation",
    title: "Intelligent AI Automation Platform",
    category: "AI & Automation",
    description: "A SaaS tool that allows users to create automated web scraping, data enrichment, and content generation workflows using natural language prompts.",
    features: [
      "Workflow builder linking Firecrawl web scraping, LLM analysis, and google sheets integration.",
      "Multi-agent AI capabilities (OpenAI GPT-4 and Claude 3.5 Sonnet) orchestrating complex tasks.",
      "Robust retry and rate-limiting system using LangChain and Node.js worker threads.",
      "Visual workflow editor with dynamic canvas styling."
    ],
    technologies: ["Next.js", "TypeScript", "LangChain", "OpenAI", "Claude", "Firecrawl", "Supabase"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "cold-email",
    title: "AI Cold Email Generator",
    category: "AI & SaaS",
    description: "An automated sales tool that scrapes target company details and drafts hyper-personalized outbound emails based on user product descriptions.",
    features: [
      "Automated LinkedIn and website profiling using Puppeteer/Firecrawl APIs.",
      "Context-aware email copy generation using custom LLM system prompts and templates.",
      "Email verification engine checking SMTP server responsiveness before sending.",
      "Outreach campaigns tracker showing click-through, reply, and bounce metrics."
    ],
    technologies: ["React", "Node.js", "Express", "Claude", "Firecrawl", "Supabase"],
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "company-website",
    title: "Interactive Corporate Web Experience",
    category: "Frontend Development",
    description: "A premium, animation-heavy marketing website featuring advanced typography, smooth scrolling, and page-reveal effects that engage users instantly.",
    features: [
      "Smooth layout manipulation using GSAP ScrollTrigger and Lenis scroll engine.",
      "Glassmorphic design language using customized Tailwind configurations.",
      "Interactive 3D particle waves running in canvas for background depth.",
      "Highly responsive layouts verified across all mobile, tablet, and widescreen layouts."
    ],
    technologies: ["React", "GSAP", "Lenis", "Tailwind CSS", "Three.js"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ai-chatbot",
    title: "Cognitive Context Chatbot",
    category: "AI Development",
    description: "A localized intelligent chatbot with memory management, vector embeddings index, and custom web-scraped document search support.",
    features: [
      "Retrieval-Augmented Generation (RAG) backend utilizing Supabase pgvector.",
      "Streaming responses with custom markdown rendering, code blocks, and math equations.",
      "Multiple conversation memory slots cached locally and synced with Supabase authentication.",
      "Smooth, sleek UI with glass cards, bubble micro-animations, and light/dark configurations."
    ],
    technologies: ["React", "TypeScript", "LangChain", "OpenAI", "Supabase", "pgvector"],
    imageUrl: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=600",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const servicesData: ServiceItem[] = [
  {
    title: "AI Development",
    description: "Building production-grade AI solutions, custom LLM integrations, autonomous AI agents, and custom RAG (Retrieval-Augmented Generation) systems that automate business workflows.",
    icon: "BrainCircuit",
    features: ["LLM Fine-tuning & Prompt Engineering", "Autonomous Workflow Agents", "Semantic Search & Vector DBs", "LangChain & LlamaIndex APIs"]
  },
  {
    title: "Automation Solutions",
    description: "Bridging software with hardware. Designing and programming embedded systems, industrial PLCs, smart home controls, and custom IoT telemetry devices.",
    icon: "Cpu",
    features: ["ESP32/Arduino Microcontrollers", "PLC Logic & Control Panels", "Sensors, Actuators & Relay Networks", "ROS Robotic Integration"]
  },
  {
    title: "Website Development",
    description: "Creating highly interactive, lightning-fast landing pages and multi-page web applications utilizing modern frameworks, smooth scrolling, and custom transitions.",
    icon: "Code2",
    features: ["Vite, React & Next.js Frameworks", "Tailwind CSS & Styling Systems", "Framer Motion & GSAP Animations", "SEO & Performance Tuning"]
  },
  {
    title: "SaaS Development",
    description: "Building scalable, multi-tenant software-as-a-service platforms, from user authorization and stripe subscriptions to advanced database architectures.",
    icon: "Layers",
    features: ["Multi-tenant Database Models", "Stripe Subscription Systems", "Secure JWT & OAuth Security", "Real-Time Telemetry & Sync"]
  },
  {
    title: "Dashboard Development",
    description: "Designing sleek, professional dashboards that display complex analytics, real-time IoT metrics, and backend logs using gorgeous graphs and charts.",
    icon: "LayoutDashboard",
    features: ["Highcharts, Recharts & D3", "WebSocket Real-Time Syncing", "Custom Report Exporters (PDF/CSV)", "Optimized Database Queries"]
  },
  {
    title: "API Integration",
    description: "Developing robust, RESTful and GraphQL APIs using Node.js and Express, connected to third-party endpoints, webhooks, and secure web services.",
    icon: "Link2",
    features: ["Express.js & FastAPI Backends", "Webhook Handling & Validation", "Third-party Integrations (Stripe, Twilio)", "Strict CORS & Rate Limiting"]
  },
  {
    title: "Computer Vision",
    description: "Deploying camera-ready machine vision models for product inspection, OCR text extraction, and object tracking using edge hardware or cloud servers.",
    icon: "Eye",
    features: ["YOLO Object Detection & Training", "OpenCV Image Pre-processing", "OCR Scanning & Text Parsing", "Real-time Edge Video Streams"]
  },
  {
    title: "Consulting & Architecture",
    description: "Providing system designs, hardware list planning, and software stack selection to ensure your automation projects scale efficiently from day one.",
    icon: "HelpCircle",
    features: ["Hardware Component Specifying", "SaaS Stack & Cloud Selection", "System Reliability Auditing", "Database Schema Optimization"]
  }
];

export const achievementsData: AchievementItem[] = [
  { label: "Projects Completed", value: 25, suffix: "+", description: "Successfully shipped robotics, full-stack, and AI systems.", icon: "Briefcase" },
  { label: "Happy Clients", value: 15, suffix: "+", description: "SaaS platforms, corporate landing pages, and industrial automation.", icon: "Heart" },
  { label: "Technologies Used", value: 20, suffix: "+", description: "Across electronics, software, data storage, and server operations.", icon: "Cpu" },
  { label: "Learning Hours", value: 1500, suffix: "+", description: "Dedicated to studying algorithms, machine design, and system patterns.", icon: "BookOpen" },
  { label: "Years Experience", value: 3, suffix: "+", description: "Hands-on engineering, product prototyping, and codebase management.", icon: "Award" }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "Dec 2023",
    credentialUrl: "#"
  },
  {
    title: "PLC Automation & SCADA Control",
    issuer: "National Institute of Electronics & IT",
    date: "Aug 2023",
    credentialUrl: "#"
  },
  {
    title: "React & TypeScript Advanced Patterns",
    issuer: "Frontend Masters",
    date: "Apr 2023",
    credentialUrl: "#"
  },
  {
    title: "ROS (Robot Operating System) Foundations",
    issuer: "Construct Sim Group",
    date: "Oct 2022",
    credentialUrl: "#"
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "Anna University Affiliated College",
    degree: "Bachelor of Engineering in Robotics & Automation",
    duration: "2019 - 2023",
    description: "Specialized in control systems, robotics kinematics, microcontrollers, computer vision, and industrial automation systems.",
    score: "CGPA: 8.5/10"
  },
  {
    institution: "State Board High School",
    degree: "Higher Secondary Certificate (HSC) - Science & Mathematics",
    duration: "2017 - 2019",
    description: "Intensive studies in physics, chemistry, mathematics, and computer science.",
    score: "92%"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    name: "Rajesh Kumar",
    role: "Director of Operations",
    company: "LAMS Automation",
    text: "Mohamed's ability to bridge the gap between heavy hardware control and modern web-based monitoring dashboards is phenomenal. He took our legacy machine reporting and transformed it into a real-time, glassmorphic SaaS interface that blew our clients away.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Veloce SaaS",
    text: "We hired Washiq to build our AI outbound email campaign builder. He integrated Claude APIs and Firecrawl web scrapers into a seamless React-Express system within weeks. His code quality is pristine, and his attention to UX micro-interactions is outstanding.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Anand Viswanathan",
    role: "Senior Embedded Architect",
    company: "IoT Nexus",
    text: "Working with Washiq on the smart parking system was a pleasure. He programmed the ESP32 sensors to communicate flawlessly with our Supabase real-time database, then crafted a gorgeously animated dashboard showing occupancy changes under 100 milliseconds.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];
