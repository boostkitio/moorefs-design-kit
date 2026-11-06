"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Reveals its content once, the first time it scrolls into view.
 * "up" lifts each direct child in a short cascade; "photo" uncovers an image
 * from the top. The hidden state lives in globals.css and only applies when
 * scripts run, so nothing is lost without JavaScript.
 */
export function Reveal({
  as: Tag = "div",
  variant = "up",
  className,
  children,
}: {
  as?: ElementType;
  variant?: "up" | "photo";
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.setAttribute("data-shown", "");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-reveal={variant} className={className}>
      {children}
    </Tag>
  );
}
