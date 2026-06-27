import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingTexts = [
  "INITIALIZING SYSTEMS...",
  "LOADING AI AGENTS...",
  "CALIBRATING CONTROL LOOPS...",
  "ESTABLISHING SUPABASE SYNC...",
  "STITCHING SAAS HYPERVISOR...",
  "DEPLOYING PORTFOLIO..."
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = 'hidden';

    // Progress counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random incremental steps
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 120);

    // Text loop interval
    const textInterval = setInterval(() => {
      setCurrentTextIdx((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        // Re-enable scroll
        document.body.style.overflow = '';
        onComplete();
      }, 600); // Small pause for UX satisfaction
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100vh',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-bg-dark z-9999 flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Header Code Decrypt */}
          <div className="flex justify-between items-center text-xs md:text-sm font-mono text-white/40">
            <div>MOHAMED_WASHIQ_OS [V2.6.6]</div>
            <div>STATUS: {progress < 100 ? 'CALIBRATING' : 'ONLINE'}</div>
          </div>

          {/* Central Logo & Progress Bar */}
          <div className="flex flex-col items-center justify-center max-w-lg mx-auto w-full">
            {/* Pulsing Core */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-accent relative mb-8 flex items-center justify-center"
            >
              <div className="absolute inset-0.5 rounded-full bg-bg-dark flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-accent animate-pulse" />
              </div>
            </motion.div>

            {/* Typography */}
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 text-center font-heading">
              MOHAMED WASHIQ
            </h1>
            <p className="text-sm font-mono text-white/50 mb-8 tracking-widest text-center">
              ROBOTICS & AI ENGINEER
            </p>

            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Loading text messages */}
            <div className="h-6 flex items-center justify-center font-mono text-xs text-accent">
              <motion.div
                key={currentTextIdx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="tracking-wider"
              >
                {loadingTexts[currentTextIdx]}
              </motion.div>
            </div>
          </div>

          {/* Footer percentage */}
          <div className="flex justify-between items-end font-mono">
            <div className="text-left text-xs text-white/30 hidden md:block">
              // NO TEMPLATE USED. HANDCRAFTED IN TAMIL NADU, INDIA.<br />
              // REACT 19 + VITE 8 + TAILWIND V4 + FRAMER MOTION.
            </div>
            <div className="text-right w-full md:w-auto text-6xl md:text-8xl font-bold tracking-tighter text-white/20 select-none">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
