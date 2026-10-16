'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiRotateCcw, FiActivity, FiLayers } from 'react-icons/fi';

interface Node {
  id: number;
  label: string;
  x: number;
  y: number;
  classicalVisited: boolean;
  quantumAmplitude: number; // 0 to 1
}

export default function QuantumWalkVisualizer() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [walkMode, setWalkMode] = useState<'quantum' | 'classical'>('quantum');

  const baseNodes: Node[] = [
    { id: 0, label: 'Origin (v0)', x: 60, y: 110, classicalVisited: true, quantumAmplitude: 1.0 },
    { id: 1, label: 'Node A (v1)', x: 170, y: 50, classicalVisited: false, quantumAmplitude: 0.1 },
    { id: 2, label: 'Node B (v2)', x: 180, y: 170, classicalVisited: false, quantumAmplitude: 0.1 },
    { id: 3, label: 'Node C (v3)', x: 290, y: 40, classicalVisited: false, quantumAmplitude: 0.05 },
    { id: 4, label: 'Node D (v4)', x: 300, y: 140, classicalVisited: false, quantumAmplitude: 0.05 },
    { id: 5, label: 'Target (v5)', x: 410, y: 95, classicalVisited: false, quantumAmplitude: 0.02 },
  ];

  const edges = [
    [0, 1], [0, 2],
    [1, 3], [1, 4],
    [2, 4],
    [3, 5], [4, 5],
  ];

  const [nodes, setNodes] = useState<Node[]>(baseNodes);

  // Advance step
  const advance = () => {
    setStep((prev) => {
      const nextStep = (prev + 1) % 5;
      updateGraphForStep(nextStep, walkMode);
      return nextStep;
    });
  };

  const updateGraphForStep = (currentStep: number, mode: 'quantum' | 'classical') => {
    setNodes((prev) =>
      prev.map((n) => {
        if (mode === 'classical') {
          // Sequential single-path exploration
          const visited =
            currentStep === 0 ? n.id === 0 :
            currentStep === 1 ? n.id <= 1 :
            currentStep === 2 ? n.id <= 3 :
            n.id <= 5;
          return { ...n, classicalVisited: visited, quantumAmplitude: visited ? 1 : 0 };
        } else {
          // Quantum superposition: amplitude spreads across multiple pathways concurrently
          let amp = 0.05;
          if (currentStep === 0) amp = n.id === 0 ? 1.0 : 0.08;
          else if (currentStep === 1) amp = n.id === 0 ? 0.3 : n.id === 1 || n.id === 2 ? 0.75 : 0.12;
          else if (currentStep === 2) amp = n.id === 3 || n.id === 4 ? 0.85 : n.id === 1 || n.id === 2 ? 0.35 : 0.1;
          else if (currentStep === 3) amp = n.id === 5 ? 0.95 : n.id === 3 || n.id === 4 ? 0.4 : 0.1;
          else amp = n.id === 5 ? 1.0 : 0.15;
          return { ...n, quantumAmplitude: amp };
        }
      })
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        advance();
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, walkMode]);

  const handleReset = () => {
    setIsPlaying(false);
    setStep(0);
    updateGraphForStep(0, walkMode);
  };

  const handleModeSwitch = (mode: 'quantum' | 'classical') => {
    setWalkMode(mode);
    setStep(0);
    updateGraphForStep(0, mode);
  };

  return (
    <div className="bg-paper-card border border-paper-border rounded-xl p-5 shadow-editorial">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-paper-border">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <h4 className="font-serif font-bold text-sm text-ink">
              Quantum Walk vs Classical Traversal
            </h4>
          </div>
          <p className="text-xs font-mono text-ink-muted mt-0.5">
            Unitary evolution on constrained vehicle-routing graph topology
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center space-x-1.5 p-1 bg-paper-warm rounded border border-paper-border text-xs font-mono">
          <button
            onClick={() => handleModeSwitch('quantum')}
            className={`px-2.5 py-1 rounded transition-colors ${
              walkMode === 'quantum'
                ? 'bg-ink text-paper font-semibold shadow-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Quantum Superposition
          </button>
          <button
            onClick={() => handleModeSwitch('classical')}
            className={`px-2.5 py-1 rounded transition-colors ${
              walkMode === 'classical'
                ? 'bg-ink text-paper font-semibold shadow-sm'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Classical Greedy Walk
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative my-4 bg-paper-warm/50 rounded-lg p-2 overflow-hidden border border-paper-border/60">
        <svg viewBox="0 0 480 200" className="w-full h-44 select-none">
          {/* Edges */}
          {edges.map(([u, v], i) => {
            const nodeU = nodes.find((n) => n.id === u)!;
            const nodeV = nodes.find((n) => n.id === v)!;
            const isPathActive =
              walkMode === 'quantum'
                ? nodeU.quantumAmplitude > 0.2 && nodeV.quantumAmplitude > 0.2
                : nodeU.classicalVisited && nodeV.classicalVisited;

            return (
              <line
                key={`edge-${i}`}
                x1={nodeU.x}
                y1={nodeU.y}
                x2={nodeV.x}
                y2={nodeV.y}
                stroke={isPathActive ? '#C84B31' : '#D5CDC2'}
                strokeWidth={isPathActive ? (walkMode === 'quantum' ? 2.5 : 2) : 1}
                strokeDasharray={walkMode === 'quantum' && isPathActive ? '4 2' : 'none'}
                className="transition-colors duration-300"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => {
            const radius = walkMode === 'quantum' ? 12 + n.quantumAmplitude * 8 : 14;
            const fillColor =
              walkMode === 'quantum'
                ? `rgba(200, 75, 49, ${0.15 + n.quantumAmplitude * 0.75})`
                : n.classicalVisited
                ? '#111317'
                : '#FAF7F2';
            const strokeColor =
              walkMode === 'quantum' ? '#C84B31' : n.classicalVisited ? '#111317' : '#9DA1AA';

            return (
              <g key={`node-${n.id}`} className="transition-all duration-300">
                {/* Quantum probability aura */}
                {walkMode === 'quantum' && n.quantumAmplitude > 0.3 && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={radius + 8}
                    fill="none"
                    stroke="#C84B31"
                    strokeWidth="1"
                    opacity={n.quantumAmplitude * 0.4}
                    strokeDasharray="2 2"
                  />
                )}

                <circle
                  cx={n.x}
                  cy={n.y}
                  r={radius}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="monospace"
                  fill={
                    walkMode === 'classical' && n.classicalVisited
                      ? '#FFFFFF'
                      : walkMode === 'quantum' && n.quantumAmplitude > 0.5
                      ? '#FFFFFF'
                      : '#111317'
                  }
                  fontWeight="bold"
                >
                  v{n.id}
                </text>

                {/* Probability readout */}
                <text
                  x={n.x}
                  y={n.y + 24}
                  textAnchor="middle"
                  fontSize="8"
                  fontFamily="monospace"
                  fill="#5A606D"
                >
                  {walkMode === 'quantum'
                    ? `|ψ|²=${n.quantumAmplitude.toFixed(2)}`
                    : n.classicalVisited
                    ? 'VISITED'
                    : 'IDLE'}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Live Step Badge */}
        <div className="absolute bottom-2 right-2 text-[10px] font-mono bg-paper/90 px-2 py-0.5 rounded border border-paper-border text-ink-muted">
          t = {step}τ | state: {walkMode === 'quantum' ? 'Superposed Wave' : 'Single Path'}
        </div>
      </div>

      {/* Controls & Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-ink text-paper hover:bg-terracotta transition-colors"
          >
            <FiPlay className={`w-3.5 h-3.5 ${isPlaying ? 'text-amber' : ''}`} />
            <span>{isPlaying ? 'Pause' : 'Simulate Step'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded border border-paper-border hover:border-ink text-ink transition-colors"
            title="Reset Graph"
          >
            <FiRotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="text-[11px] text-ink-muted flex items-center space-x-4">
          <span>
            {walkMode === 'quantum' ? (
              <span className="text-terracotta font-semibold">
                Superposition enables concurrent path exploration
              </span>
            ) : (
              <span className="text-ink">
                Classical search evaluated sequentially step-by-step
              </span>
            )}
          </span>
          <span className="hidden sm:inline text-paper-borderDark">|</span>
          <span className="hidden sm:inline">EGREEN Quanta Heuristic</span>
        </div>
      </div>
    </div>
  );
}
