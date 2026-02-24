"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const videos = [
    "/media/influencer_clip_1.mp4",
    "/media/influencer_clip_2.mp4",
    "/media/influencer_clip_3.mp4",
    "/media/influencer_clip_4.mp4",
    "/media/influencer_clip_5.mp4",
    "/media/influencer_clip_6.mp4",
    "/media/influencer_clip_7.mp4",
    "/media/influencer_clip_8.mp4",
    "/media/influencer_clip_9.mp4",
];

export function VideoBentoGrid() {
    return (
        <section className="py-24 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                    >
                        OUR <span className="text-primary">WORK</span>
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See how we bring brands to life with our influencer network.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-4">
                    {videos.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={cn(
                                "relative rounded-2xl overflow-hidden shadow-lg group",
                                i === 3 || i === 6 ? "md:col-span-2" : "" // Make some items span 2 columns for bento feel
                            )}
                        >
                            <video
                                src={src}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                muted
                                loop
                                playsInline
                                onMouseOver={(e) => e.currentTarget.play()}
                                onMouseOut={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
