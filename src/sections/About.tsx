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
      className="p-6 bg-surface-soft border border-hairline rounded-none flex items-start space-x-4 hover:border-white/20 transition-all duration-300"
    >
      <div className="p-2.5 bg-black border border-hairline text-m-red">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <div className="text-3xl font-bold text-white font-heading tracking-tight">
          {count}
          <span className="text-m-red">{stat.suffix}</span>
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
    <section id="about" className="py-24 relative overflow-hidden bg-black border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4 font-heading uppercase">
            ABOUT ME
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-m-blue-light via-m-blue-dark to-m-red" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" ref={containerRef}>
          
          {/* Left Column: Grayscale Photo & Biography */}
          <div className="lg:col-span-6 flex flex-col space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-none overflow-hidden border border-hairline group shadow-2xl bg-black"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85 z-10" />
              
              <img 
                src={aboutInfo.imageUrl} 
                alt="Mohamed Washiq" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125 brightness-75"
              />

              <div className="absolute bottom-6 left-6 z-20 bg-black/95 border border-hairline py-1.5 px-3 rounded-none text-[10px] font-mono text-m-red uppercase tracking-widest">
                System.out.println("DRIVE_AI_ENGINE_ON");
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-left text-body-text leading-relaxed font-body font-light text-sm md:text-base"
            >
              <h3 className="text-lg font-bold text-white flex items-center space-x-2 font-heading tracking-tight">
                <Target className="w-4 h-4 text-m-red" />
                <span>CAREER OBJECTIVE</span>
              </h3>
              
              <p className="bg-surface-soft border border-hairline p-5 rounded-none font-light italic text-white/90">
                {aboutInfo.objective}
              </p>

              <h3 className="text-lg font-bold text-white flex items-center space-x-2 font-heading tracking-tight pt-4">
                <GraduationCap className="w-4 h-4 text-m-blue-light" />
                <span>PROFESSIONAL PHILOSOPHY</span>
              </h3>
              
              <p>{aboutInfo.bio}</p>
              <p>{aboutInfo.journey}</p>
            </motion.div>
          </div>

          {/* Right Column: Spec Cards Grid & Career Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            
            {/* Stats Spec Cells */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutInfo.stats.map((stat, idx) => (
                <StatCard key={idx} stat={stat} index={idx} />
              ))}
            </div>

            {/* Career Timeline */}
            <div className="text-left">
              <h3 className="text-lg font-bold text-white mb-8 font-heading tracking-tight">
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
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-none bg-black border border-m-red group-hover:bg-m-red transition-all duration-300" />
                    
                    {/* Year badge */}
                    <span className="inline-block px-2.5 py-0.5 rounded-none bg-surface-soft border border-hairline text-[9px] font-mono font-bold text-m-blue-light mb-2 uppercase tracking-widest">
                      {item.year}
                    </span>
                    
                    {/* Title */}
                    <h4 className="text-base font-bold text-white font-heading mt-0.5 group-hover:text-m-red transition-colors uppercase tracking-tight">
                      {item.title}
                    </h4>
                    
                    {/* Sub content */}
                    <p className="text-sm text-body-text mt-1 font-body font-light leading-relaxed">
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
