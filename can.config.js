/**
 * Configuration built by `npm run build`
 */
const config = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json",
  title: "Nimíipuu, the Nez Percé",
  hero: [
    "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/manifest/nez-perce/08-map-territory.json",
    "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/manifest/nez-perce/09-joseph-dead-feast-lodge.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection: "http://localhost:5001/iiif/collection/dev.json",
  hero: [
    "http://localhost:5001/iiif/manifest/dev/03-shores-of-nootka-sound.json",
    "http://localhost:5001/iiif/manifest/dev/04-apache-camp.json",
  ],
  metadata: ["Date", "Subject"],
  title: "Nimíipuu, or the Nez Percé",
};

exports.config = config;
exports.dev = dev;
