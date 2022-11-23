/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/egypt",
  featured: ["https://digital.lib.utk.edu/assemble/manifest/egypt/102"],
  metadata: ["Subject", "Photographer", "Place", "Date", "Format"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/egypt",
  featured: ["https://digital.lib.utk.edu/assemble/manifest/egypt/102"],
  metadata: ["Subject", "Photographer", "Place", "Date", "Format"],
};

exports.options = {
  search: {
    enabled: true,
    index: {
      metadata: {
        enabled: true,
        all: false, // by default, only entries with curated labels are indexed
      },
      summary: {
        enabled: true,
      },
    },
  },
  theme: {
    defaultTheme: "light", // "light" | "dark" | "system"
    toggleEnabled: false,
  },
};
