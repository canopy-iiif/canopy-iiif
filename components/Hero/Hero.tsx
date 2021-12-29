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

  const resource = hero.items[0].items[0].items[0].body;

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
