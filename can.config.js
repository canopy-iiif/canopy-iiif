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
  collection: "https://view.nls.uk/collections/1881/5593/188155936.json",
  hero: [
    "https://view.nls.uk/manifest/1175/9797/117597970/manifest.json",
    "https://view.nls.uk/manifest/1019/8305/101983051/manifest.json",
  ],
  metadata: ["Author", "Owner", "Bookseller"],
  title: "Gaelic manuscripts of Scotland",
};

exports.config = config;
exports.dev = dev;
