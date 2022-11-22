import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import { Document } from "flexsearch";

const getDocuments = (q) => {
  const index = new Document({
    depth: 2,
    index: ["label", "summary", "metadata"],
    optimize: true,
    resolution: 9,
    tokenize: "full",
  });

  INDEX.forEach((doc) => index.add(doc));
  const results = index.search(q, { index: ["label", "summary", "metadata"] });

  return results.length > 0 ? results[0].result : [];
};

export { getDocuments };
