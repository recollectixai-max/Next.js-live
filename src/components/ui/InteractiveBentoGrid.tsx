"use client";

import { SwapyLayout, SwapySlot, SwapyItem } from "@/components/ui/swapy";
import { Users, Star, MousePointerClick, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

// Service Card Components with Swapy-like Design

export function InfluencerCard() {
    return (
        <div className="bg-emerald-600 rounded-xl h-full p-6 flex flex-col justify-between shadow-md relative overflow-hidden group select-none cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-start relative z-10">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <Users className="w-8 h-8 text-white" />
                </div>
                <Link href="/services/influencer-marketing" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                </Link>
            </div>

            {/* Visual Content */}
            <div className="absolute right-4 top-20 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md w-48 hidden md:block group-hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-emerald-600" />
                        <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-emerald-600" />
                        <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-emerald-600" />
                    </div>
                    <span className="text-white text-xs font-bold">+120</span>
                </div>
                <div className="h-1.5 bg-emerald-800/50 rounded-full overflow-hidden mb-2">
                    <div className="h-full w-[85%] bg-emerald-200" />
                </div>
                <div className="flex justify-between items-center text-white text-xs">
                    <span className="opacity-80">Campaign Reach</span>
                    <span className="font-bold text-emerald-100">2.4M</span>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-2">Influencer Marketing</h3>
                <p className="text-emerald-100 font-medium">Strategy, outreach, and management.</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

            {/* Added: Trend Graph Line */}
            <svg className="absolute bottom-0 left-0 w-full h-24 text-emerald-800/20 group-hover:text-emerald-800/30 transition-colors pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 30 Q 10 25, 20 30 T 40 20 T 60 25 T 80 10 T 100 15 V 40 H 0 Z" fill="currentColor" />
            </svg>
        </div>
    );
}

export function TalentCard() {
    return (
        <div className="bg-purple-400 rounded-xl h-full p-6 flex flex-col justify-between shadow-md relative overflow-hidden group select-none cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-start relative z-10">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <Star className="w-8 h-8 text-white" />
                </div>
                <Link href="/services/talent-management" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                </Link>
            </div>

            {/* Visual Content */}
            <div className="absolute right-4 top-20 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-md w-auto group-hover:-translate-y-1 transition-transform">
                <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-yellow-300 fill-yellow-300" />)}
                    </div>
                    <span className="text-purple-100 text-xs font-bold">5.0</span>
                </div>
                <div className="text-white font-bold text-sm">Top Tier Talent</div>
                <div className="text-purple-100 text-[10px] mb-2">Exclusive Roster</div>

                {/* Integrated New Signing Badge */}
                <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-[10px] font-medium">New: @alex_cre8s</span>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-2">Talent Management</h3>
                <p className="text-purple-100 font-medium">Nurturing and growing top-tier talent.</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );
}

export function SmmCard() {
    return (
        <div className="bg-yellow-200 rounded-xl h-full p-6 flex flex-col justify-between shadow-md relative overflow-hidden group select-none cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-start relative z-10">
                <div className="bg-black/5 p-3 rounded-xl backdrop-blur-sm">
                    <MousePointerClick className="w-8 h-8 text-black" />
                </div>
                <Link href="/services/social-media-management" className="bg-black/5 hover:bg-black/10 p-2 rounded-full transition-colors">
                    <ArrowRight className="w-5 h-5 text-black" />
                </Link>
            </div>

            {/* Visual Content */}
            <div className="absolute right-[-20px] top-16 w-32 bg-white p-3 rounded-lg shadow-sm rotate-12 group-hover:rotate-6 transition-transform duration-300 opacity-80 group-hover:opacity-100">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                    <div className="h-1.5 w-16 bg-gray-100 rounded" />
                </div>
                <div className="h-16 bg-gray-100 rounded-md mb-2" />
                <div className="flex gap-1.5 align-center">
                    <div className="text-red-400 text-[10px]">♥</div>
                    <div className="h-1.5 w-8 bg-gray-100 rounded mt-0.5" />
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-gray-900 text-2xl font-bold mb-2">Social Media</h3>
                <p className="text-gray-700 font-medium">Full-service content and engagement.</p>
            </div>

            {/* Added: Chat Bubbles */}
            <div className="absolute left-4 bottom-16 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <div className="bg-white/80 p-2 rounded-lg rounded-tl-none text-[10px] shadow-sm max-w-[120px]">
                    🔥 Viral content ready!
                </div>
                <div className="bg-blue-500/10 p-2 rounded-lg rounded-bl-none text-[10px] shadow-sm max-w-[120px] ml-4">
                    Let's post it 🚀
                </div>
            </div>
        </div>
    );
}

export function WebDevCard() {
    return (
        <div className="bg-gray-800 rounded-xl h-full p-6 flex flex-col justify-between shadow-md relative overflow-hidden group select-none cursor-grab active:cursor-grabbing">
            <div className="flex justify-between items-start relative z-10">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Code className="w-8 h-8 text-white" />
                </div>
                <Link href="/services/web-development" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                </Link>
            </div>

            {/* Visual Content */}
            <div className="absolute right-6 top-6 bg-gray-900 border border-gray-700 rounded-lg p-3 w-48 font-mono text-[10px] text-green-400 shadow-2xl group-hover:scale-105 transition-transform hidden md:block opacity-90">
                <div className="flex gap-1.5 mb-2 border-b border-gray-800 pb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="space-y-1 mb-2">
                    <div><span className="text-pink-400">const</span> <span className="text-blue-300">app</span> = <span className="text-yellow-300">new</span> App();</div>
                    <div className="pl-4">app.<span className="text-blue-300">optimize</span>({'{'}</div>
                    <div className="pl-8 text-gray-400">speed: <span className="text-orange-300">'100%'</span>,</div>
                    <div className="pl-8 text-gray-400">seo: <span className="text-orange-300">true</span></div>
                    <div className="pl-4">{'}'});</div>
                </div>

                {/* Integrated Status Footer */}
                <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-[8px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                        <span>System Stable</span>
                    </div>
                    <span>v2.4.0</span>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-300 font-medium">Custom, high-performance websites.</p>
            </div>

            {/* Decorative Grid */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="w-full h-full grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="bg-white/50 rounded-sm" />
                    ))}
                </div>
            </div>
        </div>
    );
}

