'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { InteractiveCursor } from './InteractiveCursor';

interface CursorEffectsProps {
  children: React.ReactNode;
}

export const CursorEffects: React.FC<CursorEffectsProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const spotlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Spring configuration for smooth movement
  const springConfig = { damping: 30, stiffness: 200 };
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor position
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Background hue shift based on cursor position
  const hue = useTransform(
    smoothX,
    [0, window.innerWidth],
    [180, 240]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Interactive cursor */}
      <InteractiveCursor />

      {/* Spotlight effect */}
      <motion.div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${smoothX}px ${smoothY}px, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0.1) 25%, 
            rgba(255, 255, 255, 0) 50%)`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Background hue shift */}
      <motion.div
        className="fixed inset-0 z-[-1]"
        style={{
          background: `linear-gradient(to right, 
            hsl(${hue}, 70%, 95%), 
            hsl(${hue}, 70%, 98%))`,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Magnetic element component
export const MagneticElement: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = elementRef.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distance = 20; // Maximum distance for magnetic effect
    const x = (clientX - centerX) / centerX * distance;
    const y = (clientY - centerY) / centerY * distance;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={elementRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}; 