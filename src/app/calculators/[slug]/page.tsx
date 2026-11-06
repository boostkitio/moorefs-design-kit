import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalculatorList } from "@/components/calculators/list";
import { CtaBand, Faq } from "@/components/sections";
import { calculators, getCalculator } from "@/lib/calculators";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/calculators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) return {};
  return {
    title: calc.title,
    description: calc.description,
    alternates: { canonical: `/calculators/${calc.slug}` },
  };
}

export default async function CalculatorPage({ params }: PageProps<"/calculators/[slug]">) {
  const { slug } = await params;
  const calc = getCalculator(slug);
  if (!calc) notFound();

  const url = `${site.url}/calculators/${calc.slug}`;
  const others = calculators.filter((c) => c.slug !== calc.slug && c.group === calc.group);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: calc.name,
      description: calc.description,
      url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
      provider: { "@type": "FinancialService", name: site.legalName, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${site.url}/calculators` },
        { "@type": "ListItem", position: 3, name: calc.name, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="bg-sky">
        <div className="wrap py-10 md:py-14">
          <div className="flex max-w-4xl flex-col gap-4">
          <nav aria-label="Breadcrumb">
            <Link href="/calculators" className="font-semibold text-harbour underline-offset-4 hover:underline">
              Calculators
            </Link>
          </nav>
          <h1 className="font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-harbour md:text-6xl lg:text-7xl">{calc.name}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-body md:text-xl">{calc.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="wrap">
          {/* Design kit: the working calculator is not included. Style this area freely. */}
          <div className="flex min-h-80 flex-col items-center justify-center gap-2 rounded-[20px] bg-sky-soft p-8 text-center">
            <p className="font-display text-2xl font-bold text-harbour">{calc.name} goes here</p>
            <p className="max-w-md text-muted">The working calculator is not part of the design kit. The homepage shows how its inputs and results look.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="guide" className="py-14 md:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-20">
          <div className="flex flex-col gap-9">
            <h2 id="guide" className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-harbour">
              Making sense of the numbers
            </h2>
            {calc.guide.map((g) => (
              <div key={g.heading} className="flex flex-col gap-3">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour">{g.heading}</h3>
                <p className="text-lg leading-relaxed text-body">{g.body}</p>
              </div>
            ))}
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Questions people ask</h2>
              <Faq items={calc.questions} />
            </div>
          </div>
          <aside aria-labelledby="more-calculators" className="flex flex-col gap-4 lg:pt-3">
            <h2 id="more-calculators" className="font-display text-2xl font-bold text-harbour">
              More calculators
            </h2>
            <CalculatorList items={others} />
            <Link href="/calculators" className="font-semibold text-harbour underline underline-offset-4 hover:no-underline">
              See all calculators
            </Link>
          </aside>
        </div>
      </section>

      <CtaBand title="Ready for real figures?" body="Calculators give you a feel for the numbers. I can tell you what lenders would actually offer, based on your situation. The first conversation is free." />
    </>
  );
}
