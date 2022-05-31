/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/rftacuratedart",
  title:
    "Rising from the Ashes: The Chimney Tops 2 Wildfires in Memory and Art",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/rftaart/76"],
  metadata: ["Artist", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/rftacuratedart",
  title:
    "Rising from the Ashes: The Chimney Tops 2 Wildfires in Memory and Art",
  hero: ["https://digital.lib.utk.edu/assemble/manifest/rftaart/76"],
  metadata: ["Artist", "Subject"],
};

/**
 * Canopy globals regardless of environment
 */
exports.globals = {
  slugify: {
    lower: true,
    strict: true,
    trim: true,
  },
};
