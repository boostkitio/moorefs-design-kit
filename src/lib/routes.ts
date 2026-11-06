import { posts } from "@/lib/blog";
import { calculators } from "@/lib/calculators";
import { commercialServices } from "@/lib/commercial";
import { mortgageServices } from "@/lib/site";

// Every public page, used by the sitemap and by Adam Bot (which may only
// link to these). "" is the homepage.
export const sitePaths = [
  "",
  "/mortgages",
  ...mortgageServices.map((s) => `/mortgages/${s.slug}`),
  "/commercial",
  ...commercialServices.map((s) => `/commercial/${s.slug}`),
  "/calculators",
  ...calculators.map((c) => `/calculators/${c.slug}`),
  "/protection",
  "/how-it-works",
  "/about",
  "/contact",
  "/privacy",
  "/blog",
  ...posts.map((p) => `/blog/${p.slug}`),
];
