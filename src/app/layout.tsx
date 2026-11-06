import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions";
import { GoogleReviewsBand } from "@/components/google-reviews";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { google, isLive, site } from "@/lib/site";
import "./globals.css";

// Two fonts in every look: Bricolage for headings and the wordmark, Figtree
// for body text (see globals.css).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mortgage and protection advice in Tunbridge Wells | Moore Financial Solutions",
    template: "%s | Moore Financial Solutions",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
  alternates: { canonical: "/" },
  robots: isLive ? undefined : { index: false, follow: false },
};

// Business details for search engines, tied to the Google Business Profile.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: site.legalName,
  url: site.url,
  description: site.description,
  telephone: "+442086937552",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.office.line1}, ${site.office.line2}`,
    addressLocality: site.office.town,
    postalCode: site.office.postcode,
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", ...site.geo },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: site.hours.dayOfWeek,
    opens: site.hours.opens,
    closes: site.hours.closes,
  },
  hasMap: google.cidUrl,
  sameAs: [google.cidUrl, site.social.facebook, site.trustpilot],
  founder: {
    "@type": "Person",
    name: site.adviser,
    jobTitle: "Director, mortgage and protection adviser",
    sameAs: [site.social.linkedin],
  },
};

// Sets the look before the page paints: ?look=pastel|modern|teal|brick|cream|cobalt|berry|violet|red,
// remembered on this device. Pastel is the default (Matt, 5 November 2026) and
// is also rendered on <html>, so the page is pastel without scripts. Older
// links still work: ?look=door means teal, ?look=green falls back to the default.
const lookScript = `try{var q=new URLSearchParams(location.search),l=q.get("look")||q.get("palette");if(l==="door")l="teal";if(l==="green")l="pastel";var k=["pastel","modern","teal","brick","cream","cobalt","berry","violet","red"];if(k.indexOf(l)>-1)localStorage.setItem("look",l);l=localStorage.getItem("look");document.documentElement.dataset.look=k.indexOf(l)>-1?l:"pastel"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" data-look="pastel" data-scroll-behavior="smooth" className={`${bricolage.variable} ${figtree.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: lookScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <GoogleReviewsBand />
        <SiteFooter />
        <FloatingActions />
        <ScrollToTop />
      </body>
    </html>
  );
}
