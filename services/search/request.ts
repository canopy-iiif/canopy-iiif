import { URLSearchParams } from "url";
import { getActiveFacets } from "@/services/facet/facets";
import { getResults } from "@/services/search/results";
import {
  getPageCollection,
  getPages,
  getPartOf,
  getTopCollection,
} from "@/services/search/response";

const searchRequest = ({
  params,
  url,
  flexSearch,
}: {
  params: URLSearchParams;
  url: string;
  flexSearch: any;
}) => {
  const activeFacets = getActiveFacets(params);
  const q = params?.get("q");
  const page = params?.get("page");
  const baseUrl = new URL(`${url}/search`);
  baseUrl.search = params?.toString();

  const results = getResults(url, q, activeFacets, flexSearch);
  const pages = getPages(results, 10);
  const items = page
    ? getPageCollection(results, pages, parseInt(page as string))
    : getTopCollection(pages, baseUrl);

  return {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl.toString(),
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
    ...(page && { partOf: getPartOf(baseUrl) }),
  };
};

export { searchRequest };
