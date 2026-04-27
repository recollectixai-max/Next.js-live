export type JobSection =
    | {
        type: "paragraph";
        heading?: string;
        content: string;
    }
    | {
        type: "bullets";
        heading: string;
        items: string[];
    }
    | {
        type: "numbered";
        heading: string;
        items: Array<{
            title: string;
            lines: string[];
        }>;
    }
    | {
        type: "meta";
        items: string[];
    };

export type CareerRole = {
    slug: string;
    title: string;
    location: string;
    cardLocation: string;
    sections: JobSection[];
};

export const careerRoles: CareerRole[] = [
    {
        slug: "business-development",
        title: "Business Development",
        location: "Mumbai, Malad",
        cardLocation: "Mumbai, Malad",
        sections: [
            {
                type: "paragraph",
                heading: "Job Description:-",
                content: "Role Overview:\nResponsible for driving revenue through acquisition of brands for social media management services and leading the sales pipeline.",
            },
            {
                type: "bullets",
                heading: "Key Responsibilities:",
                items: [
                    "Identify and onboard new clients for social media services",
                    "Develop and execute sales strategies to achieve monthly targets",
                    "Lead client meetings, pitches, and presentations",
                    "Build long-term relationships with brand owners and decision-makers",
                    "Coordinate with creative & execution team for proposals",
                    "Track pipeline, conversions, and revenue performance",
                    "Mentor and guide BDEs for lead generation efficiency",
                ],
            },
            {
                type: "bullets",
                heading: "KPIs:",
                items: [
                    "Monthly revenue target (₹ value closed)",
                    "Number of clients onboarded per month",
                    "Conversion rate (lead → client)",
                    "Average deal size",
                    "Client retention / repeat business %",
                    "Sales cycle time",
                ],
            },
            {
                type: "meta",
                items: [
                    "Location: Mumbai, Malad",
                    "Onsite",
                    "Monday to Saturday",
                    "Job Types: Full-time, Permanent",
                    "Work Location: In person",
                ],
            },
        ],
    },
    {
        slug: "social-media-executive",
        title: "Social Media Executive",
        location: "Mumbai, Malad",
        cardLocation: "Mumbai, Malad",
        sections: [
            {
                type: "paragraph",
                heading: "Job description:",
                content:
                    "If you’re someone who thinks in reels, captions, and trends, who notices good content everywhere and instantly imagines how a brand could do it better — then this place might be for you.\n\nHere, social media is not just about scheduling posts. It’s about building ideas, creating content, and being part of the entire creative process. From brainstorming campaigns to standing on shoot days and watching ideas turn into real content — you’ll be part of the journey.",
            },
            {
                type: "bullets",
                heading: "Your Role:",
                items: [
                    "Manage and execute social media accounts for food and product-based brands.",
                    "Plan and schedule reels, posts, stories, and campaign content.",
                    "Write engaging captions and content strategies aligned with brand tone.",
                    "Monitor trends and suggest creative content ideas for brands.",
                    "Coordinate with designers, editors, and the marketing team to ensure consistent brand presence.",
                ],
            },
            {
                type: "paragraph",
                heading: "What makes this role different:",
                content:
                    "You won’t just manage social media from a desk. You will also get the opportunity to be part of shoot days and production, assisting in content planning, creative execution, and making sure the content strategy translates perfectly on camera.",
            },
            {
                type: "bullets",
                heading: "Requirements:",
                items: [
                    "1–2 years experience in social media management or digital marketing.",
                    "Experience handling restaurant, cafe, food, or product brands is preferred.",
                    "Good understanding of Instagram trends, reels, and content planning.",
                    "Strong skills in captions, content ideas, and campaign thinking.",
                    "Ability to coordinate with creative and production teams.",
                ],
            },
            {
                type: "paragraph",
                heading: "A small note before you apply:",
                content:
                    "We believe social media works best when you are involved beyond the screen. If you enjoy creating, planning, and seeing your ideas come alive through real content and shoots, this could be the right place for you.\n\nShare your profile and let’s build something creative together.",
            },
            {
                type: "meta",
                items: [
                    "Job Types: Full-time, Permanent",
                ],
            },
            {
                type: "bullets",
                heading: "Benefits:",
                items: [
                    "Health insurance",
                    "Paid sick time",
                    "Paid time off",
                ],
            },
            {
                type: "meta",
                items: [
                    "Experience:",
                    "Social media marketing: 1 year (Required)",
                    "Work Location: In person",
                ],
            },
        ],
    },
    {
        slug: "video-editor",
        title: "Video Editor",
        location: "Mumbai, Malad",
        cardLocation: "Mumbai, Malad",
        sections: [
            {
                type: "paragraph",
                heading: "About the Role",
                content:
                    "We are seeking a highly skilled and detail-oriented Video Editor to manage end-to-end video production for digital and social media platforms. This role is critical to delivering high-quality content for our clients and requires strong creative, technical, and organizational capabilities.",
            },
            {
                type: "numbered",
                heading: "Key Responsibilities:",
                items: [
                    {
                        title: "Social Media Video Editing",
                        lines: [
                            "Edit short-form videos for platforms such as Instagram Reels, YouTube Shorts, TikTok, and Facebook Reels.",
                            "Ensure videos are engaging, trend-aligned, and platform-optimized.",
                        ],
                    },
                    {
                        title: "Long-Form Video Editing",
                        lines: [
                            "Edit long-form content including YouTube videos, webinars, event coverage, brand films, and training content.",
                            "Maintain storytelling flow and audience engagement.",
                        ],
                    },
                    {
                        title: "Ad Video Production",
                        lines: [
                            "Create high-performing video ads for paid campaigns:",
                            "6-sec bumper ads",
                            "15-sec story ads",
                            "30-sec feed ads",
                            "60-sec awareness videos",
                            "Align edits with campaign objectives and performance metrics.",
                        ],
                    },
                    {
                        title: "Captions & Subtitles",
                        lines: [
                            "Add accurate and visually appealing subtitles to all videos.",
                            "Ensure accessibility and platform compliance.",
                        ],
                    },
                    {
                        title: "Audio Production",
                        lines: [
                            "Perform audio clean-up, noise reduction, and level balancing.",
                            "Enhance voice clarity and ensure proper music usage with licensing compliance.",
                        ],
                    },
                    {
                        title: "Motion Graphics",
                        lines: [
                            "Develop motion elements such as text animations, lower thirds, transitions, logo reveals, and end screens.",
                            "Ensure consistency with brand guidelines.",
                        ],
                    },
                    {
                        title: "Colour Grading",
                        lines: [
                            "Apply professional colour correction and grading for visual consistency and brand alignment.",
                        ],
                    },
                    {
                        title: "Thumbnail Design",
                        lines: [
                            "Design high-converting thumbnails for YouTube and video platforms.",
                            "Ensure alignment with brand identity and content strategy.",
                        ],
                    },
                    {
                        title: "Stock Research",
                        lines: [
                            "Source licensed stock footage, images, and music from approved platforms.",
                            "Ensure copyright and licensing compliance.",
                        ],
                    },
                    {
                        title: "Format Conversion & Delivery",
                        lines: [
                            "Export videos in platform-specific formats and naming conventions.",
                            "Ensure timely and accurate delivery of final outputs.",
                        ],
                    },
                    {
                        title: "File & Footage Management",
                        lines: [
                            "Organize, label, and archive raw footage and project files.",
                            "Maintain a structured and accessible file management system.",
                        ],
                    },
                    {
                        title: "Team Collaboration",
                        lines: [
                            "Work closely with social media executives and account managers.",
                            "Understand project briefs, audience, and content objectives before execution.",
                        ],
                    },
                ],
            },
            {
                type: "bullets",
                heading: "Key Skills & Requirements",
                items: [
                    "Proven experience in video editing for social media and digital platforms",
                    "Proficiency in tools like Adobe Premiere Pro, After Effects, Final Cut Pro, or similar",
                    "Strong understanding of social media trends and video formats",
                    "Basic to advanced motion graphics skills",
                    "Knowledge of colour grading and audio editing",
                    "Creative mindset with attention to detail",
                    "Strong time management and ability to meet deadlines",
                    "Understanding of copyright and licensing for media assets",
                ],
            },
            {
                type: "bullets",
                heading: "Preferred Qualifications",
                items: [
                    "Experience working in a digital marketing agency or media environment",
                    "Knowledge of performance marketing creatives",
                    "Basic graphic design skills (Photoshop/Canva)",
                ],
            },
            {
                type: "meta",
                items: [
                    "Location: Mumbai, Malad (On-site)",
                    "Department: Creative / Content Production",
                    "Reports To: Social Media Manager",
                    "Job Types: Full-time, Permanent",
                    "Work Location: In person",
                ],
            },
        ],
    },
    {
        slug: "telecaller-social-media-sales",
        title: "Telecaller – Social Media Sales",
        location: "Malad, Mumbai",
        cardLocation: "Mumbai, Malad",
        sections: [
            {
                type: "paragraph",
                heading: "Job Summary:",
                content:
                    "We are looking for a dynamic and persuasive Telecaller to drive sales for our social media services. The candidate will be responsible for reaching out to potential clients, explaining our offerings (such as social media management, ads, branding, etc.), and converting leads into paying customers.",
            },
            {
                type: "bullets",
                heading: "Key Responsibilities:",
                items: [
                    "Make outbound calls to potential and existing clients to promote social media services",
                    "Explain company services like social media marketing, content creation, paid ads, and branding",
                    "Generate leads and convert them into sales opportunities",
                    "Follow up with interested prospects via calls, WhatsApp, or email",
                    "Maintain a database of client interactions and update CRM regularly",
                    "Understand client requirements and suggest suitable social media solutions",
                    "Achieve daily/weekly/monthly sales targets",
                    "Coordinate with the internal team for onboarding new clients",
                ],
            },
            {
                type: "bullets",
                heading: "Requirements:",
                items: [
                    "Proven experience as a Telecaller, Sales Executive, or similar role (preferably in digital marketing/social media)",
                    "Excellent communication and convincing skills",
                    "Basic understanding of social media platforms like Instagram, Facebook, LinkedIn, etc.",
                    "Ability to handle rejection and remain motivated",
                    "Good negotiation and closing skills",
                    "Basic computer knowledge (MS Office, CRM tools)",
                ],
            },
            {
                type: "bullets",
                heading: "Preferred Skills:",
                items: [
                    "Experience in selling digital marketing or social media services",
                    "Strong interpersonal skills",
                    "Target-driven and self-motivated attitude",
                ],
            },
            {
                type: "meta",
                items: [
                    "Location: Malad, Mumbai",
                    "Full time onsite",
                    "Job Type: Full-time",
                    "Work Location: In person",
                ],
            },
        ],
    },
];
