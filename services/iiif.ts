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
