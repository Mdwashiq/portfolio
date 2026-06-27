import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Award, GraduationCap, Calendar, ChevronLeft, ChevronRight, 
  Quote, ShieldCheck, Heart, BookOpen, Briefcase, Cpu 
} from 'lucide-react';
import { 
  achievementsData, certificationsData, educationData, testimonialsData 
} from '../data/portfolioData';

const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Heart: Heart,
  Cpu: Cpu,
  BookOpen: BookOpen,
  Award: Award
};

export default function Achievements() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [counters, setCounters] = useState<number[]>(achievementsData.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isInView) {
      achievementsData.forEach((ach, index) => {
        let start = 0;
        const end = ach.value;
        if (start === end) return;

        const duration = 2000;
        const steps = Math.min(end, 50);
        const incrementValue = Math.ceil(end / steps);
        const incrementTime = Math.floor(duration / steps);

        const timer = setInterval(() => {
          start += incrementValue;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const next = [...prev];
            next[index] = start;
            return next;
          });
        }, incrementTime);
      });
    }
  }, [isInView]);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-canvas border-t border-hairline" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. METRICS & COUNTERS */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 font-heading uppercase">
            IMPACT & METRICS
          </h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {achievementsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-surface-card border border-hairline rounded-none flex flex-col justify-between text-left"
              >
                <div className="p-2 bg-white border border-hairline text-primary w-fit mb-4">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-ink font-heading tracking-tight leading-none">
                    {counters[index]}
                    <span className="text-primary">{item.suffix}</span>
                  </div>
                  <div className="text-[10px] font-bold tracking-[1.5px] text-muted-text uppercase font-mono mt-1">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-body-text font-body font-light leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. EDUCATION & CERTIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Left Panel: Education Timeline */}
          <div className="text-left">
            <h3 className="text-base font-bold text-ink mb-8 font-heading tracking-tight uppercase flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span>EDUCATION HISTORY</span>
            </h3>

            <div className="relative border-l border-hairline ml-3 space-y-8 py-2">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative pl-6 group"
                >
                  {/* Square bullet */}
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-white border border-primary group-hover:bg-primary transition-all duration-300" />
                  
                  <div className="flex items-center space-x-2 text-[9px] font-mono font-bold text-primary mb-2 uppercase tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                    {edu.score && (
                      <>
                        <span>·</span>
                        <span className="text-ink">{edu.score}</span>
                      </>
                    )}
                  </div>
                  
                  <h4 className="text-sm font-bold text-ink font-heading mt-0.5 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-xs text-muted-text font-mono mt-1 uppercase tracking-wider">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs md:text-sm text-body-text mt-2.5 font-body font-light leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel: Certifications Spec Cells */}
          <div className="text-left">
            <h3 className="text-base font-bold text-ink mb-8 font-heading tracking-tight uppercase flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>CERTIFICATIONS</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 bg-surface-card border border-hairline rounded-none hover:border-hairline-strong transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-muted-text uppercase">{cert.issuer}</span>
                    <h4 className="text-sm font-bold text-ink font-heading mt-1.5 group-hover:text-primary transition-colors leading-snug uppercase tracking-tight">
                      {cert.title}
                    </h4>
                  </div>
                  
                  <div className="flex justify-between items-center mt-5 pt-3 border-t border-hairline">
                    <span className="text-[9px] font-mono text-muted-text">{cert.date}</span>
                    <a 
                      href={cert.credentialUrl} 
                      className="text-[9px] font-mono font-bold text-primary hover:text-primary-active inline-flex items-center space-x-0.5 cursor-none uppercase tracking-widest"
                    >
                      <span>VERIFY ›</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. TESTIMONIALS SLIDER */}
        <div className="text-left max-w-xl mb-12">
          <h3 className="text-base font-bold text-ink font-heading tracking-tight uppercase flex items-center space-x-2">
            <Quote className="w-5 h-5 text-primary" />
            <span>TESTIMONIALS</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative bg-surface-card border border-hairline rounded-none p-8 md:p-12 shadow-sm overflow-hidden min-h-[250px] flex flex-col justify-between">
            {/* Quote decoration */}
            <div className="absolute right-8 top-6 text-black/5 pointer-events-none select-none">
              <Quote className="w-24 h-24 stroke-[1px]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="text-left space-y-6"
              >
                {/* Review Text */}
                <p className="text-base md:text-lg font-body text-body-strong font-light leading-relaxed italic">
                  "{testimonialsData[currentTestimonial].text}"
                </p>

                {/* Reviewer details: 0px avatar frame */}
                <div className="flex items-center space-x-4 pt-4 border-t border-hairline">
                  {testimonialsData[currentTestimonial].imageUrl && (
                    <img 
                      src={testimonialsData[currentTestimonial].imageUrl} 
                      alt={testimonialsData[currentTestimonial].name}
                      className="w-12 h-12 rounded-none border border-hairline object-cover filter grayscale contrast-110 brightness-95"
                    />
                  )}
                  <div>
                    <div className="font-bold text-ink text-sm md:text-base font-heading uppercase tracking-tight">
                      {testimonialsData[currentTestimonial].name}
                    </div>
                    <div className="text-[10px] text-muted-text font-mono uppercase tracking-wider mt-0.5">
                      {testimonialsData[currentTestimonial].role} at <span className="text-primary font-bold">{testimonialsData[currentTestimonial].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Actions */}
            <div className="flex justify-between items-center mt-8 pt-4">
              {/* Pagination Dots (simple bars) */}
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className="h-1 rounded-none transition-all duration-300 cursor-none"
                    style={{
                      width: currentTestimonial === idx ? '24px' : '8px',
                      backgroundColor: currentTestimonial === idx ? '#1c69d4' : '#cccccc'
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-hairline-strong hover:bg-primary hover:text-white hover:border-primary text-ink flex items-center justify-center transition-all cursor-none"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-hairline-strong hover:bg-primary hover:text-white hover:border-primary text-ink flex items-center justify-center transition-all cursor-none"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
