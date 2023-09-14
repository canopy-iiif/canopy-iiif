import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
} from "@samvera/clover-iiif/primitives";
import { StyledWorkInner, WorkData } from "@/components/Work/Inner.styled";

import { DefinitionListWrapper } from "../Shared/DefinitionList.styled";
import FACETS from "@/.canopy/facets";
import Heading from "@/components/Shared/Heading/Heading";
import Link from "next/link";
import { Manifest } from "@iiif/presentation-3";
import ManifestId from "./ManifestId";
import React from "react";

interface ValueAsListItemProps {
  searchParam: string;
  searchValues: [
    {
      value: string;
      slug: string;
      doc_count: number;
    }
  ];
  value?: string;
}

export const ValueAsListItem: React.FC<ValueAsListItemProps> = ({
  searchParam,
  searchValues,
  value,
}) => {
  if (!value) return <></>;
  const entry = searchValues?.find((entry) => entry.value === value);
  const search = `/search?${searchParam}=`;
  return (
    <Link href={search.concat(encodeURIComponent(entry?.slug as string))}>
      <span dangerouslySetInnerHTML={{ __html: value }}></span>
    </Link>
  );
};

interface WorkInnerProps {
  manifest: Manifest;
}

const WorkInner: React.FC<WorkInnerProps> = ({ manifest }) => {
  const { id, label, metadata, requiredStatement, summary } = manifest;

  const formattedValues = FACETS.map((value: any) => {
    return {
      Content: (
        <ValueAsListItem searchParam={value.slug} searchValues={value.values} />
      ),
      matchingLabel: { none: [value.label] },
    };
  });

  return (
    <StyledWorkInner>
      <WorkData>
        <Heading as="h1">
          <Label label={label} as="span" />
        </Heading>
        {summary && (
          <Summary summary={summary} as="p" className="work-summary" />
        )}
        <DefinitionListWrapper>
          {metadata && (
            <Metadata
              customValueContent={formattedValues}
              metadata={metadata}
            />
          )}
          {requiredStatement && (
            <RequiredStatement requiredStatement={requiredStatement} />
          )}
          <ManifestId manifestId={id} />
        </DefinitionListWrapper>
      </WorkData>
    </StyledWorkInner>
  );
};

export default WorkInner;
