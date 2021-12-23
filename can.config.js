const config = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json",
  title: "Nimíipuu, the Nez Percé",
  hero: [
    "http://localhost:5001/iiif/manifest/dev/03-shores-of-nootka-sound.json",
  ],
  metadata: ["Date", "Subject"],
};

const dev = {
  collection: "http://localhost:5001/iiif/collection/dev.json",
  hero: [
    "http://localhost:5001/iiif/manifest/dev/03-shores-of-nootka-sound.json",
  ],
  metadata: ["Date", "Subject"],
  title: "Nimíipuu, or the Nez Percé",
};

exports.config = config;
exports.dev = dev;
