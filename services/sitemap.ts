import {canopyManifests} from "@/services/constants/canopy";
import { CanopyEnvironment } from "@/types/canopy";

const generateSitemap = async () => {
  const manifests = canopyManifests();
  const { url } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${manifests.map(
       (manifest) => `<url>${url}/${manifest.slug}</url>`
  )
    .join('')}
   </urlset>
 `;
}

export { generateSitemap };