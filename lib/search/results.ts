import FACETS from "@canopy/facets.json";
import INDEX from "@canopy/index.json";
import MANIFESTS from "@canopy/manifests.json";
import _ from "lodash";
import { getDocuments } from "./documents";
import { getItem } from "./response";

// @ts-nocheck

const getResults = (
  baseUrl: any,
  q: any,
  activeFacets: any,
  flexSearch: any
) => {
  const documents = !q
    ? INDEX.map((doc) => doc.id)
    : getDocuments(q, flexSearch);

  const applyFacets = (activeFacets: any) => {
    const docs = activeFacets.map((facet: any) => {
      // @ts-ignore
      const value = FACETS.find(
        (entry) => entry.slug === facet.label
      ).values.find((entry) => entry.slug === facet.value);
      return value?.docs;
    });

    return MANIFESTS.filter((item) =>
      _.intersection(...docs).includes(item.index)
    );
  };

  const items =
    activeFacets.length === 0 ? MANIFESTS : applyFacets(activeFacets);

  // @ts-ignore
  return documents
    .filter((doc: number) => items.some((item) => item.index === doc))
    .map((doc: number) => {
      const item = items.find((item) => item.index === doc);
      return getItem(item, baseUrl);
    });
};

export { getResults };
