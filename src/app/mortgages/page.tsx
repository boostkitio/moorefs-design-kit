import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBand, HeroActions, PageHero } from "@/components/sections";
import { photos } from "@/lib/photos";
import { mortgageServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mortgage advice",
  description:
    "Mortgage advice for first-time buyers, home movers, remortgages, landlords, commercial, development and bridging finance from Adam Moore in Tunbridge Wells.",
  alternates: { canonical: "/mortgages" },
};

export default function MortgagesPage() {
  return (
    <>
      <PageHero
        title="Mortgage advice for every move"
        photo={photos.mansionTrees}
        intro="I search the whole of the market, explain your options in plain English and handle the application from start to finish."
      >
        <HeroActions />
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="wrap">
        <Reveal as="ul" className="flex max-w-5xl flex-col gap-2">
          {mortgageServices.map((s) => (
            <li key={s.slug}>
              <Link href={`/mortgages/${s.slug}`} className="group grid gap-2 rounded-[16px] bg-sky-soft px-5 py-6 transition-colors duration-150 hover:bg-sky md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:px-7">
                <span className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour md:text-3xl">
                  {s.name}
                </span>
                <span className="text-lg leading-relaxed text-body">{s.intro}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/commercial" className="group grid gap-2 rounded-[16px] bg-sky-soft px-5 py-6 transition-colors duration-150 hover:bg-sky md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:px-7">
              <span className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour md:text-3xl">
                Commercial finance
              </span>
              <span className="text-lg leading-relaxed text-body">
                Mortgages for business premises and commercial investment property, plus bridging loans and development finance.
              </span>
            </Link>
          </li>
        </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
