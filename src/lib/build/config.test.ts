const { getConfig } = require("./config");

import * as defaultData from "@config/.default/canopy.default.json";

import { CanopyBuildConfigValues } from "@customTypes/build";

describe("getConfig() function", () => {
  it("should return default settings with empty arguments", () => {
    const result: CanopyBuildConfigValues = getConfig();
    expect(result.collection).toEqual(defaultData.collection);
    expect(result.metadata).toEqual(defaultData.metadata);
  });
});
