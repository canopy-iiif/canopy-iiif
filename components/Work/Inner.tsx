import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
} from "@samvera/nectar-iiif";
import { StyledWorkInner, WorkData } from "@/components/Work/Inner.styled";
import Link from "next/link";

interface ValueAsListItemProps {
  searchParam?: string;
  value?: string;
}

export const ValueAsListItem: React.FC<ValueAsListItemProps> = ({
  searchParam,
  value,
}) => {
  if (!value) return <></>;
  const search = `xx`;
  return (
    <>
      {searchParam ? (
        <Link href={search.concat(encodeURIComponent(value))}>{value}</Link>
      ) : (
        <span dangerouslySetInnerHTML={{ __html: value }} />
      )}
    </>
  );
};

const WorkInner = ({ manifest }) => {
  const { label, metadata, requiredStatement, summary } = manifest;

  const formattedValues = [].map((value) => {
    return {
      Content: <ValueAsListItem searchParam={value.searchParam} />,
      matchingLabel: { none: [value.label] },
    };
  });

  return (
    <StyledWorkInner>
      <WorkData>
        <Label label={label} as="h1" />
        <Summary summary={summary} as="p" className="work-summary" />
        <Metadata
          customValueContent={formattedValues}
          customValueDelimiter={`<br/>`}
          metadata={metadata}
        />
        <RequiredStatement requiredStatement={requiredStatement} />
      </WorkData>
    </StyledWorkInner>
  );
};

export default WorkInner;
