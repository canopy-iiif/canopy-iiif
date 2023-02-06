/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  label: { none: ["The Chimney Tops 2 Wildfires In Memory And Art"] },
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/rftacuratedart",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/rftaart/6",
    "https://digital.lib.utk.edu/assemble/manifest/rftaart/41",
    "https://digital.lib.utk.edu/assemble/manifest/rftaart/37",
  ],
  metadata: ["Artist", "Subject", "Format"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  label: { none: ["The Chimney Tops 2 Wildfires In Memory And Art"] },
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/rftacuratedart",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/rftaart/6",
    "https://digital.lib.utk.edu/assemble/manifest/rftaart/41",
    "https://digital.lib.utk.edu/assemble/manifest/rftaart/37",
  ],
  metadata: ["Artist", "Subject", "Format"],
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
