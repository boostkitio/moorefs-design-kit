import Link from "next/link";
import { Logo } from "@/components/logo";
import { google, mortgageServices, regulatoryNotice, repossessionWarning, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-harbour text-sky">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo tone="light" size="md" className="self-start" />
          <p className="max-w-xs text-[0.975rem] leading-relaxed">
            Mortgage and protection advice from {site.adviser}, based near {site.office.town}.
          </p>
          <address className="text-[0.975rem] not-italic leading-relaxed">
            {site.office.line1}
            <br />
            {site.office.line2}
            <br />
            {site.office.town} {site.office.postcode}
          </address>
          <p className="text-[0.975rem]">
            {site.hours.days}, {site.hours.label}. {site.hours.note}.
          </p>
          <ul className="flex gap-5 text-[0.975rem]" aria-label="Follow">
            <li><a href={site.social.facebook} className="transition-colors hover:text-white hover:underline">Facebook</a></li>
            <li><a href={site.social.linkedin} className="transition-colors hover:text-white hover:underline">Adam on LinkedIn</a></li>
            <li><a href={site.trustpilot} className="transition-colors hover:text-white hover:underline">Trustpilot</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-white">Mortgages</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {mortgageServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/mortgages/${s.slug}`} className="transition-colors hover:text-white hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/commercial" className="transition-colors hover:text-white hover:underline">
                Commercial finance
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-white">More</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li><Link href="/protection" className="transition-colors hover:text-white hover:underline">Protection</Link></li>
            <li><Link href="/calculators" className="transition-colors hover:text-white hover:underline">Mortgage calculators</Link></li>
            <li><Link href="/how-it-works" className="transition-colors hover:text-white hover:underline">How it works</Link></li>
            <li><Link href="/blog" className="transition-colors hover:text-white hover:underline">Guides</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-white hover:underline">About</Link></li>
            <li><a href={site.clientPortal} className="transition-colors hover:text-white hover:underline">Client login</a></li>
            <li><Link href="/privacy" className="transition-colors hover:text-white hover:underline">Privacy notice</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-white">Contact</h2>
          <ul className="mt-3 flex flex-col gap-2">
            <li><a href={site.phone.href} className="transition-colors hover:text-white hover:underline">{site.phone.display}</a></li>
            <li><a href={site.mobile.href} className="transition-colors hover:text-white hover:underline">{site.mobile.display}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white hover:underline">{site.email}</a></li>
            <li><a href={site.whatsapp} className="transition-colors hover:text-white hover:underline">WhatsApp</a></li>
            <li>
              <a href={google.reviewsUrl} target="_blank" rel="noopener" className="transition-colors hover:text-white hover:underline">
                Google reviews<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-harbour-dark">
        <div className="wrap flex flex-col gap-3 py-8 text-[0.95rem] leading-relaxed [&>p]:max-w-3xl">
          <p className="font-semibold text-white">{repossessionWarning}</p>
          <p>{regulatoryNotice}</p>
          <p>
            The guidance and advice on this website is subject to the UK regulatory regime and is aimed at consumers based in the UK.
          </p>
          <p>&copy; {new Date().getFullYear()} {site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
