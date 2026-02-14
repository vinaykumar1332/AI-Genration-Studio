import { motion } from 'motion/react';

export function ProgressBar({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Neon Progress Line */}
      <motion.div
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #2D5BFF 0%, #A78BFA 50%, #2D5BFF 100%)',
          boxShadow: '0 0 20px rgba(167, 139, 250, 0.8), 0 0 40px rgba(45, 91, 255, 0.4)',
        }}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />

      {/* Percentage Display */}
      <motion.div
        className="fixed top-4 right-4 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <span className="text-sm" style={{ color: '#F2F2F2' }}>
          {Math.round(progress)}%
        </span>
      </motion.div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute top-0 h-1 w-32"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(242, 242, 242, 0.8), transparent)',
          left: `${progress}%`,
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1,
          repeat,
          ease: 'linear',
        }}
      />
    </div>
  );
}
