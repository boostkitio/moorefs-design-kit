"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Logo link: goes home, or scrolls back to the top when already on the homepage. */
export function HomeLink({ children, className, label }: { children: ReactNode; className?: string; label: string }) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label={label}
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        // Drop any #section from the address so a refresh stays at the top.
        if (window.location.hash) window.history.replaceState(null, "", "/");
      }}
    >
      {children}
    </Link>
  );
}
