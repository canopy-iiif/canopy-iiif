import FACETS from "@/.canopy/facets.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import { sortItems } from "@/hooks/sortItems";
import type { NextApiRequest, NextApiResponse } from "next";
import { Collection } from "@iiif/presentation-3";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Collection>
) {
  const { origin } = absoluteUrl(request);
  const { query, url } = request;
  const { label, value } = query;

  const baseUrl = origin + url;

  const facet: any = FACETS.find((facet) => facet.slug === label);
  const values: any = facet.values.find((entry: any) => entry.slug === value);
  const items: any = values.docs.map((doc: any) => {
    const item: any = MANIFESTS.find((manifest) => manifest.index === doc);
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
      none: [values.value],
    },
    items: sortItems(items, query.sort as any),
    partOf: [{ id: `${origin}/api/facet/${label}`, type: "Collection" }],
    summary: {
      none: [facet.label],
    },
    homepage: [
      {
        id: `${origin}/search?${query.label}=${query.value}`,
        type: "Text",
        // @ts-ignore
        label: facet.label,
      },
    ],
  });
}
