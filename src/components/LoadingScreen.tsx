import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingTexts = [
  "INITIALIZING BMW DIGITAL CORE...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "CALIBRATING COMPONENT MODULES...",
  "SYNCING TELEMETRY PROFILE...",
  "ESTABLISHING DATABASE SYNC...",
  "PORTFOLIO READY."
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + step, 100);
      });
    }, 70);

    const textInterval = setInterval(() => {
      setCurrentTextIdx((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 250);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        document.body.style.overflow = '';
        onComplete();
      }, 400);
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
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeOut' } 
          }}
          className="fixed inset-0 bg-surface-dark z-9999 flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-xs font-mono text-on-dark-soft tracking-wider">
            <div>BMW SYSTEM PLATFORM [V8.1]</div>
            <div>STATUS: {progress < 100 ? 'CONFIGURING' : 'SYSTEMS SYNCED'}</div>
          </div>

          {/* Central Logo & Progress Bar */}
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto w-full text-left">
            <div className="flex items-center space-x-3 mb-6">
              {/* BMW Corporate Blue branding stripe */}
              <div className="w-1.5 h-10 bg-primary" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-heading uppercase">
                  MOHAMED WASHIQ
                </h1>
                <p className="text-xs font-mono tracking-widest text-on-dark-soft uppercase">
                  ROBOTICS & SOFTWARE ENGINEERING
                </p>
              </div>
            </div>

            {/* BMW Blue Progress Bar */}
            <div className="w-full h-1 bg-white/10 overflow-hidden mb-4 relative rounded-none">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.08 }}
              />
            </div>

            {/* Console Feedback */}
            <div className="h-6 flex items-center font-mono text-xs text-primary">
              <motion.div
                key={currentTextIdx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                className="tracking-wider uppercase font-bold"
              >
                &gt;&gt; {loadingTexts[currentTextIdx]}
              </motion.div>
            </div>
          </div>

          {/* Footer percentage */}
          <div className="flex justify-between items-end font-mono">
            <div className="text-left text-[10px] text-on-dark-soft hidden md:block">
              // DESIGNED UNDER BMW CORPORATE SPECIFICATION //
            </div>
            <div className="text-right w-full md:w-auto text-7xl md:text-9xl font-bold tracking-tighter text-white/5 select-none leading-none">
              {progress}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
