"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X, Filter } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function OurWork() {
    // State for filters
    const [selectedWorkCategory, setSelectedWorkCategory] = useState("All");
    const [selectedBrandCategory, setSelectedBrandCategory] = useState("All");
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // The filter tabs (Work Categories)
    const workCategories = [
        "All",
        "Social Media",
        "Influencer Marketing",
        "Website Development",
        "Public Relations"
    ];

    // Client Data (Parsed from Google Sheet)
    const clients = [
        // Social Media & Influencer Rows
        {
            id: "dales-eden-sm",
            name: "Dales Eden",
            link: "https://www.instagram.com/dalesedencakeshop",
            image: "/media/our_work_pics/dale’s eden.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "evorea-sm",
            name: "Evorea",
            link: "https://www.instagram.com/evorea.in/",
            image: "/media/our_work_pics/evorea.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "creamers-sm",
            name: "Creamers",
            link: "https://www.instagram.com/creamerscakesbakes",
            image: "/media/our_work_pics/creamer’s.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "house-of-pasta-sm",
            name: "House of Pasta",
            link: "https://www.instagram.com/thehouseofpasta/",
            image: "/media/our_work_pics/house of pasta.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "beach-house-sm",
            name: "Beach House",
            link: "https://www.instagram.com/thebeachhousegorai",
            image: "/media/our_work_pics/the beach house.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "shawarma-cafe-sm",
            name: "Shawarma Cafe",
            link: "https://www.instagram.com/shawarmacafeindia",
            image: "/media/our_work_pics/Shawarma Cafe.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "cafe-alif-sm",
            name: "Cafe Alif",
            link: "https://www.instagram.com/cafe_alif",
            image: "/media/our_work_pics/Cafe Alif.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: true }
        },
        {
            id: "persiana-sm",
            name: "Persiana",
            link: "https://www.instagram.com/persianaa_royaldining",
            image: "/media/our_work_pics/Persiana.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "bakewills-sm",
            name: "Bakewills",
            link: "https://www.instagram.com/bakewills",
            image: "/media/our_work_pics/Bakewills.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "rare-earth-sm",
            name: "Rare Earth",
            link: "https://www.instagram.com/rareearthcafe",
            image: "/media/our_work_pics/Rare Earth.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "delhi-zaika-sm",
            name: "Delhi Zaika",
            link: "https://www.instagram.com/delhizaikaofficial",
            image: "/media/our_work_pics/Delhi Zaika.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "taipei-sm",
            name: "Taipei",
            link: "https://www.instagram.com/taipei_authentic_asian_cuisine",
            image: "/media/our_work_pics/Taipei.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "ajwa-sm",
            name: "Ajwa",
            link: "https://www.instagram.com/ajwahouseofdryfruits_official",
            image: "/media/our_work_pics/Ajwa.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "d2d-sm",
            name: "D2D",
            link: "https://www.instagram.com/d2d._ent",
            image: "/media/our_work_pics/D2D.png",
            brandCategory: "Hospitality",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "urban-italiano-sm",
            name: "Urban Italiano",
            link: "https://www.instagram.com/urban_italiano_/",
            image: "/media/our_work_pics/Urban Italiano.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "harish-lunch-home-sm",
            name: "Harish Lunch Home",
            link: "https://www.instagram.com/harish_lunch_home",
            image: "/media/our_work_pics/Harish Lunch Home.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "istanbul-darbar-sm",
            name: "Istanbul Darbar",
            link: "https://www.instagram.com/istanbuldarbar",
            image: "/media/our_work_pics/Istanbul Darbar.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "francos-pizzeria-sm",
            name: "Franco's Pizzeria",
            link: "https://www.instagram.com/francospizzeriaindia",
            image: "/media/our_work_pics/Franco's Pizzeria.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "era-sm",
            name: "Era",
            link: "https://www.instagram.com/era.furnishings",
            image: "/media/our_work_pics/Era furnishings.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "shama-perfumes-sm",
            name: "Shama Perfumes",
            link: "https://www.instagram.com/shamabrothersperfumers",
            image: "/media/our_work_pics/Shama Perfumes.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "al-hassan-sm",
            name: "Al Hassan",
            link: "https://www.instagram.com/alhassan_india",
            image: "/media/our_work_pics/Al Hassan.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "meer-azam-sm",
            name: "Meer Azam Perfumes",
            link: "https://www.instagram.com/meerazman_perfumes",
            image: "/media/our_work_pics/Meer Azam Perfumes.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "arbi-perfumes-sm",
            name: "Arbi Perfumes",
            link: "https://www.instagram.com/arbi_perfumes",
            image: "/media/our_work_pics/Arbi Perfumes.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "sparkle-creations-sm",
            name: "Sparkle Creations",
            link: "https://www.instagram.com/spar.kle170",
            image: "/media/our_work_pics/Sparkle Creations.png",
            brandCategory: "Fashion",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "mnm-sm",
            name: "MnM",
            link: "https://www.instagram.com/mnm_garments",
            image: "/media/our_work_pics/MnM.png",
            brandCategory: "Fashion",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "king-choice-sm",
            name: "King Choice",
            link: "https://www.instagram.com/kingchoice_01",
            image: "/media/our_work_pics/King Choice.png",
            brandCategory: "Fashion",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "royal-homes-sm",
            name: "Royal Homes",
            link: "https://www.instagram.com/royalhomeslonavla",
            image: "/media/our_work_pics/Royal Homes.png",
            brandCategory: "Real Estate",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "wens-sm",
            name: "Wens",
            link: "https://www.instagram.com/wens.property",
            image: "/media/our_work_pics/Wens.png",
            brandCategory: "Real Estate",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "reality-route-sm",
            name: "Reality Route",
            link: "https://www.instagram.com/realty_route",
            image: "/media/our_work_pics/Reality Route.png",
            brandCategory: "Real Estate",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "veena-developers-sm",
            name: "Veena Developers",
            link: "https://www.instagram.com/veena_developers",
            image: "/media/our_work_pics/Veena Developers.png",
            brandCategory: "Real Estate",
            services: { socialMedia: false, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "irth-umar-sm",
            name: "IRTH Umar",
            link: "https://www.instagram.com/irth.umar",
            image: "/media/our_work_pics/IRTH Umar.png",
            brandCategory: "Real Estate",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "global-gypsum-sm",
            name: "Global Gypsum",
            link: "https://www.instagram.com/globalgypsumindia",
            image: "/media/our_work_pics/Global Gypsum.png",
            brandCategory: "Architecture",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "design-matters-sm",
            name: "Design Matters",
            link: "https://www.instagram.com/designmattersarchitects_",
            image: "/media/our_work_pics/Design Matters.png",
            brandCategory: "Architecture",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "yq-design-sm",
            name: "YQ Design",
            link: "https://www.instagram.com/ygdesignstudio",
            image: "/media/our_work_pics/YQ Design.png",
            brandCategory: "Architecture",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "regnant-interiors-sm",
            name: "Regnant Interiors",
            link: "https://www.instagram.com/regnant_interiors",
            image: "/media/our_work_pics/Regnant Interiors.png",
            brandCategory: "Architecture",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "sop-sm",
            name: "SOP",
            link: "https://www.instagram.com/storiesonplate__",
            image: "/media/our_work_pics/SOP.png",
            brandCategory: "Personal Branding",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "anichee-sm",
            name: "Anichee",
            link: "https://www.instagram.com/aniichebyanishashetty",
            image: "/media/our_work_pics/Anichee.png",
            brandCategory: "Personal Branding",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "k-square-sm",
            name: "K Square",
            link: "https://www.instagram.com/k.squarevillas",
            image: "/media/our_work_pics/K Square.png",
            brandCategory: "Personal Branding",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "cruise-career-sm",
            name: "Cruise Career",
            link: "https://www.instagram.com/cruisecareer_",
            image: "/media/our_work_pics/Cruise Career.png",
            brandCategory: "Teaching",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "ryz-nxt-sm",
            name: "Ryz Nxt",
            link: "https://www.instagram.com/ryznxt_",
            image: "/media/our_work_pics/Ryz Nxt.png",
            brandCategory: "Teaching",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "munazah-qazi-sm",
            name: "Munazah Qazi",
            link: "https://www.instagram.com/munazahqazi",
            image: "/media/our_work_pics/Munazah qazi.png",
            brandCategory: "Healthcare",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "herbalist-sm",
            name: "Herbalist",
            link: "https://www.instagram.com/theherbalist_wellness",
            image: "/media/our_work_pics/Herbalist.png",
            brandCategory: "Healthcare",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },

        // Website Rows
        {
            id: "baryal-web",
            name: "Baryal",
            link: "https://www.baryalaroma.com",
            image: "/media/our_work_pics/Baryal.png", // Web Dev image
            brandCategory: "Lifestyle",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        {
            id: "belmont-london-web",
            name: "Belmont London",
            link: "https://belmontlondon.com/",
            image: "/media/our_work_pics/Belmont london.png",
            brandCategory: "Real Estate",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        {
            id: "ecofacade-web",
            name: "Ecofacade",
            link: "https://ecofacadeksa.com/",
            image: "/media/our_work_pics/ecofacade.png",
            brandCategory: "Architecture",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        {
            id: "kikfat-web",
            name: "Kikfat",
            link: "https://kikfat.com/",
            image: "/media/our_work_pics/kikfat.png",
            brandCategory: "Healthcare",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        {
            id: "ajwa-web",
            name: "Ajwa",
            link: "https://ajwadryfruits.com/",
            image: "/media/our_work_pics/Ajwa_web.png",
            brandCategory: "Food & Beverages",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        {
            id: "era-furnishings-web",
            name: "Era Furnishings",
            link: "https://erafurnishings.com/",
            image: "/media/our_work_pics/Era Furnishings Web.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        {
            id: "vertifacts-web",
            name: "Vertifacts",
            link: "https://verifacts.ph/",
            image: "/media/our_work_pics/Vertifacts.png",
            brandCategory: "Technologies",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        },
        // New Clients from Image Updates
        {
            id: "ananta-sm",
            name: "Ananta",
            link: "https://www.instagram.com/anantahospitality",
            image: "/media/our_work_pics/Ananta.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "ghariza-sm",
            name: "Ghariza",
            link: "https://www.instagram.com/ghareeza__",
            image: "/media/our_work_pics/Ghariza.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "hashtag-hospitality-sm",
            name: "Hashtag Hospitality",
            link: "https://www.instagram.com/hashtag_hospitality/",
            image: "/media/our_work_pics/Hashtag Hospitality.png",
            brandCategory: "Hospitality",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "healism-hospitality-sm",
            name: "Healism Hospitality",
            link: "https://www.instagram.com/healism_hospitality",
            image: "/media/our_work_pics/Healism Hospitality.png",
            brandCategory: "Hospitality",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "ira-mumbai-sm",
            name: "Ira Mumbai",
            link: "https://www.instagram.com/iramumbai/",
            image: "/media/our_work_pics/Ira Mumbai.png",
            brandCategory: "Real Estate",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "lakme-sm",
            name: "Lakme",
            link: "https://www.instagram.com/lakmeindia/",
            image: "/media/our_work_pics/Lakme.png",
            brandCategory: "Fashion",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "madina-school-sm",
            name: "Madina School",
            link: "https://www.instagram.com/madinaschools/",
            image: "/media/our_work_pics/Madina School.png",
            brandCategory: "Teaching",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "maxx-value-sm",
            name: "Maxx Value",
            link: "https://www.instagram.com/maxxvaluehotel_midc/",
            image: "/media/our_work_pics/Maxx Value.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "pilgrim-sm",
            name: "Pilgrim",
            link: "https://www.instagram.com/discover.pilgrim/",
            image: "/media/our_work_pics/Pilgrim.png",
            brandCategory: "Fashion",
            services: { socialMedia: true, influencerMarketing: true, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "top10-sm",
            name: "Top 10",
            link: "https://www.instagram.com/top10retail/",
            image: "/media/our_work_pics/Top10.png",
            brandCategory: "Lifestyle",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "unique-developer-sm",
            name: "Unique Developer",
            link: "https://www.instagram.com/unique.developers/",
            image: "/media/our_work_pics/Unique Developer.png",
            brandCategory: "Real Estate",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "wadias-tutorials-sm",
            name: "Wadias Tutorials",
            link: "https://www.instagram.com/wadiastutorials/",
            image: "/media/our_work_pics/Wadias Tutorials.png",
            brandCategory: "Teaching",
            services: { socialMedia: true, influencerMarketing: false, websiteDevelopment: false, publicRelations: false }
        },
        {
            id: "ryznxt-web",
            name: "Ryz Nxt (Web)",
            link: "https://ryznxt.com/",
            image: "/media/our_work_pics/Ryznxt_web.png",
            brandCategory: "Teaching",
            services: { socialMedia: false, influencerMarketing: false, websiteDevelopment: true, publicRelations: false }
        }
    ];

    // Extract unique Brand Categories dynamically
    const brandCategories = ["All", ...Array.from(new Set(clients.map(c => c.brandCategory))).sort()];

    // Filter Logic
    const filteredClients = clients.filter(client => {
        // Work Category Filter
        let matchesWork = false;
        if (selectedWorkCategory === "All") matchesWork = true;
        else {
            switch (selectedWorkCategory) {
                case "Social Media": matchesWork = client.services.socialMedia; break;
                case "Influencer Marketing": matchesWork = client.services.influencerMarketing; break;
                case "Website Development": matchesWork = client.services.websiteDevelopment; break;
                case "Public Relations": matchesWork = client.services.publicRelations; break;
                default: matchesWork = true;
            }
        }

        // Brand Category Filter
        const matchesBrand = selectedBrandCategory === "All" || client.brandCategory === selectedBrandCategory;

        return matchesWork && matchesBrand;
    });

    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-yellow-400 selection:text-black">
            {/* Header */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase tracking-tight"
                    >
                        Our Recent Work
                    </motion.h1>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
                        Discover how we've helped businesses across various industries achieve their marketing goals.
                        From brand identity and social media to web design and performance marketing.
                    </p>
                </div>
            </section>

            {/* Work Category Filter (Sticky Top) */}
            <section className="px-4 sm:px-6 lg:px-8 pb-4 sticky top-16 z-40 bg-white/95 backdrop-blur-md pt-4 border-b border-gray-100 shadow-sm transition-all duration-300 flex flex-col gap-4">
                <div className="max-w-7xl mx-auto flex justify-center w-full">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full overflow-x-auto no-scrollbar pb-1 px-1">
                        {workCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedWorkCategory(category)}
                                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex-shrink-0 ${selectedWorkCategory === category
                                    ? "bg-yellow-400 text-black shadow-md scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Filter Trigger (Sticky & Integrated) */}
                <div className="lg:hidden w-full max-w-md mx-auto">
                    <button
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="w-full flex items-center justify-between px-5 py-3 bg-gray-900 text-white rounded-xl font-bold uppercase tracking-wide shadow-md active:scale-95 transition-transform text-sm"
                    >
                        <span>Filter by Industry</span>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-[10px] font-normal normal-case truncate max-w-[100px]">{selectedBrandCategory}</span>
                            <Filter className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </section>

            {/* Main Content Area (Sidebar + Grid) */}
            <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

                    {/* Left Sidebar - Brand Category Filter (Desktop Only) */}
                    <aside className="hidden lg:block w-64 shrink-0 lg:sticky lg:top-48 self-start h-fit overflow-y-auto max-h-[calc(100vh-200px)] no-scrollbar">
                        <h3 className="text-lg font-black uppercase tracking-wide mb-6 text-gray-900 border-b border-gray-200 pb-2">
                            Industry
                        </h3>
                        <div className="flex flex-col gap-2">
                            {brandCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedBrandCategory(category)}
                                    className={`text-left px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedBrandCategory === category
                                        ? "bg-gray-900 text-white shadow-md font-bold"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Right Grid - Portfolio */}
                    <div className="flex-1">
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
                        >
                            {filteredClients.map((client) => (
                                <motion.div
                                    key={client.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="group cursor-pointer"
                                >
                                    <a
                                        href={client.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        {/* Image Container */}
                                        {/* Image Container */}
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-5 relative shadow-sm transition-shadow group-hover:shadow-xl group">
                                            <Image
                                                src={client.image}
                                                alt={client.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                                            {/* Hover Overlay Icon */}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md z-20">
                                                <ArrowUpRight className="w-4 h-4 text-black" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex items-start justify-between border-b border-gray-100 pb-4 group-hover:border-gray-900 transition-colors duration-300">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase mb-1 leading-tight">
                                                    {client.name}
                                                </h3>
                                                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                                                    {client.brandCategory}
                                                </p>
                                            </div>
                                            <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-black transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>

                        {filteredClients.length === 0 && (
                            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                <p className="text-gray-400 text-lg font-medium">No projects found in this category yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Mobile Filter Drawer (Motion Drawer) */}
            <AnimatePresence>
                {isMobileFilterOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="fixed inset-0 bg-black/60 z-50 lg:hidden backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 lg:hidden h-[85vh] flex flex-col shadow-2xl"
                        >
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <h3 className="text-xl font-black uppercase tracking-wide text-gray-900">
                                    Filter Projects
                                </h3>
                                <button
                                    onClick={() => setIsMobileFilterOpen(false)}
                                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-900" />
                                </button>
                            </div>

                            {/* Drawer Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                                            Select Industry
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {brandCategories.map((category) => (
                                                <button
                                                    key={category}
                                                    onClick={() => {
                                                        setSelectedBrandCategory(category);
                                                        setIsMobileFilterOpen(false);
                                                    }}
                                                    className={`w-full text-left px-5 py-4 rounded-xl text-base font-bold transition-all flex justify-between items-center ${selectedBrandCategory === category
                                                        ? "bg-yellow-400 text-black shadow-md"
                                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                                        }`}
                                                >
                                                    <span>{category}</span>
                                                    {selectedBrandCategory === category && (
                                                        <div className="w-2 h-2 rounded-full bg-black" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
