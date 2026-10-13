"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

/**
 * Shinta hero section – single-file React + TypeScript + Tailwind (v3) component.
 * Requires: react, lucide-react, tailwindcss.
 * Usage: import Hero from "./component"; <Hero />
 */

/* ----------------------------- Ribbon ----------------------------- */

const RIBBON_UNIT = "SHORT FORM CONTENT  •  INFLUENCER MARKETING  •  SOCIAL MEDIA MANAGEMENT  •  ";
const RIBBON_PATH = "M -60 615 C 140 745, 420 715, 640 610 S 930 395, 1140 350 S 1420 400, 1580 500";

function Ribbon() {
  const measure = useRef<SVGTextElement>(null);
  const [unitLen, setUnitLen] = useState(0);

  useLayoutEffect(() => {
    if (measure.current) setUnitLen(measure.current.getComputedTextLength());
  }, []);

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 1512 793"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="ribbonFade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.12" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.88" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="ribbonMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1512" height="793">
          <rect width="1512" height="793" fill="url(#ribbonFade)" />
        </mask>
        <path id="ribbonWave" d={RIBBON_PATH} />
      </defs>

      <text ref={measure} className="text-[14px] font-bold" opacity="0" letterSpacing="1" xmlSpace="preserve">
        {RIBBON_UNIT}
      </text>

      <g mask="url(#ribbonMask)">
        <use href="#ribbonWave" fill="none" stroke="#145da0" strokeWidth="38" />
        <text className="fill-[#ffffff] text-[14px] font-bold" letterSpacing="1" dy="5" xmlSpace="preserve">
          <textPath href="#ribbonWave" startOffset="0">
            {unitLen > 0 && (
              <animate attributeName="startOffset" from="0" to={-unitLen} dur="14s" repeatCount="indefinite" />
            )}
            {RIBBON_UNIT.repeat(8)}
          </textPath>
        </text>
      </g>
    </svg>
  );
}

/* --------------------------- Card stack --------------------------- */

export type Slide = {
  video: string;
  gradient: string;
  alt: string;
};

export const defaultSlides: Slide[] = [
  { video: "/tarboush-reel.mp4", gradient: "from-[#5b4a8a] via-[#4a3a78] to-[#2a2142]", alt: "Tarboush campaign reel" },
  { video: "/mak-reel.mp4", gradient: "from-[#7fcbe6] via-[#8fd3ea] to-[#f4a3b8]", alt: "Mak Cakes campaign reel" },
  { video: "/benita-reel-1.mp4", gradient: "from-[#e8899c] via-[#ee9ab0] to-[#cfa0d8]", alt: "Benita Rolls campaign reel" },
];

function CardStack({ slides = defaultSlides, interval = 9500 }: { slides?: Slide[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const n = slides.length;

  const go = (d: number) => setActive((a) => (a + d + n) % n);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), interval);
    return () => clearInterval(id);
  }, [playing, interval, n]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active && playing) {
        void video.play().catch(() => setPlaying(false));
      } else {
        video.pause();
      }
    });
  }, [active, playing, slides]);

  return (
    <div
      className="group relative aspect-[352/626] w-full max-w-[352px] select-none"
    >
      {slides.map((s, i) => {
        const pos = (i - active + n) % n; // 0 = front card
        const behind = Math.min(pos, 2);
        return (
          <div
            key={i}
            className={`absolute inset-0 overflow-hidden rounded-[28px] bg-gradient-to-b ${s.gradient} shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] transition-all duration-700 ease-[cubic-bezier(.22,.8,.3,1)]`}
            style={{
              transform: `translateX(${-behind * 34}px) translateY(${behind * 24}px) rotate(${-behind * 3}deg) scale(${1 - behind * 0.02})`,
              transformOrigin: "bottom center",
              zIndex: n - pos,
              opacity: pos <= 2 ? 1 : 0,
            }}
          >
            <video
              ref={(video) => {
                videoRefs.current[i] = video;
              }}
              src={s.video}
              aria-label={s.alt}
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>
        );
      })}

      <div className="absolute inset-0 z-20 grid place-items-center">
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className="grid h-[58px] w-[58px] place-items-center rounded-full bg-black/60 text-white backdrop-blur transition-transform hover:scale-105"
        >
          {playing ? (
            <Pause size={22} fill="currentColor" />
          ) : (
            <Play size={22} fill="currentColor" className="ml-0.5" />
          )}
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-[-46px] z-30 flex justify-center">
        <div className="flex items-center gap-4 rounded-full bg-white/80 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <button
            aria-label="Previous reel"
            onClick={() => go(-1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#d8d8d8] bg-white text-[#111111] transition-transform hover:scale-105"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to reel ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === active ? "w-6 bg-[#171717]" : "w-2.5 bg-[#bcbcbc] hover:bg-[#8f8f8f]"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next reel"
            onClick={() => go(1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#d8d8d8] bg-white text-[#111111] transition-transform hover:scale-105"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */

export default function Hero({ slides }: { slides?: Slide[] }) {
  return (
    <section
      className="relative overflow-hidden h-[1000px] bg-[#f3f3f3] px-4 py-10 text-[#161616] antialiased sm:px-6 sm:py-12 lg:min-h-[760px] pb-8"
    > 
      <Ribbon />

      <div className="relative z-10 mx-auto grid w-full max-w-[1252px] grid-cols-1 gap-8 sm:gap-10 lg:min-h-[626px] lg:grid-cols-[1fr_auto_1fr]">
        {/* left */}
        <div className="flex flex-col">
          <h1 className="text-[clamp(2.75rem,10vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] lg:text-[72px]">
            Voices Behind
            <br />
             the Brands 
            <br />
          </h1>
        </div>

        {/* center */}
        <div className="flex justify-center lg:pl-16">
          <CardStack slides={slides} />
        </div>

        {/* right */}
        {/* <div className="flex flex-col justify-between gap-10 lg:items-end">

          <div className="w-full max-w-[292px]">
            <p className="text-[18px] leading-[1.45] text-[#161616]/70">
              Recollectix helps brands create content that connects with audiences, consistently and strategically
              across social media.
            </p>
            <div className="mt-8 flex items-center gap-1">
              <Link
                href="/contact"
                className="flex h-14 flex-1 items-center rounded-full bg-[#161616] px-6 text-[17px] font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Book a call
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
