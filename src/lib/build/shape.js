const { getLabel } = require("../iiif/label");
const { getSlug } = require("./slug");

exports.getCanopyCollection = (json, depth = 0, parent = null) => {
  if (!json) return null;

  const children = getCollectionItems(json);

  return {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: json.id,
    type: "Collection",
    label: json.label,
    slug: getSlug(getLabel(json.label)[0]),
    depth: depth,
    parent: parent,
    manifests: children.manifests,
    collections: children.collections,
    items: children.items,
  };
};

const getCollectionItems = (json) => {
  let manifests = 0;
  let collections = 0;

  return {
    items: json.items.map((item) => {
      if (item.type === "Manifest") manifests++;
      if (item.type === "Collection") collections++;
      return item;
    }),
    manifests,
    collections,
  };
};
