import { AdamPortrait } from "@/components/adam-portrait";
import type { Metadata } from "next";
import { ReviewsSection } from "@/components/google-reviews";
import { Reveal } from "@/components/reveal";
import { CtaBand, HeroActions, PageHero } from "@/components/sections";
import { aboutAdam, aboutHighlights, aboutSpecialisms } from "@/lib/content";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet Adam Moore",
  description:
    "Adam Moore is the mortgage and protection adviser behind Moore Financial Solutions, based at the Salomons Estate near Tunbridge Wells.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Hello, I'm Adam"
        photo={photos.mansionFront}
        intro="I have worked in financial services since 1999, first for a lender and now as an adviser. I run Moore Financial Solutions from the Salomons Estate near Tunbridge Wells, helping people across London, Kent and the rest of the UK with mortgages and protection."
      >
        <HeroActions />
        <a href={site.social.linkedin} className="self-start font-bold text-harbour underline underline-offset-4 hover:no-underline">
          Connect with me on LinkedIn
        </a>
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Why I do this</h2>
            <div className="prose-moore flex flex-col gap-4 [&_p]:text-body">
              {aboutAdam.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <AdamPortrait />
        </div>
      </section>
      <section className="pb-4">
        <Reveal className="wrap grid gap-x-4 gap-y-4 md:grid-cols-3">
          {aboutHighlights.map((h) => (
            <div key={h.title} className="rounded-[20px] bg-sky-soft p-6">
              <h3 className="font-display text-2xl font-bold text-harbour">{h.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-body">{h.body}</p>
            </div>
          ))}
        </Reveal>
      </section>
      <section className="py-16 md:py-20">
        <div className="wrap flex max-w-5xl flex-col gap-6">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">Who I work with</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-body">{aboutSpecialisms.intro}</p>
          <Reveal as="ul" className="grid gap-4 md:grid-cols-3">
            {aboutSpecialisms.groups.map((g) => (
              <li key={g.title} className="rounded-[20px] bg-sky-soft p-6">
                <h3 className="font-display text-2xl font-bold text-harbour">{g.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-body">{g.body}</p>
              </li>
            ))}
          </Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-body">{aboutSpecialisms.community}</p>
        </div>
      </section>
      <ReviewsSection title="What clients say about working with me" />
      <CtaBand />
    </>
  );
}
