"use client";

import Link from "next/link";
import { useState } from "react";
import { calculatorDisclaimer, exampleRateNote, repossessionWarning } from "@/lib/site";
import { MoneyField, NumberField, gbp } from "./fields";

/**
 * The homepage repayment estimate. Design kit: the inputs move, but the result
 * shows fixed example figures (the real sums are not included).
 */
export function HomeCalculator() {
  const [v, setV] = useState({ loan: 250_000, rate: 4.5, term: 25 });
  const set = (key: keyof typeof v, n: number) => setV((old) => ({ ...old, [key]: n }));
  const payment = 1390;
  const totalInterest = 166_865;

  return (
    <div className="grid overflow-hidden rounded-[20px] md:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5 bg-sky-soft p-6 sm:p-8">
        <MoneyField
          label="Amount to borrow"
          value={v.loan}
          onChange={(n) => set("loan", n)}
          slider={{ min: 25_000, max: 1_500_000, step: 5_000 }}
        />
        <NumberField
          label="Mortgage term"
          suffix="years"
          value={v.term}
          onChange={(n) => set("term", Math.min(40, n))}
          slider={{ min: 5, max: 40, step: 1 }}
        />
        <NumberField
          label="Interest rate"
          suffix="%"
          decimals={2}
          value={v.rate}
          onChange={(n) => set("rate", n)}
          hint={exampleRateNote}
          slider={{ min: 0.5, max: 10, step: 0.05 }}
        />
      </form>
      <div className="flex flex-col justify-between gap-8 bg-harbour p-6 text-white sm:p-8">
        <div className="flex flex-col gap-2" role="status" aria-live="polite" aria-atomic="true">
          <p className="font-display text-6xl font-extrabold tracking-[-0.03em] text-sun tabular-nums sm:text-7xl">
            {gbp(payment)}
          </p>
          <p className="text-lg leading-relaxed text-sky">
            a month to repay {gbp(v.loan)} over {v.term} {v.term === 1 ? "year" : "years"}, with {gbp(totalInterest)} of interest in total
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="/calculators/mortgage-repayment" className="btn btn-sun self-start">
            See the full breakdown
          </Link>
          <p className="text-sm leading-relaxed text-sky">
            {calculatorDisclaimer} {repossessionWarning}
          </p>
        </div>
      </div>
    </div>
  );
}
