import React from "react";
import dynamic from "next/dynamic";

const Clover: React.ComponentType<{
  customTheme: any;
  id: string;
  options: any;
}> = dynamic(() => import("@samvera/clover-iiif"), {
  ssr: false,
});

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
    sans: `$book`,
    display: `$bookTight`,
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
  renderAbout: false,
  showTitle: false,
  showIIIFBadge: false,
  showInformationToggle: false,
};

const Viewer = ({ id, options }: { id: string; options?: any }) => (
  <Clover
    id={id}
    options={{ ...defaultOptions, ...options }}
    customTheme={customTheme}
  />
);

export default Viewer;
