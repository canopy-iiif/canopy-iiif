import { Box } from "@radix-ui/themes";
import Share from "../Viewer/Share";
import { styled } from "@stitches/react";

const contentStateViewers = ["clover"];

interface WorkShareProps {
  iiifContent: string;
}

const WorkShare: React.FC<WorkShareProps> = ({ iiifContent }) => {
  // @ts-ignore
  const viewer = process.env.CANOPY_CONFIG.components.viewer;

  const isContentStateViewer = contentStateViewers.includes(viewer);

  return (
    <StyledWorkShare>
      <Share
        iiifContent={iiifContent}
        isContentStateViewer={isContentStateViewer}
      />
    </StyledWorkShare>
  );
};

const StyledWorkShare = styled(Box, {});

export default WorkShare;
