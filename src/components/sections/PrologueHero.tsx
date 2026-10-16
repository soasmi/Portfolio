'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowDown, FiMapPin, FiAward, FiBookOpen, FiTerminal, FiLayers } from 'react-icons/fi';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface PrologueHeroProps {
  onScrollToNext: () => void;
}

export default function PrologueHero({ onScrollToNext }: PrologueHeroProps) {
  return (
    <section
      id="prologue"
      className="relative min-h-screen pt-20 pb-16 flex flex-col justify-between overflow-hidden border-b border-paper-border paper-grid"
    >
      {/* Background subtle geometric coordinate marks */}
      <div className="absolute top-16 left-6 font-mono text-[10px] text-ink-muted/50 select-none hidden sm:block">
        GRID REF: [28.6139° N, 77.2090° E] · NEW DELHI
      </div>
      <div className="absolute top-16 right-6 font-mono text-[10px] text-ink-muted/50 select-none hidden sm:block">
        SYS ID: SOASMI·2027·AI·ML
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Oversized Editorial Typography & Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top metadata pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-paper-border bg-paper-warm/80 text-xs font-mono text-ink-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>B.Tech CSE (AI &amp; ML) · VIPS GGSIPU, Delhi · Class of 2027</span>
            </motion.div>

            {/* Giant Visual Hero Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-ink leading-[0.92]">
                SOASMI<br />
                <span className="text-terracotta italic font-normal">KOHLI</span>
              </h1>
            </motion.div>

            {/* Core Personal Manifesto (Refined wording from brief) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3 pt-2"
            >
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-ink leading-snug">
                “I build things at the intersection of intelligence, engineering and curiosity.”
              </p>
              <p className="font-sans text-sm sm:text-base text-ink-muted max-w-xl leading-relaxed">
                Part engineer, part researcher, perpetually curious about what happens when an abstract idea becomes real. 
                Focusing on research-grade machine learning, sensor-signal anomaly processing, applied cybersecurity, and local-first software architecture.
              </p>
            </motion.div>

            {/* Credibility & Metric Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2 flex flex-wrap gap-2.5 text-xs font-mono"
            >
              <span className="px-3 py-1.5 rounded border border-paper-border bg-paper-card text-ink flex items-center space-x-1.5 shadow-sm">
                <span className="font-bold text-terracotta">9.77</span>
                <span className="text-ink-muted">CGPA Standing</span>
              </span>

              <span className="px-3 py-1.5 rounded border border-paper-border bg-paper-card text-ink flex items-center space-x-1.5 shadow-sm">
                <FiAward className="w-3.5 h-3.5 text-amber" />
                <span>Winner, IEEE Hackathon 2025</span>
              </span>

              <span className="px-3 py-1.5 rounded border border-paper-border bg-paper-card text-ink flex items-center space-x-1.5 shadow-sm">
                <FiBookOpen className="w-3.5 h-3.5 text-pine" />
                <span>IEEE CISES 2025 Author</span>
              </span>

              <span className="px-3 py-1.5 rounded border border-paper-border bg-paper-card text-ink flex items-center space-x-1.5 shadow-sm">
                <FiTerminal className="w-3.5 h-3.5 text-cobalt" />
                <span>DRDO Research Intern</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: Editorial Photographic Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Corner Registration Crosshairs (Editorial publication style) */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-ink z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-ink z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-ink z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-ink z-20 pointer-events-none" />

              {/* Editorial Frame */}
              <div className="relative rounded-lg overflow-hidden bg-paper-warm border border-paper-border shadow-editorial">
                {/* Image */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/profile.png"
                    alt="Soasmi Kohli"
                    fill
                    priority
                    className="object-cover object-top grayscale-[15%] contrast-[105%]"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  
                  {/* Subtle warm lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom photo overlay caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-paper text-xs z-10 flex items-end justify-between font-mono">
                    <div>
                      <div className="font-bold text-sm tracking-wide">SOASMI KOHLI</div>
                      <div className="text-[10px] text-paper/80">NEW DELHI · B.TECH 2027</div>
                    </div>
                    <div className="text-[10px] px-2 py-0.5 rounded bg-terracotta text-paper font-semibold">
                      ENGINEER &amp; RESEARCHER
                    </div>
                  </div>
                </div>

                {/* Sub-card journal metadata annotation */}
                <div className="p-3 bg-paper-card border-t border-paper-border text-[11px] font-mono text-ink-muted flex items-center justify-between">
                  <span>FIG 0.1 · RESEARCH DOSSIER</span>
                  <span>STATE: CONVERGING</span>
                </div>
              </div>

              {/* Affectionate subtle CS humour note */}
              <div className="mt-3 text-right">
                <span className="inline-block text-[10px] font-mono text-ink-muted italic">
                  * Curiosity is an unbounded loop with guaranteed termination on insight.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between pt-4 border-t border-paper-border/60 text-xs font-mono text-ink-muted">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-pine" />
          <span>PROLOGUE · THE OPENING</span>
        </div>

        <button
          onClick={onScrollToNext}
          className="group inline-flex items-center space-x-2 text-ink hover:text-terracotta transition-colors focus:outline-none"
          data-cursor-label="Scroll"
        >
          <span>Scroll to begin narrative</span>
          <FiArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>

        <div className="hidden sm:block">
          <span>CHAPTERS 00 → 08</span>
        </div>
      </div>
    </section>
  );
}
