'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCalendar, FiMapPin, FiCheckCircle, FiActivity, FiLayers } from 'react-icons/fi';
import { TIMELINE } from '@/data/portfolioData';

export default function ChapterFourDrdo() {
  const drdoSspl = TIMELINE.find((t) => t.id === 'drdo-sspl')!;
  const drdoSag = TIMELINE.find((t) => t.id === 'drdo-sag')!;

  return (
    <section id="chapter-4" className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 04</span>
            <span className="text-paper-borderDark">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Two Chapters at DRDO
          </h2>
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic mt-2">
            Distinct scientific engagements across defence research laboratories.
          </p>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Working within the Defence Research &amp; Development Organisation (DRDO) represents two separate, disciplined chapters. 
            The first was a three-month research engagement at the Solid State Physics Laboratory (SSPL) addressing geomagnetic sensor data. 
            The second is a paid six-month engineering tenure at the Scientific Analysis Group (SAG).
          </p>
        </div>

        {/* Dual Laboratory Editorial Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* DRDO SSPL Card */}
          <div className="bg-paper-card border border-paper-border rounded-xl p-6 sm:p-8 shadow-editorial relative flex flex-col justify-between">
            <div>
              {/* Badge & Timing */}
              <div className="flex items-center justify-between pb-4 border-b border-paper-border">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-terracotta/10 text-terracotta font-mono text-xs font-bold">
                  <FiShield className="w-3.5 h-3.5" />
                  <span>ENGAGEMENT I · 3 MONTHS</span>
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  January – March 2026
                </span>
              </div>

              {/* Title & Organization */}
              <div className="mt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block">
                  Defence Research &amp; Development Organisation
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-0.5">
                  Solid State Physics Laboratory (SSPL)
                </h3>
                <div className="text-sm font-sans font-semibold text-terracotta mt-1">
                  {drdoSspl.role}
                </div>
              </div>

              {/* Scope & Focus */}
              <p className="text-xs font-sans text-ink-muted mt-4 italic leading-relaxed">
                {drdoSspl.narrativeSignificance}
              </p>

              {/* Key Contributions */}
              <div className="mt-6 space-y-2.5">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                  Documented Responsibilities &amp; Outcomes
                </span>
                <ul className="space-y-2 text-xs font-sans text-ink-light">
                  {drdoSspl.keyContributions.map((kc, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheckCircle className="w-3.5 h-3.5 text-terracotta mr-2 mt-0.5 shrink-0" />
                      <span>{kc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-4 border-t border-paper-border flex flex-wrap gap-1.5">
              {drdoSspl.verifiedTags.map((tag, idx) => (
                <span key={idx} className="tech-tag tech-tag-paper text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* DRDO SAG Card */}
          <div className="bg-paper-card border border-paper-border rounded-xl p-6 sm:p-8 shadow-editorial relative flex flex-col justify-between">
            <div>
              {/* Badge & Timing */}
              <div className="flex items-center justify-between pb-4 border-b border-paper-border">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-pine-soft text-pine font-mono text-xs font-bold border border-pine/20">
                  <FiShield className="w-3.5 h-3.5" />
                  <span>ENGAGEMENT II · 6 MONTHS (PAID)</span>
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  Commencing 1 July 2026
                </span>
              </div>

              {/* Title & Organization */}
              <div className="mt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block">
                  Defence Research &amp; Development Organisation
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink mt-0.5">
                  Scientific Analysis Group (SAG)
                </h3>
                <div className="text-sm font-sans font-semibold text-pine mt-1">
                  {drdoSag.role}
                </div>
              </div>

              {/* Scope & Focus */}
              <p className="text-xs font-sans text-ink-muted mt-4 italic leading-relaxed">
                {drdoSag.narrativeSignificance}
              </p>

              {/* Key Contributions */}
              <div className="mt-6 space-y-2.5">
                <span className="font-mono text-[10px] text-ink-muted uppercase tracking-wider block">
                  Documented Responsibilities &amp; Focus
                </span>
                <ul className="space-y-2 text-xs font-sans text-ink-light">
                  {drdoSag.keyContributions.map((kc, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheckCircle className="w-3.5 h-3.5 text-pine mr-2 mt-0.5 shrink-0" />
                      <span>{kc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-4 border-t border-paper-border flex flex-wrap gap-1.5">
              {drdoSag.verifiedTags.map((tag, idx) => (
                <span key={idx} className="tech-tag tech-tag-paper text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
