import React, { useEffect, useState } from "react";
import { getLabel } from "../../hooks/getLabel";
import { getResourceImage } from "../../hooks/getResourceImage";

import { getManifestById } from "../../pages/api/iiif";
import { Figure, Wrapper } from "./Hero.styled";

const Hero = () => {
  const [hero, setHero] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * process.env.hero.length);
    getManifestById(process.env.hero[random]).then((json) => {
      setHero(json);
    });
  }, []);

  if (!hero) return null;

  const resource = hero.items[0].items[0].items[0].body;
  const image = getResourceImage(resource, "1280,", "250,950,2615,1200");

  // canvas key
  // target region
  // as target?

  return (
    <Wrapper>
      {/* {getLabel(hero.label)} */}
      <Figure>
        <img src={image} />
      </Figure>
    </Wrapper>
  );
};

export default Hero;
