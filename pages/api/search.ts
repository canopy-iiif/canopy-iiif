import CANOPY_MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);

  const items = CANOPY_MANIFESTS.map((manifest) => {
    manifest.homepage = [
      {
        id: `${origin}/works/${manifest.slug}`,
        type: "Text",
        label: manifest.label,
      },
    ];
    delete manifest.slug;
    return manifest;
  });

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/search`,
    type: "Collection",
    items: [...items],
  };

  Promise.resolve(res.status(200).json({ ...result }));
}
