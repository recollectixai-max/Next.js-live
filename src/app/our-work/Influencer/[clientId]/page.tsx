"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
// import { InfluencerData } from "@/data/Influencer-data";
// import { getInfluencerClient } from "@/data/Influencer-data";

// ─────────────────────────────────────────────────────────────────────────────
//  Influencer CLIENT DATA STORE
//  Structure mirrors the Schbang case-study layout:
//    heroImage · services · industry · intro · executionPoints · results ·
//    takeaway · embedUrl · gallery
// ─────────────────────────────────────────────────────────────────────────────

export const influencerData: Record<string, influencerClient> = {
  "bosch": {
    name: "Bosch",
    slug: "bosch",
    headline: "Taking Bosch Home Appliances from Product Awareness to Lifestyle Influence.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Home Appliances Manufacturing",
    year: "2024",
    InstagramLink: "https://instagram.com/boschhomein",

    intro: [
      "How influencer-led storytelling helped Bosch connect with modern households, showcase real-life product experiences and strengthen its position as a premium smart home brand",
      "Consumers don't buy features—they buy outcomes. Our campaign focused on bringing Bosch's innovation to life through creators who could authentically demonstrate convenience, efficiency, and smart living.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 5, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 3.5, suffix: "M+", detail: "Audience reached" },
      { label: "Total likes", value: 658, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 43, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 734, suffix: "+", detail: "Estimated growth contribution" },
    ],
    results: [
      "Increased brand and product awareness",
      "Wider audience reach through creator collaborations",
      "Strong engagement around the oven launch",
      "Enhanced campaign visibility across social media",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    // editorialGallery: [
    //   "/media/brand-gallery/DE-1.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-3.jpg",
    //   "/media/brand-gallery/DE-4.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-1.jpg",
    // ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bo-im-1.mp4", link: "https://www.instagram.com", caption: "@thesupremelove_" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/bo-im-2.mp4", link: "https://www.instagram.com", caption: "@lovehustlefreedom" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bo-im-3.mp4", link: "https://www.instagram.com", caption: "@kimayavartak" },
    ],
  },
  "cremure-im": {
    name: "Cremure",
    slug: "cremure-im",
    headline: "Building Consistent Brand Visibility for Cremure Through Always-On Influencer Marketing.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverages",
    year: "2024",
    InstagramLink: "https://instagram.com/cremure_",

    intro: [
      "Recollectix partnered with Cremure to drive consistent brand visibility through influencer marketing. We onboarded and managed 6–7 influencers every month, ensuring regular content and audience engagement.",
      "This ongoing strategy helped Cremure reach a wider audience, strengthen brand awareness and support sales growth through authentic creator-driven promotions.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 50, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 18.2, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 978, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 61, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 734, suffix: "+", detail: "Estimated growth contribution" },
    ],    
    results: [
      "6–7 influencer collaborations every month",
      "Consistent social media visibility",
      "Expanded audience reach across target demographics",
      "Contributed to stronger sales growth through creator-led promotions",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    // editorialGallery: [
    //   "/media/brand-gallery/DE-1.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-3.jpg",
    //   "/media/brand-gallery/DE-4.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-1.jpg",
    // ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/c-im-1.mp4", link: "https://www.instagram.com", caption: "@nusta_foody" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/c-im-2.mp4", link: "https://www.instagram.com", caption: "@eat.or.regret" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/c-im-3.mp4", link: "https://www.instagram.com", caption: "@mumbai_heavens" },
    ],
  },
  "veena-developer": {
    name: "veena developers",
    slug: "veena-developer",
    headline: "Driving Brand Visibility for Veena Developers Through Strategic Influencer Marketing",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Real Estate",
    year: "2024",
    InstagramLink: "https://instagram.com/veena_developers",

    intro: [
      "In October 2025, Recollectix executed a targeted influencer marketing campaign for Veena Developers to enhance brand visibility and reach potential homebuyers.",
      "By collaborating with relevant creators, we helped the brand gain significant exposure across social media, expand its audience reach, and strengthen engagement with prospective customers, ultimately supporting its sales and marketing goals.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 4, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 4.9, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 618, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 11, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 234, suffix: "+", detail: "Estimated growth contribution" },
    ],
    results: [
      "Increased brand awareness",
      "Wider audience reach",
      "Strong social media visibility",
      "Supported lead generation and sales growth",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    // editorialGallery: [
    //   "/media/brand-gallery/DE-1.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-3.jpg",
    //   "/media/brand-gallery/DE-4.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-1.jpg",
    // ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ve-im-1.mp4", link: "https://www.instagram.com", caption: "@jannatsorathia" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ve-im-2.mp4", link: "https://www.instagram.com", caption: "@saarthigroups" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/veena-v3.mp4", link: "https://www.instagram.com", caption: "@theblogginghogger" },
    ],
  },
  "supreme-seasons": {
    name: "Supreme Seasons",
    slug: "supreme-seasons",
    headline: "Spreading the Colors of Holi with Supreme Seasons Influencer Campaign",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Gifting",
    year: "2024",
    InstagramLink: "https://instagram.com/supremeseasons_official",

    intro: [
      "Recollectix executed a large-scale influencer marketing campaign for Supreme Season to promote its Holi hamper collection",
      "By collaborating with 20+ influencers, we created strong festive buzz around the product launch, helping the brand reach a wider audience and maximize visibility during the Holi season. The campaign drove high engagement, increased brand awareness, and supported sales through authentic creator-led content.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 20, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 5.3, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 23, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 23, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 434, suffix: "+", detail: "Estimated growth contribution" },
    ],
    results: [
      "Strong festive campaign visibility",
      "Expanded audience reach",
      "Increased brand awareness and engagement",
      "Supported Holi hamper sales growth through social media exposure",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    // editorialGallery: [
    //   "/media/brand-gallery/DE-1.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-3.jpg",
    //   "/media/brand-gallery/DE-4.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-1.jpg",
    // ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ss-im-1.mp4", link: "https://www.instagram.com", caption: "@pursuit.of.happynesss" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ss-im-2.mp4", link: "https://www.instagram.com", caption: "@_cherry29" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ss-im-3.mp4", link: "https://www.instagram.com", caption: "@aanjaliiiii" },
    ],
  },
  "swiss-wellness": {
    name: "swiss wellness",
    slug: "swiss-wellness",
    headline: "Amplifying Swiss Wellness’s Brand Presence Through a Celebrity-Led Influencer Marketing Campaign.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Healthcare & Wellness",
    year: "2024",
    InstagramLink: "https://instagram.com/swissein",

    intro: [
      "Recollectix executed a targeted influencer marketing campaign for Swiss Aus Wellness, helping amplify the brand's presence during its campaign featuring Aditya Roy Kapur.",
      "Through strategic creator collaborations, the campaign expanded the brand's reach, increased engagement, and strengthened its connection with health-conscious consumers.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 3, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 3.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 12, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 9, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 651, suffix: "+", detail: "Estimated growth contribution" },
    ],
    results: [
      "Increased brand awareness across social media",
      "Reached a wider and highly relevant audience",
      "Enhanced engagement through authentic creator content",
      "Strengthened campaign visibility and recall",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    // editorialGallery: [
    //   "/media/brand-gallery/DE-1.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-3.jpg",
    //   "/media/brand-gallery/DE-4.jpg",
    //   "/media/brand-gallery/DE-2.jpg",
    //   "/media/brand-gallery/DE-1.jpg",
    // ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sw-im-1.mp4", link: "https://www.instagram.com", caption: "@amrapali.patil" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/sw-im-2.mp4", link: "https://www.instagram.com", caption: "@fitculturebytanya" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sw-im-3.mp4", link: "https://www.instagram.com", caption: "@raina.mehta35" },
    ],
  },


};

