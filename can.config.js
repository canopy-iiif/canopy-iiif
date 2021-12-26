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

const devAlt = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/acwiley",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/acwiley/289",
    "https://digital.lib.utk.edu/assemble/manifest/acwiley/393",
    "https://digital.lib.utk.edu/assemble/manifest/acwiley/427",
  ],
  metadata: ["Coverage", "Date", "Topic"],
  title: "Anna Catherine Wiley Sketches",
};

exports.config = config;
exports.dev = dev;
