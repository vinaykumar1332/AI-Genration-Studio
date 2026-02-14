import { useState, useRef } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function MagneticLink({ href, children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!linkRef.current) return;

    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Magnetic effect: pull text slightly towards cursor
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Link
      ref={linkRef}
      to={href}
      className="relative overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        className="block relative"
        style={{ color: '#F2F2F2' }}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        {children}

        {/* Expanding underline */}
        <motion.span
          className="absolute bottom-0 left-0 h-[1px]"
          style={{ background: '#A78BFA' }}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    </Link>
  );
}