// ─────────────────────────────────────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface influencerClient {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; InstagramLink: string;
  intro: string[]; 
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  performanceStats?: { label: string; value: number; suffix?: string; detail?: string }[];
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  // editorialGallery: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function InfluencerCaseStudy({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = use(params);
  const client = influencerData[clientId] ?? influencerData[""];
  const [activeReel, setActiveReel] = useState(0);
  const reels = client.reels ?? [];
  // const editorialGallery = client.editorialGallery ?? [];

  // const client = getInfluencerClient(clientId);

  // if (!client) {
  //   return <div>Client not found</div>;
  // }


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
          color: rgba(59, 131, 246, 0.85);
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

        .stats-section { margin: 58px 0 42px; }
        .stats-header { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 16px; margin-bottom: 28px; }
        .stats-badge { font-size: 18px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--blue); }
        .stats-heading { font-size: clamp(24px, 2.4vw, 34px); line-height: 1.1; font-weight: 800; margin: 0; max-width: 720px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
        .stat-block { position: relative; overflow: hidden; padding: 28px 24px 24px; border: 1px solid rgba(12, 20, 38, .08); border-radius: 24px; background: rgba(255, 255, 255, 0.96); box-shadow: 0 30px 70px rgba(14, 28, 54, .06); transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease; gap: 10px; display: grid;  }
        .stat-block:hover { border-color: rgba(6, 56, 150, .18); box-shadow: 0 28px 80px rgba(6, 56, 150, .1); }
        .stat-glow { position: absolute; top: -18px; right: -18px; width: 96px; height: 96px; border-radius: 50%; background: radial-gradient(circle, rgba(48, 102, 255, .18) 0%, rgba(48, 102, 255, 0) 60%); pointer-events: none; }
        .stat-value { font-size: clamp(30px, 3.4vw, 44px); font-weight: 800; line-height: 1; margin: 0 0 12px; color: #0a0a0a; }
        .stat-label { font-size: 13px; letter-spacing: .08em; text-transform: uppercase; font-weight: 700; margin: 0 0 10px; color: var(--muted); }
        .stat-detail { font-size: 15px; line-height: 1.7; color: rgba(10, 10, 10, .78); margin: 0; }

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
          .stats-section { margin: 48px 0 32px; }
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
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
          .editorial-grid { column-count: 2; column-gap: 18px; }
          .stack-card { max-width: 340px; }
          .reel-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
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
          .editorial-grid { column-count: 1; column-gap: 14px; }
          .stats-grid { grid-template-columns: 1fr; }
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
              <p className="info-label">Instagram</p>
              <a href={client.InstagramLink} target="_blank" rel="noopener noreferrer" className="info-link">
                View Instagram <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.aside>
        </div>

        <article className="main-article">
          {reels.length > 0 && (
            <motion.section
              className="spotlight-area"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .3, duration: .8 }}
            >
              <div className="reel-grid">
                {reels.map((r, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`reel-card ${i === activeReel ? "active" : ""}`}
                    onClick={() => setActiveReel(i)}
                  >
                    {r.videoSrc ? (
                      <video src={r.videoSrc} autoPlay muted loop playsInline poster={r.thumb} />
                    ) : (
                      <Image src={r.thumb} alt={r.caption ?? `Reel ${i + 1}`} fill style={{ objectFit: "cover" }} />
                    )}
                    <div className="reel-meta">
                      <span>{r.caption}</span>
                      {/* <small>Tap to view details</small> */}
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          )}

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

          <motion.section
            className="stats-section"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: .4, duration: .75 }}
          >
            <div className="stats-header">
              <span className="stats-badge">Campaign Results in numbers</span>
              {/* <p className="stats-heading">Performance in numbers</p> */}
            </div>

            <div className="stats-grid">
              {(client.performanceStats ?? []).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-block"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="stat-glow" />
                  <p className="stat-value">
                    <CountUp to={stat.value} />{stat.suffix ?? ""}
                  </p>
                  <p className="stat-label">{stat.label}</p>
                  {stat.detail ? <p className="stat-detail">{stat.detail}</p> : null}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Editorial Gallery */}
          {/* <motion.section className="editorial-grid" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: .45, duration: .7 }}>
            {editorialGallery.map((img, index) => (
              <div key={index} className="editorial-item">
                <Image src={img} alt={`${client.name} image ${index + 1}`} width={1200} height={1600} style={{ objectFit: "cover" }} />
              </div>
            ))}
          </motion.section> */}

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
