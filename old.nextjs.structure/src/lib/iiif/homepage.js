/**
 *
 */

exports.getHomepageBySlug = (slug = "", label = "", baseUrl) => {
  return [
    {
      id: `${baseUrl}/works/${slug}`,
      type: "Text",
      label: label,
    },
  ];
};
