// @ts-nocheck

import type { NextApiRequest, NextApiResponse } from "next";

import { Collection } from "@iiif/presentation-3";
import absoluteUrl from "next-absolute-url";
import { searchRequest } from "@/lib/search/request";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Collection>
) {
  const { origin } = absoluteUrl(request);

  const baseUrl = origin + request?.url;
  const { searchParams } = new URL(baseUrl);

  const collection = searchRequest({
    params: searchParams,
    baseUrl,
    flexSearch: process?.env?.CANOPY_CONFIG?.search?.flexSearch,
  }) as unknown as Collection;

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(collection);
}
