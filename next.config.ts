import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Commercial finance moved to its own section on 27 October 2026.
      { source: "/mortgages/commercial-and-bridging", destination: "/commercial", permanent: true },
    ];
  },
};

// Blog posts are .mdx files in src/content/blog, imported by the blog route.
// Plugins are named as strings so they work with Turbopack.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
