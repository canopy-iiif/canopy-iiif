const {
  getCanopyCollection,
  getBulkManifests,
  getRootCollection,
} = require("./build");
const { getEntries } = require("./iiif/label");
const fs = require("fs");
const slugify = require("slugify");

module.exports.buildCanopy = (env) => {
  console.log(`Generating collection data for ${env.collection}...`);
  getRootCollection(env.collection).then((json) => {
    const canopyDirectory = ".canopy";
    const canopyCollection = getCanopyCollection(json, 0, null);

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
    const canopyManifests = canopyCollection.items
      .filter((item) => item.type === "Manifest")
      .map((item) => {
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
      (error) => error && console.error(error)
    );

    console.log(`Flattening prescribed metadata...`);

    const responses = getBulkManifests(canopyManifests, 20);

    responses.then((manifests) => {
      let canopyMetadata = [];
      manifests
        .filter((manifest) => {
          if (manifest) return manifest;
        })
        .map((manifest) =>
          manifest.metadata.forEach((metadata) => {
            const metadataLabel = getEntries(metadata.label)[0];
            const metadataValues = getEntries(metadata.value);
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
