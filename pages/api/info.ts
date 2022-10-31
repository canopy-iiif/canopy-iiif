import COLLECTIONS from "@/.canopy/collections.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);
  const source = COLLECTIONS.find((collection) => !collection.parent);

  const items = MANIFESTS.map((item) => {
    delete item.slug;
    return item;
  });

  const seeAlso = [
    {
      id: source.id,
      type: "Dataset",
      format: "application/ld+json",
      label: source.label,
    },
  ];

  const info = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/canopy`,
    type: "Collection",
    items: items,
    seeAlso: seeAlso,
  };

  Promise.resolve(res.status(200).json({ ...info }));
}
