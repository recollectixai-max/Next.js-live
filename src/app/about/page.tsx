"use client";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { MoveRight, Star, Quote } from "lucide-react";
import Link from "next/link";
import AntigravityBackground from "@/components/ui/AntigravityBackground";
import { CountUp } from "@/components/ui/CountUp";
import { SplitTextReveal } from "@/components/ui/ScrollReveal";

import ImageMouseTrail from "@/components/ui/mousetrail";

const mousetrailImages = Array.from({ length: 10 }, (_, i) => `/media/mousetrail_imgs/${i + 1}.png`);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 1. Initial State: Text Fades Out (0 - 10%)
    const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const introScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

    // 2. Logo Animation: Scale Up (0-20%), Move & Scale Down (20-80%)
    // Using viewport units to move from Center to Top-Left
    const logoScale = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1.2, 0.5]); // Final scale matches h-20 navbar logo size
    const logoX = useTransform(scrollYProgress, [0.2, 0.8], ["0vw", "-32vw"]); // Improved centering logic
    const logoY = useTransform(scrollYProgress, [0.2, 0.8], ["0vh", "-45vh"]); // Move to top navbar vertical center (h-20)

    // 3. Right Side Text Reveal (20-80%)
    const textProgress = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "0%"]);

    // Vision Section Scroll Progress
    const visionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: visionProgress } = useScroll({
        target: visionRef,
        offset: ["start 0.8", "center"]
    });

    // Sticky Scroll Content (Static Data for later sections, unchanged)
    const team = [
        { name: "Faheem Sheikh", role: "Founder & CEO", image: "/media/team_pics/ceo_faheem_sheikh.webp", initial: "F" },
        { name: "Zainul Shah", role: "Partner", image: "/media/team_pics/partner_zainul_shah.webp", initial: "Z" },
        { name: "Aysha Shaikh", role: "Manager", image: "/media/team_pics/manager_aysha_shaikh.webp", initial: "A" },
        { name: "Farhan Sultan", role: "AI Engineer", image: "/media/team_pics/ai_engineer_farhan_sultan.png", initial: "F" },
        { name: "Omkar Poojari", role: "Production Manager", image: "/media/team_pics/dop_omkar_poojari.webp", initial: "O" },
    ];

    return (
        <div className="bg-white">

            {/* 1. ANIMATED HERO SECTION (300vh scroll track) */}
            <div ref={containerRef} className="h-[300vh] relative">

                {/* Sticky Viewport */}
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
                    <AntigravityBackground
                        count={800} // Slightly reduced count for performance
                        magnetRadius={5}
                        ringRadius={5}
                        waveSpeed={0.8}
                        waveAmplitude={0.4}
                        particleSize={0.6}
                        lerpSpeed={0.12}
                        color="#0c08fd"
                        autoAnimate={true}
                        particleVariance={1}
                        rotationSpeed={1}
                        depthFactor={1.7}
                        pulseSpeed={2.8}
                        particleShape="sphere"
                        fieldStrength={10.9}
                        className="absolute inset-0 pointer-events-none opacity-40 z-0"
                    />

                    {/* SCENE CONTAINER */}
                    <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center z-10">

                        {/* LEFT: Logo Animation */}
                        <motion.div
                            style={{
                                scale: logoScale,
                                x: logoX,
                                y: logoY,
                                zIndex: 100000, // Ensuring it stays above Navbar
                                position: 'relative'
                            }}
                            className="absolute z-[100000] flex items-center justify-center origin-center"
                        >
                            <div className="relative w-[300px] md:w-[600px] h-[100px] md:h-[200px]">
                                <Image
                                    src="/media/logo.png"
                                    alt="Recollectix Media"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* LEFT SIDE: Decorative Graphics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute left-0 top-0 h-full w-1/2 pointer-events-none hidden md:block"
                        >
                            {/* Floating Circle 1 */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/10 blur-xl"
                            />

                            {/* Floating Circle 2 */}
                            <motion.div
                                animate={{
                                    y: [0, 30, 0],
                                    x: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400/15 to-primary/20 blur-2xl"
                            />

                            {/* Geometric Square */}
                            <motion.div
                                animate={{
                                    rotate: [0, 90, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-1/2 left-1/5 w-16 h-16 border-2 border-primary/30 rotate-45"
                            />

                            {/* Small Dot Pattern */}
                            <div className="absolute top-1/3 left-1/2 grid grid-cols-3 gap-3">
                                {[...Array(9)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                        className="w-2 h-2 rounded-full bg-primary/40"
                                    />
                                ))}
                            </div>

                            {/* Gradient Blob */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 45, 0],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"
                            />
                        </motion.div>

                        {/* CENTER Top: WE ARE (Above Logo) */}
                        <motion.div
                            style={{ opacity: introOpacity, scale: introScale }}
                            className="absolute text-center -mt-40 md:-mt-64 pointer-events-none z-[100001]"
                        >
                            <h2 className="text-sm md:text-base font-bold tracking-[0.5em] text-gray-400 uppercase">
                                WE ARE
                            </h2>
                        </motion.div>

                        {/* CENTER Bottom: Slogan (Below Logo) */}
                        <motion.div
                            style={{ opacity: introOpacity, scale: introScale }}
                            className="absolute text-center mt-40 md:mt-64 pointer-events-none z-[100001]"
                        >
                            <h3 className="text-2xl md:text-4xl font-light text-gray-600 tracking-tight">
                                The Agency for the Digital Age.
                            </h3>
                        </motion.div>

                        {/* RIGHT: Scroll Reveal Text (Appears) */}
                        <motion.div
                            style={{ opacity: textOpacity }}
                            className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 pointer-events-none bg-white/80 backdrop-blur-sm md:bg-transparent"
                        >
                            <div className="max-w-xl text-left">
                                <h3 className="text-gray-400 font-bold uppercase tracking-widest mb-8 text-sm">
                                    Our Philosophy
                                </h3>
                                <div className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                    <SplitTextReveal
                                        text="We create digital experiences that define brands. Innovation is our language, impact is our currency."
                                        progress={textProgress}
                                        className="text-gray-900"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Scroll Indicator (Fades out quickly) */}
                    <motion.div style={{ opacity: introOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-1">
                            <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll-down" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* REST OF PAGE CONTENT (Stats, Team, etc.) */}

            {/* 2. STATS BAR */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 z-20 relative">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/50">
                    {[
                        { label: "Campaigns", value: 100, suffix: "+" },
                        { label: "Influencers", value: 1000, suffix: "+" },
                        { label: "Reach", value: 4, suffix: "M+" },
                        { label: "Satisfaction", value: 100, suffix: "%" },
                    ].map((stat, i) => (
                        <div key={i} className="p-4">
                            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 flex justify-center text-primary">
                                <CountUp to={stat.value} />{stat.suffix}
                            </div>
                            <p className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. VISION & MISSION */}
            <section ref={visionRef} className="bg-black text-white relative overflow-hidden z-20">
                <ImageMouseTrail
                    items={mousetrailImages}
                    maxNumberOfImages={15}
                    distance={80}
                    imgClass="w-28 h-36 sm:w-40 sm:h-48 rounded-2xl object-cover shadow-lg"
                    fadeAnimation={true}
                >
                    <div className="relative py-32 px-4 sm:px-6 lg:px-8 w-full h-full">
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

                        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 relative z-10 items-start">

                            {/* MISSION (Left) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col space-y-8"
                            >
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-primary/50"></span>
                                    Our Mission
                                </span>

                                <SplitTextReveal
                                    text="We’re passionate about helping brands succeed."
                                    className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white/90"
                                    progress={visionProgress}
                                />

                                <div className="w-full h-[1px] bg-white/10 my-4" />
                                <motion.p
                                    style={{ opacity: visionProgress }}
                                    className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
                                >
                                    Our mission is to provide innovative marketing solutions, build strong partnerships, and achieve global impact while maintaining the highest ethical standards.
                                </motion.p>
                            </motion.div>

                            {/* VISION (Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col space-y-8 md:mt-24"
                            >
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-primary/50"></span>
                                    Our Vision
                                </span>

                                <SplitTextReveal
                                    text="To be the world’s most innovative and trusted marketing agency."
                                    className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white"
                                    progress={visionProgress}
                                />

                                <div className="w-full h-[1px] bg-white/10 my-4" />
                                <motion.p
                                    style={{ opacity: visionProgress }}
                                    className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
                                >
                                    Delivering unparalleled results and shaping the future of the industry.
                                </motion.p>
                            </motion.div>

                        </div>
                    </div>
                </ImageMouseTrail>
            </section>

            {/* 4. TEAM SECTION */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden z-20">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
                        <div className="text-center md:text-left">
                            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Our People</span>
                            <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase leading-none tracking-tighter">
                                The Team
                            </h2>
                        </div>
                    </div>

                    {/* CEO Featured Card */}
                    <div className="mb-16">
                        <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* CEO Image */}
                                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                                    <Image
                                        src={team[0].image}
                                        alt={team[0].name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 md:filter md:grayscale md:group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80" />
                                </div>

                                {/* CEO Info & Quote */}
                                <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Founder & CEO</span>
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                                        {team[0].name}
                                    </h3>

                                    {/* Quote */}
                                    <div className="relative">
                                        <svg className="absolute -top-4 -left-2 w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                                        </svg>
                                        <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed pl-8 font-light">
                                            Marketing is like fishing: you cast a wide net and hope for the best.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Team Members - 2x2 Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.slice(1).map((member, index) => (
                            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-[450px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 md:filter md:grayscale md:group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{member.name}</h3>
                                    <p className="text-primary font-medium text-sm uppercase tracking-wider drop-shadow-md bg-black/30 w-fit px-2 py-0.5 rounded backdrop-blur-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className="py-40 bg-gray-50 text-center px-4 relative overflow-hidden z-20">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter">
                        READY?
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-gray-900 text-white text-xl font-bold rounded-full hover:bg-primary transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/30"
                    >
                        Start Project <MoveRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
