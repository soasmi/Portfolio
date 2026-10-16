'use client';

import React, { useState, useEffect } from 'react';
import ChapterBar from '@/components/ChapterBar';
import SignatureOrbitalCursor from '@/components/SignatureOrbitalCursor';
import ProjectModal from '@/components/ProjectModal';
import PrologueHero from '@/components/sections/PrologueHero';
import ChapterOneLearning from '@/components/sections/ChapterOneLearning';
import ChapterTwoUncertainty from '@/components/sections/ChapterTwoUncertainty';
import ChapterThreeCyber from '@/components/sections/ChapterThreeCyber';
import ChapterFourDrdo from '@/components/sections/ChapterFourDrdo';
import ChapterFiveFlagship from '@/components/sections/ChapterFiveFlagship';
import ChapterSixPurpose from '@/components/sections/ChapterSixPurpose';
import ChapterSevenEvidence from '@/components/sections/ChapterSevenEvidence';
import EpilogueContact from '@/components/sections/EpilogueContact';
import { CHAPTERS, Project } from '@/data/portfolioData';

export default function Home() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll tracking and active chapter detection
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      // Detect active chapter based on section positions
      const sectionElements = CHAPTERS.map((ch) => document.getElementById(ch.id));
      const scrollPosition = currentScroll + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapterIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateChapter = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return (
    <main className="relative min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper font-sans">
      {/* Signature Interactive Orbital Cursor (Lando Norris-inspired signature object) */}
      <SignatureOrbitalCursor activeChapter={currentChapter.num} />

      {/* Charles Leclerc-Inspired Sticky Chapter Progress Bar & Drawer */}
      <ChapterBar
        activeChapterIndex={activeChapterIndex}
        scrollProgress={scrollProgress}
        onNavigateChapter={handleNavigateChapter}
      />

      {/* Prologue — A Curious Mind */}
      <PrologueHero onScrollToNext={() => handleNavigateChapter('chapter-1')} />

      {/* Chapter 01 — Learning to Think */}
      <ChapterOneLearning />

      {/* Chapter 02 — The Uncertainty Lab (Cinematic Dark Interlude) */}
      <ChapterTwoUncertainty />

      {/* Chapter 03 — Engineering Intelligence */}
      <ChapterThreeCyber />

      {/* Chapter 04 — Two Chapters at DRDO (SSPL & SAG Strict Distinction) */}
      <ChapterFourDrdo />

      {/* Chapter 05 — Ideas Made Real (Flagship Offline RAG & Multimodal AI) */}
      <ChapterFiveFlagship onSelectProject={(project) => setSelectedProject(project)} />

      {/* Chapter 06 — Technology With Purpose (Chaatra PramaanAdhaar, Sarva Bhuta, Annam-Brahm) */}
      <ChapterSixPurpose onSelectProject={(project) => setSelectedProject(project)} />

      {/* Chapter 07 — Evidence, Not Adjectives (Publications, Honors, Capability Matrix) */}
      <ChapterSevenEvidence />

      {/* Epilogue — Still Becoming (Closing Reflection & Contact Channels) */}
      <EpilogueContact />

      {/* Technical Deep Dive Blueprint Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
