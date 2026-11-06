import type { enquiryGoals } from "@/lib/enquiry";

// The calculator suite: one entry per page under /calculators. The hub,
// sitemap, related links and Adam Bot all read from this list.

export type CalculatorGroup = "buying" | "owning" | "landlords-business";

export const calculatorGroups: { id: CalculatorGroup; title: string; intro: string }[] = [
  { id: "buying", title: "Buying a home", intro: "Budget, deposit and the costs of buying." },
  { id: "owning", title: "Your mortgage", intro: "Payments, remortgaging and paying it off sooner." },
  { id: "landlords-business", title: "Landlords and business", intro: "Buy to let, commercial and bridging finance." },
];

export type Calculator = {
  slug: string;
  name: string;
  /** One line for cards and lists. */
  short: string;
  title: string;
  description: string;
  intro: string;
  group: CalculatorGroup;
  goal: (typeof enquiryGoals)[number];
  /** Which regulatory note sits with the results. */
  note: "home" | "btl" | "commercial" | "tax";
  guide: { heading: string; body: string }[];
  questions: { q: string; a: string }[];
};

// Example rates the calculators open with. They are not rates on offer; the
// network must approve them, and they should be reviewed when rates move.
export const exampleRates = {
  residential: 4.5,
  standardVariable: 7.5,
  buyToLetStress: 5.5,
  commercial: 6.5,
  bridgingMonthly: 0.85,
} as const;

