import type { CSSProperties } from "react";
import { lenders, type Lender } from "@/lib/lenders";

/** Wide wordmarks get shorter and compact marks taller, so every logo carries similar visual weight. */
function logoSize({ width, height }: Lender) {
  const aspect = width / height;
  const h = Math.min(44, Math.max(20, 34 * Math.pow(3.2 / aspect, 0.45)));
  return { height: Math.round(h), width: Math.round(h * aspect) };
}

function LogoList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="lender-list" aria-hidden={hidden || undefined}>
      {lenders.map((lender) => {
        const { width, height } = logoSize(lender);
        return (
          <li key={lender.slug}>
            <span
              role={hidden ? undefined : "img"}
              aria-label={hidden ? undefined : lender.name}
              className="lender-logo"
              style={{ width, height, "--logo": `url(/lenders/${lender.slug}.png)` } as CSSProperties}
            />
          </li>
        );
      })}
    </ul>
  );
}

/** A slow row of lender logos in the current look's colour. Static and wrapped when motion is reduced. */
export function LenderLogos() {
  return (
    <section aria-labelledby="lenders" className="pb-20 md:pb-28">
      <div className="wrap">
        <h2 id="lenders" className="text-center text-lg font-bold text-muted">
          Some of the lenders I work with
        </h2>
      </div>
      <div className="lender-track mt-8">
        <div className="lender-rail">
          <LogoList />
          <LogoList hidden />
        </div>
      </div>
    </section>
  );
}
