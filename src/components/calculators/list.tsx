import Link from "next/link";
import { calculators, calculatorsFor, type Calculator } from "@/lib/calculators";

/** A simple list of calculators with their one-line descriptions. */
export function CalculatorList({ items }: { items: Calculator[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((c) => (
        <li key={c.slug}>
          <Link
            href={`/calculators/${c.slug}`}
            className="group -mx-4 flex flex-col gap-0.5 rounded-[14px] px-4 py-3 transition-colors hover:bg-sky-soft"
          >
            <span className="font-display text-xl font-bold tracking-[-0.015em] text-harbour underline-offset-[5px] group-hover:underline">
              {c.name}
            </span>
            <span className="text-muted">{c.short}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** The calculators that suit a service page, if any. */
export function RelatedCalculators({ path, title = "Work out the numbers" }: { path: string; title?: string }) {
  const items = (calculatorsFor[path] ?? []).flatMap((slug) => calculators.filter((c) => c.slug === slug));
  if (!items.length) return null;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-harbour">{title}</h2>
      <CalculatorList items={items} />
    </div>
  );
}
