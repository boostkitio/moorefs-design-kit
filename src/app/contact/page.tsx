import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { OfficeMap, ReviewsSection } from "@/components/google-reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Adam",
  description:
    "Get in touch with Adam Moore for mortgage and protection advice. Send an enquiry, call, email or message on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-sky">
        <div className="wrap grid gap-8 py-14 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          {/* On mobile the map drops below the form; on desktop it sits under the contact details. */}
          <div className="contents lg:flex lg:flex-col lg:gap-10">
            <div className="order-1 flex flex-col gap-6 lg:order-none">
              <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-harbour md:text-7xl">
                Tell me what you need
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-body">
                Fill in the form and I will come back to you. If you would rather talk, call, email or message me on WhatsApp.
              </p>
              <ul className="grid gap-x-6 gap-y-3 text-lg sm:grid-cols-2">
                <li>
                  <span className="block text-sm font-semibold text-muted">Office</span>
                  <a href={site.phone.href} className="font-bold text-harbour underline-offset-4 hover:underline">{site.phone.display}</a>
                </li>
                <li>
                  <span className="block text-sm font-semibold text-muted">Mobile</span>
                  <a href={site.mobile.href} className="font-bold text-harbour underline-offset-4 hover:underline">{site.mobile.display}</a>
                </li>
                <li className="sm:col-span-2">
                  <span className="block text-sm font-semibold text-muted">Email</span>
                  <a href={`mailto:${site.email}`} className="break-all font-bold text-harbour underline-offset-4 hover:underline">{site.email}</a>
                </li>
                <li className="sm:col-span-2">
                  <a href={site.whatsapp} className="btn mt-1 bg-white text-harbour hover:bg-sky-soft">Message on WhatsApp</a>
                </li>
              </ul>
            </div>
            <OfficeMap className="order-3 lg:order-none" />
          </div>
          <div className="order-2 rounded-[20px] bg-white p-6 sm:p-8 lg:order-none">
            <EnquiryForm variant="full" />
          </div>
        </div>
      </section>
      <ReviewsSection limit={3} />
    </>
  );
}
