import { CloverViewerProps } from "@samvera/clover-iiif";
import Viewer from "@src/components/Viewer/Viewer";

const WorkViewer = (props: CloverViewerProps) => {
  return (
    <Viewer options={{ canvasHeight: "50vh" }} {...props} />
  );
};

export default WorkViewer;
