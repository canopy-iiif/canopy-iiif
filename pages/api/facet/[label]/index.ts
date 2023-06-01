import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { Collection } from "@iiif/presentation-3";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Collection>
) {
  const { query } = request;
  const { label } = query;

  const filePath = path.join(
    process.cwd(),
    `public/api/facet`,
    `${label}.json`
  );
  const jsonString = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonString);

  const collection = {
    ...data,
    id: data.id.replace(".json", ""),
    items: data.items.map((entry: any) => {
      return {
        ...entry,
        id: entry.id.replace(".json", ""),
      };
    }),
  };

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(collection);
}
