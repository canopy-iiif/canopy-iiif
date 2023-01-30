import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
} from "@samvera/nectar-iiif";
import { StyledWorkInner, WorkData } from "@/components/Work/Inner.styled";
import FACETS from "@/.canopy/facets";
import Link from "next/link";
import React from "react";

interface ValueAsListItemProps {
  searchParam?: string;
  value?: string;
}

export const ValueAsListItem: React.FC<ValueAsListItemProps> = ({
  searchParam,
  value,
}) => {
  if (!value) return <></>;
  const search = `/search?${searchParam}=`;
  return (
    <Link href={search.concat(encodeURIComponent(value))}>
      <span dangerouslySetInnerHTML={{ __html: value }}></span>
    </Link>
  );
};

const WorkInner = ({ manifest }) => {
  const { label, metadata, requiredStatement, summary } = manifest;

  const formattedValues = FACETS.map((value) => {
    return {
      Content: <ValueAsListItem searchParam={value.slug} />,
      matchingLabel: { none: [value.label] },
    };
  });

  return (
    <StyledWorkInner>
      <WorkData>
        <Label label={label} as="h1" />
        <Summary summary={summary} as="p" className="work-summary" />
        <Metadata customValueContent={formattedValues} metadata={metadata} />
        <RequiredStatement requiredStatement={requiredStatement} />
      </WorkData>
    </StyledWorkInner>
  );
};

export default WorkInner;
