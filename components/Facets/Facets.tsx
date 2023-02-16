import FACETS from "@/.canopy/facets";
import FacetSelect from "./Select/Select";
import { FacetsStyled } from "./Facets.styled";
import React from "react";

const Facets: React.FC = () => {
  return (
    <FacetsStyled>
      {FACETS.map((facet: any) => (
        <FacetSelect facet={facet} key={facet.slug} />
      ))}
    </FacetsStyled>
  );
};

export default Facets;
