/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/canopy-iiif/main/public/fixtures/iiif/collection/nez-perce.json",
  hero: [
    "https://raw.githubusercontent.com/mathewjordan/canopy-iiif/main/public/fixtures/iiif/manifest/nez-perce/02-lawyer.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "http://localhost:5001/fixtures/iiif-dev/collection/nez-perce.json",
  hero: [
    "http://localhost:5001/fixtures/iiif-dev/manifest/nez-perce/02-lawyer.json",
  ],
  metadata: ["Date", "Subject"],
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
