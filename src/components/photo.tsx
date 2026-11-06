import { FadeImage } from "@/components/fade-image";
import { brand } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { RoofFrame } from "@/components/roof-frame";
import type { Photo as PhotoData } from "@/lib/photos";

/**
 * A Salomons Estate photo, uncovered from the top as it scrolls into view.
 * "roof" sets it under the brand roofline; "plain" is a square-cornered
 * picture for wide bands. The caption says what the picture shows.
 */
export function Photo({
  photo,
  sizes,
  ratio = 4 / 3,
  frame = "roof",
  roof = brand.green,
  caption = true,
  priority = false,
  reveal = !priority,
  className,
}: {
  photo: PhotoData;
  sizes: string;
  ratio?: number;
  frame?: "roof" | "plain";
  roof?: string;
  caption?: boolean;
  priority?: boolean;
  /** Uncover on scroll. Off for pictures in the first screen so they paint at once. */
  reveal?: boolean;
  className?: string;
}) {
  const image = (
    <FadeImage
      src={{ src: photo.src.src, width: photo.src.width, height: photo.src.height }}
      alt={photo.alt}
      sizes={sizes}
      priority={priority}
      fill
      className="object-cover"
    />
  );
  const picture =
    frame === "roof" ? (
      <RoofFrame ratio={ratio} roof={roof} className="px-[4.5%]">
        {image}
      </RoofFrame>
    ) : (
      <div className="relative overflow-hidden bg-line/60" style={{ aspectRatio: ratio }}>
        {image}
      </div>
    );
  return (
    <figure className={className}>
      {reveal ? <Reveal variant="photo">{picture}</Reveal> : picture}
      {caption && <figcaption className="mt-3 text-[0.95rem] text-muted">{photo.caption}</figcaption>}
    </figure>
  );
}
