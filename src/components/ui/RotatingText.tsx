"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotatingTextProps {
    texts: string[];
    className?: string;
    rotationInterval?: number;
}

export function RotatingText({
    texts,
    className,
    rotationInterval = 3000,
}: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, rotationInterval);

        return () => clearInterval(interval);
    }, [texts.length, rotationInterval]);

    return (
        <span className={cn("inline-flex relative overflow-hidden h-[1.2em] w-fit align-top", className)}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={texts[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 whitespace-nowrap"
                >
                    {texts[index]}
                </motion.span>
                {/* Invisible spacer to maintain width */}
                <span className="opacity-0 pointer-events-none">
                    {texts.reduce((a, b) => a.length > b.length ? a : b)}
                </span>
            </AnimatePresence>
        </span>
    );
}
