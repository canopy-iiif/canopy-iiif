import React, { useState } from "react";
const { RESTDataSource } = require("apollo-datasource-rest");

export default class ManifestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/iiif/collection/nez-perce.json";
  }

  async getManifests() {
    const data = await this.get("");
    return data.items;
  }
}
