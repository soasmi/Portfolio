'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Hero() {
  // Animated gradient background for the heading
  const gradientText =
    'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* No background or overlay here, just content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 px-8 py-12 rounded-3xl backdrop-blur-glass bg-glass border border-accent-blue/20 shadow-card max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Animated gradient heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className={`text-4xl md:text-6xl font-extrabold mb-6 ${gradientText}`}
        >
          Hi, I'm <span className="whitespace-nowrap">Soasmi Kohli</span>
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          className="text-xl md:text-2xl font-light text-accent-white/90 mb-8"
        >
          <TypeAnimation
            sequence={[
              'AI & ML Engineering Student',
              1200,
              'Full Stack Developer',
              1200,
              'Quantum Computing Enthusiast',
              1200,
              'Hackathon Winner',
              1200,
              'Cloud & DevOps Explorer',
              1200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Social icons with neon hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center gap-6 mb-8"
        >
          <a
            href="https://github.com/soasmi"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-accent-blue"
            aria-label="GitHub"
          >
            <FiGithub size={32} />
          </a>
          <a
            href="http://www.linkedin.com/in/soasmi-kohli-711476291"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-accent-purple"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={32} />
          </a>
          <a
            href="https://x.com/SoasmiKohli"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-hover text-accent-green"
            aria-label="X (Twitter)"
          >
            <FiTwitter size={32} />
          </a>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          className="flex gap-4 justify-center"
        >
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 