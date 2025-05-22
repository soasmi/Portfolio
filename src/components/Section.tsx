'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bgClass?: string;
}

export default function Section({ id, title, children, className = '', bgClass = '' }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id={id} className={`relative py-16 md:py-20 px-4 ${className} overflow-hidden`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0.7,
          filter: inView ? 'blur(0px)' : 'blur(6px)',
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={`absolute inset-0 -z-10 transition-all duration-700 ${bgClass}`}
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="section-title">{title}</h2>
          <div className="mt-8">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 