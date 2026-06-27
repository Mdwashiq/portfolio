import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingTexts = [
  "INITIALIZING M POWER SYSTEMS...",
  "DSC TRACTION CONTROL: READY",
  "WARMING UP INTAKE TEMPERATURES...",
  "xDRIVE TORQUE DISTRIBUTOR: ONLINE",
  "ESTABLISHING DATABASE CONNECTION...",
  "LAUNCH CONTROL ACTIVE."
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = 'hidden';

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 80);

    const textInterval = setInterval(() => {
      setCurrentTextIdx((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 300);

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
      }, 500);
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
            transition: { duration: 0.6, ease: 'easeOut' } 
          }}
          className="fixed inset-0 bg-black z-9999 flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Header Dashboard Grid */}
          <div className="flex justify-between items-center text-xs font-mono text-muted-text">
            <div>BMW M DIVISION TECHNICAL HUB</div>
            <div>STATUS: {progress < 100 ? 'CALIBRATING CORE' : 'READY TO DRIVE'}</div>
          </div>

          {/* Central Logo & Progress Bar */}
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto w-full text-left">
            <div className="flex items-center space-x-3 mb-6">
              {/* Minimal M Tricolor accent bar */}
              <div className="w-2.5 h-10 flex flex-col">
                <div className="h-1/3 bg-m-blue-light" />
                <div className="h-1/3 bg-m-blue-dark" />
                <div className="h-1/3 bg-m-red" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-heading select-none uppercase">
                  MOHAMED WASHIQ
                </h1>
                <p className="text-xs font-mono tracking-widest text-muted-text">
                  ROBOTICS · AI · AUTOMATION SYSTEMS
                </p>
              </div>
            </div>

            {/* M Tricolor Progress Bar */}
            <div className="w-full h-1 bg-white/10 overflow-hidden mb-4 relative rounded-none">
              <motion.div
                className="h-full bg-gradient-to-r from-m-blue-light via-m-blue-dark to-m-red"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.08 }}
              />
            </div>

            {/* Console feedback logs */}
            <div className="h-6 flex items-center font-mono text-xs text-m-red">
              <motion.div
                key={currentTextIdx}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                className="tracking-wider uppercase"
              >
                &gt;&gt; {loadingTexts[currentTextIdx]}
              </motion.div>
            </div>
          </div>

          {/* Footer percentage indicators */}
          <div className="flex justify-between items-end font-mono">
            <div className="text-left text-[10px] text-muted-text hidden md:block">
              // HANDCRAFTED SYSTEMS // NO TEMPLATES OBSERVED.<br />
              // VERBATIM MODULE COMPLIANCE CHECK PASSED.
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
