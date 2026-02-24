import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SplashCursor from "@/components/ui/SplashCursor";
import ClickSpark from "@/components/ui/ClickSpark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Minimalist Website",
  description: "A beautiful minimalist website built with Next.js",
};

import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <SplashCursor />
          <ClickSpark />
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
