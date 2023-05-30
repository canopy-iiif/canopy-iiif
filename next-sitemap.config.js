const {
  getOptions,
} = require("./services/build/config");

const options = getOptions();

module.exports = {

  siteUrl: options.url,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true, // (optional)
  sitemapSize: 100,
}

