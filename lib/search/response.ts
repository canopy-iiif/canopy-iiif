const getPageCollection = (manifests: any, pages: any, page: any) => {
  const target = pages.find((item: any) => item.page === page);
  return target.items.map((id: any) =>
    manifests.find((item: any) => item.id === id)
  );
};

const getPages = (manifests: any, size: any) => {
  const count = Math.ceil(manifests.length / size);
  const pages = Array.from(Array(count).keys());

  return pages.map((index) => {
    const start = size * index;
    const end = size * (index + 1);
    const items = manifests.slice(start, end).map((item: any) => item.id);
    return { page: index + 1, items: items };
  });
};

const getPartOf = (baseUrl: any) => {
  const url = new URL(baseUrl);
  url.searchParams.delete("page");
  return [
    {
      id: url,
      type: "Collection",
    },
  ];
};

const getTopCollection = (pages: any, baseUrl: any) => {
  return pages.map((item: any) => {
    const url = new URL(baseUrl);
    url.searchParams.append("page", item.page);
    return {
      id: url.toString(),
      type: "Collection",
      label: { none: [`Page ${item.page} (${item.items.length} Total)`] },
    };
  });
};

const getItem = (item: any, baseUrl: any) => {
  return {
    id: item.id,
    type: "Manifest",
    label: item.label,
    thumbnail: item.thumbnail,
    homepage: [
      {
        id: `${baseUrl}/works/${item.slug}`,
        type: "Text",
        label: item.label,
      },
    ],
  };
};

export { getPageCollection, getPages, getPartOf, getItem, getTopCollection };
