import { CloverViewerProps } from "@samvera/clover-iiif";
import ViewerClover from "@src/components/Viewer/Viewer";
import ViewerRamp from "@src/components/Viewer/Ramp";

// @ts-ignore
const viewer = process?.env?.CANOPY_CONFIG?.components?.viewer;

const WorkViewer = (props: CloverViewerProps) => {
  return (
    <>
      {viewer === "clover" && (
        <ViewerClover options={{ canvasHeight: "50vh" }} {...props} />
      )}

      {viewer === "ramp" && <ViewerRamp {...props} />}
    </>
  );
};

export default WorkViewer;
