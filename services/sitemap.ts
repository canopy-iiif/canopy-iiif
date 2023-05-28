import {canopyManifests} from "@/services/constants/canopy";
import { CanopyEnvironment } from "@/types/canopy";

const generateSitemap = async () => {
  const manifests = canopyManifests();
  const { url } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const slugs = manifests.map((manifest) => `${url}/${manifest.slug}`);
  console.log(slugs);
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${slugs
    .map(({ slug }) => {
      return `
       <url>
           <loc>${`${url}/${slug}`}</loc>
       </url>
     `;
    })
    .join('')}
   </urlset>
 `;
}

export { generateSitemap };