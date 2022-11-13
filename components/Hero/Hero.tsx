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
              <Thumbnail thumbnail={item.thumbnail} />
              <Container className="slide-inner" isFlex>
                <figcaption>
                  <Link href={item.homepage[0].id}>
                    <Label
                      label={item.label}
                      as="span"
                      className="slide-label"
                    />
                  </Link>
                  {item.summary && (
                    <Summary
                      summary={item.summary}
                      as="span"
                      className="slide-summary"
                    />
                  )}
                  {item.seeAlso &&
                    item.seeAlso.map((entry) => (
                      <Link href={entry.id} key={entry.id}>
                        <Button isPrimary as="a" className="slide-see-also">
                          {entry.label ? (
                            <Label label={entry.label} />
                          ) : (
                            <span>Search Collection</span>
                          )}
                        </Button>
                      </Link>
                    ))}
                </figcaption>
              </Container>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroStyled>
  );
};

export default Hero;
