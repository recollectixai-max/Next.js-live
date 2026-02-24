"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { RotatingText } from "@/components/ui/RotatingText";

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 md:pb-24 lg:pb-32 xl:pb-48">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center space-y-6 md:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
                                style={{
                                    backgroundImage: 'url(https://recollectix.com/wp-content/uploads/2025/01/ezgif.com-gif-maker.gif)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    color: 'transparent'
                                }}
                            >
                                <span className="block">Recollectix</span>
                                <span className="block">Media</span>
                            </h1>

                            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 flex flex-wrap items-center gap-2 lg:gap-3 py-2">
                                <span>Where brand brilliance meets</span>
                                <RotatingText
                                    texts={["Talent Excellence", "Media Mastery", "Creative Campaigns", "Digital Success"]}
                                    className="text-primary font-bold"
                                    rotationInterval={2500}
                                />
                            </div>

                            <p className="max-w-[600px] text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400 leading-relaxed">
                                We craft compelling narratives and engineer standout campaigns, seamlessly blending media mastery with top-tier talent management.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-col gap-2 min-[400px]:flex-row"
                        >
                            <Link
                                href="/services"
                                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-lg bg-primary px-6 sm:px-8 text-base sm:text-lg font-bold text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Know More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Video/Media */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mx-auto w-full max-w-[500px] lg:max-w-none relative aspect-video lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 mt-8 lg:mt-0"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/media/hero_bg.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-blue-50/50 blur-3xl rounded-l-full translate-x-1/3 opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/3 bg-gray-100/50 blur-3xl rounded-tr-full -translate-x-1/3" />
        </section>
    );
}
