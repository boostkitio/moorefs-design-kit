import { useId } from "react";

/*
 * Roofline brand (mock-up on branch brand-green), drawn from the client's
 * logo sheet: a shallow roof with a chimney over a widely spaced wordmark.
 *
 * Roof geometry (viewBox 400 x 64): eaves at (6,58) and (394,58), ridge at
 * (200,8), so the slope is 50/194. The chimney sits on the right-hand slope
 * and its legs end exactly on the roofline, so it reads as one shape.
 */

/** Brand colours for SVG artwork. They read the theme tokens in globals.css, so
 *  every look (?look=teal, brick or cream) recolours the artwork too. Use them
 *  through `style`, not SVG attributes. Hex values are on /brand. */
export const brand = {
  green: "var(--color-harbour)",
  greenDark: "var(--color-harbour-dark)",
  marigold: "var(--color-sun)",
  leaf: "var(--color-sun-deep)",
  /** The sun in the doorway logo, tuned per look to show on a white doorway. */
  doorSun: "var(--color-door-sun)",
};

type RoofProps = {
  className?: string;
  /** Roof and chimney colour */
  color?: string;
  title?: string;
};

export function RoofMark({ className, color = "currentColor", title }: RoofProps) {
  return (
    <svg
      viewBox="0 0 400 64"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M326,40.5 V8 H346 V45.6 L340,44.1 V15 H332 V42 Z" style={{ fill: color }} />
      <path d="M6,58 L200,8 L394,58" fill="none" style={{ stroke: color }} strokeWidth="6" strokeLinejoin="miter" />
    </svg>
  );
}

/** Round badge: the roof crossing a solid circle. For avatars and the favicon. */
export function LogoBadge({
  className,
  fill = brand.green,
  roof = "#ffffff",
  title,
}: {
  className?: string;
  fill?: string;
  roof?: string;
  title?: string;
}) {
  const clip = useId();
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <clipPath id={clip}>
        <circle cx="50" cy="50" r="50" />
      </clipPath>
      <circle cx="50" cy="50" r="50" style={{ fill }} />
      <g clipPath={`url(#${clip})`}>
        <path d="M70,53.3 V35 H79 V56.3 L76,55.3 V39 H73 V54.3 Z" style={{ fill: roof }} />
        <path d="M-2,72 L42,44 L102,64" fill="none" style={{ stroke: roof }} strokeWidth="4" />
      </g>
    </svg>
  );
}

type LogoProps = {
  tone?: "dark" | "light";
  /** Adds "Professional service and friendly approach" under a rule. */
  showStrapline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { word: "text-[1.6rem]", sub: "text-[0.66rem]", strap: "text-[0.55rem]" },
  md: { word: "text-[2.1rem]", sub: "text-[0.78rem]", strap: "text-[0.68rem]" },
  lg: { word: "text-[4.25rem]", sub: "text-[1.5rem]", strap: "text-[1.05rem]" },
};

/** The brand mark in every look: a doorway with the sun coming through. */
export function DoorMark({
  className,
  frame = brand.green,
  doorway = "#ffffff",
  sun = brand.doorSun,
}: {
  className?: string;
  frame?: string;
  doorway?: string;
  sun?: string;
}) {
  return (
    <svg viewBox="0 0 100 128" className={className} aria-hidden="true">
      <path d="M6,128 V50 A44,44 0 0 1 94,50 V128 Z" style={{ fill: frame }} />
      <path d="M24,128 V56 A26,26 0 0 1 76,56 V128 Z" style={{ fill: doorway }} />
      <circle cx="50" cy="56" r="11" style={{ fill: sun }} />
    </svg>
  );
}

/**
 * The doorway lockup: doorway plus lowercase wordmark. The wordmark is always
 * Bricolage at 800, whatever the look's heading font, so the logo keeps its
 * shape and only its colours change.
 */
export function DoorLogo({ onDark, size, className }: { onDark: boolean; size: "sm" | "md" | "lg"; className?: string }) {
  const big = size !== "sm";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <DoorMark
        className={`${big ? "h-12" : "h-9"} w-auto`}
        frame={onDark ? brand.marigold : brand.green}
        doorway={onDark ? brand.green : "#ffffff"}
        sun={onDark ? brand.marigold : brand.doorSun}
      />
      <span className="flex flex-col leading-none" aria-hidden="true">
        <span className={`font-(family-name:--font-bricolage) ${big ? "text-[2.5rem]" : "text-[1.9rem]"} font-[800] tracking-[-0.04em] ${onDark ? "text-white" : "text-harbour"}`}>
          moore
        </span>
        <span className={`mt-0.5 pl-0.5 ${big ? "text-[0.85rem]" : "text-[0.7rem]"} font-semibold ${onDark ? "text-sky" : "text-harbour"}`}>
          financial solutions
        </span>
      </span>
      <span className="sr-only">Moore Financial Solutions</span>
    </span>
  );
}

/** The site logo: the doorway lockup, coloured by the current look (30 October 2026). */
export function Logo({ tone, size, className }: LogoProps) {
  return <DoorLogo onDark={tone === "light"} size={size ?? "sm"} className={className} />;
}

/** Stacked roofline lockup: roof over MOORE over FINANCIAL SOLUTIONS. Retired
 *  from the site on 30 October 2026; kept in case Adam asks to see it again. */
export function RoofLogo({ tone = "dark", showStrapline = false, size = "sm", className }: LogoProps) {
  const onDark = tone === "light";
  const s = sizes[size];
  return (
    <span className={`look-roof inline-flex flex-col items-stretch font-display leading-none ${className ?? ""}`}>
      <RoofMark className="-mb-[0.06em] block h-auto w-0 min-w-full" color={onDark ? "#ffffff" : brand.green} />
      <span aria-hidden="true" className="flex flex-col items-center px-[6%]">
        <span
          className={`${s.word} mr-[-0.34em] font-medium tracking-[0.34em] ${onDark ? "text-white" : "text-ink"}`}
        >
          MOORE
        </span>
        <span
          className={`${s.sub} mt-[0.45em] mr-[-0.19em] font-normal tracking-[0.19em] whitespace-nowrap ${
            onDark ? "text-sun" : "text-harbour"
          }`}
        >
          FINANCIAL SOLUTIONS
        </span>
        {showStrapline && (
          <span className="mt-[1.1em] flex w-full flex-col items-center">
            <span className={`block h-px w-full ${onDark ? "bg-white/60" : "bg-harbour/60"}`} />
            <span
              className={`${s.strap} mt-[1.1em] mr-[-0.2em] text-center font-medium leading-[1.7] tracking-[0.2em] whitespace-nowrap ${
                onDark ? "text-white" : "text-ink"
              }`}
            >
              PROFESSIONAL SERVICE AND
              <br />
              FRIENDLY APPROACH
            </span>
          </span>
        )}
      </span>
      <span className="sr-only">Moore Financial Solutions</span>
    </span>
  );
}
