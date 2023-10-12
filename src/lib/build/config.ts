const fs = require("fs");

import type { CanopyBuildConfig } from "../../types/build";

const getConfig = (path = `./config/.default/canopy.default.json`) => {
  const defaultData: string = fs.readFileSync(path, {});

  if (path.includes("./config/.fixtures/")) {
    return JSON.parse(defaultData) as CanopyBuildConfig;
  }

  let data;
  try {
    data = fs.readFileSync(`./config/canopy.json`, {});
  } catch (err) {
    console.log(
      "Using sample data for demonstration, please follow documentation for creating a custom Canopy configuration."
    );
  }

  const config = data ? data : defaultData;

  return JSON.parse(config) as CanopyBuildConfig;
};

function getNavigation(path = `./config/.default/navigation.default.json`) {
  const defaultNavigation = fs.readFileSync(path, {});

  let data;
  try {
    data = fs.readFileSync(`./config/navigation.json`, {});
  } catch (err) {
    ("Using default navigation for demonstration, please follow documentation for creating custom navigation.");
  }

  const navigation = data ? data : defaultNavigation;

  return JSON.parse(navigation);
}

function getOptions(path = `./config/.default/options.default.json`) {
  const defaultOptions = fs.readFileSync(path, {});

  let data;
  try {
    data = fs.readFileSync(`./config/options.json`, {});
  } catch (err) {
    ("Using default options for demonstration, please follow documentation for creating custom options.");
  }

  const options = data ? data : defaultOptions;

  return JSON.parse(options);
}

module.exports = {
  getConfig,
  getNavigation,
  getOptions,
};
