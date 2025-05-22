import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "../components/ClientProviders";
import { CursorEffects } from "../components/CursorEffects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Soasmi Kohli - Portfolio",
  description: "AI & ML Engineering Student | Full Stack Developer | Quantum Computing Enthusiast",
  keywords: ["AI", "ML", "engineering", "quantum computing", "full stack", "web development", "portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ClientProviders>
          <CursorEffects>{children}</CursorEffects>
        </ClientProviders>
      </body>
    </html>
  );
}
