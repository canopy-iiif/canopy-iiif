import dynamic from "next/dynamic";
import "swiper/css";
import { gr } from "@/styles/helpers/goldenRatio";
import { rem } from "@/styles/global";
import { width } from "@/styles/theme/media";

const breakpoints: SwiperBreakpoints = {
  [width.xxs]: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: rem,
  },
  [width.xs]: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: rem,
  },
  [width.sm]: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: rem,
  },
  [width.md]: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: rem * gr(1),
  },
  [width.lg]: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: rem * gr(1),
  },
  [width.xl]: {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: rem * gr(2),
  },
};

const Bloom: React.ComponentType<{ collectionId: string }> = dynamic(
  () => import("@samvera/bloom-iiif"),
  {
    ssr: false,
  }
);

const Slider = ({ collectionId }) => <Bloom collectionId={collectionId} />;

export default Slider;
