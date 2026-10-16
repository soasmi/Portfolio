'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface SignatureOrbitalCursorProps {
  activeChapter?: string;
}

export default function SignatureOrbitalCursor({ activeChapter = '00' }: SignatureOrbitalCursorProps) {
  const [mounted, setMounted] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const prevPos = useRef({ x: 0, y: 0 });

  // Spring physics for buttery smooth motion with gentle momentum lag
  const springX = useSpring(mouseX, { stiffness: 280, damping: 28, mass: 0.25 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 28, mass: 0.25 });

  // Trailing node with slower spring for orbital drag effect
  const trailX = useSpring(mouseX, { stiffness: 140, damping: 24, mass: 0.4 });
  const trailY = useSpring(mouseY, { stiffness: 140, damping: 24, mass: 0.4 });

  useEffect(() => {
    // Only mount on desktop with fine pointer
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Compute directional velocity and rotation
      const dx = clientX - prevPos.current.x;
      const dy = clientY - prevPos.current.y;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setRotation(angle);
      }
      prevPos.current = { x: clientX, y: clientY };

      // Inspect hovered element for interactive states
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-hover');
        if (interactive) {
          setIsHoveringClickable(true);
          const customLabel = interactive.getAttribute('data-cursor-label');
          setHoverLabel(customLabel || null);
        } else {
          setIsHoveringClickable(false);
          setHoverLabel(null);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted || !isVisible) return null;

  // Contextual quantum label per chapter
  const getChapterGlyph = (ch: string) => {
    switch (ch) {
      case '01': return 'G(V,E)';
      case '02': return '∇×B';
      case '03': return 'SHA·256';
      case '04': return 'SSPL·SAG';
      case '05': return 'FAISS·d';
      case '06': return 'ID·QR';
      case '07': return 'IEEE·25';
      case '08': return 'END·L';
      default: return 'ψ(t)';
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Lagging trailing momentum particle */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-terracotta/40 blur-[1px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Main cursor object */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer reticle / orbital ring */}
        <motion.div
          animate={{
            scale: isHoveringClickable ? 1.4 : 1,
            rotate: rotation,
            borderColor: isHoveringClickable ? '#C84B31' : '#111317',
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative flex items-center justify-center w-8 h-8 rounded-full border border-dashed border-opacity-40"
        >
          {/* Subtle micro-crosshairs */}
          <div className="absolute w-[1px] h-2 bg-ink/30 -top-1" />
          <div className="absolute w-[1px] h-2 bg-ink/30 -bottom-1" />
          <div className="absolute h-[1px] w-2 bg-ink/30 -left-1" />
          <div className="absolute h-[1px] w-2 bg-ink/30 -right-1" />

          {/* Central quantum nucleus */}
          <motion.div
            animate={{
              scale: isHoveringClickable ? 0.4 : 1,
              backgroundColor: isHoveringClickable ? '#C84B31' : '#111317',
            }}
            className="w-1.5 h-1.5 rounded-full"
          />

          {/* Orbiting micro-satellite */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-start"
          >
            <div className="w-1 h-1 rounded-full bg-terracotta/80 -translate-x-0.5" />
          </motion.div>
        </motion.div>

        {/* Dynamic Contextual Mathematical Readout */}
        <motion.div
          animate={{
            opacity: isHoveringClickable ? 0.95 : 0.65,
            x: isHoveringClickable ? 26 : 22,
            y: -12,
          }}
          className="absolute left-0 pointer-events-none select-none whitespace-nowrap bg-paper/90 backdrop-blur-sm border border-paper-border px-1.5 py-0.5 rounded text-[9px] font-mono tracking-tight text-ink-muted shadow-sm"
        >
          {hoverLabel ? hoverLabel : getChapterGlyph(activeChapter)}
        </motion.div>
      </motion.div>
    </div>
  );
}
