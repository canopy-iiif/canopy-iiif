import FACETS from "@/.canopy/facets.json";
import absoluteUrl from "next-absolute-url";
import type { NextApiRequest, NextApiResponse } from "next";
import { Collection } from "@iiif/presentation-3";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Collection>
) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { label } = query;

  const baseUrl = origin + url;

  const facet: any = FACETS.find((entry) => entry.slug === label);
  const items: any = facet.values.map((value: any) => {
    return {
      id: `${baseUrl}/${value.slug}`,
      type: "Collection",
      label: { none: [value.value] },
      summary: { none: [`${value.doc_count} Items`] },
      homepage: [
        {
          id: `${origin}/search?${label}=${value.slug}`,
          type: "Text",
          label: { none: "" },
        },
      ],
    };
  });

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
    type: "Collection",
    label: { none: [facet.label] },
    summary: { none: [`${facet.values.length}`] },
    items: items,
  });
}
