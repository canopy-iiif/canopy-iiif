import slugify from "slugify";

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
      return json.items.map((item) => {
        item.slug = slugify(item.label, { ...slugifyConfig });
        return item;
      });
    });

export const getManifestBySlug = (rootCollection, slug) =>
  fetch(rootCollection)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const filtered = json.items.filter((item) => {
        if (slugify(item.label, { ...slugifyConfig }) === slug) {
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
