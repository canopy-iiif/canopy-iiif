import FACETS from "@/.canopy/facets.json";
import absoluteUrl from "next-absolute-url";

export default function handler(request, response) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { label } = query;

  const baseUrl = origin + url;

  const facet = FACETS.find((entry) => entry.slug === label);
  const items = facet.values.map((value) => {
    return {
      id: `${baseUrl}/${value.value}`,
      type: "Collection",
      label: { none: [value.value] },
      summary: { none: [`${value.doc_count} Items`] },
    };
  });

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
    type: "Collection",
    label: { none: [facet.label] },
    summary: { none: [`${facet.values.length} Terms`] },
    items: items,
  });
}
