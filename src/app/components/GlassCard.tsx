import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      className={`p-8 md:p-12 rounded-3xl backdrop-blur-[40px] border border-white/20 shadow-2xl ${className}`}
      style={{ 
        background: 'rgba(255, 255, 255, 0.08)',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
