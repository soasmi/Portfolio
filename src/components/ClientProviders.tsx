"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { InteractiveBackground } from "./interactive-background";
import { InteractiveCursor } from "./InteractiveCursor";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      className="fixed top-4 right-4 z-[10000] p-2 rounded-full bg-glass border border-accent-blue/20 shadow-card hover:border-accent-blue/40 hover:shadow-soft-blue focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all duration-200"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-accent-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-accent-blue">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <InteractiveBackground />
      <InteractiveCursor />
      <ThemeSwitcher />
      <div className="relative z-10">{children}</div>
    </ThemeProvider>
  );
} 