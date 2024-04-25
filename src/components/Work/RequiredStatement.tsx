import { DefinitionListWrapper } from "../Shared/DefinitionList.styled";
import { MetadataItem } from "@iiif/presentation-3";
import React from "react";
import { RequiredStatement } from "@samvera/clover-iiif/primitives";

const WorkRequiredStatement = ({
  requiredStatement,
}: {
  requiredStatement?: MetadataItem;
}) => {
  return (
    <DefinitionListWrapper>
      {requiredStatement && (
        <RequiredStatement requiredStatement={requiredStatement} />
      )}
    </DefinitionListWrapper>
  );
};

export default WorkRequiredStatement;
