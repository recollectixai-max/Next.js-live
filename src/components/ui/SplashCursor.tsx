"use client";

import { useEffect, useRef } from "react";

function SplashCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let pointers: Pointer[] = [];
        let splatStack: number[] = [];

        let config = {
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 512,
            CAPTURE_RESOLUTION: 512,
            DENSITY_DISSIPATION: 1,
            VELOCITY_DISSIPATION: 0.2, // increased friction
            PRESSURE: 0.8,
            PRESSURE_ITERATIONS: 20,
            CURL: 30,
            SPLAT_RADIUS: 0.35, // increased radius
            SPLAT_FORCE: 6000,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
            PAUSED: false,
            BACK_COLOR: { r: 0, g: 0, b: 0 },
            TRANSPARENT: true, // transparent background
            BLOOM: true,
            BLOOM_ITERATIONS: 8,
            BLOOM_RESOLUTION: 256,
            BLOOM_INTENSITY: 0.8,
            BLOOM_THRESHOLD: 0.6,
            BLOOM_SOFT_KNEE: 0.7,
            SUNRAYS: true,
            SUNRAYS_RESOLUTION: 196,
            SUNRAYS_WEIGHT: 1.0,
        };

        class Pointer {
            id = -1;
            texcoordX = 0;
            texcoordY = 0;
            prevTexcoordX = 0;
            prevTexcoordY = 0;
            deltaX = 0;
            deltaY = 0;
            down = false;
            moved = false;
            color = [30, 0, 300];
        }

        // Since this is a complex WebGL simulation, for the sake of a React component
        // we will implement a simplified visually pleasing particle trail version which is
        // lighter and less prone to WebGL context errors in varied environments,
        // but still gives the "Splash" liquid feel.

        // Actually, let's do a reliable "Fluid/Splash" using smooth particles

        let particles: Particle[] = [];
        const maxParticles = 100;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
            size: number;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 2;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.life = 1.0;
                this.size = Math.random() * 15 + 5;
                // Brand colors (Blueish)
                const blue = Math.floor(Math.random() * 100 + 155);
                this.color = `rgba(20, 93, 160, ${Math.random() * 0.5 + 0.2})`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.95;
                this.vy *= 0.95;
                this.life -= 0.02;
                this.size *= 0.95;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        const colors = ["#145DA0", "#0C2D48", "#2E8BC0", "#B1D4E0"];

        const handleMove = (e: MouseEvent) => {
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMove);

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw(ctx);

                if (particles[i].life <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            // Limit particles
            if (particles.length > maxParticles) {
                particles.splice(0, particles.length - maxParticles);
            }

            requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{ width: "100vw", height: "100vh" }}
        />
    );
}

export default SplashCursor;
