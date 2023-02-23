import COLLECTIONS from "@/.canopy/collections.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import type { NextApiRequest, NextApiResponse } from "next";
import { Collection } from "@iiif/presentation-3";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Collection>
) {
  const { origin } = absoluteUrl(request);
  const source: any = COLLECTIONS.find((collection) => !collection.parent);

  const items = MANIFESTS.map((item: any) => {
    delete item.slug;
    delete item?.index;
    return item;
  });

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json({
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/canopy`,
    type: "Collection",
    label: source.label,
    items: items,
    seeAlso: [
      {
        id: source.id,
        // @ts-ignore
        type: "Collection",
        format: "application/ld+json",
        label: source.label,
      },
    ],
  });
}
