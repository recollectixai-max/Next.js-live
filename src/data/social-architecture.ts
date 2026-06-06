export interface architectureClient {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; SocialLink: string;
  intro: string[]; executionHeading: string; executionPoints: string[];
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  editorialGallery: string[];
}

export const architectureClients: Record<string, architectureClient> = {
  "global-gypsum": {
    name: "Global Gypsum",
    slug: "global-gypsum",
    headline: "Constructing a Stronger Market Presence for Global Gypsum",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Architecture & Construction",
    year: "2024",
    SocialLink: "https://www.instagram.com/globalgypsumindia",

    intro: [
      "Recollectix leveraged strategic storytelling and digital outreach to elevate the brand's visibility among key decision-makers.",
      "By creating impactful content and targeted campaigns, Recollectix helped Global Gypsum strengthen brand perception, improve engagement, and build lasting recognition within the construction sector.",
      
    ],

    executionHeading: "Our execution process included:",
    executionPoints: [
      "Crafting platform-first Reels rooted in emotion, not just aesthetics—each post designed to earn a save or a share.",
      "Activating across the full calendar: seasonal drops, collab launches, behind-the-scenes arcs, and community Q&As.",
      "Partnering with nano and micro-influencers whose audiences matched Brand X's aspirational-but-real tone.",
      "Running weekly analytics reviews to double down on formats that performed and kill what didn't.",
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Increased audience engagement with creative, platform-first content campaigns.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/GG-1.png",
      "/media/brand-gallery/GG-2.png",
      "/media/brand-gallery/GG-3.png",
      "/media/brand-gallery/GG-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/GG-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/GG-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/GG-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },

};