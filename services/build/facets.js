const _ = require("lodash");

exports.buildFacets = (labels, metadata) => {
  const uniqueValues = _.uniqBy(metadata, "value");
  const counts = _.countBy(metadata, "value");

  const facets = labels.map((label) => {
    const values = uniqueValues
      .filter((entry) => entry.label === label)
      .map((entry) => {
        return {
          value: entry.value,
          doc_count: counts[entry.value],
          docs: metadata
            .filter((item) => item.value === entry.value)
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
