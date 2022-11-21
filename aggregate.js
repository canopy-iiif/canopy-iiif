const config = require("./canopy.config");
const canopy = require("./services/build/canopy");
const args = process.argv;

const aggregate = () => {
  const { prod, dev, options } = config;

  config.environment = args.includes("dev") ? dev : prod;
  config.options = options;

  const env = {
    CANOPY_CONFIG: {
      ...config.environment,
      ...config.options,
    },
  };

  canopy.build(env.CANOPY_CONFIG);
};

aggregate(true);
