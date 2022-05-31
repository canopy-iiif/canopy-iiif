const axios = require("axios");
const { buildCanopyCollection, getValues } = require("./iiif-helpers");
const fs = require("fs");
const slugify = require("slugify");

/**
 * directory where canopy instance build data is stored.
 */
const canopyDirectory = ".canopy";

/**
 *
 * @param {*} env
 */
module.exports.buildCanopy = (env) => {
  /**
   * get root collection and transform it to canopy friendly schema
   */
  getRootCollection(env.collection).then((json) => {
    /**
     * make collections
     */
    const canopyCollection = buildCanopyCollection(json, 0, null);

    try {
      if (!fs.existsSync(canopyDirectory)) {
        fs.mkdirSync(canopyDirectory);
      }
    } catch (err) {
      console.error(err);
    }

    fs.writeFile(
      `${canopyDirectory}/collections.json`,
      JSON.stringify([canopyCollection]),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    /**
     * create manifest listing
     */
    const canopyManifests = canopyCollection.items.map((item) => {
      /**
       * what should label look like at this point?
       * language for label?
       * are they unique?
       */
      if (item.type === "Manifest")
        return {
          collectionId: item.parent,
          id: item.id,
          label: item.label,
          slug: slugify(item.label[0], env.slugify),
        };
    });

    fs.writeFile(
      `${canopyDirectory}/manifests.json`,
      JSON.stringify(canopyManifests),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    /**
     * flatten metadata
     */
    const responses = getBulkManifests(canopyManifests, 10);

    responses.then((manifests) => {
      let canopyMetadata = [];
      manifests
        .filter((manifest) => {
          if (manifest) return manifest;
        })
        .map((manifest) =>
          manifest.metadata.forEach((metadata) => {
            const metadataLabel = getValues(metadata.label)[0];
            const metadataValues = getValues(metadata.value);
            if (env.metadata.includes(metadataLabel)) {
              metadataValues.forEach((value) => {
                const result = {
                  manifestId: manifest.id,
                  label: metadataLabel,
                  value,
                  thumbnail: manifest.thumbnail[0].id,
                };
                canopyMetadata.push(result);
              });
            }
          })
        );

      fs.writeFile(
        `${canopyDirectory}/metadata.json`,
        JSON.stringify(canopyMetadata),
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );
    });
  });
};

const getRootCollection = (id) =>
  fetch(id)
    .then((response) => response.text())
    .then((text) => {
      try {
        return JSON.parse(text);
      } catch (err) {
        console.warn(err);
      }
    })
    .then((json) => json);

const getBulkManifests = async (items, chunkSize) =>
  await chunks(
    items,
    async (item) => axios.get(item.id).then((result) => result.data),
    chunkSize
  );

function all(items, fn) {
  const promises = items.map((item) => fn(item));
  return Promise.all(promises);
}

function series(items, fn) {
  let result = [];
  return items
    .reduce((acc, item) => {
      acc = acc.then(() => {
        return fn(item).then((res) => result.push(res));
      });
      return acc;
    }, Promise.resolve())
    .then(() => result);
}

function splitToChunks(items, chunkSize = 25) {
  const result = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
}

function chunks(items, fn, chunkSize = 25) {
  let result = [];
  const chunks = splitToChunks(items, chunkSize);
  return series(chunks, (chunk) => {
    return all(chunk, fn).then((res) => (result = result.concat(res)));
  }).then(() => result);
}
