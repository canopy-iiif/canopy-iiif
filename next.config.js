const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const can = require("./canopy.config");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const { config, dev } = can;

  const env = {
    collection: (() => {
      if (isDev) return dev.collection;
      if (isProd) return config.collection;
    })(),
    hero: (() => {
      if (isDev) return dev.hero;
      if (isProd) return config.hero;
    })(),
    metadata: (() => {
      if (isDev) return dev.metadata;
      if (isProd) return config.metadata;
    })(),
    title: (() => {
      if (isDev) return dev.title;
      if (isProd) return config.title;
    })(),
  };

  return { env };
};
