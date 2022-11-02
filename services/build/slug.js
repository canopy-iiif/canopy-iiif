const slugify = require("slugify");

const config = {
  lower: true,
  strict: true,
  trim: true,
};

function getSlug(text) {
  return limit(slugify(text, config), 100);
}

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}

module.exports = { getSlug };
