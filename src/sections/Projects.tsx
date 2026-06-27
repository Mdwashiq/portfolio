import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const categories = ['All', 'Robotics & IoT', 'AI & Automation', 'Full Stack Development', 'AI Development'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter projects by category
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-dark/40">
      {/* Background decoration blur */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
              FEATURED PROJECTS
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 glassmorphism-light p-1.5 rounded-2xl w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-none relative ${
                  activeCategory === cat ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const cardRef = useRef<HTMLDivElement>(null);

              // 3D Card tilt calculations
              const handleMouseMove = (e: React.MouseEvent) => {
                const card = cardRef.current;
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Max tilt angle (degrees)
                const maxTilt = 8;
                const tiltX = ((y / rect.height) - 0.5) * -maxTilt;
                const tiltY = ((x / rect.width) - 0.5) * maxTilt;
                
                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
              };

              const handleMouseLeave = () => {
                const card = cardRef.current;
                if (!card) return;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              };

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="flex flex-col h-full"
                >
                  <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => {
                      handleMouseLeave();
                      setHoveredIndex(null);
                    }}
                    className="flex flex-col h-full rounded-3xl glassmorphism border border-white/5 overflow-hidden shadow-2xl transition-all duration-300 ease-out cursor-none"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Project Image Frame */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-bg-dark">
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-85 z-10" />
                      
                      {/* Scale Image on hover */}
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out"
                        style={{
                          transform: hoveredIndex === idx ? 'scale(1.08)' : 'scale(1)',
                        }}
                      />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-bg-dark/70 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-accent tracking-widest uppercase">
                        {project.category}
                      </div>
                    </div>

                    {/* Project Metadata Content */}
                    <div className="p-6 flex flex-col flex-grow justify-between text-left">
                      <div>
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white font-heading group-hover:text-accent transition-colors duration-200 mb-2">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-white/50 font-body leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Key Features Bullet List */}
                        <div className="space-y-2 mb-6">
                          {project.features.slice(0, 2).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start text-xs text-white/75 font-body">
                              <ChevronRight className="w-3.5 h-3.5 text-accent mt-0.5 mr-1 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Tech badges and Call To Actions */}
                      <div className="space-y-4 pt-4 border-t border-white/5">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/40 font-bold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Links */}
                        <div className="flex justify-between items-center pt-2">
                          <a
                            href={project.githubUrl}
                            className="inline-flex items-center space-x-1.5 text-xs font-mono text-white/50 hover:text-white transition-colors duration-200 cursor-none"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span>GITHUB SOURCE</span>
                          </a>

                          <a
                            href={project.demoUrl}
                            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-xs font-semibold text-white transition-colors duration-200 cursor-none"
                          >
                            <span>LIVE DEMO</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
