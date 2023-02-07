const fs = require("fs");

function getConfig() {
  const defaultData = fs.readFileSync(
    `./config/.default/canopy.default.json`,
    {}
  );

  let data;
  try {
    data = fs.readFileSync(`./config/canopy.json`, {});
  } catch (err) {
    console.log(
      "Using sample data for demonstration, please follow documentation for creating a custom Canopy configuration."
    );
  }

  const config = data ? data : defaultData;

  return JSON.parse(config);
}

function getOptions() {
  let defaultOptions = fs.readFileSync(
    `./config/.default/options.default.json`,
    {}
  );

  try {
    data = fs.readFileSync(`./config/options.json`, {});
  } catch (err) {}

  const options = data ? data : defaultOptions;

  return JSON.parse(options);
}

module.exports = { getConfig, getOptions };
