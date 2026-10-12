import { useMemo, type CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  mediaType?: "image" | "video";
}

/* -------------------------------------------------------------------------- */
/*  1. EDIT ME — your images                                                   */
/*  Portrait images (2:3) work best. While this array is empty, soft           */
/*  placeholder tiles are shown so you can preview the layout.                 */
/* -------------------------------------------------------------------------- */

export const GALLERY_IMAGES: GalleryImage[] = [
  // { id: "reel-1", src: "/cremure-a", alt: "Image One", mediaType: "video" },
];

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

/** Cards around the ring. Must be even (every second one is hidden on phones). */
const MIN_SLOTS = 16;
const PLACEHOLDER_COUNT = 10;

export interface CurvedGallerySectionProps {
  images?: GalleryImage[];
  heading?: string;
  subtitle?: string;
  /** Seconds for one full lap of the ring. Higher = slower. */
  duration?: number;
  /** Classes for the <section>. Replace to match your site background/text. */
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function CurvedGallerySection({
  images = GALLERY_IMAGES,
  heading = "Ready to grow your brand?",
  subtitle = "Let’s turn your social media into a powerful growth engine.",
  duration = 60,
  className = "bg-black text-white",
}: CurvedGallerySectionProps) {
  const { slots, count, firstLap } = useMemo(() => {
    const source: GalleryImage[] =
      images.length > 0
        ? images
        : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
            id: `placeholder-${i}`,
            src: "",
            alt: "",
          }));

    const L = source.length;
    let n = Math.max(MIN_SLOTS, L);
    if (n % 2 !== 0) n += 1;

    const list = Array.from({ length: n }, (_, i) => ({
      // Shift each lap so images still alternate when half the slots are hidden on phones.
      img: source[(i + Math.floor(i / L)) % L],
      angle: (360 / n) * i,
    }));
    return { slots: list, count: n, firstLap: Math.min(L, n) };
  }, [images]);

  const style = {
    "--cg-slot": (2 * Math.PI) / count, // angle (rad) between neighbouring cards
    "--cg-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <section
      aria-labelledby="curved-gallery-heading"
      className={`cg-section relative w-full overflow-hidden pb-12 pt-14 sm:pb-16 sm:pt-20 ${className}`}
      style={style}
    >
      <style>{CG_CSS}</style>

      {/* Heading */}
      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-6 text-center">
        <h2
          id="curved-gallery-heading"
          className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
        >
          {heading}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-[18rem] text-balance text-xs text-neutral-500 sm:max-w-xs sm:text-sm">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Curved gallery — a ring of cards seen from inside, so the middle sits
          far away and the sides swing in close and grow. */}
      <div className="cg-stage relative mt-8 w-full overflow-hidden sm:mt-10">
        <ul className="cg-ring m-0 list-none p-0">
          {slots.map(({ img, angle }, i) => (
            <li
              key={`${img.id}-${i}`}
              aria-hidden={i >= firstLap ? true : undefined}
              className="cg-card max-sm:even:hidden"
              style={{ "--a": angle } as CSSProperties}
            >
              {img.src ? (
                img.mediaType === "video" ? (
                  <video
                    src={img.src}
                    aria-label={i < firstLap ? img.alt : undefined}
                    aria-hidden={i >= firstLap ? true : undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full select-none object-cover"
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={i < firstLap ? img.alt : ""}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full select-none object-cover"
                  />
                )
              ) : (
                <div
                  aria-hidden
                  className="h-full w-full"
                  style={{ background: placeholderGradient(i) }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Helpers & styles                                                           */
/* -------------------------------------------------------------------------- */

function placeholderGradient(seed: number): string {
  const hue = (seed * 61 + 15) % 360;
  return `linear-gradient(160deg, hsl(${hue} 55% 58%), hsl(${(hue + 40) % 360} 55% 32%))`;
}

/*  (Move into your global stylesheet if you prefer; keep the class names.)    */
const CG_CSS = `
.cg-section {
  container-type: inline-size;

  /* Phones: narrower view, bigger cards, every 2nd card hidden */
  --cg-P: 26;        /* camera distance, in % of section width  */
  --cg-fill: 1.78;   /* how much of its angular slot a card fills (×2 = every other card hidden) */
  --cg-stage: 84;    /* gallery height, in % of section width   */
}
@media (min-width: 640px) {
  .cg-section { --cg-P: 40; --cg-fill: 0.92; --cg-stage: 33; }
}
@media (min-width: 1024px) {
  .cg-section { --cg-P: 18.2; --cg-fill: 0.92; --cg-stage: 32; }
}

.cg-stage {
  height: calc(var(--cg-stage) * 1cqw);
  perspective: calc(var(--cg-P) * 1cqw);
  perspective-origin: 50% 50%;
}

/* The ring is centred on the camera, so every card is the same distance away.
   The wide-angle perspective is what makes the sides swell and bend. */
.cg-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  transform-style: preserve-3d;
  animation: cg-spin var(--cg-duration, 60s) linear infinite;
  will-change: transform;
}

/* Positive rotateY slides the far wall to the left. 360° = identical layout,
   so the loop has no jump. */
@keyframes cg-spin {
  from { transform: translateZ(calc(var(--cg-P) * 1cqw)) rotateY(0deg); }
  to   { transform: translateZ(calc(var(--cg-P) * 1cqw)) rotateY(360deg); }
}

.cg-card {
  position: absolute;
  left: 0;
  top: 0;
  width: calc(var(--cg-slot) * var(--cg-fill) * 100cqw);
  height: calc(var(--cg-slot) * var(--cg-fill) * 150cqw);
  border-radius: calc(var(--cg-slot) * var(--cg-fill) * 7cqw);
  overflow: hidden;
  transform: rotateY(calc(var(--a) * 1deg)) translateZ(-100cqw) translate(-50%, -50%);
}

@media (prefers-reduced-motion: reduce) {
  .cg-ring { animation-play-state: paused; }
}
`;
