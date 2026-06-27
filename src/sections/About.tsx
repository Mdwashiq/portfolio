import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Clock, Cpu, BookOpen, Target, GraduationCap } from 'lucide-react';
import { aboutInfo } from '../data/portfolioData';

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

      const duration = 2000;
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
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="p-6 bg-transparent border border-hairline rounded-none flex items-start space-x-4 hover:border-hairline-strong transition-all duration-300"
    >
      <div className="p-2.5 bg-surface-soft border border-hairline text-primary">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        {/* display-sm is 24px in corporate style */}
        <div className="text-2xl font-bold text-ink font-heading tracking-tight">
          {count}
          <span className="text-primary">{stat.suffix}</span>
        </div>
        <div className="text-[10px] font-bold tracking-[1.5px] text-muted-text uppercase font-mono mt-1">
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
    <section id="about" className="py-20 relative overflow-hidden bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 font-heading uppercase">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-primary" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" ref={containerRef}>
          
          {/* Left Column: Image & Biography */}
          <div className="lg:col-span-6 flex flex-col space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-none overflow-hidden border border-hairline group bg-surface-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-80 z-10" />
              
              <img 
                src={aboutInfo.imageUrl} 
                alt="Mohamed Washiq" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-110 brightness-95"
              />

              <div className="absolute bottom-6 left-6 z-20 bg-white border border-hairline py-1.5 px-3 rounded-none text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                SYSTEMS.INIT(ONLINE);
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-left text-body-text leading-relaxed font-body font-light text-sm md:text-base"
            >
              <h3 className="text-base font-bold text-ink flex items-center space-x-2 font-heading tracking-tight uppercase">
                <Target className="w-4 h-4 text-primary" />
                <span>CAREER OBJECTIVE</span>
              </h3>
              
              {/* Objective inside soft plate */}
              <p className="bg-surface-card border border-hairline p-5 rounded-none font-light italic">
                {aboutInfo.objective}
              </p>

              <h3 className="text-base font-bold text-ink flex items-center space-x-2 font-heading tracking-tight pt-4 uppercase">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>PROFESSIONAL PHILOSOPHY</span>
              </h3>
              
              <p>{aboutInfo.bio}</p>
              <p>{aboutInfo.journey}</p>
            </motion.div>
          </div>

          {/* Right Column: Stats Grid & Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            
            {/* Stats Spec Cells */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutInfo.stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
            </div>

            {/* Timeline */}
            <div className="text-left">
              <h3 className="text-base font-bold text-ink mb-8 font-heading tracking-tight uppercase">
                ENGINEERING TIMELINE
              </h3>
              
              <div className="relative border-l border-hairline ml-3 space-y-8 py-2">
                {aboutInfo.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative pl-6 group"
                  >
                    {/* Square bullet */}
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-none bg-white border border-primary group-hover:bg-primary transition-all duration-300" />
                    
                    {/* Year badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-none bg-surface-soft border border-hairline text-[9px] font-mono font-bold text-primary mb-2 uppercase tracking-widest">
                      {item.year}
                    </span>
                    
                    {/* Title */}
                    <h4 className="text-sm font-bold text-ink font-heading mt-0.5 group-hover:text-primary transition-colors uppercase tracking-tight">
                      {item.title}
                    </h4>
                    
                    {/* Content */}
                    <p className="text-xs md:text-sm text-body-text mt-1 font-body font-light leading-relaxed">
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
