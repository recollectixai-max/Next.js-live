"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, TrendingUp, Handshake, Briefcase, Camera, Mic2, Globe } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function TalentManagement() {
    const features = [
        {
            title: "Brand Partnerships",
            description: "We connect you with world-class brands that align with your personal brand and values.",
            icon: <Handshake className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Growth Strategy",
            description: "Data-backed content strategies to exponentially grow your audience across all platforms.",
            icon: <TrendingUp className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "360° Management",
            description: "From contract negotiation and legal to PR and daily scheduling, we handle it all.",
            icon: <Briefcase className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Content Production",
            description: "Access to professional production resources, studios, and editing teams to elevate your content.",
            icon: <Camera className="w-8 h-8 text-primary" />,
            link: "#"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <video
                    src="/media/influencer_clip_6.mp4"
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
                        For Creators & Influencers
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Talent Management
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
                    >
                        We handle the business, so you can focus on creating. Elevating the careers of the next generation of icons.
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
                            Join Our Roster
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Introduction */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/media/services_talent_management.png"
                                alt="Talent Management"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white p-4">
                                <div className="text-xl font-medium mb-2 opacity-90">Unlock Your Potential</div>
                                <div className="text-3xl font-bold">Build Your Legacy</div>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            You Create. <br /><span className="text-primary">We Handle the Rest.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Navigating the digital landscape is complex. At Recollectix, we act as your strategic partner, negotiating contracts, managing your schedule, and identifying new revenue streams that you might not even know exist.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our goal is simple: to turn your passion into a sustainable, thriving career while protecting your interests and personal brand every step of the way.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                                <Globe className="w-8 h-8 text-primary mb-2" />
                                <span className="font-bold text-gray-900">Global Reach</span>
                            </div>
                            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                                <Mic2 className="w-8 h-8 text-primary mb-2" />
                                <span className="font-bold text-gray-900">PR & Media</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">What We Do</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Services for Talent
                        </h2>
                    </div>
                    <HoverEffect items={features} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <Star className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Are you the next big thing?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            We are always looking for exceptional talent with unique voices. If you're ready to take your career to the next level, we want to hear from you.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(20,93,160,0.5)] hover:shadow-[0_0_60px_-15px_rgba(20,93,160,0.7)] hover:-translate-y-1 transform"
                        >
                            Apply for Representation
                        </Link>
                    </div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>
            </section>
        </div>
    );
}
