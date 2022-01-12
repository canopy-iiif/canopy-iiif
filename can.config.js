/**
 * Configuration built by `npm run build`
 */
const config = {
  collection:
    "https://digital.lib.utk.edu/static/iiif/collections/rfta_completed.json",
  title: "Rising from the Ashes",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/rfta/6"],
  metadata: ["Subject", "Place", "Date", "Format", "Language", "Interviewer"],
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection:
    "https://digital.lib.utk.edu/static/iiif/collections/rfta_completed.json",
  title: "Rising from the Ashes",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/rfta/6"],
  metadata: ["Subject", "Place", "Date", "Format", "Language", "Interviewer"],
};

exports.config = config;
exports.dev = dev;
