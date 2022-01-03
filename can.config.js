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
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/661",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/317",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/338",
  ],
  metadata: ["Coverage", "Date", "Topic"],
  title: "The Botanical photography of Alan S. Heilman",
};

exports.config = config;
exports.dev = devAlt;
