import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/sections";
import { calculatorGroups, calculators } from "@/lib/calculators";
import { calculatorDisclaimer } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mortgage calculators",
  description:
    "Free mortgage calculators: monthly repayments, how much you could borrow, stamp duty, remortgaging, overpayments, buy to let, commercial mortgages and bridging loans.",
  alternates: { canonical: "/calculators" },
};

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        title="Mortgage calculators"
        intro="Run the numbers before you speak to anyone. Your figures carry from one calculator to the next on this device, and you can share a link to any result or send it straight to me."
      />

      <section className="py-16 md:py-24">
        <div className="wrap flex flex-col gap-16">
          {calculatorGroups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`} className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
              <div className="flex flex-col gap-2">
                <h2 id={`group-${group.id}`} className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour md:text-4xl">
                  {group.title}
                </h2>
                <p className="text-lg text-body">{group.intro}</p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {calculators
                  .filter((c) => c.group === group.id)
                  .map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/calculators/${c.slug}`}
                        className="group flex h-full flex-col gap-2 rounded-[20px] bg-sky-soft p-6 transition-colors duration-150 hover:bg-sky"
                      >
                        <span className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour">
                          {c.name}
                        </span>
                        <span className="leading-relaxed text-body">{c.short}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
          <p className="max-w-3xl text-sm leading-relaxed text-muted">{calculatorDisclaimer}</p>
        </div>
      </section>

      <CtaBand title="Numbers are only half of it" body="Lenders look at far more than a calculator can. Tell me what you are planning and I will tell you what is realistic. The first conversation is free." />
    </>
  );
}
