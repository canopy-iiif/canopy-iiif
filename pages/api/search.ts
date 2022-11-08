import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import { search } from "libsearch";

const getItems = (origin, q) => {
  const filtered = !q ? INDEX.map((manifest) => manifest.id) : getResults(q);

  return filtered
    ? MANIFESTS.filter((item) => filtered.includes(item.id)).map((item) =>
        searchResult(item, origin)
      )
    : [];
};

const getResults = (q) =>
  search(INDEX, q, (manifest) => manifest.label).map((result) => result.id);

const searchResult = (item, origin) => {
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
};

export default function handler(req, res) {
  const { origin } = absoluteUrl(req);
  const { query } = req;
  const items = getItems(origin, query.q);

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/search`,
    type: "Collection",
    label: { none: [query.q] },
    items: [...items],
  };

  res.status(200).json({ ...result });
}
