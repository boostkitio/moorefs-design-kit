import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Moore Financial Solutions Ltd collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

// Draft for network review. Replace with the network-approved privacy notice before launch.
export default function PrivacyPage() {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap">
        <div className="flex max-w-3xl flex-col gap-8">
        <h1 className="font-display text-5xl font-extrabold tracking-[-0.035em] text-harbour">Privacy notice</h1>
        <div className="prose-moore flex flex-col gap-4">
          <p>
            {site.legalName} (&ldquo;we&rdquo;) is responsible for the personal information you share with us through this website. This notice explains what we collect, why, and your rights.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">What we collect</h2>
          <p>
            When you send an enquiry we collect the details you give us, such as your name, email address, phone number and what you are looking to do. If you choose to, you can also share your date of birth, current address, property value, deposit, employment and timescale.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">How we use it</h2>
          <p>
            We use your information to respond to your enquiry, to set up your secure client portal, and to provide mortgage and protection advice if you go ahead. Our client records are held in Score, the client management system used by our network, {site.principal}, which reviews our advice for regulatory compliance.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">Who we share it with</h2>
          <p>
            We share your information only where needed to provide our service, for example with lenders, insurers, our network and the systems we use to manage your case. We never sell your information.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">Google Maps and reviews</h2>
          <p>
            Our contact page shows a map from Google Maps. When the map loads, Google receives your IP address and may set cookies on your device. Links to leave or read reviews take you to Google. Google&rsquo;s own privacy policy applies to both, at policies.google.com/privacy.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">Adam Bot</h2>
          <p>
            Adam Bot is an AI assistant that answers general questions using the content of this website. When you use it, your messages are sent to our AI provider, Anthropic, to generate a reply, and may be processed outside the UK. We do not store your conversation on our systems; your browser keeps it until you close the tab. Please do not share personal or financial details with Adam Bot. Anthropic&rsquo;s privacy policy is at anthropic.com/legal/privacy.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">Calculators</h2>
          <p>
            The calculators work in your browser. To save you typing the same figures twice, your browser remembers the figures you enter on this device. They are not sent to us unless you choose to send them with an enquiry. You can clear them at any time by clearing this site&rsquo;s data in your browser.
          </p>
          <h2 className="font-display text-2xl font-bold text-harbour">Your rights</h2>
          <p>
            You can ask to see the information we hold about you, ask us to correct or delete it, or object to how we use it. Contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-harbour underline">{site.email}</a>. You can also complain to the Information Commissioner&rsquo;s Office at ico.org.uk.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
