const buildCollection = (data) => {
  const { id, label, summary, homepage, items } = data;

  const collectionItems = items.map(({ id, label, homepage, thumbnail, summary }) =>
    buildItem("Manifest", id, label, homepage, thumbnail, summary)
  );

  return {
    "@context": "http://iiif.io/api/presentation/3/context.json",
    id,
    type: "Collection",
    label: {
      none: [label],
    },
    summary: {
      none: [summary],
    },
    homepage: [buildHomepage(homepage, label)],
    items: collectionItems,
  };
};

const buildHomepage = (id, label) => ({
  id,
  type: "Text",
  label: { none: [label] },
  format: "text/html",
});

const buildThumbnail = (id) => ({
  id: id,
  type: "Image",
});

const buildItem = (type, id, label, homepage, thumbnail, summary) => ({
  id,
  type,
  label: {
    none: [label],
  },
  homepage: [buildHomepage(homepage, label)],
  thumbnail: [buildThumbnail(thumbnail)],
  summary: {none: [summary]},
});

export { buildCollection };
