export interface teachingClient {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; SocialLink: string;
  intro: string[]; executionHeading: string; executionPoints: string[];
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  editorialGallery: string[];
}

export const teachingClients: Record<string, teachingClient> = {
  "wadias-tutorials": {
    name: "Wadias Tutorials",
    slug: "wadias-tutorials",
    headline: "Wadias Tutorials  Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle & Fashion",
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
      "Enhanced brand visibility through consistent and strategic digital presence.",
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
  "cruise-career": {
    name: "Cruise Career",
    slug: "cruise-career",
    headline: "Inspiring Career Aspirations Through Purpose-Driven Marketing",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Education",
    year: "2024",
    SocialLink: "https://www.instagram.com/cruisecareer_",

    intro: [
      "Recollectix developed a strategic campaign to enhance visibility, engagement, and student acquisition.",
      "Through impactful storytelling and audience-focused communication, Recollectix helped Cruise Career connect with aspiring professionals, strengthen brand credibility, and drive sustained interest in its programs.",
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
      "/media/brand-gallery/cc-1.png",
      "/media/brand-gallery/cc-2.png",
      "/media/brand-gallery/cc-3.png",
      "/media/brand-gallery/cc-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/cruise-career-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/cruise-career-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/cruise-career-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },


};