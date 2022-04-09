import { buildCollection } from "../../services/builder";

export default function handler(req, res) {
  res.status(200).json(buildCollection(["label"], ["summary"]));
}
