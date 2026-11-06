import type { enquiryGoals } from "@/lib/enquiry";

// Blog posts. Each entry here has a body at src/content/blog/<slug>.mdx.
// Every post is a financial promotion: the network must approve it before the
// site goes live, and again after any change to the wording.
export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date the post was first published. */
  published: string;
  /** ISO date of the last meaningful change, if any. */
  updated?: string;
  topic: "Commercial finance" | "Bridging and development" | "Mortgages";
  minutes: number;
  /** The service page the post supports, linked at the end. */
  related: { href: string; label: string };
  goal: (typeof enquiryGoals)[number];
  /** Shows the "not regulated by the FCA" note. */
  unregulated?: boolean;
  /** Shows the repossession warning: the post covers mortgages on your home. */
  homeMortgage?: boolean;
  /** Shows the buy to let regulation note. */
  buyToLet?: boolean;
};

const commercial = "Commercial, development or bridging" as const;

export const posts: Post[] = [
  {
    slug: "budget-2026-property-changes",
    title: "Budget 2026: what the property changes mean for your mortgage",
    description:
      "A 2.5% deposit scheme for new builds, a new ISA for first homes, higher tax on rent and a surcharge on £2 million homes. Here is what changed and who it affects.",
    published: "2026-10-30",
    topic: "Mortgages",
    minutes: 5,
    related: { href: "/mortgages", label: "Mortgages I arrange" },
    goal: "Something else",
    homeMortgage: true,
    buyToLet: true,
  },
  {
    slug: "your-first-home-scheme",
    title: "Your First Home: how the 2.5% deposit scheme works",
    description:
      "The new government equity loan lets first-time buyers buy a new-build home with a 2.5% deposit. Here is how it works, what it costs after year five and what to do now.",
    published: "2026-10-30",
    topic: "Mortgages",
    minutes: 6,
    related: { href: "/mortgages/first-time-buyers", label: "First-time buyer mortgages" },
    goal: "Buy my first home",
    homeMortgage: true,
  },
  {
    slug: "landlord-tax-april-2027",
    title: "Landlords: tax on rental income rises to 24% from April 2027",
    description:
      "The Budget raised the planned tax rates on rental profit again. Here is what changes, what it could cost and what it means for your buy to let mortgage.",
    published: "2026-10-30",
    topic: "Mortgages",
    minutes: 5,
    related: { href: "/mortgages/buy-to-let", label: "Buy to let mortgages" },
    goal: "Buy to let",
    buyToLet: true,
  },
  {
    slug: "buying-commercial-property",
    title: "Buying commercial property: a step-by-step guide for business owners",
    description:
      "From working out what you can afford to completion day, here is how buying your own business premises works in England, and what lenders will ask along the way.",
    published: "2026-10-27",
    topic: "Commercial finance",
    minutes: 7,
    related: { href: "/commercial/business-premises", label: "Mortgages for business premises" },
    goal: commercial,
    unregulated: true,
  },
  {
    slug: "commercial-mortgage-deposit",
    title: "How much deposit do you need for a commercial mortgage?",
    description:
      "Most lenders want 25% to 40% of the price. Here is what moves that figure up or down, and the other costs to budget for.",
    published: "2026-10-27",
    topic: "Commercial finance",
    minutes: 5,
    related: { href: "/commercial/business-premises", label: "Mortgages for business premises" },
    goal: commercial,
    unregulated: true,
  },
  {
    slug: "commercial-mortgage-new-business",
    title: "Can you get a commercial mortgage for a new business?",
    description:
      "Yes, but lenders will look harder at you, your experience and your plan. Here is what helps a newer business get a yes.",
    published: "2026-10-27",
    topic: "Commercial finance",
    minutes: 5,
    related: { href: "/commercial/business-premises", label: "Mortgages for business premises" },
    goal: commercial,
    unregulated: true,
  },
  {
    slug: "regulated-vs-unregulated-bridging",
    title: "Regulated or unregulated bridging loan: which applies to you?",
    description:
      "Whether a bridging loan is regulated depends on whose home the property is, not on the lender. Here is how to tell, and why it matters.",
    published: "2026-10-27",
    topic: "Bridging and development",
    minutes: 5,
    related: { href: "/commercial/bridging-loans", label: "Bridging loans" },
    goal: commercial,
    unregulated: true,
  },
  {
    slug: "semi-commercial-property-40-percent-rule",
    title: "Semi-commercial property: shops with flats and the 40% rule",
    description:
      "Buying a shop with a flat above or another mixed-use building? How much of it is residential, and who lives there, changes how your mortgage works.",
    published: "2026-10-27",
    topic: "Commercial finance",
    minutes: 6,
    related: { href: "/commercial/semi-commercial", label: "Semi-commercial mortgages" },
    goal: commercial,
    unregulated: true,
  },
];

export const postsByDate = () => [...posts].sort((a, b) => b.published.localeCompare(a.published));

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
