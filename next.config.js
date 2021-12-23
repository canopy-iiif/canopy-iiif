const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const can = require("./can.config");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const { rootCollection, siteTitle } = can.config;

  const env = {
    rootCollection: (() => {
      if (isDev) return "http://localhost:5001/iiif/collection/dev.json";
      if (isProd) return rootCollection;
    })(),
    siteTitle: (() => {
      if (isDev) return "Nimíipuu, or the Nez Percé";
      if (isProd) return siteTitle;
    })(),
  };

  return {
    env,
  };
};
