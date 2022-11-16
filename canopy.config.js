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
  theme: {
    defaultTheme: "light", // "light" | "dark" | "system"
    toggleEnabled: false,
  },
};
