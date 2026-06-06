export interface fnbClient {
  name: string; slug: string; headline: string; heroImage: string;
  services: string[]; industry: string; year: string; SocialLink: string;
  intro: string[];
  resultsHeading: string; results: string[];
  takeaway: { label: string; body: string };
  reels?: { thumb: string; videoSrc?: string; link?: string; caption?: string }[];
  editorialGallery: string[];
}

export const fnbClients: Record<string, fnbClient> = {

  "dales-eden": {
    name: "Dales Eden",
    slug: "dales-eden",
    headline: "Transforming Cravings into Consistent Customer Demand.",
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
    SocialLink: "https://instagram.com/dalesedencakeshop",

    intro: [
      "Recollectix executed a multi-channel campaign focused on increasing customer engagement and driving purchase intent",
      "By combining creative storytelling with performance-driven marketing initiatives, Recollectix helped Cremure enhance brand recall, attract new audiences, and encourage repeat customer interactions.",   
    ],


    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
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
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/DE-v-1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/DE-v-2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/DE-v-3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "cremure": {
    name: "Cremure",
    slug: "cremure",
    headline: "Building a Brand That Customers Remember and Return To.",
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
    SocialLink: "https://instagram.com/cremure_",

    intro: [
      "Recollectix executed a multi-channel campaign focused on increasing customer engagement and driving purchase intent.",
      "By combining creative storytelling with performance-driven marketing initiatives, Recollectix helped Cremure enhance brand recall, attract new audiences, and encourage repeat customer interactions.",

    ],


    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/cre-1.png",
      "/media/brand-gallery/cre-2.png",
      "/media/brand-gallery/cre-3.png",
      "/media/brand-gallery/cre-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/cre-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/cre-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/cre-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "evorea": {
    name: "Evorea",
    slug: "evorea",
    headline: "Turning Every Customer Touchpoint into a Lasting Impression",
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
    SocialLink: "https://www.instagram.com/evorea.in/",

    intro: [
      "Recollectix crafted a growth-focused strategy that improved visibility, customer engagement, and long-term brand affinity.",
      "The campaign centered on creating memorable brand experiences that strengthened customer trust, increased audience interaction, and supported sustainable business growth.",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/ev-1.png",
      "/media/brand-gallery/ev-2.png",
      "/media/brand-gallery/ev-3.png",
      "/media/brand-gallery/ev-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ev-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ev-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ev-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "house-of-pasta": {
    name: "House of pasta",
    slug: "house-of-pasta",
    headline: "Creating Demand Beyond the Menu Through Strategic Storytelling.",
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
    SocialLink: "https://www.instagram.com/thehouseofpasta/",

    intro: [
      "Recollectix developed a brand-building campaign that strengthened audience interest and customer retention.",
      "The campaign focused on increasing brand awareness, enhancing customer engagement, and building stronger emotional connections that translated into measurable business growth.",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/hop-1.png",
      "/media/brand-gallery/hop-2.png",
      "/media/brand-gallery/hop-3.png",
      "/media/brand-gallery/hop-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/hop-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/hop-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/hop-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "beach-house": {
    name: "Beach House",
    slug: "beach-house",
    headline: "Turning Brand Awareness into Customer Footfalls",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverage",
    year: "2024",
    SocialLink: "https://instagram.com/dalesedencakeshop",

    intro: [
      "Recollectix implemented an integrated marketing strategy designed to attract new audiences and strengthen customer engagement.",
      "Through impactful storytelling and targeted campaigns, Recollectix helped Beach House increase visibility, generate interest, and encourage more customer visits",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/cre-1.png",
      "/media/brand-gallery/cre-2.png",
      "/media/brand-gallery/cre-3.png",
      "/media/brand-gallery/cre-4.png",
      "/media/brand-gallery/cre-2.png",
      "/media/brand-gallery/cre-1.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/cre-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/cre-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/cre-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "cafe-alif": {
    name: "Cafe Alif",
    slug: "cafe-alif",
    headline: "Brewing Stronger Customer Connections Beyond Every Visit",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverage",
    year: "2024",
    SocialLink: "https://www.instagram.com/cafe_alif",

    intro: [
      "Recollectix designed a content-led campaign that increased engagement, visibility, and customer retention.",
      "Through consistent storytelling and audience-focused campaigns, Recollectix helped Cafe Alif create memorable brand experiences that encouraged repeat visits and stronger customer loyalty.",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/ca-1.png",
      "/media/brand-gallery/ca-2.png",
      "/media/brand-gallery/ca-3.png",
      "/media/brand-gallery/ca-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ca-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ca-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ca-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "persiana": {
    name: "Persiana",
    slug: "persiana",
    headline: "Growing Persiana Through Experiences That Spark Conversation.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverage",
    year: "2024",
    SocialLink: "https://www.instagram.com/persianaa_royaldining",

    intro: [
      "Recollectix executed a focused marketing strategy that encouraged deeper audience engagement and repeat interactions.",
      "By creating meaningful brand experiences across digital platforms, Recollectix helped Persiana strengthen customer relationships and improve overall brand recall.",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/per-1.png",
      "/media/brand-gallery/per-2.png",
      "/media/brand-gallery/per-3.png",
      "/media/brand-gallery/per-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/per-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/per-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/per-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "bakewills": {
    name: "Bake Wills",
    slug: "bakewills",
    headline: "Driving Store Visits Through Content That Created Desire",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverage",
    year: "2024",
    SocialLink: "https://www.instagram.com/bakewills",

    intro: [
      "Recollectix leveraged creative campaigns and audience insights to increase brand visibility and customer footfalls.",
      "By developing compelling content and strategic marketing initiatives, Recollectix helped Bakewills capture consumer attention and drive greater engagement both online and offline",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/bake-1.png",
      "/media/brand-gallery/bake-2.png",
      "/media/brand-gallery/bake-3.png",
      "/media/brand-gallery/bake-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bake-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/bake-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bake-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "rare-earth": {
    name: "Rare Earth",
    slug: "rare-earth",
    headline: "Turning Customer Experiences into Word-of-Mouth Growth",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverage",
    year: "2024",
    SocialLink: "https://www.instagram.com/rareearthcafe",

    intro: [
      "Recollectix developed a strategic campaign focused on brand visibility, customer engagement, and community building",
      "The campaign helped Rare Earth amplify customer advocacy, strengthen brand perception, and drive sustained audience interest across multiple touchpoints.",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/re-1.png",
      "/media/brand-gallery/re-2.png",
      "/media/brand-gallery/re-3.png",
      "/media/brand-gallery/re-4.png",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/re-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/re-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/re-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },
  "delhi-zaika": {
    name: "Delhi Zaika",
    slug: "delhi-zaika",
    headline: "Scaling Local Popularity into Sustained Customer Demand",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Food & Beverage",
    year: "2024",
    SocialLink: "https://www.instagram.com/delhizaikaofficial",

    intro: [
      "`Recollectix executed a performance-driven marketing strategy aimed at increasing visibility and customer acquisition.",
      "By leveraging creative campaigns and targeted audience engagement, Recollectix helped Delhi Zaika strengthen brand recall, attract new customers, and drive continued business growth",
      
    ],

    resultsHeading: "The Results That Defined Success",
    results: [
      "Enhanced brand visibility through consistent and strategic digital presence.",
      "Strengthened brand recall through targeted storytelling and community building.",
      "Delivered measurable business growth through data-driven marketing initiatives.",
      "Increased audience engagement with creative, platform-first content campaigns.",
    ],

    takeaway: {
      label: "The Key Takeaway",
      body: "Choosing the right creators for the right brand isn't luck. It's craft. The right faces carrying the right words, backed by a creative team that gives every campaign its idea and its soul. That's when ordinary content becomes inevitable culture.",
    },

    // YouTube embed src (iframe src, not watch URL) — set null to hide

    editorialGallery: [
      "/media/brand-gallery/dz-1.png",
      "/media/brand-gallery/dz-2.png",
      "/media/brand-gallery/dz-3.gif",
      "/media/brand-gallery/dz-4.gif",
    ],
    reels: [
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/dz-v1.mp4", link: "https://www.instagram.com", caption: "Launch Reel" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/dz-v2.mp4", link: "https://www.instagram.com", caption: "Product Reel" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/dz-v3.mp4", link: "https://www.instagram.com", caption: "Behind the Scenes" },
    ],
  },  

  
};