import FACETS from "@.canopy/facets.json";

export const getActiveFacets = (searchParams: URLSearchParams) => {
  return FACETS.map((facet: any) => facet.slug)
    .filter((key: string) => searchParams.has(key))
    .map((key: string) => {
      const value = searchParams.get(key);
      return {
        label: key,
        value: value,
      };
    });
};
