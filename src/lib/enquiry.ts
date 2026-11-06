import { z } from "zod";

export const enquiryGoals = [
  "Buy my first home",
  "Move home",
  "Remortgage",
  "Buy to let",
  "Commercial, development or bridging",
  "Protection only",
  "Something else",
] as const;

export const employmentTypes = [
  "Employed",
  "Self-employed",
  "Company director",
  "Contractor",
  "Retired",
  "Other",
] as const;

export const timescales = [
  "As soon as possible",
  "In the next 3 months",
  "In 3 to 6 months",
  "Just researching",
] as const;

const optionalText = (max: number, tooLong = `Keep this under ${max} characters`) =>
  z
    .string()
    .trim()
    .max(max, tooLong)
    .optional()
    .transform((v) => (v ? v : undefined));

const optionalMoney = z
  .string()
  .trim()
  .max(20, "Enter an amount in pounds")
  .optional()
  .transform((v) => (v ? v.replace(/[£,\s]/g, "") : undefined))
  .refine((v) => v === undefined || /^\d+(\.\d{1,2})?$/.test(v), "Enter an amount in pounds");

export const enquirySchema = z.object({
  goal: z.enum(enquiryGoals, { message: "Choose what you are looking to do" }),
  firstName: z.string().trim().min(1, "Enter your first name").max(80, "Keep this under 80 characters"),
  lastName: z.string().trim().min(1, "Enter your last name").max(80, "Keep this under 80 characters"),
  email: z.string().trim().email("Enter a valid email address").max(200, "Enter a valid email address"),
  mobile: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid phone number"),
  dateOfBirth: optionalText(10, "Enter a valid date of birth").refine(
    (v) => v === undefined || /^\d{4}-\d{2}-\d{2}$/.test(v),
    "Enter a valid date of birth",
  ),
  addressLine1: optionalText(120),
  addressLine2: optionalText(120),
  town: optionalText(80),
  postcode: optionalText(10, "Enter a valid UK postcode")
    .transform((v) => (v ? v.toUpperCase().replace(/\s+/g, " ") : undefined))
    .refine(
      (v) => v === undefined || /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/.test(v),
      "Enter a valid UK postcode",
    ),
  propertyValue: optionalMoney,
  depositOrLoan: optionalMoney,
  employment: z.enum(employmentTypes).optional().or(z.literal("").transform(() => undefined)),
  timescale: z.enum(timescales).optional().or(z.literal("").transform(() => undefined)),
  message: optionalText(2000),
  consent: z.literal("yes", { message: "Please confirm we can contact you" }),
});

export type Enquiry = z.infer<typeof enquirySchema>;

const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "referrer", "landing_page"] as const;

/** Where the visitor came from, UTM values, referrer and page path only. */
export function attributionFrom(raw: Record<string, string>) {
  const out: Record<string, string> = {};
  for (const key of attributionKeys) {
    const value = raw[key]?.trim();
    if (value) out[key] = value.slice(0, key === "referrer" || key === "landing_page" ? 500 : 150);
  }
  return out;
}

export type EnquiryState =
  | { status: "idle" }
  | { status: "success"; firstName: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof Enquiry, string>>;
      /** What was submitted, so fields can be refilled after React resets the form. */
      values?: Record<string, string>;
      /** Changes on every failed attempt so the form remounts with `values` as its defaults. */
      attempt: number;
    };
