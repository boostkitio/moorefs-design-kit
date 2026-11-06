import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedCalculators } from "@/components/calculators/list";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Faq, HeroActions, PageHero } from "@/components/sections";
import { posts } from "@/lib/blog";
import type { enquiryGoals } from "@/lib/enquiry";
import { photos, type Photo } from "@/lib/photos";
import { btlRegulationNote, mortgageServices } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return mortgageServices.map((s) => ({ slug: s.slug }));
}

const goalFor: Record<string, (typeof enquiryGoals)[number]> = {
  "first-time-buyers": "Buy my first home",
  "moving-home": "Move home",
  remortgage: "Remortgage",
  "buy-to-let": "Buy to let",
};

const photoFor: Record<string, Photo> = {
  "first-time-buyers": photos.lodge,
  "moving-home": photos.gardenView,
  remortgage: photos.estateAerial,
  "buy-to-let": photos.mansionAerial,
};

export async function generateMetadata({ params }: PageProps<"/mortgages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = mortgageServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/mortgages/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/mortgages/[slug]">) {
  const { slug } = await params;
  const service = mortgageServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = mortgageServices.filter((s) => s.slug !== service.slug);
  const guides = posts.filter((p) => p.related.href === `/mortgages/${service.slug}`);

  return (
    <>
      <PageHero title={service.name} intro={service.intro} photo={photoFor[service.slug]}>
        <HeroActions />
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_440px]">
          <Reveal className="flex flex-col gap-10">
            {service.sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">{section.heading}</h2>
                <p className="text-lg leading-relaxed text-body">{section.body}</p>
              </div>
            ))}
            {service.btlNote && (
              <p className="rounded-[14px] bg-sky-soft px-5 py-4 leading-relaxed text-body">
                {btlRegulationNote}
              </p>
            )}
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Common questions</h2>
              <Faq items={service.questions} />
            </div>
            <RelatedCalculators path={`/mortgages/${service.slug}`} />
            {guides.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Guides</h2>
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
          </Reveal>
          <aside className="h-fit rounded-[20px] bg-sky p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-harbour">Quick enquiry</h2>
            <p className="mt-2 mb-5 leading-relaxed text-muted">Tell me a little about your plans and I will be in touch.</p>
            <EnquiryForm variant="compact" defaultGoal={goalFor[service.slug]} />
          </aside>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap flex flex-col gap-6">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Other ways I can help</h2>
          <ul className="grid gap-2 sm:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/mortgages/${s.slug}`} className="group flex h-full flex-col gap-1 rounded-[16px] bg-sky-soft px-5 py-4 transition-colors duration-150 hover:bg-sky">
                  <span className="font-display text-xl font-bold text-harbour">{s.name}</span>
                  <span className="text-muted">{s.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
