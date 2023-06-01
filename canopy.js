require("dotenv").config();
const aggregate = require("./services/build/aggregate");
const {
  getConfig,
  getOptions,
  getNavigation,
} = require("./services/build/config");
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

  const env = {
    CANOPY_CONFIG: {
      ...config.environment,
      navigation: navigation,
      ...config.options,
      url: args.includes("dev")
        ? `http://localhost:5001`
        : process.env.NEXT_PUBLIC_URL,
      basePath: args.includes("dev") ? `` : process.env.NEXT_PUBLIC_BASE_PATH,
    },
  };

  aggregate.build(env.CANOPY_CONFIG);
})();

module.exports = { getConfig };
