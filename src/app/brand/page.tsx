import type { Metadata } from "next";
import { DoorLogo, DoorMark, brand } from "@/components/logo";

// Brand sheet: the doorway logo in every colour variant, side by side.
// Each section sets its own data-look, so it keeps its colours whatever look
// the visitor has chosen. Not linked from the site and not in the sitemap.
export const metadata: Metadata = {
  title: "Brand mock-up",
  robots: { index: false, follow: false },
};

type Swatch = { name: string; hex: string; dark: boolean };

const looks: {
  id: "teal" | "brick" | "cream" | "cobalt" | "berry" | "violet" | "red" | "pastel" | "modern";
  name: string;
  note: string;
  page: string;
  swatches: Swatch[];
}[] = [
  {
    id: "teal",
    name: "Teal",
    note: "The original open door colours: deep teal with a warm sunlight yellow.",
    page: "#ffffff",
    swatches: [
      { name: "Teal", hex: "#0f4c5c", dark: true },
      { name: "Sunlight", hex: "#f2c14e", dark: false },
      { name: "Sky", hex: "#dcebf0", dark: false },
      { name: "Ink", hex: "#10232a", dark: true },
    ],
  },
  {
    id: "brick",
    name: "Brick",
    note: "Warm terracotta with a sand-gold accent and blush panels.",
    page: "#ffffff",
    swatches: [
      { name: "Brick", hex: "#8f3f26", dark: true },
      { name: "Sand", hex: "#f4c27a", dark: false },
      { name: "Blush", hex: "#f6e9e1", dark: false },
      { name: "Ink", hex: "#2a1a14", dark: true },
    ],
  },
  {
    id: "cream",
    name: "Cream and olive",
    note: "Adam's palette: olive on an ivory page, with champagne for accents only.",
    page: "#f8f7f2",
    swatches: [
      { name: "Olive", hex: "#526747", dark: true },
      { name: "Champagne", hex: "#d4c6ad", dark: false },
      { name: "Pale green", hex: "#e7ede3", dark: false },
      { name: "Ivory", hex: "#f8f7f2", dark: false },
    ],
  },
  {
    id: "cobalt",
    name: "Cobalt",
    note: "Bold: electric cobalt blue with a bright yellow. Confident and trustworthy, and stands out from the navy banks.",
    page: "#ffffff",
    swatches: [
      { name: "Cobalt", hex: "#1f3fd1", dark: true },
      { name: "Yellow", hex: "#ffd23f", dark: false },
      { name: "Ice", hex: "#e3e8fc", dark: false },
      { name: "Ink", hex: "#0d1640", dark: true },
    ],
  },
  {
    id: "berry",
    name: "Berry",
    note: "Bold: deep raspberry with a warm gold. Friendly and memorable; no other local broker looks like this.",
    page: "#ffffff",
    swatches: [
      { name: "Berry", hex: "#b5124f", dark: true },
      { name: "Gold", hex: "#ffc845", dark: false },
      { name: "Pink", hex: "#fbe4ec", dark: false },
      { name: "Ink", hex: "#2a0a17", dark: true },
    ],
  },
  {
    id: "violet",
    name: "Violet",
    note: "Boldest: electric violet with a lime accent. Modern and energetic, closer to a fintech than a high street broker.",
    page: "#ffffff",
    swatches: [
      { name: "Violet", hex: "#5b2be0", dark: true },
      { name: "Lime", hex: "#d4f55c", dark: false },
      { name: "Lilac", hex: "#ebe5fd", dark: false },
      { name: "Ink", hex: "#1a0f3d", dark: true },
    ],
  },
  {
    id: "red",
    name: "Signal red",
    note: "Bold: a strong red with yellow. Loud and high street; the risk is that red can read as a warning on money pages.",
    page: "#ffffff",
    swatches: [
      { name: "Red", hex: "#c8102e", dark: true },
      { name: "Yellow", hex: "#ffd23f", dark: false },
      { name: "Blush", hex: "#fde6e8", dark: false },
      { name: "Ink", hex: "#2b0a0f", dark: true },
    ],
  },
  {
    id: "pastel",
    name: "Pastel",
    note: "The default. Matt's pastel palette: aqua, blue, mint, sage and lime bands with deep navy for text, buttons and the logo.",
    page: "#ffffff",
    swatches: [
      { name: "Aqua", hex: "#abdee0", dark: false },
      { name: "Blue", hex: "#c0def7", dark: false },
      { name: "Mint", hex: "#aadcc7", dark: false },
      { name: "Sage", hex: "#c9dfcd", dark: false },
      { name: "Lime", hex: "#d7e5b6", dark: false },
      { name: "Navy", hex: "#1e3a5f", dark: true },
    ],
  },
  {
    id: "modern",
    name: "Modern pastel",
    note: "The second pastel for the vote: pistachio, powder blue, butter yellow and dusty blush, with deep green-charcoal for text, buttons and the logo.",
    page: "#ffffff",
    swatches: [
      { name: "Powder blue", hex: "#c9dce8", dark: false },
      { name: "Butter yellow", hex: "#f1e3a8", dark: false },
      { name: "Pistachio", hex: "#c8d5c0", dark: false },
      { name: "Dusty blush", hex: "#e8c9c8", dark: false },
      { name: "Charcoal", hex: "#2c3b33", dark: true },
    ],
  },
];

