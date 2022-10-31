const slugify = require("slugify");

const config = {
  lower: true,
  strict: true,
  trim: true,
};

function getSlug(text) {
  return slugify(text, config);
}

module.exports = { getSlug };
