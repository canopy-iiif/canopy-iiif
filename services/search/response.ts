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

const getItem = (item, origin) => {
  return {
    id: item.id,
    type: "Manifest",
    label: item.label,
    thumbnail: item.thumbnail,
    homepage: [
      {
        id: `${origin}/works/${item.slug}`,
        type: "Text",
        label: item.label,
      },
    ],
  };
};

export { getPageCollection, getPages, getPartOf, getItem, getTopCollection };
