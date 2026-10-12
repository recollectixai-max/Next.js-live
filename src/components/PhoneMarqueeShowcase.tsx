import { useMemo, type CSSProperties } from "react";
import { Eye } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface ShowcaseImage {
  id: string;
  src: string;
  alt: string;
  mediaType?: "image" | "video";
  viewsText?: string;
}

/* -------------------------------------------------------------------------- */
/*  1. EDIT ME — your images                                                   */
/*  Portrait images (about 4:5) work best. While these are empty, soft         */
/*  placeholder tiles are shown so you can preview the layout.                 */
/* -------------------------------------------------------------------------- */

/** Cards that scroll behind the phone. */
export const MARQUEE_IMAGES: ShowcaseImage[] = [
  { id: "r1", src: "/benita-reel-1.mp4", alt: "Benita Rolls reel", mediaType: "video", viewsText: "1.2M views" },
  { id: "r2", src: "/mak-reel.mp4", alt: "Mak Cakes reel", mediaType: "video", viewsText: "800K views" },
  { id: "r3", src: "/tarboush-reel.mp4", alt: "Tarboush reel", mediaType: "video", viewsText: "1.5M views" },
  { id: "r4", src: "/tp-reel.mp4", alt: "Timepass Chai reel", mediaType: "video", viewsText: "900K views" },
  { id: "r5", src: "/baba-reel.mp4", alt: "Baba Falooda reel", mediaType: "video", viewsText: "1.1M views" },
  { id: "r6", src: "/benita-reel-2.mp4", alt: "Benita Rolls reel", mediaType: "video", viewsText: "1.3M views" },
];

/** The reel shown on the phone's screen. */
export const PHONE_SCREEN: ShowcaseImage = {
  id: "screen",
  src: "/v-front.mp4",
  alt: "Benita Rolls reel",
  mediaType: "video",
};

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

/** Cards per sequence — high enough that one copy always spans the screen. */
const MIN_CARDS_PER_SEQUENCE = 14;
const PLACEHOLDER_COUNT = 8;

