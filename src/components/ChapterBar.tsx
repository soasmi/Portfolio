'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiFileText, FiArrowUpRight, FiCompass } from 'react-icons/fi';
import { CHAPTERS, PERSONAL_INFO } from '@/data/portfolioData';

interface ChapterBarProps {
  activeChapterIndex: number;
  scrollProgress: number;
  onNavigateChapter: (id: string) => void;
}

export default function ChapterBar({
  activeChapterIndex,
  scrollProgress,
  onNavigateChapter,
}: ChapterBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 bg-paper/90 backdrop-blur-md border-b border-paper-border transition-all duration-300"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          {/* Brand + Current Chapter */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={() => onNavigateChapter('prologue')}
              className="group flex items-center space-x-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              data-cursor-label="Top"
            >
              <span className="font-serif font-bold tracking-tight text-sm text-ink group-hover:text-terracotta transition-colors">
                SOASMI KOHLI
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-terracotta/70" />
            </button>

            {/* Current Chapter Indicator */}
            <div className="flex items-center space-x-2 text-xs font-mono text-ink-muted">
              <span className="text-terracotta font-semibold">Ch. {currentChapter.num}</span>
              <span className="text-paper-borderDark">/</span>
              <span className="truncate max-w-[140px] sm:max-w-[240px] text-ink font-sans font-medium">
                {currentChapter.title}
              </span>
            </div>
          </div>

          {/* Right Navigation & Menu Trigger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Quick Resume Link */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-1.5 text-xs font-mono text-ink hover:text-terracotta px-2.5 py-1 rounded border border-paper-border hover:border-terracotta transition-colors"
              data-cursor-label="PDF"
            >
              <FiFileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Scroll percentage */}
            <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-ink-muted">
              <span>{Math.round(scrollProgress)}%</span>
            </div>

            {/* Table of Contents Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-mono uppercase tracking-wider text-ink hover:text-terracotta border border-paper-border hover:border-terracotta rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Table of Contents"
              data-cursor-label="Index"
            >
              {isMenuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
              <span className="hidden sm:inline">Index</span>
            </button>
          </div>
        </div>

        {/* Global Reading Progress Line (Charles Leclerc inspired) */}
        <div className="w-full h-[2px] bg-paper-border/60 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-terracotta via-amber to-pine"
            style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
          />
        </div>
      </header>

      {/* Table of Contents Drawer Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-noir/70 backdrop-blur-sm flex justify-end"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-full max-w-md h-full bg-paper border-l border-paper-border p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-paper-border">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                      Narrative Architecture
                    </div>
                    <div className="font-serif text-xl font-bold text-ink mt-0.5">
                      Index of Chapters
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-ink-muted hover:text-ink rounded border border-paper-border hover:border-ink transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Chapter List */}
                <nav className="mt-6 space-y-1" aria-label="Chapter Index">
                  {CHAPTERS.map((ch, idx) => {
                    const isActive = idx === activeChapterIndex;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => {
                          onNavigateChapter(ch.id);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full group flex items-start justify-between text-left p-3 rounded transition-all ${
                          isActive
                            ? 'bg-paper-warm border-l-2 border-terracotta pl-3.5'
                            : 'hover:bg-paper-warm/60 border-l-2 border-transparent'
                        }`}
                        data-cursor-label={`Ch.${ch.num}`}
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs text-terracotta font-semibold">
                              Ch. {ch.num}
                            </span>
                            <span className="font-serif font-semibold text-sm text-ink group-hover:text-terracotta transition-colors">
                              {ch.title}
                            </span>
                          </div>
                          <div className="text-xs font-sans text-ink-muted mt-0.5">
                            {ch.subtitle}
                          </div>
                        </div>
                        <FiArrowUpRight
                          className={`w-4 h-4 text-ink-muted group-hover:text-terracotta transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                            isActive ? 'opacity-100 text-terracotta' : 'opacity-0 group-hover:opacity-100'
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Metadata & Social */}
              <div className="pt-6 border-t border-paper-border mt-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
                  <span>LOCATION: NEW DELHI, INDIA</span>
                  <span>CGPA: 9.77</span>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2 text-xs font-mono rounded border border-paper-border hover:border-ink text-ink transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2 text-xs font-mono rounded border border-paper-border hover:border-ink text-ink transition-colors"
                  >
                    <FiLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2 text-xs font-mono rounded bg-ink text-paper hover:bg-terracotta transition-colors"
                  >
                    <FiFileText className="w-4 h-4" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
