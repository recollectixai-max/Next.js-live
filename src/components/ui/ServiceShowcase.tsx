"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VelocityText } from "./VelocityText";

export const ServiceSection = ({
    title,
    description,
    icon,
    image,
    index,
    link,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: string;
    index: number;
    link?: string;
}) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 ${isEven ? "" : "lg:flex-row-reverse"
                }`}
        >
            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
            >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                        />
                    )}
                </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight"
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                    {description}
                </motion.p>

                {link && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        <Link
                            href={link}
                            className="inline-flex items-center text-primary font-bold hover:underline group"
                        >
                            Learn More
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>
                )}

                {/* Decorative line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mt-8"
                />
            </motion.div>
        </motion.div>
    );
};

export const ServicesShowcase = ({
    services,
}: {
    services: Array<{
        title: string;
        description: string;
        icon: React.ReactNode;
        image?: string;
        link?: string;
    }>;
}) => {
    return (
        <div className="space-y-24 lg:space-y-32">
            {services.map((service, index) => (
                <React.Fragment key={index}>
                    <ServiceSection
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        image={service.image}
                        index={index}
                        link={service.link}
                    />

                    {/* Add velocity text after SMM (index 2) and PR (index 3) */}
                    {(index === 2 || index === 3) && (
                        <div className="relative py-12 hidden md:block -mx-[50vw] left-1/2 right-1/2 w-screen overflow-hidden">
                            <VelocityText
                                baseVelocity={2}
                                className="text-6xl md:text-8xl font-black text-primary [&::selection]:bg-black [&::selection]:text-black select-none"
                            >
                                {service.title}
                            </VelocityText>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
