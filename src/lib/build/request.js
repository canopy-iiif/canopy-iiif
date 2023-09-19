const axios = require("axios");
const { chunks } = require("./chunks");
const { getPresentation3 } = require("../iiif/context");
const { getManifestThumbnail } = require("./thumbnail");

exports.getRootCollection = (id) =>
  axios.get(id).then((response) => response.data);

exports.getBulkManifests = async (items, chunkSize) =>
  await chunks(
    items,
    async (item) =>
      axios.get(item.id).then(async (response) => {
        const manifest = getPresentation3(response.data);
        const thumbnail = await getManifestThumbnail(manifest);
        return { index: item.index, ...manifest, thumbnail };
      }),
    chunkSize
  );