export const calculators: Calculator[] = [
  {
    slug: "mortgage-repayment",
    name: "Mortgage repayment calculator",
    short: "Monthly payments, total interest and how the balance falls",
    title: "Mortgage calculator: monthly repayments and interest",
    description:
      "Work out your monthly mortgage payments on a repayment or interest-only mortgage, see the total interest and watch the balance fall year by year.",
    intro: "See what a mortgage could cost each month, how much interest you would pay in total, and how quickly the balance comes down.",
    group: "owning",
    goal: "Buy my first home",
    note: "home",
    guide: [
      {
        heading: "Repayment or interest only",
        body: "With a repayment mortgage, each payment covers the interest and pays off some of the loan, so the balance reaches zero by the end of the term. With interest only, you pay just the interest and still owe the full amount at the end, so you need a credible plan to repay it, such as savings, investments or selling the property.",
      },
      {
        heading: "Why the term matters",
        body: "A longer term lowers the monthly payment but means paying interest for longer, so the total cost goes up. A shorter term costs more each month and less overall. Try a few terms to find a balance that feels comfortable.",
      },
      {
        heading: "Rates change",
        body: "Fixed rates usually last two to five years. After that, the rate can change, so it is worth checking how a higher rate would feel. The figures below show your payment with the rate 1% higher and 1% lower.",
      },
    ],
    questions: [
      {
        q: "Is this the payment I would get from a lender?",
        a: "It is a close guide for the rate and term you enter. Your actual payment depends on the deal you choose, any fees added to the loan and the date your mortgage starts.",
      },
      {
        q: "Can I change my term later?",
        a: "Often, yes, when you remortgage or by asking your lender, subject to their checks. Extending a term lowers payments but usually increases the total interest.",
      },
    ],
  },
  {
    slug: "how-much-can-i-borrow",
    name: "How much can I borrow?",
    short: "A rough borrowing range from your income and deposit",
    title: "How much can I borrow? Mortgage affordability calculator",
    description:
      "Get a rough idea of how much you could borrow for a mortgage based on your income, and what price of home that could mean with your deposit.",
    intro: "A quick, rough range based on your income and deposit. When you are ready, I can check what lenders would actually offer you.",
    group: "buying",
    goal: "Buy my first home",
    note: "home",
    guide: [
      {
        heading: "Income multiples are only the start",
        body: "Many lenders start from about four to four and a half times your income. Some will go to five and a half, or occasionally six, times income for certain professions, such as doctors and other NHS professionals, or for higher earners, and some offer less. They then look closely at your outgoings, debts, credit history and how your income is made up.",
      },
      {
        heading: "What can reduce the figure",
        body: "Car finance, credit cards, loans, childcare costs and student loan repayments all reduce what lenders will offer. Paying down debts before you apply can make a real difference.",
      },
      {
        heading: "Self-employed and directors",
        body: "Lenders usually look at two or more years of accounts or tax calculations, and they differ in which figures they use. If your income is complex, talk to me before relying on any calculator.",
      },
    ],
    questions: [
      {
        q: "Is this an agreement in principle?",
        a: "No. An agreement in principle comes from a lender after a credit check. I can arrange one for you once we have spoken, so estate agents and sellers know you are ready.",
      },
      {
        q: "Does bonus or overtime count?",
        a: "Often, at least in part. Some lenders use all of it, some use half, and some need a two-year history. I will find lenders that treat your income fairly.",
      },
    ],
  },
  {
    slug: "stamp-duty",
    name: "Stamp duty calculator",
    short: "Stamp duty for first-time buyers, movers and additional homes",
    title: "Stamp duty calculator for England",
    description:
      "Work out Stamp Duty Land Tax in England and Northern Ireland for first-time buyers, home movers, additional homes, buy to let and commercial property.",
    intro: "Work out the Stamp Duty Land Tax on a purchase in England or Northern Ireland, with first-time buyer relief and the higher rates for additional homes.",
    group: "buying",
    goal: "Move home",
    note: "tax",
    guide: [
      {
        heading: "How stamp duty is worked out",
        body: "Stamp duty is charged in slices, like income tax. You pay each rate only on the part of the price that falls in that band, not on the whole price. The breakdown below shows each slice.",
      },
      {
        heading: "First-time buyer relief",
        body: "If you and anyone buying with you have never owned a home, anywhere in the world, you pay no stamp duty on the first £300,000 and 5% on the part from £300,001 to £500,000. Above £500,000 the relief does not apply and normal rates are due on the whole price.",
      },
      {
        heading: "Additional homes and buy to let",
        body: "Buying a second home or a buy to let usually means paying an extra 5% on every band. If you are replacing your main home and sell the old one within three years, you may be able to claim the extra back. Your solicitor will confirm what applies.",
      },
    ],
    questions: [
      {
        q: "When do I pay stamp duty?",
        a: "Within 14 days of completion. Your solicitor or conveyancer normally files the return and pays it for you, so make sure the money is in your budget.",
      },
      {
        q: "Does this cover Scotland or Wales?",
        a: "No. Scotland has Land and Buildings Transaction Tax and Wales has Land Transaction Tax, with different rates. This calculator is for England and Northern Ireland.",
      },
      {
        q: "Can stamp duty be added to my mortgage?",
        a: "Not directly. Lenders lend against the property, so stamp duty usually comes from your savings alongside your deposit.",
      },
    ],
  },
  {
    slug: "deposit-and-ltv",
    name: "Deposit and loan to value",
    short: "Your loan to value, and the deposit for a better rate band",
    title: "Deposit and loan to value (LTV) calculator",
    description:
      "Work out your loan to value and see how much more deposit would move you into a lower LTV band, where lenders often offer lower rates.",
    intro: "Lenders price mortgages in loan to value bands. See which band your deposit puts you in, and what it would take to reach the next one.",
    group: "buying",
    goal: "Buy my first home",
    note: "home",
    guide: [
      {
        heading: "What loan to value means",
        body: "Loan to value, or LTV, is your mortgage as a percentage of the property's value. A £270,000 mortgage on a £300,000 home is 90% LTV, with a 10% deposit.",
      },
      {
        heading: "Why the bands matter",
        body: "Lenders often set their rates at 60%, 75%, 80%, 85%, 90% and 95%. Crossing into a lower band, even by a small amount, can open up lower rates and more lenders. Sometimes a few thousand pounds more deposit is worth it, and sometimes it is better kept for moving costs.",
      },
    ],
    questions: [
      {
        q: "What is the smallest deposit I can have?",
        a: "Some lenders accept 5% of the price for a home you will live in. Buy to let usually needs at least 25%, and commercial property often 25% to 40%.",
      },
      {
        q: "Can a gift from family count as my deposit?",
        a: "Usually, yes, with a signed gift letter. Lenders have rules about who can give it and how, so tell me early.",
      },
    ],
  },
  {
    slug: "remortgage",
    name: "Remortgage calculator",
    short: "What switching could save after fees",
    title: "Remortgage calculator: could switching save you money?",
    description:
      "Compare your current mortgage payment with a new rate, see the monthly difference and what you could save over the new deal after fees.",
    intro: "If your deal is ending, or you are already on your lender's standard variable rate, see what a new rate could mean after fees.",
    group: "owning",
    goal: "Remortgage",
    note: "home",
    guide: [
      {
        heading: "Look up to six months early",
        body: "Most lenders let you secure a new rate up to six months before your current deal ends. Starting early means a new rate can be ready on the day the old one ends, so you never drift onto a higher rate.",
      },
      {
        heading: "Fees can change the answer",
        body: "A lower rate with a large product fee is not always cheaper than a slightly higher rate with no fee, especially on a smaller mortgage. This calculator takes the fees off the interest you would save over the deal.",
      },
      {
        heading: "Early repayment charges",
        body: "If you leave a fixed rate early, your lender may charge a percentage of the balance. Add any charge to the fees box to see whether switching still makes sense.",
      },
    ],
    questions: [
      {
        q: "Should I just take my lender's new deal?",
        a: "Sometimes it is the best option, and it can be quicker. I compare your lender's offer, known as a product transfer, with the wider market so you can choose with confidence.",
      },
      {
        q: "Can I borrow more when I remortgage?",
        a: "Often, yes, subject to the lender's checks. If you consolidate other debts into your mortgage, you may pay more in total because it is spread over a longer term.",
      },
    ],
  },
  {
    slug: "overpayment",
    name: "Overpayment calculator",
    short: "How much sooner you could be mortgage free",
    title: "Mortgage overpayment calculator",
    description:
      "See how regular overpayments or a lump sum could shorten your mortgage term and reduce the interest you pay.",
    intro: "Paying a little extra each month, or a lump sum, can take years off your mortgage. See how much time and interest you could save.",
    group: "owning",
    goal: "Remortgage",
    note: "home",
    guide: [
      {
        heading: "Check your allowance first",
        body: "Many fixed and tracker deals let you overpay up to 10% of the balance each year without a charge. Going over can trigger an early repayment charge, so check your mortgage terms or ask me.",
      },
      {
        heading: "Overpay or save?",
        body: "Overpaying saves interest at your mortgage rate, but the money is then tied up in your home. Keeping an emergency fund first, and comparing with savings rates, is usually sensible.",
      },
    ],
    questions: [
      {
        q: "Will my monthly payment go down?",
        a: "This calculator assumes your payment stays the same and the term gets shorter, which is what most lenders do. Some lenders lower the payment instead, or let you choose.",
      },
      {
        q: "Can I take overpayments back out?",
        a: "Only with some mortgages, such as those with a payment holiday or borrow-back feature. Otherwise the money stays in your home until you sell or remortgage.",
      },
    ],
  },
  {
    slug: "buy-to-let",
    name: "Buy to let calculator",
    short: "What the rent might support, and the yield",
    title: "Buy to let mortgage calculator: rental cover and yield",
    description:
      "Estimate how much a buy to let lender might lend based on the rent, using interest cover and stress rates, and work out the gross rental yield.",
    intro: "Buy to let lenders mostly decide how much to lend from the rent. See roughly what the rent could support, and the gross yield on the price.",
    group: "landlords-business",
    goal: "Buy to let",
    note: "btl",
    guide: [
      {
        heading: "How rental cover works",
        body: "Lenders check that the rent covers the mortgage interest by a margin, called the interest cover ratio. It is often 125% for limited companies and basic-rate taxpayers and 145% for higher-rate taxpayers, which is the figure most lenders use as standard. It is worked out at a stress rate that may be higher than the rate you pay.",
      },
      {
        heading: "Loan to value still applies",
        body: "Even if the rent supports more, most buy to let lenders lend up to 75% of the value, and some up to 80%. The calculator shows the lower of the two figures.",
      },
      {
        heading: "Gross yield is only part of the picture",
        body: "Gross yield is the annual rent as a percentage of the price. Your real return depends on the mortgage, letting fees, maintenance, empty months, insurance and tax. From April 2027 income tax on rental profits rises to 24% for basic-rate, 44% for higher-rate and 49% for additional-rate taxpayers (announced in the Budget on 28 October 2026), so speak to an accountant about the tax side.",
      },
    ],
    questions: [
      {
        q: "Can I top up with my own income?",
        a: "Some lenders allow it, known as top slicing, where your personal income helps cover any shortfall in the rent. I can find lenders that do.",
      },
      {
        q: "Limited company or personal name?",
        a: "It depends on your tax position and plans. I can explain the mortgage side and always recommend speaking to an accountant about tax.",
      },
    ],
  },
  {
    slug: "commercial-mortgage",
    name: "Commercial mortgage calculator",
    short: "Payments on premises and commercial investment property",
    title: "Commercial mortgage calculator",
    description:
      "Work out monthly payments on a commercial mortgage for business premises, semi-commercial or investment property, on a repayment or interest-only basis.",
    intro: "See what a commercial mortgage on business premises or investment property could cost each month, and the loan to value it means.",
    group: "landlords-business",
    goal: "Commercial, development or bridging",
    note: "commercial",
    guide: [
      {
        heading: "How commercial lenders differ",
        body: "Commercial mortgages usually need a deposit of 25% to 40%, with terms of up to 25 years. Rates depend on the property, the strength of the business or the tenants, and your experience, so they vary more than on a home mortgage.",
      },
      {
        heading: "What the lender will look at",
        body: "For premises you trade from, lenders look at the business's accounts and how comfortably profits cover the payments. For investment property, they look at the leases, the tenants and the rent.",
      },
    ],
    questions: [
      {
        q: "Can I borrow interest only?",
        a: "Some lenders offer interest only on commercial investment property, sometimes for part of the term. Lenders usually prefer repayment for owner-occupied premises.",
      },
      {
        q: "Can my pension buy the premises?",
        a: "A SIPP or SSAS can sometimes buy commercial property your business trades from. You will need pension and tax advice as well; I can help with the borrowing side.",
      },
    ],
  },
  {
    slug: "bridging-loan",
    name: "Bridging loan calculator",
    short: "Gross loan, fees and interest on a short-term loan",
    title: "Bridging loan calculator",
    description:
      "Work out the gross loan, arrangement fee and interest on a bridging loan, with retained or monthly interest.",
    intro: "Bridging loans are short term and priced monthly. See the gross loan you would need for the amount you want, and the total cost over the term.",
    group: "landlords-business",
    goal: "Commercial, development or bridging",
    note: "commercial",
    guide: [
      {
        heading: "Retained or monthly interest",
        body: "With retained interest, the lender keeps the interest for the term back from the loan, so you make no monthly payments but borrow more to receive the same amount. With serviced interest, you pay the interest each month.",
      },
      {
        heading: "Have the exit planned",
        body: "Lenders want to know how you will repay, usually by selling or refinancing onto a longer-term mortgage. A clear, realistic exit is the most important part of any bridging application.",
      },
      {
        heading: "Regulated and unregulated bridging",
        body: "A bridging loan secured on a home you or your family live in, or will live in, is usually regulated. Loans for business or investment purposes usually are not. I will tell you which applies.",
      },
    ],
    questions: [
      {
        q: "How quickly can a bridging loan complete?",
        a: "It can be a matter of weeks when the valuation and legal work go smoothly. Having your exit, the property details and your ID ready makes a real difference.",
      },
      {
        q: "What are the other costs?",
        a: "Expect valuation and legal fees for you and the lender, and sometimes a broker fee. I will set out every cost before you commit.",
      },
    ],
  },
];

