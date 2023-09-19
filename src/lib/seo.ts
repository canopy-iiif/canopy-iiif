import { CanopyEnvironment } from "@/types/canopy";
import MANIFESTS from "@/.canopy/manifests.json";
import { Manifest } from "@iiif/presentation-3";
import { getLabel } from "./iiif/label";
import { getRandomItem } from "./utils";

const buildManifestSEO = async (manifest: Manifest, path: string) => {
  const { url, label, basePath } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const title = getLabel(manifest.label).join(" - ");
  const images = MANIFESTS.find((item) => item.id === manifest.id)
    ?.thumbnail as any[];

  return {
    title: `${title} - ${getLabel(label).join(" - ")}`,
    description: getLabel(manifest.summary).join(" - "),
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

const buildDefaultSEO = (config: any) => {
  const label = config.label ? config.label : "";
  const summary = config.summary ? config.summary : "";

  const title = getLabel(label).join(" - ");
  const description = getLabel(summary).join(" - ");
  const featured = config.featured;

  const candidates = featured.map((item: any) => {
    const manifest = MANIFESTS.find((manifest: any) => manifest?.id === item);
    const thumbnail = manifest?.thumbnail as any[];
    if (thumbnail?.length > 0) return thumbnail[0];
  });

  const defaultImage = getRandomItem(candidates);

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

export { buildDefaultSEO, buildManifestSEO };
