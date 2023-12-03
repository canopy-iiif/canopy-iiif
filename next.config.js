const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const { getConfig } = require("./src/lib/build/config.ts");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const config = getConfig(undefined, isDev);

  const url = isDev ? `http://localhost:5001` : process.env.NEXT_PUBLIC_URL;
  const basePath = isDev ? `` : process.env.NEXT_PUBLIC_BASE_PATH;
  const baseUrl = basePath ? `${url}${basePath}` : url;
  console.log(baseUrl);

  const env = {
    CANOPY_CONFIG: {
      ...config,
      url,
      basePath,
      baseUrl,
    },
  };

  const redirects = () => {
    return [
      {
        source: "/works",
        destination: "/search",
        permanent: true,
      },
    ];
  };

  return {
    env,
    assetPrefix: basePath,
    basePath: basePath,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    redirects,
    typescript: {
      ignoreBuildErrors: true,
    },
  };
};
