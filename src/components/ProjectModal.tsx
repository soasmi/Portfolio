'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCheckCircle, FiCpu, FiLayers, FiAlertCircle } from 'react-icons/fi';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-noir/75 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-paper border border-paper-border rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="flex items-start justify-between pb-5 border-b border-paper-border">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold">
                  {project.category} Case Study
                </span>
                <span className="text-paper-borderDark">·</span>
                <span className="font-mono text-xs text-ink-muted">
                  Status: {project.status}
                </span>
                {project.duration && (
                  <>
                    <span className="text-paper-borderDark">·</span>
                    <span className="font-mono text-xs text-ink-muted">
                      {project.duration}
                    </span>
                  </>
                )}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
                {project.title}
              </h3>
              <p className="text-sm font-sans text-ink-muted mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-paper-border hover:border-ink text-ink-muted hover:text-ink transition-colors"
              aria-label="Close dialog"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-6 space-y-6">
            {/* Summary */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-2 flex items-center space-x-1.5">
                <FiLayers className="w-3.5 h-3.5 text-terracotta" />
                <span>Executive Summary</span>
              </h4>
              <p className="text-sm font-sans text-ink-light leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-paper-warm/80 p-4 rounded-lg border border-paper-border">
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-1.5 flex items-center space-x-1.5">
                <FiAlertCircle className="w-3.5 h-3.5 text-amber" />
                <span>The Engineering Problem</span>
              </h4>
              <p className="text-sm font-sans text-ink-light leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Architecture Details */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-3 flex items-center space-x-1.5">
                <FiCpu className="w-3.5 h-3.5 text-pine" />
                <span>System Architecture & Implementation</span>
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start text-xs font-sans text-ink-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink mt-1.5 mr-2.5 shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Metrics */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-3 flex items-center space-x-1.5">
                <FiCheckCircle className="w-3.5 h-3.5 text-terracotta" />
                <span>Verified Deliverables &amp; Metrics</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.verifiedMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-paper-light border border-paper-border rounded text-xs font-mono text-ink flex items-center space-x-2"
                  >
                    <span className="text-terracotta font-bold">✓</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack Tags */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="tech-tag tech-tag-paper text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-5 border-t border-paper-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded bg-ink text-paper hover:bg-terracotta transition-colors text-xs font-mono"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded border border-paper-border hover:border-ink text-ink transition-colors text-xs font-mono"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Open Live Portal</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-ink-muted hover:text-ink px-3 py-1.5"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
