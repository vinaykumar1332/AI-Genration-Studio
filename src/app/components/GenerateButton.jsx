import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function GenerateButton({
  isReady,
  isGenerating,
  onClick,
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={!isReady || isGenerating}
      className="relative w-full max-w-md mx-auto py-6 rounded-2xl overflow-hidden"
      style={{
        opacity: isReady ? 1 : 0.4,
        cursor: isReady && !isGenerating ? 'pointer' : 'not-allowed',
        border: '2px solid rgba(167, 139, 250, 0.3)',
      }}
      whileHover={isReady && !isGenerating ? { scale: 1.02 } : {}}
      whileTap={isReady && !isGenerating ? { scale: 0.98 } : {}}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #2D5BFF 0%, #A78BFA 100%)',
        }}
        animate={{
          opacity: isReady ? 1 : 0.3,
        }}
      />

      {/* Pulsing Glow when ready */}
      {isReady && !isGenerating && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle, rgba(242, 242, 242, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Loading Animation */}
      {isGenerating && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(242, 242, 242, 0.3) 50%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat,
            ease: 'linear',
          }}
        />
      )}

      {/* Button Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        <motion.div
          animate={
            isGenerating
              ? { rotate: 360 }
              : isReady
              ? { scale: [1, 1.2, 1] }
              : {}
          }
          transition={
            isGenerating
              ? { duration: 2, repeat, ease: 'linear' }
              : { duration: 2, repeat: Infinity }
          }
        >
          <Sparkles size={24} style={{ color: '#F2F2F2' }} />
        </motion.div>

        <span className="text-xl" style={{ color: '#F2F2F2' }}>
          {isGenerating
            ? 'Generating Magic...'
            : isReady
            ? 'Generate Image'
            : 'Complete All Selections'}
        </span>
      </div>

      {/* Bottom shimmer effect when ready */}
      {isReady && !isGenerating && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background:
              'linear-gradient(90deg, transparent, #F2F2F2, transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat,
            ease: 'linear',
          }}
        />
      )}
    </motion.button>
  );
}
