/**
 *
 */

exports.getHomepageBySlug = (slug = "", label = "") => {
  return [
    {
      id: slug,
      type: "Text",
      label: label,
    },
  ];
};
