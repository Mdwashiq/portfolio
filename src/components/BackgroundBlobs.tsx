import { motion } from 'framer-motion';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blob 1: Purple-indigo in top-left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px]"
        style={{
          top: '-10%',
          left: '10%',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glow Blob 2: Blue-cyan in middle-right */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]"
        style={{
          top: '30%',
          right: '5%',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glow Blob 3: Cyan-accent in bottom-left */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-accent/10 blur-[110px]"
        style={{
          bottom: '10%',
          left: '5%',
        }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