export function getCalculator(slug: string) {
  return calculators.find((c) => c.slug === slug);
}

/** Calculators to show on each service page, by page path. */
export const calculatorsFor: Record<string, string[]> = {
  "/mortgages/first-time-buyers": ["how-much-can-i-borrow", "stamp-duty", "deposit-and-ltv", "mortgage-repayment"],
  "/mortgages/moving-home": ["how-much-can-i-borrow", "stamp-duty", "mortgage-repayment", "deposit-and-ltv"],
  "/mortgages/remortgage": ["remortgage", "overpayment", "mortgage-repayment"],
  "/mortgages/buy-to-let": ["buy-to-let", "stamp-duty", "mortgage-repayment"],
  "/commercial": ["commercial-mortgage", "bridging-loan", "stamp-duty"],
  "/commercial/business-premises": ["commercial-mortgage", "stamp-duty"],
  "/commercial/investment-property": ["commercial-mortgage", "buy-to-let", "stamp-duty"],
  "/commercial/semi-commercial": ["commercial-mortgage", "stamp-duty"],
  "/commercial/remortgage": ["commercial-mortgage", "remortgage"],
  "/commercial/bridging-loans": ["bridging-loan", "stamp-duty"],
  "/commercial/development-finance": ["bridging-loan", "commercial-mortgage"],
};
