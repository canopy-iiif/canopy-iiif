const fs = require("fs");
const { buildCanopyCollection } = require("./iiif-helpers");
const slugify = require("slugify");

const slugifyConfig = {
  lower: true,
  strict: true,
  trim: true,
};

const canopyDirectory = "public/_canopy";

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
     * make collection(s)
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
     * make manifest(s)
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
          slug: slugify(item.label[0], slugifyConfig),
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
  });
};

// type Manifest {
//   collectionId: ID
//   id: ID
//   label: [String]
//   metadata: [Metadata]
//   slug: ID
// }

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
