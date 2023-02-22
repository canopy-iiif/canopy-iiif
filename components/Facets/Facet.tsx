import { useFacetsState } from "@/context/facets";
import * as Accordion from "@radix-ui/react-accordion";
import React, { useEffect, useState } from "react";
import { FacetsFacetActivate, FacetsFacetHeader } from "./Facet.styled";
import FacetsOption from "./Option";

interface FacetsFacetProps {
  label: string;
  slug: string;
  values: any;
}

export const FacetsFacet: React.FC<FacetsFacetProps> = ({
  label,
  slug,
  values,
}) => {
  const { facetsState } = useFacetsState();
  const { facetsActive } = facetsState;

  const [activeValues, setActiveValues] = useState("Any");

  useEffect(() => {
    const activeSlug = facetsActive.find(
      (entry: any) => entry.label === slug
    )?.value;

    if (activeSlug)
      setActiveValues(
        values.find((entry: any) => entry.slug === activeSlug)?.value
      );
  }, [facetsActive, slug, values]);

  return (
    <Accordion.Item value={slug}>
      <FacetsFacetHeader asChild>
        <FacetsFacetActivate>
          {label} <span>{activeValues}</span>
        </FacetsFacetActivate>
      </FacetsFacetHeader>
      <Accordion.Content>
        {values.map((option: any) => (
          <FacetsOption option={option} key={option.slug} />
        ))}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default FacetsFacet;
