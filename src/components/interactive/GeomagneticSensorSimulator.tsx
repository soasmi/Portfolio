'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiActivity, FiSliders, FiShield, FiCheckCircle } from 'react-icons/fi';

export default function GeomagneticSensorSimulator() {
  const [filterEnabled, setFilterEnabled] = useState(true);
  const [cnnClassifierEnabled, setCnnClassifierEnabled] = useState(true);
  const [noiseLevel, setNoiseLevel] = useState(45);
  const [anomalyDetected, setAnomalyDetected] = useState(true);
  const [simAccuracy, setSimAccuracy] = useState(82);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const render = () => {
      t += 0.05;
      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = '#222733';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center baseline
      ctx.strokeStyle = '#3E4656';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.stroke();

      // Draw Waveform
      ctx.beginPath();
      ctx.lineWidth = 2;

      const anomalyCenter = width * 0.58;
      const anomalyWidth = 60;

      for (let x = 0; x < width; x++) {
        // True physical anomaly signature (Gaussian dip in geomagnetic field)
        const distFromAnomaly = Math.abs(x - anomalyCenter);
        const anomalySignal =
          distFromAnomaly < anomalyWidth
            ? -38 * Math.exp(-Math.pow(distFromAnomaly / 20, 2))
            : 0;

        // Baseline earth magnetic flux oscillations
        const baseline = 10 * Math.sin(x * 0.02 + t * 0.8) + 4 * Math.sin(x * 0.06 - t * 0.4);

        // Environmental sensor noise
        const rawNoise = (Math.sin(x * 0.23 + t * 3.1) * Math.cos(x * 0.17 + t * 2.3) + (Math.random() - 0.5) * 1.5) * (noiseLevel * 0.5);

        let yVal = midY + anomalySignal;

        if (!filterEnabled) {
          // Unfiltered raw feed: noise dominates and drowns out anomaly
          yVal += baseline + rawNoise;
        } else {
          // Structured filtering: removes baseline drift and attenuates noise
          const residualNoise = rawNoise * 0.18;
          yVal += residualNoise;
        }

        if (x === 0) {
          ctx.moveTo(x, yVal);
        } else {
          ctx.lineTo(x, yVal);
        }
      }

      ctx.strokeStyle = filterEnabled ? '#C84B31' : '#8D95A5';
      ctx.stroke();

      // Draw Anomaly Detection Box if CNN is active and filter enabled
      if (filterEnabled && cnnClassifierEnabled) {
        const boxLeft = anomalyCenter - anomalyWidth * 0.7;
        const boxWidth = anomalyWidth * 1.4;

        ctx.strokeStyle = '#255038';
        ctx.fillStyle = 'rgba(37, 80, 56, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(boxLeft, midY - 45, boxWidth, 80);
        ctx.fillRect(boxLeft, midY - 45, boxWidth, 80);

        ctx.fillStyle = '#6EE7B7';
        ctx.font = '10px monospace';
        ctx.fillText('ANOMALY DETECTED (p=0.94)', boxLeft + 4, midY - 50);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [filterEnabled, cnnClassifierEnabled, noiseLevel]);

  // Recalculate simulated accuracy based on filters
  useEffect(() => {
    if (!filterEnabled) {
      setSimAccuracy(Math.max(42, 60 - Math.round(noiseLevel * 0.35)));
      setAnomalyDetected(false);
    } else if (cnnClassifierEnabled) {
      setSimAccuracy(Math.min(94, 76 + Math.round((100 - noiseLevel) * 0.12)));
      setAnomalyDetected(true);
    } else {
      setSimAccuracy(68);
      setAnomalyDetected(true);
    }
  }, [filterEnabled, cnnClassifierEnabled, noiseLevel]);

  return (
    <div className="bg-noir-card border border-noir-border rounded-xl p-5 text-noir-text shadow-noir-card">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-noir-border">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <h4 className="font-serif font-bold text-sm text-noir-text">
              DRDO SSPL: Geomagnetic Anomaly Waveform Pipeline
            </h4>
          </div>
          <p className="text-xs font-mono text-noir-muted mt-0.5">
            Quantum-magnetometer signal preprocessing & CNN anomaly discrimination
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-noir-elevated border border-noir-border text-emerald-400">
            Sim. Accuracy: ~{simAccuracy}%
          </span>
        </div>
      </div>

      {/* Waveform Canvas */}
      <div className="relative my-4 bg-noir rounded-lg overflow-hidden border border-noir-border">
        <canvas
          ref={canvasRef}
          width={560}
          height={160}
          className="w-full h-40 block"
        />

        {/* Legend Overlay */}
        <div className="absolute top-2 left-2 flex items-center space-x-3 text-[10px] font-mono bg-noir-card/90 px-2 py-1 rounded border border-noir-border text-noir-muted">
          <span className="flex items-center space-x-1">
            <span className={`w-2 h-2 rounded-full ${filterEnabled ? 'bg-terracotta' : 'bg-gray-400'}`} />
            <span>{filterEnabled ? 'Filtered Flux Vector B(t)' : 'Raw Noisy Magnetometer'}</span>
          </span>
          {filterEnabled && cnnClassifierEnabled && (
            <span className="text-emerald-400">CNN Bounding Window: Active</span>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
        <button
          onClick={() => setFilterEnabled(!filterEnabled)}
          className={`flex items-center justify-between px-3 py-2 rounded border transition-colors ${
            filterEnabled
              ? 'bg-noir-elevated border-terracotta text-terracotta font-semibold'
              : 'border-noir-border text-noir-muted hover:text-noir-text'
          }`}
        >
          <span>Preprocessing Filter</span>
          <span className="text-[10px]">{filterEnabled ? 'ENABLED' : 'OFF'}</span>
        </button>

        <button
          onClick={() => setCnnClassifierEnabled(!cnnClassifierEnabled)}
          className={`flex items-center justify-between px-3 py-2 rounded border transition-colors ${
            cnnClassifierEnabled
              ? 'bg-noir-elevated border-emerald-500 text-emerald-400 font-semibold'
              : 'border-noir-border text-noir-muted hover:text-noir-text'
          }`}
        >
          <span>CNN Anomaly Layer</span>
          <span className="text-[10px]">{cnnClassifierEnabled ? 'ACTIVE' : 'OFF'}</span>
        </button>

        <div className="flex items-center space-x-2 px-3 py-1.5 rounded bg-noir-elevated border border-noir-border">
          <span className="text-[10px] text-noir-muted">Noise σ:</span>
          <input
            type="range"
            min={10}
            max={90}
            value={noiseLevel}
            onChange={(e) => setNoiseLevel(Number(e.target.value))}
            className="w-full h-1 bg-noir-border rounded-lg appearance-none cursor-pointer accent-terracotta"
            aria-label="Sensor noise amplitude"
          />
          <span className="text-[10px] text-noir-muted w-6 text-right">{noiseLevel}%</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-noir-border flex flex-wrap items-center justify-between text-[11px] font-mono text-noir-muted gap-2">
        <div>
          <span>GNSS-Denied Underwater Target Detection</span>
          <span className="mx-2 text-noir-border">|</span>
          <span className="text-emerald-400">
            {anomalyDetected ? '✓ High SNR Peak Confirmed' : '⚠ Anomaly Drowned in Ambient Noise'}
          </span>
        </div>
        <div>SSPL Laboratory, DRDO (Jan–Mar 2026)</div>
      </div>
    </div>
  );
}
