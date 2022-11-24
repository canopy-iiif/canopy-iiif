import absoluteUrl from "next-absolute-url";
import {
  getPageCollection,
  getPages,
  getPartOf,
  getTopCollection,
} from "@/services/search/response";
import { getResults } from "@/services/search/results";
import { getActiveFacets } from "@/services/facet/facets";

export default function handler(request, response) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { q, page } = query;

  const baseUrl = origin + url;
  const activeFacets = getActiveFacets(query);
  const results = getResults(origin, q, activeFacets);
  const pages = getPages(results, 10);
  const items = page
    ? getPageCollection(results, pages, parseInt(page))
    : getTopCollection(pages, baseUrl);

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
    type: "Collection",
    label: { none: [q ? q : `All Results`] },
    items: items,
    ...(page
      ? { summary: { none: [`${results.length} Results`] } }
      : { summary: { none: [`${results.length} Results`] } }),
    ...(page && { partOf: getPartOf(baseUrl) }),
  });
}
