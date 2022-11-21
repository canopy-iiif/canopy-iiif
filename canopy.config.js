/**
 * Configuration built by `npm run build`
 */
exports.prod = {
  collection:
    "https://dcapi.rdc-staging.library.northwestern.edu/api/v2/search?query=war&as=iiif",
  featured: [
    "https://dcapi.rdc-staging.library.northwestern.edu/api/v2/works/0f28456b-bcad-412d-986a-c37768bfba92?as=iiif",
  ],
  metadata: ["Date", "Subject"],
};

/**
 * Configuration built by `npm run dev`
 */
exports.dev = {
  collection:
    "https://dcapi.rdc-staging.library.northwestern.edu/api/v2/search?query=war&as=iiif",
  featured: [
    "https://dcapi.rdc-staging.library.northwestern.edu/api/v2/works/0f28456b-bcad-412d-986a-c37768bfba92?as=iiif",
  ],
  metadata: ["Date", "Subject"],
};

exports.options = {
  theme: {
    defaultTheme: "light", // "light" | "dark" | "system"
    toggleEnabled: false,
  },
};
