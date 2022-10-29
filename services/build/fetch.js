const axios = require("axios");
const { chunks } = require("./chunks");

exports.getRootCollection = (id) =>
  fetch(id).then((response) => response.json());

exports.getBulkManifests = async (items, chunkSize) =>
  await chunks(
    items,
    async (item) => axios.get(item.id).then((result) => result.data),
    chunkSize
  );
