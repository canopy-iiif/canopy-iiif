import { InternationalString } from "@iiif/presentation-3";
import React from "react";
import { Summary } from "@samvera/clover-iiif/primitives";
import { Text } from "@radix-ui/themes";
import { TextProps } from "@radix-ui/themes/dist/cjs/components/callout";

export interface WorkSummaryProps extends TextProps {
  summary: InternationalString;
}

const WorkSummary: React.FC<WorkSummaryProps> = (props) => {
  const { summary } = props;
  const textProps = { ...props, label: undefined };

  return (
    <Text as="p" {...textProps}>
      <Summary summary={summary} as="span" className="work-summary" />
    </Text>
  );
};

export default WorkSummary;
