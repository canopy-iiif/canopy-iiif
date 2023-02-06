/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  label: { none: ["Canopy IIIF"] },
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/506",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/808",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/1200",
  ],
  metadata: ["Subject", "Date", "Format", "Photographer"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  label: { none: ["Canopy IIIF"] },
  collection:
    "https://digital.lib.utk.edu/assemble/collection/collections/heilman",
  featured: [
    "https://digital.lib.utk.edu/assemble/manifest/heilman/506",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/808",
    "https://digital.lib.utk.edu/assemble/manifest/heilman/1200",
  ],
  metadata: ["Subject", "Date", "Format", "Photographer"],
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
