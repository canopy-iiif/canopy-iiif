const { getLabel } = require("../iiif/label");

exports.buildIndexData = (manifests) => {
  return manifests.map((manifest) => {
    const { id, label, summary } = manifest;
    return {
      id: id,
      ...(label && { label: getLabel(label).join(" ") }),
      ...(summary && { summary: getLabel(summary).join(" ") }),
    };
  });
};
