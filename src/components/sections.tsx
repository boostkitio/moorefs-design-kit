import Link from "next/link";
import type { ReactNode } from "react";
import { brand, DoorMark, RoofMark } from "@/components/logo";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import type { Photo as PhotoData } from "@/lib/photos";
import { site } from "@/lib/site";

/**
 * The top of every inner page. With a photo, the picture stands on the bottom
 * edge of the panel under the brand roofline, like Adam on the homepage.
 */
export function PageHero({
  title,
  intro,
  photo,
  warning,
  children,
}: {
  title: string;
  intro: string;
  photo?: PhotoData;
  /** A risk warning shown in large type under the intro (the network asked for this on mortgage pages). */
  warning?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-sky">
      <div
        className={`wrap grid gap-10 pt-12 md:pt-16 ${
          photo ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16" : "items-end pb-14 md:pb-20 lg:grid-cols-[1fr_auto]"
        }`}
      >
        <div className={`flex max-w-3xl flex-col gap-6 ${photo ? "lg:pb-20" : ""}`}>
          <h1
            className={`font-display text-[2.5rem] font-extrabold leading-[1] tracking-[-0.035em] text-harbour sm:text-6xl ${
              photo ? "lg:text-[3.75rem] xl:text-[4.25rem]" : "lg:text-7xl"
            }`}
          >
            {title}
          </h1>
          <p className="rise max-w-2xl text-xl leading-relaxed text-body">{intro}</p>
          {warning && <p className="max-w-2xl text-xl font-bold leading-snug text-harbour md:text-2xl">{warning}</p>}
          {children && <div className="rise flex flex-col gap-5">{children}</div>}
        </div>
        {photo ? (
          <Photo
            photo={photo}
            priority
            caption={false}
            sizes="(min-width: 640px) 480px, 90vw"
            className="sunrise mx-auto w-full max-w-[480px] lg:mx-0 lg:translate-x-[4.5%] lg:justify-self-end"
          />
        ) : (
          <>
            <RoofMark className="look-roof hidden h-auto w-72 self-start lg:mt-6 lg:block" color={brand.leaf} />
            <DoorMark className="hidden h-auto w-40 self-end lg:block" frame={brand.green} doorway="var(--color-sky)" />
          </>
        )}
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/contact" className="btn btn-primary">
        Tell me what you need
      </Link>
      <a href={site.whatsapp} className="btn bg-white text-harbour hover:bg-sky-soft">
        Message on WhatsApp
      </a>
    </div>
  );
}

export function CtaBand({
  title = "Tell me what you need",
  body = "Send a short enquiry, call or message me on WhatsApp. The first conversation is free and there is no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="overflow-hidden bg-harbour">
      <div className="wrap grid items-center gap-8 py-16 md:py-20 lg:grid-cols-[1fr_auto]">
        <Reveal className="flex max-w-2xl flex-col gap-3 pr-16 sm:pr-0">
          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl">{title}</h2>
          <p className="text-lg leading-relaxed text-sky">{body}</p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-sun">
            Start your enquiry
          </Link>
          <a href={site.phone.href} className="btn btn-outline-light">
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <details key={item.q} className="group rounded-[14px] bg-sky-soft px-5 py-4 transition-colors open:bg-sky sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold leading-snug text-harbour sm:text-xl">
            {item.q}
            <span aria-hidden="true" className="text-2xl transition-[rotate] duration-200 ease-out group-open:rotate-45 motion-reduce:transition-none">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-body">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <Reveal className="flex max-w-3xl flex-col gap-3">
      <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-harbour md:text-5xl">
        {title}
      </h2>
      {intro && <p className="text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
