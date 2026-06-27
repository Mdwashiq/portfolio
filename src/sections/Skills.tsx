import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, Terminal, Database, BrainCircuit, Sparkles, Cpu, 
  Wifi, Server, Layers, GitBranch, ExternalLink, 
  Box, Search, Eye, ScanLine, Network 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="p-5 bg-white border border-hairline rounded-none relative group overflow-hidden flex flex-col justify-between"
    >
      {/* Subtle blue mouse glow hover */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(150px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(28, 105, 212, 0.3), transparent 50%)`
        }}
      />

      <div className="flex items-center space-x-3.5 z-10 relative">
        <div 
          className="p-2 bg-surface-soft border border-hairline group-hover:scale-105 transition-transform duration-300 text-primary"
        >
          <IconComponent className="w-5 h-5" />
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-ink font-heading uppercase tracking-tight">
            {skill.name}
          </div>
          <div className="text-[9px] font-mono tracking-widest text-muted-text mt-0.5">
            {skill.level >= 90 ? 'EXPERT' : skill.level >= 80 ? 'ADVANCED' : 'INTERMEDIATE'}
          </div>
        </div>
      </div>

      {/* Progress Bar: BMW Blue on soft grey track */}
      <div className="mt-5 w-full z-10 relative">
        <div className="flex justify-between items-center text-[9px] font-mono text-muted-text mb-1 uppercase tracking-widest">
          <span>MODULE CAPABILITY</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full h-1 bg-surface-soft border border-hairline rounded-none overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="h-full rounded-none bg-primary"
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
    <section id="skills" className="py-20 relative overflow-hidden bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 font-heading uppercase">
            TECHNICAL CAPABILITIES
          </h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="p-6 bg-surface-card border border-hairline rounded-none flex flex-col space-y-6 relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <h3 className="text-sm font-bold text-ink font-heading tracking-tight uppercase">
                  {category.title}
                </h3>
                <span className="text-[9px] font-mono text-primary font-bold tracking-widest">
                  {category.skills.length} MODULES
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 gap-3.5">
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
