"use client";

import { useId, useState, type ReactNode } from "react";

export const gbp = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(Math.round(n));

export const gbpPence = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

export const pct = (n: number, digits = 1) => `${n.toLocaleString("en-GB", { maximumFractionDigits: digits })}%`;

export function yearsAndMonths(months: number) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} ${y === 1 ? "year" : "years"}`);
  if (m || !y) parts.push(`${m} ${m === 1 ? "month" : "months"}`);
  return parts.join(" ");
}

const inputClass =
  "w-full min-w-0 bg-transparent py-3 text-lg font-semibold text-ink tabular-nums placeholder:text-muted/70 focus:outline-none";
const boxClass =
  "flex items-center gap-1 rounded-[10px] border-[1.5px] border-field bg-white px-3.5 transition-[border-color,box-shadow] duration-150 focus-within:border-harbour focus-within:ring-2 focus-within:ring-harbour";
const labelClass = "text-[0.95rem] font-semibold text-ink";
const hintClass = "text-sm leading-relaxed text-muted";

function toNumber(text: string) {
  const n = Number(text.replace(/[£,%\s]/g, ""));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

type NumberProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: ReactNode;
  prefix?: string;
  suffix?: string;
  /** Show a slider under the box, between these limits. */
  slider?: { min: number; max: number; step: number };
  decimals?: number;
};

/** A number box that shows thousands separators except while you type. */
export function NumberField({ label, value, onChange, hint, prefix, suffix, slider, decimals = 0 }: NumberProps) {
  const id = useId();
  const [editing, setEditing] = useState<string | null>(null);
  const shown = editing ?? value.toLocaleString("en-GB", { maximumFractionDigits: decimals });

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className={boxClass}>
        {prefix && <span aria-hidden="true" className="text-lg font-semibold text-muted">{prefix}</span>}
        <input
          id={id}
          type="text"
          inputMode={decimals ? "decimal" : "numeric"}
          autoComplete="off"
          value={shown}
          onFocus={(e) => {
            setEditing(String(value));
            e.currentTarget.select();
          }}
          onBlur={() => setEditing(null)}
          onChange={(e) => {
            const text = e.target.value.replace(/[^\d.,]/g, "");
            setEditing(text);
            onChange(toNumber(text));
          }}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={inputClass}
        />
        {suffix && <span aria-hidden="true" className="shrink-0 text-base font-semibold text-muted">{suffix}</span>}
      </div>
      {slider && (
        <input
          type="range"
          min={slider.min}
          max={slider.max}
          step={slider.step}
          value={Math.min(slider.max, Math.max(slider.min, value))}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={`${label} slider`}
          className="mt-1 h-6 w-full cursor-pointer accent-harbour"
        />
      )}
      {hint && (
        <p id={`${id}-hint`} className={hintClass}>
          {hint}
        </p>
      )}
    </div>
  );
}

export function MoneyField(props: Omit<NumberProps, "prefix">) {
  return <NumberField prefix="£" {...props} />;
}

/** A small set of options shown side by side, built on radio buttons. */
export function Choice<V extends string>({
  label,
  value,
  options,
  onChange,
  hint,
}: {
  label: string;
  value: V;
  options: readonly { value: V; label: string }[];
  onChange: (value: V) => void;
  hint?: ReactNode;
}) {
  const name = useId();
  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className={`${labelClass} mb-1.5`}>{label}</legend>
      <div className={`grid gap-2 ${options.length === 2 ? "grid-cols-2" : options.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
        {options.map((o) => (
          <label
            key={o.value}
            className="flex min-h-12 cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-field bg-white px-3 py-2 text-center text-[0.95rem] font-semibold leading-snug text-ink transition-[background-color,border-color,color,scale] duration-150 ease-out active:scale-[0.97] has-checked:border-harbour has-checked:bg-harbour has-checked:text-white has-focus-visible:ring-2 has-focus-visible:ring-harbour has-focus-visible:ring-offset-2"
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
      {hint && <p className={hintClass}>{hint}</p>}
    </fieldset>
  );
}

export function Toggle({ label, checked, onChange, hint }: { label: string; checked: boolean; onChange: (v: boolean) => void; hint?: ReactNode }) {
  return (
    <label className="flex items-start gap-3">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-harbour" />
      <span className="flex flex-col gap-0.5">
        <span className={labelClass}>{label}</span>
        {hint && <span className={hintClass}>{hint}</span>}
      </span>
    </label>
  );
}
