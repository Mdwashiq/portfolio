import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const categories = ['All', 'Robotics & IoT', 'AI & Automation', 'Full Stack Development', 'AI Development'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 font-heading uppercase">
              FEATURED PROJECTS
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          {/* BMW Corporate Category Tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-hairline w-full md:w-auto pb-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative pb-3 text-xs font-bold tracking-[1.5px] uppercase transition-colors duration-300 cursor-none ${
                  activeCategory === cat ? 'text-primary' : 'text-muted-text hover:text-ink'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
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

              const handleMouseMove = (e: React.MouseEvent) => {
                const card = cardRef.current;
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const maxTilt = 4;
                const tiltX = ((y / rect.height) - 0.5) * -maxTilt;
                const tiltY = ((x / rect.width) - 0.5) * maxTilt;
                
                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
              };

              const handleMouseLeave = () => {
                const card = cardRef.current;
                if (!card) return;
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              };

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
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
                    className="flex flex-col h-full rounded-none bg-canvas border border-hairline overflow-hidden shadow-sm transition-all duration-300 ease-out cursor-none"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Project Image: 16:10 aspect cropped, soft grey plate background */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface-card">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60 z-10" />
                      
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale hover:grayscale-0 brightness-95"
                        style={{
                          transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />

                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-white border border-hairline text-[9px] font-mono font-bold text-primary tracking-widest uppercase">
                        {project.category}
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="p-6 flex flex-col flex-grow justify-between text-left">
                      <div>
                        {/* Title: 18px, bold, uppercase */}
                        <h3 className="text-lg font-bold text-ink font-heading mb-2 uppercase tracking-tight">
                          {project.title}
                        </h3>

                        {/* Description: Light 300 */}
                        <p className="text-xs md:text-sm text-body-text font-body font-light leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-2 mb-6">
                          {project.features.slice(0, 2).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start text-xs text-body-text font-body font-light">
                              <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 mr-1.5 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Tech badges and Actions */}
                      <div className="space-y-4 pt-4 border-t border-hairline">
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-surface-soft border border-hairline-strong text-[9px] font-mono text-muted-text font-bold uppercase rounded-none"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* CTA Links */}
                        <div className="flex justify-between items-center pt-2">
                          <a
                            href={project.githubUrl}
                            className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-widest text-muted-text hover:text-ink transition-colors duration-200 cursor-none"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span>SOURCE CODE</span>
                          </a>

                          <a
                            href={project.demoUrl}
                            className="text-[11px] font-bold tracking-widest text-primary hover:text-primary-active transition-colors duration-200 cursor-none uppercase"
                          >
                            <span>EXPLORE DETAILS ›</span>
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
