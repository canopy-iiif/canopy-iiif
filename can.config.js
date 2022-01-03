/**
 * Configuration built by `npm run build`
 */
const config = {
  collection: "https://view.nls.uk/collections/top.json",
  hero: [
    "https://view.nls.uk/manifest/7549/75496599/manifest.json",
    "https://view.nls.uk/manifest/1175/2694/117526944/manifest.json",
    "https://view.nls.uk/manifest/1216/4487/121644879/manifest.json",
  ],
  metadata: ["Subject/content", "Form/genre", "Date created", "Place created"],
  title: "National Library of Scotland IIIF Collections",
};

/**
 * Configuration built by `npm run dev`
 */
const dev = {
  collection: "http://localhost:5001/iiif-dev/collection/north-american.json",
  title: "The North Americans",
  hero: [
    "http://localhost:5001/iiif-dev/manifest/apache/04-apache-camp.json",
    "http://localhost:5001/iiif-dev/manifest/nez-perce/08-map-territory.json",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Large but shallow collection for testing
 */
const devAlt = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  hero: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/661",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/317",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/338",
  ],
  metadata: ["Coverage", "Date", "Topic"],
  title: "The Botanical photography of Alan S. Heilman",
};

const devAlt2 = {
  collection: "https://view.nls.uk/collections/top.json",
  hero: [
    "https://view.nls.uk/manifest/7549/75496599/manifest.json",
    "https://view.nls.uk/manifest/1175/2694/117526944/manifest.json",
    "https://view.nls.uk/manifest/1216/4487/121644879/manifest.json",
  ],
  metadata: ["Subject/content", "Form/genre", "Date created", "Place created"],
  title: "National Library of Scotland IIIF Collections",
};

exports.config = config;
exports.dev = devAlt2;
