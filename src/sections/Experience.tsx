import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background blur ring */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16 py-4">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Glowing Indicator Dot */}
              <div className="absolute -left-[9px] md:-left-[11px] top-1.5 w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-bg-dark border-4 border-primary group-hover:border-accent transition-colors duration-300 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />

              {/* Experience Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-heading group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-white/50 text-sm mt-1.5 font-mono">
                    <span className="font-bold text-white/70">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> {exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-mono text-accent w-fit">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 rounded-3xl glassmorphism border border-white/5 shadow-2xl relative">
                
                {/* Left panel: Responsibilities */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h4 className="text-sm font-mono text-white/40 tracking-wider flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-primary" />
                    KEY RESPONSIBILITIES
                  </h4>
                  <ul className="space-y-3 font-body text-sm md:text-base text-white/70">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 mr-3 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right panel: Achievements & Badges */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  {/* Achievements */}
                  <div className="space-y-4 text-left">
                    <h4 className="text-sm font-mono text-white/40 tracking-wider flex items-center">
                      <Award className="w-4 h-4 mr-2 text-accent" />
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-3 font-body text-sm md:text-base text-white/70">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-1 mr-3 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="text-left">
                    <h4 className="text-xs font-mono text-white/30 tracking-wider mb-3">
                      STACK / MODULES USED
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
