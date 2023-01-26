/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/combine/main/output/ww2.json",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/881e18e9-d40c-4ebb-8840-b3e2193e8e01?as=iiif",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/combine/main/output/ww2.json",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/881e18e9-d40c-4ebb-8840-b3e2193e8e01?as=iiif",
  ],
  metadata: ["Date", "Subject"],
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
