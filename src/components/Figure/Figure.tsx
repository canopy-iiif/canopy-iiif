import React, { useState, useEffect, useRef } from "react";
import { Image, Wrapper } from "@/components/Figure/Figure.styled";
import clsx from "clsx";
import { getResourceImage } from "@/hooks/getResourceImage";

interface FigureProps {
  resource: any;
  region?: string;
  size?: string;
  isCover?: boolean;
}

const Figure: React.FC<FigureProps> = ({
  resource,
  region = "full",
  size = "400,",
  isCover = false,
}) => {
  const [image, setImage] = useState();
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setImage(getResourceImage(resource, size, region));

    // @ts-ignore
    if (imgRef?.current && imgRef?.current?.complete) setLoaded(true);
  }, []);

  return (
    <Wrapper>
      <Image
        alt=""
        src={image}
        ref={imgRef}
        style={
          isCover
            ? {
                objectFit: "cover",
                objectPosition: "50% 50%",
                width: "100%",
                height: "100%",
              }
            : {}
        }
        onLoad={() => setLoaded(true)}
        className={clsx("source", loaded && "loaded")}
      />
    </Wrapper>
  );
};

export default Figure;
