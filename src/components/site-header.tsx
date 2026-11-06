import Link from "next/link";
import { HomeLink } from "@/components/home-link";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="wrap flex items-center justify-between gap-6 py-4">
        <HomeLink label="Moore Financial Solutions home" className="shrink-0">
          <Logo />
        </HomeLink>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 whitespace-nowrap text-[1.0625rem] font-semibold xl:gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink transition-colors hover:text-harbour">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-2.5 whitespace-nowrap lg:flex">
          <a href={site.clientPortal} className="btn btn-light">
            Client login
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
