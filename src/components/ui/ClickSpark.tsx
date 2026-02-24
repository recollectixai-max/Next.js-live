"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const ClickSpark = ({
    sparkColor = "#145DA0",
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
}: {
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparks = useRef<
        { x: number; y: number; angle: number; startTime: number }[]
    >([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const draw = (timestamp: number) => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            sparks.current = sparks.current.filter((spark) => {
                const elapsed = timestamp - spark.startTime;
                if (elapsed >= duration) return false;

                const progress = elapsed / duration;
                const easeOut = 1 - Math.pow(1 - progress, 3);

                const distance = easeOut * sparkRadius * 2.5; // multiplier
                const x = spark.x + Math.cos(spark.angle) * distance;
                const y = spark.y + Math.sin(spark.angle) * distance;

                const opacity = 1 - progress;
                const size = sparkSize * (1 - progress);

                ctx.globalAlpha = opacity;
                ctx.fillStyle = sparkColor;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            animationId = requestAnimationFrame(draw);
        };

        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const now = performance.now();

            for (let i = 0; i < sparkCount; i++) {
                const angle = (i / sparkCount) * Math.PI * 2 + Math.random() * 0.5;
                sparks.current.push({ x, y, angle, startTime: now });
            }
        };

        window.addEventListener("click", handleClick);
        animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("click", handleClick);
            cancelAnimationFrame(animationId);
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{ width: "100vw", height: "100vh" }}
        />
    );
};

export default ClickSpark;
