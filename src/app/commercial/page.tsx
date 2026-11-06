import type { Metadata } from "next";
import Link from "next/link";
import { RelatedCalculators } from "@/components/calculators/list";
import { EnquiryForm } from "@/components/enquiry-form";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { CtaBand, Faq, HeroActions, PageHero } from "@/components/sections";
import { posts } from "@/lib/blog";
import { commercialGoal, commercialServices } from "@/lib/commercial";
import { commercialQuestions as questions, commercialReadyList as readyList } from "@/lib/content";
import { photos } from "@/lib/photos";
import { commercialRegulationNote, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial mortgage broker in Kent",
  description:
    "Commercial mortgages, bridging loans and development finance for business owners and property investors in Kent, London and the South East, arranged by Adam Moore from the Salomons Estate near Tunbridge Wells.",
  alternates: { canonical: "/commercial" },
};



export default function CommercialPage() {
  const guides = posts.filter((p) => p.topic !== "Mortgages");

  return (
    <>
      <PageHero
        title="Commercial mortgages"
        photo={photos.estateBuildings}
        intro="I help business owners and property investors buy premises, refinance, and fund bridging and development projects. Before advising, I worked in banking, including key accounts for high street lenders, so I know how lenders look at a business."
      >
        <HeroActions />
      </PageHero>

      <section aria-labelledby="what-i-arrange" className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 id="what-i-arrange" className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-harbour md:text-5xl">
              What I arrange
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Every commercial case is different. I find the lenders that suit your property, your business and your timescale, then manage the application through to completion.
            </p>
          </div>
          <Reveal as="ul" className="flex flex-col gap-2">
            {commercialServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/commercial/${s.slug}`} className="group grid gap-1 rounded-[16px] bg-sky-soft px-5 py-4 transition-colors duration-150 hover:bg-sky sm:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] sm:items-center sm:gap-8 sm:px-6">
                  <span className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour md:text-[1.75rem]">
                    {s.name}
                  </span>
                  <span className="text-body sm:text-right">{s.short}</span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="ready" className="bg-harbour py-16 text-white md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 id="ready" className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] md:text-5xl">
              What lenders will want to see
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-sky">
              You do not need all of this for our first conversation. Having it ready later makes the application quicker and the lender more comfortable.
            </p>
          </div>
          <Reveal as="ul" className="flex flex-col gap-2">
            {readyList.map((item) => (
              <li key={item} className="rounded-[14px] bg-white/10 px-5 py-4 text-lg leading-relaxed">
                {item}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="local" className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="flex flex-col gap-5">
            <h2 id="local" className="font-display text-[2rem] font-extrabold sm:text-4xl leading-[1.02] tracking-[-0.03em] text-harbour md:text-5xl">
              Based in Kent, working across the South East
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              My office is on the {site.office.line1}, just outside {site.office.town}. I help businesses and investors across Tunbridge Wells, Tonbridge, Sevenoaks, Maidstone and the rest of Kent, as well as London and the South East.
            </p>
          </div>
          <Photo photo={photos.mansionTrees} sizes="(min-width: 1024px) 560px, 92vw" />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_440px]">
          <div className="flex flex-col gap-10">
            <p className="rounded-[14px] bg-sky-soft px-5 py-4 leading-relaxed text-body">{commercialRegulationNote}</p>
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Common questions</h2>
              <Faq items={questions} />
            </div>
            <RelatedCalculators path="/commercial" />
            {guides.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Guides for business owners and investors</h2>
                <ul className="flex flex-col gap-2">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/blog/${g.slug}`} className="text-lg font-semibold text-harbour underline underline-offset-4 hover:no-underline">
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside className="h-fit rounded-[20px] bg-sky p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-harbour">Quick enquiry</h2>
            <p className="mt-2 mb-5 leading-relaxed text-muted">Tell me about the property and what you need, and I will come back to you with options.</p>
            <EnquiryForm variant="compact" defaultGoal={commercialGoal} />
          </aside>
        </div>
      </section>

      <CtaBand
        title="Talk through your plans"
        body="Tell me about the property, the business and your timescale. The first conversation is free and there is no obligation."
      />
    </>
  );
}
