const slugify = require("slugify");
const { getPresentation3 } = require("../iiif/context");
const { getLabel } = require("../iiif/label");

exports.getCanopyCollection = (json, depth, parent = null) => {
  if (!json) return null;
  const resource = getPresentation3(json);
  const children = getCollectionItems(resource);

  return {
    id: json.id,
    label: json.label,
    slug: slugify(getLabel(json.label)[0], process.env.slugify),
    depth: null,
    parent: null,
    manifests: children.manifests,
    collections: children.collections,
    items: children.items,
  };
};

const getCollectionItems = (json, parent) => {
  let manifests = 0;
  let collections = 0;

  return {
    items: json.items.map((item) => {
      /**
       * create blank slate item and properties defined in CollectionItem schema
       */
      if (item.type === "Manifest") manifests++;
      if (item.type === "Collection") collections++;
      item.label = getLabel(item.label);
      item.parent = parent;

      delete item.homepage;
      delete item.thumbnail;

      return item;
    }),
    manifests,
    collections,
  };
};
