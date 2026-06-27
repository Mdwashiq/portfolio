import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 font-heading uppercase">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-hairline ml-4 md:ml-8 space-y-16 py-4">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Square Custom bullet */}
              <div className="absolute -left-[5px] md:-left-[7px] top-1.5 w-[11px] h-[11px] md:w-[15px] md:h-[15px] bg-white border-2 border-primary group-hover:bg-primary transition-all duration-300" />

              {/* Experience Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink font-heading uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-text text-xs mt-2 font-mono uppercase tracking-widest">
                    <span className="font-bold text-ink/80">{exp.company}</span>
                    <span>·</span>
                    <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> {exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center px-4 py-2 bg-white border border-hairline-strong text-xs font-mono font-bold text-primary tracking-widest uppercase rounded-none">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Stark Card body grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 bg-surface-card border border-hairline rounded-none relative">
                
                {/* Left panel: Responsibilities */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <h4 className="text-[10px] font-bold font-mono text-muted-text tracking-widest uppercase flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-primary" />
                    KEY RESPONSIBILITIES
                  </h4>
                  <ul className="space-y-3 font-body text-xs md:text-sm text-body-text font-light leading-relaxed">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start">
                        {/* Square bullet indicator */}
                        <span className="w-1.5 h-1.5 bg-primary mt-2 mr-3.5 shrink-0 rounded-none" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right panel: Achievements & Tech badges */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  {/* Achievements */}
                  <div className="space-y-4 text-left">
                    <h4 className="text-[10px] font-bold font-mono text-muted-text tracking-widest uppercase flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      KEY ACHIEVEMENTS
                    </h4>
                    <ul className="space-y-3 font-body text-xs md:text-sm text-body-text font-light leading-relaxed">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary mt-2 mr-3.5 shrink-0 rounded-none" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Badges (0px radius) */}
                  <div className="text-left pt-4 border-t border-hairline">
                    <h4 className="text-[9px] font-mono font-bold tracking-widest text-muted-text uppercase mb-3">
                      MODULES APPLIED
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 bg-white border border-hairline-strong text-[10px] font-mono text-body-text hover:text-ink hover:border-ink transition-all duration-200 rounded-none"
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
