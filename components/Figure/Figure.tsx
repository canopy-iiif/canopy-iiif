import { getResourceImage } from "../../hooks/getResourceImage";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { LQIP, Wrapper } from "./Figure.styled";

const Figure = ({ resource, region = "full", size = "400," }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      console.log(imgRef.current);
      setLoaded(true);
    }
  }, []);

  console.log(loaded);

  let image = null;
  let lqip = null;

  if (resource) lqip = getResourceImage(resource, "20,", region);
  if (resource) image = getResourceImage(resource, size, region);

  return (
    <Wrapper>
      {lqip && (
        <LQIP css={{ background: `url("${lqip}")` }} aria-hidden="true" />
      )}
      <img
        src={image}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx("source", loaded && "loaded")}
      />
    </Wrapper>
  );
};

export default Figure;
