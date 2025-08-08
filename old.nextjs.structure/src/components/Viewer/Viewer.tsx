import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { styled } from "@src/styles/stitches";

const CloverViewer: React.ComponentType<{
  customTheme: any;
  iiifContent: string;
  options: any;
  canvasIdCallback?: (canvasId: string) => void;
}> = dynamic(
  () => import("@samvera/clover-iiif").then((Clover) => Clover.Viewer),
  {
    ssr: false,
  }
);

const customTheme = {
  fonts: {
    sans: `var(--canopy-sans-font)`,
    display: `var(--canopy-display-font)`,
  },
};

const defaultOptions = {
  canvasBackgroundColor: "var(--gray-3)",
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
  canvasIdCallback,
}: {
  iiifContent: string;
  options?: any;
  canvasIdCallback?: (canvasId: string) => void;
}) => {
  const [iiifContentVerified, setIIIFContentVerified] = useState<string>();

  useEffect(() => {
    const url = new URL(window.location.href);
    const iiifContentParam = url.searchParams.get("iiif-content");

    if (!iiifContentParam) {
      setIIIFContentVerified(iiifContent);
      return;
    } else {
      setIIIFContentVerified(iiifContentParam);
      return;
    }
  }, []);

  if (!iiifContentVerified) return;

  return (
    <StyledCloverViewer>
      <CloverViewer
        iiifContent={iiifContentVerified}
        options={{ ...defaultOptions, ...options }}
        customTheme={customTheme}
        canvasIdCallback={canvasIdCallback}
      />
    </StyledCloverViewer>
  );
};

const StyledCloverViewer = styled("div", {
  ".clover-viewer-header": {
    "span.label": {
      fontSize: "$gr4",
    },
    "& button": {
      backgroundColor: "var(--gray-1)",

      "> span[data-testid=select-button-value]": {
        fontSize: "$gr4",
      },
    },
  },
});

export default Viewer;
