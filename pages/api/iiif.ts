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
const COLLECTION = process.env.collection;
let manifests = [];

/**
 *
 * @returns
 */
export const getAllManifests = (id = COLLECTION, root = false) =>
  fetch(id)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      manifests = manifests.concat(
        json.items.filter((item) => {
          if (item.type === "Manifest") {
            item.label = getLabel(item.label);
            item.slug = slugify(item.label[0], { ...slugifyConfig });
            item.collectionId = id;
            return item;
          }
          if (item.type === "Collection") getAllManifests(item.id);
        })
      );
      console.log(`manifests`, manifests);
      console.log(`manifests.length`, manifests.length);
      return manifests;
    });

/**
 *
 * @param slug
 * @returns
 */
export const getManifestBySlug = (slug) =>
  fetch(COLLECTION)
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
  fetch(COLLECTION)
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
