const axios = require("axios");
const { chunks } = require("./chunks");
const { getPresentation3 } = require("../iiif/context");

exports.getRootCollection = (id) =>
  axios.get(id).then((response) => response.data);

exports.getBulkManifests = async (items, chunkSize) =>
  await chunks(
    items,
    async (item) =>
      axios.get(item.id).then((response) => {
        return { index: item.index, ...getPresentation3(response.data) };
      }),
    chunkSize
  );
