"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Every new page opens at the very top, menu included.
 *
 * Next.js only scrolls when the new page would otherwise be off screen, and then
 * to the top of the page content rather than the top of the window, so some
 * links opened partway down (Commercial landed below its banner). The browser's
 * back and forward buttons still restore where you were, and a link to a
 * section (#enquiry) still goes to that section.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const firstRender = useRef(true);
  const fromHistory = useRef(false);

  useEffect(() => {
    const onPop = () => {
      fromHistory.current = true;
    };
    // A link to the page you are already on (Calculators while on Calculators)
    // changes nothing in Next.js, so take it back to the top instead.
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement) || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;
      if (url.pathname !== window.location.pathname) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "smooth" });
    };
    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (fromHistory.current) {
      fromHistory.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
