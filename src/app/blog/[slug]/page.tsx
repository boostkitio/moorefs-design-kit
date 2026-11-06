import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { CtaBand } from "@/components/sections";
import { formatDate, posts } from "@/lib/blog";
import { btlRegulationNote, repossessionWarning, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.published, modifiedTime: post.updated ?? post.published },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/blog/${post.slug}.mdx`);
  const url = `${site.url}/blog/${post.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      mainEntityOfPage: url,
      author: { "@type": "Person", name: site.adviser, url: `${site.url}/about` },
      publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="bg-sky">
        <div className="wrap flex max-w-5xl flex-col gap-5 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="text-[0.95rem] text-muted">
            <Link href="/blog" className="font-semibold text-harbour underline underline-offset-4 hover:no-underline">
              Guides
            </Link>{" "}
            &middot; {post.topic}
          </nav>
          <h1 className="max-w-6xl font-display text-[2rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-harbour sm:text-[2.6rem] lg:text-6xl">{post.title}</h1>
          <p className="max-w-2xl text-xl leading-relaxed text-body">{post.description}</p>
          <p className="text-[0.95rem] text-muted">
            By{" "}
            <Link href="/about" className="font-semibold text-harbour underline underline-offset-4 hover:no-underline">
              {site.adviser}
            </Link>{" "}
            &middot; <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated && (
              <>
                {" "}
                &middot; updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}{" "}
            &middot; {post.minutes} minute read
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-20">
          <div className="flex max-w-[44rem] flex-col gap-10">
            <article className="article">
              <Body />
            </article>
            {post.unregulated && (
              <p className="rounded-[14px] bg-sky-soft px-5 py-4 leading-relaxed text-body">
                Most commercial mortgages, development finance and bridging loans for business or investment purposes are not regulated by the Financial Conduct Authority.
              </p>
            )}
            {post.homeMortgage && (
              <p className="rounded-[14px] bg-sky-soft px-5 py-4 font-semibold leading-relaxed text-body">{repossessionWarning}</p>
            )}
            {post.buyToLet && (
              <p className="rounded-[14px] bg-sky-soft px-5 py-4 leading-relaxed text-body">{btlRegulationNote}</p>
            )}
            <p className="leading-relaxed text-muted">
              This guide is general information, not advice for your situation. Lenders&rsquo; criteria change, so speak to me before you make any decisions.
            </p>
            <Link href={post.related.href} className="btn btn-light self-start">
              {post.related.label}
            </Link>
          </div>
          <aside className="h-fit rounded-[20px] bg-sky p-6 sm:p-8 lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] text-harbour">Ask Adam</h2>
            <p className="mt-2 mb-5 leading-relaxed text-muted">Tell me a little about your plans and I will come back to you with options.</p>
            <EnquiryForm variant="compact" defaultGoal={post.goal} />
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
