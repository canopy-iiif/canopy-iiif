/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/canopy-iiif/main/public/fixtures/iiif/collection/nez-perce.json",
  featured: [
    "https://raw.githubusercontent.com/mathewjordan/canopy-iiif/main/public/fixtures/iiif/manifest/nez-perce/08-map-territory.json",
    "https://raw.githubusercontent.com/mathewjordan/canopy-iiif/main/public/fixtures/iiif/manifest/nez-perce/11-watching-for-the-signal.json",
    "https://raw.githubusercontent.com/mathewjordan/canopy-iiif/main/public/fixtures/iiif/manifest/nez-perce/14-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "http://localhost:5001/fixtures/iiif-dev/collection/nez-perce.json",
  featured: [
    "http://localhost:5001/fixtures/iiif-dev/manifest/nez-perce/08-map-territory.json",
    "http://localhost:5001/fixtures/iiif-dev/manifest/nez-perce/11-watching-for-the-signal.json",
    "http://localhost:5001/fixtures/iiif-dev/manifest/nez-perce/14-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};
