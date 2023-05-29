import {canopyManifests} from "@/services/constants/canopy";
import { CanopyEnvironment } from "@/types/canopy";

function buildUrls(urls, domain, location, divider='') {
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];
  return `
    ${urls.map(
      (url) => `<url>
        <loc>${domain}${divider}${url[location]}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`
    ).join('')}
  `
}

const generateSitemap = async () => {
  const manifests = canopyManifests();
  const { url } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const navItems = process.env.CANOPY_CONFIG.navigation;
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];
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
}

export { generateSitemap };