"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * A photo that fades in once it has loaded, over the flat sage of its frame,
 * instead of showing a blurred preview first. Without scripts it simply shows.
 */
export function FadeImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...props}
      alt={props.alt}
      data-fade=""
      data-loaded={loaded ? "" : undefined}
      onLoad={(event) => {
        setLoaded(true);
        props.onLoad?.(event);
      }}
    />
  );
}
