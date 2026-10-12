import { useMemo, type CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface BrandLogo {
  id: string;
  /** Path to the logo file, e.g. "/logos/acme.svg". */
  src: string;
  /** Accessible name — the brand's name. */
  name: string;
  /** Optional link to the brand's website. */
  href?: string;
  /** Optional intrinsic size, helps avoid layout shift. */
  width?: number;
  height?: number;
}

/* -------------------------------------------------------------------------- */
/*  1. EDIT ME — your real brand logos                                         */
/*  Only `id`, `src` and `name` are required. While this array is empty,       */
/*  blank cards are shown so you can preview the fixed curved layout.          */
/* -------------------------------------------------------------------------- */

export const BRAND_LOGOS: BrandLogo[] = [
  // { id: "brand-1", src: "/logos/brand-1.svg", name: "Brand One", href: "https://brand-one.com" },
  // { id: "brand-2", src: "/logos/brand-2.png", name: "Brand Two" },
];

/* -------------------------------------------------------------------------- */
/*  Config                                                                     */
/* -------------------------------------------------------------------------- */

/** Keep each pass wide enough to cover the viewport on larger screens. */
const MIN_LOGOS_PER_PASS = 12;
const PLACEHOLDER_COUNT = 10;

export interface BrandLogoShowcaseProps {
  logos?: BrandLogo[];
  heading?: string;
  subtitle?: string;
  /** Classes for the <section>. Replace the defaults to match your site background. */
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function BrandLogoShowcase({
  logos = BRAND_LOGOS,
  heading = "Brands I’ve Worked With",
  subtitle = "Creative collaborations across industries.",
  className = "bg-neutral-100 text-neutral-900",
}: BrandLogoShowcaseProps) {
  const sequence = useMemo(() => {
    const source: BrandLogo[] =
      logos.length > 0
        ? logos
        : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
          id: `placeholder-${i}`,
          src: "",
          name: "",
        }));

    const passCount = Math.ceil(MIN_LOGOS_PER_PASS / source.length) * source.length;
    return Array.from({ length: passCount }, (_, index) => ({
      logo: source[index % source.length],
      curve: -Math.sin((index / Math.max(passCount - 1, 1)) * Math.PI) * 64,
      isRepeat: index >= source.length,
    }));
  }, [logos]);

  return (
    <section
      aria-labelledby="brand-showcase-heading"
      className={`lo-section relative isolate h-[520px] w-full overflow-hidden sm:h-[600px] lg:h-[660px] ${className}`}
    >
      <style>{LO_CSS}</style>

      <div className="relative z-20 px-6 pt-12 text-center sm:pt-16">
        <h2
          id="brand-showcase-heading"
          className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          {heading}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-sm text-neutral-500 sm:text-base">{subtitle}</p>
        ) : null}
      </div>

      <div className="lo-marquee absolute inset-x-0 top-[50%] py-8 sm:top-[43%] sm:py-10">
        <div className="lo-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="lo-pass m-0 flex list-none items-center"
            >
              {sequence.map(({ logo, curve, isRepeat }, index) => {
                const cardInner = logo.src ? (
                  <img
                    src={logo.src}
                    alt={copy === 0 && !isRepeat ? logo.name : ""}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="max-h-full max-w-full select-none object-contain"
                  />
                ) : null;

                const cardClass =
                  "lo-card flex h-16 w-24 items-center justify-center rounded-2xl bg-white p-3 " +
                  "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5 " +
                  "sm:h-[5.25rem] sm:w-32 sm:p-4 lg:h-28 lg:w-44 lg:p-5";

                return (
                  <li
                    key={`${logo.id}-${index}`}
                    aria-hidden={isRepeat ? true : undefined}
                    className="lo-logo shrink-0"
                    style={{
                      "--curve-y": `${curve}px`,
                      "--wave-delay": `${-((index % 8) * 0.3)}s`,
                    } as CSSProperties}
                  >
                    <div className="lo-wave">
                      {logo.href ? (
                        <a
                          href={logo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${logo.name} (opens in a new tab)`}
                          tabIndex={copy === 1 || isRepeat ? -1 : undefined}
                          className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900`}
                        >
                          {cardInner}
                        </a>
                      ) : (
                        <div className={cardClass}>{cardInner}</div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>


    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Styles                                                                     */
/*  (Move into your global stylesheet if you prefer; keep the class names.)    */
/* -------------------------------------------------------------------------- */

const LO_CSS = `
.lo-section {
  --lo-gap: 1.25rem;
  --lo-duration: 45s;
}
.lo-marquee {
  transform: scale(1.05);
}
@media (min-width: 640px) {
  .lo-section { --lo-gap: 1.5rem; --lo-duration: 55s; }
}
.lo-track {
  animation: lo-marquee-ltr var(--lo-duration) linear infinite;
  will-change: transform;
}
.lo-marquee:hover .lo-track { animation-play-state: paused; }
.lo-pass {
  gap: var(--lo-gap);
  padding-inline-end: var(--lo-gap);
}
.lo-logo {
  transform: translateY(var(--curve-y));
}
.lo-wave {
  animation: lo-wave 2.4s ease-in-out var(--wave-delay) infinite alternate;
  will-change: transform;
}
@keyframes lo-wave {
  from { transform: translateY(-8px); }
  to   { transform: translateY(8px); }
}
.lo-card {
  transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1);
}
.lo-logo:hover { z-index: 10; }
.lo-logo:hover .lo-card {
  transform: scale(1.06);
  box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.28);
}
@keyframes lo-marquee-ltr {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .lo-track { animation: none; transform: translateX(-25%); }
  .lo-wave { animation: none; }
  .lo-card { transition: none; }
}
`;
