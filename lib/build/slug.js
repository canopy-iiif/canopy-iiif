const slugify = require("slugify");

const config = {
  lower: true,
  strict: true,
  trim: true,
};

function appendNumber(slug, number) {
  return number > 1 ? `${slug}-${number}` : slug;
}

function getNumber(number) {
  return number ? number + 1 : 1;
}

function getSlug(text) {
  return limit(slugify(text, config), 100);
}

function getUniqueSlug(text, allSlugs) {
  const slug = getSlug(text);
  const number = getNumber(allSlugs[slug]);
  return {
    slug: appendNumber(slug, number),
    allSlugs: {
      ...allSlugs,
      [slug]: number,
    },
  };
}

function limit(string = "", limit = 0) {
  return string.substring(0, limit);
}

module.exports = { getSlug, getUniqueSlug };
