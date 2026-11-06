import type { StaticImageData } from "next/image";
import estateAerial from "@/assets/photos/estate-aerial.webp";
import estateBuildings from "@/assets/photos/estate-buildings.webp";
import gardenView from "@/assets/photos/garden-view.webp";
import lake from "@/assets/photos/lake.webp";
import lodge from "@/assets/photos/lodge.webp";
import mansionAerial from "@/assets/photos/mansion-aerial.webp";
import mansionFront from "@/assets/photos/mansion-front.webp";
import mansionLawn from "@/assets/photos/mansion-lawn.webp";
import mansionTrees from "@/assets/photos/mansion-trees.webp";
import waterTower from "@/assets/photos/water-tower.webp";
import woodlandAerial from "@/assets/photos/woodland-aerial.webp";

// Design kit: these are grey placeholders at the real photos' sizes and crops.
// The real site uses photos of the Salomons Estate, where Adam's office is.
export type Photo = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export const photos = {
  mansionLawn: {
    src: mansionLawn,
    alt: "The sandstone mansion on the Salomons Estate above a sunlit lawn",
    caption: "The mansion lawn on the Salomons Estate",
  },
  mansionFront: {
    src: mansionFront,
    alt: "The front of the Salomons mansion with its terrace and garden steps",
    caption: "The mansion on the Salomons Estate",
  },
  mansionTrees: {
    src: mansionTrees,
    alt: "The Salomons mansion seen across parkland between two oak trees",
    caption: "Parkland on the Salomons Estate",
  },
  mansionAerial: {
    src: mansionAerial,
    alt: "Aerial view of the Salomons mansion, its terrace and lawns",
    caption: "The Salomons Estate from the air",
  },
  estateAerial: {
    src: estateAerial,
    alt: "Aerial view across the Salomons Estate woodland towards Tunbridge Wells and the Weald",
    caption: "Looking over the estate towards Tunbridge Wells",
  },
  estateBuildings: {
    src: estateBuildings,
    alt: "Aerial view of the Salomons Estate buildings among trees and lawns",
    caption: "The estate buildings, where my office is",
  },
  woodlandAerial: {
    src: woodlandAerial,
    alt: "The Salomons mansion and water tower surrounded by woodland",
    caption: "The Salomons Estate in summer",
  },
  waterTower: {
    src: waterTower,
    alt: "The Salomons water tower against a blue sky above a hedge and lawn",
    caption: "The water tower on the Salomons Estate",
  },
  lake: {
    src: lake,
    alt: "Trees reflected in the still lake on the Salomons Estate",
    caption: "The lake on the Salomons Estate",
  },
  lodge: {
    src: lodge,
    alt: "A Victorian brick lodge with a steep tiled roof beside an old stone wall",
    caption: "The Victorian lodge on the Salomons Estate",
  },
  gardenView: {
    src: gardenView,
    alt: "A view down the Salomons gardens to the lake and woodland",
    caption: "The gardens on the Salomons Estate",
  },
} satisfies Record<string, Photo>;
