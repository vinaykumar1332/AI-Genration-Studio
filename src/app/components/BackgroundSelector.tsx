import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Background {
  id: string;
  name: string;
  category: string;
  image: string;
  videoPreview?: string;
}

interface BackgroundSelectorProps {
  backgrounds: Background[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export function BackgroundSelector({
  backgrounds,
  selected,
  onSelect,
}: BackgroundSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      >
        <ChevronLeft size={20} style={{ color: '#F2F2F2' }} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all"
        style={{ background: 'rgba(0, 0, 0, 0.3)' }}
      >
        <ChevronRight size={20} style={{ color: '#F2F2F2' }} />
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {backgrounds.map((bg) => (
          <motion.div
            key={bg.id}
            className="flex-shrink-0 w-64 cursor-pointer group"
            onClick={() => onSelect(bg.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background Preview */}
            <div
              className="relative aspect-video rounded-2xl overflow-hidden border-2 transition-all"
              style={{
                borderColor:
                  selected === bg.id
                    ? '#A78BFA'
                    : 'rgba(255, 255, 255, 0.2)',
                boxShadow:
                  selected === bg.id
                    ? '0 10px 40px rgba(167, 139, 250, 0.4)'
                    : 'none',
              }}
            >
              <img
                src={bg.image}
                alt={bg.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Quick Preview Label */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span style={{ color: '#F2F2F2' }}>Preview</span>
              </div>

              {/* Selection Check */}
              {selected === bg.id && (
                <motion.div
                  className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: '#A78BFA' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    style={{ color: '#F2F2F2' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
              )}
            </div>

            {/* Background Info */}
            <div className="mt-3">
              <p className="text-sm" style={{ color: '#F2F2F2' }}>
                {bg.name}
              </p>
              <p className="text-xs" style={{ color: '#A47864' }}>
                {bg.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
