import type { Service } from "@/lib/site";

// Commercial, bridging and development pages under /commercial.
// Copy is a working draft and may change before launch.
export const commercialServices: Service[] = [
  {
    slug: "business-premises",
    name: "Buying your business premises",
    short: "Owner-occupier commercial mortgages",
    title: "Commercial mortgages to buy your business premises",
    description:
      "Stop paying rent and own the building your business trades from. Adam Moore arranges owner-occupier commercial mortgages for businesses in Kent, London and the South East.",
    intro:
      "If your business pays rent, owning the building gives you control over your premises and a long-term asset. I help business owners find a lender that understands their trade, their accounts and their plans.",
    sections: [
      {
        heading: "How lenders decide what you can borrow",
        body: "For premises your own business will use, the lender looks mainly at the business. Expect to share two or three years of accounts, recent management figures and bank statements, and details of any existing borrowing. Lenders want to see profits comfortably covering the new repayments, often by around 1.3 times or more, and they will ask about your experience in your sector.",
      },
      {
        heading: "Deposit and loan size",
        body: "Most lenders want a deposit of 25% to 40% of the price, plus costs. A few lend up to 80% to established, profitable businesses buying their own premises. A newer business, or a specialist property such as a pub, surgery or care home, usually needs more. Extra security, such as another property, can sometimes reduce the cash you need to put in.",
      },
      {
        heading: "Who should own the building",
        body: "Premises can be bought by your trading company, by a separate property company, or by you personally and let to the business. Each option affects tax, which lenders will help and the guarantees they ask for, so I talk it through with you and your accountant before we apply. Lenders usually ask directors for a personal guarantee.",
      },
      {
        heading: "Costs to plan for",
        body: "As well as the deposit, budget for the lender's arrangement fee (often 1% to 2% of the loan), a valuation by a chartered surveyor, legal fees for you and the lender, and stamp duty at non-residential rates. I will set out every cost in writing before you commit.",
      },
    ],
    questions: [
      {
        q: "Can I get a commercial mortgage for a new business?",
        a: "It is harder but possible. Lenders will want to see your experience in the trade, a clear business plan with projections, and usually a larger deposit. Some lenders are much more open to newer businesses than others, which is where I can help.",
      },
      {
        q: "Can I repay on an interest-only basis?",
        a: "Some lenders offer interest-only or part interest-only terms, others want the loan repaid over the term. Terms can run from a few years up to 25 or 30 years with some lenders.",
      },
      {
        q: "How long does it take?",
        a: "Usually a few months from our first conversation to completion, because the lender's credit approval, valuation and legal work all take time. If you have a tight deadline, tell me early: bridging finance can sometimes cover the gap.",
      },
    ],
  },
  {
    slug: "investment-property",
    name: "Commercial investment property",
    short: "Shops, offices and units to let",
    title: "Commercial investment and commercial buy to let mortgages",
    description:
      "Mortgages for shops, offices, industrial units and parades bought to let, in your own name or through a limited company. Arranged by Adam Moore for investors in Kent and London.",
    intro:
      "Buying a shop, office, industrial unit or parade to let? With investment property the lender is mainly interested in the rent, the lease and the tenant. I help investors present their purchase the way lenders want to see it.",
    sections: [
      {
        heading: "Rent, lease and tenant",
        body: "Most lenders want the rent to cover the mortgage interest by at least 125%, calculated at a rate they set. A long lease to an established tenant is far easier to fund than a short lease, a new tenant or an empty unit, so I look at the lease with you before we approach lenders.",
      },
      {
        heading: "Deposit",
        body: "Investment lenders typically lend up to 70% to 75% of the property's value, so expect to put in 25% to 30% or more, plus costs. Specialist or harder-to-let property usually needs a bigger deposit.",
      },
      {
        heading: "Buying through a limited company",
        body: "Many investors buy through a limited company set up to hold property. Lenders then assess the company and usually ask directors for personal guarantees. I can explain how lenders view each structure, and I always recommend checking the tax side with an accountant.",
      },
    ],
    questions: [
      {
        q: "Can I buy an empty commercial unit?",
        a: "Yes, but fewer lenders will help, and some will lend less until a tenant is in place. Bridging finance can work while you find a tenant, as long as there is a clear plan to refinance onto a longer-term mortgage.",
      },
      {
        q: "Can I mix commercial and residential property in one portfolio?",
        a: "Yes. Some lenders will finance a mix of commercial, semi-commercial and residential investment property, and I can review your existing mortgages together.",
      },
    ],
  },
  {
    slug: "semi-commercial",
    name: "Semi-commercial and mixed-use",
    short: "Shops with flats and mixed-use buildings",
    title: "Semi-commercial and mixed-use mortgages",
    description:
      "Mortgages for shops with flats above, offices with apartments and other mixed-use buildings across Kent and London, from Adam Moore, including when the 40% residential rule applies.",
    intro:
      "A shop with a flat above, offices with apartments, a pub with living space: mixed-use buildings are common on Kent and London high streets. How much of the building is residential, and who lives there, decides how the mortgage is treated.",
    sections: [
      {
        heading: "Why the 40% matters",
        body: "If you borrow as an individual and at least 40% of the property is, or will be, lived in by you or a family member, the mortgage is likely to be regulated by the Financial Conduct Authority, with the protections that brings. If the flats are let to tenants and you are buying as an investment, it is usually unregulated. I confirm which applies before we go ahead.",
      },
      {
        heading: "How lenders look at it",
        body: "Lenders consider the commercial lease and the residential tenancies together, and some count the rent from both. Semi-commercial mortgages often cost less than fully commercial ones, because part of the security is residential.",
      },
      {
        heading: "Running the shop and letting the flat",
        body: "If your business trades from the ground floor and you let the flat above, the lender will look at both the business accounts and the residential rent. I find lenders who are comfortable with that mix.",
      },
    ],
    questions: [
      {
        q: "Is a semi-commercial mortgage more expensive than a residential one?",
        a: "Usually, yes, but it is often cheaper than a fully commercial mortgage. The price depends on the building, the leases, the deposit and your experience.",
      },
      {
        q: "Can I convert the upper floors into more flats?",
        a: "Often, subject to planning. A refurbishment bridging loan can fund the work, with a longer-term mortgage arranged once the flats are finished and let.",
      },
    ],
  },
  {
    slug: "remortgage",
    name: "Commercial remortgage and capital raising",
    short: "Refinance or release money from property",
    title: "Commercial remortgages and raising capital against property",
    description:
      "Commercial remortgage advice from Adam Moore: refinance when your fixed rate ends or your bank's margin rises, and raise capital against business or investment property.",
    intro:
      "If a fixed rate is ending, your bank's margin has crept up, or the business needs money to grow, refinancing commercial property can help. I compare your current lender's terms with what others will offer before you decide.",
    sections: [
      {
        heading: "Start well before your deal ends",
        body: "Commercial lending takes longer than a home mortgage, so I suggest starting three to six months before a fixed rate or facility ends. That leaves time for valuation and legal work without drifting onto a higher rate.",
      },
      {
        heading: "Raising money against property you own",
        body: "You can borrow against business premises or investment property to fund expansion, equipment, buying out a partner or a new purchase, subject to the lender's affordability checks. I will explain the risks as well as the costs: the loan is secured on the property, and a longer term can mean paying more in total.",
      },
      {
        heading: "Check the cost of leaving",
        body: "Many commercial loans have early repayment charges or exit fees. I check your current terms first, so any saving is worked out after every cost.",
      },
    ],
    questions: [
      {
        q: "Can I raise money against premises I own outright?",
        a: "Yes. Lenders can lend against unmortgaged property, subject to the value, the purpose of the money and affordability.",
      },
      {
        q: "Is it worth moving if my bank offers a new deal?",
        a: "Sometimes staying is best. I compare your bank's offer with the wider market so you can decide with the full picture.",
      },
    ],
  },
  {
    slug: "bridging-loans",
    name: "Bridging loans",
    short: "Auctions, refurbishments and chain breaks",
    title: "Bridging loans and bridging finance",
    description:
      "Bridging loans arranged by Adam Moore for auction purchases, refurbishments, chain breaks and commercial deals across Kent, London and the South East, with a clear plan to repay.",
    intro:
      "Bridging finance is short-term borrowing secured on property. It can move much faster than a mortgage, which makes it useful when timing matters. It also costs more, so every bridge I arrange starts with a clear plan for repaying it.",
    sections: [
      {
        heading: "When bridging helps",
        body: "Common reasons include completing an auction purchase within the usual 28 days, buying before you sell, buying a property a mortgage lender will not accept until it is refurbished, and funding work before refinancing onto a longer-term mortgage.",
      },
      {
        heading: "What it costs",
        body: "Interest is charged monthly rather than yearly and is far higher than a standard mortgage. Arrangement fees of 1% to 2% are common, some lenders charge an exit fee, and there are valuation and legal costs. Interest is often added to the loan rather than paid monthly. I will show you the total cost of the bridge, not just the rate.",
      },
      {
        heading: "Your plan to repay",
        body: "Lenders call this the exit: usually selling the property or refinancing onto a mortgage. I check the exit is realistic before you commit, because a bridge that runs over its term gets expensive quickly.",
      },
      {
        heading: "Regulated or unregulated",
        body: "A bridging loan secured on your home, or a home you or a family member will live in, is regulated by the Financial Conduct Authority. Bridging on investment or business property is usually unregulated. I explain which applies to you at the start.",
      },
    ],
    questions: [
      {
        q: "How quickly can bridging finance be arranged?",
        a: "It is usually much faster than a standard mortgage, although timings depend on the valuation and legal work. Tell me your deadline and I will tell you honestly whether it is realistic.",
      },
      {
        q: "How much can I borrow?",
        a: "Bridging lenders typically lend up to around 70% to 75% of the property's value, and less on land or unusual property. Other property can sometimes be offered as extra security.",
      },
    ],
  },
  {
    slug: "development-finance",
    name: "Development finance",
    short: "New builds, conversions and development exit",
    title: "Development finance and development exit finance",
    description:
      "Development finance for ground-up builds, conversions and heavy refurbishment in Kent and London, plus development exit finance, arranged by Adam Moore.",
    intro:
      "From converting a building into flats to a small ground-up scheme, development lenders fund the land and the build in stages as the work goes on. I help developers put together the numbers and information lenders need.",
    sections: [
      {
        heading: "How development finance works",
        body: "The lender usually funds part of the land purchase and most of the build costs. Money is released in stages after the lender's monitoring surveyor checks the work. Interest is normally added to the loan and repaid when the homes are sold or refinanced, with terms commonly 12 to 24 months.",
      },
      {
        heading: "How much lenders will lend",
        body: "Lenders look at your total costs and the gross development value, which is what the finished scheme should be worth. Many lend up to around 65% to 70% of that value, which means you fund part of the land and costs yourself. Experience, planning and a realistic appraisal all affect the terms.",
      },
      {
        heading: "Development exit finance",
        body: "Once building is finished, development exit finance can repay the development loan while the homes are sold or let. It is often cheaper than staying on the development loan, and it gives you time to sell without a deadline.",
      },
      {
        heading: "Conversions and change of use",
        body: "Converting offices, shops or barns into homes, including under permitted development rights, can be funded with development finance or a heavy refurbishment bridging loan, depending on the scale of the work.",
      },
    ],
    questions: [
      {
        q: "Do I need development experience?",
        a: "Lenders prefer it. First-time developers can still get funding, usually on a smaller scheme, with more of their own money in, and with an experienced builder and professional team.",
      },
      {
        q: "What will lenders ask for?",
        a: "Usually planning permission, drawings, a build cost schedule, a development appraisal, details of your team, and evidence of your contribution. I help you get it ready before we approach lenders.",
      },
    ],
  },
];

export const commercialGoal = "Commercial, development or bridging" as const;
