import React, { useState } from "react";
const { RESTDataSource } = require("apollo-datasource-rest");

export default class ManifestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      "https://raw.githubusercontent.com/mathewjordan/can/main/public/iiif/collection/nez-perce.json";
  }

  async getManifests() {
    const data = await this.get("");
    return data.items;
  }
}
