"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import {
  Clapperboard,
  Megaphone,
  Factory,
  Film,
  Users2,
  PenTool,
  LayoutTemplate,
  Smartphone,
  GraduationCap,
  Video,
  ArrowUpRight,
  Mail,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/*  Archivo Black -> heavy display headlines (the deck's slab type)    */
/*  Space Grotesk  -> body copy                                        */
/*  JetBrains Mono -> tags, eyebrows, timecodes (the "files" motif)     */
/* ------------------------------------------------------------------ */
const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontDisplay = "[font-family:var(--font-display)]";
const fontMono = "[font-family:var(--font-mono)]";

/* ------------------------------------------------------------------ */
/*  Palette (named, intentional — not a default)                       */
/*  Paper   #F4F2EC   grid backdrop, like the deck's graph paper        */
/*  Ink     #0E0E12   near-black sections                               */
/*  Signal  #FF4D2E   energetic accent, lifted from the play-button red */
/*  Blue    #2D34E0   electric blue, lifted from the deck's link colour */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Scroll-reveal primitive (no external animation library required)   */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small shared pieces                                                */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, tone = "signal" }: { children: ReactNode; tone?: "signal" | "muted" }) {
  const color = tone === "signal" ? "text-[#FF4D2E]" : "text-white/40";
  return (
    <span className={`inline-flex items-center gap-2 ${fontMono} text-[11px] uppercase tracking-[0.3em] ${color}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function SectionHeading({
  index,
  title,
  subtitle,
  dark = false,
}: {
  index: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-3 md:mb-16">
      <span className={`${fontMono} text-xs uppercase tracking-[0.3em] ${dark ? "text-[#FF4D2E]" : "text-[#FF4D2E]"}`}>
        {index}
      </span>
      <h2
        className={`${fontDisplay} text-4xl leading-[0.95] sm:text-5xl md:text-6xl ${
          dark ? "text-white" : "text-[#0E0E12]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl text-sm uppercase tracking-wide ${dark ? "text-white/50" : "text-[#0E0E12]/50"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Video + social embed cards                                         */
/*  Replace `embed` with real YouTube/Instagram URLs — placeholders     */
/*  are wired up so the iframes drop straight in.                      */
/* ------------------------------------------------------------------ */
type CaseStudy = {
  tag: string;
  client: string;
  description?: string;
  embed: string; // e.g. https://www.youtube.com/embed/VIDEO_ID
};

function VideoCard({ tag, client, description, embed, delay = 0 }: CaseStudy & { delay?: number }) {
  return (
    <Reveal delay={delay} className="group">
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-black transition-transform duration-300 group-hover:-translate-y-1">
        <div className="aspect-video w-full">
          <iframe
            src={embed}
            title={client}
            loading="lazy"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-4">
        <Eyebrow>{tag}</Eyebrow>
        <h3 className={`${fontDisplay} mt-2 text-xl text-[#0E0E12]`}>{client}</h3>
        {description && <p className="mt-2 text-sm leading-relaxed text-[#0E0E12]/65">{description}</p>}
      </div>
    </Reveal>
  );
}

function PhoneEmbed({ src, label }: { src: string; label?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[200px] shrink-0">
      <div className="overflow-hidden rounded-[26px] border-[6px] border-[#0E0E12] bg-[#0E0E12] shadow-2xl shadow-black/40 transition-transform duration-300 hover:-translate-y-1">
        <div className="aspect-[9/16] w-full bg-black">
          <iframe
            src={src}
            title={label ?? "Embedded post"}
            loading="lazy"
            scrolling="no"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

function SocialRow({
  index,
  brand,
  subtitle,
  embeds,
}: {
  index: string;
  brand: string;
  subtitle: string;
  embeds: string[];
}) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 gap-8 border-b border-white/10 py-12 last:border-none md:grid-cols-[260px_1fr] md:items-center md:gap-12">
        <div>
          <span className={`${fontMono} text-xs uppercase tracking-[0.3em] text-[#FF4D2E]`}>{index}</span>
          <h3 className={`${fontDisplay} mt-3 text-2xl leading-tight text-white md:text-3xl`}>{brand}</h3>
          <p className="mt-3 text-xs uppercase tracking-wide text-white/45">{subtitle}</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {embeds.map((src, i) => (
            <PhoneEmbed key={i} src={src} label={`${brand} asset ${i + 1}`} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Hand-drawn retro glyphs for the signature "memory reel" marquee     */
/*  — echoes the camera / VHS / floppy iconography from the deck        */
/* ------------------------------------------------------------------ */
function GlyphCamera({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="10" width="26" height="16" rx="2" />
      <path d="M10 10l2.5-3.5h7L22 10" />
      <circle cx="16" cy="18" r="5" />
      <circle cx="24.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function GlyphReel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <circle cx="16" cy="16" r="13" />
      <circle cx="16" cy="16" r="3.4" />
      <circle cx="16" cy="7" r="2.1" />
      <circle cx="24" cy="20" r="2.1" />
      <circle cx="8" cy="20" r="2.1" />
    </svg>
  );
}
function GlyphTape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="7" width="26" height="18" rx="2" />
      <circle cx="11" cy="16" r="4" />
      <circle cx="21" cy="16" r="4" />
      <path d="M3 11h26M11 22h10" />
    </svg>
  );
}
function GlyphFloppy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <path d="M5 4h18l4 4v20H5z" />
      <rect x="10" y="4" width="9" height="7" />
      <rect x="9" y="17" width="14" height="9" />
    </svg>
  );
}
function GlyphCube({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <path d="M16 3l12 6.5v13L16 29 4 22.5v-13z" />
      <path d="M4 9.5L16 16l12-6.5M16 16v13" />
    </svg>
  );
}
function GlyphPager({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="9" width="24" height="16" rx="3" />
      <rect x="8" y="13" width="16" height="4" />
      <circle cx="9" cy="21" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="21" r="1" fill="currentColor" stroke="none" />
      <circle cx="19" cy="21" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// function MemoryReel() {
//   const glyphs = [GlyphCamera, GlyphReel, GlyphTape, GlyphFloppy, GlyphCube, GlyphPager];
//   const sequence = [...glyphs, ...glyphs];
//   return (
//     <div className="relative overflow-hidden border-y border-black/10 bg-[#EAE6D9] py-6">
//       <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-16 px-8">
//         {sequence.map((Glyph, i) => (
//           <div key={i} className="flex items-center gap-3 text-[#0E0E12]/60">
//             <Glyph className="h-7 w-7" />
//             <span className={`${fontMono} text-xs uppercase tracking-[0.25em]`}>Recollectix</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* ------------------------------------------------------------------ */
/*  "What we do" capability card                                       */
/* ------------------------------------------------------------------ */
function CapabilityCard({
  icon: Icon,
  label,
  index,
}: {
  icon: typeof Video;
  label: string;
  index: number;
}) {
  return (
    <Reveal delay={index * 50}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4D2E]/50 hover:bg-white/[0.06]">
        <span className={`${fontMono} text-xs text-white/35`}>{String(index + 1).padStart(2, "0")}</span>
        <Icon className="mt-6 h-7 w-7 text-[#FF4D2E] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
        <p className={`${fontDisplay} mt-5 text-base leading-tight text-white`}>{label}</p>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */
const capabilities: { label: string; icon: typeof Video }[] = [
  { label: "DVC / TVC", icon: Video },
  { label: "Branded Content", icon: Megaphone },
  { label: "Content Factory", icon: Factory },
  { label: "Movie / Series Marketing", icon: Film },
  { label: "Influencer Campaigns", icon: Users2 },
  { label: "Direction", icon: Clapperboard },
  { label: "Scriptwriting", icon: PenTool },
  { label: "Campaign Designing", icon: LayoutTemplate },
  { label: "Social Media Creative & Strategy", icon: Smartphone },
  { label: "Creative Leadership, Training & Mentorship", icon: GraduationCap },
];

const dvcFeatured: CaseStudy[] = [
  {
    tag: "DVC/TVC — Topical Brand Film",
    client: "HDFC Mutual Fund — Maa Minute",
    description:
      "A Mother's Day digital film built around small, everyday gestures. It encouraged audiences to give one minute back to their mothers, and set the emotional tone for HDFC MF's campaign across digital and social.",
    embed: "https://www.youtube.com/embed/XFXxzke4HWk",
  },
  {
    tag: "DVC/TVC — Brand Film",
    client: "Primebook",
    description:
      "A high-impact film for Primebook's Gen-2 launch, introducing its features with a bold, youth-first narrative. It anchored the brand's entry into India's student and creator market and set the tone for a full 360° rollout.",
    embed: "https://www.youtube.com/embed/JPLaBE_a4Ec",
  },
  {
    tag: "DVC/TVC — Brand Film",
    client: "Epigamia",
    description:
      "A snappy, slice-of-life film unveiling new packaging — fusing lifestyle, motion graphics and narrative freshness to modernise the brand's identity and speak directly to Gen Z.",
    embed: "https://www.youtube.com/embed/ci47ZwEJ1uw",
  },
  {
    tag: "DVC/TVC — Brand Film",
    client: "SuppleTek",
    description:
      "A flagship brand film for one of India's biggest rice brands — a first for SuppleTek, helping it establish itself across Indian and Middle-East markets, alongside a full rebrand and LinkedIn strategy.",
    embed: "https://player.vimeo.com/video/723626462?h=6e9217ac55",
  },
];

const dvcGrid: CaseStudy[] = [
  { tag: "Indigo Paints", client: "Repaint Doors With Indigo", embed: "https://www.youtube.com/embed/gfi_zw_rJO4" },
  { tag: "Indigo Paints", client: "Protect Walls From Algae", embed: "https://www.youtube.com/embed/Wy0TuYoFEww" },
  { tag: "Indigo Paints", client: "Outstanding Paint Solutions", embed: "https://www.youtube.com/embed/8hdqZ_zikSg" },
  { tag: "Indigo Paints", client: "Premium & Rich Shiny Wall", embed: "https://www.youtube.com/embed/R7Ebl8JD-7Y" },
  { tag: "Festive Film", client: "HomeTown — #OnlyMomsCan", embed: "https://player.vimeo.com/video/443027301?fl=pl&fe=sh" },
  { tag: "Festive Film", client: "Mirinda Crashes the Pepsi IPL", embed: "https://www.youtube.com/embed/rQ6WZXsJ87c" },
  { tag: "National Campaign", client: "Lodha — Perfect Homes", embed: "https://www.youtube.com/embed/cUpv9klA6UA" },
  { tag: "National Campaign", client: "fbb — #MissIndiaWaliFeeling", embed: "https://www.youtube.com/embed/SOBjDVclMTE" },
  { tag: "Product Launch", client: "Ariel Matic Liquid Detergent", embed: "https://www.youtube.com/embed/MVXUuEjF6hE" },
  { tag: "Product Launch", client: "Monster Energy x GTG ft. Scout OP", embed: "https://player.vimeo.com/video/531926532?fl=pl&fe=sh" },
  { tag: "Product Launch", client: "Cox & Kings — Bharat Dekho", embed: "https://player.vimeo.com/video/779127496?fl=pl&fe=sh" },

];

const brandedContent: CaseStudy[] = [
  {
    tag: "Branded Content",
    client: "Unacademy — Epic Hide & Seek",
    description:
      "Founder Gaurav Munjal wanted a video that breaks the internet organically. We brought in some of the most viral names on the internet and gave them an epic challenge — millions of views and standout engagement followed.",
    embed: "https://www.youtube.com/embed/gFPhYguV0ZU",
  },
  {
    tag: "Branded Content — YT IP",
    client: "Prime Video — Xpert Breaks Down",
    description:
      "Amazon Prime Video challenged us to market their inventory to the digital janta. A 12-episode IP where wacky experts reviewed scenes from shows and films, surfacing new titles and lifting watch time on YouTube.",
    embed: "https://www.youtube.com/embed/jXMcCs2O2gk",
  },
  {
    tag: "Branded Content — YT IP",
    client: "Prime Video — Breaking News",
    description: "A companion format featuring a famous journalist reviewing iconic TV and movie scenes for the same IP.",
    embed: "https://www.youtube.com/embed/62j1sPupJ3A",
  },
  {
    tag: "Branded Content — Docu-series",
    client: "Krafton — BGMI India Ki Heartbeat",
    description:
      "A 3-part docu-series featuring mind-blowing stories from India's gaming scene — one of the most-watched pieces of content on Krafton India's channel, and a contributor to the game's un-ban by the Indian government.",
    embed: "https://www.youtube.com/embed/XQN9nScXm6M",
  },
];

const socialRows = [
  {
    index: "01",
    brand: "Nykaa Fashion",
    subtitle: "Summer Sale Campaign",
    embeds: [
      "https://www.instagram.com/reel/DJg3G4Fp345/embed",
      "https://www.instagram.com/reel/DJjmwnrK4Th/embed",
      // "https://www.instagram.com/REPLACE_NYKAA_3/embed",
    ],
  },
  {
    index: "02",
    brand: "Nykaa Fashion × House of Rare",
    subtitle: "Launch Campaign",
    embeds: [
      "https://www.instagram.com/reel/DLKaYCrIZBR/embed",
      "https://www.instagram.com/reel/DLRgHMZS5h9/embed",
      "https://www.instagram.com/reel/DLIHTDTydwZ/embed",
    ],
  },
  {
    index: "03",
    brand: "Domino's — Chicken Range",
    subtitle: "Launch Campaign",
    embeds: [
      "https://www.youtube.com/embed/aPl_DXLZ5jY",
      "https://www.youtube.com/embed/Ra2kU1moTWo",
      "https://www.youtube.com/embed/GiFtC1pTUzQ",
    ],
  },
  {
    index: "04",
    brand: "Domino's × Thugesh",
    subtitle: "Social Assets",
    embeds: [
      "https://www.instagram.com/p/DL2V8UZyjPJ/embed",
      "https://www.instagram.com/p/DMDIUGcS6ko/embed",
      "https://www.instagram.com/p/DLFagbYy-hK/embed",
    ],
  },
  {
    index: "05",
    brand: "Primebook",
    subtitle: "Social Assets",
    embeds: [
      "https://www.instagram.com/reel/DPL9rokkvfR/embed",
      "https://www.instagram.com/reel/DP3vF_iEqay/embed",
      "https://www.instagram.com/reel/DPQ6Jvzk3Py/embed",
    ],
  },
  {
    index: "06",
    brand: "Primebook",
    subtitle: "Social Launch Campaign",
    embeds: [
      "https://www.instagram.com/reel/DN5lHUMkq0u/embed",
      "https://www.instagram.com/reel/DN8Mt1-kooZ/embed",
      "https://www.instagram.com/p/DOgAzgJk4Ob/embed",
    ],
  },
  {
    index: "07",
    brand: "Naturals Ice Cream",
    subtitle: "Ganpati Campaign",
    embeds: [
      "https://www.instagram.com/reel/DN73g44D0CB/embed",
      "https://www.instagram.com/reel/DOB7wMQjecE/embed",
      "https://www.instagram.com/reel/DOEKILBj-XD/embed",
    ],
  },
  {
    index: "08",
    brand: "Naturals Ice Cream",
    subtitle: "Sitaphal Campaign",
    embeds: [
      "https://www.instagram.com/reel/DOlMA8UjX8c/embed",
      "https://www.instagram.com/reel/DOqVqLyjUhD/embed",
      "https://www.instagram.com/reel/DPf9uf5j-tf/embed",
    ],
  },
  {
    index: "09",
    brand: "Birdy's",
    subtitle: "Social Campaign",
    embeds: [
      "https://www.instagram.com/reel/DLueykUzHtF/embed",
      "https://www.instagram.com/reel/DMZpAgYCZcH/embed",
      "https://www.instagram.com/reel/DOdrezxjGVB/embed",
    ],
  },
  {
    index: "10",
    brand: "Epigamia",
    subtitle: "Social Assets",
    embeds: [
      "https://www.instagram.com/reel/DLcrxHihGpc/embed",
      "https://www.instagram.com/reel/DLZ9V6kB2lF/embed",
      "https://www.instagram.com/reel/DLaGFS7BoeH/embed",
    ],
  },
  {
    index: "11",
    brand: "Sunsilk",
    subtitle: "Influencer-led Content",
    embeds: [
      "https://www.instagram.com/reel/CgYh0Pph4UU/embed",
      "https://www.instagram.com/reel/Ca917JmhIO0/embed",
      "https://www.instagram.com/reel/CfiZM36h_D0/embed",
    ],
  },
];

const ottPromotions: CaseStudy[] = [
  {
    tag: "OTT Promotions",
    client: "Prime Video — Jubilee",
    description:
      "Launched and marketed one of Prime Video's most critically acclaimed series. The campaign brought movie magic to screens of all sizes.",
    embed: "https://www.youtube.com/embed/cc13ZO6i0qo",
  },
  {
    tag: "OTT Promotions",
    client: "Disney+ Hotstar — Kanpuriye",
    description: "Launched and marketed the Hotstar Specials title with a launch film built for the platform's audience.",
    embed: "https://player.vimeo.com/video/779128064?fl=pl&fe=sh",
  },
];

const sunsilkFactory: CaseStudy[] = [
  { tag: "Content Factory", client: "Sunsilk — Hero Range", embed: "https://www.youtube.com/embed/REPLACE_SUNSILK_1" },
  { tag: "Content Factory", client: "Sunsilk — Ingredient Story", embed: "https://www.youtube.com/embed/REPLACE_SUNSILK_2" },
  { tag: "Content Factory", client: "Sunsilk — Pack Hero", embed: "https://www.youtube.com/embed/REPLACE_SUNSILK_3" },
];

const upstoxSeries: CaseStudy[] = [
  {
    tag: "Finance Education IP",
    client: "Upstox — Money Mentors: The Power of Compounding",
    embed: "https://www.youtube.com/embed/lgn73tDSlB8",
  },
  {
    tag: "Finance Education IP",
    client: "Upstox — Sector Analysis: Banking",
    embed: "https://www.youtube.com/embed/1ogTEQZa-gg",
  },
];

const ytOriginals: CaseStudy[] = [
  { tag: "YT Original", client: "AXE Chickipedia", embed: "https://www.youtube.com/embed/-W_EoFafNRs" },
  { tag: "YT Original", client: "bindass VIP — Shit MBA Students Say", embed: "https://player.vimeo.com/video/505094716?fl=pl&fe=sh" },
  { tag: "YT Original", client: "SnG — GORE GOTE", embed: "https://www.youtube.com/embed/S745IK1G23k" },
  { tag: "YT Original", client: "Being Indian — Shit Pakistani Cricketers Say", embed: "https://www.youtube.com/embed/PTrE9mCPjSE" },
  { tag: "YT Original", client: "Asian Paints — DIY Dry-brushed Furniture", embed: "https://player.vimeo.com/video/642939655?fl=pl&fe=sh" },
  { tag: "YT Original", client: "SnG — She Called Me Bhaiyya", embed: "https://www.youtube.com/embed/u2-cCLAvMCo" },
];

const musicVideos: CaseStudy[] = [
  { tag: "Music Video", client: "Halke Gaadi Haako", embed: "https://www.youtube.com/embed/C-RGn9vxTjw" },
  { tag: "Music Video", client: "Tu Na Aati Jo Meri Zindagi Mein", embed: "https://www.youtube.com/embed/Cg0uzNXoFqc" },
  { tag: "Music Video", client: "Seetha Maruthe / Heaven by Gaur", embed: "https://www.youtube.com/embed/ryLVkwNJMrU" },
  { tag: "Music Video", client: "Vasudha Sharma", embed: "https://player.vimeo.com/video/446797327?fl=pl&fe=sh" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} relative bg-[#F4F2EC] [font-family:var(--font-body)]`}
    >
      {/* global keyframes + grid texture */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes strike { to { width: 100%; } }
        @keyframes flicker { 0%, 100% { opacity: 1; } 45% { opacity: 0.86; } 50% { opacity: 1; } 72% { opacity: 0.92; } }
        @keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .grid-paper {
          background-image:
            linear-gradient(rgba(14,14,18,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,14,18,0.06) 1px, transparent 1px);
          background-size: 42px 42px;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>

      {/* ---------------------------------------------------------- */}
      {/*  Nav                                                        */}
      {/* ---------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F4F2EC]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className={`${fontDisplay} text-sm tracking-tight text-[#0E0E12]`}>
            RECOLLECTIX <span className="text-[#FF4D2E]">×</span> AD1023
          </span>
          <nav className={`hidden gap-8 ${fontMono} text-xs uppercase tracking-[0.2em] text-[#0E0E12]/60 sm:flex`}>
            <a href="#work" className="transition-colors hover:text-[#FF4D2E]">Work</a>
            <a href="#capabilities" className="transition-colors hover:text-[#FF4D2E]">Capabilities</a>
            <a href="#social" className="transition-colors hover:text-[#FF4D2E]">Social</a>
            <a href="#contact" className="transition-colors hover:text-[#FF4D2E]">Contact</a>
          </nav>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/*  Hero                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="grid-paper relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
        <div
          className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full border border-[#0E0E12]/10 opacity-60 md:h-64 md:w-64"
          style={{ animation: "floaty 7s ease-in-out infinite" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow>Creative Credentials — AD1023</Eyebrow>
          </Reveal>

          <div
            className="mt-6 flex flex-wrap items-end gap-3 sm:gap-5"
            style={{ animation: "flicker 6s ease-in-out infinite" }}
          >
            <h1 className={`${fontDisplay} text-[11vw] leading-[0.85] text-[#0E0E12] sm:text-7xl md:text-8xl`}>
              RECOLLECTIX
            </h1>
            <span className={`${fontDisplay} text-3xl text-[#FF4D2E] sm:text-5xl md:text-6xl`}>×</span>
            <h1 className={`${fontDisplay} text-[15vw] leading-[0.85] text-[#2D34E0] sm:text-7xl md:text-8xl`}>
              AD1023
            </h1>
          </div>

          <div className={`${fontDisplay} mt-12 max-w-xl space-y-1 text-4xl leading-[1.05] text-[#0E0E12] sm:text-5xl`}>
            <p>CLARITY</p>
            <p className="relative inline-block text-[#0E0E12]/35">
              CHAOS
              <span
                className="absolute left-0 top-1/2 h-[3px] w-0 -translate-y-1/2 bg-[#FF4D2E]"
                style={{ animation: "strike 0.9s ease-out 0.5s forwards" }}
              />
            </p>
            <p>&amp;</p>
            <p>CREATIVE</p>
            <p className="relative inline-block text-[#0E0E12]/35">
              DELUSION
              <span
                className="absolute left-0 top-1/2 h-[3px] w-0 -translate-y-1/2 bg-[#FF4D2E]"
                style={{ animation: "strike 0.9s ease-out 0.8s forwards" }}
              />
            </p>
            <p className="italic">DISCIPLINE</p>
          </div>

          <Reveal delay={150} className="mt-10 grid gap-6 md:grid-cols-2">
            <p className="max-w-md text-base leading-relaxed text-[#0E0E12]/70">
              And, together — we build content ecosystems, from concept to execution. We tell stories that move
              audiences and drive business. We&apos;re hands-on creatives with the ability to scale ideas through the
              right mix of talent, craft, and execution.
            </p>
            <p className="max-w-md text-base leading-relaxed text-[#0E0E12]/70">
              From DVCs to creator-first content factories, we design emotionally sharp, strategy-led work built for
              business outcomes — qualified attention, scalable storytelling, and performance-driven systems that
              move brands forward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* <MemoryReel /> */}

      {/* ---------------------------------------------------------- */}
      {/*  What we do                                                  */}
      {/* ---------------------------------------------------------- */}
      <section id="capabilities" className="bg-[#0E0E12] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="What we do" title="WHAT WE DO…" dark />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {capabilities.map((c, i) => (
              <CapabilityCard key={c.label} icon={c.icon} label={c.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  DVC / TVC — featured                                       */}
      {/* ---------------------------------------------------------- */}
      <section id="work" className="grid-paper px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="Brand films"
            title="DVC / TVC"
            subtitle="Topical brand films and national-level campaigns"
          />
          <div className="grid gap-10 sm:grid-cols-2">
            {dvcFeatured.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  DVC / TVC — grid                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-[#EAE6D9] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="More from the reel" title="PRODUCT LAUNCHES & FESTIVE FILMS" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dvcGrid.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={(i % 6) * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Branded content                                             */}
      {/* ---------------------------------------------------------- */}
      <section className="grid-paper px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="Branded content"
            title="BRANDED CONTENT"
            subtitle="Creator collabs, YouTube IPs and docu-series"
          />
          <div className="grid gap-10 sm:grid-cols-2">
            {brandedContent.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  OTT promotions                                              */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-[#EAE6D9] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="Movie / series marketing" title="OTT PROMOTIONS" />
          <div className="grid gap-10 sm:grid-cols-2">
            {ottPromotions.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Social / influencer campaigns                               */}
      {/* ---------------------------------------------------------- */}
      <section id="social" className="bg-[#0E0E12] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="Influencer & social" title="SOCIAL ASSETS" dark subtitle="Vertical-first, platform-native" />
          <div>
            {socialRows.map((row) => (
              <SocialRow key={row.brand + row.subtitle} {...row} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Content factory                                             */}
      {/* ---------------------------------------------------------- */}
      {/* <section className="grid-paper px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="Content factory"
            title="SUNSILK — CONTENT FACTORY"
            subtitle="Revamped digital presence via thumb-stopping shoots, influencer collabs and moment marketing"
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {sunsilkFactory.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section> */}

      {/* ---------------------------------------------------------- */}
      {/*  Upstox finance IP                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-[#EAE6D9] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="Finance education"
            title="UPSTOX"
            subtitle="Conceptualised and executed multiple IPs to provide finance education to Upstox users"
          />
          <div className="grid gap-10 sm:grid-cols-2">
            {upstoxSeries.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  YT Originals                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="grid-paper px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="Internet-first" title="YT ORIGINALS" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ytOriginals.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={(i % 6) * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Music videos                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-[#EAE6D9] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="Soundtrack" title="MUSIC VIDEOS" />
          <div className="grid gap-8 sm:grid-cols-2">
            {musicVideos.map((c, i) => (
              <VideoCard key={c.client} {...c} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Footer / contact                                            */}
      {/* ---------------------------------------------------------- */}
      <section id="contact" className="relative overflow-hidden bg-[#0E0E12] px-6 py-24 md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
          style={{ animation: "floaty 9s ease-in-out infinite" }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Let&apos;s make something nobody else could</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className={`${fontDisplay} mt-6 text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl`}>
              CLARITY,
              <br />
              <span className="text-[#145EA0]">ON PURPOSE.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="mailto:business@recollectix.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3 text-white transition-colors duration-300 hover:border-[#FF4D2E] hover:text-[#FF4D2E]"
            >
              <Mail className="h-4 w-4" />
              <span className={`${fontMono} text-xs uppercase tracking-[0.25em]`}>business@recollectix.com</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
          <Reveal delay={300}>
            <p className={`mt-16 ${fontMono} text-xs uppercase tracking-[0.3em] text-white/30`}>
              Recollectix × AD1023 — Creative Credentials
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
