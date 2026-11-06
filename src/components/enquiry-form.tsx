"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, type FormEvent } from "react";
import { submitEnquiry } from "@/app/actions/enquiry";
import { employmentTypes, enquiryGoals, timescales, type Enquiry, type EnquiryState } from "@/lib/enquiry";

const fieldClass =
  "w-full rounded-[10px] border-[1.5px] border-field bg-white px-3.5 py-3 text-base text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 focus:border-harbour focus:outline-none focus:ring-2 focus:ring-harbour";
const labelClass = "flex flex-col gap-1.5 text-[0.95rem] font-semibold text-ink";

// Order the error summary lists fields in, matching the order they appear on the page.
const fieldOrder: (keyof Enquiry)[] = [
  "goal",
  "firstName",
  "lastName",
  "email",
  "mobile",
  "dateOfBirth",
  "addressLine1",
  "addressLine2",
  "town",
  "postcode",
  "propertyValue",
  "depositOrLoan",
  "employment",
  "timescale",
  "message",
  "consent",
];

// Adds where the visitor came from (page path, referrer, UTM values) and a
// one-off submission id as hidden fields, read only at the moment of sending.
function setHidden(form: HTMLFormElement, name: string, value: string) {
  let input = form.querySelector<HTMLInputElement>(`input[type="hidden"][name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

type Props = {
  variant?: "compact" | "full";
  defaultGoal?: (typeof enquiryGoals)[number];
};

export function EnquiryForm({ variant = "full", defaultGoal }: Props) {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: "idle" });
  const id = useId();
  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};
  const values = state.status === "error" ? (state.values ?? {}) : {};
  const submissionId = useRef<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const attempt = state.status === "error" ? state.attempt : null;
  const formRef = useRef<HTMLFormElement>(null);

  // A calculator's "Send these figures to Adam" link carries the figures in the
  // address bar. Fill them in once, into empty fields only, so the visitor can
  // check and edit them before sending.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    const fill = (name: string, value: string | null, valid: boolean) => {
      const el = form.elements.namedItem(name);
      if (!value || !valid || !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) return;
      if (!el.value) el.value = value;
    };
    const goal = params.get("goal");
    fill("goal", goal, enquiryGoals.some((g) => g === goal));
    for (const name of ["propertyValue", "depositOrLoan"]) {
      const value = params.get(name);
      fill(name, value, /^\d{1,10}$/.test(value ?? ""));
    }
    const message = params.get("message");
    fill("message", message?.slice(0, 1000) ?? null, true);
  }, []);

  // The form remounts after a failed attempt, so move focus to the error
  // summary rather than leaving keyboard and screen reader users at the top of the page.
  useEffect(() => {
    if (attempt !== null) summaryRef.current?.focus();
  }, [attempt]);

  const addContext = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    submissionId.current ??= crypto.randomUUID();
    setHidden(form, "submissionId", submissionId.current);
    setHidden(form, "landing_page", window.location.pathname);
    if (document.referrer) setHidden(form, "referrer", document.referrer);
    const params = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const value = params.get(key);
      if (value) setHidden(form, key, value);
    }
  };

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col gap-3 rounded-2xl bg-white p-7 transition-[opacity,translate] duration-300 ease-out starting:translate-y-2 starting:opacity-0 motion-reduce:starting:translate-y-0">
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-harbour">
          Thanks, {state.firstName}.
        </h3>
        <p className="text-lg leading-relaxed text-muted">
          Your enquiry has reached Adam. He will be in touch as soon as he can and will send you a link to your secure client portal so you can share documents safely.
        </p>
      </div>
    );
  }

  const fieldId = (key: keyof Enquiry) => `${id}-${key}`;

  const fieldError = (key: keyof Enquiry) =>
    errors[key] ? (
      <span id={`${fieldId(key)}-error`} className="text-sm font-semibold text-[#b3261e]">
        {errors[key]}
      </span>
    ) : null;

  // id, invalid state and error description for one field.
  const field = (key: keyof Enquiry) => ({
    id: fieldId(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${fieldId(key)}-error` : undefined,
  });

  const errorList = fieldOrder.filter((key) => errors[key]);

  return (
    <form ref={formRef} key={attempt ?? "initial"} action={action} onSubmit={addContext} noValidate className="flex flex-col gap-4" aria-describedby={state.status === "error" ? `${id}-form-error` : undefined}>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <div
          ref={summaryRef}
          id={`${id}-form-error`}
          role="alert"
          tabIndex={-1}
          aria-labelledby={`${id}-form-error-title`}
          className="flex flex-col gap-2 rounded-xl border-l-4 border-[#b3261e] bg-[#fdecea] px-4 py-3 text-[#8c1d18]"
        >
          <p id={`${id}-form-error-title`} className="font-bold">
            {state.message}
          </p>
          {errorList.length > 0 && (
            <ul className="flex flex-col gap-1">
              {errorList.map((key) => (
                <li key={key}>
                  <a
                    href={`#${fieldId(key)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(fieldId(key))?.focus();
                    }}
                    className="font-semibold underline underline-offset-2 hover:no-underline"
                  >
                    {errors[key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <label className={labelClass}>
        What are you looking to do?
        <select name="goal" defaultValue={values.goal ?? defaultGoal ?? ""} required className={fieldClass} {...field("goal")}>
          <option value="" disabled>
            Choose one
          </option>
          {enquiryGoals.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        {fieldError("goal")}
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          First name
          <input name="firstName" defaultValue={values.firstName} autoComplete="given-name" required className={fieldClass} {...field("firstName")} />
          {fieldError("firstName")}
        </label>
        <label className={labelClass}>
          Last name
          <input name="lastName" defaultValue={values.lastName} autoComplete="family-name" required className={fieldClass} {...field("lastName")} />
          {fieldError("lastName")}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Email
          <input type="email" name="email" defaultValue={values.email} autoComplete="email" required className={fieldClass} {...field("email")} />
          {fieldError("email")}
        </label>
        <label className={labelClass}>
          Mobile
          <input type="tel" name="mobile" defaultValue={values.mobile} autoComplete="tel" required className={fieldClass} {...field("mobile")} />
          {fieldError("mobile")}
        </label>
      </div>

      {variant === "full" && (
        <fieldset className="mt-2 flex flex-col gap-4 rounded-2xl bg-sky-soft p-5">
          <legend className="sr-only">Optional details</legend>
          <div>
            <p className="font-display text-xl font-bold text-harbour">Save time later (optional)</p>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
              These details help Adam start your research before you speak, and they go straight into your client portal so you will not need to type them again.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Date of birth
              <input type="date" name="dateOfBirth" defaultValue={values.dateOfBirth} autoComplete="bday" className={fieldClass} {...field("dateOfBirth")} />
              {fieldError("dateOfBirth")}
            </label>
          </div>
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-3 text-[0.95rem] font-semibold text-ink">Current address</legend>
            <label className={labelClass}>
              Address line 1
              <input name="addressLine1" defaultValue={values.addressLine1} autoComplete="address-line1" className={fieldClass} {...field("addressLine1")} />
              {fieldError("addressLine1")}
            </label>
            <label className={labelClass}>
              Address line 2
              <input name="addressLine2" defaultValue={values.addressLine2} autoComplete="address-line2" className={fieldClass} {...field("addressLine2")} />
              {fieldError("addressLine2")}
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Town or city
                <input name="town" defaultValue={values.town} autoComplete="address-level2" className={fieldClass} {...field("town")} />
                {fieldError("town")}
              </label>
              <label className={labelClass}>
                Postcode
                <input name="postcode" defaultValue={values.postcode} autoComplete="postal-code" className={fieldClass} {...field("postcode")} />
                {fieldError("postcode")}
              </label>
            </div>
          </fieldset>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Property value or price
              <input name="propertyValue" defaultValue={values.propertyValue} inputMode="numeric" placeholder="£" className={fieldClass} {...field("propertyValue")} />
              {fieldError("propertyValue")}
            </label>
            <label className={labelClass}>
              Deposit or amount to borrow
              <input name="depositOrLoan" defaultValue={values.depositOrLoan} inputMode="numeric" placeholder="£" className={fieldClass} {...field("depositOrLoan")} />
              {fieldError("depositOrLoan")}
            </label>
            <label className={labelClass}>
              Employment
              <select name="employment" defaultValue={values.employment ?? ""} className={fieldClass} {...field("employment")}>
                <option value="">Choose one</option>
                {employmentTypes.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
              {fieldError("employment")}
            </label>
            <label className={labelClass}>
              Timescale
              <select name="timescale" defaultValue={values.timescale ?? ""} className={fieldClass} {...field("timescale")}>
                <option value="">Choose one</option>
                {timescales.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              {fieldError("timescale")}
            </label>
          </div>
          <label className={labelClass}>
            Anything else Adam should know?
            <textarea name="message" defaultValue={values.message} rows={4} className={fieldClass} {...field("message")} />
            {fieldError("message")}
          </label>
        </fieldset>
      )}

      <label className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted">
        <input type="checkbox" name="consent" value="yes" defaultChecked={values.consent === "yes"} required className="mt-1 h-5 w-5 shrink-0 accent-harbour" {...field("consent")} />
        <span>
          I agree to Moore Financial Solutions contacting me about my mortgage and protection needs. See the{" "}
          <Link href="/privacy" className="font-semibold text-harbour underline">
            privacy notice
          </Link>
          .
          {fieldError("consent") && <span className="block">{fieldError("consent")}</span>}
        </span>
      </label>

      <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70">
        {pending ? "Sending..." : "Send to Adam"}
      </button>
    </form>
  );
}
