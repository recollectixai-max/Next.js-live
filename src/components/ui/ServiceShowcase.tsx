"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 ${isEven ? "" : "lg:flex-row-reverse"
                }`}
        >
            {/* Image Side */}
            <div
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
            </div>

            {/* Text Side */}
            <div
                className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
            >
                <h2
                    className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight"
                >
                    {title}
                </h2>

                <p
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                    {description}
                </p>

                {link && (
                    <div>
                        <Link
                            href={link}
                            className="inline-flex items-center text-primary font-bold hover:underline group"
                        >
                            Learn More
                            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                )}

                {/* Decorative line */}
                <div
                    className="h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mt-8 w-[100px]"
                />
            </div>
        </div>
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
                <ServiceSection
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={service.image}
                    index={index}
                    link={service.link}
                />
            ))}
        </div>
    );
};
