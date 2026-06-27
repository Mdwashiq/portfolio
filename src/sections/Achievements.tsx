import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Award, GraduationCap, Calendar, ChevronLeft, ChevronRight, 
  Quote, ShieldCheck, Heart, BookOpen, Briefcase, Cpu 
} from 'lucide-react';
import { 
  achievementsData, certificationsData, educationData, testimonialsData 
} from '../data/portfolioData';

// Map icon name string to Lucide component
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

  // Handle auto slide for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 8000); // 8 seconds per testimonial
    return () => clearInterval(timer);
  }, []);

  // Increment counter values when visible
  useEffect(() => {
    if (isInView) {
      achievementsData.forEach((ach, index) => {
        let start = 0;
        const end = ach.value;
        if (start === end) return;

        const duration = 2000;
        const steps = Math.min(end, 50); // limit steps to keep it fast
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
    <section id="achievements" className="py-24 relative overflow-hidden bg-bg-dark" ref={containerRef}>
      {/* Background decoration blur */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. METRICS & COUNTERS */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            ACHIEVEMENTS & IMPACT
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {achievementsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl glassmorphism border border-white/5 flex flex-col justify-between text-left shadow-lg"
              >
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-accent w-fit mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-heading">
                    {counters[index]}
                    <span className="text-accent">{item.suffix}</span>
                  </div>
                  <div className="text-xs text-white/50 font-mono tracking-wider uppercase mt-1">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-white/40 font-body leading-relaxed mt-2">
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
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 font-heading flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span>Education</span>
            </h3>

            <div className="relative border-l border-white/10 ml-3 space-y-8 py-2">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6 group"
                >
                  <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-bg-dark border-2 border-primary group-hover:border-accent transition-colors duration-300" />
                  
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-accent mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                    {edu.score && (
                      <>
                        <span>•</span>
                        <span className="text-secondary">{edu.score}</span>
                      </>
                    )}
                  </div>
                  
                  <h4 className="text-base font-bold text-white font-heading mt-0.5 group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-xs text-white/60 font-mono mt-1">
                    {edu.institution}
                  </p>
                  
                  <p className="text-sm text-white/40 mt-2.5 font-body leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel: Certifications Grid */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 font-heading flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-accent" />
              <span>Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl glassmorphism border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-white/40">{cert.issuer}</span>
                    <h4 className="text-sm font-bold text-white font-heading mt-1.5 group-hover:text-accent transition-colors leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                  
                  <div className="flex justify-between items-center mt-5 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-mono text-white/30">{cert.date}</span>
                    <a 
                      href={cert.credentialUrl} 
                      className="text-[10px] font-mono font-bold text-accent hover:text-white inline-flex items-center space-x-0.5 cursor-none"
                    >
                      <span>VERIFY</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. TESTIMONIALS SLIDER */}
        <div className="text-left max-w-xl mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-white font-heading flex items-center space-x-2">
            <Quote className="w-6 h-6 text-secondary" />
            <span>Client & Colleague Testimonials</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative glassmorphism rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl overflow-hidden min-h-[250px] flex flex-col justify-between">
            {/* Quote decoration */}
            <div className="absolute right-8 top-6 text-white/5 pointer-events-none select-none">
              <Quote className="w-24 h-24 stroke-[1px]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-left space-y-6"
              >
                {/* Review Text */}
                <p className="text-base md:text-xl font-body text-white/80 leading-relaxed italic">
                  "{testimonialsData[currentTestimonial].text}"
                </p>

                {/* Reviewer Meta details */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  {testimonialsData[currentTestimonial].imageUrl && (
                    <img 
                      src={testimonialsData[currentTestimonial].imageUrl} 
                      alt={testimonialsData[currentTestimonial].name}
                      className="w-12 h-12 rounded-full border border-white/10 object-cover"
                    />
                  )}
                  <div>
                    <div className="font-bold text-white text-sm md:text-base font-heading">
                      {testimonialsData[currentTestimonial].name}
                    </div>
                    <div className="text-xs text-white/50 font-mono">
                      {testimonialsData[currentTestimonial].role} at <span className="text-accent">{testimonialsData[currentTestimonial].company}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Actions panel */}
            <div className="flex justify-between items-center mt-8 pt-4">
              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-none ${
                      currentTestimonial === idx ? 'w-6 bg-accent' : 'w-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white/70 hover:text-white transition-all cursor-none"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white/70 hover:text-white transition-all cursor-none"
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
