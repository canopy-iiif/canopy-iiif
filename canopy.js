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
  config.options = {
    ...options,
    url: args.includes("dev")
      ? `http://localhost:5001`
      : config.environment.url,
  };

  const env = {
    CANOPY_CONFIG: {
      ...config.environment,
      navigation: navigation,
      ...config.options,
    },
  };

  aggregate.build(env.CANOPY_CONFIG);
})();

module.exports = { getConfig };
