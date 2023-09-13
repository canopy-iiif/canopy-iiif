import "swiper/css";

import CloverSlider from "@samvera/clover-iiif/slider";
import React from "react";
import { SliderStyled } from "./Slider.styled";
import { SwiperProps } from "swiper/react";
import { gr } from "@/styles/helpers/goldenRatio";
import { rem } from "@/styles/global";
import { width } from "@/styles/theme/media";

type SwiperBreakpoints = SwiperProps["breakpoints"];

const spaceBetween = (multiplier: number) => rem * gr(multiplier);

const breakpoints: SwiperBreakpoints = {
  [width.xxs]: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: spaceBetween(1),
  },
  [width.xs]: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: spaceBetween(1),
  },
  [width.sm]: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: spaceBetween(1),
  },
  [width.md]: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: spaceBetween(2),
  },
  [width.lg]: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: spaceBetween(2),
  },
  [width.xl]: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: spaceBetween(2),
  },
};

const Slider = ({ collectionId }: { collectionId: string }) => (
  <SliderStyled>
    <CloverSlider
      iiifContent={collectionId}
      options={{
        breakpoints: breakpoints,
      }}
    />
  </SliderStyled>
);

export default Slider;
