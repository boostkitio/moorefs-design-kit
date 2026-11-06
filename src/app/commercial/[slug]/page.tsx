import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedCalculators } from "@/components/calculators/list";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Faq, HeroActions, PageHero } from "@/components/sections";
import { posts } from "@/lib/blog";
import { commercialGoal, commercialServices } from "@/lib/commercial";
import { photos, type Photo } from "@/lib/photos";
import { commercialRegulationNote } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return commercialServices.map((s) => ({ slug: s.slug }));
}

const heroPhotos: Photo[] = [photos.estateBuildings, photos.mansionAerial, photos.woodlandAerial, photos.mansionFront, photos.mansionTrees, photos.waterTower];

export async function generateMetadata({ params }: PageProps<"/commercial/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = commercialServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/commercial/${service.slug}` },
  };
}

export default async function CommercialServicePage({ params }: PageProps<"/commercial/[slug]">) {
  const { slug } = await params;
  const service = commercialServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const href = `/commercial/${service.slug}`;
  const others = commercialServices.filter((s) => s.slug !== service.slug);
  const guides = posts.filter((p) => p.related.href === href);

  return (
    <>
      <PageHero
        title={service.name}
        intro={service.intro}
        photo={heroPhotos[commercialServices.indexOf(service) % heroPhotos.length]}
      >
        <HeroActions />
        <Link href="/commercial" className="self-start font-bold text-harbour underline underline-offset-4 hover:no-underline">
          All commercial finance
        </Link>
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
            <p className="rounded-[14px] bg-sky-soft px-5 py-4 leading-relaxed text-body">{commercialRegulationNote}</p>
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Common questions</h2>
              <Faq items={service.questions} />
            </div>
            <RelatedCalculators path={`/commercial/${service.slug}`} />
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
            <p className="mt-2 mb-5 leading-relaxed text-muted">Tell me about the property and what you need, and I will come back to you with options.</p>
            <EnquiryForm variant="compact" defaultGoal={commercialGoal} />
          </aside>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap flex flex-col gap-6">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">More commercial finance</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/commercial/${s.slug}`} className="group flex h-full flex-col gap-1 rounded-[16px] bg-sky-soft px-5 py-4 transition-colors duration-150 hover:bg-sky">
                  <span className="font-display text-xl font-bold text-harbour">{s.name}</span>
                  <span className="text-muted">{s.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Talk through your plans"
        body="Tell me about the property, the business and your timescale. The first conversation is free and there is no obligation."
      />
    </>
  );
}
