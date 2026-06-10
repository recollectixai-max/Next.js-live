"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Bus,
    Train,
    Car,
    Layers,
    Monitor,
    ShoppingBag,
    Waves,
    Navigation,
    LayoutGrid,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function OOHAdvertising() {
    const oohChannels = [
        {
            title: "Billboards & DOOH",
            description:
                "High-impact static and digital billboards across major arterials — including the Tiffin Towers 40×40 ft LED set on the Western Express Highway near the airport, and strategic placements along routes leading to your project.",
            icon: <Monitor className="w-8 h-8 text-primary" />,
        },
        {
            title: "Transit Advertising",
            description:
                "Full bus wraps, rear-panel ads, and interior branding on BEST buses operating through BKC, Andheri West, and Bandra East corridors. Also covers cab wraps and autorickshaw rear panels roaming the target catchment.",
            icon: <Bus className="w-8 h-8 text-primary" />,
        },
        {
            title: "Metro Branding",
            description:
                "Inside-coach panels, window strips, and full station branding at platform level — reaching daily commuters on the Mumbai Metro network passing through the Andheri–BKC corridor.",
            icon: <Train className="w-8 h-8 text-primary" />,
        },
        {
            title: "Cinema Advertising",
            description:
                "On-screen slots (10–60 sec with Censor Certificate) and off-screen standees at premium multiplexes: Andheri Citi Mall, Fun Republic, Infiniti Mall, Jio World Drive PVR, Jio Mall, and Bandra West PVR.",
            icon: <Layers className="w-8 h-8 text-primary" />,
        },
        {
            title: "Mall Activations",
            description:
                "10×10, 15×15, and 20×15 ft brand setups at central atriums, entry, and exit points of the suggested mall properties — enabling live demonstrations, sampling, and direct consumer engagement.",
            icon: <ShoppingBag className="w-8 h-8 text-primary" />,
        },
        {
            title: "Juhu Beach LED Vessel",
            description:
                "A 50×15 ft LED screen mounted on a floating vessel anchored off Juhu Beach — one of Mumbai's highest-footfall leisure destinations. Unmissable at sunset hours when the beach sees peak visitor numbers.",
            icon: <Waves className="w-8 h-8 text-primary" />,
        },
        {
            title: "Direction Signage",
            description:
                "Location-based digital direction signs placed at key junctions guiding prospects directly to your project. Reinforces recall at the last mile and reduces drop-off for site visits.",
            icon: <Navigation className="w-8 h-8 text-primary" />,
        },
        {
            title: "Bus Stop Shelters",
            description:
                "Backlit and digital panels at high-dwell bus stops across Andheri West and Bandra East — targeting pedestrians, commuters, and auto/cab users in the immediate neighbourhood.",
            icon: <MapPin className="w-8 h-8 text-primary" />,
        },
    ];

    const keyLocations = [
        { area: "Andheri West", venues: ["Andheri Citi Mall", "Fun Republic", "Infiniti Mall", "WEH Tiffin Towers"] },
        { area: "Bandra East / BKC", venues: ["Jio World Drive PVR", "Jio Mall", "BKC Bus Corridor", "Metro Stations"] },
        { area: "Bandra West", venues: ["Bandra West PVR", "Linking Road Bus Stops", "Cab Wrap Zones"] },
        { area: "Juhu & Vakola", venues: ["Juhu Beach LED Vessel", "Vakola WEH DOOH", "Near Airport Stretch"] },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* ── HERO (unchanged) ── */}
            <BackgroundBeamsWithCollision className="h-[60vh] md:h-[70vh]">
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        Out-of-Home Advertising
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        OOH Advertising
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto"
                    >
                        Dominate Mumbai's streets, transit networks, malls, and beaches with targeted out-of-home campaigns built for maximum reach and recall.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
                        >
                            Plan Your Campaign
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </BackgroundBeamsWithCollision>

            {/* ── INTRODUCTION ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-gray-100">
                            <Image
                                src="/media/ooh.png"
                                alt="OOH Advertising Mumbai"
                                width={1000}
                                height={600}
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <LayoutGrid className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Mumbai Coverage</div>
                                        <div className="text-xs text-gray-500">Andheri West · Bandra East · BKC</div>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-primary">8+ Formats</div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Put Your Brand<br />
                            <span className="text-primary">Everywhere It Matters.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Our Mumbai OOH media plan covers the entire consumer journey — from the moment a prospect wakes up and boards the metro, to the time they unwind at Juhu Beach. Every touchpoint is mapped to Andheri West and Bandra East, Mumbai's most active residential and commercial corridors.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We work with a curated network of premium media properties — BEST buses, BKC bus corridors, Metro stations, mall atriums, cinema screens, and large-format digital billboards — to give your brand an unmistakable presence across the city.
                        </p>
                        <div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 block">Focus Geography</span>
                            <div className="flex flex-wrap gap-3">
                                {["Andheri West", "Bandra East", "BKC", "Juhu", "Vakola / WEH", "Bandra West"].map((loc) => (
                                    <span key={loc} className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                                        {loc}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MEDIA CHANNELS GRID ── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">What We Offer</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            OOH Media Formats
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                            Eight distinct formats, one seamless campaign — designed to intercept your audience at every stage of their day.
                        </p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {oohChannels.map((channel) => (
                            <GridItem
                                key={channel.title}
                                area="col-span-1"
                                icon={channel.icon}
                                title={channel.title}
                                description={channel.description}
                            />
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── KEY LOCATIONS ── */}
            {/* <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Suggested Properties</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Key Locations by Zone
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Each zone is selected to maximise reach among the target audience — home buyers, investors, and lifestyle consumers in Mumbai's western suburbs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keyLocations.map((zone) => (
                        <div
                            key={zone.area}
                            className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl transition-shadow group"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <h3 className="font-bold text-gray-900 text-lg">{zone.area}</h3>
                            </div>
                            <ul className="space-y-2">
                                {zone.venues.map((v) => (
                                    <li key={v} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* ── HOW WE WORK ── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Campaign Process</h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                            From brief to billboard in four straightforward steps.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Brief & Targeting", desc: "Define geography, audience, and campaign objectives for your Mumbai market." },
                            { step: "02", title: "Media Selection", desc: "Choose the right mix of formats — billboards, transit, cinema, malls, or all of the above." },
                            { step: "03", title: "Creative & Production", desc: "Design, print, or produce assets to spec for each media format." },
                            { step: "04", title: "Execute & Monitor", desc: "Deploy across all selected properties with photographic proof-of-execution reports." },
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-shadow group">
                                <div className="text-6xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                                    {item.step}
                                </div>
                                <div className="relative z-10 pt-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EDITORIAL GALLERY ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Our Work</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Campaigns in the Wild
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        A glimpse of OOH executions across Mumbai's most visible media properties.
                    </p>
                </div>

                {/* Editorial grid — asymmetric 3-column layout */}
                <div className="grid grid-cols-12 grid-rows-[auto] gap-3">

                    {/* Row 1 — large hero left + 2 stacked right */}
                    <div className="col-span-12 md:col-span-8 row-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-auto md:min-h-[420px] group">
                        <Image
                            src="/media/juhu-vessel.jpg"
                            alt="Juhu Beach LED Vessel at sunset"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute bottom-5 left-5 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Juhu Beach · LED Vessel
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto group">
                        <Image
                            src="/media/metro.jpg"
                            alt="Metro station platform branding"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Metro Station Branding
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto group">
                        <Image
                            src="/media/billboard-ads.jpg"
                            alt="Tiffin Towers DOOH billboard WEH"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Tiffin Towers · WEH DOOH
                        </span>
                    </div>

                    {/* Row 2 — 3 equal columns */}
                    <div className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden aspect-video group">
                        <Image
                            src="/media/bus-wrap.jpg"
                            alt="Full bus wrap BKC corridor"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Bus Wrap · BKC
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden aspect-video group">
                        <Image
                            src="/media/cinema-ads.jpg"
                            alt="Cinema on-screen advertising"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Cinema · On-Screen
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden aspect-video group">
                        <Image
                            src="/media/mall-ad.jpg"
                            alt="Mall activation atrium setup"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Mall Activation · Atrium
                        </span>
                    </div>

                    {/* Row 3 — wide banner + small */}
                    <div className="col-span-12 md:col-span-5 relative rounded-2xl overflow-hidden aspect-video group">
                        <Image
                            src="/media/cab-wrap.png"
                            alt="Cab wrap advertising Mumbai"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Cab Wrap · Mumbai
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-4 relative rounded-2xl overflow-hidden aspect-video group">
                        <Image
                            src="/media/direction-sign-ads.jpg"
                            alt="Location-based direction signage"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Direction Signage
                        </span>
                    </div>

                    <div className="col-span-12 md:col-span-3 relative rounded-2xl overflow-hidden aspect-video group">
                        <Image
                            src="/media/metro-inside-ads.jpg"
                            alt="Metro inside coach panel ads"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            Metro · Inside Coach
                        </span>
                    </div>

                </div>
            </section>

            {/* ── HIGHLIGHT: JUHU BEACH VESSEL ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gray-50 p-10 lg:p-14 flex flex-col justify-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 w-fit">
                            Signature Format
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            The Juhu Beach<br />
                            <span className="text-primary">LED Vessel</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            A 50×15 ft LED screen mounted on a vessel off Juhu Beach — one of the most unique and talked-about OOH formats in Mumbai. Visible to thousands of beachgoers at sunset, it delivers cinematic brand impact in an environment where audiences are relaxed, attentive, and unhurried.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Peak visibility at evening hours (golden hour & dusk)",
                                "One of Mumbai's most premium and rare media properties",
                                "High shareability — organically photographed by visitors",
                                "Available per day / per week slots",
                            ].map((pt) => (
                                <li key={pt} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative min-h-[300px] bg-gray-200">
                        <Image
                            src="/media/juhu-vessel.jpg"
                            alt="Juhu Beach LED Vessel"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ── CTA (unchanged structure) ── */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <MapPin className="w-16 h-16 text-white/50 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Ready to own Mumbai's streets?
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Let's build a media plan that puts your brand in front of the right audience, at the right time, across the city's most powerful OOH properties.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] hover:-translate-y-1 transform"
                        >
                            Get A Media Plan
                        </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-white/5 skew-y-3 translate-y-10" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-white/10 -skew-y-3 translate-y-20" />
                </div>
            </section>
        </div>
    );
}

interface GridItemProps {
    area?: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-white border-gray-100 shadow-sm">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-100 p-2 bg-gray-50">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 font-sans text-xl font-semibold text-gray-900">
                                {title}
                            </h3>
                            <p className="font-sans text-sm text-gray-600">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
