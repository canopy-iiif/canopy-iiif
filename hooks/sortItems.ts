export const sortItems = (
  items: Array,
  sortType: string = "none"
) => {
  if (sortType === "random") {
    return items.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  else {
    return items
  }
};