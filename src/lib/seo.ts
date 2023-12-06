import { IIIFExternalWebResource, Manifest } from "@iiif/presentation-3";

import COLLECTIONS from "@.canopy/collections.json";
import { CanopyEnvironment } from "@customTypes/canopy";
import { FrontMatterContentItem } from "@src/customTypes/content";
import MANIFESTS from "@.canopy/manifests.json";
import { getLabel } from "./iiif/label";
import { getRandomItem } from "./utils";

const root = COLLECTIONS.find((collection) => collection.depth === 0);
const label = root?.label;

const buildManifestSEO = async (manifest: Manifest, path: string) => {
  const { url, basePath } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const title = getLabel(manifest.label).join(" - ");
  const images = MANIFESTS.find((item) => item.id === manifest.id)
    ?.thumbnail as any[];

  return {
    title: `${title} - ${getLabel(label).join(" - ")}`,
    ...(manifest.summary && {
      description: getLabel(manifest.summary).join(" - "),
    }),
    canonical: `${baseUrl}${path}`,
    openGraph: {
      images: images?.map((item: any) => {
        return {
          url: item.id || "",
          type: item.format || "",
          width: item.width || 200,
          height: item.height || 200,
          alt: title || "",
        };
      }),
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
  const featured = config.featured;

  const candidates = featured?.map((item: any) => {
    const manifest = MANIFESTS.find((manifest: any) => manifest?.id === item);
    const thumbnail = manifest?.thumbnail as any[];
    if (thumbnail?.length > 0) return thumbnail[0];
  });

  const defaultImage = getRandomItem(candidates as IIIFExternalWebResource[]);

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: defaultImage?.id || "",
          type: defaultImage?.format || "",
          width: defaultImage?.width || 200,
          height: defaultImage?.height || 200,
          alt: title || "",
        },
      ],
    },
  };
};

export { buildContentSEO, buildDefaultSEO, buildManifestSEO };
