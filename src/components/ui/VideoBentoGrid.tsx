"use client";

import { motion } from "framer-motion";

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

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-black shadow-2xl"
                >
                    <video
                        src="/media/website-display.mp4"
                        className="block w-full aspect-video object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    />
                </motion.div>
            </div>
        </section>
    );
}
