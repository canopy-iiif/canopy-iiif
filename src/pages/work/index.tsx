import { Box } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const CloverViewer = dynamic(() => import("@samvera/clover-iiif/viewer"), {
  ssr: false,
});

const iiifContent =
  "https://api.dc.library.northwestern.edu/api/v2/works/972196ff-d614-4b76-9d12-80e18f1f37c9?as=iiif";

export default function Work() {
  return (
    <main>
      <Box width="100%">
        <div style={{ minHeight: "640px" }}>
          <CloverViewer
            iiifContent={iiifContent}
            options={{
              showIIIFBadge: false,
              showTitle: false,
              showInformationToggle: false,
              renderAbout: false,
              canvasHeight: "640px",
              canvasBackgroundColor: "var(--slate-4)",
              openSeadragon: {
                gestureSettingsMouse: {
                  scrollToZoom: false,
                },
              },
            }}
          />
        </div>
      </Box>
    </main>
  );
}
