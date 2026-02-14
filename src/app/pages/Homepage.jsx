import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GlassHeader } from '../components/GlassHeader';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Zap, Crown } from 'lucide-react';

export function Homepage() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Kinetic typography effect - background text scrolls faster
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-x-hidden">
      <GlassHeader />

      {/* Hero Section with 3D Depth Effect */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Background Studio Text - Kinetic Typography */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: backgroundY }}
        >
          <h1
            className="text-[20vw] font-bold opacity-5 select-none"
            style={{ color: '#F2F2F2' }}
          >
            STUDIO
          </h1>
        </motion.div>

        {/* Hero Image - Fixed Model */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1580698864216-8008843ce6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjB3YWxraW5nJTIwcnVud2F5fGVufDF8fHx8MTc3MTA0NTg0MHww&ixlib=rb-4.1.0&q=80&w=1080)',
              filter: 'brightness(0.7)',
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10"
              style={{ background: 'rgba(167, 139, 250, 0.1)' }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} style={{ color: '#A78BFA' }} />
              <span className="text-sm" style={{ color: '#A78BFA' }}>European Luxury AI</span>
            </motion.div>

            <h2
              className="text-6xl md:text-8xl mb-6 leading-tight"
              style={{ color: '#F2F2F2' }}
            >
              <span className="font-light">Create</span>
              <br />
              <span className="font-semibold">Ultra-Realistic</span>
              <br />
              <span className="font-light">AI Media</span>
            </h2>

            <p
              className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
              style={{ color: '#A47864' }}
            >
              Generate 4K professional model imagery with advanced AI.
              European quality meets cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/studio">
                <motion.button
                  className="px-8 py-4 rounded-full text-lg flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #2D5BFF 0%, #A78BFA 100%)',
                    color: '#F2F2F2',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 50px rgba(45, 91, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Creating
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/results">
                <motion.button
                  className="px-8 py-4 rounded-full text-lg border border-white/20"
                  style={{ color: '#F2F2F2' }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(167, 139, 250, 0.5)',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Gallery
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: '#A78BFA' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-5xl md:text-6xl mb-6"
              style={{ color: '#F2F2F2' }}
            >
              <span className="font-light">Quiet Luxury</span>
              <br />
              <span className="font-semibold">Meets Innovation</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon,
                title: '4K Generation',
                description: 'Ultra-high resolution model imagery with precise detail rendering',
                color: '#2D5BFF',
              },
              {
                icon,
                title: 'European Standard',
                description: 'Sophisticated glassmorphic design with premium interactions',
                color: '#A78BFA',
              },
              {
                icon,
                title: 'AI Precision',
                description: 'Advanced selection system for pose, background, and styling',
                color: '#A47864',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl backdrop-blur-[30px] border border-white/10"
                style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{
                  y: -10,
                  borderColor: 'rgba(167, 139, 250, 0.3)',
                  background: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${feature.color}20` }}
                >
                  <feature.icon size={28} style={{ color: feature.color }} />
                </div>
                <h4
                  className="text-2xl mb-4"
                  style={{ color: '#F2F2F2' }}
                >
                  {feature.title}
                </h4>
                <p style={{ color: '#A47864' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="p-12 md:p-20 rounded-3xl backdrop-blur-[30px] border border-white/10 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(45, 91, 255, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="text-4xl md:text-5xl mb-6"
              style={{ color: '#F2F2F2' }}
            >
              Ready to Create?
            </h3>
            <p
              className="text-xl mb-10 max-w-2xl mx-auto"
              style={{ color: '#A47864' }}
            >
              Join the future of AI media generation with European luxury standards
            </p>
            <Link to="/signup">
              <motion.button
                className="px-10 py-5 rounded-full text-lg"
                style={{
                  background: 'linear-gradient(135deg, #2D5BFF 0%, #A78BFA 100%)',
                  color: '#F2F2F2',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 50px rgba(45, 91, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-6 border-t"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: '#A47864' }}>
              © 2026 AI Media Studio. European Luxury Standards.
            </p>
            <div className="flex gap-6">
              <a href="#" style={{ color: '#F2F2F2' }} className="hover:opacity-70 transition-opacity">
                Privacy
              </a>
              <a href="#" style={{ color: '#F2F2F2' }} className="hover:opacity-70 transition-opacity">
                Terms
              </a>
              <a href="#" style={{ color: '#F2F2F2' }} className="hover:opacity-70 transition-opacity">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
