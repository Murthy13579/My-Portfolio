// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/styles/globals.css"; // Import global styles
import "../src/styles/Footer.module.css"; // Import Footer styles
import "../src/styles/Navbar.module.css"; // Import Navbar styles

import Navbar from "../src/components/Navbar"; // Path to Navbar component
import Footer from "../src/components/Footer"; // Path to Footer component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Dynamic metadata for better SEO
export const metadata: Metadata = {
  title: "Manikanta Medidi's Portfolio",
  description: "Welcome to the official portfolio website of Manikanta Medidi.",
  openGraph: {
    title: "Manikanta Medidi's Portfolio",
    description: "Explore the portfolio of Manikanta Medidi, a software developer.",
    url: "https://manikantamedidi.com",  // Replace with your domain URL
    siteName: "Manikanta Medidi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Medidi's Portfolio",
    description: "Explore my projects, skills, and more.",
  },
};

export default function RootLayout({
  children,
  lang = "en", // Default language is English
}: {
  children: React.ReactNode;
  lang?: string;
}) {
  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
