"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Megaphone, ArrowRight, Rss, Newspaper, Shield, Award, MessageSquare, TrendingUp, Globe, Users, BarChart3 } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function PublicRelations() {
    const features = [
        {
            title: "Media Relations",
            description: "Securing impactful coverage in top-tier publications, digital outlets, and broadcast media.",
            icon: <Newspaper className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Crisis Management",
            description: "Proactive strategies and rapid response protection to safeguard your brand's reputation.",
            icon: <Shield className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Thought Leadership",
            description: "Positioning your executives as industry authorities through bylines, speaking ops, and interviews.",
            icon: <Award className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Strategic Communications",
            description: "Crafting clear, compelling messaging that resonates with your stakeholders and drives action.",
            icon: <MessageSquare className="w-8 h-8 text-primary" />,
            link: "#"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <video
                    src="/media/about_clip_2.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        Reputation Management
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Public Relations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
                    >
                        We shape narratives that build trust, authority, and lasting influence. Elevate your brand's story in a noisy world.
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
                            Build Your Authority
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Art of <br /><span className="text-primary">Perception.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            In today's fast-paced digital landscape, your reputation is your most valuable asset. At Recollectix, we don't just get you in the news; we craft the stories that define your brand.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            From launching new products to managing complex crisis situations, our PR experts work tirelessly to ensure your message is heard, understood, and respected by the audiences that matter most.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {["Press Releases", "Media Training", "Crisis Comms", "Brand Launches"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 bg-gray-100">
                            {/* Ideally this would be the PR image, keeping it consistent with file structure */}
                            <Image
                                src="/media/services_public_relation.png"
                                alt="Public Relations Strategy"
                                width={1000}
                                height={1000}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Added: Media Mentions Floating Badge */}
                            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-700">
                                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Global Reach</div>
                                    <div className="text-sm font-bold text-gray-900">25+ Countries</div>
                                </div>
                            </div>

                            {/* Added: Sentiment Analysis Floating Card */}
                            <div className="absolute top-1/3 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[180px] hidden md:block animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-gray-700">Brand Sentiment</span>
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                </div>
                                <div className="flex items-end gap-2">
                                    <div className="text-2xl font-bold text-gray-900">98%</div>
                                    <span className="text-[10px] text-green-600 font-medium mb-1">Positive</span>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full w-[98%] bg-green-500 rounded-full" />
                                </div>
                            </div>

                            {/* Added: Audience Growth Floating Card */}
                            <div className="absolute top-1/3 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[160px] hidden md:block animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="p-1.5 bg-purple-100 rounded-lg text-purple-600">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-bold text-gray-700">Audience</span>
                                </div>
                                <div className="flex items-baseline gap-1 mb-1">
                                    <span className="text-xl font-bold text-gray-900">+12k</span>
                                    <span className="text-[10px] text-gray-400">new/mo</span>
                                </div>
                                <div className="flex gap-0.5 items-end h-6 mt-1">
                                    {[40, 60, 45, 70, 85, 95].map((h, i) => (
                                        <div key={i} className="w-full bg-purple-500 rounded-t-sm" style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }} />
                                    ))}
                                </div>
                            </div>

                            {/* Added: Live Coverage Indicator */}
                            <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 animate-in fade-in zoom-in duration-500">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                Live Coverage
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        <Megaphone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Amplified Reach</div>
                                        <div className="text-sm text-gray-600">Strategic storytelling</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            PR Solutions
                        </h2>
                    </div>
                    <HoverEffect items={features} />
                </div>
            </section>

            {/* Stats / Proof */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">500+</div>
                            <div className="text-gray-500 font-medium">Media Placements</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-gray-500 font-medium">Crisis Monitoring</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-gray-500 font-medium">Brand Launches</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <div className="text-gray-500 font-medium">Commitment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Let's tell your story.
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Don't let the market define you. Take control of your narrative with our strategic public relations services.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] hover:-translate-y-1 transform"
                        >
                            Schedule a Consultation
                        </Link>
                    </div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent opacity-30" />
                </div>
            </section>
        </div>
    );
}
