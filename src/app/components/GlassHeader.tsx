import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { MagneticLink } from './MagneticLink';
import { Menu, X } from 'lucide-react';

export function GlassHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/studio', label: 'Studio' },
    { href: '/results', label: 'Gallery' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-[30px] border-b border-white/15 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.div
              className="text-2xl tracking-tight"
              style={{ color: '#F2F2F2' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="font-light">AI Media</span>
              <span className="font-semibold ml-1">Studio</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <MagneticLink key={link.href} href={link.href}>
                {link.label}
              </MagneticLink>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <motion.button
                className="px-6 py-2 rounded-full border border-white/20 text-sm"
                style={{ color: '#F2F2F2' }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(167, 139, 250, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button
                className="px-6 py-2 rounded-full text-sm"
                style={{ 
                  background: 'linear-gradient(135deg, #2D5BFF 0%, #A78BFA 100%)',
                  color: '#F2F2F2'
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(45, 91, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 p-6 rounded-2xl bg-white/10 backdrop-blur-[30px] border border-white/15"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg"
                  style={{ color: '#F2F2F2' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    className="w-full px-6 py-2 rounded-full border border-white/20 text-sm"
                    style={{ color: '#F2F2F2' }}
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    className="w-full px-6 py-2 rounded-full text-sm"
                    style={{ 
                      background: 'linear-gradient(135deg, #2D5BFF 0%, #A78BFA 100%)',
                      color: '#F2F2F2'
                    }}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
