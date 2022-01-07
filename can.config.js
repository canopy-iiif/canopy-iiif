/**
 * Configuration built by `npm run build`
 */
const config = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/tenncities",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/tenncities/343"],
  metadata: ["Place", "Date", "Format", "Subject"],
  title: "Images of East Tennessee",
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection: "http://localhost:5001/iiif-dev/collection/north-american.json",
  title: "The North Americans",
  hero: [
    "http://localhost:5001/iiif-dev/manifest/apache/04-apache-camp.json",
    "http://localhost:5001/iiif-dev/manifest/nez-perce/08-map-territory.json",
    "http://localhost:5001/iiif-dev/manifest/tsawatenok/05-tsawatenok-house-front.json",
  ],
  metadata: ["Subject", "Date", "Dimensions"],
};

exports.config = config;
exports.dev = devAlt;
