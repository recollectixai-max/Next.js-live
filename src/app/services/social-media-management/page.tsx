"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, BarChart, Users, Zap, MessageSquare, Monitor, PenTool } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

export default function SocialMediaManagement() {
    const features = [
        {
            title: "Social Media Strategy",
            description: "We help you define clear objectives for your brand and create actionable strategies to achieve them.",
            icon: <BarChart className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "Content Creation",
            description: "Our in-house creatives and a network of expert content creators craft engaging, high-impact stories.",
            icon: <PenTool className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "Paid Social Media",
            description: "Our paid experts make sure your content is seen at the right time, in the right place and by the right people.",
            icon: <Zap className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "Daily Management",
            description: "We handle every aspect of your social media presence, from maintaining page hygiene to online response management.",
            icon: <Monitor className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "Online Response Management",
            description: "We monitor and respond to your audience promptly, ensuring your brand remains approachable and professional.",
            icon: <MessageSquare className="w-6 h-6" />,
            link: "#"
        },
        {
            title: "Brand Awareness",
            description: "Our approach enhances your visibility, helping your brand stand out and stay top of mind.",
            icon: <Users className="w-6 h-6" />,
            link: "#"
        },
    ];



    const clients = [
        { name: "Brand 1", logo: "/media/brand.png" },
        { name: "Brand 2", logo: "/media/brand_2.png" },
        { name: "Brand 3", logo: "/media/brand_3.png" },
        { name: "Brand 4", logo: "/media/brand_4.png" },
        { name: "Brand 5", logo: "/media/brand_5.png" },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 z-10" />
                <div className="absolute inset-0 bg-[url('/media/hero_text_bg.gif')] bg-cover opacity-10" />

                <div className="relative z-20 max-w-7xl mx-auto text-center text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-blue-600/30 border border-blue-500/50 text-blue-200 text-sm font-semibold mb-6"
                    >
                        A SOCIAL PARTNER FOR ADVENTUROUS BRANDS
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tight mb-8"
                    >
                        Social Media <span className="text-primary">Management</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Social media is an essential tool for building a brand in today’s digital-first world.
                        Using our expertise in storytelling, a deep understanding of human behaviour, and up-to-date knowledge,
                        we ensure your brand connects with the audience that will love it immediately.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">We get people talking</h2>
                        <p className="text-xl text-primary font-semibold">Make impressions, don’t buy them</p>
                    </div>

                    <HoverEffect items={features} />
                </div>
            </section>

            {/* Clients Marquee */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="mb-10 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Some of Our Clients</h3>
                </div>
                <InfiniteMarquee
                    items={clients.map((c, i) => (
                        <div key={i} className="px-8 opacity-60 hover:opacity-100 transition-opacity">
                            <img src={c.logo} alt={c.name} className="h-12 object-contain" />
                        </div>
                    ))}
                    speed="normal"
                />
                <div className="text-center mt-12">
                    <h3 className="text-3xl font-black text-gray-900 uppercase">
                        From Mumbai to Dubai, We’re here to Elevate Your Brand Globally!
                    </h3>
                </div>
            </section>





            {/* Why Choose Us */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose <span className="text-primary">Recollectix</span>?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            We don’t believe in a one-size-fits-all approach. We tailor every social media strategy to align with your marketing goals and business objectives.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Whether you’re looking to boost brand awareness, gain a competitive edge, or increase sales, our expert team delivers concrete results.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
                        >
                            Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                            <Image
                                src="/media/logo.jpg"
                                alt="Recollectix Culture"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50" />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-gray-900 text-white text-center px-4">
                <h2 className="text-4xl font-black mb-6">BE THE WORD OF EVERY MOUTH</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    We significantly lower user acquisition costs while enhancing user retention through our compelling content.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-transform hover:scale-105"
                >
                    Start Your Journey
                </Link>
            </section>
        </div>
    );
}
