import { concat, gql } from "@apollo/client";
import { useState } from "react";
import slugify from "slugify";
import { getLabel } from "@/hooks/getLabel";
import { getGraphQL } from "@/pages/api/graphql";

const slugifyConfig = {
  lower: true,
  strict: true,
  trim: true,
};

/**
 *
 */
const ROOT_COLLECTION = process.env.collection;

export const getCollectionData = (depth = 0) => {
  let tree = [];
  const root = Promise.resolve(getCollection(depth));
  return root.then((collection) => {
    tree = tree.concat([collection]);
    if (collection)
      if (collection.collections > 0) {
        collection.items.forEach((child) => {
          if (child.type === "Collection") {
            const item = Promise.resolve(
              getCollection(collection.depth + 1, child.id, collection.id)
            );
            tree = tree.concat([item]);
          }
        });
      }
    return tree;
  });
};

/**
 *
 * @param json
 * @param depth
 * @param parent
 * @returns
 */
const buildCollection = (json, depth, parent = null) => {
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
      slug = slugify(label[0], { ...slugifyConfig });
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
      slug = slugify(label[0], { ...slugifyConfig });
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

  console.log(children);

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

/**
 *
 * @param items
 * @param parent
 * @returns
 */
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
      if (item.type === "Manifest") manifests++;
      if (item.type === "Collection") collections++;
      item.label = getLabel(item.label);
      item.parent = parent;
      return item;
    }),
    manifests,
    collections,
  };
};

/**
 *
 * @param depth
 * @param id
 * @param parent
 * @returns
 */
export const getCollection = (depth, id = ROOT_COLLECTION, parent = null) =>
  fetch(id)
    .then((response) => response.text())
    .then((text) => {
      try {
        return JSON.parse(text);
      } catch (err) {
        console.log(err);
      }
    })
    .then((json) => buildCollection(json, depth, parent));

/**
 *
 * @param id
 * @returns
 */
export const getAllManifests = (id = ROOT_COLLECTION) =>
  fetch(id)
    .then((response) => response.json())
    .then((json) =>
      json.items.filter((item) => {
        if (item.type === "Manifest") {
          item.label = getLabel(item.label);
          item.slug = slugify(item.label[0], { ...slugifyConfig });
          item.collectionId = id;
          return item;
        }
      })
    );

/**
 *
 * @param slug
 * @returns
 */
export const getManifestBySlug = (slug) =>
  fetch(ROOT_COLLECTION)
    .then((response) => response.json())
    .then((json) => {
      const filtered = json.items.filter((item) => {
        item.label = getLabel(item.label);
        if (slugify(item.label[0], { ...slugifyConfig }) === slug) {
          return item;
        }
      });
      if (filtered.length > 0) return filtered[0];
    });

/**
 *
 * @param limit
 * @param offset
 * @returns
 */
export const getManifests = (limit, offset) =>
  fetch(ROOT_COLLECTION)
    .then((response) => response.json())
    .then((json) =>
      json.items.filter((item, index) => {
        if (item.type === "Manifest" && index) {
          item.label = getLabel(item.label);
          item.slug = slugify(item.label[0], { ...slugifyConfig });
          return item;
        }
      })
    );

/**
 *
 * @param id
 * @returns
 */
export const getManifestById = (id) =>
  fetch(id)
    .then((response) => response.json())
    .then((json) => json);