export interface PhoneMarqueeShowcaseProps {
  images?: ShowcaseImage[];
  phoneScreen?: ShowcaseImage | null;
  /** Seconds for one full loop. Higher = slower. */
  duration?: number;
  /** Classes for the <section>. Replace to match your site background. */
  className?: string;
  ariaLabel?: string;
  heading?: string;
  subtitle?: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function PhoneMarqueeShowcase({
  images = MARQUEE_IMAGES,
  phoneScreen = PHONE_SCREEN,
  heading = "Reels in Motion",
  subtitle = "A look at the stories we bring to life.",
  duration = 70,
  className = "bg-[#fbfde9]",
  ariaLabel = "Showcase",
}: PhoneMarqueeShowcaseProps) {
  const sequence = useMemo(() => {
    const source: ShowcaseImage[] =
      images.length > 0
        ? images
        : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
            id: `placeholder-${i}`,
            src: "",
            alt: "",
          }));
    const repeats = Math.max(1, Math.ceil(MIN_CARDS_PER_SEQUENCE / source.length));
    return Array.from({ length: repeats }, () => source).flat();
  }, [images]);

  return (
    <section
      aria-label={ariaLabel}
      className={`pm-section relative isolate w-full overflow-hidden ${className}`}
      style={{ "--pm-duration": `${duration}s` } as CSSProperties}
    >
      <style>{PM_CSS}</style>

      <div className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-6 pb-8 pt-12 text-center sm:pb-10 sm:pt-16">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{heading}</h2>
        {subtitle && <p className="mt-4 text-lg sm:text-xl">{subtitle}</p>}
      </div>

      {/* Marquee strip — travels right to left behind the phone */}
      <div className="pm-stage relative flex w-full items-center overflow-hidden">
        <div className="pm-track flex w-max">
          {/* Two identical copies → shifting by −50% loops with no jump */}
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="m-0 flex shrink-0 list-none gap-[var(--pm-gap)] p-0 pr-[var(--pm-gap)]"
            >
              {sequence.map((img, i) => (
                <li
                  key={`${img.id}-${i}`}
                  className="pm-item flex shrink-0 flex-col items-center gap-2"
                >
                  <div className="pm-card relative shrink-0 overflow-hidden">
                    {img.src ? (
                      img.mediaType === "video" ? (
                        <video
                          src={img.src}
                          aria-label={copy === 0 ? img.alt : undefined}
                          aria-hidden={copy === 1 ? true : undefined}
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
                          alt={copy === 0 ? img.alt : ""}
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
                  </div>
                  <span aria-hidden className="pm-views-pill inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700 shadow-md">
                    <Eye size={14} strokeWidth={2} />
                    {img.viewsText ?? "Views"}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {/* Phone — fixed in the centre, strip passes behind it */}
        <div className="pm-phone-wrap pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <Phone screen={phoneScreen} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Phone mockup (pure CSS / SVG — no image asset needed)                      */
/* -------------------------------------------------------------------------- */

function Phone({ screen }: { screen: ShowcaseImage | null }) {
  return (
    <div className="pm-phone relative rounded-[var(--pm-phone-r)] bg-neutral-900 p-[5px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.35)] ring-[3px] ring-neutral-200/90">
      <div className="relative h-full w-full overflow-hidden rounded-[calc(var(--pm-phone-r)-5px)] bg-sky-900">
        {screen?.src ? (
          screen.mediaType === "video" ? (
            <video
              src={screen.src}
              aria-label={screen.alt}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full select-none object-cover"
            />
          ) : (
            <img
              src={screen.src}
              alt={screen.alt}
              decoding="async"
              draggable={false}
              className="h-full w-full select-none object-cover"
            />
          )
        ) : (
          <div
            aria-hidden
            className="h-full w-full"
            style={{ background: "linear-gradient(170deg, #1d4ed8 0%, #0c2a6b 100%)" }}
          />
        )}

        {/* Dynamic island */}
        <div aria-hidden className="absolute left-1/2 top-[1.8%] h-[3.4%] w-[32%] -translate-x-1/2 rounded-full bg-black" />

        {/* Status bar */}
        <div aria-hidden className="absolute inset-x-[9%] top-[1.9%] flex items-center justify-between text-white">
          <span className="text-[0.55rem] font-semibold leading-none sm:text-[0.65rem] lg:text-xs">9:41</span>
          <span className="flex items-center gap-[0.2rem]">
            <svg viewBox="0 0 18 12" className="h-2 w-3 sm:h-2.5 sm:w-3.5" fill="currentColor">
              <rect x="0" y="8" width="3" height="4" rx="0.8" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
              <rect x="10" y="3" width="3" height="9" rx="0.8" />
              <rect x="15" y="0" width="3" height="12" rx="0.8" />
            </svg>
            <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor">
              <path d="M12 19.5 8.5 16a5 5 0 0 1 7 0L12 19.5Zm-6-6a8.5 8.5 0 0 1 12 0l-1.8 1.8a6 6 0 0 0-8.4 0L6 13.5Zm-3.5-3.5a13.5 13.5 0 0 1 19 0l-1.8 1.8a11 11 0 0 0-15.4 0L2.5 10Z" />
            </svg>
            <svg viewBox="0 0 28 14" className="h-2 w-4 sm:h-2.5 sm:w-5" fill="none">
              <rect x="0.5" y="0.5" width="22" height="13" rx="3.5" stroke="currentColor" opacity="0.5" />
              <rect x="2" y="2" width="19" height="10" rx="2.2" fill="currentColor" />
              <rect x="24" y="4.5" width="2.5" height="5" rx="1.2" fill="currentColor" opacity="0.5" />
            </svg>
          </span>
        </div>

        {/* Lock-screen shortcuts */}
        <span aria-hidden className="absolute bottom-[3.5%] left-[8%] flex aspect-square w-[13%] items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-[48%] w-[48%]" fill="currentColor">
            <path d="M9 2h6v3l-1 2v2h-4V7L9 5V2Zm1 9h4v11h-4V11Z" />
          </svg>
        </span>
        <span aria-hidden className="absolute bottom-[3.5%] right-[8%] flex aspect-square w-[13%] items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-[50%] w-[50%]" fill="currentColor">
            <path d="M9 4 7.6 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.6L15 4H9Zm3 4.5a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Helpers & styles                                                           */
/* -------------------------------------------------------------------------- */

function placeholderGradient(seed: number): string {
  const hue = (seed * 53 + 20) % 360;
  return `linear-gradient(160deg, hsl(${hue} 45% 62%), hsl(${(hue + 35) % 360} 50% 38%))`;
}

/*  (Move into your global stylesheet if you prefer; keep the class names.)    */
const PM_CSS = `
.pm-section {
  /* Mobile defaults */
  --pm-card-w: 7.5rem;
  --pm-card-h: 9.5rem;
  --pm-gap: 0.6rem;
  --pm-card-r: 0.7rem;
  --pm-phone-r: 1.6rem;

  /* The phone is as wide as one card and much taller */
  --pm-phone-w: var(--pm-card-w);
  --pm-phone-h: calc(var(--pm-card-h) * 1.7);

}
.pm-stage {
  min-height: calc(var(--pm-phone-h) + 4rem);
}
@media (min-width: 640px) {
  .pm-section {
    --pm-card-w: 10.5rem; --pm-card-h: 13rem; --pm-gap: 0.8rem;
    --pm-card-r: 0.9rem;  --pm-phone-r: 2.1rem;
  }
}
@media (min-width: 1024px) {
  .pm-section {
    --pm-card-w: 15rem; --pm-card-h: 18.5rem; --pm-gap: 1rem;
    --pm-card-r: 1.1rem; --pm-phone-r: 2.6rem;
  }
}

.pm-card {
  width: var(--pm-card-w);
  height: var(--pm-card-h);
  border-radius: var(--pm-card-r);
}
.pm-views-pill {
  white-space: nowrap;
}
.pm-phone {
  width: var(--pm-phone-w);
  height: var(--pm-phone-h);
}

/* Right → left. Each copy is one full sequence, so -50% lands exactly on the
   start of the second copy and the loop is invisible. */
.pm-track {
  animation: pm-scroll var(--pm-duration, 70s) linear infinite;
  will-change: transform;
}
@keyframes pm-scroll {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .pm-track { animation-play-state: paused; }
}
`;
