"use client";
import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const bg = document.getElementById("mouse-gradient-bg");
    const move = (e: MouseEvent) => {
      if (bg) {
        bg.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(80,120,255,0.25) 0%, transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="mouse-gradient-bg" className="fixed inset-0 -z-10 transition-all duration-300 pointer-events-none" />
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-transparent z-20">
        <span className="font-bold text-lg tracking-tight">Soasmi Kohli</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#achievements" className="hover:underline">Achievements</a>
          <a href="#publications" className="hover:underline">Publications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <ThemeSwitcher />
      </nav>
      {children}
    </>
  );
}

function ThemeSwitcher() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  return (
    <button
      aria-label="Toggle theme"
      className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
      onClick={toggleTheme}
    >
      <span role="img" aria-label="theme">🌓</span>
    </button>
  );
} 