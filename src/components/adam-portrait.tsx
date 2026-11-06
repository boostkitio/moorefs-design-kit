import adam from "@/assets/adam-moore.webp";
import { FadeImage } from "@/components/fade-image";
import { brand } from "@/components/logo";
import { RoofFrame } from "@/components/roof-frame";

/** Adam's headshot under the brand roofline. */
function House({ priority, roof }: { priority: boolean; roof: string }) {
  return (
    <RoofFrame ratio={adam.width / adam.height} roof={roof} arch className="w-full">
      <FadeImage
        src={{ src: adam.src, width: adam.width, height: adam.height }}
        alt="Adam Moore, mortgage and protection adviser"
        sizes="(min-width: 1024px) 420px, 90vw"
        priority={priority}
        className="block h-auto w-full"
      />
    </RoofFrame>
  );
}

/**
 * "hero" stands on the bottom edge of the green homepage hero with a marigold
 * roof; "panel" sits on a light sage panel with a green roof.
 */
export function AdamPortrait({ priority = false, variant = "panel" }: { priority?: boolean; variant?: "panel" | "hero" }) {
  if (variant === "hero") {
    return (
      <div className="portrait-hero sunrise mx-auto w-full max-w-[300px] px-[3%] pt-4 sm:max-w-[430px] lg:mx-0 lg:justify-self-end">
        <House priority={priority} roof={brand.marigold} />
      </div>
    );
  }

  return (
    <div className="flex items-end justify-center rounded-[20px] bg-sky px-10 pt-10 sm:px-16 sm:pt-14">
      <div className="w-full max-w-[400px]">
        <House priority={priority} roof={brand.green} />
      </div>
    </div>
  );
}
