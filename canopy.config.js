/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/combine/main/output/curtis.json",
  featured: [
    "https://dcapi.rdc.library.northwestern.edu/api/v2/works/310ed1c8-0dfa-4302-bcf1-e08bda17885b?as=iiif",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://raw.githubusercontent.com/mathewjordan/combine/main/output/curtis.json",
  featured: [
    "https://dcapi.rdc.library.northwestern.edu/api/v2/works/310ed1c8-0dfa-4302-bcf1-e08bda17885b?as=iiif",
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
