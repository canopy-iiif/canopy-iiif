import FACETS from "@/.canopy/facets";

export const getActiveFacets = (query) => {
  return FACETS.map((facet) => facet.slug)
    .filter((facet) => query[facet])
    .map((facet) => {
      const value = query[facet];
      return {
        label: facet,
        value: value,
      };
    });
};
