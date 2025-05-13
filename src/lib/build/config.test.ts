const { getConfig } = require("./config");

import * as defaultData from "@config/.default/canopy.default.json";

import { CanopyBuildConfigValues } from "@customTypes/build";

import fs from "fs";
import path from "path";

const canopyPath = path.resolve("./config/canopy.json");

// Only run the default test if canopy.json is not set
(fs.existsSync(canopyPath) ? describe.skip : describe)("getConfig fallback", () => {
  const { getConfig } = require("./config");

  it("should return default settings if canopy.json is not present", () => {
    const result: CanopyBuildConfigValues = getConfig();
    expect(result.collection).toEqual(defaultData.collection);
    expect(result.locales).toEqual(defaultData.locales);
    expect(result.map).toEqual(defaultData.map);
    expect(result.metadata).toEqual(defaultData.metadata);
    expect(result.search).toEqual(defaultData.search);
    expect(result.theme).toEqual(defaultData.theme);
  });
});

describe("getConfig() function", () => {
  it("should load a custom path for the configuration", () => {
    const result: CanopyBuildConfigValues = getConfig(
      "./config/.fixtures/canopy.presentation-3.json"
    );
    expect(result.collection).toEqual(
      "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif"
    );
  });

  it("should load a minimal configuration and wipe metadata and featured properties", () => {
    const result: CanopyBuildConfigValues = getConfig(
      "./config/.fixtures/canopy.minimal.json"
    );
    expect(result.metadata).toEqual([]);
    expect(result.featured).toEqual(undefined);
  });

  it("should return the devCollection as collection if isDev === true", () => {
    const result: CanopyBuildConfigValues = getConfig(
      "./config/.fixtures/canopy.dev-collection.json",
      true
    );
    expect(result.collection).toEqual(
      "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif&size=5"
    );
  });
});
