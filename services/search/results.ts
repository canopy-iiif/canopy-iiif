import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import { getDocuments } from "@/services/search/documents";
import { getItem } from "./response";

const getResults = (origin, q) => {
  const documents = !q
    ? INDEX.map((doc) => doc.id)
    : getDocuments(q, `${origin}/api`);

  return documents
    ? MANIFESTS.filter((item) => documents.includes(item.index)).map((item) =>
        getItem(item, origin)
      )
    : [];
};

export { getResults };
