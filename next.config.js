const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    rootCollection: (() => {
      if (isDev) return "http://localhost:5001/iiif/collection/dev.json";
      if (isProd) {
        return "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json";
      }
    })(),
    siteTitle: (() => {
      if (isDev) return "Nimíipuu, or the Nez Percé";
      if (isProd) return "Nimíipuu, the Nez Percé";
    })(),
  };

  return {
    env,
  };
};
