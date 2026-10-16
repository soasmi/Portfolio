import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "../components/ClientProviders";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Soasmi Kohli — AI/ML Engineer, Researcher & Systems Developer",
  description: "Personal portfolio of Soasmi Kohli — B.Tech CSE (AI & ML) at VIPS (GGSIPU), DRDO Research Intern, IEEE Hackathon Winner. Building at the intersection of intelligence, engineering, and curiosity.",
  keywords: ["Soasmi Kohli", "AI/ML Engineer", "DRDO SSPL", "DRDO SAG", "Quantum Walk Optimisation", "Document Intelligence", "Flutter", "FastAPI", "Full Stack", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${serif.variable} ${mono.variable} font-sans antialiased bg-[#FAF7F2] text-[#121316]`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

