import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import { search } from "libsearch";

const getTopCollection = (manifests, pages) => {
  /**
   * return return collection of manifests
   */
  return;
};

const getPageCollection = (manifests, pages, page) => {
  /**
   * return collection of collections
   */
  return;
};

const getPages = (manifests, size) => {
  const count = Math.ceil(manifests.length / size);
  const pages: any = Array.from(Array(count).keys());

  return pages.map((index) => {
    const start = size * index;
    const end = size * (index + 1);
    const items = manifests.slice(start, end).map((item) => item.id);
    return { page: index, items: items };
  });
};

const getManifests = (origin, q) => {
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
  const { query, url } = req;
  const { q, page } = query;

  const manifests = getManifests(origin, q);
  const pages = getPages(manifests, 10);
  const items = page
    ? getPageCollection(manifests, pages, page)
    : getTopCollection(manifests, pages);

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}${url}`,
    type: "Collection",
    label: { none: [q] },
    items: [...manifests],
  };

  res.status(200).json({ ...result });
}
