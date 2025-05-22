'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  techStack: string[];
  intro: string;
}

export function SkillCard({ name, techStack, intro }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{intro}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
} 