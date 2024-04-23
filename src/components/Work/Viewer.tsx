import { Box } from "@radix-ui/themes";
import { CloverViewerProps } from "@samvera/clover-iiif";
import Viewer from "@src/components/Viewer/Viewer";

const WorkViewer = (props: CloverViewerProps) => {
  return (
    <Box height="50vh" position="relative">
      <Viewer options={{ canvasHeight: "100%" }} {...props} />
    </Box>
  );
};

export default WorkViewer;
