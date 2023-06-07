const { getCanopyCollection } = require("./shape");
const { getEntries, getLabel } = require("../iiif/label");
const fs = require("fs");
const { getUniqueSlug } = require("./slug");
const { log } = require("./log");
const { getRootCollection, getBulkManifests } = require("./request");
const { buildIndexData } = require("./search");
const { buildFacets } = require("./facets");
const { getRepresentativeImage } = require("../iiif/image");

module.exports.build = (env) => {
  const { baseUrl } = env;
  const canopyDirectory = ".canopy";
  log(`Building Canopy from IIIF Collection...\n`);
  log(`${env.collection}\n\n`, "yellow");
  getRootCollection(env.collection).then((json) => {
    const canopyCollection = getCanopyCollection({
      ...json,
      label: env.label ? env.label : json.label,
      summary: env.summary ? env.summary : json.summary,
    });

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
        return {
          collectionId: item.parent,
          id: item.id,
          index: index,
          label: item.label,
        };
      });

    const responses = getBulkManifests(canopyManifests, 10);

    const manifestData = responses.then((manifests) => {
      let rootSlugs = {};
      const allManifests = manifests.map((manifest, index) => {
        // Break this into a function / service
        const thumbnail = manifest.thumbnail
          ? manifest.thumbnail
          : manifest.items[0].thumbnail
          ? manifest.items[0].thumbnail
          : getRepresentativeImage(manifest, 400)
          ? getRepresentativeImage(manifest, 400)
          : [];

        const string = getLabel(manifest.label)[0];

        const { slug, allSlugs } = getUniqueSlug(string, rootSlugs);
        rootSlugs = allSlugs;

        return {
          ...canopyManifests.find(
            (canopyManifest) => canopyManifest.id === manifest.id
          ),
          slug: slug,
          thumbnail: thumbnail,
          ...(manifest.navPlace && { navPlace: manifest.navPlace }),
        };
      });

      fs.writeFile(
        `${canopyDirectory}/manifests.json`,
        JSON.stringify(allManifests),
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );

      return allManifests;
    });

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
                  canopyMetadata.push({
                    index: manifest.index,
                    label: metadataLabel,
                    value,
                  });
                });
              }
            });
          });

        manifestData.then((manifests) => {
          log(`\nCreating facets...\n`);
          const canopyFacets = buildFacets(
            env.metadata,
            canopyMetadata,
            manifests,
            baseUrl
          );
          fs.writeFile(
            `${canopyDirectory}/facets.json`,
            JSON.stringify(canopyFacets),
            (err) => {
              if (err) {
                console.error(err);
              }
            }
          );

          log(`Building search entries...\n`);
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
        });
      })
      .then(() => {
        log(`\n...Ready\n\n`);
      });
  });
};
