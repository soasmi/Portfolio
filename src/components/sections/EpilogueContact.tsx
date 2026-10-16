'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFileText, FiCopy, FiCheck, FiArrowUpRight, FiPhone, FiMapPin } from 'react-icons/fi';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function EpilogueContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="epilogue" className="py-24 bg-noir text-noir-text border-t border-noir-border noir-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Epilogue · Chapter 08</span>
            <span className="text-noir-border">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-noir-text tracking-tight">
            Still Becoming.
          </h2>
          <p className="font-serif text-lg sm:text-2xl text-noir-muted italic mt-3">
            “The most interesting problems are those where the mathematics is uncertain, the constraints are tight, and the impact touches real people.”
          </p>
          <p className="font-sans text-sm sm:text-base text-noir-muted mt-5 leading-relaxed">
            I am always eager to collaborate on challenging problems in research machine learning, sensor signal processing, distributed systems, and local-first software. 
            Whether you represent a research laboratory, an engineering team, or an ambitious project, let’s begin a conversation.
          </p>
        </div>

        {/* 3-Column Editorial Contact & Verification Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Direct Inquiries */}
          <div className="bg-noir-card border border-noir-border rounded-xl p-6 sm:p-7 shadow-noir-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-noir-border">
                <span className="text-xs font-mono text-terracotta uppercase tracking-wider font-semibold">
                  Direct Inquiries
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="mt-5">
                <span className="text-[11px] font-mono text-noir-muted uppercase block">
                  Primary Email
                </span>
                <div className="font-serif text-xl sm:text-2xl font-bold text-noir-text mt-1 break-all">
                  {PERSONAL_INFO.email}
                </div>
                <p className="text-xs font-sans text-noir-muted mt-2 leading-relaxed">
                  Direct reach for research collaborations, engineering roles, and technical discussions.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2.5 pt-4 border-t border-noir-border">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20via%20Portfolio`}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded bg-terracotta text-white hover:bg-terracotta-hover transition-colors text-xs font-mono font-medium shadow-sm"
                data-cursor-label="Mail"
              >
                <FiMail className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded bg-noir-elevated border border-noir-border hover:border-noir-text text-noir-text transition-colors text-xs font-mono"
                data-cursor-label="Copy"
              >
                {copiedEmail ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Professional Networks & Phone */}
          <div className="bg-noir-card border border-noir-border rounded-xl p-6 sm:p-7 shadow-noir-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-noir-border">
                <span className="text-xs font-mono text-noir-muted uppercase tracking-wider font-semibold">
                  Networks &amp; Dial
                </span>
                <span className="text-xs font-mono text-noir-muted">Verified</span>
              </div>

              <div className="mt-5 space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-noir-elevated border border-noir-border hover:border-blue-400 transition-colors group"
                  data-cursor-label="LinkedIn"
                >
                  <div className="flex items-center space-x-3">
                    <FiLinkedin className="w-4 h-4 text-blue-400" />
                    <div>
                      <span className="text-xs font-mono font-bold text-noir-text block">
                        LinkedIn Profile
                      </span>
                      <span className="text-[10px] font-mono text-noir-muted">
                        soasmi-kohli-711476291
                      </span>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-4 h-4 text-noir-muted group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-noir-elevated border border-noir-border hover:border-noir-text transition-colors group"
                  data-cursor-label="GitHub"
                >
                  <div className="flex items-center space-x-3">
                    <FiGithub className="w-4 h-4 text-noir-text" />
                    <div>
                      <span className="text-xs font-mono font-bold text-noir-text block">
                        GitHub Repositories
                      </span>
                      <span className="text-[10px] font-mono text-noir-muted">
                        github.com/soasmi
                      </span>
                    </div>
                  </div>
                  <FiArrowUpRight className="w-4 h-4 text-noir-muted group-hover:text-noir-text transition-transform group-hover:translate-x-0.5" />
                </a>

                <div className="flex items-center justify-between p-3 rounded-lg bg-noir-elevated border border-noir-border">
                  <div className="flex items-center space-x-3">
                    <FiPhone className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-xs font-mono font-bold text-noir-text block">
                        Direct Phone / Signal
                      </span>
                      <span className="text-[10px] font-mono text-noir-muted">
                        {PERSONAL_INFO.phone || '+91 7678668484'}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-noir-border text-[11px] font-mono text-noir-muted flex items-center justify-between">
              <span>Timezone: IST (UTC+5:30)</span>
              <span>Available for Roles</span>
            </div>
          </div>

          {/* Card 3: Curriculum Vitae (Updated Resume) */}
          <div className="bg-noir-card border border-noir-border rounded-xl p-6 sm:p-7 shadow-noir-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-noir-border">
                <span className="text-xs font-mono text-amber uppercase tracking-wider font-semibold">
                  Official Dossier
                </span>
                <span className="text-xs font-mono text-emerald-400">PDF Updated</span>
              </div>

              <div className="mt-5">
                <span className="text-[11px] font-mono text-noir-muted uppercase block">
                  Curriculum Vitae
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-noir-text mt-1">
                  Soasmi Kohli — Resume
                </h3>
                <p className="text-xs font-sans text-noir-muted mt-2 leading-relaxed">
                  Comprehensive document covering academic standing (9.77 CGPA), DRDO research tenures, CyberPeace engineering, publications, and verified codebases.
                </p>
              </div>

              <div className="mt-5 p-3 rounded-lg bg-noir-elevated border border-noir-border text-xs font-mono text-noir-muted space-y-1">
                <div className="flex justify-between">
                  <span>File:</span>
                  <span className="text-noir-text font-bold">Resume.pdf (237 KB)</span>
                </div>
                <div className="flex justify-between">
                  <span>Target:</span>
                  <span className="text-noir-text">Software / AI Systems</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-noir-border">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded bg-ink text-paper hover:bg-terracotta border border-noir-border hover:border-terracotta transition-colors text-xs font-mono font-medium shadow-sm group"
                data-cursor-label="Download"
              >
                <FiFileText className="w-3.5 h-3.5 text-amber group-hover:text-white" />
                <span>View / Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Geographic Base & Academic Credentials Strip */}
        <div className="mt-12 p-4 rounded-xl bg-noir-card border border-noir-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-noir-muted gap-4">
          <div className="flex items-center space-x-2">
            <FiMapPin className="w-4 h-4 text-terracotta" />
            <span className="text-noir-text font-bold">New Delhi, India</span>
            <span className="text-noir-border">|</span>
            <span>Coordinates: {PERSONAL_INFO.coordinates}</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>B.Tech CSE (AI &amp; ML) · VIPS (GGSIPU)</span>
            <span className="text-noir-border">|</span>
            <span className="text-terracotta font-bold">9.77 CGPA</span>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="mt-16 pt-8 border-t border-noir-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-noir-muted gap-4">
          <div>
            © {new Date().getFullYear()} Soasmi Kohli. Designed &amp; engineered with original architecture.
          </div>
          <div className="flex items-center space-x-4">
            <span>Next.js 14 · React · Tailwind · Framer Motion</span>
            <span className="text-noir-border">|</span>
            <span className="text-emerald-400">All Systems Nominal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
