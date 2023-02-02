/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  label: { none: ["Maps of Africa"] },
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/collections/1c2e2200-c12d-4c7f-8b87-a935c349898a?as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/a0984553-00ab-4a04-812f-5249e3a0a5ca?as=iiif",
  ],
  metadata: ["Creator", "Subject", "Date", "Dimensions"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  label: { none: ["Maps of Africa"] },
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/collections/1c2e2200-c12d-4c7f-8b87-a935c349898a?as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/a0984553-00ab-4a04-812f-5249e3a0a5ca?as=iiif",
  ],
  metadata: ["Creator", "Subject", "Date", "Dimensions"],
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
