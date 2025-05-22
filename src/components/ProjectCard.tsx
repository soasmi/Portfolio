'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string | null;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="card group relative overflow-hidden cursor-pointer select-none"
    >
      <h3 className="text-xl font-bold mb-2 text-accent-blue tracking-tight">
        {title}
      </h3>
      <p className="text-accent-white/90 mb-4 font-light leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <span
            key={tech}
            className={`badge${i % 3 === 0 ? '' : i % 3 === 1 ? ' badge-purple' : ' badge-green'}`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-accent-white"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-accent-white"
            aria-label="Live Demo"
          >
            <FiExternalLink size={22} />
          </a>
        )}
      </div>
    </motion.div>
  );
} 