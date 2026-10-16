'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiBox, FiTerminal, FiCheckCircle, FiCpu, FiLock } from 'react-icons/fi';
import CyberSecurityPipelineVisualizer from '../interactive/CyberSecurityPipelineVisualizer';
import { TIMELINE } from '@/data/portfolioData';

export default function ChapterThreeCyber() {
  const cyberPeace = TIMELINE.find((t) => t.id === 'cyberpeace')!;

  return (
    <section id="chapter-3" className="py-20 border-b border-paper-border bg-paper-warm/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 03</span>
            <span className="text-paper-borderDark">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Engineering Intelligence
          </h2>
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic mt-2">
            Applied cybersecurity, high-precision detection pipelines, and containerized sandboxing.
          </p>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            In cybersecurity, accuracy alone is a deceptive metric: a model with 99% accuracy can still trigger hundreds of false alarms if the underlying class distribution is imbalanced. 
            At CyberPeace, my engineering focused on maximizing precision, penalizing false positives, and providing isolated execution environments for suspect domains.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Pipeline Inspector */}
          <div className="lg:col-span-7 space-y-4">
            <CyberSecurityPipelineVisualizer />

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-paper-card border border-paper-border rounded-xl shadow-editorial">
                <div className="flex items-center space-x-2 text-pine font-mono text-xs font-bold mb-1">
                  <FiLock className="w-4 h-4" />
                  <span>Precision &gt; 99% Target</span>
                </div>
                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  Asymmetric loss weights tuned to prioritize operational trust and reduce analyst fatigue by ~45%.
                </p>
              </div>

              <div className="p-4 bg-paper-card border border-paper-border rounded-xl shadow-editorial">
                <div className="flex items-center space-x-2 text-cobalt font-mono text-xs font-bold mb-1">
                  <FiBox className="w-4 h-4" />
                  <span>Docker Session Isolation</span>
                </div>
                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  Strict containerized network namespaces ensuring zero residual infection risk during dynamic URL inspection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-paper-card border border-paper-border rounded-xl p-6 shadow-editorial relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-pine" />
              
              <div className="flex items-start justify-between pb-4 border-b border-paper-border">
                <div>
                  <span className="font-mono text-xs text-ink-muted uppercase">
                    {cyberPeace.period} · {cyberPeace.location}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mt-0.5">
                    {cyberPeace.role}
                  </h3>
                  <div className="text-xs font-sans text-ink-muted font-medium mt-0.5">
                    {cyberPeace.organization} · {cyberPeace.departmentOrLab}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-pine-soft text-pine font-mono text-xs font-bold">
                  Verified
                </span>
              </div>

              <div className="my-4">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block mb-1">
                  Key Deliverables Reported
                </span>
                <ul className="space-y-2 text-xs font-sans text-ink-light">
                  {cyberPeace.keyContributions.map((kc, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheckCircle className="w-3.5 h-3.5 text-pine mr-2 mt-0.5 shrink-0" />
                      <span>{kc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-paper-border flex flex-wrap gap-1.5">
                {cyberPeace.verifiedTags.map((tag, idx) => (
                  <span key={idx} className="tech-tag tech-tag-paper text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Cross-Platform Architecture Note */}
            <div className="p-4 rounded-xl bg-paper-card border border-paper-border text-xs font-sans text-ink-muted leading-relaxed">
              <span className="font-mono text-ink font-bold block mb-1 uppercase text-[10px]">
                Cross-Platform Flutter Architecture (+40% Velocity)
              </span>
              Decoupling UI layers from REST backend services and structuring reusable components enabled rapid multi-platform targeting across web and mobile without duplicating business logic.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
