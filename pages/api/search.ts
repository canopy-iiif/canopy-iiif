import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import { search } from "libsearch";

const getPartOf = (baseUrl) => {
  const url = new URL(baseUrl);
  url.searchParams.delete("page");
  return {
    id: url,
    type: "Collection",
  };
};

const getTopCollection = (pages, baseUrl) => {
  return pages.map((item) => {
    const url = new URL(baseUrl);
    url.searchParams.append("page", item.page);
    return {
      id: url.toString(),
      type: "Collection",
      label: { none: [`Page ${item.page} (${item.items.length} Total)`] },
    };
  });
};

const getPageCollection = (manifests, pages, page) => {
  const target = pages.find((item) => item.page === page);
  return target.items.map((id) => manifests.find((item) => item.id === id));
};

const getPages = (manifests, size) => {
  const count = Math.ceil(manifests.length / size);
  const pages = Array.from(Array(count).keys());

  return pages.map((index) => {
    const start = size * index;
    const end = size * (index + 1);
    const items = manifests.slice(start, end).map((item) => item.id);
    return { page: index + 1, items: items };
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

  const baseUrl = origin + url;
  const manifests = getManifests(origin, q);
  const pages = getPages(manifests, 10);
  const items = page
    ? getPageCollection(manifests, pages, parseInt(page))
    : getTopCollection(pages, baseUrl);

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: baseUrl,
    type: "Collection",
    label: { none: [q ? q : `All Results`] },
    items: [...items],
    ...(page && { partOf: getPartOf(baseUrl) }),
  };

  res.status(200).json({ ...result });
}
