// Business facts used across the site. Regulatory wording must match what the
// network (The Right Mortgage Limited) has approved before go-live.

export const site = {
  name: "Moore Financial Solutions",
  legalName: "Moore Financial Solutions Ltd",
  url: "https://www.moorefs.co.uk",
  description:
    "Friendly, whole of market mortgage and protection advice from Adam Moore for first-time buyers, home movers, landlords, businesses and families across London, Kent and the rest of the UK.",
  adviser: "Adam Moore",
  phone: { display: "020 8693 7552", href: "tel:+442086937552" },
  mobile: { display: "07860 350 934", href: "tel:+447860350934" },
  // Opens a chat with a first message, so Adam knows it came from the website.
  whatsapp: "https://wa.me/447860350934?text=Hi%20Adam%2C%20I%20found%20you%20on%20your%20website.",
  email: "contactus@moorefs.co.uk",
  office: {
    line1: "Salomons Estate",
    line2: "Broomhill Road",
    town: "Royal Tunbridge Wells",
    postcode: "TN3 0TG",
  },
  // Office hours confirmed by Adam on 29 October 2026. The Google Business Profile
  // still shows Monday to Saturday, 9am to 6:30pm, and needs updating to match.
  hours: {
    days: "Monday to Friday",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
    label: "9am to 6pm",
    note: "Evenings and weekends by arrangement",
  },
  geo: { latitude: 51.1522593, longitude: 0.2431141 },
  // Social profiles. The firm has no LinkedIn company page of its own yet: LinkedIn
  // auto-created an unclaimed one (moore-financial-solutions-limited) that Adam
  // should claim before it is linked here.
  social: {
    facebook: "https://www.facebook.com/MooreFSLtd",
    linkedin: "https://www.linkedin.com/in/adam-moore-a9478934/",
  },
  // Rated 4.4 from 10 reviews when checked on 29 October 2026. Only the link is
  // shown: Trustpilot has its own rules for displaying scores.
  trustpilot: "https://uk.trustpilot.com/review/www.moorefs.co.uk",
  // Score client portal, where existing clients sign in.
  clientPortal: "https://portal.mysco.re/",
  fcaNumber: "790494",
  principal: "The Right Mortgage Limited",
  companyNumber: "09266362",
  registeredOffice: "30-34 North Street, Hailsham, East Sussex BN27 1DW",
} as const;

// Adam's Google Business Profile ("Moore Financial Solutions Ltd", Salomons Estate).
// Links follow Google's Maps URLs format. The old search.google.com/local/reviews
// link now returns 404, so "read the reviews" opens the profile instead.
const placeId = "ChIJT9VPohlF30cRZkSaX-P-j44";
const profileUrl = `https://www.google.com/maps/search/?api=1&query=Moore%20Financial%20Solutions%20Ltd&query_place_id=${placeId}`;

