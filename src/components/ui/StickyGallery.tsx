"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const StickyGallery = ({
    leftItems,
    rightItems,
    centerVideoUrl
}: {
    leftItems: string[];
    rightItems: string[];
    centerVideoUrl: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Optional: Add subtle parallax to sides if desired, but user asked for simple scroll
    // keeping it simple for now as requested.

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-20 min-h-[150vh]">

            {/* Left Column - Scrolls Normal */}
            <div className="flex flex-col gap-6 w-full">
                {leftItems.map((src, i) => (
                    <div key={`left-${i}`} className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-gray-100 relative group">
                        <video
                            src={src}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            muted
                            loop
                            autoPlay
                            playsInline
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                ))}
            </div>

            {/* Center Column - Sticky */}
            <div className="relative w-full hidden md:block">
                <div className="sticky top-24 w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                    <video
                        src={centerVideoUrl}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        autoPlay
                        playsInline
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 pt-12 pb-24 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h3 className="text-white font-bold text-2xl uppercase tracking-wider mb-1">Recollectix</h3>
                        <p className="text-gray-200 text-sm font-medium">Where influence meets impact.</p>
                    </div>
                </div>
            </div>

            {/* Right Column - Scrolls Normal */}
            <div className="flex flex-col gap-6 w-full">
                {rightItems.map((src, i) => (
                    <div key={`right-${i}`} className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg bg-gray-100 relative group">
                        <video
                            src={src}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            muted
                            loop
                            autoPlay
                            playsInline
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                ))}
            </div>

        </div>
    );
};
