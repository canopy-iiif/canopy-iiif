/**
 * Configuration built by `npm run build`
 */
const config = {
  collection: "https://can-the.vercel.app/iiif/collection/nez-perce.json",
  title: "Nimíipuu, the Nez Percé",
  hero: [
    "https://can-the.vercel.app/iiif/manifest/nez-perce/11-watching-for-the-signal.json",
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
