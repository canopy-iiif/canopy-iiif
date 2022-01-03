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
  const context = json["@context"];

  let id = null;
  let label = null;
  let slug = null;
  let children = null;

  /**
   * based on context, do a switch
   */
  console.log(context);

  switch (context) {
    case "http://iiif.io/api/presentation/2/context.json":
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
    case "http://iiif.io/api/presentation/3/context.json":
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
  return {
    items: json.collections.map((item) => {
      item.id = item["@id"];
      item.type = item["@type"].replace("sc:", "");
      if (item.type === "sc:Manifest") manifests++;
      if (item.type === "sc:Collection") collections++;
      item.label = getLabel(item.label);
      item.parent = parent;
      delete item["@id"];
      delete item["@type"];
      console.log(item);
      return item;
    }),
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
    .then((response) => response.json())
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
