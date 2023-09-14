import React from "react";
import dynamic from "next/dynamic";

const CloverViewer: React.ComponentType<{
  customTheme: any;
  iiifContent: string;
  options: any;
}> = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  }
);

const customTheme = {
  colors: {
    accent: "$indigo10",
    accentAlt: "$indigo11",
    accentMuted: "$indigo8",
    primary: "$slate12",
    primaryAlt: "$slate12",
    primaryMuted: "$slate10",
    secondary: "$slate1",
    secondaryAlt: "$slate3",
    secondaryMuted: "$slate2",
  },
  fonts: {
    sans: `$sans`,
    display: `$display`,
  },
};

const defaultOptions = {
  canvasBackgroundColor: `$slate6`,
  canvasHeight: `600px`,
  openSeadragon: {
    gestureSettingsMouse: {
      scrollToZoom: false,
    },
  },
  informationPanel: {
    open: false,
    renderAbout: false,
    renderToggle: false,
  },
  showTitle: false,
  showIIIFBadge: false,
};

const Viewer = ({
  iiifContent,
  options,
}: {
  iiifContent: string;
  options?: any;
}) => (
  <CloverViewer
    iiifContent={iiifContent}
    options={{ ...defaultOptions, ...options }}
    customTheme={customTheme}
  />
);

export default Viewer;