type Item = {
    id: string;
    widgets: React.ReactNode;
    className?: string; // Col span configuration
};

// Start with a nice asymmetrical layout
const initialItems: Item[] = [
    {
        id: "1",
        widgets: <InfluencerCard />,
        className: "col-span-12 md:col-span-8 lg:col-span-8", // Large
    },
    {
        id: "2",
        widgets: <TalentCard />,
        className: "col-span-12 md:col-span-4 lg:col-span-4", // Small vertical/box
    },
    {
        id: "3",
        widgets: <SmmCard />,
        className: "col-span-12 md:col-span-4 lg:col-span-4", // Small
    },
    {
        id: "4",
        widgets: <WebDevCard />,
        className: "col-span-12 md:col-span-8 lg:col-span-8", // Large
    },
];

export default function InteractiveBentoGrid() {
    return (
        <SwapyLayout
            id="swapy-services"
            className="w-full"
            config={{
                swapMode: "hover",
            }}
        >
            <div className="grid w-full grid-cols-12 gap-4 py-4 auto-rows-[300px]">
                {initialItems.map((item) => (
                    <div key={item.id} className={`${item.className} h-full`}>
                        <SwapySlot id={item.id} className="w-full h-full">
                            <SwapyItem id={item.id} className="w-full h-full">
                                {item.widgets}
                            </SwapyItem>
                        </SwapySlot>
                    </div>
                ))}
            </div>
        </SwapyLayout>
    );
}
