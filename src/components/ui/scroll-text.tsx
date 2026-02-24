"use client";

import { motion, useInView, useAnimation, Variant, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

type TextAnimationProps = {
    text: string;
    as?: React.ElementType; // Use ElementType for valid React elements
    classname?: string;
    variants?: Variants;
    direction?: "left" | "right" | "up" | "down";
    letterAnime?: boolean;
    lineAnime?: boolean;
};

export default function TextAnimation({
    text,
    as: Component = "h2", // Default to h2 if not specified
    classname = "",
    variants,
    direction = "up",
    letterAnime = false,
    lineAnime = false,
}: TextAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when 100px into view
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Default variants if none provided
    const defaultVariants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const computedVariants = variants || defaultVariants;

    if (letterAnime) {
        // Split into characters
        const letters = Array.from(text);
        const containerVariants: Variants = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.03, // Animation delay between letters
                },
            },
        };

        return (
            <Component ref={ref} className={classname}>
                <motion.span
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    style={{ display: "inline-block" }} // Ensure span behaves correctly
                >
                    {letters.map((letter, i) => (
                        <motion.span key={i} variants={computedVariants} className="inline-block">
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.span>
            </Component>
        );
    }

    if (lineAnime) {
        // Treating 'lineAnime' as Word stagger for better effect without complex layout
        const words = text.split(" ");
        const containerVariants: Variants = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.1,
                }
            }
        }

        return (
            <Component ref={ref} className={classname}>
                <motion.span
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="inline-block"
                >
                    {words.map((word, i) => (
                        <motion.span key={i} variants={computedVariants} className="inline-block mr-[0.25em]">
                            {word}
                        </motion.span>
                    ))}
                </motion.span>
            </Component>
        )
    }

    // Default: Animate the whole block
    return (
        <Component ref={ref} className={classname}>
            <motion.span
                initial="hidden"
                animate={controls}
                variants={computedVariants}
                className="block"
            >
                {text}
            </motion.span>
        </Component>
    );
}
