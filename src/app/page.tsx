"use client";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import WorkExperienceCard from '@/components/WorkExperienceCard';

const projects = [
  {
    title: 'AshaAI – Hackathon Winner Project',
    description: 'Developed an AI-powered assistive technology using NLP and gesture recognition to help individuals with visual, speech, and hearing impairments. Integrated real-time API calls and voice recognition models to enhance accessibility.',
    technologies: ['Python', 'NLP', 'Gesture Recognition', 'AI/ML', 'APIs'],
    githubUrl: 'https://github.com/soasmi/AshaAI',
    liveUrl: null,
  },
  {
    title: 'EchoSense – AI-Powered Wearable Device',
    description: 'Designed a wearable communication aid for individuals with visual, speech, and hearing impairments. Leveraged Multimodal AI, NLP, and Gesture Recognition for real-time interaction.',
    technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'XGBoost', 'NLP'],
    githubUrl: 'https://github.com/soasmi/EchoSense',
    liveUrl: null,
  },
  {
    title: 'Database Management System',
    description: 'Developed a Python + SQLite system for efficient member data management with CRUD functionality. Implemented data validation and CSV import support.',
    technologies: ['Python', 'SQLite', 'Data Validation', 'CSV Processing'],
    githubUrl: 'https://github.com/soasmi/dbms',
    liveUrl: null,
  },
];

const workExperience = [
  {
    company: 'Winter Internship – Quantum Computing Research',
    position: 'Research Intern',
    duration: 'Dec 2024 – Jan 2025',
    description: [
      'Researched Quantum Walk Optimization with Non-Demolition Measurement for Vehicle Routing',
      'Explored quantum gates, simulators, and probabilistic computing to improve real-world logistics',
      'Worked under Dr. Kumar Gautam, collaborating with a team on quantum algorithms',
    ],
    technologies: ['Quantum Computing', 'Python', 'Research', 'Algorithms'],
  },
  {
    company: 'Foruppo',
    position: 'Product Management & Leadership Fellow',
    duration: '2024',
    description: [
      'Worked on live projects, contributing to product strategy, team leadership, and market analysis',
      'Gained hands-on experience in team collaboration and agile methodologies',
      'Developed skills in product management and leadership',
    ],
    technologies: ['Product Management', 'Agile', 'Leadership', 'Market Analysis'],
  },
];

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      
      <Section
        id="about"
        title="About Me"
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-accent-white/80">
            I'm a passionate AI & ML engineering student at Guru Gobind Singh Indraprastha University, 
            specializing in software development, quantum computing, and cloud technologies. 
            As a winner of the IEEE Hackathon, I've demonstrated strong problem-solving skills and innovation. 
            My expertise spans full-stack development, product management, and research, with notable 
            contributions to real-world projects and academic publications.
          </p>
        </div>
      </Section>

      <Section
        id="work"
        title="Work Experience"
        className="bg-transparent"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {workExperience.map((work, index) => (
            <WorkExperienceCard key={index} {...work} />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Get in Touch"
        className="bg-transparent"
      >
        <div className="max-w-xl mx-auto text-center">
          <form 
            className="space-y-6" 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
              };

              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                });

                if (response.ok) {
                  alert('Message sent successfully!');
                  e.currentTarget.reset();
                } else {
                  throw new Error('Failed to send message');
                }
              } catch (error) {
                alert('Failed to send message. Please try again later.');
                console.error('Error sending message:', error);
              }
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-accent-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input glow-on-tap"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-accent-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input glow-on-tap"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-accent-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="form-textarea glow-on-tap"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full btn btn-primary glow-on-tap"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/soasmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-green transition-transform duration-200 hover:scale-125 focus:scale-110 animate-glow"
              aria-label="GitHub"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            </a>
            <a
              href="http://www.linkedin.com/in/soasmi-kohli-711476291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-purple hover:text-accent-blue transition-transform duration-200 hover:scale-125 focus:scale-110 animate-glow"
              aria-label="LinkedIn"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a
              href="https://x.com/SoasmiKohli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-green hover:text-accent-purple transition-transform duration-200 hover:scale-125 focus:scale-110 animate-glow"
              aria-label="X (Twitter)"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0h-4.327l-5.835 8.322-5.835-8.322h-4.327l8.322 11.835-8.322 12.165h4.327l5.835-8.322 5.835 8.322h4.327l-8.322-12.165z"/></svg>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-transparent text-accent-white/60 text-sm select-none">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="animate-glow">&copy; {new Date().getFullYear()} Soasmi Kohli</span>
          <span className="hidden md:inline-block">|</span>
          <span className="animate-glow">Made with ❤️ and Next.js</span>
        </div>
      </footer>
    </main>
  );
}
