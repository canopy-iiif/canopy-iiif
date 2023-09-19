const MANIFESTS = require("@/.canopy/manifests.json");
const axios = require("axios");
const { getPresentation3 } = require("../context");
const { getHomepageBySlug } = require("../homepage");
const { getRepresentativeImage } = require("../image");

async function createCollection(iiifResources, label = "") {
  const items = await getCollectionItems(iiifResources);
  const complete_items = await Promise.all(
    items.map(async (resource) => await createItem(resource))
  );
  return {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `http://localhost/featured`,
    type: "Collection",
    label: { none: [label] },
    items: complete_items,
  };
}

async function createItem(resource) {
  const item = MANIFESTS.find((item) => item.id === resource.id);
  if (item?.slug) {
    const { best } = await getRepresentativeImage(resource, 2000);
    return {
      id: resource.id,
      label: resource.label,
      thumbnail: best
        ? [
            {
              id: best.id,
              type: "Image",
              format: "image/jpeg",
              width: best.width,
              height: best.height,
            },
          ]
        : [],
      homepage: getHomepageBySlug(item.slug, resource.label),
    };
  } else {
    return {
      id: resource.id,
      label: resource.label,
      thumbnail: [],
      homepage: [],
    };
  }
}

function getCollectionItems(iiifResources) {
  return iiifResources
    ? Promise.all(
        iiifResources.map((id) =>
          axios.get(id).then((json) => getPresentation3(json.data))
        )
      )
    : [];
}

module.exports = { createCollection };
