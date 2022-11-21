import METADATA from "@/.canopy/metadata.json";
import { buildCollection } from "@/services/iiif-builder";

export default function handler(req, res) {
  console.log(METADATA);
  Promise.resolve(res.status(200).json(METADATA));
}
