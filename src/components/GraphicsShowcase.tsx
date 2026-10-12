import { useMemo, type CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/*  1. EDIT ME — your graphic posts                                            */
/*  Add your real image paths here (e.g. "/images/posts/post-01.jpg").         */
/*  While this array is empty, soft placeholder tiles are rendered instead.    */
/* -------------------------------------------------------------------------- */

export interface GraphicPost {
  id: string;
  src: string;
  alt: string;
}

export const GRAPHIC_POSTS: GraphicPost[] = [
  // { id: "post-01", src: "/images/graphics/post-01.jpg", alt: "Brand launch post" },
  // { id: "post-02", src: "/images/graphics/post-02.jpg", alt: "Festival offer post" },
];

/* -------------------------------------------------------------------------- */
/*  Types & config                                                             */
/* -------------------------------------------------------------------------- */

type Direction = "ltr" | "rtl";

interface RowConfig {
  direction: Direction;
  /** seconds for one full loop — different per row for a natural rhythm */
  duration: number;
}

const ROWS: RowConfig[] = [
  { direction: "ltr", duration: 70 }, // row 1: left → right
  { direction: "rtl", duration: 88 }, // row 2: right → left
  { direction: "ltr", duration: 79 }, // row 3: left → right
];

/** Minimum cards per sequence so one copy always spans wider than the screen. */
const MIN_CARDS_PER_SEQUENCE = 9;

export interface GraphicsShowcaseProps {
  posts?: GraphicPost[];
  /** Extra classes for the outer <section> (set your own background here). */
  className?: string;
  /** Accessible label for the gallery region. */
  ariaLabel?: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function GraphicsShowcase({
  posts = GRAPHIC_POSTS,
  className = "",
  ariaLabel = "Graphic design posts showcase",
}: GraphicsShowcaseProps) {
  // Build three differently-ordered sequences, each long enough to loop cleanly.
  const rows = useMemo(() => {
    const source: GraphicPost[] =
      posts.length > 0
        ? posts
        : Array.from({ length: 6 }, (_, i) => ({
            id: `placeholder-${i}`,
            src: "",
            alt: "",
          }));

    return ROWS.map((row, rowIndex) => {
      const offset = Math.floor((source.length / ROWS.length) * rowIndex);
      const rotated = [...source.slice(offset), ...source.slice(0, offset)];
      const repeats = Math.max(1, Math.ceil(MIN_CARDS_PER_SEQUENCE / rotated.length));
      const sequence = Array.from({ length: repeats }, () => rotated).flat();
      return { ...row, sequence };
    });
  }, [posts]);

  return (
    <section
      aria-label={ariaLabel}
      className={`gws-section relative isolate w-full overflow-hidden py-16 sm:py-24 ${className}`}
    >
      <style>{GWS_CSS}</style>

      {/* Mask fades the artwork out at the far edges */}
      <div className="gws-mask relative mx-auto h-[360px] w-full sm:h-[480px] lg:h-[620px]">
        {/* Perspective stage */}
        <div className="gws-stage absolute inset-0 flex items-center justify-center">
          {/* Tilted wall — wider than the viewport so edges never show a gap */}
          <div className="gws-wall flex w-[140%] shrink-0 flex-col gap-3 sm:gap-4 lg:gap-5">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="w-full overflow-hidden">
                <div
                  className={`gws-track flex w-max ${
                    row.direction === "ltr" ? "gws-ltr" : "gws-rtl"
                  }`}
                  style={{ "--gws-duration": `${row.duration}s` } as CSSProperties}
                >
                  {/* Two identical copies → translate by -50% loops with no jump */}
                  {[0, 1].map((copy) => (
                    <ul
                      key={copy}
                      aria-hidden={copy === 1 ? true : undefined}
                      className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4 lg:gap-5 lg:pr-5"
                    >
                      {row.sequence.map((post, i) => (
                        <li
                          key={`${post.id}-${i}`}
                          className="gws-card relative aspect-[4/5] h-24 shrink-0 overflow-hidden rounded-lg sm:h-36 sm:rounded-xl lg:h-48"
                        >
                          {post.src ? (
                            <img
                              src={post.src}
                              alt={copy === 0 ? post.alt : ""}
                              loading="lazy"
                              decoding="async"
                              draggable={false}
                              className="h-full w-full select-none object-cover"
                            />
                          ) : (
                            <div
                              aria-hidden
                              className="h-full w-full"
                              style={{ background: placeholderGradient(i + rowIndex * 3) }}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft blur on the outer edges (siblings of the 3D stage so backdrop-filter works) */}
      <div aria-hidden className="gws-blur gws-blur-left pointer-events-none absolute inset-y-0 left-0 w-[16%] sm:w-[20%]" />
      <div aria-hidden className="gws-blur gws-blur-right pointer-events-none absolute inset-y-0 right-0 w-[16%] sm:w-[20%]" />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function placeholderGradient(seed: number): string {
  const hue = (seed * 47 + 210) % 360;
  return `linear-gradient(145deg, hsl(${hue} 35% 38%), hsl(${(hue + 40) % 360} 40% 22%))`;
}

/* -------------------------------------------------------------------------- */
/*  Styles — keyframes, perspective, masks                                     */
/*  (Move this into your global stylesheet if you prefer; keep class names.)   */
/* -------------------------------------------------------------------------- */

const GWS_CSS = `
.gws-stage {
  perspective: 1400px;
  perspective-origin: 50% 40%;
}

.gws-wall {
  transform: rotateX(22deg) rotateZ(-9deg) scale(1.08);
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
}

@media (max-width: 639px) {
  .gws-wall { transform: rotateX(18deg) rotateZ(-8deg) scale(1.15); }
}

.gws-track {
  will-change: transform;
  animation-duration: var(--gws-duration, 70s);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  backface-visibility: hidden;
}
.gws-ltr { animation-name: gws-marquee-ltr; }
.gws-rtl { animation-name: gws-marquee-rtl; }

@keyframes gws-marquee-ltr {
  from { transform: translate3d(-50%, 0, 0); }
  to   { transform: translate3d(0, 0, 0); }
}
@keyframes gws-marquee-rtl {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

.gws-card { backface-visibility: hidden; }

/* Fade the artwork itself into the page background at the far edges */
.gws-mask {
  -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%);
}

/* Progressive blur: strongest at the outer edge, dissolves toward the centre */
.gws-blur {
  -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
}
.gws-blur-left {
  -webkit-mask-image: linear-gradient(to right, #000 0%, transparent 100%);
          mask-image: linear-gradient(to right, #000 0%, transparent 100%);
}
.gws-blur-right {
  -webkit-mask-image: linear-gradient(to left, #000 0%, transparent 100%);
          mask-image: linear-gradient(to left, #000 0%, transparent 100%);
}

@media (prefers-reduced-motion: reduce) {
  .gws-track { animation: none; transform: translate3d(-25%, 0, 0); }
}
`;
