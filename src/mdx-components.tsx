import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

// Internal links in blog posts use client-side navigation; external ones open
// normally. Article styling comes from `.article` in globals.css.
function A({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} rel="noopener" {...props} />;
}

const components: MDXComponents = {
  a: A,
  // Tables scroll sideways on phones instead of widening the page.
  table: (props) => (
    <div className="overflow-x-auto">
      <table {...props} />
    </div>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
