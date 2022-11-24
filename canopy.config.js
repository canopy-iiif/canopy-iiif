/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/knoxgardens",
  featured: ["https://digital.lib.utk.edu/assemble/manifest/knoxgardens/126"],
  metadata: ["Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/knoxgardens",
  featured: ["https://digital.lib.utk.edu/assemble/manifest/knoxgardens/126"],
  metadata: ["Subject"],
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
        enabled: false,
      },
    },
  },
  theme: {
    defaultTheme: "light", // "light" | "dark" | "system"
    toggleEnabled: false,
  },
};
