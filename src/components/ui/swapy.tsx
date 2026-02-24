"use client";

import { createSwapy, Swapy } from "swapy";
import { useEffect, useRef } from "react";

type SwapyLayoutProps = {
    children: React.ReactNode;
    id?: string;
    className?: string;
    config?: any;
    onSwap?: (event: any) => void;
};

export function SwapyLayout({
    children,
    id,
    className,
    config = {},
    onSwap,
}: SwapyLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const swapyRef = useRef<Swapy | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            swapyRef.current = createSwapy(containerRef.current, config);

            if (onSwap) {
                swapyRef.current.onSwap(onSwap);
            }
        }

        return () => {
            swapyRef.current?.destroy();
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div ref={containerRef} id={id} className={className}>
            {children}
        </div>
    );
}

type SwapySlotProps = {
    children: React.ReactNode;
    id: string;
    className?: string;
};

export function SwapySlot({ children, id, className }: SwapySlotProps) {
    return (
        <div data-swapy-slot={id} className={className}>
            {children}
        </div>
    );
}

type SwapyItemProps = {
    children: React.ReactNode;
    id: string; // Ensure id is required for items
    className?: string;
};

export function SwapyItem({ children, id, className }: SwapyItemProps) {
    return (
        <div data-swapy-item={id} className={className}>
            {children}
        </div>
    );
}

type DragHandleProps = {
    children?: React.ReactNode;
    className?: string;
};

export function DragHandle({ children, className }: DragHandleProps) {
    return (
        <div data-swapy-handle className={className}>
            {children}
        </div>
    );
}
