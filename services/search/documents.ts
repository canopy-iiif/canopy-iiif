import INDEX from "@/.canopy/index.json";
import { Document } from "flexsearch";

const getDocuments = (q) => {
  const index = new Document({
    optimize: true,
    resolution: 9,
    depth: 2,
    document: {
      id: "id",
      index: [
        {
          field: "label",
        },
      ],
    },
  });

  INDEX.forEach((doc) => index.add(doc));
  const results = index.search(q, { index: ["label"] });

  return results.length > 0 ? results[0].result : [];
};

export { getDocuments };
