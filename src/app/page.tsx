import { AdamPortrait } from "@/components/adam-portrait";
import Link from "next/link";
import type { CSSProperties } from "react";
import { LenderLogos } from "@/components/lender-logos";
import { HomeCalculator } from "@/components/calculators/home-calculator";
import { EnquiryForm } from "@/components/enquiry-form";
import { ReviewsSection } from "@/components/google-reviews";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { calculators } from "@/lib/calculators";
import { photos } from "@/lib/photos";
import { mortgageServices, site } from "@/lib/site";

const steps = [
  {
    title: "Tell me what you need",
    body: "Send a quick enquiry, call or message me on WhatsApp. I will get back to you as quickly as I can.",
  },
  {
    title: "Your secure client portal",
    body: "You get your own portal to share documents safely from your phone, see your free credit report and message me directly.",
  },
  {
    title: "Advice and recommendation",
    body: "I search the whole of the market, explain the options in plain English and recommend the one that suits you.",
  },
  {
    title: "Application to completion",
    body: "I handle the application and keep the lender, solicitor and estate agent moving until you get the keys.",
  },
];

const helpWith = [
  ...mortgageServices.map((s) => ({ href: `/mortgages/${s.slug}`, name: s.name, short: s.short })),
  { href: "/commercial", name: "Commercial finance", short: "Business premises, bridging and development" },
  { href: "/protection", name: "Protection", short: "Life, critical illness and income protection" },
];

const moreCalculators = ["how-much-can-i-borrow", "stamp-duty", "remortgage", "overpayment"].flatMap((slug) =>
  calculators.filter((c) => c.slug === slug),
);

const h2 = "font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-harbour md:text-5xl";
const textLink = "self-start font-bold text-harbour underline underline-offset-4 hover:no-underline";

