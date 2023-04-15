import INDEX from "@/.canopy/index.json";
import { Document } from "flexsearch";

const getDocuments = (q: string) => {
  //@ts-ignore
  const index = new Document({
    charset: "latin:extra",
    tokenize: "full",
    depth: 2,
    document: {
      index: [{ field: "label" }, { field: "metadata" }, { field: "summary" }],
    },
    optimize: true,
    resolution: 9,
    bidirectional: 1,
  });

  //@ts-ignore
  INDEX.forEach((doc) => index.add(doc));

  //@ts-ignore
  const results = index.search(q);

  return results.length > 0 ? results[0].result : [];
};

export { getDocuments };
