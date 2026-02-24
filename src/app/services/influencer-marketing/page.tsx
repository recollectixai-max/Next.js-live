"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Target, Users, BarChart, Zap, Search, ShieldCheck } from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import FloatingLines from "@/components/ui/FloatingLines";

export default function InfluencerMarketing() {
    const features = [
        {
            title: "Strategic Planning",
            description: "We develop data-driven strategies aligned with your brand goals to ensure maximum impact and ROI.",
            icon: <Target className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Influencer Vetting",
            description: "Our rigorous vetting process ensures you partner with authentic creators who resonate with your target audience.",
            icon: <Search className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Campaign Management",
            description: "End-to-end management from contract negotiation to content approval and scheduling.",
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Performance Analytics",
            description: "Detailed reporting on reach, engagement, and conversions to measure true campaign success.",
            icon: <BarChart className="w-8 h-8 text-primary" />,
            link: "#"
        }
    ];

    const benefits = [
        "Access to a vast network of vetted influencers",
        "Higher engagement rates compared to traditional ads",
        "Authentic storytelling that builds brand trust",
        "Scalable campaigns for any budget",
        "Full legal and compliance handling"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 w-full h-full z-0">
                    <FloatingLines
                        enabledWaves={["top", "middle", "bottom"]}
                        lineCount={9}
                        lineDistance={5}
                        bendRadius={5}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        Grow Your Brand
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Influencer Marketing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
                    >
                        Connect with authentic voices that resonate with your audience. We bridge the gap between brands and creators to drive real results.
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
                            Start Your Campaign
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
                            More Than Just <span className="text-primary">Likes</span> & <span className="text-primary">Shares</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We believe influencer marketing is about creating genuine connections. It's not just about finding someone with a million followers; it's about finding the <em>right</em> voice that specifically speaks to your potential customers.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our data-driven approach ensures that every partnership is strategic, every piece of content is on-brand, and every campaign delivers measurable ROI.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
                            <Image
                                src="/media/services_influence_marketing.png"
                                alt="Influencer Marketing"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white p-4">
                                <div className="text-4xl font-bold mb-1">3.5x</div>
                                <div className="text-sm opacity-90">Avg. ROI on Campaigns</div>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </section>

            {/* Features / Our Process */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Comprehensive Solutions
                        </h2>
                    </div>
                    <HoverEffect items={features} />
                </div>
            </section>

            {/* Why Us / Impact */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Ready to amplify your brand's voice?
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Join the hundreds of brands that have scaled their presence through our strategic influencer partnerships.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] hover:-translate-y-1 transform"
                        >
                            Let's Talk Strategy
                        </Link>
                    </div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>
            </section>
        </div>
    );
}
