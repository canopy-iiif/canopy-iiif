const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const { getConfig, getOptions } = require("./src/lib/build/config.ts");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const config = getConfig();
  const options = getOptions();

  const { prod, dev } = config;

  config.environment = (() => {
    if (isDev) return dev;
    if (isProd) return prod;
  })();

  config.options = options;

  const url = isDev ? `http://localhost:5001` : process.env.NEXT_PUBLIC_URL;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const env = {
    CANOPY_CONFIG: {
      ...config.environment,
      ...config.options,
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
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    redirects,
    typescript: {
      ignoreBuildErrors: true,
    },
  };
};
