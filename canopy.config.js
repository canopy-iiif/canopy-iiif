/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/tenncities",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/tenncities/467",
    "https://digital.lib.utk.edu/assemble/manifest/tenncities/354",
    "https://digital.lib.utk.edu/assemble/manifest/tenncities/345",
  ],
  metadata: ["Subject", "Date", "Place"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/tenncities",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/tenncities/467",
    "https://digital.lib.utk.edu/assemble/manifest/tenncities/354",
    "https://digital.lib.utk.edu/assemble/manifest/tenncities/345",
  ],
  metadata: ["Subject", "Date", "Place"],
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
