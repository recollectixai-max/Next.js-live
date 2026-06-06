"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";



// ─────────────────────────────────────────────────────────────────────────────
//  Website CLIENT DATA STORE
//  Structure mirrors the Schbang case-study layout:
//    heroImage · services · industry · intro · executionPoints · results ·
//    takeaway · embedUrl · gallery
// ─────────────────────────────────────────────────────────────────────────────
export const WebsiteData: Record<string, WebsiteClient> = {

  "baryal": {
    name: "Baryal",
    slug: "baryal",
    headline: "Baryal Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/Baryal.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://baryalaroma.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },

  "belmont-london": {
    name: "Belmont London",
    slug: "belmont-london",
    headline: "Belmont London Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/BelmontLondon.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://belmontlondon.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },
  "ecofacade": {
    name: "Baryal",
    slug: "baryal",
    headline: "Baryal Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/Baryal.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://baryalaroma.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },
  "kikfat": {
    name: "Kikfat",
    slug: "kikfat",
    headline: "Kikfat Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/Kikfat.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://kikfat.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },
  "ajwa": {
    name: "Ajwa",
    slug: "ajwa",
    headline: "Ajwa Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/Ajwa.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://ajwa.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },
  "era-furnishings": {
    name: "Era Furnishings",
    slug: "era-furnishings",
    headline: "Era Furnishings Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/EraFurnishings.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://erafurnishings.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },
  "vertifacts": {
    name: "Vertifacts",
    slug: "vertifacts",
    headline: "Vertifacts Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/Vertifacts.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://vertifacts.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },

  "ryznxt": {
    name: "Ryznxt",
    slug: "ryznxt",
    headline: "Ryznxt Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/our_work_pics/Ryznxt_web.png",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
    year: "2024",
    websiteLink: "https://ryznxt.com/",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
    ],

    resultsHeading: "And in just six months, a blank page became a growing community:",
    results: [
      "80K+ Instagram followers built from scratch",
      "12M+ views across Reels and Stories",
      "8.4% average engagement rate—4× the category benchmark",
      "3 viral posts crossing 1M views organically",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/DE-1.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-3.jpg",
      "/media/brand-gallery/DE-4.jpg",
      "/media/brand-gallery/DE-2.jpg",
      "/media/brand-gallery/DE-1.jpg",
    ],
  },


};

// ─────────────────────────────────────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface WebsiteClient {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; websiteLink: string;
  intro: string[]; 
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  editorialGallery: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function WebsiteCaseStudy({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);
  const client = WebsiteData[clientId] ?? WebsiteData["baryal-web"];
  const editorialGallery = client.editorialGallery ?? [];

  const scrollImageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollImageRef,
    offset: ["start start", "end end"],
  });

// Replace your transform hooks with these responsive values:
  const imageWidth = useTransform(scrollYProgress, [0, 1], ["70%", "100%"]);   // wider start on mobile
  const imageHeight = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
  const imageBorderRadius = useTransform(scrollYProgress, [0, 1], ["16px", "0px"]);

  return (
    <div
      className="page-container min-h-screen font-sans"
      style={{ background: "#ffffff", color: "#0a0a0a" }}
    >
      <style>{`
        .font-display { font-family: var(--font-sans), Arial, Helvetica, sans-serif; }
        
        .hero-wrap {
          padding-top: 80px;
          position: relative;
          height: 70vh;
          overflow: hidden;
          background: #f0f2ff;
        }
        .case-study-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 48px 0;
        }
        .header-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: 40px;
          align-items: start;
          margin-bottom: 56px;
        }
        .info-panel {
          border: 1px solid var(--rule);
          border-radius: 24px;
          padding: 32px;
          background: #fff;
          display: grid;
          gap: 24px;
          box-shadow: 0 24px 80px rgba(15, 23, 66, 0.06);
          position: sticky;
          top: 120px;
          align-self: start;
        }
        .info-row {
          display: grid;
          gap: 20px;
        }
        .info-heading {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
        }
        .info-item {
          display: grid;
          gap: 10px;
        }
        .info-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .info-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
        }
        .info-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(26, 75, 255, 0.08);
          color: var(--blue);
          font-weight: 700;
          text-decoration: none;
          transition: transform .2s, background .2s;
        }
        .info-link:hover {
          transform: translateY(-1px);
          background: var(--blue);
          color: #fff;
        }
        .main-article p {
          margin: 0;
        }

        :root {
          --blue: #1a4bff;
          --blue-mid: #3b6bff;
          --blue-light: #e8eeff;
          --blue-border: #c5d0ff;
          --text: #0a0a0a;
          --muted: #5a5a6e;
          --rule: #e2e2ec;
        }

        ::selection { background: var(--blue); color: #fff; }

        .tag-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 100px;
          border: 1px solid var(--blue-border);
          color: var(--blue); font-size: 12px; font-weight: 600;
          letter-spacing: .04em; text-transform: uppercase;
          background: var(--blue-light);
          transition: background .2s, color .2s;
        }
        .tag-pill:hover { background: var(--blue); color: #fff; }

        .results-section {
          position: relative;
          padding: 40px 0;
        }

        .results-header {
          margin-bottom: 50px;
        }

        .results-badge {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.15);
          color: var(--blue);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .results-heading {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text);
          max-width: 700px;
        }

        .results-timeline {
          position: relative;
          padding-left: 40px;
        }

        .timeline-line {
          position: absolute;
          left: 11px;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            var(--blue),
            rgba(59, 130, 246, 0.15)
          );
          transform-origin: top;
        }

        .result-card {
          position: relative;
          margin-bottom: 22px;
          padding: 24px;
          border-radius: 22px;
          overflow: hidden;

          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.08);

          transition: all 0.35s ease;
          cursor: default;
        }

        .result-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
        }

        .result-dot {
          position: absolute;
          left: -34px;
          top: 30px;

          width: 14px;
          height: 14px;
          border-radius: 50%;

          background: var(--blue);
          box-shadow:
            0 0 0 6px rgba(59, 130, 246, 0.1),
            0 0 24px rgba(59, 130, 246, 0.4);
        }

        .result-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .result-number {
          font-size: 42px;
          font-weight: 800;
          line-height: 1;
          color: rgba(59, 131, 246, 0.78);
          min-width: 70px;
        }

        .result-content p {
          margin: 0;
          font-size: 17px;
          line-height: 1.6;
          font-weight: 600;
          color: var(--text);
        }

        .result-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            rgba(59, 130, 246, 0.15),
            transparent 60%
          );
          opacity: 0;
          transition: 0.4s ease;
        }

        .result-card:hover .result-glow {
          opacity: 1;
        }

        .exec-item {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 16px 0; border-bottom: 1px solid var(--rule);
        }
        .exec-bullet {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--blue); margin-top: 8px; flex-shrink: 0;
        }

        .takeaway-box {
          border: 1px solid var(--blue-border);
          background: var(--blue-light);
          border-radius: 12px;
          padding: 40px 44px;
          position: relative;
          overflow: hidden;
        }
        .takeaway-box::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 4px; height: 100%;
          background: var(--blue);
        }

        .embed-wrap {
          position: relative; padding-bottom: 56.25%;
          height: 0; overflow: hidden; border-radius: 12px;
        }
        .embed-wrap iframe {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; border: 0;
        }

        .spotlight-area {
          display: grid;
          gap: 24px;
          margin-bottom: 60px;
        }
        .reel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        .reel-card {
          position: relative;
          overflow: hidden;
          border-radius: 26px;
          background: #111827;
          min-height: 360px;
          box-shadow: 0 28px 90px rgba(15, 23, 66, 0.15);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .reel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 36px 120px rgba(15, 23, 66, 0.22);
        }
        .reel-card.active {
          border-color: var(--blue);
        }
        .reel-card video,
        .reel-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          aspect-ratio: 9 / 16;
        }
        .reel-meta {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 16px 18px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.42);
          color: #fff;
          backdrop-filter: blur(10px);
          display: grid;
          gap: 6px;
        }
        .reel-meta span {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;
        }
        .reel-meta small {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.75);
        }
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }
        .editorial-item {
          margin-bottom: 24px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(15, 23, 66, 0.08);
          background: #fff;
          transition: transform .3s ease;
        }
        .editorial-item:nth-child(3n+2) {
          transform: translateY(52px);
        }
        .editorial-item img,
        .editorial-item video {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .nav-bar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          padding: 20px 48px;
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--rule);
        }

        .footer-cta {
          border-top: 1px solid var(--rule);
          padding: 80px 48px;
          text-align: center;
          cursor: pointer;
          transition: background .4s;
        }
        .footer-cta:hover { background: var(--blue); }
        .footer-cta:hover .footer-label { color: rgba(255,255,255,.6); }
        .footer-cta:hover .footer-title { color: #fff; }
        .footer-label { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; transition: color .4s; }
        .footer-title { font-family: 'Syne', sans-serif; font-size: clamp(40px, 7vw, 96px); font-weight: 800; text-transform: uppercase; letter-spacing: -.02em; color: var(--text); transition: color .4s; }

        @media (max-width: 1024px) {
          .hero-wrap { height: 55vh; }
          .case-study-main { padding: 56px 32px 0; }
          .header-grid { grid-template-columns: 1fr; }
          .info-panel { position: relative; top: auto; }
          .nav-bar { padding: 18px 28px; }
          .footer-cta { padding: 60px 28px; }
        }

        @media (max-width: 768px) {
          .hero-wrap { height: 45vh; }
          .case-study-main { padding: 40px 22px 0; }
          .tag-pill { padding: 6px 12px; font-size: 11px; }
          .footer-cta { padding: 52px 20px; }
          .footer-title { font-size: clamp(32px, 10vw, 58px); }
          .takeaway-box { padding: 30px 30px; }
          .embed-wrap { border-radius: 10px; }
          .result-item, .exec-item { padding-left: 16px; padding-right: 0; }
          .image-pair-grid { grid-template-columns: 1fr; }
          .editorial-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0px;
            margin-bottom: 0px;
          }
          .editorial-item:nth-child(3n+2) {
            transform: translateY(0px);
          }
          .stack-card { max-width: 340px; }
          .reel-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .hero-wrap { height: 35vh; }
          .nav-bar { flex-direction: column; align-items: flex-start; gap: 12px; padding: 14px 16px; }
          .case-study-main { padding: 32px 16px 0; }
          .footer-cta { padding: 44px 16px; }
          .footer-title { font-size: clamp(28px, 12vw, 48px); }
          .tag-pill { width: auto; }
          .main-article p { font-size: 15px; line-height: 1.7; }
          .content-grid { gap: 24px; }
          .embed-wrap { padding-bottom: 62.5%; }
          .result-item, .exec-item { gap: 12px; padding-left: 14px; }
          .image-pair-grid { gap: 20px; }
          .editorial-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0px;
            margin-bottom: 0px;
          }
          .editorial-item:nth-child(3n+2) {
            transform: translateY(0px);
          }
          .hero-image { width: 100%; height: 100%; object-fit: cover; object-position: right; } 
        }
      `}</style>

      {/* ── Nav ── */}
      <nav className="nav-bar">
        <Link
          href="/new-work"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none" }}
        >
          <ArrowLeft size={14} /> New Work
        </Link>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)" }}>
          Case Study
        </span>
      </nav>

      {/* ── Hero Image ── */}
      {/* <div className="hero-wrap">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image src={client.heroImage} alt={client.name} fill style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0 }} />
        </motion.div>
      </div> */}

      {/* ── Body ── */}
      <main className="case-study-main">

        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .1 }}
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 24 }}
        >
          Case Study
        </motion.p>

        <div className="header-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .15, duration: .7 }}
          >
            <motion.h1
              className="font-display"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .2, duration: .8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(34px, 4.5vw, 52px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-.03em", marginBottom: 32, maxWidth: 680 }}
            >
              {client.headline}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .25, duration: .7 }}
              style={{ display: "grid", gap: 20 }}
            >
              {client.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.8, color: i === 0 ? "var(--text)" : "var(--muted)", margin: 0, fontWeight: i === 0 ? 400 : 300 }}>
                  {p}
                </p>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            className="info-panel"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .28, duration: .7 }}
          >
            <div className="info-item">
              <p className="info-label">Services</p>
              <div style={{ display: "grid", gap: 10 }}>
                {client.services.map((s) => (
                  <span key={s} className="tag-pill" style={{ width: "fit-content" }}>{s}</span>
                ))}
              </div>
            </div>
            <div className="info-item">
              <p className="info-label">Industry</p>
              <p className="info-value">{client.industry}</p>
            </div>
            <div className="info-item">
              <p className="info-label">Year</p>
              <p className="info-value">{client.year}</p>
            </div>
            <div className="info-item">
              <p className="info-label">website</p>
              <a href={client.websiteLink} target="_blank" rel="noopener noreferrer" className="info-link">
                View website <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.aside>
        </div>

        <article className="main-article">
          {/* ── Scroll-Expanding Image Section ── */}
          <motion.section
            ref={scrollImageRef}
            style={{ height: "300vh", position: "relative" }}
          >
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <motion.div
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  borderRadius: imageBorderRadius,
                  overflow: "hidden",
                  position: "relative",
                  maxWidth: "100vw",    
                }}
              >
                <Image
                  src={client.heroImage}
                  alt={client.name}
                  fill
                  className="hero-image"
                  sizes="100vw"  
                  style={{ objectFit: "cover" }}
                  priority
                />
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                    opacity: useTransform(scrollYProgress, [0.6, 1], [0, 1]),
                  }}
                />
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 48,
                    left: 48,
                    opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]),
                    transform: "translateY(0)",
                  }}
                >
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Editorial</p>
                  <h3 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, color: "#fff", letterSpacing: "-.03em", lineHeight: 1.1 }}>{client.name}</h3>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .7 }}>
            <p style={{ fontSize: 17, lineHeight: 1.78, color: "var(--text)", marginBottom: 8 }}>{client.executionHeading}</p>
            <div style={{ marginBottom: 48 }}>
              {client.executionPoints.map((pt, i) => (
                <div key={i} className="exec-item">
                  <span className="exec-bullet" />
                  <p style={{ fontSize: 16, lineHeight: 1.72, color: "var(--muted)", margin: 0 }}>{pt}</p>
                </div>
              ))}
            </div>
          </motion.section> */}

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="results-section"
          >
            <motion.div
              className="results-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="results-badge">Growth Metrics</span>

              <p className="results-heading">
                {client.resultsHeading}
              </p>
            </motion.div>

            <div className="results-timeline">
              <motion.div
                className="timeline-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />

              {client.results.map((result, index) => (
                <motion.div
                  key={index}
                  className="result-card"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                >
                  <div className="result-dot" />

                  <div className="result-content">
                    <span className="result-number">
                      0{index + 1}
                    </span>

                    <p>{result}</p>
                  </div>

                  <div className="result-glow" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="editorial-grid" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .45, duration: .7 }}>
            {editorialGallery.map((img, index) => (
              <div key={index} className="editorial-item">
                <Image src={img} alt={`${client.name} image ${index + 1}`} width={1200} height={1600} style={{ objectFit: "cover" }} />
              </div>
            ))}
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .5, duration: .7 }}>
            <div className="takeaway-box" style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 16 }}>
                {client.takeaway.label}
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.75, color: "var(--text)", fontWeight: 400, margin: 0 }}>
                {client.takeaway.body}
              </p>
            </div>
          </motion.section>


        </article>
      </main>

      {/* ── Footer CTA ── */}
      <div className="footer-cta">
        <Link href="/our-work" style={{ textDecoration: "none", display: "block" }}>
          <p className="footer-label">Back to</p>
          <h2 className="font-display footer-title">All Work</h2>
        </Link>
      </div>
    </div>
  );
}
