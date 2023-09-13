import { CanopyEnvironment } from "@/types/canopy";
import MANIFESTS from "@/.canopy/manifests.json";
import { Manifest } from "@iiif/presentation-3";
import { getLabel } from "./iiif/label";
import { getRepresentativeImage } from "./iiif/image";

const buildManifestSEO = async (manifest: Manifest, path: string) => {
  const { url, label, basePath } = process.env
    ?.CANOPY_CONFIG as unknown as CanopyEnvironment;
  const baseUrl = basePath ? `${url}${basePath}` : url;

  const images = await getRepresentativeImage(manifest);
  const title = getLabel(manifest.label).join(" - ");

  return {
    title: `${title} - ${getLabel(label).join(" - ")}`,
    description: getLabel(manifest.summary).join(" - "),
    canonical: `${baseUrl}${path}`,
    openGraph: {
      images: images.map((item: any) => {
        return {
          url: item.id,
          type: item.format,
          width: item.width,
          height: item.height,
          alt: title,
        };
      }),
    },
  };
};

const buildDefaultSEO = (config: any) => {
  const title = getLabel(config.label).join(" - ");
  const description = getLabel(config.summary).join(" - ");
  const featured = config.featured;

  const images = featured
    .map((item: any) => {
      const manifest = MANIFESTS.find((manifest: any) => manifest?.id === item);
      return manifest?.thumbnail[0];
    })
    .filter((item: any) => item);

  return {
    title,
    description,
    openGraph: {
      images: images.map((item: any) => {
        if (!item) return;

        return {
          url: item?.id,
          type: item?.format,
          width: item?.width,
          height: item?.height,
          alt: title,
        };
      }),
    },
  };
};

export { buildDefaultSEO, buildManifestSEO };
