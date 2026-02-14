import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, Download, Share2 } from 'lucide-react';

export function ImagePreviewModal({ image, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  if (!image) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
    if (zoom <= 1.5) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all"
          style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        >
          <X size={24} style={{ color: '#F2F2F2' }} />
        </button>

        {/* Controls */}
        <div className="absolute top-6 left-6 z-10 flex gap-3">
          {/* Zoom Controls */}
          <div className="flex gap-2 p-2 rounded-full backdrop-blur-sm border border-white/20" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
              disabled={zoom <= 1}
              style={{ opacity: zoom <= 1 ? 0.5 : 1 }}
            >
              <ZoomOut size={20} style={{ color: '#F2F2F2' }} />
            </button>
            <span className="px-3 flex items-center text-sm" style={{ color: '#F2F2F2' }}>
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
              disabled={zoom >= 3}
              style={{ opacity: zoom >= 3 ? 0.5 : 1 }}
            >
              <ZoomIn size={20} style={{ color: '#F2F2F2' }} />
            </button>
          </div>

          {/* Action Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Download functionality
            }}
            className="p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all"
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
          >
            <Download size={20} style={{ color: '#F2F2F2' }} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              // Share functionality
            }}
            className="p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all"
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
          >
            <Share2 size={20} style={{ color: '#F2F2F2' }} />
          </button>
        </div>

        {/* Image Container */}
        <motion.div
          ref={imageRef}
          className="relative max-w-7xl max-h-[90vh] cursor-move"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
        >
          <motion.img
            src={image.url}
            alt={image.title}
            className="max-w-full max-h-[90vh] object-contain select-none"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease',
            }}
            drag={zoom > 1}
            dragConstraints={imageRef}
            dragElastic={0.1}
          />

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl" style={{ color: '#F2F2F2' }}>
              {image.title}
            </h3>
            <p className="text-sm mt-1" style={{ color: '#A47864' }}>
              4K Ultra HD • AI Generated
            </p>
          </div>

          {/* Magnifier Hint */}
          {zoom === 1 && (
            <motion.div
              className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20"
              style={{ background: 'rgba(0, 0, 0, 0.7)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-sm" style={{ color: '#F2F2F2' }}>
                Use zoom to inspect details
              </span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