export default function Home() {
  return (
    <>
      <section className="bg-harbour text-white">
        <div className="wrap grid gap-12 pt-14 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="flex flex-col gap-7 lg:pb-24">
            <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-[6.75rem]">
              Let&rsquo;s get you home.
            </h1>
            <p className="rise max-w-[34rem] text-xl leading-relaxed text-sky" style={{ "--rise-delay": "80ms" } as CSSProperties}>
              I&rsquo;m Adam, a mortgage and protection adviser near Tunbridge Wells. I search the whole of the market for first-time buyers, movers, landlords and families across London, Kent and the rest of the UK.
            </p>
            <div className="rise flex flex-wrap gap-3" style={{ "--rise-delay": "160ms" } as CSSProperties}>
              <a href="#enquiry" className="btn btn-sun">
                Tell me what you need
              </a>
              <a href={site.whatsapp} className="btn btn-outline-light">
                Message on WhatsApp
              </a>
            </div>
            <p className="rise text-[0.975rem] text-sky" style={{ "--rise-delay": "240ms" } as CSSProperties}>
              Prefer to talk? Call{" "}
              <a href={site.phone.href} className="font-bold text-white underline underline-offset-4">
                {site.phone.display}
              </a>
            </p>
          </div>
          <AdamPortrait priority variant="hero" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_20rem] lg:items-end lg:gap-20">
          <Reveal>
            <p className="max-w-[26em] font-display text-2xl font-semibold leading-[1.25] sm:text-[1.75rem] tracking-[-0.015em] text-harbour lg:text-[2.125rem]">
              Most of my clients come to me through a friend or family member. I would love you to have the same experience they did: someone who answers the phone, explains each step and is genuinely pleased when you get the keys.
            </p>
          </Reveal>
          <Reveal className="flex flex-col gap-4 text-lg leading-relaxed text-body">
            <p>
              Before becoming an adviser I spent over ten years at Abbey and Santander, looking after key accounts and mortgage brokers, so I understand how lenders make their decisions.
            </p>
            <Link href="/about" className={textLink}>
              More about me
            </Link>
          </Reveal>
        </div>
      </section>

      <LenderLogos />

      <section aria-labelledby="help-with" className="pb-20 md:pb-28">
        <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal className="flex flex-col gap-4">
            <h2 id="help-with" className={h2}>
              What I can help with
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-body">
              Whether it is your first home, your next one, a property investment or premises for your business, I search the whole of the market and do the legwork for you.
            </p>
          </Reveal>
          <Reveal as="ul" className="flex flex-col gap-2">
            {helpWith.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group grid items-center gap-1 rounded-[16px] bg-sky-soft px-5 py-4 transition-colors duration-150 hover:bg-sky sm:grid-cols-[minmax(0,1fr)_minmax(0,15rem)_auto] sm:gap-6 sm:px-6"
                >
                  <span className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour md:text-[1.75rem]">{item.name}</span>
                  <span className="text-body sm:text-right">{item.short}</span>
                  <span
                    aria-hidden="true"
                    className="hidden text-2xl text-harbour transition-transform duration-200 ease-out group-hover:translate-x-1 sm:block"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="numbers" className="pb-20 md:pb-28">
        <div className="wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-col gap-4">
              <h2 id="numbers" className={h2}>
                Work out the numbers
              </h2>
              <p className="text-lg leading-relaxed text-body">
                Move the sliders to see a monthly repayment. Your figures carry into every calculator, and you can send them to me when you are ready.
              </p>
            </Reveal>
            <ul className="flex flex-col gap-1">
              {moreCalculators.map((c) => (
                <li key={c.slug}>
                  <Link href={`/calculators/${c.slug}`} className="-mx-4 flex flex-col rounded-[14px] px-4 py-3 transition-colors hover:bg-sky-soft">
                    <span className="font-display text-xl font-bold tracking-[-0.015em] text-harbour">{c.name}</span>
                    <span className="text-muted">{c.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/calculators" className={textLink}>
              All nine calculators
            </Link>
          </div>
          <HomeCalculator />
        </div>
      </section>

      <section aria-labelledby="how-it-works" className="bg-sky py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-4">
              <h2 id="how-it-works" className={h2}>
                How it works
              </h2>
              <p className="text-lg leading-relaxed text-body">
                No paperwork in the post and no chasing. Everything happens in one secure place, and you always know what happens next.
              </p>
              <Link href="/how-it-works" className={textLink}>
                The whole process, step by step
              </Link>
            </Reveal>
            <Photo photo={photos.waterTower} sizes="(min-width: 1024px) 440px, 90vw" className="w-full max-w-[440px]" />
          </div>
          <Reveal as="ol" className="flex flex-col gap-3 self-center">
            {steps.map((step) => (
              <li key={step.title} className="flex flex-col gap-2 rounded-[20px] bg-white p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour">{step.title}</h3>
                <p className="text-lg leading-relaxed text-body">{step.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="where" className="pt-20 md:pt-28">
        <div className="wrap flex flex-col gap-14 md:gap-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal className="flex flex-col gap-5">
              <h2 id="where" className={h2}>
                Based on the Salomons Estate
              </h2>
              <p className="text-lg leading-relaxed text-body">
                My office is on the {site.office.line1}, the Victorian estate just outside {site.office.town}. You can talk to me by phone or WhatsApp and share documents through your secure client portal, so getting advice is easy wherever you live. I started out in London and still work with many clients there, as well as across Kent and the rest of the UK.
              </p>
              <Link href="/contact" className={textLink}>
                Directions and opening hours
              </Link>
            </Reveal>
            <Photo photo={photos.mansionLawn} ratio={16 / 10} sizes="(min-width: 1024px) 540px, 90vw" />
          </div>
          <Photo photo={photos.estateAerial} frame="plain" ratio={21 / 9} sizes="(min-width: 1240px) 1176px, 100vw" />
        </div>
      </section>

      <ReviewsSection />

      <section id="enquiry" aria-labelledby="enquiry-heading" className="bg-sky py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <h2 id="enquiry-heading" className={h2}>
              Tell me what you need
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-body">
              It takes about a minute. I will set up your secure client portal so you never have to type the same details twice. The first conversation is free and there is no obligation.
            </p>
            <p className="text-lg text-body">
              Or call{" "}
              <a href={site.phone.href} className="font-bold text-harbour underline underline-offset-4">
                {site.phone.display}
              </a>
              , or{" "}
              <a href={site.whatsapp} className="font-bold text-harbour underline underline-offset-4">
                message me on WhatsApp
              </a>
              .
            </p>
            <Photo photo={photos.lake} sizes="(min-width: 1024px) 420px, 90vw" className="mt-6 hidden w-full max-w-[420px] lg:block" />
          </Reveal>
          <div className="rounded-[20px] bg-white p-6 sm:p-8">
            <EnquiryForm variant="compact" />
          </div>
        </div>
      </section>
    </>
  );
}
