const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { getConfig } = require("./src/lib/build/config.ts");

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const config = getConfig(undefined, isDev);

  const url = isDev ? "http://localhost:5001" : process.env.NEXT_PUBLIC_URL;
  const basePath = isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || "";
  const baseUrl = basePath ? `${url}${basePath}` : url;
  const assetPrefix = basePath || "";

  const env = {
    CANOPY_CONFIG: {
      ...config,
      url,
      assetPrefix,
      basePath,
      baseUrl,
    },
  };

  return {
    env,
    output: "export",
    assetPrefix,
    basePath,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    typescript: {
      ignoreBuildErrors: true,
    },
    redirects: async () => [
      {
        source: "/works",
        destination: "/search",
        permanent: true,
      },
    ],
  };
};
