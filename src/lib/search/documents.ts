// @ts-nocheck

import FlexSearch from "flexsearch";
import INDEX from "@.canopy/index.json";

const getDocuments = (q: string, flexSearch: any) => {
  const index = new FlexSearch.Document(flexSearch);
  INDEX.forEach((doc) => index.add(doc));

  const results = index.search(q).reduce((acc, curr) => {
    return [...new Set([...acc, ...curr.result])];
  }, []);

  return results.length > 0 ? results : [];
};

export { getDocuments };
