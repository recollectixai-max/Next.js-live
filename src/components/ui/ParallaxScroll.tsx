"use client";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
    {
        id: 1,
        url: "/media/influencer_clip_1.mp4",
    },
    {
        id: 2,
        url: "/media/influencer_clip_2.mp4",
    },
    {
        id: 3,
        url: "/media/influencer_clip_3.mp4",
    },
    {
        id: 4,
        url: "/media/influencer_clip_4.mp4",
    },
    {
        id: 5,
        url: "/media/influencer_clip_5.mp4",
    },
    {
        id: 6,
        url: "/media/influencer_clip_6.mp4",
    },
    {
        id: 7,
        url: "/media/influencer_clip_7.mp4",
    },
    {
        id: 8,
        url: "/media/influencer_clip_8.mp4",
    },
    {
        id: 9,
        url: "/media/influencer_clip_9.mp4",
    },
];

export const ParallaxScroll = ({
    className,
}: {
    className?: string;
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [translateYFirst, setTranslateYFirst] = useState(0);
    const [translateYSecond, setTranslateYSecond] = useState(0);
    const [translateYThird, setTranslateYThird] = useState(0);

    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const scrollY = window.scrollY;
        // Calculate parallax offsets
        setTranslateYFirst(scrollY * 0.1); // Slow scrolling
        setTranslateYSecond(-(scrollY * 0.1)); // Reverse direction
        setTranslateYThird(scrollY * 0.1); // Slow scrolling
    }, []);

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const third = Math.ceil(items.length / 3);
    const firstPart = items.slice(0, third);
    const secondPart = items.slice(third, 2 * third);
    const thirdPart = items.slice(2 * third);

    return (
        <div
            className={cn("h-auto items-start overflow-hidden w-full", className)}
            ref={scrollRef}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-4 md:gap-8 px-4 md:px-8 py-20">
                <div className="grid gap-8" style={{ transform: `translateY(${translateYFirst}px)` }}>
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateYFirst }}
                            key={"grid-1" + idx}
                            className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <video
                                src={el.url}
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-8" style={{ transform: `translateY(${translateYSecond}px)` }}>
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateYSecond }}
                            key={"grid-2" + idx}
                            className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <video
                                src={el.url}
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-8" style={{ transform: `translateY(${translateYThird}px)` }}>
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateYThird }}
                            key={"grid-3" + idx}
                            className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <video
                                src={el.url}
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
