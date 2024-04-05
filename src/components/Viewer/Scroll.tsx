import { CloverScrollProps } from "@samvera/clover-iiif";
import { ComponentType } from "react";
import dynamic from "next/dynamic";

const CloverScroll: ComponentType<CloverScrollProps> = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Scroll),
  {
    ssr: false,
  }
);

const Scroll = (props: CloverScrollProps) => <CloverScroll {...props} />;

export default Scroll;
