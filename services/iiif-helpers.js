const slugify = require("slugify");

/**
 *
 */

exports.buildCanopyCollection = (json, depth, parent = null) => {
  if (!json) return null;

  /**
   * defensively determine @context
   */
  let context = json["@context"];
  if (!context) context = "http://iiif.io/api/presentation/3/context.json";

  if (Array.isArray(context)) context = context[0];
  context = context.replace("https://", "");
  context = context.replace("http://", "");

  /**
   * set props
   */
  let id = null;
  let label = null;
  let slug = null;
  let children = null;

  /**
   * based on @context, parse collections
   */
  switch (context) {
    case "iiif.io/api/presentation/2/context.json":
      id = json["@id"];
      label = getLabel(json.label);
      slug = slugify(label[0], process.env.slugify);
      children = buildCollectionItems2(json, id);
      return {
        id,
        label,
        slug,
        depth,
        parent,
        manifests: children.manifests,
        collections: children.collections,
        items: children.items,
      };
    case "iiif.io/api/presentation/3/context.json":
      id = json.id;
      label = getLabel(json.label);
      slug = slugify(label[0], process.env.slugify);
      children = buildCollectionItems3(json, id);
      return {
        id,
        label,
        slug,
        depth,
        parent,
        manifests: children.manifests,
        collections: children.collections,
        items: children.items,
      };
  }

  return {
    id,
    label,
    slug,
    depth,
    parent,
    manifests: children.manifests,
    collections: children.collections,
    items: children.items,
  };
};

const buildCollectionItems2 = (json, parent) => {
  let manifests = 0;
  let collections = 0;
  let items = [];

  if (json.collections)
    items = items.concat(
      json.collections.map((item) => {
        item.id = item["@id"];
        delete item["@id"];

        item.type = item["@type"].replace("sc:", "");
        delete item["@type"];

        if (item.type === "Manifest") manifests++;
        if (item.type === "Collection") collections++;
        item.label = getLabel(item.label);
        item.parent = parent;
        return item;
      })
    );

  if (json.manifests)
    items = items.concat(
      json.manifests.map((item) => {
        item.id = item["@id"];
        delete item["@id"];

        item.type = item["@type"].replace("sc:", "");
        delete item["@type"];

        if (item.type === "Manifest") manifests++;
        if (item.type === "Collection") collections++;
        item.label = getLabel(item.label);
        item.parent = parent;
        return item;
      })
    );

  return {
    items: items,
    manifests,
    collections,
  };
};

const buildCollectionItems3 = (json, parent) => {
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

const getLabel = (label, language = "none") => {
  /*
   * If no label exists, return a hardcoded string.
   */
  if (!label) return ["Untitled"];

  if (typeof label === "string") return [label];

  /*
   * If InternationalString code does not exist on label, then
   * return what may be there, ex: label.none[0] OR label.fr[0]
   */
  if (!label[language]) {
    const codes = Object.getOwnPropertyNames(label);
    if (codes.length > 0) return label[codes[0]];
  }

  /*
   * Return label value for InternationalString code `en`
   */
  return label[language];
};

exports.getValues = (values, language = "none") => {
  /*
   * If InternationalString code does not exist on label, then
   * return what may be there, ex: label.none[0] OR label.fr[0]
   */
  if (!values[language]) {
    const codes = Object.getOwnPropertyNames(values);
    if (codes.length > 0) return values[codes[0]];
  }

  /*
   * Return label value for InternationalString code `en`
   */
  return values[language];
};
