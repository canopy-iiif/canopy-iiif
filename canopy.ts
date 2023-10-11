require("dotenv").config();
const buildConfig = require("./src/lib/build/config");
const aggregate = require("./src/lib/build/aggregate");

const args = process.argv;

(() => {
  const path = args
    .find((value) => value.includes("--path="))
    ?.split("=")
    ?.pop();

  const config = buildConfig.getConfig(path);
  const options = buildConfig.getOptions();
  const navigation = buildConfig.getNavigation();
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

  aggregate.build(env.CANOPY_CONFIG);
})();
