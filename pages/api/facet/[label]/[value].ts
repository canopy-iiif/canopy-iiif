import FACETS from "@/.canopy/facets.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";

export default function handler(request, response) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { label, value } = query;

  const baseUrl = origin + url;

  const facet = FACETS.find((facet) => facet.slug === label);
  const values = facet.values.find((entry) => entry.slug === value);
  const items = values.docs.map((doc) => {
    const item = MANIFESTS.find((manifest) => manifest.index === doc);
    return {
      id: item.id,
      type: "Manifest",
      label: item.label,
      thumbnail: item.thumbnail,
      homepage: [
        {
          id: `${origin}/works/${item.slug}`,
          type: "Text",
          label: item.label,
        },
      ],
    };
  });

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
    type: "Collection",
    label: {
      none: [`${values.value} (${facet.label})`],
    },
    items: items,
    partOf: [{ id: `${origin}/api/facet/${label}`, type: "Collection" }],
  });
}
