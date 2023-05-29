import { canopyManifests } from "@/services/constants/canopy";
import { CanopyEnvironment } from "@/types/canopy";

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function buildUrl(url, domain, location, currentDate) {
  return `<url>
    <loc>${domain}/${url[location]}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
}

function buildUrls(urls, domain, location, divider = '') {
  const currentDate = formatDate(new Date());
  return urls
    .map((url) => buildUrl(url, domain, location, currentDate))
    .join('');
}

const generateSitemap = async () => {
  const manifests = canopyManifests();
  const { url } = process.env.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const navItems = process.env.CANOPY_CONFIG.navigation;
  const currentDate = formatDate(new Date());
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${url}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
     </url>
     ${buildUrls(navItems.primary, url, "path")}
     ${buildUrls(navItems.about, url, "path")}
     ${buildUrls(manifests, url, "slug", '/')}
   </urlset>
 `;
};

export { generateSitemap };