export default function BrandPage() {
  return (
    <>
      <section className="bg-sky">
        <div className="wrap flex flex-col gap-5 py-14 md:py-20">
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-harbour md:text-7xl">Doorway brand in nine colours</h1>
          <p className="max-w-2xl text-xl leading-relaxed text-body">
            The same doorway logo, fonts and layout in each colour scheme. Add <code>?look=</code> and a colour name (teal, brick, cream, cobalt, berry, violet, red, pastel or modern) to any page to see the whole site in it.
          </p>
        </div>
      </section>

      {looks.map((look) => (
        <section
          key={look.id}
          data-look={look.id}
          aria-labelledby={`look-${look.id}`}
          className="py-16 md:py-20"
          style={{ background: look.page }}
        >
          <div className="wrap flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 id={`look-${look.id}`} className="font-display text-4xl font-extrabold tracking-[-0.025em] text-harbour md:text-5xl">
                {look.name}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                {look.note} <a className="font-semibold text-harbour underline underline-offset-4" href={`/?look=${look.id}`}>See the site in {look.name.toLowerCase()}</a>.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="flex min-h-[220px] items-center justify-center rounded-[20px] bg-white px-8 py-10">
                <DoorLogo onDark={false} size="md" />
              </div>
              <div className="flex min-h-[220px] items-center justify-center rounded-[20px] bg-harbour px-8 py-10">
                <DoorLogo onDark size="md" />
              </div>
              <div className="flex min-h-[220px] items-end justify-center gap-6 rounded-[20px] bg-sky px-8 pt-10">
                <span className="flex h-24 w-24 items-end justify-center overflow-hidden rounded-[22px] bg-harbour px-4 pt-4 self-center">
                  <DoorMark className="h-auto w-full translate-y-[2px]" frame="#ffffff" doorway={brand.green} sun={brand.marigold} />
                </span>
                <DoorMark className="h-40 w-auto" frame={brand.green} doorway="var(--color-sky-soft)" />
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[20px] bg-sky-soft p-8 md:p-10">
              <p className="font-display text-5xl font-extrabold leading-[1] tracking-[-0.035em] text-harbour md:text-6xl">
                Mortgage advice in Tunbridge Wells
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-body">
                I search the whole of the market, explain the options in plain English and recommend the one that suits you.
              </p>
              <ul className="flex flex-wrap gap-3">
                {look.swatches.map((c) => (
                  <li
                    key={c.hex}
                    className={`flex h-24 w-40 flex-col justify-end rounded-[14px] p-3 text-sm ${c.dark ? "text-white" : "text-ink"}`}
                    style={{ background: c.hex, boxShadow: c.hex === look.page ? "inset 0 0 0 1px var(--color-line)" : undefined }}
                  >
                    <span className="font-semibold">{c.name}</span>
                    <span>{c.hex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section aria-labelledby="type" className="bg-sky-soft py-16 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 id="type" className="font-display text-4xl font-extrabold tracking-[-0.025em] text-harbour md:text-5xl">
              Type
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Two fonts in every colour scheme. Bricolage Grotesque draws the &ldquo;moore&rdquo; wordmark and every heading, so the logo and the page speak with one voice. Figtree is for body text because it reads well at small sizes.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-display text-6xl font-extrabold leading-[1] tracking-[-0.035em] text-ink">
              Let&rsquo;s get you home.
            </p>
            <p className="text-lg leading-relaxed text-body">
              I search the whole of the market, explain the options in plain English and recommend the one that suits you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