export const google = {
  placeId,
  profileUrl,
  reviewsUrl: profileUrl,
  // Stable profile address, used in structured data.
  cidUrl: "https://maps.google.com/?cid=10272709527570367590",
  writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=Moore+Financial+Solutions+Ltd&destination_place_id=${placeId}`,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.625364926352!2d0.24311410000000006!3d51.1522593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df4519a24fd54f%3A0x8e8ffee35f9a4466!2sMoore%20Financial%20Solutions%20Ltd!5e0!3m2!1sen!2suk!4v1793032901131!5m2!1sen!2suk",
  // Snapshot of the public rating. Update it by hand until the Boostkit
  // reviews feed is connected, and never round it up.
  rating: { value: "5.0", count: 19, checked: "2026-10-26" },
} as const;

// Search engines are kept out until launch. Set SITE_LIVE=true in production
// once moorefs.co.uk points at this site and the network has signed it off.
export const isLive = process.env.SITE_LIVE === "true";

export const regulatoryNotice = `${site.legalName} is an appointed representative of ${site.principal}, which is authorised and regulated by the Financial Conduct Authority. FCA number ${site.fcaNumber}. Registered in England and Wales, company number ${site.companyNumber}. Registered office: ${site.registeredOffice}.`;

export const repossessionWarning =
  "Your home may be repossessed if you do not keep up repayments on your mortgage.";

// Shown on every commercial, bridging and development page and post. The
// network must confirm this wording, and how it oversees Adam's unregulated
// commercial work, before go-live.
export const commercialRegulationNote =
  "Most commercial mortgages, bridging loans and development finance for business or investment purposes are not regulated by the Financial Conduct Authority. Some are, for example where you borrow as an individual against property that is, or will be, at least 40% your home or a family member's home. I will tell you which applies before you go ahead.";

// Fees confirmed by Adam on 29 October 2026. When the fee is payable is still to
// be confirmed; the network must approve this wording.
export const feeNote =
  "The first conversation is free. My fee depends on the size and complexity of your mortgage, starting from £349 for new clients, and I will confirm it in writing, with when it is payable, before you commit to anything. I usually also receive commission from the lender or insurer.";

export const btlRegulationNote = "Most buy to let mortgages are not regulated by the Financial Conduct Authority.";

// Shown with every calculator result. The network must approve this wording,
// the example rates in src/lib/calculators/index.ts and the calculators
// themselves before go-live.
export const calculatorDisclaimer =
  "These figures are an illustration to help you plan. They are not a quote, a mortgage offer or advice, and they do not take your circumstances into account. Lenders set their own rates, fees and criteria, and what you can borrow depends on their checks.";

export const stampDutyNote =
  "This is a guide to the main Stamp Duty Land Tax rates in England and Northern Ireland. It does not cover every relief or situation, such as shared ownership, companies buying homes over £500,000, linked purchases or leases. Your solicitor or conveyancer will confirm what is due.";

export const exampleRateNote = "An example rate, not one we are offering. Change it to see how the figures move.";

export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
  questions: { q: string; a: string }[];
  btlNote?: boolean;
};

export const mortgageServices: Service[] = [
  {
    slug: "first-time-buyers",
    name: "First-time buyers",
    short: "Deposits, budgets and your first offer",
    title: "First-time buyer mortgage advice",
    description:
      "Buying your first home in Kent, London or the South East? Friendly, step-by-step mortgage advice from Adam Moore, from your first budget to getting the keys.",
    intro:
      "Buying your first home is exciting, and it can also feel like a lot to take in. I will explain each step in plain English, work out what you could borrow, and stay with you until the keys are in your hand.",
    sections: [
      {
        heading: "Know your budget before you start looking",
        body: "We start with a conversation about your income, savings and plans. From there I can tell you roughly what lenders may offer and arrange an agreement in principle, so estate agents and sellers know you are ready to move.",
      },
      {
        heading: "Help with every part of the process",
        body: "I search the whole of the mortgage market, prepare and submit your application, keep in touch with your solicitor and estate agent, and chase the lender so you do not have to.",
      },
      {
        heading: "Protecting your new home",
        body: "Once your mortgage is arranged I will talk you through protection, so your repayments are covered if you cannot work through illness or injury, and your family is looked after if the worst happens.",
      },
    ],
    questions: [
      {
        q: "How much deposit do I need?",
        a: "Some lenders accept a deposit of 5% of the property price, although a larger deposit usually opens up more choice and lower rates. I can show you how the numbers change at different deposit sizes.",
      },
      {
        q: "Can family help with my deposit?",
        a: "Yes, many first-time buyers receive help from family. Lenders have rules about gifted deposits and will usually want a signed letter from the person giving the money, so tell me early and I will guide you through it.",
      },
      {
        q: "When should I speak to you?",
        a: "Ideally before you start viewing. Knowing your budget early makes house hunting easier and puts you in a stronger position when you make an offer.",
      },
    ],
  },
  {
    slug: "moving-home",
    name: "Moving home",
    short: "Porting, borrowing more and moving up",
    title: "Mortgage advice for moving home",
    description:
      "Moving home? Adam Moore compares porting your current mortgage with a new deal and handles the application, lender and paperwork for you.",
    intro:
      "When you move, you can often take your current mortgage with you, borrow more from your existing lender, or switch to a new lender entirely. I will compare all three and recommend what suits you best.",
    sections: [
      {
        heading: "Porting or a new deal",
        body: "If you are part way through a fixed rate, moving your mortgage to the new property can avoid early repayment charges. Sometimes a new deal still works out better overall. I will lay out the costs side by side.",
      },
      {
        heading: "Timing the sale and the purchase",
        body: "Chains can be stressful. I keep your lender, solicitor and estate agent moving together and make sure your mortgage offer is ready when you need it.",
      },
      {
        heading: "Reviewing your protection",
        body: "A bigger mortgage often means your existing cover no longer fits. I will check your life and income protection still matches your new home and family.",
      },
    ],
    questions: [
      {
        q: "Will I have to pay an early repayment charge?",
        a: "It depends on your current deal and whether you port it. I will check your mortgage terms and explain any charges before you decide.",
      },
      {
        q: "Can I borrow more when I move?",
        a: "Usually, yes, subject to the lender's affordability checks. Additional borrowing may come on a different rate to your existing mortgage.",
      },
    ],
  },
  {
    slug: "remortgage",
    name: "Remortgaging",
    short: "Before your current deal ends",
    title: "Remortgage advice",
    description:
      "Is your mortgage deal ending? Adam Moore can review your options up to six months early, comparing a new lender with your current lender's offer.",
    intro:
      "When your fixed or tracker rate ends you usually move onto your lender's standard variable rate, which is often higher. I can start looking up to six months before your deal ends so a new rate is ready in time.",
    sections: [
      {
        heading: "Your lender's offer, compared properly",
        body: "Your current lender may offer you a new deal, known as a product transfer. Sometimes that is the best option and sometimes another lender is better. I compare both so you can choose with confidence.",
      },
      {
        heading: "Borrowing for home improvements",
        body: "If you want to extend, renovate or consolidate other borrowing, remortgaging can be a way to raise money. I will explain the risks as well as the costs, including how consolidating debt over a longer term can increase the total you repay.",
      },
      {
        heading: "Reminders so you never drift",
        body: "Once your new deal is in place I will contact you well before it ends next time, so you never fall onto a higher rate by accident.",
      },
    ],
    questions: [
      {
        q: "How early can I remortgage?",
        a: "Most lenders let you secure a new rate up to six months before your current deal ends, without paying an early repayment charge.",
      },
      {
        q: "Is it worth using a broker if I am staying with my lender?",
        a: "Often, yes. I can check whether your lender's offer is competitive and handle the switch for you, so you know you have not missed a better option.",
      },
    ],
  },
  {
    slug: "buy-to-let",
    name: "Landlords and buy to let",
    short: "Personal and limited company buy to let",
    title: "Buy to let mortgage advice",
    description:
      "Buy to let and limited company mortgage advice for new and experienced landlords across London and the South East, from Adam Moore.",
    intro:
      "Whether you are buying your first rental property or managing a growing portfolio, I can help you find the right buy to let mortgage, in your own name or through a limited company.",
    sections: [
      {
        heading: "First-time landlords",
        body: "I will explain how lenders assess rental income, what deposit you are likely to need, and the questions to ask your accountant before you buy.",
      },
      {
        heading: "Limited company and portfolio lending",
        body: "Many landlords now buy through a limited company. I work with lenders who specialise in limited company and portfolio buy to let, and I can review your existing mortgages together.",
      },
      {
        heading: "Remortgaging rental properties",
        body: "I keep track of when your buy to let deals end and look for better rates or capital raising options in good time.",
      },
    ],
    questions: [
      {
        q: "How much deposit do I need for buy to let?",
        a: "Most buy to let lenders look for a deposit of at least 25%, although it varies by lender and property.",
      },
      {
        q: "Should I buy through a limited company?",
        a: "It can suit some landlords, depending on tax and long-term plans. I can explain the mortgage side, and I always recommend speaking to an accountant about the tax side.",
      },
    ],
    btlNote: true,
  },
];

export const protectionTypes = [
  {
    name: "Life insurance",
    body: "Pays a lump sum if you die during the policy, which can clear your mortgage and help your family with everyday costs.",
  },
  {
    name: "Critical illness cover",
    body: "Pays a tax-free lump sum if you are diagnosed with a serious illness covered by the policy, giving you breathing space to recover.",
  },
  {
    name: "Income protection",
    body: "Replaces part of your income each month if illness or injury stops you working, so the bills and the mortgage keep getting paid.",
  },
];

// Kept to five so the header reads at a glance. Buying, remortgaging and
// buy-to-let sit under Mortgages, which links to each of them.
export const mainNav = [
  { href: "/mortgages", label: "Mortgages" },
  { href: "/commercial", label: "Commercial" },
  { href: "/protection", label: "Protection" },
  { href: "/calculators", label: "Calculators" },
  { href: "/about", label: "About" },
] as const;
