import dynamic from "next/dynamic";
import "swiper/css";

const Bloom: React.ComponentType<{ collectionId: string }> = dynamic(
  () => import("@samvera/bloom-iiif"),
  {
    ssr: false,
  }
);

const Slider = ({ collectionId }) => <Bloom collectionId={collectionId} />;

export default Slider;
