import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import { Document } from "flexsearch";

function getResults(query) {
  const index = new Document({
    optimize: true,
    resolution: 9,
    document: {
      id: "id",
      index: [
        {
          field: "label",
          tokenize: "forward",
          optimize: true,
          resolution: 9,
        },
      ],
    },
  });

  INDEX.forEach((doc) => index.add(doc));

  return index.search(query, { index: ["label"] });
}

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);
  const { query } = req;

  const results = getResults(query?.q)[0];

  const items = results?.result
    ? MANIFESTS.filter((item) => {
        return results.result.includes(item.id);
      }).map((item) => {
        return {
          id: item.id,
          label: item.label,
          homepage: [
            {
              id: `${origin}/works/${item.slug}`,
              type: "Text",
              label: item.label,
            },
          ],
        };
      })
    : [];

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/search`,
    type: "Collection",
    label: { none: [`Search results for: ${query?.q}`] },
    items: [...items],
  };

  Promise.resolve(res.status(200).json({ ...result }));
}
