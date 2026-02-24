"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export const ServiceCard = ({
    title,
    description,
    icon,
    image,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    image?: string;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                {/* Image Section with Overlay */}
                {image && (
                    <div className="relative h-48 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Icon on Image */}
                        <div className="absolute bottom-4 left-4 z-10">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                            >
                                {icon}
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />

                <div className="relative p-8 flex flex-col h-full">
                    {/* Icon (only show if no image) */}
                    {!image && (
                        <div className="mb-6 relative">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg relative z-10"
                            >
                                {icon}
                            </motion.div>
                            <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed flex-grow">
                        {description}
                    </p>

                    {/* Animated bottom accent line */}
                    <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-500" />
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
            </div>
        </motion.div>
    );
};

export const ServicesGrid = ({
    services,
}: {
    services: Array<{
        title: string;
        description: string;
        icon: React.ReactNode;
        image?: string;
    }>;
}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={service.image}
                    index={index}
                />
            ))}
        </div>
    );
};
