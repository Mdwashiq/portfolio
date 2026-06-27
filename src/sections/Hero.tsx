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
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black text-white"
    >
      {/* Precision grid backdrop (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] z-0 pointer-events-none" />

      {/* 4px M Tricolor top accent on section */}
      <div className="absolute top-0 left-0 right-0 m-stripe z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative py-16">
        
        {/* Left Column: Bold stamped brand copy */}
        <div className="lg:col-span-8 flex flex-col text-left space-y-8">
          
          {/* Stamped category label */}
          <div className="text-[12px] font-bold tracking-[2px] text-m-red uppercase font-mono">
            // MOHAMED WASHIQ // ENGINEERING PORTFOLIO
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none font-heading uppercase">
              BUILDING <br />
              <span className="text-white">THE ULTIMATE</span>
            </h1>
            
            {/* 4px M Stripe Spacer */}
            <div className="w-24 m-stripe my-4" />
          </div>

          {/* Dynamic typing output */}
          <div className="h-10 md:h-14 flex items-center">
            <p className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase font-heading">
              {displayText}
              <span className="w-1 h-8 inline-block bg-m-red ml-1.5 animate-[pulse_0.8s_infinite] align-middle" />
            </p>
          </div>

          {/* Running text: Inter 300 Light */}
          <p className="text-body-text max-w-xl text-base md:text-lg leading-relaxed font-body font-light">
            {heroInfo.tagline} {heroInfo.bio}
          </p>

          {/* All Buttons are rectangular, letterspaced uppercase */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="bmw-btn-primary cursor-none"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="bmw-btn-outline cursor-none"
            >
              <span>HIRE ME</span>
            </button>

            <a
              href={heroInfo.resumeUrl}
              download
              className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-xs font-bold text-white tracking-[1.5px] uppercase border border-hairline transition-all duration-300 inline-flex items-center space-x-2 cursor-none"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Spec cards (0px radius) */}
        <div className="lg:col-span-4 relative h-[380px] md:h-[450px] flex flex-col justify-center space-y-4">
          
          {/* Status cell 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 bg-surface-card border border-hairline rounded-none flex items-start space-x-4"
          >
            <div className="p-2.5 bg-black border border-hairline text-m-blue-light">
              <Bot className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-muted-text uppercase tracking-wider">AI AGENT MODULE</div>
              <div className="text-base font-bold text-white uppercase font-heading">LLM & RAG NETWORKS</div>
              <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mt-0.5">STATUS: ONLINE</div>
            </div>
          </motion.div>

          {/* Status cell 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 bg-surface-card border border-hairline rounded-none flex items-start space-x-4"
          >
            <div className="p-2.5 bg-black border border-hairline text-m-red">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-muted-text uppercase tracking-wider">HARDWARE CORE</div>
              <div className="text-base font-bold text-white uppercase font-heading">ESP32 & ROS EDGE</div>
              <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mt-0.5">TELEMETRY: DYNAMIC</div>
            </div>
          </motion.div>

          {/* Status cell 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-5 bg-surface-card border border-hairline rounded-none flex items-start space-x-4"
          >
            <div className="p-2.5 bg-black border border-hairline text-m-blue-dark">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-muted-text uppercase tracking-wider">STACK ARCHITECTURE</div>
              <div className="text-base font-bold text-white uppercase font-heading">REACT & SUPABASE</div>
              <div className="text-[10px] font-mono text-m-blue-light uppercase tracking-widest mt-0.5">DEPLOYED ON VERCEL</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
