export interface fashionClient  {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; SocialLink: string;
  intro: string[]; executionHeading: string; executionPoints: string[];
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  editorialGallery: string[];
}

export const fashionClients: Record<string, fashionClient> = {
  "sparkle-creations": {
    name: "Sparkle Creations",
    slug: "sparkle-creations",
    headline: "Turning Sparkle Creations into a Style Statement Beyond the Product",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Fashion",
    year: "2024",
    SocialLink: "https://instagram.com/dalesedencakeshop",

    intro: [
      "Recollectix crafted a brand-led marketing strategy to strengthen visibility, engagement, and customer affinity.",
      "Through creative storytelling, trend-driven campaigns, and consistent brand communication, Recollectix helped Sparkle Creations build stronger audience connections, increase brand recall, and establish a distinctive presence in the fashion landscape.",
      
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
      "/media/brand-gallery/sp-1.png",
      "/media/brand-gallery/sp-2.png",
      "/media/brand-gallery/sp-3.png",
      "/media/brand-gallery/sp-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sp-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/sp-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sp-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "mnm": {
    name: "MNM",
    slug: "mnm",
    headline: "Building a Fashion Brand That Stands Out in a Crowded Market",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Fashion",
    year: "2024",
    SocialLink: "https://www.instagram.com/mnm_garments",

    intro: [
      "Recollectix developed a brand-first strategy focused on visibility, engagement, and customer acquisition.",
      "Through impactful storytelling and targeted marketing initiatives, Recollectix helped MNM strengthen its brand presence, connect with its audience, and drive sustained growth across key channels",
      
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
      "/media/brand-gallery/mnm-1.png",
      "/media/brand-gallery/mnm-2.png",
      "/media/brand-gallery/mnm-3.png",
      "/media/brand-gallery/mnm-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/mnm-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/mnm-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/mnm-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },

};