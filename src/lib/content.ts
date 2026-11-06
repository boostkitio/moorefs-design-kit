import { site } from "@/lib/site";

// Page copy that is shared between the pages and Adam Bot's knowledge, so the
// bot always answers from the same words visitors see. Edit the copy here.

/** The steps on /how-it-works. */
export const processSteps = [
  {
    title: "Your first conversation",
    body: "Send an enquiry, call or message me on WhatsApp. We will talk through what you are hoping to do, your circumstances and what matters to you. This first conversation is free and there is no obligation.",
  },
  {
    title: "Your secure client portal",
    body: "I will send you a link to your own secure portal. You can complete your details, upload documents from your phone, view your free credit report and message me, all in one place.",
  },
  {
    title: "Research and recommendation",
    body: "I search the whole of the market using the details you have shared, then talk you through the options and recommend the mortgage that suits you best, explaining why.",
  },
  {
    title: "Agreement in principle and application",
    body: "Once you are happy, I arrange an agreement in principle if you need one, then prepare and submit your full application to the lender.",
  },
  {
    title: "Valuation and mortgage offer",
    body: "The lender values the property and, once everything checks out, issues your mortgage offer. I keep you, your solicitor and your estate agent updated throughout.",
  },
  {
    title: "Protecting your home and family",
    body: "Before you complete, I will review the protection you might need, such as life insurance, critical illness cover and income protection, so you and your family are covered from day one.",
  },
  {
    title: "Completion, and beyond",
    body: "You get the keys. I stay in touch afterwards and contact you well before your deal ends, so a new rate is ready in good time.",
  },
];

/** "Common questions" on /protection. */
export const protectionQuestions = [
  {
    q: "Do I need protection if I have cover through work?",
    a: "Workplace cover can be valuable, but it usually ends if you leave and may not be enough to clear your mortgage. I will look at what you already have before recommending anything.",
  },
  {
    q: "Can I arrange protection without a mortgage?",
    a: "Yes. You do not need to arrange your mortgage with me to get protection advice.",
  },
  {
    q: "Will my health affect my cover?",
    a: "Insurers will ask about your health and lifestyle. Answering accurately matters, because it helps make sure a claim is paid when you need it. I will help you through the questions.",
  },
];

export const protectionApproach =
  "I will look at your mortgage, your family, any cover you already have through work, and your budget, then recommend what makes sense for you. Sometimes that means less cover than you expected, not more.";

/** "Why I do this" on /about. */
export const aboutAdam = [
  "Buying a home or protecting your family are some of the biggest financial decisions you will make. I want them to feel manageable, with someone on your side who explains things clearly and gets on with the work.",
  "I have worked in financial services since 1999. From 2002 I was at Abbey, which became Santander, looking after key accounts and mortgage brokers across London and the South of England. In 2013 I moved over to the adviser side. Having worked for a lender gives me a real feel for how lenders make decisions, and I have built strong working relationships with heads of lending and senior underwriters across the market.",
  "I started the business in Dulwich, with offices there and later in Twickenham and Worcester Park, so London is still at the heart of what I do. Today I work from the Salomons Estate near Tunbridge Wells and advise clients right across the UK, and I work with property companies around the country.",
  "I search the whole of the market, so you see everything that is open to you, not just one bank's deals.",
  "Most of my clients come to me through recommendations from friends and family, or come back to me each time they move or remortgage. That trust matters to me, and I work hard to keep it.",
];

/** "Who I work with" on /about: people whose income lenders do not always understand. */
export const aboutSpecialisms = {
  intro:
    "I help all kinds of buyers, homeowners and landlords, and I have particular experience with people whose pay and contracts some lenders find harder to understand.",
  groups: [
    { title: "Doctors and NHS staff", body: "Shift patterns, locum work, training contracts and NHS pensions." },
    { title: "Television and media", body: "Freelance, contract and fixed-term work, and income that changes year to year." },
    { title: "Banking and finance", body: "Bonuses, commission, deferred pay and share schemes." },
  ],
  community:
    "Away from work I sponsor Langton Green FC, with our name on the players' shirts, and I have previously sponsored Crowborough rugby club.",
};

/** The protection page's reasons, in Adam's words (29 October 2026). Figure: Cancer Research UK. */
export const protectionWhy = {
  body: "Securing a mortgage and a home is a great feeling, but protecting each other and your children, and keeping your home if the worst happens, is just as important. Many people are under-insured without realising it.",
  fact: "1 in 2 people in the UK will get cancer in their lifetime.",
  source: { label: "Cancer Research UK", href: "https://www.cancerresearchuk.org/about-cancer/what-is-cancer" },
};

/** The three columns under "Why I do this" on /about. */
export const aboutHighlights = [
  {
    title: "Regulated advice",
    body: `${site.legalName} is an appointed representative of ${site.principal}, authorised and regulated by the Financial Conduct Authority. FCA number ${site.fcaNumber}.`,
  },
  {
    title: "London, Kent and UK-wide",
    body: "Meet in person near Tunbridge Wells, or by phone and video call wherever you are in the UK. Calls in the evening and at weekends can be arranged.",
  },
  {
    title: "With you after completion",
    body: "I keep in touch after you move in and contact you well before your deal ends, so you are never left on a higher rate.",
  },
];

/** "What lenders will want to see" on /commercial. */
export const commercialReadyList = [
  "Two or three years of business accounts, plus recent management figures",
  "Recent business bank statements",
  "Details of the property: address, price or value, and any lease or tenancies",
  "Your existing borrowing, and a summary of your assets and liabilities",
  "For a new business or development, your business plan or appraisal",
];

/** "Common questions" on /commercial. */
export const commercialQuestions = [
  {
    q: "What is the difference between an owner-occupier and an investment commercial mortgage?",
    a: "An owner-occupier mortgage is for premises your own business trades from, so the lender looks mainly at the business's accounts. An investment mortgage is for property you let to someone else, so the lender looks mainly at the rent, the lease and the tenant.",
  },
  {
    q: "Which lenders do you work with?",
    a: "I approach the lenders most likely to suit your case, from high street and challenger banks to specialist commercial, bridging and development lenders, and I explain why I have recommended the one I have.",
  },
  {
    q: "How long does a commercial mortgage take?",
    a: "Usually a few months from first conversation to completion. Bridging finance is much quicker when a deadline is tight, such as an auction.",
  },
];
