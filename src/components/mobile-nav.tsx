"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/lib/site";

export function MobileNav() {
  const pathname = usePathname();
  // The page the menu was opened on. Navigating anywhere else, including with
  // the browser's back button, closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape or a tap outside closes the menu. Escape hands focus back to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenOn(null);
      buttonRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpenOn(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
        className="flex h-12 w-12 items-center justify-center rounded-xl text-harbour transition-[background-color,scale] duration-150 ease-out hover:bg-sky-soft active:scale-[0.94]"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] origin-top overflow-y-auto border-b border-line bg-white shadow-lg transition-[opacity,translate] duration-200 ease-out starting:-translate-y-2 starting:opacity-0 motion-reduce:starting:translate-y-0">
          <nav aria-label="Mobile" className="wrap py-4">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={close} className="block py-3 text-lg font-semibold text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/how-it-works" onClick={close} className="block py-3 text-lg font-semibold text-ink">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={close} className="block py-3 text-lg font-semibold text-ink">
                  Guides
                </Link>
              </li>
            </ul>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              <Link href="/contact" onClick={close} className="btn btn-primary">
                Get in touch
              </Link>
              <a href={site.clientPortal} className="btn btn-light">
                Client login
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
