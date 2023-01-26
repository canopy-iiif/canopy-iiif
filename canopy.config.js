/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/search?query=%22Edward%20S.%20Curtis%27s%20The%20North%20American%20Indian%20--%20Volume%208.%20The%20Nez%20Perces.%20Wallawalla.%20Umatilla.%20Cayuse.%20The%20Chinookan%20tribes%22&as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/588a6527-88b6-4b70-ae6c-f42aceea9efb?as=iiif",
    "https://api.dc.library.northwestern.edu/api/v2/works/14a6aa15-9e12-47a7-9617-91f430d4f47b?as=iiif",
    "https://api.dc.library.northwestern.edu/api/v2/works/15871197-1616-4c37-9257-b0ad0dc5ab30?as=iiif",
  ],
  metadata: ["Date", "Dimensions", "Genre", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/search?query=%22Edward%20S.%20Curtis%27s%20The%20North%20American%20Indian%20--%20Volume%208.%20The%20Nez%20Perces.%20Wallawalla.%20Umatilla.%20Cayuse.%20The%20Chinookan%20tribes%22&as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/588a6527-88b6-4b70-ae6c-f42aceea9efb?as=iiif",
    "https://api.dc.library.northwestern.edu/api/v2/works/14a6aa15-9e12-47a7-9617-91f430d4f47b?as=iiif",
    "https://api.dc.library.northwestern.edu/api/v2/works/15871197-1616-4c37-9257-b0ad0dc5ab30?as=iiif",
  ],
  metadata: ["Date", "Dimensions", "Genre", "Subject"],
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
