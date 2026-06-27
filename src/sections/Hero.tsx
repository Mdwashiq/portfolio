import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Bot, Cpu, Sparkles, Terminal } from 'lucide-react';
import { heroInfo } from '../data/portfolioData';

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const currentTitle = heroInfo.titles[titleIdx];
  const typingSpeed = isDeleting ? 40 : 80;

  // Typewriter effect
  useEffect(() => {
    let timer: number;
    
    const handleType = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentTitle.substring(0, prev.length + 1));
        if (displayText === currentTitle) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
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
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Dynamic Mesh Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* Floating Orbital Rings */}
      <div className="absolute w-[800px] h-[800px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none animate-[spin_120s_linear_infinite]" />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-white/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none animate-[spin_80s_linear_infinite_reverse]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Text Block */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glassmorphism border border-white/10 text-xs md:text-sm font-mono text-accent w-fit"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow text-accent" />
            <span>AI & ROBOTICS ENGINEER IN INDIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-heading"
          >
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {heroInfo.name}
            </span>
          </motion.h1>

          {/* Typing Display Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 md:h-14 flex items-center"
          >
            <p className="text-xl md:text-3xl font-mono text-white/80 font-medium">
              I am a <span className="text-accent font-semibold">{displayText}</span>
              <span className="w-1.5 h-6 md:h-8 inline-block bg-accent ml-1 animate-[pulse_0.8s_infinite] align-middle" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 max-w-xl text-base md:text-lg leading-relaxed font-body"
          >
            {heroInfo.tagline} {heroInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-sm font-semibold text-white inline-flex items-center space-x-2 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group cursor-none"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-semibold text-white inline-flex items-center space-x-2 transition-all duration-300 cursor-none"
            >
              <span>Hire Me</span>
            </button>

            <a
              href={heroInfo.resumeUrl}
              download
              className="px-6 py-3 rounded-full bg-transparent hover:bg-white/5 text-sm font-semibold text-white/80 hover:text-white inline-flex items-center space-x-2 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-none"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Graphic/Cards Block */}
        <div className="lg:col-span-5 relative h-[380px] md:h-[450px] flex items-center justify-center">
          {/* Central Rotating Shield */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-64 h-64 border border-dashed border-white/10 rounded-full"
          />

          {/* Floating Card 1: AI Agent */}
          <motion.div
            initial={{ x: 50, y: -50, opacity: 0 }}
            animate={{ 
              x: 0, 
              y: 0, 
              opacity: 1,
              translateY: [0, -12, 0]
            }}
            transition={{
              x: { duration: 0.8, delay: 0.2 },
              y: { duration: 0.8, delay: 0.2 },
              translateY: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute top-8 right-4 md:right-12 p-4 rounded-2xl glassmorphism border border-white/10 w-44 flex items-start space-x-3 shadow-2xl"
          >
            <div className="p-2.5 rounded-xl bg-accent/20 text-accent">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/40">AI MODULE</div>
              <div className="text-sm font-bold text-white font-heading">LLM & RAG</div>
              <div className="text-[10px] text-white/60 font-mono">Agent Active</div>
            </div>
          </motion.div>

          {/* Floating Card 2: Robotics & Hardware */}
          <motion.div
            initial={{ x: -50, y: 50, opacity: 0 }}
            animate={{ 
              x: 0, 
              y: 0, 
              opacity: 1,
              translateY: [0, 10, 0]
            }}
            transition={{
              x: { duration: 0.8, delay: 0.3 },
              y: { duration: 0.8, delay: 0.3 },
              translateY: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute bottom-12 left-4 md:left-8 p-4 rounded-2xl glassmorphism border border-white/10 w-48 flex items-start space-x-3 shadow-2xl"
          >
            <div className="p-2.5 rounded-xl bg-secondary/20 text-secondary">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/40">HARDWARE EDGE</div>
              <div className="text-sm font-bold text-white font-heading">ESP32 / ROS</div>
              <div className="text-[10px] text-white/60 font-mono">Control Online</div>
            </div>
          </motion.div>

          {/* Floating Card 3: Software / Stack */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              translateX: [0, -8, 0]
            }}
            transition={{
              y: { duration: 0.8, delay: 0.4 },
              translateX: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl glassmorphism border border-white/15 w-52 flex items-start space-x-3 shadow-2xl z-10"
          >
            <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
              <Terminal className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-white/40">FULL STACK</div>
              <div className="text-sm font-bold text-white font-heading">React & Supabase</div>
              <div className="text-[10px] text-accent font-mono">Status: Production</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
