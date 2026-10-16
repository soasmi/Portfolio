'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiCheckCircle, FiCpu, FiCode, FiTerminal, FiExternalLink } from 'react-icons/fi';
import { PUBLICATIONS_AND_HONORS, SKILL_CATEGORIES } from '@/data/portfolioData';

export default function ChapterSevenEvidence() {
  const [activeTab, setActiveTab] = useState<'all' | 'publications' | 'honors'>('all');

  const filteredItems = PUBLICATIONS_AND_HONORS.filter((item) => {
    if (activeTab === 'publications') return item.type === 'Conference Publication' || item.type === 'Book Chapter';
    if (activeTab === 'honors') return item.type !== 'Conference Publication' && item.type !== 'Book Chapter';
    return true;
  });

  return (
    <section id="chapter-7" className="py-24 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 07</span>
            <span className="text-paper-borderDark">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
            Evidence, Not Adjectives
          </h2>
          <p className="font-serif text-lg sm:text-xl text-ink-muted italic mt-2">
            Publications, peer-reviewed proceedings, national recognitions, and capability matrix.
          </p>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 leading-relaxed">
            Engineering credibility is built on reproducible results, academic publications, competitive hackathon outcomes, and demonstrated mastery. 
            Here is the documented record of my scholarly and technical milestones.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center space-x-2 mb-8 border-b border-paper-border pb-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'all'
                ? 'bg-ink text-paper font-semibold'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            All Evidence ({PUBLICATIONS_AND_HONORS.length})
          </button>
          <button
            onClick={() => setActiveTab('publications')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'publications'
                ? 'bg-ink text-paper font-semibold'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Publications &amp; Books
          </button>
          <button
            onClick={() => setActiveTab('honors')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
              activeTab === 'honors'
                ? 'bg-ink text-paper font-semibold'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Hackathons &amp; Fellowships
          </button>
        </div>

        {/* Publications & Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-paper-card border border-paper-border rounded-xl p-6 shadow-editorial flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-paper-border">
                  <span className="px-2 py-0.5 rounded bg-paper-warm border border-paper-border text-[11px] font-mono font-semibold text-terracotta">
                    {item.badgeText}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {item.year}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-mono uppercase text-ink-muted block">
                    {item.venueOrIssuer}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ink mt-1 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs font-sans text-ink-muted mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.verifiedDetails && (
                <div className="mt-6 pt-3 border-t border-paper-border text-[11px] font-mono text-pine flex items-center space-x-1.5">
                  <FiCheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{item.verifiedDetails}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Capabilities Matrix */}
        <div className="mt-16 pt-12 border-t border-paper-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">
                Taxonomy of Competence
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                Technical Capabilities Matrix
              </h3>
            </div>
            <p className="font-mono text-xs text-ink-muted">
              Organized by concrete engineering context, not arbitrary percentage bars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-paper-card border border-paper-border rounded-xl p-6 shadow-editorial"
              >
                <div className="flex items-center space-x-2 pb-3 border-b border-paper-border">
                  <FiCode className="w-4 h-4 text-terracotta" />
                  <h4 className="font-serif font-bold text-base text-ink">
                    {cat.category}
                  </h4>
                </div>
                <p className="text-xs font-sans text-ink-muted mt-2 italic">
                  {cat.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs font-mono">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-ink">{skill.name}</span>
                      </div>
                      <div className="text-[11px] font-sans text-ink-muted mt-0.5">
                        {skill.context}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Affectionate Computer Science Humour Easter Eggs */}
          <div className="mt-10 p-5 rounded-xl bg-paper-warm border border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
            <div className="flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-pulse" />
              <span>Orbit convergence state: <strong className="text-ink">ε &lt; 10⁻⁴ (mostly)</strong></span>
            </div>
            <div className="hidden md:block text-paper-borderDark">|</div>
            <div>
              <span>Curiosity heuristic: <strong className="text-ink">while(alive) &#123; explore(); learn(); build(); &#125;</strong></span>
            </div>
            <div className="hidden md:block text-paper-borderDark">|</div>
            <div>
              <span>Trained on mathematical curiosity, tested on real edge-cases</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
