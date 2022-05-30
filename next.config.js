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

  const env = {
    collection: (() => {
      if (isDev) return dev.collection;
      if (isProd) return prod.collection;
    })(),
    hero: (() => {
      if (isDev) return dev.hero;
      if (isProd) return prod.hero;
    })(),
    metadata: (() => {
      if (isDev) return dev.metadata;
      if (isProd) return prod.metadata;
    })(),
    title: (() => {
      if (isDev) return dev.title;
      if (isProd) return prod.title;
    })(),
  };

  canopy.buildCanopy(env);

  return { env };
};
