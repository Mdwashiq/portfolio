import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Clock, Cpu, BookOpen, Target, GraduationCap } from 'lucide-react';
import { aboutInfo } from '../data/portfolioData';

// Map icon name string to Lucide component
const iconMap: Record<string, any> = {
  Briefcase: Briefcase,
  Clock: Clock,
  Cpu: Cpu,
  BookOpen: BookOpen
};

function StatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const IconComponent = iconMap[stat.icon] || Briefcase;

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      if (start === end) return;

      const duration = 2000; // 2 seconds
      const incrementTime = Math.floor(duration / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, Math.max(incrementTime, 20));

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl glassmorphism hover:border-white/20 transition-colors duration-300 relative group flex items-start space-x-4 shadow-xl"
    >
      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-accent group-hover:bg-primary/20 transition-all duration-300">
        <IconComponent className="w-6 h-6" />
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-extrabold text-white font-heading">
          {count}
          <span className="text-accent">{stat.suffix}</span>
        </div>
        <div className="text-xs md:text-sm text-white/50 font-medium font-body mt-1">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-150px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-heading">
            ABOUT ME
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" ref={containerRef}>
          
          {/* Left Column: Image/Avatar Block & Biography */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl"
            >
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60 z-10" />
              
              {/* Dynamic glowing border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              
              {/* Premium image placeholder using abstract tech theme */}
              <img 
                src={aboutInfo.imageUrl} 
                alt="Mohamed Washiq" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
              />

              {/* Float code tag */}
              <div className="absolute bottom-6 left-6 z-20 glassmorphism py-2 px-4 rounded-xl border border-white/10 text-xs font-mono text-accent">
                System.out.println("Hello, World!");
              </div>
            </motion.div>

            {/* Paragraph Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-left text-white/70 leading-relaxed font-body"
            >
              <h3 className="text-xl font-bold text-white flex items-center space-x-2 font-heading">
                <Target className="w-5 h-5 text-accent" />
                <span>My Career Objective</span>
              </h3>
              <p className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                {aboutInfo.objective}
              </p>
              <h3 className="text-xl font-bold text-white flex items-center space-x-2 font-heading pt-4">
                <GraduationCap className="w-5 h-5 text-secondary" />
                <span>My Professional Philosophy</span>
              </h3>
              <p>
                {aboutInfo.bio}
              </p>
              <p>
                {aboutInfo.journey}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Statistics Grid & Career Journey Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutInfo.stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
            </div>

            {/* Career Timeline */}
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-6 font-heading flex items-center space-x-2">
                <span>Career Journey</span>
              </h3>
              
              <div className="relative border-l border-white/10 ml-3 space-y-8 py-2">
                {aboutInfo.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative pl-6 group"
                  >
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-bg-dark border-2 border-primary group-hover:border-accent transition-colors duration-300" />
                    
                    {/* Year badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-accent mb-2">
                      {item.year}
                    </span>
                    
                    {/* Content */}
                    <h4 className="text-base font-bold text-white font-heading mt-0.5 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/50 mt-1 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
