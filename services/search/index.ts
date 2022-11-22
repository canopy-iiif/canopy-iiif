import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import { getDocuments } from "@/services/search/documents";
import { searchResult } from "@/services/search/result";

const getResults = (origin, q) => {
  const filtered = !q
    ? INDEX.map((manifest) => manifest.id)
    : getDocuments(q, `${origin}/api`);

  return filtered
    ? MANIFESTS.filter((item) => filtered.includes(item.id)).map((item) =>
        searchResult(item, origin)
      )
    : [];
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

const getPartOf = (baseUrl) => {
  const url = new URL(baseUrl);
  url.searchParams.delete("page");
  return [
    {
      id: url,
      type: "Collection",
    },
  ];
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

export { getPageCollection, getPages, getPartOf, getTopCollection, getResults };
