import { concat, gql } from "@apollo/client";
import { useState } from "react";
import slugify from "slugify";
import { getLabel } from "../../hooks/getLabel";
import { getGraphQL } from "./graphql";

const slugifyConfig = {
  lower: true,
  strict: true,
  trim: true,
};

/**
 *
 */
const ROOT_COLLECTION = process.env.collection;

/**
 *
 * @param json
 * @param depth
 * @param parent
 * @returns
 */
const buildCollection = (json, depth, parent = null) => {
  const { id } = json;
  const label = getLabel(json.label);
  const slug = slugify(label[0], { ...slugifyConfig });
  const children = buildCollectionItems(json.items, id);
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
const buildCollectionItems = (items, parent) => {
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
 * @param depth
 * @param id
 * @param parent
 * @returns
 */
export const getCollection = (depth, id = ROOT_COLLECTION, parent = null) =>
  fetch(id)
    .then((response) => response.json())
    .then((json) => buildCollection(json, depth, parent));

export const getCollectionItems = () => {
  return [{ id: "garbage" }];
};

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
