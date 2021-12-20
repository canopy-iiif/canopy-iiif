const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        rootCollection: "http://localhost:5001/iiif/collection/dev.json",
      },
    };
  }

  return {
    env: {
      rootCollection:
        "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json",
    },
  };
};
