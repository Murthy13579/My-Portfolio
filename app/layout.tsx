// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/styles/globals.css"; // Import global styles from src/styles
import "../src/styles/Footer.module.css"; // Import Footer module styles from src/styles
import "../src/styles/Navbar.module.css"; // Import Navbar module styles from src/styles

import Navbar from "../src/components/Navbar"; // Correct path to Navbar in src/components
import Footer from "../src/components/Footer"; // Correct path to Footer in src/components

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
  title: "My Next.js Application",
  description: "An awesome app built with Next.js.",
  openGraph: {
    title: "My Next.js Application",
    description: "An awesome app built with Next.js.",
    url: "https://myapp.com",
    siteName: "MyApp",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Next.js Application",
    description: "An awesome app built with Next.js.",
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
