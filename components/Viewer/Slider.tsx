import dynamic from "next/dynamic";
import "swiper/css";

const BloomIIIF: React.ComponentType<{ collectionId: string }> = dynamic(
  () => import("@samvera/bloom-iiif"),
  {
    ssr: false,
  }
);

const Slider = ({ collectionId }) => <BloomIIIF collectionId={collectionId} />;

export default Slider;
