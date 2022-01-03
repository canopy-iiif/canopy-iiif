import React, { useEffect, useState } from "react";

import { getManifestById } from "../../pages/api/iiif";
import Figure from "../Figure/Figure";
import { Wrapper } from "./Hero.styled";

const Hero = () => {
  const [hero, setHero] = useState();

  useEffect(() => {
    const random = Math.floor(Math.random() * process.env.hero.length);
    getManifestById(process.env.hero[random]).then((json) => {
      setHero(json);
    });
  }, []);

  if (!hero) return null;

  let resource = null;

  /**
   * @todo: handle this better
   */
  if (hero.items) resource = hero.items[0].items[0].items[0].body;

  if (hero.sequences)
    resource = hero.sequences[0].canvases[0].images[0].resource;

  // canvas key
  // target region
  // as target?

  return (
    <Wrapper>
      <Figure resource={resource} region="250,950,2615,1200" size="1280," />
    </Wrapper>
  );
};

export default Hero;
