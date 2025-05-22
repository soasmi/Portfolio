'use client';

import { motion } from 'framer-motion';

interface WorkExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export default function WorkExperienceCard({
  company,
  position,
  duration,
  description,
  technologies,
}: WorkExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-accent-white">{company}</h3>
          <p className="text-accent-blue font-medium">{position}</p>
          <p className="text-accent-white/60 text-sm">{duration}</p>
        </div>

        <ul className="space-y-2 mb-4 flex-grow">
          {description.map((item, index) => (
            <li key={index} className="text-accent-white/80 flex items-start">
              <span className="text-accent-blue mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium text-accent-green bg-accent-green/10 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 