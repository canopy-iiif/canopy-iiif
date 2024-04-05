import { CloverImageProps } from "@samvera/clover-iiif";
import React from "react";
import dynamic from "next/dynamic";

const CloverImage: React.ComponentType<CloverImageProps> = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Image),
  {
    ssr: false,
  }
);

const Image = (props: CloverImageProps) => <CloverImage {...props} />;

export default Image;
