const { getLabel, getEntries } = require("../iiif/label");
const countBy = require("lodash.countby");
const uniqBy = require("lodash.uniqby");

exports.buildFacets = (labels, metadata) => {
  const uniqueValues = uniqBy(metadata, "value");
  const counts = countBy(metadata, "value");

  const facets = labels.map((label) => {
    return {
      label: label,
      values: [
        ...uniqueValues
          .filter((entry) => entry.label === label)
          .map((entry) => {
            return {
              value: entry.value,
              doc_count: counts[entry.value],
              docs: metadata
                .filter((item) => item.value === entry.value)
                .map((item) => item.index),
            };
          }),
      ],
    };
  });
  return {
    data: facets,
    info: {
      total: facets.length,
    },
  };
};
