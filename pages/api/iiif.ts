import { concat } from "@apollo/client";
import { useState } from "react";
import slugify from "slugify";
import { getLabel } from "../../hooks/getLabel";

const slugifyConfig = {
  lower: true,
  strict: true,
  trim: true,
};

/**
 *
 */
const ROOT_COLLECTION = process.env.collection;

const buildCollection = (json, depth) => {
  const { id } = json;
  const label = getLabel(json.label);
  const slug = slugify(label[0], { ...slugifyConfig });
  const children = getCollectionItems(json.items, id);
  return {
    id,
    label,
    slug,
    depth,
    manifests: children.manifests,
    collections: children.collections,
    items: children.items,
  };
};

const getCollectionItems = (items, parent) => {
  let manifests = 0;
  let collections = 0;
  return {
    items: items.map((item) => {
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
 * @returns
 */
export const getCollection = (depth, id = ROOT_COLLECTION) =>
  fetch(id)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return buildCollection(json, depth);
      const parent = buildCollection(json, depth);

      if (parent.collections > 0) {
        parent.items.forEach((child) => {
          // if (child.type === "Collection")
          // tree = tree.concat([getCollection(tree, child.id, depth + 1)]);
        });
      }

      return tree;
    });

/**
 *
 * @returns
 */
export const getAllManifests = (id = ROOT_COLLECTION) =>
  fetch(id)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.items.filter((item) => {
        if (item.type === "Manifest") {
          item.label = getLabel(item.label);
          item.slug = slugify(item.label[0], { ...slugifyConfig });
          item.collectionId = id;
          return item;
        }
      });
    });

// export const getNestedCollections = (id) =>
//   fetch(id)
//     .then((response) => {
//       return response.json();
//     })
//     .then((json) => {
//       manifests = manifests.concat(
//         json.items.filter((item) => {
//           if (item.type === "Manifest") {
//             item.label = getLabel(item.label);
//             item.slug = slugify(item.label[0], { ...slugifyConfig });
//             item.collectionId = id;
//             return item;
//           }
//           if (item.type === "Collection") getNestedCollections(item.id);
//         })
//       );
//       return manifests;
//     });

/**
 *
 * @param slug
 * @returns
 */
export const getManifestBySlug = (slug) =>
  fetch(ROOT_COLLECTION)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
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
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json.items.filter((item, index) => {
        if (item.type === "Manifest" && index) {
          item.label = getLabel(item.label);
          item.slug = slugify(item.label[0], { ...slugifyConfig });
          return item;
        }
      });
    });

/**
 *
 * @param id
 * @returns
 */
export const getManifestById = (id) =>
  fetch(id)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json;
    });
