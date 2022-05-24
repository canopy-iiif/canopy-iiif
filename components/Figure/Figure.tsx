import { getResourceImage } from "@/hooks/getResourceImage";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { LQIP, Wrapper } from "@/components/Figure/Figure.styled";

const Figure = ({
  resource,
  region = "full",
  size = "400,",
  isCover = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  let image = null;
  if (resource) image = getResourceImage(resource, size, region);

  return (
    <Wrapper>
      <img
        src={image}
        ref={imgRef}
        style={
          isCover
            ? {
                objectFit: "cover",
                objectPosition: "50% 50%",
                width: "200px",
                height: "200px",
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
