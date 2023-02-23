import React from "react";
import dynamic from "next/dynamic";
import "swiper/css";
import { gr } from "@/styles/helpers/goldenRatio";
import { rem } from "@/styles/global";
import { width } from "@/styles/theme/media";
import { SliderStyled } from "./Slider.styled";
import { SwiperProps } from "swiper/react";

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

const BloomIIIF: React.ComponentType<{
  collectionId: string;
  options: {
    breakpoints: SwiperBreakpoints;
    enablePreview: boolean;
  };
}> = dynamic(() => import("@samvera/bloom-iiif"), {
  ssr: false,
});

const Slider = ({ collectionId }: { collectionId: string }) => (
  <SliderStyled>
    <BloomIIIF
      collectionId={collectionId}
      options={{
        enablePreview: false,
        breakpoints: breakpoints,
      }}
    />
  </SliderStyled>
);

export default Slider;
