'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCompass, FiCpu, FiCheck, FiArrowRight } from 'react-icons/fi';
import QuantumWalkVisualizer from '../interactive/QuantumWalkVisualizer';
import { TIMELINE } from '@/data/portfolioData';

export default function ChapterOneLearning() {
  const vipsEntry = TIMELINE.find((t) => t.id === 'undergrad-vips')!;
  const foruppoEntry = TIMELINE.find((t) => t.id === 'foruppo-pm')!;
  const egreenEntry = TIMELINE.find((t) => t.id === 'egreen-quanta')!;

  return (
    <section id="chapter-1" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 01</span>
            <span className="text-paper-borderDark">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Learning to Think
          </h2>
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic mt-2">
            The progression from product scoping to quantum-inspired algorithmic exploration.
          </p>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Good software engineering rarely starts with code. It begins with framing the problem correctly. 
            My trajectory took root in high-rigor computer science foundations at VIPS, expanded into Agile product scoping at Foruppo, and evolved into quantum-inspired routing heuristics at EGREEN Quanta.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline progression cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Academic Base Card */}
            <div className="bg-paper-card border border-paper-border rounded-xl p-6 shadow-editorial relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-ink" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-ink-muted uppercase">
                    {vipsEntry.period} · {vipsEntry.location}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mt-0.5">
                    {vipsEntry.role}
                  </h3>
                  <div className="text-xs font-sans text-ink-muted font-medium mt-0.5">
                    {vipsEntry.organization}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-terracotta/10 text-terracotta font-mono text-xs font-bold">
                  CGPA: 9.77
                </span>
              </div>

              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                {vipsEntry.narrativeSignificance}
              </p>

              <ul className="mt-4 space-y-2 text-xs font-sans text-ink-light">
                {vipsEntry.keyContributions.map((c, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-pine mr-2 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {vipsEntry.verifiedTags.map((tag, i) => (
                  <span key={i} className="tech-tag tech-tag-paper text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Foruppo Product Management */}
            <div className="bg-paper-card border border-paper-border rounded-xl p-6 shadow-editorial relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-ink-muted uppercase">
                    {foruppoEntry.period}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mt-0.5">
                    {foruppoEntry.role}
                  </h3>
                  <div className="text-xs font-sans text-ink-muted font-medium mt-0.5">
                    {foruppoEntry.organization}
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-soft text-amber font-mono text-[11px] font-semibold border border-amber/20">
                  Product Scoping
                </span>
              </div>

              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                {foruppoEntry.narrativeSignificance}
              </p>

              <ul className="mt-4 space-y-2 text-xs font-sans text-ink-light">
                {foruppoEntry.keyContributions.map((c, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-amber mr-2 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {foruppoEntry.verifiedTags.map((tag, i) => (
                  <span key={i} className="tech-tag tech-tag-paper text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* EGREEN Quanta Research */}
            <div className="bg-paper-card border border-paper-border rounded-xl p-6 shadow-editorial relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-terracotta" />
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-ink-muted uppercase">
                    {egreenEntry.period}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mt-0.5">
                    {egreenEntry.role}
                  </h3>
                  <div className="text-xs font-sans text-ink-muted font-medium mt-0.5">
                    {egreenEntry.organization} · Guided by Dr. Kumar Gautam
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-terracotta/10 text-terracotta font-mono text-[11px] font-semibold">
                  Quantum Heuristics
                </span>
              </div>

              <p className="text-xs font-sans text-ink-muted mt-3 italic">
                {egreenEntry.narrativeSignificance}
              </p>

              <ul className="mt-4 space-y-2 text-xs font-sans text-ink-light">
                {egreenEntry.keyContributions.map((c, i) => (
                  <li key={i} className="flex items-start">
                    <FiCheck className="w-3.5 h-3.5 text-terracotta mr-2 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {egreenEntry.verifiedTags.map((tag, i) => (
                  <span key={i} className="tech-tag tech-tag-paper text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quantum Graph Visualizer */}
          <div className="lg:col-span-6 space-y-4">
            <QuantumWalkVisualizer />

            {/* Narrative Annotation Box */}
            <div className="p-4 rounded-xl bg-paper-warm border border-paper-border text-xs font-sans text-ink-muted leading-relaxed">
              <span className="font-bold text-ink block mb-1 font-mono uppercase text-[10px]">
                Research Context: Quantum Random Walks
              </span>
              In classical routing, state exploration follows deterministic or stochastic single trajectories. 
              By modeling discrete-time quantum walks with unitary coin operators, the probability distribution spreads quadratically faster across constrained vehicle graph topologies, avoiding greedy local minima traps.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
