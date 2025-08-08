import { CloverViewerProps } from "@samvera/clover-iiif";
import ViewerClover from "@src/components/Viewer/Viewer";
import ViewerRamp from "@src/components/Viewer/Ramp";
import { useCanopyState } from "@src/context/canopy";

// @ts-ignore
const viewer = process?.env?.CANOPY_CONFIG?.components?.viewer;

const WorkViewer = (props: CloverViewerProps) => {
  const {
    canopyState: { iiifContentState },
    canopyDispatch,
  } = useCanopyState();

  const handleCanvasIdCallback = (canvasId: string) => {
    if (!canvasId) return;

    const url = new URL(window.location.href);

    const contentState = JSON.stringify({
      "@context": "http://iiif.io/api/presentation/3/context.json",
      id: `${url.toString()}/content-state`,
      type: "Annotation",
      motivation: ["contentState"],
      target: {
        id: canvasId,
        type: "Canvas",
        partOf: [
          {
            id: props.iiifContent,
            type: "Manifest",
          },
        ],
      },
    });

    if (contentState !== iiifContentState)
      canopyDispatch({
        type: "updateContentState",
        iiifContentState: contentState,
      });
  };

  return (
    <>
      {viewer === "clover" && (
        <ViewerClover
          options={{ canvasHeight: "50vh" }}
          {...props}
          canvasIdCallback={handleCanvasIdCallback}
        />
      )}

      {viewer === "ramp" && <ViewerRamp {...props} />}
    </>
  );
};

export default WorkViewer;
