/**
 * Configuration built by `npm run build`
 */
const config = {
  collection: "https://view.nls.uk/collections/1881/5593/188155936.json",
  hero: [
    "https://view.nls.uk/manifest/1175/9797/117597970/manifest.json",
    "https://view.nls.uk/manifest/1019/8305/101983051/manifest.json",
  ],
  metadata: ["Author", "Owner", "Bookseller"],
  title: "Gaelic manuscripts of Scotland",
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
    "http://localhost:5001/iiif-dev/manifest/tsawatenok/05-tsawatenok-house-front.json",
  ],
  metadata: ["Subject", "Date", "Dimensions"],
};

const devScotland = {
  collection: "https://view.nls.uk/collections/1881/5593/188155936.json",
  hero: [
    "https://view.nls.uk/manifest/1175/9797/117597970/manifest.json",
    "https://view.nls.uk/manifest/1019/8305/101983051/manifest.json",
  ],
  metadata: ["Author", "Owner", "Bookseller"],
  title: "Gaelic manuscripts of Scotland",
};

exports.config = config;
exports.dev = devScotland;
