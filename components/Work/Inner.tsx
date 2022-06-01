import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
} from "@samvera/nectar-iiif";
import { StyledWorkInner, WorkData } from "@/components/Work/Inner.styled"

const WorkInner = ({ manifest }) => {
  const { label, metadata, requiredStatement, summary } = manifest;

  return (
    <StyledWorkInner>
      <WorkData>
        <Label label={label} as="h1" />
        <Summary summary={summary} />
        <Metadata metadata={metadata} />
        <RequiredStatement requiredStatement={requiredStatement} />
      </WorkData>
    </StyledWorkInner>
  );
};

export default WorkInner;