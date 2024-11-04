import { DefinitionListWrapper } from "../Shared/DefinitionList.styled";
import FACETS from "@.canopy/facets.json";
import Link from "@components/Shared/Link";
import { Metadata } from "@samvera/clover-iiif/primitives";
import { MetadataItem } from "@iiif/presentation-3";
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

const WorkMetadata = ({ metadata }: { metadata?: MetadataItem[] }) => {
  const formattedValues = FACETS.map((value: any) => {
    return {
      Content: (
        <ValueAsListItem searchParam={value.slug} searchValues={value.values} />
      ),
      matchingLabel: { none: [value.label] },
    };
  });

  return (
    <DefinitionListWrapper>
      {metadata && (
        <Metadata customValueContent={formattedValues} metadata={metadata} />
      )}
    </DefinitionListWrapper>
  );
};

export default WorkMetadata;
