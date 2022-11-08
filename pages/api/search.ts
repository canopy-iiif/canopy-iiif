import INDEX from "@/.canopy/index.json";
import MANIFESTS from "@/.canopy/manifests.json";
import absoluteUrl from "next-absolute-url";
import { search } from "libsearch";

export const config = {
  runtime: "experimental-edge",
};

const getItems = (origin, query) => {
  const filtered = !query
    ? INDEX.map((manifest) => manifest.id)
    : getResults(query);

  return filtered
    ? MANIFESTS.filter((item) => filtered.includes(item.id)).map((item) =>
        searchResult(item, origin)
      )
    : [];
};

const getResults = (query) =>
  search(INDEX, query, (manifest) => manifest.label).map((result) => result.id);

const searchResult = (item, origin) => {
  return {
    id: item.id,
    label: item.label,
    homepage: [
      {
        id: `${origin}/works/${item.slug}`,
        type: "Text",
        label: item.label,
      },
    ],
  };
};

export default function handler(req) {
  const { origin } = absoluteUrl(req);
  const { url } = req;

  const params = new URL(url).searchParams;
  const query = params.get("q");
  const items = getItems(origin, query);

  const result = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${origin}/api/search`,
    type: "Collection",
    label: { none: [query] },
    items: [...items],
  };

  return new Response(JSON.stringify({ ...result }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
