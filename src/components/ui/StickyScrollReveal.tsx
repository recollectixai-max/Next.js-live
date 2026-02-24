"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="relative w-full flex justify-center space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4 w-full">
                <div className="max-w-2xl w-full pr-10">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-40 lg:my-60 first:mt-20 last:mb-96">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight break-words"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-lg lg:text-2xl text-gray-600 max-w-lg leading-relaxed font-light"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                className={cn(
                    "hidden lg:block h-[30rem] w-[40rem] rounded-xl bg-white sticky top-32 overflow-hidden shadow-2xl border-4 border-gray-100",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};
