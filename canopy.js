require("dotenv").config();
const {
  buildCanopy,
  getConfig,
  getOptions,
  getNavigation,
} = require("@canopy-iiif/lib");
const args = process.argv;

(() => {
  const path = args
    .find((value) => value.includes("--path="))
    ?.split("=")
    ?.pop();

  const config = getConfig(path);
  const options = getOptions();
  const navigation = getNavigation();
  const { prod, dev } = config;

  config.environment = args.includes("dev") ? dev : prod;
  config.options = options;

  const url = args.includes("dev")
    ? `http://localhost:5001`
    : process.env.NEXT_PUBLIC_URL;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const env = {
    CANOPY_CONFIG: {
      ...config.environment,
      navigation: navigation,
      ...config.options,
      url,
      basePath,
      baseUrl,
    },
  };

  buildCanopy(env);
})();
