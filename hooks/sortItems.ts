import { Manifest, Collection } from "@iiif/presentation-3";

enum SortType {
  lexical = "lexical",
  random = "random",
  reverse = "reverse",
  "reverse-lexical" = "reverse-lexical",
}

export const sortItems = (
  items: Collection[] | Manifest[],
  sortType: SortType
) => {
  switch (sortType) {
    case "random":
      return items
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    case "lexical":
      return items.sort((a: any, b: any) =>
        a.label[Object.keys(a.label)[0]][0] >
        b.label[Object.keys(b.label)[0]][0]
          ? 1
          : b.label[Object.keys(b.label)[0]][0] >
            a.label[Object.keys(a.label)[0]][0]
          ? -1
          : 0
      );
    case "reverse-lexical":
      return items.sort((a: any, b: any) =>
        b.label[Object.keys(b.label)[0]][0] >
        a.label[Object.keys(a.label)[0]][0]
          ? 1
          : a.label[Object.keys(a.label)[0]][0] >
            b.label[Object.keys(b.label)[0]][0]
          ? -1
          : 0
      );
    case "reverse":
      return items.reverse();
    default:
      return items;
  }
};
