/**
 * Configuration built by `npm run build`
 */
const config = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/1187",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/572",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/181",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/270",
  ],
  metadata: ["Coverage", "Date", "Topic"],
  title: "Botanical Photography of Alan S. Heilman",
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
    "https://digital.lib.utk.edu/assemble/manifest/heilman/1187",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/572",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/181",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/270",
  ],
  metadata: ["Coverage", "Date", "Topic"],
  title: "Botanical Photography of Alan S. Heilman",
};

exports.config = config;
exports.dev = devAlt;
