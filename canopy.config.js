/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://canopy-iiif.vercel.app/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/15-last-home-of-joseph.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://canopy-iiif.vercel.app/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/15-last-home-of-joseph.json",
    "https://canopy-iiif.vercel.app/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Date", "Subject"],
};
