import slugify from "slugify";
import { getLabel } from "../../hooks/getLabel";

const slugifyConfig = {
  lower: true,
  strict: true,
  trim: true,
};

export const getRootCollection = (rootCollection) =>
  fetch(rootCollection)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json.items.filter((item) => {
        if (item.type === "Manifest") {
          item.label = getLabel(item.label);
          item.slug = slugify(item.label[0], { ...slugifyConfig });
          return item;
        }
      });
    });

export const getManifestBySlug = (rootCollection, slug) =>
  fetch(rootCollection)
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

export const getManifestById = (id) =>
  fetch(id)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json;
    });
