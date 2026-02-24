"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface ImageMouseTrailProps {
    children: React.ReactNode;
    items: string[];
    maxNumberOfImages?: number;
    distance?: number;
    imgClass?: string;
    fadeAnimation?: boolean;
}

export default function ImageMouseTrail({
    children,
    items,
    maxNumberOfImages = 5,
    distance = 20,
    imgClass = "w-40 h-48",
    fadeAnimation = true,
}: ImageMouseTrailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const refs = useRef<(HTMLImageElement | null)[]>([]);

    // Initialize refs array to match items length
    // We need to ensure refs.current has enough slots. 
    // Actually, we can just assign them in the render loop ref callback.

    const currentGlobalIndex = useRef(0);
    const lastPosition = useRef({ x: 0, y: 0 });

    const activate = (image: HTMLImageElement, x: number, y: number) => {
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (!containerRect) return;

        const relativeX = x - containerRect.left;
        const relativeY = y - containerRect.top;

        image.style.left = `${relativeX}px`;
        image.style.top = `${relativeY}px`;
        image.style.zIndex = ((currentGlobalIndex.current % items.length) + 1).toString();

        image.dataset.status = "active";

        if (fadeAnimation) {
            setTimeout(() => {
                image.dataset.status = "inactive";
            }, 3000); // 3s timeout for auto disappear
        }

        lastPosition.current = { x, y };
    };

    const deactivate = (image: HTMLImageElement) => {
        image.dataset.status = "inactive";
    };

    const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

        const dx = clientX - lastPosition.current.x;
        const dy = clientY - lastPosition.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > distance) {
            const leadIndex = currentGlobalIndex.current % items.length;
            const lead = refs.current[leadIndex];

            // Deactivate tail based on maxNumberOfImages
            // Calculate indices carefully. 
            // If we want max N active, we deactivate the one that was activated N steps ago?
            // Actually, if we cycle through M items, and N < M, we don't strictly *need* to deactivate tail if M is large enough, 
            // allowing timeout to handle it. 
            // But if N is small, we should deactivate to enforce trail length.
            // The reference code used (globalIndex - 5).

            if (maxNumberOfImages > 0) {
                // Wrap logic for negative indices
                const tailIndex = (currentGlobalIndex.current - maxNumberOfImages) % items.length;
                // JS modulo on negative numbers can be negative.
                const normalizedTailIndex = tailIndex < 0 ? tailIndex + items.length : tailIndex;

                const tail = refs.current[normalizedTailIndex];
                if (tail) deactivate(tail);
            }

            if (lead) activate(lead, clientX, clientY);

            currentGlobalIndex.current++;
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleOnMove}
            onTouchMove={handleOnMove}
            className="relative overflow-hidden w-full h-full"
        >
            {/* Children Layer */}
            <div className="relative z-10 w-full h-full pointer-events-auto">
                {children}
            </div>

            {/* Trail Images Layer - Desktop Only */}
            <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
                {items.map((item, index) => (
                    <img
                        key={index}
                        ref={(el) => { refs.current[index] = el; }}
                        className={cn(
                            "absolute object-cover transition-all duration-500 ease-out",
                            "scale-0 opacity-0",
                            "data-[status='active']:scale-100 data-[status='active']:opacity-100",
                            "data-[status='active']:ease-out", // Smoother entry
                            "-translate-x-1/2 -translate-y-1/2", // Center on cursor
                            imgClass
                        )}
                        data-index={index}
                        data-status="inactive"
                        src={item}
                        alt={`trail-image-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
