"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    containerRef?: React.RefObject<HTMLElement>;
}

export const ScrollReveal = ({ children, className, containerRef }: ScrollRevealProps) => {
    const element = useRef<HTMLParagraphElement>(null);

    // Use the provided containerRef if available to sync with the parent scroll
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"],
        // If we're inside the sticky container, standard viewport tracking is usually what we want for "reveal on enter"
        // But since the parent is sticky, the "element" position relative to viewport might be static for a while.
        // For this specific complex animation, utilizing the passed scroll progress might be better.
        // However, let's stick to standard opacity reveal first.
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <motion.p
            ref={element}
            style={{ opacity }}
            className={cn("text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-colors", className)}
        >
            {children}
        </motion.p>
    );
};

export const SplitTextReveal = ({ text, className, progress }: { text: string, className?: string, progress: any }) => {
    const words = text.split(" ");
    return (
        <p className={cn("flex flex-wrap gap-x-2 gap-y-1", className)}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} progress={progress} range={[start, end]}>{word}</Word>
                )
            })}
        </p>
    )
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, [range[0], range[1]], [0.1, 1]);
    return (
        <span className="relative">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    )
}

export default ScrollReveal;
