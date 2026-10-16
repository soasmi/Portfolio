'use client';

import React, { useState } from 'react';
import { FiFileText, FiScissors, FiCpu, FiDatabase, FiMonitor, FiArrowRight } from 'react-icons/fi';

export default function RagArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<'extract' | 'chunk' | 'embed' | 'vector' | 'client'>('embed');

  const nodes = [
    {
      id: 'extract',
      name: '1. Ingestion',
      subtitle: 'PyMuPDF & python-docx',
      icon: FiFileText,
      detail: 'Extracts raw text, table structures, and headings from arbitrary PDF and DOCX files without network requests.',
      output: 'Structural Document Trees',
    },
    {
      id: 'chunk',
      name: '2. Chunking',
      subtitle: 'Sliding-Window Chunker',
      icon: FiScissors,
      detail: 'Divides documents into context-aware chunks with deterministic overlap to preserve semantic boundaries across page breaks.',
      output: 'Isolated Text Chunks (tokens ~512)',
    },
    {
      id: 'embed',
      name: '3. Embeddings',
      subtitle: 'BAAI/bge-m3 Model',
      icon: FiCpu,
      detail: 'Local inference using SentenceTransformers converting text chunks into dense 1024-dimensional semantic embedding vectors.',
      output: 'Normalized Dense Float32 Vectors',
    },
    {
      id: 'vector',
      name: '4. FAISS CPU',
      subtitle: 'In-Memory Index & SQLite',
      icon: FiDatabase,
      detail: 'Performs sub-millisecond approximate nearest neighbor (ANN) vector retrieval. SQLite with SQLAlchemy/Alembic manages metadata.',
      output: 'Top-K Relevant Chunks + Confidence',
    },
    {
      id: 'client',
      name: '5. UI Desktop',
      subtitle: 'Flutter Desktop Client',
      icon: FiMonitor,
      detail: 'Communicates with local FastAPI via asynchronous HTTP. Renders structured analytical reports with highlighted citations.',
      output: 'Zero Cloud Data Leakage (100% Local)',
    },
  ];

  const current = nodes.find((n) => n.id === selectedNode)!;

  return (
    <div className="bg-paper-card border border-paper-border rounded-xl p-5 shadow-editorial">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-paper-border">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
            <h4 className="font-serif font-bold text-sm text-ink">
              Document Intelligence: Local-First Offline RAG Architecture
            </h4>
          </div>
          <p className="text-xs font-mono text-ink-muted mt-0.5">
            Zero cloud transmission · Local embedding &amp; FAISS CPU indexing
          </p>
        </div>

        <a
          href="https://github.com/soasmi/Document-Intelligence-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono px-2.5 py-1 rounded border border-paper-border hover:border-ink text-ink transition-colors"
        >
          View GitHub Repository ↗
        </a>
      </div>

      {/* Pipeline Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-5">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isSelected = selectedNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id as any)}
              className={`p-3 rounded-lg border text-left transition-all relative ${
                isSelected
                  ? 'bg-paper-warm border-cobalt shadow-sm ring-1 ring-cobalt/20'
                  : 'bg-paper-light border-paper-border hover:border-ink-muted'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cobalt' : 'text-ink-muted'}`} />
                <span className="text-[9px] font-mono text-ink-muted">0{i + 1}</span>
              </div>
              <div className="font-serif font-bold text-xs text-ink">{node.name}</div>
              <div className="text-[10px] font-mono text-ink-muted truncate mt-0.5">
                {node.subtitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Detail Inspector */}
      <div className="bg-paper-warm/80 border border-paper-border p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold text-cobalt">
                STAGE DETAILS:
              </span>
              <span className="font-serif font-bold text-sm text-ink">{current.name}</span>
              <span className="font-mono text-xs text-ink-muted">({current.subtitle})</span>
            </div>
            <p className="text-xs font-sans text-ink-muted mt-1 leading-relaxed">
              {current.detail}
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider block">
              Data Output / State
            </span>
            <span className="font-mono text-xs font-bold text-ink">
              {current.output}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-paper-border flex flex-wrap items-center justify-between text-[11px] font-mono text-ink-muted gap-2">
        <div>Python 3.12 · FastAPI · Flutter Desktop · FAISS CPU · BAAI/bge-m3 · SQLite</div>
        <div className="text-cobalt font-medium">Status: Completed &amp; Fully Tested</div>
      </div>
    </div>
  );
}
