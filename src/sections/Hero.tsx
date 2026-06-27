import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Bot, Cpu, Terminal } from 'lucide-react';
import { heroInfo } from '../data/portfolioData';

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const currentTitle = heroInfo.titles[titleIdx];
  const typingSpeed = isDeleting ? 30 : 60;

  useEffect(() => {
    let timer: number;
    const handleType = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentTitle.substring(0, prev.length + 1));
        if (displayText === currentTitle) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText((prev) => currentTitle.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % heroInfo.titles.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, titleIdx, typingSpeed]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-surface-dark text-white"
    >
      {/* Editorial grid layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:6rem_6rem] z-0 pointer-events-none" />

      {/* Top 4px BMW Corporate Blue branding line */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-primary z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative py-16">
        
        {/* Left Column: Stark Corporate Showcase */}
        <div className="lg:col-span-8 flex flex-col text-left space-y-8">
          
          <div className="text-[11px] font-bold tracking-[1.5px] text-primary uppercase font-mono">
            // PORTFOLIO DEMO // BMW CORPORATE INTERFACE
          </div>

          <div className="space-y-4">
            {/* Display XL 64px, bold uppercase */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none font-heading uppercase">
              ENGINEERING <br />
              <span className="text-on-dark-soft">THE FUTURE.</span>
            </h1>
            
            {/* Blue line divider */}
            <div className="w-16 h-1 bg-primary my-4" />
          </div>

          {/* Typing display */}
          <div className="h-10 md:h-14 flex items-center">
            <p className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase font-heading">
              {displayText}
              <span className="w-1 h-8 inline-block bg-primary ml-1.5 animate-[pulse_0.8s_infinite] align-middle" />
            </p>
          </div>

          {/* Body text: Inter 300 Light */}
          <p className="text-on-dark-soft max-w-xl text-base md:text-lg leading-relaxed font-body font-light">
            {heroInfo.tagline} {heroInfo.bio}
          </p>

          {/* CTAs: Rectangular buttons (0px) */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="bmw-btn-primary cursor-none"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="bmw-btn-secondary-on-dark cursor-none"
            >
              <span>HIRE ME</span>
            </button>

            <a
              href={heroInfo.resumeUrl}
              download
              className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-xs font-bold text-white tracking-[0.5px] uppercase border border-white/20 hover:border-white transition-all duration-300 inline-flex items-center space-x-2 cursor-none"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Dark navy elevated spec cells */}
        <div className="lg:col-span-4 relative h-[380px] md:h-[450px] flex flex-col justify-center space-y-4">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 bg-surface-dark-elevated border border-hairline-strong rounded-none flex items-start space-x-4"
          >
            <div className="p-2.5 bg-surface-dark border border-hairline-strong text-primary">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-on-dark-soft uppercase tracking-wider">AI AGENT DEVELOPMENT</div>
              <div className="text-base font-bold text-white uppercase font-heading">INTELLIGENT WORKFLOWS</div>
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mt-0.5">STATE: OPERATIONAL</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 bg-surface-dark-elevated border border-hairline-strong rounded-none flex items-start space-x-4"
          >
            <div className="p-2.5 bg-surface-dark border border-hairline-strong text-primary">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-on-dark-soft uppercase tracking-wider">ROBOTICS & EMBEDDED</div>
              <div className="text-base font-bold text-white uppercase font-heading">ESP32 & SYSTEM CONTROLS</div>
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mt-0.5">HARDWARE: CALIBRATED</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 bg-surface-dark-elevated border border-hairline-strong rounded-none flex items-start space-x-4"
          >
            <div className="p-2.5 bg-surface-dark border border-hairline-strong text-primary">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-on-dark-soft uppercase tracking-wider">FULL STACK SAAS</div>
              <div className="text-base font-bold text-white uppercase font-heading">REACT & NODE SERVICES</div>
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mt-0.5">DATABASE: SUPABASE</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
