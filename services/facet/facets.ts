import FACETS from "@/.canopy/facets";

export const getActiveFacets = (query: any) => {
  return FACETS.map((facet: any) => facet.slug)
    .filter((facet: any) => query[facet])
    .map((facet: any) => {
      const value = query[facet];
      return {
        label: facet,
        value: value,
      };
    });
};
