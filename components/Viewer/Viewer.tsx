import dynamic from "next/dynamic";

const ReactMediaPlayer = dynamic(() => import("@nulib/react-media-player"), {
  ssr: false,
});

const Viewer = ({ manifestId }) => (
  <ReactMediaPlayer
    manifestId={manifestId}
    options={{ showTitle: false, showIIIFBadge: false }}
  />
);
export default Viewer;
