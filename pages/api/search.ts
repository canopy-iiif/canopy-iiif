import absoluteUrl from "next-absolute-url";
import {
  getManifests,
  getPageCollection,
  getPages,
  getPartOf,
  getTopCollection,
} from "@/services/search";

export default function handler(request, response) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { q, page } = query;

  const baseUrl = origin + url;
  const manifests = getManifests(origin, q);
  const pages = getPages(manifests, 10);
  const items = page
    ? getPageCollection(manifests, pages, parseInt(page))
    : getTopCollection(pages, baseUrl);

  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
    type: "Collection",
    label: { none: [q ? q : `All Results`] },
    items: items,
    ...(page
      ? { summary: { none: [`${manifests.length} Results`] } }
      : { summary: { none: [`${manifests.length} Results`] } }),
    ...(page && { partOf: getPartOf(baseUrl) }),
  });
}
