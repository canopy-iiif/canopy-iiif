/**
 * Configuration built by `npm run build`
 */
const config = {
  collection: "https://digital.lib.utk.edu/assemble/collection/collections/bcpl",
  title: "RFTA Artists",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/bcpl/185",
  ],
  metadata: ["Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection: "https://digital.lib.utk.edu/assemble/collection/collections/bcpl",
  title: "RFTA Artists",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/bcpl/185",
  ],
  metadata: ["Subject"],
};


const devAlt = {
  collection: "https://iiif.bodleian.ox.ac.uk/iiif/collection/canonici",
  title: "Canonici",
  hero: [
    "https://iiif.bodleian.ox.ac.uk/iiif/manifest/d6f0ea37-6882-42a5-a923-9fb1e034ae29.json",
  ],
  metadata: ["Materials"],
};

exports.config = config;
exports.dev = dev;
