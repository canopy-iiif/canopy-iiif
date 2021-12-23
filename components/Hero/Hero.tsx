import React, { useEffect, useState } from "react";
import { getLabel } from "../../hooks/getLabel";

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

  console.log(hero.items[0].items[0].items[0].body.service[0].id);

  const imageService = hero.items[0].items[0].items[0].body.service[0].id;

  // canvas key
  // target region
  // as target?

  return (
    <Wrapper>
      {/* {getLabel(hero.label)} */}
      <Figure>
        <img src={`${imageService}/250,950,2615,1200/1280,/0/default.jpg`} />
      </Figure>
    </Wrapper>
  );
};

export default Hero;
