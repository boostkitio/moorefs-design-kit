import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { CtaBand, Faq, HeroActions, PageHero } from "@/components/sections";
import { protectionApproach, protectionQuestions as questions, protectionWhy } from "@/lib/content";
import { photos } from "@/lib/photos";
import { protectionTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Life insurance, critical illness and income protection",
  description:
    "Protection advice from Adam Moore: life insurance, critical illness cover and income protection to keep your mortgage paid and your family looked after.",
  alternates: { canonical: "/protection" },
};


export default function ProtectionPage() {
  return (
    <>
      <PageHero
        title="Cover built around your family"
        photo={photos.lake}
        intro="Life can change in a moment. The right protection keeps the mortgage paid and your family looked after, and it often costs less than people expect."
      >
        <HeroActions />
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_440px]">
          <div className="flex flex-col gap-10">
            <Reveal as="ul" className="flex flex-col gap-3">
              {protectionTypes.map((p) => (
                <li key={p.name} className="flex flex-col gap-2 rounded-[20px] bg-sky-soft p-6 sm:p-7">
                  <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">{p.name}</h2>
                  <p className="text-lg leading-relaxed text-body">{p.body}</p>
                </li>
              ))}
            </Reveal>
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Why it matters</h2>
              <p className="text-lg leading-relaxed text-body">{protectionWhy.body}</p>
              <p className="text-lg leading-relaxed text-body">
                {protectionWhy.fact}{" "}
                <span className="text-base">
                  (Source:{" "}
                  <a href={protectionWhy.source.href} className="underline underline-offset-2 hover:no-underline">
                    {protectionWhy.source.label}
                  </a>
                  )
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Advice, not a sales pitch</h2>
              <p className="text-lg leading-relaxed text-body">{protectionApproach}</p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Common questions</h2>
              <Faq items={questions} />
            </div>
          </div>
          <aside className="h-fit rounded-[20px] bg-sky p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-harbour">Talk about protection</h2>
            <p className="mt-2 mb-5 leading-relaxed text-muted">Tell me a little about you and I will be in touch.</p>
            <EnquiryForm variant="compact" defaultGoal="Protection only" />
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
