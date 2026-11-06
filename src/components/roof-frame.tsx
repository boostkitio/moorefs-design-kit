import type { CSSProperties, ReactNode } from "react";
import { RoofMark } from "@/components/logo";

/*
 * Any picture under the brand roofline: the picture is cut to the roof's
 * pitch (50/194) and the roof floats just above it with the eaves
 * overhanging, like the roof over the wordmark in the logo.
 *
 * Maths, as fractions of the picture width W (margins resolve against width):
 * the roof is 1.12W wide, so its viewBox (400 x 64) is 0.1792W tall. The
 * picture's ridge sits 12 roof units below the roof ridge, at 0.056W, so the
 * picture is pulled up by 0.1792W - 0.056W = 12.32%. The gable rises 0.1288W,
 * which is 12.88% x (W / H) of the picture's height.
 */
export function RoofFrame({
  ratio,
  roof,
  className = "",
  arch = false,
  children,
}: {
  /** Width divided by height of the picture. */
  ratio: number;
  /** Roof colour. */
  roof: string;
  className?: string;
  /** In the door look, frame the picture in an arch (Adam's portrait) rather than rounded corners. */
  arch?: boolean;
  children: ReactNode;
}) {
  const gable = `${(12.88 * ratio).toFixed(2)}%`;
  const style: CSSProperties = {
    aspectRatio: ratio,
    clipPath: `polygon(0 ${gable}, 50% 0, 100% ${gable}, 100% 100%, 0 100%)`,
  };
  return (
    <div className={className}>
      <RoofMark className="look-roof relative z-10 -mx-[6%] block h-auto w-[112%] max-w-none" color={roof} />
      <div className={`roof-clip relative mt-[-12.32%] overflow-hidden bg-line/60 ${arch ? "roof-arch" : ""}`} style={style}>
        {children}
      </div>
    </div>
  );
}
