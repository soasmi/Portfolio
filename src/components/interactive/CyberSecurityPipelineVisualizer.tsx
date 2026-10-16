'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiTerminal, FiCheckCircle, FiAlertTriangle, FiCpu, FiBox } from 'react-icons/fi';

export default function CyberSecurityPipelineVisualizer() {
  const [activeStage, setActiveStage] = useState(2);

  const stages = [
    {
      id: 0,
      name: 'Inbound Request',
      tech: 'FastAPI REST Gateway',
      detail: 'Asynchronous payload ingestion with strict Pydantic schema validation and client throttling.',
      metric: '< 4ms latency',
      icon: FiTerminal,
    },
    {
      id: 1,
      name: 'Feature Extraction',
      tech: 'Lexical, DNS & DOM Parser',
      detail: 'Parses Shannon entropy, Punycode, fast-flux DNS IP churn, and DOM obfuscation vectors.',
      metric: '148 extracted features',
      icon: FiCpu,
    },
    {
      id: 2,
      name: 'Ensemble Classification',
      tech: 'Asymmetric Penalty Model',
      detail: 'Engineered with strict false-positive penalties to prevent analyst fatigue.',
      metric: '> 99% precision, -45% false positives',
      icon: FiShield,
    },
    {
      id: 3,
      name: 'Docker Session Sandbox',
      tech: 'Disposable Chromium Container',
      detail: 'Headless browser execution with isolated network namespace and instant teardown upon analysis.',
      metric: 'Zero-residual disk state',
      icon: FiBox,
    },
  ];

  return (
    <div className="bg-paper-card border border-paper-border rounded-xl p-5 shadow-editorial">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-paper-border">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-pine animate-pulse" />
            <h4 className="font-serif font-bold text-sm text-ink">
              CyberPeace: Threat Detection & Ephemeral Sandbox Architecture
            </h4>
          </div>
          <p className="text-xs font-mono text-ink-muted mt-0.5">
            Precision-optimized classification pipeline with Docker session isolation
          </p>
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded bg-pine-soft border border-pine/20 text-pine font-medium">
          Verified Precision &gt; 99%
        </span>
      </div>

      {/* Stage Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 my-5">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          const isCompleted = activeStage > idx;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-lg border text-left transition-all relative ${
                isSelected
                  ? 'bg-paper-warm border-ink shadow-sm'
                  : 'bg-paper-light border-paper-border hover:border-ink-muted'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-ink-muted">
                  0{idx + 1}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? 'text-terracotta' : isCompleted ? 'text-pine' : 'text-ink-muted'
                  }`}
                />
              </div>
              <div className="font-serif font-semibold text-xs text-ink">
                {stage.name}
              </div>
              <div className="font-mono text-[10px] text-ink-muted mt-0.5 truncate">
                {stage.tech}
              </div>

              {isSelected && (
                <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-ink" />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Showcase of Selected Stage */}
      <div className="bg-paper-warm/80 border border-paper-border p-4 rounded-lg">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold text-terracotta">
                STAGE 0{activeStage + 1}:
              </span>
              <span className="font-serif font-bold text-sm text-ink">
                {stages[activeStage].name}
              </span>
              <span className="font-mono text-xs text-ink-muted">
                ({stages[activeStage].tech})
              </span>
            </div>
            <p className="text-xs font-sans text-ink-muted mt-1 leading-relaxed">
              {stages[activeStage].detail}
            </p>
          </div>

          <div className="text-right pl-4">
            <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider block">
              Verified Metric
            </span>
            <span className="font-mono text-xs font-bold text-pine">
              {stages[activeStage].metric}
            </span>
          </div>
        </div>
      </div>

      {/* Footer attribution */}
      <div className="mt-4 pt-3 border-t border-paper-border flex flex-wrap items-center justify-between text-[11px] font-mono text-ink-muted gap-2">
        <div>CyberPeace Internship (April – July 2025)</div>
        <div>~45% Reduction in False Positives | +40% Flutter Dev Velocity</div>
      </div>
    </div>
  );
}
