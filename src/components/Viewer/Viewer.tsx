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
    accent: "var(--colors-indigo10)",
    accentAlt: "var(--colors-indigo11)",
    accentMuted: "var(--colors-indigo8)",
    primary: "var(--colors-slate12)",
    primaryAlt: "var(--colors-slate12)",
    primaryMuted: "var(--colors-slate10)",
    secondary: "var(--colors-slate1)",
    secondaryAlt: "var(--colors-slate3)",
    secondaryMuted: "var(--colors-slate2)",
  },
  fonts: {
    sans: `var(--canopy-sans-font)`,
    display: `var(--canopy-display-font)`,
  },
};

const defaultOptions = {
  canvasBackgroundColor: "var(--colors-slate4)",
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
