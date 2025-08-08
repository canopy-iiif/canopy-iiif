import { IIIFExternalWebResource, Manifest } from "@iiif/presentation-3";

import COLLECTIONS from "@.canopy/collections.json";
import { CanopyEnvironment } from "@customTypes/canopy";
import { FrontMatterContentItem } from "@src/customTypes/content";
import MANIFESTS from "@.canopy/manifests.json";
import { getLabel } from "./iiif/label";
import { getRandomItem } from "./utils";

const root = COLLECTIONS.find((collection) => collection.depth === 0);
const label = root?.label;
const fallbackImage = "/images/image.svg";

const buildManifestSEO = async (manifest: Manifest, path: string) => {
  const { url, basePath } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const title = getLabel(manifest.label).join(" - ");
  // @ts-ignore
  const manifestData = MANIFESTS.find((item) => item.id === manifest.id);
  const thumbnails = (manifestData?.thumbnail as any[]) || [];

  return {
    title: `${title} - ${getLabel(label).join(" - ")}`,
    ...(manifest.summary && {
      description: getLabel(manifest.summary).join(" - "),
    }),
    canonical: `${baseUrl}${path}`,
    openGraph: {
      images: thumbnails.length > 0
        ? thumbnails.map((item: any) => ({
            url: item.id || fallbackImage,
            type: item.format || "image/jpeg",
            width: item.width || 600,
            height: item.height || 400,
            alt: title || "Fallback Image Indicating Manifest is Missing a Thumbnail",
          }))
        : [{ url: fallbackImage, type: "image/jpeg", width: 600, height: 400, alt: "Fallback Image Indicating Manifest is Missing a Thumbnail" }],
    },
  };
};

const buildContentSEO = (frontMatter: FrontMatterContentItem, path: string) => {
  const { url, basePath } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const baseUrl = basePath ? `${url}${basePath}` : url;
  const title = frontMatter?.title || "";
  const description = frontMatter?.description;

  return {
    title: `${title} - ${getLabel(label).join(" - ")}`,
    ...(description && { description }),
    canonical: `${baseUrl}${path}`,
  };
};

const buildDefaultSEO = (config: any) => {
  const summary = config.summary ? config.summary : "";
  const siteTitle = getLabel(label).join(" - ");
  const title = config.pageTitle
    ? `${config.pageTitle} - ${siteTitle}`
    : siteTitle;
  const description = getLabel(summary).join(" - ");
  const featured = config.featured || [];

  const candidates = featured
    .map((item: any) => {
      // @ts-ignore
      const manifest = MANIFESTS.find((manifest: any) => manifest?.id === item);
      return manifest?.thumbnail?.[0];
    })
    .filter(Boolean);

  const defaultImage = getRandomItem(candidates as IIIFExternalWebResource[]) || {
    id: fallbackImage,
    format: "image/jpeg",
    width: 600,
    height: 400,
  };

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: defaultImage.id || fallbackImage,
          type: defaultImage.format || "image/jpeg",
          width: defaultImage.width || 600,
          height: defaultImage.height || 400,
          alt: title || "Image Indicating Manifest is Missing a Thumbnail",
        },
      ],
    },
  };
};

export { buildContentSEO, buildDefaultSEO, buildManifestSEO };
