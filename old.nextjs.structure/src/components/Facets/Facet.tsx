import {
  FacetsFacetActivate,
  FacetsFacetContent,
  FacetsFacetHeader,
  FacetsFacetStyled,
} from "./Facet.styled";
import React, { useEffect, useState } from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import FacetsOption from "./Option";
import { LocaleString } from "@hooks/useLocale";
import { useFacetsState } from "@context/facets";

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

  /**
   *
   */
  const params = facetsActive?.toString();
  const defaultValue = {
    slug: "",
    value: LocaleString("searchFilterAny"),
  };

  const [active, setActive] = useState({
    slug: "",
    value: LocaleString("searchFilterAny"),
  });

  useEffect(() => {
    const activeSlug = facetsActive?.get(slug);
    setActive(
      activeSlug
        ? {
            slug: activeSlug,
            value: values.find((entry: any) => entry.slug === activeSlug)
              ?.value,
          }
        : defaultValue
    );
  }, [facetsActive, params, slug, values]);

  return (
    <FacetsFacetStyled value={slug}>
      <FacetsFacetHeader asChild>
        <FacetsFacetActivate>
          <span>
            {label} <ChevronDownIcon />
          </span>
          <span>{active.value}</span>
        </FacetsFacetActivate>
      </FacetsFacetHeader>
      <FacetsFacetContent>
        {values.map((option: any, index: number) => {
          const identifier = `${slug}-${option.slug}-${index}`;
          return (
            <FacetsOption
              active={active.slug === option.slug}
              facet={slug}
              key={identifier}
              identifier={identifier}
              option={option}
            />
          );
        })}
      </FacetsFacetContent>
    </FacetsFacetStyled>
  );
};

export default FacetsFacet;
