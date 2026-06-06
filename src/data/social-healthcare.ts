export interface healthcareClient  {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; SocialLink: string;
  intro: string[]; executionHeading: string; executionPoints: string[];
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  editorialGallery: string[];
}

export const healthcareClients: Record<string, healthcareClient> = {
  "munazah-qazi": {
    name: "Munazah Qazi",
    slug: "munazah-qazi",
    headline: "Munazah Qazi Transformed Their Digital Presence with Strategic Content.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Healthcare",
    year: "2024",
    SocialLink: "https://instagram.com/dalesedencakeshop",

    intro: [
      "When Brand X launched in early 2024, it entered one of the most saturated lifestyle categories on Instagram. Great product, zero digital presence.",
      "The brief was clear: build an audience that actually cares—not just a follower count.",
      "So we started where every great story starts. With a blank page. Zero followers, zero content, and one clear north star: make people stop scrolling.",
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
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Strengthened brand recall through targeted storytelling and community building.",
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
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/DE-v-1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/DE-v-2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/DE-v-3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "herbalist": {
    name: "Herbalist",
    slug: "herbalist",
    headline: "Building Trust at Scale for Herbalist Through Strategic Brand Storytelling.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Healthcare",
    year: "2024",
    SocialLink: "https://www.instagram.com/theherbalist_wellness",

    intro: [
      "Recollectix crafted a credibility-focused marketing strategy to strengthen audience trust and brand recognition.",
      "Through informative content, consistent communication, and audience-centric campaigns, Recollectix helped Herbalist enhance its market presence, improve engagement, and establish stronger consumer confidence.",
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
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Strengthened brand recall through targeted storytelling and community building.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/he-1.png",
      "/media/brand-gallery/he-2.png",
      "/media/brand-gallery/he-3.png",
      "/media/brand-gallery/he-4.png",    
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/he-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/he-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/he-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },

};