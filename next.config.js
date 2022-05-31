const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const config = require("./canopy.config");
const canopy = require("./services/canopy");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const { prod, dev } = config;

  config.environment = (() => {
    if (isDev) return dev;
    if (isProd) return prod;
  })();

  const env = {
    ...config.globals,
    ...config.environment,
  };

  canopy.buildCanopy(env);
  return { env };
};
