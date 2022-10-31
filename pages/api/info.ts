import CANOPY_COLLECTIONS from "@/.canopy/collections.json";
import CANOPY_MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);
  const source = CANOPY_COLLECTIONS.find((collection) => !collection.parent);

  const items = CANOPY_MANIFESTS.map((item) => {
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
