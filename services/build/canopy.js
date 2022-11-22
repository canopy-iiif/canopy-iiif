const { getCanopyCollection } = require("./shape");
const { getEntries, getLabel } = require("../iiif/label");
const fs = require("fs");
const { getSlug } = require("./slug");
const { log } = require("./log");
const { getRootCollection, getBulkManifests } = require("./request");
const { buildIndexData } = require("./search");

module.exports.build = (env) => {
  const canopyDirectory = ".canopy";
  log(`Building Canopy from IIIF Collection...\n`);
  log(`${env.collection}\n\n`, "yellow");
  getRootCollection(env.collection).then((json) => {
    const canopyCollection = getCanopyCollection(json);

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
    log(`Creating Manifest listing...\n`);
    const canopyManifests = canopyCollection.items
      .filter((item) => item.type === "Manifest")
      .map((item, index) => {
        const slug = getSlug(getLabel(item.label)[0]);
        return {
          collectionId: item.parent,
          id: item.id,
          index: index,
          label: item.label,
          slug: slug,
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

    const responses = getBulkManifests(canopyManifests, 10);

    responses
      .then((manifests) => {
        let canopyMetadata = [];
        let canopySearch = [];
        manifests
          .filter((manifest) => manifest?.type === "Manifest")
          .forEach((manifest) => {
            // pack search array
            const settings = env.search.index;
            canopySearch.push({
              index: manifest.index,
              label: manifest.label,
              ...(settings.summary.enabled && { summary: manifest.summary }),
              ...(settings.metadata.enabled && {
                metadata: manifest.metadata.filter((entry) =>
                  settings.metadata.all
                    ? entry
                    : env.metadata.includes(getEntries(entry.label)[0])
                ),
              }),
            });

            // pack metadata array
            manifest.metadata.forEach((metadata) => {
              const metadataLabel = getEntries(metadata.label)[0];
              const metadataValues = getEntries(metadata.value);
              if (env.metadata.includes(metadataLabel)) {
                metadataValues.forEach((value) => {
                  const result = {
                    id: manifest.id,
                    label: metadataLabel,
                    value,
                  };
                  canopyMetadata.push(result);
                });
              }
            });
          });

        log(`\nFlattening metadata...\n`);
        fs.writeFile(
          `${canopyDirectory}/metadata.json`,
          JSON.stringify(canopyMetadata),
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );

        log(`Building search index...\n`);
        const canopyIndex = buildIndexData(canopySearch);
        fs.writeFile(
          `${canopyDirectory}/index.json`,
          JSON.stringify(canopyIndex),
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
      })
      .then(() => {
        log(`\n...Ready\n\n`);
      });
  });
};
