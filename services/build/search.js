const { getLabel, getEntries } = require("../iiif/label");

exports.buildIndexData = (manifests) => {
  return manifests.map((manifest) => {
    const { index, label, summary, metadata } = manifest;
    return {
      id: index,
      ...(label && { label: getLabel(label).join(" ") }),
      ...(summary && { summary: getLabel(summary).join(" ") }),
      ...(metadata && {
        metadata: metadata
          .map((entry) => getEntries(entry.value).join(" "))
          .join(" "),
      }),
    };
  });
};
