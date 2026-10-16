'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLayers, FiCheck, FiCpu, FiExternalLink, FiMaximize2 } from 'react-icons/fi';
import RagArchitectureDiagram from '../interactive/RagArchitectureDiagram';
import { PROJECTS, Project } from '@/data/portfolioData';

interface ChapterFiveFlagshipProps {
  onSelectProject: (project: Project) => void;
}

export default function ChapterFiveFlagship({ onSelectProject }: ChapterFiveFlagshipProps) {
  const docIntel = PROJECTS.find((p) => p.id === 'doc-intelligence')!;
  const echoSense = PROJECTS.find((p) => p.id === 'echosense')!;
  const community = PROJECTS.find((p) => p.id === 'community-crm')!;
  const dbms = PROJECTS.find((p) => p.id === 'data-management-system')!;
  const contactSorter = PROJECTS.find((p) => p.id === 'contact-sorter')!;

  return (
    <section id="chapter-5" className="py-24 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 05</span>
            <span className="text-paper-borderDark">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Ideas Made Real
          </h2>
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic mt-2">
            Flagship technical case studies engineered for offline autonomy and scale.
          </p>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            The difference between a research paper and useful software is how gracefully the system handles network dropouts, memory constraints, and user errors. 
            These systems were engineered to solve specific operational challenges, from zero-leakage local document intelligence to synchronized multimodal assistive interfaces.
          </p>
        </div>

        {/* Flagship Case Study 1: Document Intelligence Platform */}
        <div className="mb-16">
          <div className="bg-paper-card border border-paper-border rounded-2xl p-6 sm:p-8 shadow-editorial">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-paper-border">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-cobalt font-semibold">FLAGSHIP CASE STUDY · 01</span>
                  <span className="text-paper-borderDark">·</span>
                  <span className="px-2 py-0.5 rounded bg-cobalt-soft text-cobalt border border-cobalt/20 font-bold">
                    COMPLETED &amp; TESTED
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                  {docIntel.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-ink-muted mt-0.5">
                  {docIntel.subtitle}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onSelectProject(docIntel)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-ink text-paper hover:bg-terracotta transition-colors text-xs font-mono shadow-sm"
                  data-cursor-label="Inspect"
                >
                  <FiMaximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Blueprint</span>
                </button>
                {docIntel.githubUrl && (
                  <a
                    href={docIntel.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded border border-paper-border hover:border-ink text-ink transition-colors"
                    title="View GitHub Repository"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Architecture Explanatory Canvas */}
            <div className="my-6">
              <RagArchitectureDiagram />
            </div>

            {/* Problem & Verified Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-paper-warm/70 border border-paper-border text-xs font-sans text-ink-muted space-y-2">
                <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider block">
                  The Offline Constraint &amp; Design Rationale
                </span>
                <p className="leading-relaxed">
                  Enterprise documents contain sensitive proprietary or legal records that cannot touch cloud endpoints. 
                  By orchestrating SentenceTransformers with BAAI/bge-m3 dense embeddings and local FAISS CPU indices over SQLite persistence, the platform runs in complete network isolation with sub-second retrieval latency.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                  Verified Technical Deliverables
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-ink">
                  {docIntel.verifiedMetrics.map((vm, idx) => (
                    <li key={idx} className="flex items-center space-x-2 bg-paper-light px-3 py-1.5 rounded border border-paper-border">
                      <FiCheck className="w-3.5 h-3.5 text-cobalt shrink-0" />
                      <span>{vm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Case Study 2: EchoSense */}
        <div className="mb-16">
          <div className="bg-paper-card border border-paper-border rounded-2xl p-6 sm:p-8 shadow-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-terracotta font-semibold">FLAGSHIP CASE STUDY · 02</span>
                  <span className="text-paper-borderDark">·</span>
                  <span className="px-2 py-0.5 rounded bg-terracotta/10 text-terracotta border border-terracotta/20 font-bold">
                    IEEE CISES 2025 PROCEEDING
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  {echoSense.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-ink-muted">
                  {echoSense.subtitle}
                </p>

                <p className="text-xs sm:text-sm font-sans text-ink-light leading-relaxed pt-2">
                  {echoSense.summary}
                </p>

                <div className="bg-paper-warm/80 p-4 rounded-xl border border-paper-border">
                  <span className="font-mono text-[10px] text-ink font-bold uppercase tracking-wider block mb-1">
                    Multimodal Synthesis Architecture
                  </span>
                  <p className="text-xs font-sans text-ink-muted leading-relaxed">
                    Combines real-time hand-landmark computer vision for American Sign Language (ASL) gesture sequences with acoustic voice transcription into a synchronized intent interpretation layer.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {echoSense.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag tech-tag-paper text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-paper-warm border border-paper-border space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-bold block">
                    Verified Honors &amp; Publications
                  </span>
                  <div className="space-y-2 text-xs font-mono text-ink">
                    <div className="p-2.5 bg-paper rounded border border-paper-border flex items-center space-x-2">
                      <span className="text-terracotta font-bold">🏆</span>
                      <span>Winner, IEEE Hackathon 2025</span>
                    </div>
                    <div className="p-2.5 bg-paper rounded border border-paper-border flex items-center space-x-2">
                      <span className="text-pine font-bold">📄</span>
                      <span>Published in IEEE CISES 2025 Proceedings</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-paper-border flex items-center space-x-3">
                    <button
                      onClick={() => onSelectProject(echoSense)}
                      className="flex-1 py-2 text-xs font-mono rounded bg-ink text-paper hover:bg-terracotta transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <FiMaximize2 className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>
                    {echoSense.githubUrl && (
                      <a
                        href={echoSense.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded border border-paper-border hover:border-ink text-ink transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Secondary Systems Grid (CommUnity, DBMS, Contact Sorter) */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-paper-border">
            <h4 className="font-serif text-xl font-bold text-ink">
              Supporting Systems &amp; Production Architecture
            </h4>
            <span className="font-mono text-xs text-ink-muted">
              Projects 03 – 05
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CommUnity CRM */}
            <div className="bg-paper-card border border-paper-border rounded-xl p-5 shadow-editorial flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-ink-muted">
                  Full-Stack Architecture
                </span>
                <h5 className="font-serif font-bold text-base text-ink mt-1">
                  {community.title}
                </h5>
                <p className="text-xs font-sans text-ink-muted mt-2 line-clamp-3">
                  {community.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-paper-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-ink-muted">
                  Flutter Web · Node · Supabase
                </span>
                <button
                  onClick={() => onSelectProject(community)}
                  className="text-xs font-mono text-terracotta hover:underline inline-flex items-center space-x-1"
                >
                  <span>Case Study</span>
                  <FiArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* DBMS 12,500+ records */}
            <div className="bg-paper-card border border-paper-border rounded-xl p-5 shadow-editorial flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-pine font-semibold">
                  12,500+ User Scale
                </span>
                <h5 className="font-serif font-bold text-base text-ink mt-1">
                  {dbms.title}
                </h5>
                <p className="text-xs font-sans text-ink-muted mt-2 line-clamp-3">
                  {dbms.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-paper-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-ink-muted">
                  SQLite · SQL · Python
                </span>
                <button
                  onClick={() => onSelectProject(dbms)}
                  className="text-xs font-mono text-terracotta hover:underline inline-flex items-center space-x-1"
                >
                  <span>Case Study</span>
                  <FiArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Contact Sorter */}
            <div className="bg-paper-card border border-paper-border rounded-xl p-5 shadow-editorial flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-ink-muted">
                  Cross-Platform Native
                </span>
                <h5 className="font-serif font-bold text-base text-ink mt-1">
                  {contactSorter.title}
                </h5>
                <p className="text-xs font-sans text-ink-muted mt-2 line-clamp-3">
                  {contactSorter.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-paper-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-ink-muted">
                  Flutter · Native APIs · SQLite
                </span>
                <button
                  onClick={() => onSelectProject(contactSorter)}
                  className="text-xs font-mono text-terracotta hover:underline inline-flex items-center space-x-1"
                >
                  <span>Case Study</span>
                  <FiArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
