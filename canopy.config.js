/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/506",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/808",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/1200",
  ],
  metadata: ["Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/506",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/808",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/1200",
  ],
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
