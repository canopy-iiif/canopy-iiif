import { buildCollection } from "@/services/iiif-builder";

export default function handler(req, res) {
  Promise.resolve(res.status(200).json(buildCollection({})));
}
