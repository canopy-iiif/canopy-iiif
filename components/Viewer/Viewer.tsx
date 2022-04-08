import dynamic from "next/dynamic";

const CloverIIIF = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});

const Viewer = ({ manifestId }) => <CloverIIIF manifestId={manifestId} />;
export default Viewer;
