import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface MobileBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function MobileBottomSheet({
  isOpen,
  onClose,
  title,
  children,
}: MobileBottomSheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div
              className="rounded-t-3xl backdrop-blur-[40px] border-t border-white/20 max-h-[85vh] overflow-y-auto"
              style={{ background: 'rgba(0, 0, 0, 0.9)' }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ background: 'rgba(255, 255, 255, 0.3)' }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <h3 className="text-xl" style={{ color: '#F2F2F2' }}>
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <ChevronDown size={24} style={{ color: '#F2F2F2' }} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
