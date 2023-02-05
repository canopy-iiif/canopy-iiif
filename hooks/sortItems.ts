export const sortItems = (
  items: Array,
  sortType: string = "none"
) => {
  switch (sortType) {
    case "random":
      return items.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    case "lexical":
      return items.sort(
        (a,b) =>
          (a.label[Object.keys(a.label)[0]][0] > b.label[Object.keys(b.label)[0]][0]) ? 1 : (
            (b.label[Object.keys(b.label)[0]][0] > a.label[Object.keys(a.label)[0]][0]) ? -1 : 0
          )
      )
    case "reverse-lexical":
      return items.sort(
        (a,b) =>
          (b.label[Object.keys(b.label)[0]][0] > a.label[Object.keys(a.label)[0]][0]) ? 1 : (
            (a.label[Object.keys(a.label)[0]][0] > b.label[Object.keys(b.label)[0]][0]) ? -1 : 0
          )
      )
    case "reverse":
      return items.reverse();
    default:
      return items
  }
};
