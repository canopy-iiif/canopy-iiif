const _ = require("lodash");
const { getUniqueSlug } = require("./slug");

const getFacetValues = (label, unique, counts, metadata) => {
  let rootSlugs = {};

  return unique
    .filter((entry) => entry.label === label)
    .map((entry) => {
      const { value } = entry;
      const { slug, allSlugs } = getUniqueSlug(value, rootSlugs);
      rootSlugs = allSlugs;

      return {
        value: value,
        slug: slug,
        doc_count: counts[value],
        docs: metadata
          .filter((item) => item.value === value)
          .map((item) => item.index),
      };
    });
};

exports.buildFacets = (labels, metadata) => {
  const unique = _.uniqBy(metadata, "value");
  const counts = _.countBy(metadata, "value");

  let rootSlugs = {};

  return (facets = labels.map((label) => {
    const values = getFacetValues(label, unique, counts, metadata);

    const { slug, allSlugs } = getUniqueSlug(label, rootSlugs);
    rootSlugs = allSlugs;

    return {
      label: label,
      slug: slug,
      values: _.orderBy(values, ["doc_count", "value"], ["desc", "asc"]),
    };
  }));
};
