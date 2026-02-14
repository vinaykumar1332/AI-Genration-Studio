import { useState } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { GlassHeader } from '../components/GlassHeader';
import { ImagePreviewModal } from '../components/ImagePreviewModal';
import { Sparkles, Download, Grid, LayoutGrid } from 'lucide-react';

export function Results() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [layoutMode, setLayoutMode] = useState('masonry');

  // Mock generated images
  const generatedImages = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1758613653843-87c253aea8cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzcxMDQ2MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Studio Portrait',
      timestamp: '2 minutes ago',
      settings: { avatar: 'Sophia', pose: 'Fashion Pose', background: 'Luxury Studio' },
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1764998112562-951d6f0abb62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZWwlMjBwb3J0cmFpdCUyMGx1eHVyeXxlbnwxfHx8fDE3NzEwNDYxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Portrait',
      timestamp: '5 minutes ago',
      settings: { avatar: 'Isabella', pose: 'Standing', background: 'Elegant Interior' },
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1727300805079-9c9ef920c75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBvdXRkb29yJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3MTA0NjEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Natural Light Beauty',
      timestamp: '10 minutes ago',
      settings: { avatar: 'Sophia', pose: 'Walking', background: 'Natural Landscape' },
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1767439567636-792a76f6e4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtb2RlbCUyMGluZG9vciUyMHN0dWRpbyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MTA0NjEyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Studio Perfection',
      timestamp: '15 minutes ago',
      settings: { avatar: 'Alexander', pose: 'Fashion Pose', background: 'Luxury Studio' },
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1629507313712-f21468afdf2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTA0NTg0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Professional Headshot',
      timestamp: '20 minutes ago',
      settings: { avatar: 'Sophia', pose: 'Standing', background: 'Urban Setting' },
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1684919556999-a42d37ffccc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzEwNDU4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Contemporary Portrait',
      timestamp: '25 minutes ago',
      settings: { avatar: 'Alexander', pose: 'Sitting', background: 'Elegant Interior' },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
      <GlassHeader />

      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl mb-2" style={{ color: '#F2F2F2' }}>
                <span className="font-light">Your</span>{' '}
                <span className="font-semibold">AI Gallery</span>
              </h1>
              <p className="text-lg" style={{ color: '#A47864' }}>
                {generatedImages.length} ultra-realistic 4K images generated
              </p>
            </motion.div>

            {/* Controls */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Layout Toggle */}
              <div className="flex gap-2 p-2 rounded-full backdrop-blur-sm border border-white/20" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <button
                  onClick={() => setLayoutMode('masonry')}
                  className="p-2 rounded-full transition-all"
                  style={{
                    background: layoutMode === 'masonry' ? 'rgba(167, 139, 250, 0.3)' : 'transparent',
                  }}
                >
                  <LayoutGrid size={20} style={{ color: '#F2F2F2' }} />
                </button>
                <button
                  onClick={() => setLayoutMode('grid')}
                  className="p-2 rounded-full transition-all"
                  style={{
                    background: layoutMode === 'grid' ? 'rgba(167, 139, 250, 0.3)' : 'transparent',
                  }}
                >
                  <Grid size={20} style={{ color: '#F2F2F2' }} />
                </button>
              </div>

              {/* Download All */}
              <button
                className="px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 flex items-center gap-2 hover:bg-white/10 transition-all"
                style={{ background: 'rgba(0, 0, 0, 0.5)', color: '#F2F2F2' }}
              >
                <Download size={20} />
                <span className="hidden md:inline">Download All</span>
              </button>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Total Generated', value: generatedImages.length, icon, color: '#2D5BFF' },
              { label: 'This Week', value: generatedImages.length, icon, color: '#A78BFA' },
              { label: 'Resolution', value: '4K UHD', icon, color: '#A47864' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-[30px] border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(167, 139, 250, 0.3)' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm mb-2" style={{ color: '#A47864' }}>
                      {stat.label}
                    </p>
                    <p className="text-3xl" style={{ color: '#F2F2F2' }}>
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${stat.color}20` }}
                  >
                    <stat.icon size={24} style={{ color: stat.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Gallery */}
          {layoutMode === 'masonry' ? (
            <Masonry columnsCount={3} gutter="1.5rem">
              {generatedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImage(image)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg mb-1" style={{ color: '#F2F2F2' }}>
                        {image.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: '#A47864' }}>
                        {image.timestamp}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Object.values(image.settings).map((setting, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs backdrop-blur-sm border border-white/20"
                            style={{ background: 'rgba(167, 139, 250, 0.2)', color: '#F2F2F2' }}
                          >
                            {setting}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Download functionality
                        }}
                        className="p-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                      >
                        <Download size={16} style={{ color: '#F2F2F2' }} />
                      </button>
                    </div>
                  </div>

                  {/* Border Glow Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-all pointer-events-none" />
                </motion.div>
              ))}
            </Masonry>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {generatedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
                  onClick={() => setSelectedImage(image)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg mb-1" style={{ color: '#F2F2F2' }}>
                        {image.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#A47864' }}>
                        {image.timestamp}
                      </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="p-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                      >
                        <Download size={16} style={{ color: '#F2F2F2' }} />
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-all pointer-events-none" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
