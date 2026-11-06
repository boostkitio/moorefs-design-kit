import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBand, HeroActions, PageHero } from "@/components/sections";
import { processSteps as steps } from "@/lib/content";
import { photos } from "@/lib/photos";
import { feeNote } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "What to expect when you work with Moore Financial Solutions, from your first enquiry and secure client portal to completion and beyond.",
  alternates: { canonical: "/how-it-works" },
};


export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="From first message to the keys"
        photo={photos.gardenView}
        intro="No paperwork in the post and no chasing. Here is what happens when you work with me, step by step."
      >
        <HeroActions />
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal as="ol" className="flex flex-col gap-3">
            {steps.map((step) => (
              <li key={step.title} className="rounded-[20px] bg-sky-soft p-6 sm:p-8">
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] text-harbour md:text-3xl">{step.title}</h2>
                  <p className="text-lg leading-relaxed text-body">{step.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
          <aside className="flex h-fit flex-col gap-4 rounded-[20px] bg-harbour p-6 text-white sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em]">Fees</h2>
            <p className="text-lg leading-relaxed text-sky">
              {feeNote}
            </p>
            <Link href="/contact" className="btn btn-sun self-start">
              Start with a free conversation
            </Link>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
