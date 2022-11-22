const _ = require("lodash");

exports.buildFacets = (labels, metadata) => {
  const unique = _.uniqBy(metadata, "value");
  const counts = _.countBy(metadata, "value");

  const facets = labels.map((label) => {
    const values = unique
      .filter((entry) => entry.label === label)
      .map((entry) => {
        const { value } = entry;
        return {
          value: value,
          doc_count: counts[value],
          docs: metadata
            .filter((item) => item.value === value)
            .map((item) => item.index),
        };
      });

    return {
      label: label,
      values: _.orderBy(values, ["doc_count", "value"], ["desc", "asc"]),
    };
  });

  return {
    data: facets,
    info: {
      total: facets.length,
    },
  };
};
