'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiShield, FiCheckCircle, FiCpu, FiRadio } from 'react-icons/fi';
import GeomagneticSensorSimulator from '../interactive/GeomagneticSensorSimulator';
import { TIMELINE } from '@/data/portfolioData';

export default function ChapterTwoUncertainty() {
  const drdoSspl = TIMELINE.find((t) => t.id === 'drdo-sspl')!;

  return (
    <section id="chapter-2" className="py-24 bg-noir text-noir-text border-b border-noir-border noir-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-terracotta uppercase tracking-widest font-semibold mb-2">
            <span>Chapter 02</span>
            <span className="text-noir-border">/</span>
            <span>08</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-noir-text tracking-tight">
            The Uncertainty Lab
          </h2>
          <p className="font-serif text-lg sm:text-xl text-noir-muted italic mt-2">
            Sensor-signal challenges, noisy geomagnetic flux, and GNSS-denied navigation.
          </p>
          <p className="font-sans text-sm sm:text-base text-noir-muted mt-4 leading-relaxed">
            Real-world sensor measurements do not arrive as tidy clean numbers in a CSV. They are noisy, drifted, and corrupted by environmental interference. 
            During my research at the Solid State Physics Laboratory (SSPL), DRDO, I investigated how machine learning pipelines and quantum-magnetometer sensing principles can detect underwater anomalies when satellite GNSS signals cannot penetrate.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Research Dossier Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-noir-card border border-noir-border rounded-xl p-6 shadow-noir-card relative overflow-hidden">
              <div className="flex items-start justify-between pb-4 border-b border-noir-border">
                <div>
                  <span className="font-mono text-xs text-terracotta uppercase font-bold tracking-wider">
                    DRDO RESEARCH DOSSIER · SSPL
                  </span>
                  <h3 className="font-serif text-xl font-bold text-noir-text mt-1">
                    Solid State Physics Laboratory
                  </h3>
                  <div className="text-xs font-mono text-noir-muted mt-0.5">
                    {drdoSspl.role} · {drdoSspl.period}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-noir-elevated border border-noir-border text-emerald-400 font-mono text-xs font-bold">
                  ~80% Sim. Gain
                </span>
              </div>

              <div className="my-4 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-noir-muted block">
                  Core Scientific Focus
                </span>
                <p className="text-xs font-sans text-noir-text leading-relaxed">
                  Geomagnetic anomaly detection using quantum-magnetometer sensor feeds under GNSS-denied underwater conditions.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-noir-border">
                <span className="text-[10px] font-mono uppercase tracking-wider text-noir-muted block">
                  Verified Research Contributions
                </span>
                <ul className="space-y-2 text-xs font-sans text-noir-muted">
                  {drdoSspl.keyContributions.map((kc, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-2 mt-0.5 shrink-0" />
                      <span className="text-noir-text">{kc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-noir-border flex flex-wrap gap-1.5">
                {drdoSspl.verifiedTags.map((tag, idx) => (
                  <span key={idx} className="tech-tag tech-tag-noir text-[11px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Scientific Rigor Note */}
            <div className="p-4 rounded-xl bg-noir-card/60 border border-noir-border text-xs font-sans text-noir-muted leading-relaxed">
              <span className="font-mono text-terracotta font-bold block mb-1 uppercase text-[10px]">
                Engineering Distinction: Simulation vs Real-World
              </span>
              The reported ~80% detection accuracy improvement was achieved across controlled simulated signal-to-noise benchmarks through structured wavelet preprocessing and baseline drift subtraction. Intellectual honesty requires noting this as a simulated benchmark outcome, distinct from operational deployment claims.
            </div>
          </div>

          {/* Right Column: Live Interactive Sensor Simulator */}
          <div className="lg:col-span-7 space-y-4">
            <GeomagneticSensorSimulator />

            <div className="p-4 rounded-xl bg-noir-card/80 border border-noir-border text-xs font-mono text-noir-muted">
              <div className="flex items-center space-x-2 text-noir-text font-bold mb-1">
                <FiRadio className="w-4 h-4 text-terracotta" />
                <span>Signal Processing Pipeline Overview</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 pt-2 border-t border-noir-border text-[11px]">
                <div>
                  <span className="text-noir-text block font-bold">1. Flux Preprocessing</span>
                  Wavelet baseline removal &amp; gradient calculation
                </div>
                <div>
                  <span className="text-noir-text block font-bold">2. CNN Modeling</span>
                  Spatial-temporal convolution on anomaly contours
                </div>
                <div>
                  <span className="text-noir-text block font-bold">3. Hybrid ML Filter</span>
                  Ensemble validation for edge-case discrimination
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
