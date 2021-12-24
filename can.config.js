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
