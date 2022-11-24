import INDEX from "@/.canopy/index.json";
import { Document } from "flexsearch";

const getDocuments = (q) => {
  const index = new Document({
    depth: 2,
    document: {
      index: [
        { field: "label", tokenize: "full" },
        { field: "metadata" },
        { field: "summary" },
      ],
    },
    optimize: true,
    resolution: 9,
    tokenize: "forward",
  });

  INDEX.forEach((doc) => index.add(doc));
  const results = index.search(q);

  return results.length > 0 ? results[0].result : [];
};

export { getDocuments };
