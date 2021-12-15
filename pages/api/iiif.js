import slugify from "slugify";

export const getRootCollection = () =>
  fetch(
    "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json.items.map((item) => {
        item.slug = slugify(item.label, { lower: true });
        return item;
      });
    });

export const getManifestBySlug = (slug) =>
  fetch(
    "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const filtered = json.items.filter((item) => {
        if (slugify(item.label, { lower: true }) === slug) {
          return item;
        }
      });
      if (filtered.length > 0) return filtered[0];
    });
