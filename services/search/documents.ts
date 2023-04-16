import INDEX from "@/.canopy/index.json";
import { Document } from "flexsearch";

const getDocuments = (q: string) => {
  //@ts-ignore
  const index = new Document({
    charset: "latin:extra",
    optimize: true,
    tokenize: "strict",
    bidirectional: false,
    document: {
      index: [
        {
          field: "label",
          tokenize: "extra",
          resolution: 9,
          depth: 3,
          bidirectional: true,
        },
        {
          field: "metadata",
          resolution: 2,
        },
        {
          field: "summary",
          resolution: 1,
        },
      ],
    },
  });

  //@ts-ignore
  INDEX.forEach((doc) => index.add(doc));

  //@ts-ignore
  const results = index.search(q).reduce((acc, curr) => {
    return [...new Set([...acc, ...curr.result])];
  }, []);

  return results.length > 0 ? results : [];
};

export { getDocuments };
