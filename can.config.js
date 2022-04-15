/**
 * Configuration built by `npm run build`
 */
const config = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/661",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/317",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/338",
  ],
  metadata: ["Subject", "Format", "Date"],
  title: "The Botanical photography of Alan S. Heilman",
};

/**
 * Configuration built by `npm run dev`
 */

const dev = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/661",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/317",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/338",
  ],
  metadata: ["Subject", "Format", "Date"],
  title: "The Botanical photography of Alan S. Heilman",
};

exports.config = config;
exports.dev = dev;
