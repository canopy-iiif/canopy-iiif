const axios = require("axios");
const { chunks } = require("./chunks");
const { getPresentation3 } = require("../iiif/context");
const { getManifestThumbnail } = require("./thumbnail");
const { logResponse } = require("./log");

exports.getRootCollection = (id) =>
  axios.get(id).then((response) => response.data);

exports.getBulkManifests = async (items, chunkSize) =>
  await chunks(
    items,
    async (item) =>
      axios
        .get(item.id)
        .then(async (response) => {
          const manifest = getPresentation3(response.data);
          const thumbnail = await getManifestThumbnail(manifest);

          logResponse(item.id, response);
          return { ...manifest, index: item.index, thumbnail };
        })
        .catch((error) => {
          if (error.response) logResponse(item.id, error.response, false);
          return;
        }),
    chunkSize
  );
