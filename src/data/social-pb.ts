export interface pbClient  {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; SocialLink: string;
  intro: string[]; executionHeading: string; executionPoints: string[];
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  editorialGallery: string[];
}

export const pbClients: Record<string, pbClient> = {
    
  "k-square": {
    name: "K Square",
    slug: "k-square",
    headline: "K Square  Went From Zero To 80K Followers In 6 Months. Here's How.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Personal Branding",
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
      "Strengthened brand recall through targeted storytelling and community building.",
      "Increased audience engagement with creative, platform-first content campaigns.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
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
  "sop": {
    name: "SOP",
    slug: "sop",
    headline: "Serving Stories That Build Influence",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Personal Branding",
    year: "2024",
    SocialLink: "https://www.instagram.com/storiesonplate__",

    intro: [
      "Recollectix built a content and positioning strategy designed to increase visibility, credibility and audience engagement.",
      "By developing a distinctive brand voice and consistent content ecosystem, Recollectix helped Stories On Plate strengthen its authority and expand its digital presence.",

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
      "Strengthened brand recall through targeted storytelling and community building.",
      "Increased audience engagement with creative, platform-first content campaigns.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/sop-1.gif",
      "/media/brand-gallery/sop-2.gif",
      "/media/brand-gallery/sop-3.gif",
      "/media/brand-gallery/sop-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sop-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/sop-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sop-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "aniiche": {
    name: "Aniiche",
    slug: "aniiche",
    headline: "Building a Personal Brand That Commands Attention",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Personal Branding",
    year: "2024",
    SocialLink: "https://www.instagram.com/aniichebyanishashetty",

    intro: [
      "Recollectix crafted a personal branding strategy focused on audience growth and thought leadership.",
      "Through strategic storytelling and content positioning, Recollectix helped Aniiche establish a stronger digital identity and foster deeper audience engagement.",

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
      "Strengthened brand recall through targeted storytelling and community building.",
      "Increased audience engagement with creative, platform-first content campaigns.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/an-1.png",
      "/media/brand-gallery/an-2.png",
      "/media/brand-gallery/an-3.png",
      "/media/brand-gallery/an-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/an-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/an-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/an-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
};