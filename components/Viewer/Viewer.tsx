import dynamic from "next/dynamic";

const CloverIIIF: React.ComponentType<{ manifestId: string }> = dynamic(
  () => import("@samvera/clover-iiif"),
  {
    ssr: false,
  }
);

const options = {
  showTitle: false,
  showIIIFBadge: false,
  showInformationToggle: false,
  renderAbout: false,
};

const Viewer = ({ manifestId }) => (
  <CloverIIIF id={manifestId} options={options} />
);
export default Viewer;
