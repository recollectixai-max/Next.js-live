"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Instagram, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";

export default function ClientCaseStudy({ params }: { params: Promise<{ clientId: string }> }) {
    const { clientId } = use(params);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Data Store
    const clientData: Record<string, any> = {
        "dales-eden": {
            name: "Dales Eden",
            category: "Food & Beverages",
            services: ["Rebranding", "Digital Marketing", "Photography"],
            year: "2023",
            website: "https://www.instagram.com/dalesedencakeshop?igsh=dHh0YjJmMno5Y3cx",
            description: "Dales Eden is a premium cake shop known for its exquisite designs and delectable flavors.",
            story: "Dales Eden needed a digital makeover to match the elegance of their cakes. We revamped their online presence, focusing on high-quality photography and a refined aesthetic. The result was a significant increase in online orders and brand recognition in the local market.",
            heroImage: "/media/services_talent_management.png", // Valid placeholder
            gallery: [
                "/media/services_talent_management.png",
                "/media/services_web_development.png",
                "/media/services_public_relation.png"
            ]
        },
        // Fallback for other IDs
        "default": {
            name: "Project Name",
            category: "Industry",
            services: ["Service 1", "Service 2"],
            year: "2024",
            website: "#",
            description: "A transformative project that redefined the industry standards.",
            story: "Detailed case study content would go here, explaining the challenge, solution, and impact of the work delivered.",
            heroImage: "/media/brand.png",
            gallery: ["/media/brand.png", "/media/brand_2.png"]
        }
    };

    const client = clientData[clientId] || clientData["default"];

    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-black selection:text-white">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
                <Link href="/our-work" className="text-sm font-bold uppercase tracking-widest flex items-center hover:opacity-70 transition-opacity">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                </Link>
                <div className="text-sm font-bold uppercase tracking-widest">{client.category}</div>
            </nav>

            {/* Hero Image */}
            <div className="relative h-[80vh] w-full overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
                    <Image
                        src={client.heroImage}
                        alt={client.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none"
                    >
                        {client.name}
                    </motion.h1>
                </div>
            </div>

            {/* Content Section */}
            <section className="px-4 md:px-16 py-24 max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-12">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Services</h3>
                            <ul className="space-y-2 text-lg font-medium">
                                {client.services.map((service: string) => (
                                    <li key={service} className="border-b border-gray-100 pb-2">{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Year</h3>
                            <p className="text-lg font-medium">{client.year}</p>
                        </div>
                        {client.website && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Link</h3>
                                <a
                                    href={client.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-lg font-bold hover:underline decoration-2 underline-offset-4"
                                >
                                    <Instagram className="w-5 h-5 mr-2" />
                                    View Project <ArrowUpRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
                            {client.description}
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none mb-16">
                            <p>{client.story}</p>
                        </div>

                        {/* Gallery */}
                        <div className="space-y-12" ref={containerRef}>
                            {client.gallery.map((img: string, i: number) => (
                                <div key={i} className="relative aspect-video rounded-sm overflow-hidden bg-gray-100">
                                    <Image
                                        src={img}
                                        alt={`${client.name} showcase ${i + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project / Footer Nav */}
            <section className="border-t border-gray-100 py-32 px-4 text-center hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer group">
                <Link href="/our-work" className="block">
                    <span className="text-xs font-bold uppercase tracking-widest mb-4 block text-gray-400 group-hover:text-gray-500">Next Case</span>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                        View All Work
                    </h2>
                </Link>
            </section>
        </div>
    );
}
