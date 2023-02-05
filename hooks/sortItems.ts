export const sortItems = (
  items: Array,
  sortType: string = "none"
) => {
  if (sortType === "random") {
    return items.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  else if (sortType === "reverse") {
    return items.reverse();
  }
  else if (sortType === "lexical") {
    return items.sort((a,b) => (a.label.none[0] > b.label.none[0]) ? 1 : ((b.label.none[0] > a.label.none[0]) ? -1 : 0))
  }
  else {
    return items
  }
};