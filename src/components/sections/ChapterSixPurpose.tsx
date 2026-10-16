'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiHome, FiHeart, FiFileText, FiCheck, FiExternalLink, FiMaximize2, FiShield } from 'react-icons/fi';
import { PROJECTS, Project } from '@/data/portfolioData';

interface ChapterSixPurposeProps {
  onSelectProject: (project: Project) => void;
}

export default function ChapterSixPurpose({ onSelectProject }: ChapterSixPurposeProps) {
  const sarva = PROJECTS.find((p) => p.id === 'sarva-bhuta-nivasah')!;
  const annam = PROJECTS.find((p) => p.id === 'annam-brahm')!;
  const chaatra = PROJECTS.find((p) => p.id === 'chaatra-pramaanadhaar')!;

  return (
    <section id="chapter-6" className="py-24 border-b border-paper-border bg-paper-warm/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 06</span>
            <span className="text-paper-borderDark">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Technology With Purpose
          </h2>
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic mt-2">
            Community systems, institutional governance, and spiritual minimalism.
          </p>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Engineering achieves its highest value when applied to human-centered institutions. 
            These projects were built not as speculative tech demos, but as practical, operational systems serving ashram accommodation, community sacred events, and tamper-resistant student credential verification.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Chaatra PramaanAdhaar */}
          <div className="bg-paper-card border border-paper-border rounded-2xl p-6 sm:p-7 shadow-editorial flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-paper-border">
                <span className="px-2.5 py-0.5 rounded bg-terracotta/10 text-terracotta font-mono text-xs font-bold">
                  BILINGUAL CREDENTIALS
                </span>
                <span className="font-mono text-xs text-pine font-semibold">
                  LIVE DEPLOYED
                </span>
              </div>

              <div className="mt-4">
                <span className="font-mono text-[10px] text-ink-muted uppercase">
                  Institutional Identity System
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-0.5">
                  {chaatra.title}
                </h3>
                <div className="text-xs font-serif italic text-ink-muted mt-0.5">
                  छात्र प्रमाणाधार विद्यालय · Dual-Script ID Engine
                </div>
              </div>

              <p className="text-xs font-sans text-ink-light leading-relaxed mt-4">
                {chaatra.summary}
              </p>

              {/* Verified Features */}
              <div className="mt-5 space-y-2">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                  Key Capabilities
                </span>
                <ul className="space-y-1.5 text-xs font-sans text-ink-light">
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-terracotta mr-2 mt-0.5 shrink-0" />
                    <span>Dynamic PDF ID generation with embedded QR codes</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-terracotta mr-2 mt-0.5 shrink-0" />
                    <span>Complete bilingual data schema (Hindi &amp; English)</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-terracotta mr-2 mt-0.5 shrink-0" />
                    <span>Admin/Teacher role-based dashboards with CSV batch import</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {chaatra.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag tech-tag-paper text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-border flex items-center justify-between">
              <a
                href={chaatra.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-terracotta hover:underline font-semibold"
              >
                <span>Live Verification Portal</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onSelectProject(chaatra)}
                className="text-xs font-mono text-ink-muted hover:text-ink"
              >
                Details ↗
              </button>
            </div>
          </div>

          {/* Card 2: Sarva Bhuta Nivasah */}
          <div className="bg-paper-card border border-paper-border rounded-2xl p-6 sm:p-7 shadow-editorial flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-paper-border">
                <span className="px-2.5 py-0.5 rounded bg-pine-soft text-pine font-mono text-xs font-bold border border-pine/20">
                  HOSPITALITY OPS
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  Multi-Building
                </span>
              </div>

              <div className="mt-4">
                <span className="font-mono text-[10px] text-ink-muted uppercase">
                  Ashram Accommodation Engine
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-0.5">
                  {sarva.title}
                </h3>
                <div className="text-xs font-serif italic text-ink-muted mt-0.5">
                  सर्वभूतनिवासः · 2 Ashram Buildings
                </div>
              </div>

              <p className="text-xs font-sans text-ink-light leading-relaxed mt-4">
                {sarva.summary}
              </p>

              {/* Gauri Sadan SVG Floorplan Preview */}
              <div className="mt-4 p-3 bg-paper-warm/80 rounded-lg border border-paper-border flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded border border-paper-border p-1 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/projects/gauri_sadan.svg"
                    alt="Gauri Sadan Architectural SVG"
                    width={40}
                    height={40}
                    className="opacity-80"
                  />
                </div>
                <div className="text-[11px] font-mono text-ink-muted">
                  <span className="text-ink font-bold block">Gauri Sadan Architectural Map</span>
                  Vector SVG floor-plan with real-time room occupancy states.
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-5 space-y-2">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                  Security &amp; Architecture
                </span>
                <ul className="space-y-1.5 text-xs font-sans text-ink-light">
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-pine mr-2 mt-0.5 shrink-0" />
                    <span>Supabase PostgreSQL with Row-Level Security (RLS)</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-pine mr-2 mt-0.5 shrink-0" />
                    <span>Real-time multi-device occupancy synchronization</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {sarva.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag tech-tag-paper text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-border flex items-center justify-between">
              <span className="text-xs font-mono text-ink-muted">
                Flutter · Supabase · RLS
              </span>
              <button
                onClick={() => onSelectProject(sarva)}
                className="text-xs font-mono text-terracotta hover:underline inline-flex items-center space-x-1"
              >
                <span>Blueprint</span>
                <FiMaximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Annam-Brahm */}
          <div className="bg-paper-card border border-paper-border rounded-2xl p-6 sm:p-7 shadow-editorial flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-paper-border">
                <span className="px-2.5 py-0.5 rounded bg-amber-soft text-amber font-mono text-xs font-bold border border-amber/20">
                  OFFLINE-FIRST SEVA
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  Hindu Panchang
                </span>
              </div>

              <div className="mt-4">
                <span className="font-mono text-[10px] text-ink-muted uppercase">
                  Sacred Ceremony Management
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-0.5">
                  {annam.title}
                </h3>
                <div className="text-xs font-serif italic text-ink-muted mt-0.5">
                  अन्नं ब्रह्म · Spiritual Minimalism
                </div>
              </div>

              <p className="text-xs font-sans text-ink-light leading-relaxed mt-4">
                {annam.summary}
              </p>

              {/* Offline & Astronomical Details */}
              <div className="mt-5 space-y-2">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                  Design Architecture
                </span>
                <ul className="space-y-1.5 text-xs font-sans text-ink-light">
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-amber mr-2 mt-0.5 shrink-0" />
                    <span>Embedded Hive NoSQL for zero-connectivity temples</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-amber mr-2 mt-0.5 shrink-0" />
                    <span>Local Hindu Panchang lunar calendar calculations</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-amber mr-2 mt-0.5 shrink-0" />
                    <span>Spiritual minimalism with bilingual Hindi/English UI</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {annam.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag tech-tag-paper text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-border flex items-center justify-between">
              {annam.githubUrl ? (
                <a
                  href={annam.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-ink hover:text-terracotta"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-ink-muted">Local First</span>
              )}
              <button
                onClick={() => onSelectProject(annam)}
                className="text-xs font-mono text-terracotta hover:underline inline-flex items-center space-x-1"
              >
                <span>Details</span>
                <FiMaximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
