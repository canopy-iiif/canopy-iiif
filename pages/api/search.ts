import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);

  const items = MANIFESTS.map((item) => {
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
  });

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/search`,
    type: "Collection",
    items: [...items],
  };

  Promise.resolve(res.status(200).json({ ...result }));
}
