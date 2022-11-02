const axios = require("axios");
const { getPresentation3 } = require("../context");
const { getHomepageBySlug } = require("../homepage");

async function createCollection(iiifResources, label = "") {
  const items = await getCollectionItems(iiifResources);

  return {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `http://localhost/featured`,
    type: "Collection",
    label: { none: [label] },
    items: items.map((resource) => createItem(resource)),
  };
}

function createItem(resource) {
  return {
    id: resource.id,
    label: resource.label,
    thumbnail: resource.thumbnail,
    homepage: getHomepageBySlug("slug"),
  };
}

function getCollectionItems(iiifResources) {
  return Promise.all(
    iiifResources.map((id) =>
      axios.get(id).then((json) => getPresentation3(json.data))
    )
  );
}

module.exports = { createCollection };
