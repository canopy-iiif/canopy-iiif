/**
 *
 */

const fs = require("fs");
const { buildCanopyCollection } = require("./iiif-helpers");

const canopyDirectory = "public/_canopy";

module.exports.buildCanopy = (env) => {
  /**
   * get root collection and transform it to canopy friendly schema
   */
  getRootCollection(env.collection).then((json) => {
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
      JSON.stringify(canopyCollection),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
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
