/**
 * Lenders shown in the logo row on the homepage. Only lenders on The Right Mortgage's list of
 * lenders who allow firms to use their logos without asking (the network's "Trademark Agreements"
 * sheet, 25 May 2023, sent with the financial promotions review on 6 November 2026) may appear here.
 * Any other lender needs its own written permission first. Logos come from each lender's own website,
 * reduced to one-colour silhouettes in `public/lenders/<slug>.png` so they follow the colour look.
 * Width and height are the PNG's pixel size, used for the aspect ratio.
 */
export type Lender = { slug: string; name: string; width: number; height: number };

export const lenders: Lender[] = [
  { slug: "natwest", name: "NatWest", width: 541, height: 120 },
  { slug: "leeds", name: "Leeds Building Society", width: 576, height: 120 },
  { slug: "accord", name: "Accord Mortgages", width: 583, height: 120 },
  { slug: "paragon", name: "Paragon", width: 324, height: 120 },
];
