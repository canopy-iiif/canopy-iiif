const searchResult = (item, origin) => {
  return {
    id: item.id,
    type: "Manifest",
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

export { searchResult };
