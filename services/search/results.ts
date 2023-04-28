import INDEX from "@/.canopy/index.json";
import FACETS from "@/.canopy/facets.json";
import MANIFESTS from "@/.canopy/manifests.json";
import { getDocuments } from "@/services/search/documents";
import { getItem } from "./response";
import _ from "lodash";

const getResults = (origin: any, q: any, activeFacets: any) => {
  const documents = !q ? INDEX.map((doc) => doc.id) : getDocuments(q);

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
      return getItem(item, origin);
    });
};

export { getResults };
