/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  label: { none: ["Canopy IIIF"] },
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/search?query=%22Edward%20S.%20Curtis%27s%20The%20North%20American%20Indian%20--%20Volume%208.%20The%20Nez%20Perces.%20Wallawalla.%20Umatilla.%20Cayuse.%20The%20Chinookan%20tribes%22&as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/14a6aa15-9e12-47a7-9617-91f430d4f47b?as=iiif",
    "https://api.dc.library.northwestern.edu/api/v2/works/e82cc873-c7c3-4d8e-b8b1-d1130737216e?as=iiif",
  ],
  metadata: ["Date", "Dimensions", "Genre", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  label: { none: ["Canopy IIIF"] },
  collection:
    "https://api.dc.library.northwestern.edu/api/v2/search?query=%22Edward%20S.%20Curtis%27s%20The%20North%20American%20Indian%20--%20Volume%208.%20The%20Nez%20Perces.%20Wallawalla.%20Umatilla.%20Cayuse.%20The%20Chinookan%20tribes%22&as=iiif&size=500",
  featured: [
    "https://api.dc.library.northwestern.edu/api/v2/works/14a6aa15-9e12-47a7-9617-91f430d4f47b?as=iiif",
    "https://api.dc.library.northwestern.edu/api/v2/works/e82cc873-c7c3-4d8e-b8b1-d1130737216e?as=iiif",
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
