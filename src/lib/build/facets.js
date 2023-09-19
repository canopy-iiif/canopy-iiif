const _ = require("lodash");
const fs = require("fs");
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

exports.buildFacets = async (labels, metadata, manifestData, baseUrl) => {
  const unique = _.uniqBy(metadata, "value");
  const counts = _.countBy(metadata, "value");

  let rootSlugs = {};

  const canopyFacets = (facets = labels.map((label) => {
    const values = getFacetValues(label, unique, counts, metadata);

    const { slug, allSlugs } = getUniqueSlug(label, rootSlugs);
    rootSlugs = allSlugs;

    return {
      label: label,
      slug: slug,
      values: _.orderBy(values, ["doc_count", "value"], ["desc", "asc"]),
    };
  }));

  // static api directory
  const api = `public/api`;

  try {
    // create api directory if it doesn't exist
    if (!fs.existsSync(api)) fs.mkdirSync(api);

    // create facet directory if it doesn't exist
    if (!fs.existsSync(`${api}/facet`)) fs.mkdirSync(`${api}/facet`);

    canopyFacets.forEach((label) => {
      const labelDirectory = `${api}/facet/${label.slug}`;
      const labelCollection = this.buildFacetLabelCollection(label, baseUrl);

      if (!fs.existsSync(labelDirectory)) fs.mkdirSync(labelDirectory);
      fs.writeFile(
        `${labelDirectory}.json`,
        JSON.stringify(labelCollection),
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );

      label.values.forEach((value) => {
        const valueDirectory = `${labelDirectory}/${value.slug}`;
        const valueCollection = this.buildFacetValueCollection(
          value,
          { label: label.label, slug: label.slug },
          baseUrl,
          manifestData
        );

        fs.writeFile(
          `${valueDirectory}.json`,
          JSON.stringify(valueCollection),
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
      });
    });
  } catch (err) {
    console.error(err);
  }

  return canopyFacets;
};

exports.buildFacetLabelCollection = (label, baseUrl) => {
  const items = label.values.map((value) => {
    return {
      id: `${baseUrl}/api/facet/${label.slug}/${value.slug}.json`,
      type: "Collection",
      label: { none: [value.value] },
      summary: { none: [`${value.doc_count} Items`] },
      homepage: [
        {
          id: `${baseUrl}/search?${label.slug}=${value.slug}`,
          type: "Text",
          label: { none: [value.value] },
        },
      ],
    };
  });

  const collection = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${baseUrl}/api/facet/${label.slug}.json`,
    type: "Collection",
    label: { none: [label.label] },
    summary: { none: [`${label.values.length}`] },
    items: items,
  };

  return collection;
};

exports.buildFacetValueCollection = (value, label, baseUrl, manifests) => {
  const items = value.docs.map((doc) => {
    const item = manifests.find((manifest) => manifest.index === doc);
    return {
      id: item.id,
      type: "Manifest",
      label: item.label,
      thumbnail: item.thumbnail,
      homepage: [
        {
          id: `${baseUrl}/works/${item.slug}`,
          type: "Text",
          label: item.label,
        },
      ],
    };
  });

  const collection = {
    "@context": "https://iiif.io/api/presentation/3/context.json",
    id: `${baseUrl}/api/facet/${label.slug}/${value.slug}.json`,
    type: "Collection",
    label: {
      none: [value.value],
    },
    items,
    partOf: [
      { id: `${baseUrl}/api/facet/${label.slug}.json`, type: "Collection" },
    ],
    summary: {
      none: [label.label],
    },
    homepage: [
      {
        id: `${baseUrl}/search?${label.slug}=${value.slug}`,
        type: "Text",
        label: { none: [value.value] },
      },
    ],
  };

  return collection;
};
