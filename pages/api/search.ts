import absoluteUrl from "next-absolute-url";
import {
  getPageCollection,
  getPages,
  getPartOf,
  getTopCollection,
} from "@/services/search/response";
import { getResults } from "@/services/search/results";
import { getActiveFacets } from "@/services/facet/facets";
import type { NextApiRequest, NextApiResponse } from "next";
import { Collection } from "@iiif/presentation-3";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Collection>
) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { q, page } = query;

  const baseUrl = origin + url;
  const { searchParams } = new URL(baseUrl);

  const activeFacets = getActiveFacets(searchParams);
  const results = getResults(origin, q, activeFacets);
  const pages = getPages(results, 10);
  const items = page
    ? getPageCollection(results, pages, parseInt(page as string))
    : getTopCollection(pages, baseUrl);

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
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
  });
}
