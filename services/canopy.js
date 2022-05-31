const {
  buildCanopyCollection,
  getBulkManifests,
  getRootCollection,
  getValues,
} = require("./build");
const fs = require("fs");
const slugify = require("slugify");

module.exports.buildCanopy = (env) => {
  getRootCollection(env.collection).then((json) => {
    /**
     * set directory to write canopy structure to
     */
    const canopyDirectory = ".canopy";

    /**
     * generate collection data
     */
    console.log(`Generating collection data...`);
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
    console.log(`Creating manifest listing...`);
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

    fs.writeFile(
      `${canopyDirectory}/metadata.json`,
      JSON.stringify([]),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );

    console.log(`Flattening prescribed metadata...`);
    const responses = getBulkManifests(canopyManifests, 25);

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
