import CanopyLink from "../Shared/Link";
import { DefinitionListWrapper } from "../Shared/DefinitionList.styled";

const WorkManifestId = ({ manifestId }: { manifestId: string }) => {
  return (
    <DefinitionListWrapper>
      <dl>
        <dt>IIIF Manifest</dt>
        <dd style={{ wordBreak: "break-word" }}>
          <CanopyLink href={manifestId}>{manifestId}</CanopyLink>
        </dd>
      </dl>
    </DefinitionListWrapper>
  );
};

export default WorkManifestId;
