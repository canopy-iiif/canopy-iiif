"use client";

import dynamic from "next/dynamic";

const CloverIIIF: React.ComponentType<{ id: string }> = dynamic(
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

const Viewer = ({ id }) => <CloverIIIF id={id} options={options} />;

export default Viewer;
