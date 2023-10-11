const { getConfig } = require("./config");

import * as defaultData from "@config/.default/canopy.default.json";

import { CanopyBuildConfig } from "@customTypes/build";

describe("getConfig() function", () => {
  it("should return default settings with empty arguments", () => {
    const result: CanopyBuildConfig = getConfig();
    expect(result.prod.collection).toEqual(defaultData.prod.collection);
    expect(result.prod.metadata).toEqual(defaultData.prod.metadata);
  });
});
