/**
 * Configuration built by `npm run build`
 */
const config = {
  collection: "https://can-the.vercel.app/iiif/collection/north-american.json",
  title: "The North Americans",
  hero: [
    "https://can-the.vercel.app/iiif/manifest/apache/04-apache-camp.json",
    "https://can-the.vercel.app/iiif/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Date", "Subject"],
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
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Large but shallow collection for testing
 */
const devAlt = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/tenncities",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/tenncities/343"],
  metadata: ["Place", "Date", "Format", "Subject"],
  title: "Images of East Tennessee",
};

const devAlt2 = {
  collection: "https://view.nls.uk/collections/top.json",
  hero: ["https://view.nls.uk/manifest/9713/97134287/manifest.json"],
  metadata: ["Coverage", "Date", "Topic"],
  title: "National Library of Scotland IIIF Collections",
};

const devAltPres3 = {
  collection:
    "https://iiif.wellcomecollection.org/presentation/collections/archives/SA/WWP",
  hero: ["https://iiif.wellcomecollection.org/presentation/b19116342"],
  metadata: ["Publication/creation"],
  title: "The Widow Welch's Pills",
};

exports.config = config;
exports.dev = devAlt;
