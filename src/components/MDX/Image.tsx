import { CSSProperties } from "react";
import Image from "@components/Viewer/Image";
import { Label } from "@samvera/clover-iiif/primitives";
import { styled } from "@src/styles/stitches";

const MDXImage = ({
  src,
  height = "400px",
  isTiledImage,
  label,
}: {
  src: string;
  height?: CSSProperties["height"];
  isTiledImage?: boolean;
  label?: string;
}) => {
  return (
    <StyledMDXImageFigure>
      <StyledMDXImage css={{ height }}>
        <Image src={src} isTiledImage={isTiledImage} label={label} />
      </StyledMDXImage>
      {label && (
        <figcaption>
          <Label label={label} />
        </figcaption>
      )}
    </StyledMDXImageFigure>
  );
};

const StyledMDXImage = styled("div", {
  backgroundColor: "var(--gray-3)",
});

const StyledMDXImageFigure = styled("figure", {
  padding: "0",
  margin: "0",

  "& figcaption": {
    padding: "$gr3 0",
    fontSize: "$gr3",
    fontWeight: "500",
  },
});

export default MDXImage;
