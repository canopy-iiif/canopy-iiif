const _ = require("lodash");
const { getSlug } = require("./slug");

exports.buildFacets = (labels, metadata) => {
  const unique = _.uniqBy(metadata, "value");
  const counts = _.countBy(metadata, "value");

  return (facets = labels.map((label) => {
    const values = unique
      .filter((entry) => entry.label === label)
      .map((entry) => {
        const { value } = entry;
        return {
          value: value,
          slug: getSlug(value),
          doc_count: counts[value],
          docs: metadata
            .filter((item) => item.value === value)
            .map((item) => item.index),
        };
      });

    return {
      label: label,
      slug: getSlug(label),
      values: _.orderBy(values, ["doc_count", "value"], ["desc", "asc"]),
    };
  }));
};
