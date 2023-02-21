import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import FacetsOption from "./Option";

interface FacetsFacetProps {
  label: string;
  slug: string;
  values: any;
  activeValues: any;
}

export const FacetsFacet: React.FC<FacetsFacetProps> = ({
  label,
  slug,
  values,
  activeValues,
}) => {
  return (
    <Accordion.Item value={slug}>
      <Accordion.Header asChild>
        <Accordion.Trigger style={{ width: "100%", padding: "0.618rem" }}>
          {label} - {activeValues ? activeValues : "any"}
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>
        {values.map((option: any) => (
          <FacetsOption option={option} key={option.slug} />
        ))}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default FacetsFacet;
