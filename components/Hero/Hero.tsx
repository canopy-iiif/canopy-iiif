import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Keyboard, Navigation } from "swiper";
import { Label, Summary, Thumbnail } from "@samvera/nectar-iiif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@nulib/design-system";
import { HeroStyled } from "@/components/Hero/Hero.styled";
import Link from "next/link";
import React from "react";
import Container from "../Shared/Container";
import { ArrowRightIcon } from "@radix-ui/react-icons";

interface HeroProps {
  collection?: any;
}

const Hero: React.FC<HeroProps> = ({ collection }) => {
  if (!collection) return <></>;

  return (
    <HeroStyled>
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        keyboard={{ enabled: true }}
        loop={true}
        modules={[Autoplay, EffectFade, Keyboard, Navigation]}
        navigation={collection?.items?.length > 1}
        preloadImages={false}
        slidesPerView={1}
        speed={200}
      >
        {collection.items.map((item) => (
          <SwiperSlide key={item.id}>
            <figure>
              <Link href={item.homepage[0].id}>
                <Thumbnail thumbnail={item.thumbnail} />
                <figcaption>
                  <Container className="slide-inner" isFlex>
                    <Label
                      label={item.label}
                      as="span"
                      className="slide-label"
                    />
                  </Container>
                </figcaption>
              </Link>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroStyled>
  );
};

export default Hero;
