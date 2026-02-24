"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code, ArrowRight, Laptop, Smartphone, Search, Rocket, Database, Layers } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function WebDevelopment() {
    const features = [
        {
            title: "Custom Development",
            description: "Tailor-made websites built from scratch to meet your specific business requirements and brand identity.",
            icon: <Code className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "Responsive Design",
            description: "Fluid layouts that look and perform perfectly on every device, from mobile phones to large desktop screens.",
            icon: <Smartphone className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "SEO Optimization",
            description: "Built-in technical SEO best practices to ensure your site ranks higher and attracts organic traffic.",
            icon: <Search className="w-8 h-8 text-primary" />,
            link: "#"
        },
        {
            title: "High Performance",
            description: "Lightning-fast load times and optimized core web vitals for superior user experience and retention.",
            icon: <Rocket className="w-8 h-8 text-primary" />,
            link: "#"
        }
    ];

    const techStack = [
        "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <BackgroundBeamsWithCollision className="h-[60vh] md:h-[70vh]">
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        Digital Transformation
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        Web Development
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto"
                    >
                        We build high-performance, visually stunning websites that not only look good but drive conversions and business growth.
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
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </BackgroundBeamsWithCollision>

            {/* Introduction */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-gray-100">
                            <Image
                                src="/media/services_web_development.png"
                                alt="Web Development"
                                width={1000}
                                height={600}
                                className="w-full h-auto"
                            />
                            {/* Overlay UI Mockup Element */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <Rocket className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Performance Score</div>
                                        <div className="text-xs text-gray-500">Core Web Vitals</div>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold text-green-600">99/100</div>
                            </div>
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Build Your Digital <br /><span className="text-primary">Headquarters.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Your website is the face of your business. We combine cutting-edge technology with award-winning design to create digital experiences that capture attention and convert visitors into loyal customers.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Whether you need a simple landing page or a complex e-commerce platform, our team of expert developers and designers brings your vision to life with pixel-perfect precision.
                        </p>

                        <div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 block">Our Tech Stack</span>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">What We Deliver</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Web Solutions
                        </h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature) => (
                            <GridItem
                                key={feature.title}
                                area="col-span-1"
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Development Process</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Discovery", desc: "Understanding your goals and requirements." },
                        { step: "02", title: "Design", desc: "Creating wires and high-fidelity UI mockups." },
                        { step: "03", title: "Develop", desc: "Clean coding with modern frameworks." },
                        { step: "04", title: "Launch", desc: "Testing, optimization, and deployment." }
                    ].map((item, i) => (
                        <div key={i} className="relative p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-shadow group">
                            <div className="text-6xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">
                                {item.step}
                            </div>
                            <div className="relative z-10 pt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <Layers className="w-16 h-16 text-white/50 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Ready to launch your project?
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Let's build something extraordinary together. Contact us today for a free consultation and quote.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.7)] hover:-translate-y-1 transform"
                        >
                            Get A Quote
                        </Link>
                    </div>
                    {/* Decorative waves */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-white/5 skew-y-3 translate-y-10" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-white/10 -skew-y-3 translate-y-20" />
                </div>
            </section>
        </div>
    );
}

interface GridItemProps {
    area?: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-white border-gray-100 shadow-sm">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-100 p-2 bg-gray-50">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 font-sans text-xl font-semibold text-gray-900">
                                {title}
                            </h3>
                            <p className="font-sans text-sm text-gray-600">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
