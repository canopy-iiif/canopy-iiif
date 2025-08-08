import {
  getPageCollection,
  getPages,
  getPartOf,
  getTopCollection,
} from "@lib/search/response";

import { URLSearchParams } from "url";
import { getActiveFacets } from "@lib/facet/facets";
import { getResults } from "@lib/search/results";

const searchRequest = ({
  params,
  baseUrl,
  flexSearch,
}: {
  params: URLSearchParams;
  baseUrl: string;
  flexSearch: any;
}) => {
  const activeFacets = getActiveFacets(params);
  const q = params?.get("q");
  const page = params?.get("page");
  const searchUrl = new URL(`${baseUrl}/search`);
  searchUrl.search = params?.toString();

  const results = getResults(baseUrl, q, activeFacets, flexSearch);
  const pages = getPages(results, 10);
  const items = page
    ? getPageCollection(results, pages, parseInt(page as string))
    : getTopCollection(pages, searchUrl);

  return {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: searchUrl.toString(),
    type: "Collection",

    // @ts-ignore
    label: { none: [q ? q : `All Results`] },
    items: items,
    ...(page
      ? {
          summary: {
            none: [`${results.length}}`],
          },
        }
      : { summary: { none: [`${results.length}`] } }),
    ...(page && { partOf: getPartOf(searchUrl) }),
  };
};

export { searchRequest };
