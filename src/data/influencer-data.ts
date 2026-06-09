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



export const influencerClients: Record<string, influencerClient> = {
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
  "dales-eden-im": {
    name: "dales eden",
    slug: "dales-eden-im",
    headline: "Elevating Dales Eden from a Cake Brand to a Celebration Essential.",
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
    InstagramLink: "https://instagram.com/dalesedencakeshop",

    intro: [
      "How influencer-led storytelling helped Dales Eden become a preferred choice for birthdays, celebrations, and everyday indulgence.",
      "Great cakes are remembered through experiences, not just ingredients. Our influencer marketing campaign showcased Dales Eden through authentic celebration moments, product reviews, and lifestyle content that highlighted taste, quality, and craftsmanship. This approach strengthened brand visibility and increased consumer engagement across digital platforms.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 9, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 5.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 21, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 5, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 435, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/de-im-1.mp4", link: "https://www.instagram.com", caption: "@recipesforselflove1" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/de-im-2.mp4", link: "https://www.instagram.com", caption: "@foodies.onthefly" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/de-im-3.mp4", link: "https://www.instagram.com", caption: "@rafatfinds" },
    ],
  },
  "evorea-im": {
    name: "evorea",
    slug: "evorea-im",
    headline: "Positioning Evorea as a Must-Visit Destination for Dessert Lovers.",
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
    InstagramLink: "https://www.instagram.com/evorea.in/",

    intro: [
      "How influencer experiences helped Evorea attract food enthusiasts and build excitement around its dessert offerings.",
      "Dessert cafés thrive on visual appeal and customer experiences. Our influencer campaign highlighted Evorea's signature desserts, café ambiance, and share-worthy moments through engaging content. This helped the brand strengthen its digital presence and attract new visitors seeking premium dessert experiences.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 20, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 12.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 34, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 10, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 815, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ev-im-1.mp4", link: "https://www.instagram.com", caption: "@amrapali.patil" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ev-im-2.mp4", link: "https://www.instagram.com", caption: "@fitculturebytanya" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ev-im-3.mp4", link: "https://www.instagram.com", caption: "@raina.mehta35" },
    ],
  },
  "persiana-im": {
    name: "persiana",
    slug: "persiana-im",
    headline: "Elevating Persiana from a Restaurant to a Memorable Culinary Experience.",
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
    InstagramLink: "https://www.instagram.com/persianaa_royaldining",

    intro: [
      "How influencer-driven content showcased Persiana's flavors, hospitality and dining excellence.",
      "Consumers trust recommendations from creators who share genuine experiences. Our campaign highlighted Persiana's signature dishes, dining ambiance and service quality through engaging influencer content. This strengthened brand awareness and encouraged more diners to explore the restaurant.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 11, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 6.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 21, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 6, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 451, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/per-im-1.mp4", link: "https://www.instagram.com", caption: "@explorewith.sr" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/per-im-2.mp4", link: "https://www.instagram.com", caption: "@gunnybagofjoy" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/per-im-3.mp4", link: "https://www.instagram.com", caption: "@zaikey_ki_talash" },
    ],
  },
  "bakewills-im": {
    name: "bakewills",
    slug: "bakewills-im",
    headline: "Turning Bakewills into a Go-To Destination for Sweet Celebrations.",
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
    InstagramLink: "https://instagram.com/bakewills",

    intro: [
      "How creator partnerships amplified Bakewills' presence and inspired consumers to choose the brand for special occasions.",
      "Consumers connect with brands that become part of their memorable moments. Through carefully selected food and lifestyle creators, we positioned Bakewills as a trusted cake brand that delivers both quality and delight. The campaign generated strong engagement and expanded the brand's reach among celebration-focused audiences.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 10, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 4.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 21, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 6, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 451, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bw-im-1.mp4", link: "https://www.instagram.com", caption: "@snacky_smurf" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/bw-im-2.mp4", link: "https://www.instagram.com", caption: "@recipesforselflove1" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bw-im-3.mp4", link: "https://www.instagram.com", caption: "@eatwithbuttterr" },
    ],
  },
  "rare-earth-im": {
    name: "Rare Earth",
    slug: "rare-earth-im",
    headline: "Positioning Rare Earth Cafe as a Modern Hub for Food and Community.",
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
    InstagramLink: "https://instagram.com/rareearthcafe",

    intro: [
      "How influencer marketing helped Rare Earth Cafe attract new audiences through authentic dining experiences.",
      "Cafés thrive when they become part of consumers' lifestyles. By partnering with creators who aligned with the brand's identity, we showcased Rare Earth Cafe's atmosphere, menu, and customer experience. The result was stronger digital visibility and increased brand affinity.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 8, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 3.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 21, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 3, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 451, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/re-im-1.mp4", link: "https://www.instagram.com", caption: "@richkcraft" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/re-im-2.mp4", link: "https://www.instagram.com", caption: "@patrawalashaheen" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/re-im-3.mp4", link: "https://www.instagram.com", caption: "@celiacwithvidhee" },
    ],
  },
  "delhi-zaika-im": {
    name: "Delhi Zaika",
    slug: "delhi-zaika-im",
    headline: "Bringing Delhi Zaika's Authentic Flavors to a Wider Audience.",
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
    InstagramLink: "https://instagram.com/delhizaikaofficial",

    intro: [
      "How creator partnerships helped Delhi Zaika celebrate its culinary heritage and attract food lovers.",
      "Authenticity is a powerful differentiator in the restaurant industry. Through influencer collaborations, we showcased Delhi Zaika's signature offerings and unique dining experience. The campaign increased online engagement and strengthened the restaurant's connection with its target audience.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 11, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 7.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 30, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 11, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 629, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/dz-im-1.mp4", link: "https://www.instagram.com", caption: "@masira_eats" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/dz-im-2.mp4", link: "https://www.instagram.com", caption: "@imaamirsiddiqui" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/dz-im-3.mp4", link: "https://www.instagram.com", caption: "@nukkadexpress" },
    ],
  },
  "beach-house-im": {
    name: "Beach House",
    slug: "beach-house-im",
    headline: "Building Beach House Cafe into a Destination Beyond Dining.",
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
    InstagramLink: "https://www.instagram.com/thebeachhousegorai",

    intro: [
      "How influencer storytelling highlighted the café's ambiance, food experiences, and lifestyle appeal.",
      "Modern consumers seek experiences they can enjoy and share. Our campaign focused on showcasing Beach House Cafe's atmosphere, menu offerings and scenic appeal through authentic creator content. This helped increase brand visibility and establish the café as a preferred social destination.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 7, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 4.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 11, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 7, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 762, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bh-im-1.mp4", link: "https://www.instagram.com", caption: "@softsouldevtrips" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/bh-im-2.mp4", link: "https://www.instagram.com", caption: "@fashion_by_pooh" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/bh-im-3.mp4", link: "https://www.instagram.com", caption: "@aki_kakkad" },
    ],
  },
  "creamers-im": {
    name: "creamers",
    slug: "creamers-im",
    headline: "Transforming Creamers into a Lifestyle-Led Dessert Café Experience.",
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
    InstagramLink: "https://www.instagram.com/creamerscakesbakes",

    intro: [
      "How creator-generated content helped Creamers connect with audiences seeking indulgence, comfort and memorable café moments.",
      "Consumers increasingly discover dining experiences through social media. By partnering with food creators and local influencers, we showcased Creamers' unique menu, inviting atmosphere, and signature desserts. The campaign enhanced brand awareness and encouraged greater customer footfall.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 17, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 9.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 21, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value:11, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 751, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/creamers-im-1.mp4", link: "https://www.instagram.com", caption: "@rumanapatel_finds" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/creamers-im-2.mp4", link: "https://www.instagram.com", caption: "@karisaffu" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/creamers-im-3.mp4", link: "https://www.instagram.com", caption: "@things2exploreinmumbai" },
    ],
  },
  "shawarma-cafe-im": {
    name: "Shawarma Cafe",
    slug: "shawarma-cafe-im",
    headline: "Making Shawarma Cafe a Favorite Among Food Enthusiasts.",
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
    InstagramLink: "https://www.instagram.com/shawarmacafeindia",

    intro: [
      "How influencer collaborations amplified Shawarma Cafe's signature flavors and strengthened local brand awareness.",
      "Food recommendations drive dining decisions. Through engaging creator reviews and food-focused content, we highlighted Shawarma Cafe's menu, quality, and customer experience. The campaign generated strong audience interest and increased engagement with the brand.",
      
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sc-im-1.mp4", link: "https://www.instagram.com", caption: "@bites_of_history_for_you" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/sc-im-2.mp4", link: "https://www.instagram.com", caption: "@colourful.apron" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sc-im-3.mp4", link: "https://www.instagram.com", caption: "@travelbitewithshamshad" },
    ],
  },
  "taipei-im": {
    name: "Taipei",
    slug: "taipei-im",
    headline: "Positioning Taipei as a Go-To Destination for Authentic Chinese Cuisine.",
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
    InstagramLink: "https://www.instagram.com/taipei_authentic_asian_cuisine",

    intro: [
      "How influencer marketing helped Taipei showcase its flavors, dining experience, and culinary expertise.",
      "Food creators play a key role in shaping restaurant discovery. By highlighting Taipei's signature dishes and dining atmosphere through authentic content, we strengthened its digital presence and attracted audiences seeking quality Chinese cuisine.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 9, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 5.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 12, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 9, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 751, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/taipei-im-1.mp4", link: "https://www.instagram.com", caption: "@shubham_bari_sb" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/taipei-im-2.mp4", link: "https://www.instagram.com", caption: "@love_foodie_life" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/taipei-im-3.mp4", link: "https://www.instagram.com", caption: "@explorewithrohit_" },
    ],
  },
  "ajwa-im": {
    name: "Ajwa",
    slug: "ajwa-im",
    headline: "Reimagining Ajwa as a Premium Everyday Wellness Brand.",
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
    InstagramLink: "https://www.instagram.com/ajwahouseofdryfruits_official",

    intro: [
      "How influencer marketing helped Ajwa connect with health-conscious consumers through authentic product experiences.",
      "Consumers increasingly seek healthier lifestyle choices backed by trust and credibility. By collaborating with creators in wellness and lifestyle niches, we highlighted Ajwa's premium dry fruits and quality promise. The campaign enhanced brand awareness and consumer confidence.",
      
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ajwa-im-1.mp4", link: "https://www.instagram.com", caption: "@mayur_life_explorer" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ajwa-im-2.mp4", link: "https://www.instagram.com", caption: "@_mumbai.diaries_" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ajwa-im-3.mp4", link: "https://www.instagram.com", caption: "@navimumbai.food.diaries" },
    ],
  },
  "urban-italiano-im": {
    name: "Urban Italiano",
    slug: "urban-italiano-im",
    headline: "Transforming Urban Italiano into a Contemporary Italian Dining Favorite.",
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
    InstagramLink: "https://www.instagram.com/urban_italiano_/",

    intro: [
      "How influencer collaborations showcased Urban Italiano's menu, ambiance and premium dining experience.",
      "Italian cuisine is best experienced through stories, visuals, and shared moments. Our campaign featured creators who authentically captured Urban Italiano's offerings and atmosphere, helping the brand increase awareness and attract new customers.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 20, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 11.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 43, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 16, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 1051, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ui-im-1.mp4", link: "https://www.instagram.com", caption: "@amrapali.patil" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ui-im-2.mp4", link: "https://www.instagram.com", caption: "@fitculturebytanya" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ui-im-3.mp4", link: "https://www.instagram.com", caption: "@raina.mehta35" },
    ],
  },
  "harish-lunch-home-im": {
    name: "Harish Lunch Home",
    slug: "harish-lunch-home-im",
    headline: "Strengthening Harish Lunch Home's Legacy Through Modern Influence.",
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
    InstagramLink: "https://www.instagram.com/harish_lunch_home",

    intro: [
      "How creator-led content helped Harish Lunch Home connect with a new generation of diners.",
      "Established restaurants remain relevant when tradition meets modern storytelling. Through influencer collaborations, we highlighted Harish Lunch Home's iconic dishes, customer experience, and trusted reputation. The campaign enhanced brand recall and increased audience engagement.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 11, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 6.1, suffix: "M+", detail: "Audience reach" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/hlh-im-1.mp4", link: "https://www.instagram.com", caption: "@aaliyaaasiamemon" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/hlh-im-2.mp4", link: "https://www.instagram.com", caption: "@wonky.traveller" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/hlh-im-3.mp4", link: "https://www.instagram.com", caption: "@eat.or.regret" },
    ],
  },
  "istanbul-darbar-im": {
    name: "Istanbul Darbar",
    slug: "istanbul-darbar-im",
    headline: "Positioning Istanbul Darbar as a Destination for Authentic Dining Experiences.",
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
    InstagramLink: "https://www.instagram.com/istanbuldarbar",

    intro: [
      "How influencer storytelling highlighted Istanbul Darbar's rich flavors, culture, and hospitality.",
      "Dining decisions are increasingly shaped by digital discovery. Our influencer campaign showcased Istanbul Darbar's menu, ambiance, and cultural authenticity through immersive content. This helped expand brand reach and drive greater interest among food enthusiasts.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 12, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 6.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 12, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 9, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 851, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/Id-im-1.mp4", link: "https://www.instagram.com", caption: "@nukkadexpress" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/Id-im-2.mp4", link: "https://www.instagram.com", caption: "@henna_by_asiya_official" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/Id-im-3.mp4", link: "https://www.instagram.com", caption: "@wajid.shaikh.18" },
    ],
  },
  "francos-pizzeria-im": {
    name: "Francos Pizzeria",
    slug: "francos-pizzeria-im",
    headline: "Turning Francos Pizzeria into a Social Media-Worthy Pizza Destination.",
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
    InstagramLink: "https://www.instagram.com/francospizzeriaindia",

    intro: [
      "How creator-led content helped Francos Pizzeria engage food lovers and strengthen brand visibility.",
      "Great food deserves great storytelling. Through influencer partnerships, we showcased Francos Pizzeria's signature pizzas, craftsmanship, and customer experience. The campaign drove meaningful engagement and positioned the brand among pizza enthusiasts.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 12, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 8.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 32, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 16, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 851, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/fp-im-1.mp4", link: "https://www.instagram.com", caption: "@naziyaandimran" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/fp-im-2.mp4", link: "https://www.instagram.com", caption: "@explorewithrohit_" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/fp-im-3.mp4", link: "https://www.instagram.com", caption: "@gems_of_maharashtra" },
    ],
  },
  "mnm-im": {
    name: "MNM",
    slug: "mnm-im",
    headline: "Positioning MNM as a Fashion Brand for Modern Self-Expression.",
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
    InstagramLink: "https://instagram.com/swissein",

    intro: [
      "How creator partnerships helped MNM connect with style-conscious audiences and build stronger brand affinity.",
      "Fashion is influenced by culture, community, and inspiration. Through influencer collaborations, we showcased MNM's collections in authentic lifestyle settings, helping the brand increase visibility, engagement, and relevance among its target audience.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 6, suffix: "+", detail: "Creators onboarded every month" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/mnm-im-1.mp4", link: "https://www.instagram.com", caption: "@zoya_memon78" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/mnm-im-2.mp4", link: "https://www.instagram.com", caption: "@nilofar_smvlogs_" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/mnm-im-3.mp4", link: "https://www.instagram.com", caption: "@clothingmafiaa" },
    ],
  },
  "aniiche-im": {
    name: "persiana",
    slug: "persiana-im",
    headline: "Amplifying Persiana Brand Presence Through a Celebrity-Led Influencer Marketing Campaign.",
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
  "shama-perfumes-im": {
    name: "Shama Perfumes",
    slug: "shama-perfumes-im",
    headline: "Elevating Shama Perfumes from a Fragrance Brand to a Lifestyle Statement.",
    heroImage: "/media/case-banner.webp",
    services: [
      "Content Strategy",
      "Reels Production",
      "Influencer Management",
      "Community Management",
      "Analytics & Reporting",
    ],
    industry: "Lifestyle",
    year: "2024",
    InstagramLink: "https://www.instagram.com/shamabrothersperfumers",

    intro: [
      "How influencer storytelling helped Shama Perfumes create emotional connections through scent and self-expression.",
      "Fragrances are deeply personal experiences that resonate through storytelling. Our influencer campaign highlighted Shama Perfumes' unique offerings through lifestyle content and authentic creator recommendations. This strengthened brand perception and expanded audience reach.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 12, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 8.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 22, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 8, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 931, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sp-im-1.mp4", link: "https://www.instagram.com", caption: "@chetansinghperfume" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/sp-im-2.mp4", link: "https://www.instagram.com", caption: "@enchantednotes_" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/sp-im-3.mp4", link: "https://www.instagram.com", caption: "@perfumeandme_" },
    ],
  },
  "k-square-im": {
    name: "K-Square",
    slug: "k-square-im",
    headline: "Positioning K-Square Villas as Aspirational Spaces for Modern Living.",
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
    InstagramLink: "https://www.instagram.com/k.squarevillas",

    intro: [
      "How influencer-led content showcased K-Square's luxury lifestyle, architecture, and investment appeal.",
      "Real estate decisions are shaped by both emotion and aspiration. Through strategic creator partnerships, we highlighted K-Square's premium villas, design excellence, and lifestyle benefits. The campaign enhanced brand visibility and generated stronger interest among potential buyers.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 9, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 6.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 12, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 5, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 731, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ksq-im-1.mp4", link: "https://www.instagram.com", caption: "@amrapali.patil" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/ksq-im-2.mp4", link: "https://www.instagram.com", caption: "@fitculturebytanya" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/ksq-im-3.mp4", link: "https://www.instagram.com", caption: "@raina.mehta35" },
    ],
  },
  "lakme-im": {
    name: "Lakme",
    slug: "lakme-im",
    headline: "Strengthening Lakmé's Connection with the Modern Beauty Consumer.",
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
    InstagramLink: "https://www.instagram.com/lakmeindia/",

    intro: [
      "How influencer collaborations amplified Lakmé's presence and inspired audiences through authentic beauty experiences.",
      "Beauty brands thrive when consumers can see products in action. Our campaign leveraged creators across beauty and lifestyle categories to showcase Lakmé's offerings through tutorials, reviews, and everyday use cases. This helped increase engagement and strengthen brand affinity.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 12, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 14.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 52, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 19, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 1851, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/l-im-1.mp4", link: "https://www.instagram.com", caption: "@vaishnaviishetty_" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/l-im-2.mp4", link: "https://www.instagram.com", caption: "@mahimaa_thakur_" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/l-im-3.mp4", link: "https://www.instagram.com", caption: "@miss.bhowmik_" },
    ],
  },
  "pilgrim-im": {
    name: "Pilgrim",
    slug: "pilgrim-im",
    headline: "Accelerating Pilgrim's Growth Through Creator-Led Beauty Conversations.",
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
    InstagramLink: "https://www.instagram.com/discover.pilgrim/",

    intro: [
      "How influencer marketing helped Pilgrim build trust, showcase product benefits, and engage beauty-conscious consumers.",
      "Beauty purchasing decisions are often driven by authenticity and social proof. By partnering with creators who genuinely aligned with the brand, we showcased Pilgrim's products through relatable content that educated, inspired, and encouraged consumer engagement.",
      
    ],

    resultsHeading: "Campaign Impact & Key Outcomes",
    performanceStats: [
      { label: "Creators managed", value: 9, suffix: "+", detail: "Creators onboarded every month" },
      { label: "Total views", value: 8.1, suffix: "M+", detail: "Audience reach" },
      { label: "Total likes", value: 32, suffix: "K", detail: "Total campaign impressions" },
      { label: "Total shares", value: 13, suffix: "K", detail: "Over sustained campaign activity" },
      { label: "Total comments", value: 851, suffix: "+", detail: "Estimated growth contribution" },
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
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/pil-im-1.mp4", link: "https://www.instagram.com", caption: "@janvi.limbachiyaa" },
      { thumb: "/media/services_public_relation.png", videoSrc: "/media/brand-gallery/videos/pil-im-2.mp4", link: "https://www.instagram.com", caption: "@iamsalonii_06" },
      { thumb: "/media/services_talent_management.png", videoSrc: "/media/brand-gallery/videos/pil-im-3.mp4", link: "https://www.instagram.com", caption: "@devikavohra" },
    ],
  },


};