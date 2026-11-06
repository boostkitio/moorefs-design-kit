"use server";

import { enquirySchema, type Enquiry, type EnquiryState } from "@/lib/enquiry";

// Design kit stub. It validates the form so the error and thank-you states can
// be styled, but it sends nothing anywhere.
export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const raw = Object.fromEntries(
    [...formData.entries()].filter(([key]) => !key.startsWith("$ACTION")).map(([k, v]) => [k, String(v)]),
  );
  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof Enquiry, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof Enquiry;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values: raw, attempt: Date.now() };
  }
  return { status: "success", firstName: parsed.data.firstName };
}
