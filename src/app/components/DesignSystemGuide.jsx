import { motion } from 'motion/react';

export function DesignSystemGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl mb-4" style={{ color: '#F2F2F2' }}>
            European AI Media Studio
          </h1>
          <p className="text-xl" style={{ color: '#A47864' }}>
            Complete Design System & Component Guide
          </p>
        </motion.div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6" style={{ color: '#F2F2F2' }}>
            Color Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Cloud Dancer', hex: '#F2F2F2', desc: 'Primary Text & Quiet Luxury' },
              { name: 'Digital Lavender', hex: '#A78BFA', desc: 'Accent & Hover States' },
              { name: 'Mocha Mousse', hex: '#A47864', desc: 'Secondary Text & Warmth' },
              { name: 'Electric Cobalt', hex: '#2D5BFF', desc: 'CTAs & Highlights' },
            ].map((color) => (
              <div
                key={color.hex}
                className="p-6 rounded-2xl backdrop-blur-sm border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
              >
                <div
                  className="w-full h-24 rounded-xl mb-4"
                  style={{ background: color.hex }}
                />
                <h3 className="text-lg mb-1" style={{ color: '#F2F2F2' }}>
                  {color.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: '#A47864' }}>
                  {color.hex}
                </p>
                <p className="text-xs" style={{ color: '#A47864' }}>
                  {color.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6" style={{ color: '#F2F2F2' }}>
            Key Features & Interactions
          </h2>
          <div className="space-y-6">
            {[
              {
                title: '1. Glassmorphism',
                desc: 'backdrop-blur-[30px-40px], rgba(255, 255, 255, 0.03-0.08), border border-white/10-20',
                example: 'All cards, headers, modals use frosted glass effect',
              },
              {
                title: '2. Kinetic Typography',
                desc: 'Background text scrolls at different speed using useTransform',
                example: 'Hero section "STUDIO" text parallax effect',
              },
              {
                title: '3. Magnetic Links',
                desc: 'Nav links follow cursor with spring animation (stiffness: 150, damping: 15)',
                example: 'Header navigation with expanding underline',
              },
              {
                title: '4. 3D Tilt Effect',
                desc: 'Avatar cards use rotateY/rotateX on hover with perspective: 1000px',
                example: 'Avatar selector circular thumbnails',
              },
              {
                title: '5. Liquid Fill Animation',
                desc: 'Button background fills from bottom (y: 100% to 0) on click',
                example: 'Login/Signup buttons on form submission',
              },
              {
                title: '6. Neon Progress',
                desc: 'Gradient line with glow shadow at top of viewport',
                example: 'Generation progress indicator',
              },
              {
                title: '7. Image Magnifier',
                desc: 'Zoom 1x-3x with drag panning when zoomed',
                example: 'Full-screen image preview modal',
              },
              {
                title: '8. Horizontal Scroll',
                desc: 'Overflow-x-auto with scrollbar-hide and navigation arrows',
                example: 'Background selector carousel',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl mb-2" style={{ color: '#A78BFA' }}>
                  {feature.title}
                </h3>
                <p className="text-sm mb-2" style={{ color: '#F2F2F2' }}>
                  <span style={{ color: '#A47864' }}>Implementation:</span> {feature.desc}
                </p>
                <p className="text-sm" style={{ color: '#A47864' }}>
                  Example: {feature.example}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Component Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6" style={{ color: '#F2F2F2' }}>
            Component Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'GlassHeader',
                file: '/components/GlassHeader.tsx',
                features: ['Scroll-based blur', 'Responsive mobile menu', 'Sticky positioning'],
              },
              {
                name: 'MagneticLink',
                file: '/components/MagneticLink.tsx',
                features: ['Mouse tracking', 'Spring animation', 'Expanding underline'],
              },
              {
                name: 'AvatarSelector',
                file: '/components/AvatarSelector.tsx',
                features: ['3D tilt on hover', 'Availability states', 'Glowing selection border'],
              },
              {
                name: 'BackgroundSelector',
                file: '/components/BackgroundSelector.tsx',
                features: ['Horizontal scroll', 'Quick preview on hover', 'Navigation arrows'],
              },
              {
                name: 'GenerateButton',
                file: '/components/GenerateButton.tsx',
                features: ['Smart activation', 'Pulsing glow', 'Loading shimmer'],
              },
              {
                name: 'ProgressBar',
                file: '/components/ProgressBar.tsx',
                features: ['Neon gradient line', 'Percentage display', 'Moving shimmer'],
              },
              {
                name: 'ImagePreviewModal',
                file: '/components/ImagePreviewModal.tsx',
                features: ['Zoom & pan', 'Drag to move', 'Download/Share actions'],
              },
              {
                name: 'MobileBottomSheet',
                file: '/components/MobileBottomSheet.tsx',
                features: ['Slide up animation', 'Glassy backdrop', 'Swipe handle'],
              },
            ].map((component, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-lg mb-2" style={{ color: '#F2F2F2' }}>
                  {component.name}
                </h3>
                <p className="text-sm mb-3 font-mono" style={{ color: '#2D5BFF' }}>
                  {component.file}
                </p>
                <ul className="space-y-1">
                  {component.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-start gap-2" style={{ color: '#A47864' }}>
                      <span style={{ color: '#A78BFA' }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Page Structure */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6" style={{ color: '#F2F2F2' }}>
            Page Structure
          </h2>
          <div className="space-y-4">
            {[
              {
                route: '/',
                name: 'Homepage',
                sections: ['Hero with parallax', 'Features grid', 'CTA section', 'Footer'],
              },
              {
                route: '/login',
                name: 'Login',
                sections: ['Glass card form', 'Liquid fill button', 'SSO with thermal glow'],
              },
              {
                route: '/signup',
                name: 'Signup',
                sections: ['Extended form', 'Terms checkbox', 'SSO integration'],
              },
              {
                route: '/studio',
                name: 'Studio',
                sections: ['Demographics selector', 'Avatar grid', 'Pose cards', 'Background carousel', 'Generate button'],
              },
              {
                route: '/results',
                name: 'Results',
                sections: ['Stats cards', 'Masonry/Grid toggle', 'Image gallery', 'Preview modal'],
              },
            ].map((page, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <h3 className="text-xl" style={{ color: '#F2F2F2' }}>
                    {page.name}
                  </h3>
                  <span className="text-sm font-mono" style={{ color: '#A78BFA' }}>
                    {page.route}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {page.sections.map((section, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ background: 'rgba(167, 139, 250, 0.2)', color: '#F2F2F2' }}
                    >
                      {section}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Animation Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl mb-6" style={{ color: '#F2F2F2' }}>
            Animation Specifications
          </h2>
          <div
            className="p-8 rounded-2xl backdrop-blur-sm border border-white/10 font-mono text-sm"
            style={{ background: 'rgba(255, 255, 255, 0.03)', color: '#F2F2F2' }}
          >
            <pre style={{ color: '#A78BFA' }}>
{`// Motion (Framer Motion) Configuration

// Spring Animations
{ type: 'spring', stiffness: 300, damping: 30 }
{ type: 'spring', stiffness: 150, damping: 15 } // Magnetic
{ type: 'spring', stiffness: 500 } // Quick snap

// Timing
duration: 0.3-0.8s // Most interactions
delay: index * 0.1 // Staggered reveals

// Hover States
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}

// Infinite Loops
transition={{ duration: 2, repeat: Infinity }}

// Scroll Transforms
const y = useTransform(scrollY, [0, 1000], [0, 300])
const opacity = useTransform(scrollY, [0, 400], [1, 0])`}
            </pre>
          </div>
        </section>

        {/* Mobile Considerations */}
        <section>
          <h2 className="text-3xl mb-6" style={{ color: '#F2F2F2' }}>
            Mobile Optimizations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                feature: 'Responsive Grid',
                mobile: 'grid-cols-2',
                desktop: 'md:grid-cols-4',
              },
              {
                feature: 'Touch Targets',
                mobile: 'Minimum 44px',
                desktop: 'Hover states',
              },
              {
                feature: 'Typography',
                mobile: 'text-4xl',
                desktop: 'md:text-6xl',
              },
              {
                feature: 'Navigation',
                mobile: 'Hamburger menu',
                desktop: 'Full nav bar',
              },
              {
                feature: 'Bottom Sheet',
                mobile: 'Slides up for selections',
                desktop: 'Hidden',
              },
              {
                feature: 'Spacing',
                mobile: 'px-6',
                desktop: 'container mx-auto',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl backdrop-blur-sm border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="text-lg mb-3" style={{ color: '#F2F2F2' }}>
                  {item.feature}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm" style={{ color: '#A47864' }}>
                    📱 Mobile: <span style={{ color: '#F2F2F2' }}>{item.mobile}</span>
                  </p>
                  <p className="text-sm" style={{ color: '#A47864' }}>
                    💻 Desktop: <span style={{ color: '#F2F2F2' }}>{item.desktop}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
