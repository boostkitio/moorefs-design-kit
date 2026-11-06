/**
 * Lenders shown in the logo row on the homepage. All are on Adam's lender panel (The Right Mortgage
 * and L&G Mortgage Club). Logos come from each lender's own website (Barclays from Wikimedia Commons),
 * reduced to one-colour silhouettes in `public/lenders/<slug>.png` so they follow the colour look.
 * Width and height are the PNG's pixel size, used for the aspect ratio.
 */
export type Lender = { slug: string; name: string; width: number; height: number };

export const lenders: Lender[] = [
  { slug: "halifax", name: "Halifax", width: 186, height: 120 },
  { slug: "nationwide", name: "Nationwide Building Society", width: 899, height: 120 },
  { slug: "santander", name: "Santander", width: 685, height: 120 },
  { slug: "barclays", name: "Barclays", width: 712, height: 120 },
  { slug: "natwest", name: "NatWest", width: 541, height: 120 },
  { slug: "hsbc", name: "HSBC UK", width: 550, height: 120 },
  { slug: "virgin-money", name: "Virgin Money", width: 593, height: 120 },
  { slug: "tsb", name: "TSB", width: 330, height: 120 },
  { slug: "coventry", name: "Coventry Building Society", width: 398, height: 120 },
  { slug: "skipton", name: "Skipton Building Society", width: 539, height: 120 },
  { slug: "leeds", name: "Leeds Building Society", width: 576, height: 120 },
  { slug: "accord", name: "Accord Mortgages", width: 583, height: 120 },
  { slug: "the-mortgage-works", name: "The Mortgage Works", width: 231, height: 120 },
  { slug: "paragon", name: "Paragon", width: 324, height: 120 },
  { slug: "aldermore", name: "Aldermore", width: 801, height: 120 },
];
