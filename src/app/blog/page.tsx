import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/sections";
import { formatDate, postsByDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Guides to commercial finance and mortgages",
  description:
    "Plain-English guides from Adam Moore on commercial mortgages, bridging, development finance and home mortgages, for business owners, landlords and buyers in Kent and London.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const list = postsByDate();
  return (
    <>
      <PageHero
        title="Guides and answers"
        intro="The questions business owners, landlords and buyers ask me most, answered in plain English. If yours is not covered, ask me directly."
      />
      <section className="py-16 md:py-20">
        <div className="wrap">
          <ul className="flex max-w-5xl flex-col gap-2">
            {list.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group grid gap-2 rounded-[16px] bg-sky-soft px-5 py-6 transition-colors duration-150 hover:bg-sky md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:px-7">
                  <span className="flex flex-col gap-2">
                    <span className="font-display text-2xl font-bold tracking-[-0.02em] text-harbour md:text-[1.7rem] md:leading-tight">
                      {post.title}
                    </span>
                    <span className="text-[0.95rem] text-muted">
                      {post.topic} &middot; <time dateTime={post.published}>{formatDate(post.published)}</time>
                    </span>
                  </span>
                  <span className="text-lg leading-relaxed text-body">{post.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
