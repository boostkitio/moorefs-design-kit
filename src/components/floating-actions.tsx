"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

// WhatsApp glyph from Simple Icons (CC0).
const whatsappPath =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

/** Back-to-top, Adam Bot and WhatsApp, fixed to the bottom right of every public page. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // The button hides at the top, so hand keyboard focus to the logo link.
    document.querySelector<HTMLElement>('header a[href="/"]')?.focus({ preventScroll: true });
  }

  return (
    <div className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        inert={!showTop}
        className={`hidden h-12 w-12 items-center justify-center rounded-full bg-sky text-harbour transition-[opacity,translate,scale,background-color] ease-out hover:bg-[#d9e8d3] active:scale-[0.94] motion-reduce:transition-none md:flex ${
          showTop ? "opacity-100 duration-200" : "pointer-events-none translate-y-2 opacity-0 duration-150"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
      {/* Design kit: the chat assistant is not included. This is its launcher button, for styling only. */}
      <button
        type="button"
        className="flex h-14 items-center gap-2 rounded-2xl bg-harbour px-4 font-bold text-white ring-2 ring-white transition-[background-color,scale] duration-150 ease-out hover:bg-harbour-dark active:scale-[0.96] motion-reduce:transition-none"
      >
        Ask Adam Bot
      </button>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Message Adam on WhatsApp (opens WhatsApp)"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white transition-[background-color,scale] duration-150 ease-out hover:bg-[#1ebe5b] active:scale-[0.94] motion-reduce:transition-none"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d={whatsappPath} />
        </svg>
      </a>
    </div>
  );
}
