const fs = require("fs");

const getConfig = (path = "./config/canopy.json", isDev = false) => {
  const defaultData = fs.readFileSync(
    `./config/.default/canopy.default.json`,
    {}
  );

  let data;
  try {
    data = fs.readFileSync(path, {});
  } catch (err) {
    console.log(
      "Using sample data for demonstration, please follow documentation for creating a custom Canopy configuration."
    );
  }

  const defaultConfig = JSON.parse(defaultData);
  const config = data && JSON.parse(data);

  /**
   * If the user has not specified metadata, but has specified a collection,
   * we need to create an empty array for the metadata.
   */
  if (config?.collection && config?.metadata === undefined) {
    config.metadata = [];
  }

  /**
   * If the user has not specified featured, but has specified a collection,
   * we need to set featured to undefined.
   */
  if (config?.collection && config?.featured === undefined) {
    config.featured = undefined;
  }

  /**
   * Check if we are in dev mode and if the user has specified a dev collection.
   * If so, we need to override the collection with the dev collection.
   */
  if (isDev && config?.devCollection) {
    config.collection = config.devCollection;
  }

  return {
    ...defaultConfig,
    ...config,
  };
};

module.exports = {
  getConfig,
};
