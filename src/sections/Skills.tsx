import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, Terminal, Database, BrainCircuit, Sparkles, Cpu, 
  Wifi, Server, Layers, GitBranch, ExternalLink, 
  Box, Search, Eye, ScanLine, Network 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Custom SVG Github icon component
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Map icon strings to Lucide components
const iconMap: Record<string, any> = {
  Python: Terminal,
  JS: Code2,
  TS: Code2,
  Cpp: Terminal,
  Database: Database,
  React: Layers,
  Next: Layers,
  Tailwind: Code2,
  Node: Server,
  Express: Server,
  Supabase: Database,
  BrainCircuit: BrainCircuit,
  Sparkles: Sparkles,
  Network: Network,
  Search: Search,
  Eye: Eye,
  ScanLine: ScanLine,
  Cpu: Cpu,
  Wifi: Wifi,
  Server: Server,
  Layers: Layers,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Github: GithubIcon,
  ExternalLink: ExternalLink,
  Code2: Code2,
  Box: Box
};

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = iconMap[skill.icon] || Code2;

  // Mouse Glow coordinate tracker
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="tech-card p-5 rounded-2xl glassmorphism hover:border-white/15 transition-all duration-300 relative group overflow-hidden shadow-lg flex flex-col justify-between"
    >
      <div className="flex items-center space-x-3.5 z-10">
        <div 
          className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300"
          style={{ color: skill.color || '#2563EB' }}
        >
          <IconComponent className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-white font-heading tracking-wide">
            {skill.name}
          </div>
          <div className="text-[10px] text-white/40 font-mono font-medium mt-0.5">
            {skill.level >= 90 ? 'EXPERT' : skill.level >= 80 ? 'ADVANCED' : 'INTERMEDIATE'}
          </div>
        </div>
      </div>

      {/* Progress Bar meter */}
      <div className="mt-5 w-full z-10">
        <div className="flex justify-between items-center text-[10px] font-mono text-white/30 mb-1.5">
          <span>PROFICIENCY</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ 
              background: `linear-gradient(90deg, #2563EB, ${skill.color || '#06B6D4'})` 
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-dark/40">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            CORE SKILLS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="p-6 rounded-3xl glassmorphism border border-white/5 flex flex-col space-y-6 shadow-xl relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-lg font-bold text-white font-heading">
                  {category.title.toUpperCase()}
                </h3>
                <span className="text-[10px] font-mono text-accent">
                  {category.skills.length} MODULES
                </span>
              </div>

              {/* Skills cards within category */}
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
