'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 transition-colors duration-500"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--gradient-spotlight), transparent 80%)`,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      aria-hidden
    />
  );
} 